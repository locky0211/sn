package com.efraiser.test.common.util;

import org.apache.tools.ant.BuildException;
import org.apache.tools.ant.Project;
import org.apache.tools.ant.taskdefs.Expand;
import org.apache.tools.ant.taskdefs.Zip;
import org.apache.tools.ant.types.FileSet;

import java.io.File;

public class ZipFileUtil {
	public final static String encoding = "GBK";

	// 压缩
	public static void zip(String srcPathname, String zipFilepath) throws BuildException, RuntimeException {
		zip(srcPathname, zipFilepath, null, null);
	}// 压缩

	public static void zip(String srcPathname, String zipFilepath, String include, String exclude) throws BuildException, RuntimeException {
		File file = new File(srcPathname);
		if (!file.exists())
			throw new RuntimeException("source file or directory " + srcPathname + " does not exist.");

		Project proj = new Project();
		FileSet fileSet = new FileSet();
		fileSet.setProject(proj);
		// 判断是目录还是文件
		if (file.isDirectory()) {
			fileSet.setDir(file);
			// ant中include(包含)/exclude(排除)规则在此都可以使用
			if (StrUtil.isNotNull(include)) {
				fileSet.setIncludes("**/*.xls");
			}
			if (StrUtil.isNotNull(exclude)) {
				fileSet.setExcludes("**/*.txt");
			}

		} else {
			fileSet.setFile(file);
		}

		Zip zip = new Zip();
		zip.setProject(proj);
		zip.setDestFile(new File(zipFilepath));
		zip.addFileset(fileSet);
		zip.setEncoding(encoding);
		zip.execute();
	}

	// 解压缩
	public static void unzip(String zipFilepath, String destDir) throws BuildException, RuntimeException {
		if (!new File(zipFilepath).exists())
			throw new RuntimeException("zip file " + zipFilepath + " does not exist.");
		Project proj = new Project();
		Expand expand = new Expand();
		expand.setProject(proj);
		expand.setTaskType("unzip");
		expand.setTaskName("unzip");
		expand.setEncoding(encoding);

		expand.setSrc(new File(zipFilepath));
		expand.setDest(new File(destDir));
		expand.execute();
	}

	public static void main(String[] args) {
		unzip("D:\\123.zip", "D:\\ttttt");
//		zip("D:\\123", "D:\\323232.zip");
	}
}
