package com.efraiser.test.common.util;

import de.innosystec.unrar.Archive;
import de.innosystec.unrar.exception.RarException;
import de.innosystec.unrar.rarfile.FileHeader;
import org.apache.commons.logging.Log;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class RarFileUtil {

	public static void unrar(String srcPath, String unrarPath) throws RarException, IOException {
		unrar(new File(srcPath), unrarPath);
	}

	public static void unrar(File srcFile, String unrarPath) throws RarException, IOException {
		if (null == unrarPath || "".equals(unrarPath)) {
			unrarPath = srcFile.getParentFile().getPath();
		}
		FileOutputStream fileOut;
		File file;
		Archive rarfile = new Archive(srcFile);
		FileHeader entry = rarfile.nextFileHeader();
		while (entry != null) {

			String entrypath = "";
			if (entry.isUnicode()) {// 解決中文乱码
				entrypath = entry.getFileNameW().trim();
			} else {
				entrypath = entry.getFileNameString().trim();
			}

			entrypath = entrypath.replaceAll("\\\\", "/");

			file = new File(unrarPath + "/" + entrypath);
			if (entry.isDirectory()) {
				file.mkdirs();
			} else {
				File parent = file.getParentFile();
				if (parent != null && !parent.exists()) {
					parent.mkdirs();
				}
				fileOut = new FileOutputStream(file);
				rarfile.extractFile(entry, fileOut);
				fileOut.close();
			}
			entry = rarfile.nextFileHeader();
		}
		rarfile.close();

	}

}