package com.efraiser.test.project.actiion.updownload;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.project.util.UpDownLoadUtil;
import com.efraiser.test.project.actiion.BaseController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;

@Controller
@RequestMapping("upload")
public class UploadFilesController extends BaseController {
    private static Logger log = LoggerFactory.getLogger(UploadFilesController.class);


    @Autowired
    private LocalConfig localConfig;

    @RequestMapping("uploadFile")
    @ResponseBody
    public Object uploadFile(@RequestParam("file") MultipartFile file) {

        // 获取原始名字
        String fileName = file.getOriginalFilename();
        String fileSaveName = "";
        try {
            fileSaveName = UpDownLoadUtil.uploadSaveFile(file, localConfig.getProperties().getTempStringPath());
        } catch (Exception e) {
            return requestResult(false, "");
        }

        log.debug("上传文件:[{}] 上传后的临时文件:[{}]", fileName, fileSaveName);
        return requestResult(true, fileSaveName);
    }


    @RequestMapping("uploadFilesRetrunFileName")
    @ResponseBody
    public Object uploadFilesRetrunFileName(@RequestParam("file") MultipartFile file) {

        // 获取原始名字
        String fileName = file.getOriginalFilename();
        String fileSaveName = "";
        try {
            fileSaveName = UpDownLoadUtil.uploadSaveFile(file, localConfig.getProperties().getTempStringPath());
        } catch (Exception e) {
            return requestResult(false, "");
        }

        log.debug("上传文件:[{}] 上传后的临时文件:[{}]", fileName, fileSaveName);
        return requestResult(true, fileName + ";" + fileSaveName);

    }

    @RequestMapping("/downLoadFile")
    public void downLoadFile(String filePath, HttpServletResponse response) throws IOException {

        UpDownLoadUtil.downloadFile(filePath, response);
    }


    @RequestMapping("uploadFileNew")
    @ResponseBody
    public Object uploadFileNew(@RequestParam("file") MultipartFile file) {


        // 获取原始名字
        String fileName = file.getOriginalFilename();
        String fileSaveName = "";
        try {
            fileSaveName = UpDownLoadUtil.uploadSaveFile(file, localConfig.getProperties().getTempStringPath());
        } catch (Exception e) {
            return requestResult(false, "");
        }

        log.debug("上传文件:[{}] 上传后的临时文件:[{}]", fileName, fileSaveName);
        return requestResult(false, "");
    }

}
