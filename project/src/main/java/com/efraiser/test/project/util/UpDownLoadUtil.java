package com.efraiser.test.project.util;

import com.efraiser.test.common.util.DateUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.UUID;

/**
 * 上传下载工具类
 */
public class UpDownLoadUtil {

    private static Logger log = LoggerFactory.getLogger(UpDownLoadUtil.class);

    /**
     * 文件保存的随机名
     *
     * @return
     */
    public static String fileSaveRandomName() {
        String nowTimeStr = DateUtil.format(new Date(), "yyyyMMddHHmmss");
        String uuid = UUID.randomUUID().toString();

        return nowTimeStr + uuid.substring(0, 8);
    }


    /**
     * 文件保存随机名
     *
     * @param fileRealName 源文件名
     * @return
     */
    public static String fileSaveRandomName(String fileRealName) {
        String nowTimeStr = DateUtil.format(new Date(), "yyyyMMddHHmmss");
        String uuid = UUID.randomUUID().toString();

        String randomName = nowTimeStr + uuid.substring(0, 8);

        String fileSaveName = randomName;

        if (fileRealName.contains(".")) {
            String[] names = fileRealName.split("[.]");
            //添加后缀
            fileSaveName = randomName + "." + names[names.length - 1];
        }

        return fileSaveName;

    }

    /**
     * 上传文件保存
     * @param file 上传文件
     * @param filePath 文件保存路径
     * @return
     * @throws IOException
     */
    public static String uploadSaveFile(MultipartFile file, String filePath) throws IOException {
        // 获取原始名字
        String fileName = file.getOriginalFilename();

        // 文件保存路径
       // String filePath = localConfig.getProperties().getTempStringPath();

        // 文件重命名，防止重复
        String fileSaveName = filePath + "/" + UpDownLoadUtil.fileSaveRandomName(fileName);

        // 文件对象
        File saveFile = new File(fileSaveName);
        // 判断路径是否存在，如果不存在则创建
        if (!saveFile.getParentFile().exists()) {
            saveFile.getParentFile().mkdirs();
        }
        // 保存到服务器中
        file.transferTo(saveFile);

        return fileSaveName;
    }


    public static void downloadFile(String filePath, HttpServletResponse response) throws IOException {

        String filePathTrans = new String(filePath.getBytes("ISO-8859-1"), "UTF-8");
        filePath = java.net.URLDecoder.decode(filePathTrans, "UTF-8");
        File file = new File(filePath);

        if (file.exists()) { //判断文件父目录是否存在

//            response.setContentType("application/vnd.ms-excel;charset=UTF-8");
//            response.setCharacterEncoding("UTF-8");
//            // response.setContentType("application/force-download");
//            response.setHeader("Content-Disposition", "attachment;fileName=" + java.net.URLEncoder.encode(filename, "UTF-8"));
//
//            response.setContentType("multipart/form-data");
            response.addHeader("Content-Disposition",
                    "attachment;filename=" + new String(file.getName().getBytes("utf-8"), "ISO8859_1"));
            int fileLength = (int) file.length();
            response.setContentLength(fileLength);


            if (fileLength != 0) {
                /* 创建输入流 */
                InputStream inStream = null;
                ServletOutputStream servletOS = null;
                try {
                    inStream = new FileInputStream(file);
                    byte[] buf = new byte[4096];
                    /* 创建输出流 */
                    servletOS = response.getOutputStream();
                    int readLength;
                    while (((readLength = inStream.read(buf)) != -1)) {
                        servletOS.write(buf, 0, readLength);
                    }
                } catch (Exception e) {
                    log.error("downLoadFile() error! ", e);
                } finally {
                    try {
                        inStream.close();
                    } catch (IOException e) {
                        log.error("downLoadFile() error!", e);
                    }
                    try {
                        servletOS.flush();
                        servletOS.close();
                    } catch (IOException e) {
                        log.error("downLoadFile() error! ", e);
                    }

                }
            }
        }
    }

    //    /**
//     * 实现多文件上传
//     * */
//    @RequestMapping(value="multifileUpload",method=RequestMethod.POST)
//    public @ResponseBody String multifileUpload(HttpServletRequest request){
//
//        List<MultipartFile> files = ((MultipartHttpServletRequest)request).getFiles("fileName");
//
//        if(files.isEmpty()){
//            return "false";
//        }
//
//        String path = "F:/test" ;
//
//        for(MultipartFile file:files){
//            String fileName = file.getOriginalFilename();
//            int size = (int) file.getSize();
//            System.out.println(fileName + "-->" + size);
//
//            if(file.isEmpty()){
//                return "false";
//            }else{
//                File dest = new File(path + "/" + fileName);
//                if(!dest.getParentFile().exists()){ //判断文件父目录是否存在
//                    dest.getParentFile().mkdir();
//                }
//                try {
//                    file.transferTo(dest);
//                }catch (Exception e) {
//                    e.printStackTrace();
//                    return "false";
//                }
//            }
//        }
//        return "true";
//    }

}


