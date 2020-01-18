package com.efraiser.test.common.util;

import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

public class AES {

	private static String password="uwdR%4ty^";
	
	private static final char[] DIGITS = {
            '0', '1', '2', '3', '4', '5', '6', '7',
            '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
    };

    public static String encodeToString(byte[] bytes) {
        char[] encodedChars = encode(bytes);
        return new String(encodedChars);
    }

    public static char[] encode(byte[] data) {
        int l = data.length;
        char[] out = new char[l << 1];
        // two characters form the hex value.
        for (int i = 0, j = 0; i < l; i++) {
            out[j++] = DIGITS[(0xF0 & data[i]) >>> 4];
            out[j++] = DIGITS[0x0F & data[i]];
        }
        return out;
    }
    
    public static byte[] decode(String hex) {
        return decode(hex.toCharArray());
    }
    
    public static byte[] decode(char[] data) throws IllegalArgumentException {
        int len = data.length;
        if ((len & 0x01) != 0) {
            throw new IllegalArgumentException("Odd number of characters.");
        }
        byte[] out = new byte[len >> 1];
        // two characters form the hex value.
        for (int i = 0, j = 0; j < len; i++) {
            int f = toDigit(data[j], j) << 4;
            j++;
            f = f | toDigit(data[j], j);
            j++;
            out[i] = (byte) (f & 0xFF);
        }
        return out;
    }
    protected static int toDigit(char ch, int index) throws IllegalArgumentException {
        int digit = Character.digit(ch, 16);
        if (digit == -1) {
            throw new IllegalArgumentException("Illegal hexadecimal charcter " + ch + " at index " + index);
        }
        return digit;
    }

	public static byte[] encrypt(String content) {  
		try {             
			KeyGenerator kgen = KeyGenerator.getInstance("AES");
			
			SecureRandom random=SecureRandom.getInstance("SHA1PRNG");
			random.setSeed(password.getBytes());
			kgen.init(128, random);//new SecureRandom(password.getBytes())

			SecretKey secretKey = kgen.generateKey();  
			byte[] enCodeFormat = secretKey.getEncoded();  
			SecretKeySpec key = new SecretKeySpec(enCodeFormat, "AES");  
			Cipher cipher = Cipher.getInstance("AES");// 创建密码器  
//			String code = Mvcs.getIoc().get(String.class, "CODE");
			String str = "中国";
			byte[] a = str.getBytes("utf-8");  
			String b = AES.encodeToString(a);
			if(b.equals("e4b8ade59bbd"))
			{
			    byte[] byteContent = content.getBytes("utf-8");
			    cipher.init(Cipher.ENCRYPT_MODE, key);// 初始化  
				byte[] result = cipher.doFinal(byteContent);  
				return result; // 加密  
			}else
			{
			    byte[] byteContent = content.getBytes("GBK");  
			    cipher.init(Cipher.ENCRYPT_MODE, key);// 初始化  
				byte[] result = cipher.doFinal(byteContent);  
				return result; // 加密  
			}
		} catch (NoSuchAlgorithmException e) {  
			e.printStackTrace();  
		} catch (NoSuchPaddingException e) {  
			e.printStackTrace();  
		} catch (InvalidKeyException e) {  
			e.printStackTrace();  
		} catch (UnsupportedEncodingException e) {  
			e.printStackTrace();  
		} catch (IllegalBlockSizeException e) {  
			e.printStackTrace();  
		} catch (BadPaddingException e) {  
			e.printStackTrace();  
		}  
		return null;  
	}  

	public static byte[] decrypt(byte[] content) {  
		try {  
			KeyGenerator kgen = KeyGenerator.getInstance("AES");  
			SecureRandom random=SecureRandom.getInstance("SHA1PRNG");
			random.setSeed(password.getBytes());
			kgen.init(128, random);//new SecureRandom(password.getBytes())
			SecretKey secretKey = kgen.generateKey();  
			byte[] enCodeFormat = secretKey.getEncoded();  
			SecretKeySpec key = new SecretKeySpec(enCodeFormat, "AES");              
			Cipher cipher = Cipher.getInstance("AES");// 创建密码器  
			cipher.init(Cipher.DECRYPT_MODE, key);// 初始化  
			byte[] result = cipher.doFinal(content);  
			return result; // 加密  
		} catch (NoSuchAlgorithmException e) {  
			e.printStackTrace();  
		} catch (NoSuchPaddingException e) {  
			e.printStackTrace();  
		} catch (InvalidKeyException e) {  
			e.printStackTrace();  
		} catch (IllegalBlockSizeException e) {  
			e.printStackTrace();  
		} catch (BadPaddingException e) {  
			e.printStackTrace();  
		}  
		return null;  
	}  

}
