package com.efraiser.test.common.util;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class FileUtil {
	/**
	 * 写文件
	 * 
	 * @param f
	 * @param content
	 */
	public static void writeFile(File f, String content) {
		writeFile(f, content, "utf-8");
	}

	/**
	 * 写文件
	 * 
	 * @param f
	 * @param content
	 */
	public static void writeFile(File f, String content, String encode) {
		try {
			if (!f.exists()) {
				f.createNewFile();
			}
			OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(f), encode);
			BufferedWriter utput = new BufferedWriter(osw);
			utput.write(content);
			utput.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 写文件
	 * 
	 * @param path
	 * @param content
	 */
	public static void writeFile(String path, String content, String encode) {
		File f = new File(path);
		writeFile(f, content, encode);
	}

	/**
	 * 写文件
	 * 
	 * @param path
	 * @param content
	 */
	public static void writeFile(String path, String content) {
		File f = new File(path);
		writeFile(f, content, "utf-8");
	}

	/**
	 * 写文件
	 * 
	 * @param path
	 * @param content
	 */
	public static void writeFile(String path, InputStream inputStream, String encode) {
		String output = "";
		BufferedReader input = null;
		try {
			InputStreamReader isr = new InputStreamReader(inputStream, encode);
			input = new BufferedReader(isr);
			StringBuffer buffer = new StringBuffer();
			String text;
			while ((text = input.readLine()) != null)
				buffer.append(text + "\n");
			output = buffer.toString();

		} catch (IOException ioException) {
			System.err.println("File Error！");
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		writeFile(path, output, "utf-8");
	}

	/**
	 * 读取文件
	 * 
	 * @param file
	 * @return
	 */
	public static String readFile(File file) {
		return readFile(file, "UTF-8");
	}

	/**
	 * 读取文件
	 * 
	 * @param file
	 * @return
	 */
	public static String readFile(File file, String encode) {
		String output = "";

		if (file.exists()) {
			if (file.isFile()) {
				BufferedReader input = null;
				try {
					InputStreamReader isr = new InputStreamReader(new FileInputStream(file), encode);
					input = new BufferedReader(isr);
					StringBuffer buffer = new StringBuffer();
					String text;
					while ((text = input.readLine()) != null)
						buffer.append(text + "\n");
					output = buffer.toString();

				} catch (IOException ioException) {
					System.err.println("File Error！");
				} finally {
					if (input != null) {
						try {
							input.close();
						} catch (IOException e) {
							e.printStackTrace();
						}
					}
				}
			} else if (file.isDirectory()) {
				String[] dir = file.list();
				output += "Directory contents：\n";
				for (int i = 0; i < dir.length; i++) {
					output += dir[i] + "\n";
				}
			}

		} else {
			System.err.println("Does not exist！");
		}

		return output;
	}

	/**
	 * 读取文件
	 * 
	 * @param fileName
	 * @return
	 */
	public static String readFile(String fileName, String encode) {
		File file = new File(fileName);
		return readFile(file, encode);
	}

	/**
	 * 读取文件
	 * 
	 * @param fileName
	 * @return
	 */
	public static String readFile(String fileName) {
		return readFile(fileName, "utf-8");
	}

	/**
	 * 获取目录下所有文件
	 * 
	 * @param folder
	 * @return
	 */
	public static List<File> getFiles(String folder) {
		File file = new File(folder);
		List<File> files = new ArrayList<File>();
		if (file.exists()) {
			File[] sonFiles = file.listFiles();
			if (sonFiles != null && sonFiles.length > 0) {
				for (int i = 0; i < sonFiles.length; i++) {
					if (!sonFiles[i].isDirectory()) {
						files.add(sonFiles[i]);
					}
				}
			}
		}
		return files;
	}

	/**
	 * 获取目录下所有文件夹
	 * 
	 * @param folder
	 * @return
	 */
	public static List<File> getFolders(String folder) {
		File file = new File(folder);
		List<File> files = new ArrayList<File>();
		if (file.exists()) {
			File[] sonFiles = file.listFiles();
			if (sonFiles != null && sonFiles.length > 0) {
				for (int i = 0; i < sonFiles.length; i++) {
					if (sonFiles[i].isDirectory()) {
						files.add(sonFiles[i]);
					}
				}
			}
		}
		return files;
	}

	/**
	 * 获取文件夹下所有的文件,包含子目录
	 * 
	 * @param floderPath
	 * @return
	 */
	public static List<File> getFolderFiles(String floderPath) {
		List<File> files = new ArrayList<File>();
		findAllFiles(floderPath, files);
		return files;
	}

	private static void findAllFiles(String floderPath, List<File> files) {
		File file = new File(floderPath);
		if (file.isFile()) {
			files.add(file);
		} else {
			if (file.isDirectory()) {
				String[] fileNames = file.list();
				if (fileNames != null) {
					for (String fileName : fileNames) {
						String filePath = floderPath + File.separator + fileName;
						findAllFiles(filePath, files);
					}
				}
			}
		}
	}

	/**
	 * 判断是否有子目录
	 * 
	 * @param folder
	 * @return
	 */
	public static boolean hasSonFolder(String folder) {
		File file = new File(folder);
		return hasSonFolder(file);
	}

	/**
	 * 判断是否有子目录
	 * 
	 * @param folder
	 * @return
	 */
	public static boolean hasSonFolder(File file) {
		if (file.exists()) {
			File[] sonFiles = file.listFiles();
			if (sonFiles != null && sonFiles.length > 0) {
				for (int i = 0; i < sonFiles.length; i++) {
					if (sonFiles[i].isDirectory()) {
						return true;
					}
				}
			}
		}
		return false;
	}

	/**
	 * 创建目录
	 * 
	 * @param folder
	 */
	public static void mkdir(String folder) {
		File file = new File(folder);
		if (!file.exists()) {
			file.mkdir();
		}
	}

	/**
	 * 复制文件
	 * 
	 * @param src
	 * @param dst
	 */
	public static void copy(File src, File dst) {
		try {
			int BUFFER_SIZE = 16 * 1024;
			InputStream in = null;
			OutputStream out = null;
			try {
				in = new BufferedInputStream(new FileInputStream(src), BUFFER_SIZE);
				out = new BufferedOutputStream(new FileOutputStream(dst), BUFFER_SIZE);
				byte[] buffer = new byte[BUFFER_SIZE];
				while (in.read(buffer) > 0) {
					out.write(buffer);
				}
			} finally {
				if (null != in) {
					in.close();
				}
				if (null != out) {
					out.close();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 复制文件夹
	 * 
	 * @param sourceDir
	 * @param targetDir
	 * @throws IOException
	 */
	public static void copyDirectiory(String sourceDir, String targetDir) throws IOException {
		// 新建目标目录
		File targetFolder = new File(targetDir);
		if (!targetFolder.exists()) {
			targetFolder.mkdirs();
		}
		// 获取源文件夹当前下的文件或目录
		File[] file = (new File(sourceDir)).listFiles();
		for (int i = 0; i < file.length; i++) {
			if (file[i].isFile()) {
				// 源文件
				File sourceFile = file[i];
				// 目标文件
				File targetFile = new File(new File(targetDir).getAbsolutePath() + File.separator + file[i].getName());
				copy(sourceFile, targetFile);
			}
			if (file[i].isDirectory()) {
				// 准备复制的源文件夹
				String dir1 = sourceDir + "/" + file[i].getName();
				// 准备复制的目标文件夹
				String dir2 = targetDir + "/" + file[i].getName();
				copyDirectiory(dir1, dir2);
			}
		}
	}

	/**
	 * 获取扩展名
	 */
	public static String getExt(File src) {
		if (src != null) {
			String name = src.getName();
			return name.substring(name.lastIndexOf("."), name.length());
		}
		return "";
	}

	/**
	 * 获取扩展名
	 */
	public static String getExt(String src) {
		if (src != null) {
			return src.substring(src.lastIndexOf("."), src.length());
		}
		return "";
	}

	/**
	 * 删除指定文件
	 * 
	 * @param path
	 */
	public static void del(String path) {
		File file = new File(path);
		deleteFile(file);
	}

	/**
	 * 递归删除文件夹下所有文件
	 * 
	 * @param file
	 */
	public static void deleteFile(File file) {
		if (file.exists()) { // 判断文件是否存在
			if (file.isFile()) { // 判断是否是文件
				file.delete(); // delete()方法 你应该知道 是删除的意思;
			} else if (file.isDirectory()) { // 否则如果它是一个目录
				File files[] = file.listFiles(); // 声明目录下所有的文件 files[];
				for (int i = 0; i < files.length; i++) { // 遍历目录下所有的文件
					deleteFile(files[i]); // 把每个文件 用这个方法进行迭代
				}
			}
			file.delete();
		}
	}

	/**
	 * 创建一个文件，如果文件存在则不进行创建。
	 * 
	 * @param path
	 * @throws Exception
	 */
	public static File createFile(String path) {
		File file = new File(path);
		if (file.isFile() || file.isDirectory()) {
			return file;
		} else {
			try {
				createFile(file);
			} catch (Exception e) {
				e.printStackTrace();
				return null;
			}
		}
		return file;
	}

	/**
	 * 创建文件及其父目录。
	 * 
	 * @param file
	 * @throws Exception
	 */
	private static void createFile(File file) throws Exception {
		if (!file.getParentFile().exists()) {
			if (!file.getParentFile().mkdirs()) {
				throw new Exception("create parent directory failure!");
			}
		}
		if (!file.createNewFile()) {
			throw new Exception("create file failure!");
		}
	}

}
