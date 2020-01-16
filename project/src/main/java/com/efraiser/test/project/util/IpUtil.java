package com.efraiser.test.project.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.*;
import java.util.Enumeration;

/**
 * Ip工具类
 * 
 * @author efraiser.xiaxiaofeng
 */
public class IpUtil {
	 static Logger logger = LoggerFactory.getLogger(IpUtil.class);
	/**
	 * @param request
	 *            IP
	 * @return IP Address
	 */
	public static String getIpAddrByRequest(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		return ip;
	}

	/**
	 * @return 本机IP
	 * @throws SocketException
	 */
	public static String getRealIp() throws SocketException {
		String localip = null;// 本地IP，如果没有配置外网IP则返回它
		String netip = null;// 外网IP
		Enumeration<NetworkInterface> netInterfaces = NetworkInterface.getNetworkInterfaces();
		InetAddress ip = null;
		boolean finded = false;// 是否找到外网IP
		while (netInterfaces.hasMoreElements() && !finded) {
			NetworkInterface ni = netInterfaces.nextElement();
			Enumeration<InetAddress> address = ni.getInetAddresses();
			while (address.hasMoreElements()) {
				ip = address.nextElement();
				if (!ip.isSiteLocalAddress() && !ip.isLoopbackAddress() && ip.getHostAddress().indexOf(":") == -1) {// 外网IP
					netip = ip.getHostAddress();
					finded = true;
					break;
				} else if (ip.isSiteLocalAddress() && !ip.isLoopbackAddress()
						&& ip.getHostAddress().indexOf(":") == -1) {// 内网IP
					localip = ip.getHostAddress();
				}
			}
		}

		if (netip != null && !"".equals(netip)) {
			return netip;
		} else {
			return localip;
		}
	}

	/**
	 * 调用其他系统的接口获取信息
	 * 
	 * @param strURL
	 * @return
	 */
	public static String getInfo(String strURL) {
		String msg = "";
		/** 网络的url地址 */
		URL url = null;
		/** http连接 */
		HttpURLConnection httpConn = null;
		BufferedReader reader = null;
		try {
			url = new URL(strURL);
			httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestMethod("POST");
			httpConn.setDoOutput(true);
			httpConn.setDoInput(true);
			httpConn.setRequestProperty("Charsert", "UTF-8"); // 设置请求编码
			httpConn.connect();
			reader = new BufferedReader(new InputStreamReader(httpConn.getInputStream()));
			String line;
			StringBuffer buffer = new StringBuffer();
			while ((line = reader.readLine()) != null) {
				buffer.append(line);
			}
			msg = buffer.toString().trim().replace("\"", "");
			return msg;
		} catch (Exception e) {
			logger.info("访问的url："+strURL);
			e.printStackTrace();
			if (httpConn != null) {
				httpConn.disconnect();
			}
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException ioexception) {
					ioexception.printStackTrace();
				}
			}
			int count = 1;
			while (!Boolean.parseBoolean(msg) && count < 2) {
				msg = reGetInfo(strURL);
				count++;
			}
			if (!Boolean.parseBoolean(msg)) {
				return "交互时发生错误";
			}
			return msg;
		} finally {
			if (httpConn != null) {
				httpConn.disconnect();
			}
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

	/**
	 * 调用其他系统的接口获取信息
	 * 
	 * @param strURL
	 * @return
	 */
	public static String reGetInfo(String strURL) {
		String msg = "";
		/** 网络的url地址 */
		URL url = null;
		/** http连接 */
		HttpURLConnection httpConn = null;
		BufferedReader reader = null;
		try {
			url = new URL(strURL);
			httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestMethod("POST");
			httpConn.setDoOutput(true);
			httpConn.setDoInput(true);
			httpConn.setRequestProperty("Charsert", "UTF-8"); // 设置请求编码
			httpConn.connect();
			reader = new BufferedReader(new InputStreamReader(httpConn.getInputStream()));
			String line;
			StringBuffer buffer = new StringBuffer();
			while ((line = reader.readLine()) != null) {
				buffer.append(line);
			}
			msg = buffer.toString().trim().replace("\"", "");
			return msg;
		} catch (Exception e) {
			e.printStackTrace();
			return "false";
		} finally {
			if (httpConn != null) {
				httpConn.disconnect();
			}
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
}