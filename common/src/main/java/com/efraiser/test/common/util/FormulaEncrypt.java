package com.efraiser.test.common.util;


import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.nutz.Strings;

public class FormulaEncrypt extends Strings {


    //加密公式
    public static String getFormulaEnctypt(String formula) {

        String ef = LocalConfig.getInstance().getProperties().getEf();

        String[] arr = formula.split("_");
        if (arr.length == 2 && arr[0].equals("em")) {

        } else {
            //String ef = Mvcs.getIoc().get(String.class, "EF");
            if ("true".equals(ef)) {
                byte[] encryptResult = AES.encrypt(formula);
                String strEncryptResult = AES.encodeToString(encryptResult);
                formula = "em_" + strEncryptResult;
            }
        }
        return formula;
    }

    //强制加密公式
    public static String getFormulaEnctypt1(String formula) {
        String[] arr = formula.split("_");
        byte[] encryptResult = AES.encrypt(formula);
        String strEncryptResult = AES.encodeToString(encryptResult);
        formula = "em_" + strEncryptResult;
        return formula;
    }

    //解密公式
    public static String getFormulaDecrypt(String formula) {
        String ef = LocalConfig.getInstance().getProperties().getEf();

        String[] arr = formula.split("_");
        if (arr.length == 2 && arr[0].equals("em")) {
            //String ef = Mvcs.getIoc().get(String.class, "EF");
            if ("true".equals(ef)) {
                byte[] byBuffer = AES.decode(arr[1]);
                byte[] decryptResult = AES.decrypt(byBuffer);
                return new String(decryptResult);
            }
        }
        return formula;
    }

    //强制解密公式
    public static String getFormulaDecrypt1(String formula) {
        String[] arr = formula.split("_");
        if (arr.length == 2 && arr[0].equals("em")) {
            byte[] byBuffer = AES.decode(arr[1]);
            byte[] decryptResult = AES.decrypt(byBuffer);
            return new String(decryptResult);
        }
        return formula;

    }

    //加密搜索关键字
    public static String getCheckEnctypt(String formula) {
        String ef = LocalConfig.getInstance().getProperties().getEf();

        String[] arr = formula.split("_");
        if (arr.length == 2 && arr[0].equals("em")) {

        } else {
            //String ef = Mvcs.getIoc().get(String.class, "EF");
            if ("true".equals(ef)) {
                byte[] encryptResult = AES.encrypt(formula);
                String strEncryptResult = AES.encodeToString(encryptResult);
                return strEncryptResult;
            }
        }
        return formula;
    }
}
