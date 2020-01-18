package com.efraiser.test.common.util;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.hssf.util.HSSFCellUtil;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.List;

public class ExcelUtil {
	private static  Logger logger = LoggerFactory.getLogger(ExcelUtil.class);
	/**
	 * 判断单元格是否合并单元格,如果是合并单元格第一个返回true#row#col,如果不是第一个返回true;不是单元格返回""
	 * 
	 * @param sheet
	 * @param cell
	 * @return
	 */
	public static String isMergeCells(HSSFSheet sheet, Cell cell) {
		int cellRow = cell.getRowIndex();
		int cellCol = cell.getColumnIndex();

		int sheetMergeCount = sheet.getNumMergedRegions();
		for (int k = 0; k < sheetMergeCount; ++k) {
			CellRangeAddress ca = sheet.getMergedRegion(k);
			int firstRow = ca.getFirstRow();
			int firstCol = ca.getFirstColumn();
			int endRow = ca.getLastRow();
			int endCol = ca.getLastColumn();

			if ((cellRow == firstRow) && (cellCol == firstCol)) {
				return "true#" + (endRow - firstRow + 1) + "#" + (endCol - firstCol + 1);
			}

			if ((cellRow > firstRow) && (cellRow <= endRow) && (cellCol >= firstCol) && (cellCol <= endCol)) {
				return "true";
			}
		}

		return "";
	}
	/**
	 * 判断单元格是否合并单元格,如果是合并单元格第一个返回true#row#col,如果不是第一个返回true;不是单元格返回""
	 * 
	 * @param sheet
	 * @param cell
	 * @return
	 */
	public static String isMergeCellsXlsx(XSSFSheet sheet, Cell cell) {
		int cellRow = cell.getRowIndex();
		int cellCol = cell.getColumnIndex();

		int sheetMergeCount = sheet.getNumMergedRegions();
		for (int k = 0; k < sheetMergeCount; ++k) {
			CellRangeAddress ca = sheet.getMergedRegion(k);
			int firstRow = ca.getFirstRow();
			int firstCol = ca.getFirstColumn();
			int endRow = ca.getLastRow();
			int endCol = ca.getLastColumn();

			if ((cellRow == firstRow) && (cellCol == firstCol)) {
				return "true#" + (endRow - firstRow + 1) + "#" + (endCol - firstCol + 1);
			}

			if ((cellRow > firstRow) && (cellRow <= endRow) && (cellCol >= firstCol) && (cellCol <= endCol)) {
				return "true";
			}
		}

		return "";
	}
	/**
	 * 取Excel2003中单元格数据
	 * */

	public static String getHssCellData(HSSFCell hssCell) {
		Object cellData = null;
		if (hssCell != null) {
			switch (hssCell.getCellType()) {
			case HSSFCell.CELL_TYPE_STRING:
				cellData = hssCell.getStringCellValue();
				break;
			case HSSFCell.CELL_TYPE_NUMERIC:
				if (HSSFDateUtil.isCellDateFormatted(hssCell)) {
					SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
					cellData = df.format(hssCell.getDateCellValue());
					df = null;
				} else {
					// DecimalFormat df = new DecimalFormat("0");
					// cellData = df.format(hssCell.getNumericCellValue());
					// df = null;
					cellData = hssCell.getNumericCellValue();
				}
				break;
			case HSSFCell.CELL_TYPE_FORMULA:
				try {
					cellData = hssCell.getNumericCellValue();
				} catch (IllegalStateException df) {
					try {
						cellData = hssCell.getRichStringCellValue();
					} catch (IllegalStateException ex) {
						cellData = "0.0";
					}
				}
				break;
			case HSSFCell.CELL_TYPE_BLANK:
				cellData = "";
				break;
			case HSSFCell.CELL_TYPE_BOOLEAN:
				cellData = String.valueOf(hssCell.getBooleanCellValue());
				break;
			case HSSFCell.CELL_TYPE_ERROR:
				break;
			}
		}
		hssCell = null;
		if (cellData != null) {
			return cellData.toString();
		}
		return "";

	}

	/**
	 * 取Excel2007中单元格数据
	 * */

	public static Object getXssCellData(XSSFCell xssCell) {
		Object cellData = null;
		if (xssCell != null) {
			switch (xssCell.getCellType()) {
			case XSSFCell.CELL_TYPE_STRING:
				cellData = xssCell.getStringCellValue();
				break;
			case XSSFCell.CELL_TYPE_NUMERIC:
				if (DateUtil.isCellDateFormatted(xssCell)) {
					SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
					cellData = df.format(xssCell.getDateCellValue());
					df = null;
				} else {
					DecimalFormat df = new DecimalFormat("0");
					cellData = df.format(xssCell.getNumericCellValue());
					df = null;
				}
				break;
			case XSSFCell.CELL_TYPE_BLANK:
				cellData = "";
				break;
			case XSSFCell.CELL_TYPE_FORMULA:
				try {
					cellData = xssCell.getNumericCellValue();
				} catch (IllegalStateException df) {
					try {
						cellData = xssCell.getRichStringCellValue();
					} catch (IllegalStateException ex) {
						cellData = "0.0";
					}
				}
				break;
			case XSSFCell.CELL_TYPE_BOOLEAN:
				cellData = String.valueOf(xssCell.getBooleanCellValue());
				break;
			case XSSFCell.CELL_TYPE_ERROR:
				break;
			default:
				break;
			}
		}
		xssCell = null;
		if (cellData != null) {
			return cellData.toString();
		}
		return "";
	}

	/**
	 * 
	 * 创建Excel
	 * 
	 * */
	public static void createExcel(String filePathName, List<Object[]> dataList) throws Exception {
		logger.info("Save filePathName==" + filePathName);

		if (dataList != null && dataList.size() > 0) {
			final int dataSize = dataList.size();

			logger.info("Excel  RowCount==" + dataList.size());
			// 建立新HSSFWorkbook对象
			HSSFWorkbook wb = new HSSFWorkbook();
			// 创建Sheet对象
			HSSFSheet sheet = wb.createSheet("Sheet1");

			Object[] oneData = null;
			for (int ii = 0; ii < dataSize; ii++) {
				oneData = dataList.get(ii);
				createExcelRow(sheet, oneData, ii);
			}
			File newfile = new File(filePathName);
			FileOutputStream fileOut = new FileOutputStream(newfile.getAbsolutePath());

			wb.write(fileOut);
			fileOut.close();
			wb = null;
			fileOut = null;
		}
	}

	/**
	 * 
	 * 创建新行并将数据写入到相应的单元格中
	 * 
	 * */

	private static void createExcelRow(HSSFSheet sheet, Object[] rowData, int rowNum) {
		if (rowData.length > 0) {
			// 建立新行
			HSSFRow row = sheet.createRow((short) rowNum);
			final int dataLen = rowData.length;
			HSSFCell cell = null;
			String oneCellValue = "";
			for (int ii = 0; ii < dataLen; ii++) {
				cell = row.createCell(ii);
				oneCellValue = String.valueOf(rowData[ii]);
				if (rowData[ii] == null) {
					oneCellValue = "";
				}
				cell.setCellValue(oneCellValue);
				cell.setCellType(HSSFCell.CELL_TYPE_STRING);
			}
			row = null;
			cell = null;
		}
	}

	public static String getExcelSheetName(File excelFile) {
		try {
			HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(excelFile));
			HSSFSheet sheet = workbook.getSheetAt(0);
			return sheet.getSheetName();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}
	public static String getExcelSheetNameXlsx(File excelFile) {
		try {
			XSSFWorkbook workbook = new XSSFWorkbook(new FileInputStream(excelFile));
			XSSFSheet sheet = workbook.getSheetAt(0);
			return sheet.getSheetName();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}
	/**
	 * 功能：将HSSFWorkbook写入Excel文件
	 * 
	 * @param wb
	 *            HSSFWorkbook
	 * @param fileName
	 *            写入文件的相对路径
	 */
	public static void writeWorkbook(HSSFWorkbook wb, String fileName) {
		FileOutputStream fos = null;
		try {
			fos = new FileOutputStream(fileName);
			wb.write(fos);
		} catch (FileNotFoundException e) {
			logger.error(new StringBuffer("[").append(e.getMessage()).append("]").append(e.getCause()).toString());
		} catch (IOException e) {
			logger.error(new StringBuffer("[").append(e.getMessage()).append("]").append(e.getCause()).toString());
		} finally {
			try {
				if (fos != null) {
					fos.close();
				}
			} catch (IOException e) {
				logger.error(new StringBuffer("[").append(e.getMessage()).append("]").append(e.getCause()).toString());
			}
		}
	}

	/**
	 * 功能：创建HSSFSheet工作簿
	 * 
	 * @param wb
	 *            HSSFWorkbook
	 * @param sheetName
	 *            String
	 * @return HSSFSheet
	 */
	public static HSSFSheet createSheet(HSSFWorkbook wb, String sheetName) {
		HSSFSheet sheet = wb.createSheet(sheetName);
		sheet.setDefaultColumnWidth(12);
		sheet.setGridsPrinted(false);
		sheet.setDisplayGridlines(false);
		return sheet;
	}

	/**
	 * 功能：创建HSSFRow
	 * 
	 * @param sheet
	 *            HSSFSheet
	 * @param rowNum
	 *            int
	 * @param height
	 *            int
	 * @return HSSFRow
	 */
	public static HSSFRow createRow(HSSFSheet sheet, int rowNum, int height) {
		HSSFRow row = sheet.createRow(rowNum);
		row.setHeight((short) height);
		return row;
	}

	/**
	 * 创建代边框的CellStyle
	 * 
	 * @param wb
	 *            单元格对齐方式
	 * @return
	 */
	public static CellStyle createBorderCellStyle(HSSFWorkbook wb) {
		CellStyle cs = wb.createCellStyle();
		setBorderStyle(cs);
		return cs;
	}

	/**设置CELL格式为文本格式
	 * @param wb
	 * @return
	 */
	public static CellStyle createBorderCellStyleTxt(HSSFWorkbook wb) {
		CellStyle cs = wb.createCellStyle();
		HSSFDataFormat format = wb.createDataFormat();
		cs.setDataFormat(format.getFormat("@"));   
		setBorderStyle(cs);
		return cs;
	}
	public static void setBorderStyle(CellStyle cs) {
		cs.setBorderLeft(CellStyle.BORDER_THIN);
		cs.setBorderRight(CellStyle.BORDER_THIN);
		cs.setBorderTop(CellStyle.BORDER_THIN);
		cs.setBorderBottom(CellStyle.BORDER_THIN);
	}

	/**
	 * 创建代边框的CellStyle
	 * 
	 * @param wb
	 * @param align
	 *            单元格对齐方式
	 * @return
	 */
	public static CellStyle createBorderCellStyle(HSSFWorkbook wb, short align) {
		CellStyle cs = wb.createCellStyle();
		cs.setAlignment(align);
		setBorderStyle(cs);
		return cs;
	}
	
	/**
	 * 创建代边框的CellStyle
	 * 
	 * @param wb
	 * @param align
	 *            单元格对齐方式
	 * @return
	 */
	public static CellStyle createBorderCellStyleVertica(HSSFWorkbook wb, short align) {
		CellStyle cs = wb.createCellStyle();
		cs.setVerticalAlignment(align);
		setBorderStyle(cs);
		return cs;
	}

	/**
	 * 创建代边框的CellStyle
	 * 
	 * @param wb
	 * @param halign
	 *            单元格对齐方式
	 * @return
	 */
	public static CellStyle createBorderCellStyle(HSSFWorkbook wb, short align, short valign) {
		CellStyle cs = wb.createCellStyle();
		cs.setAlignment(align);
		cs.setVerticalAlignment(valign);
		setBorderStyle(cs);
		return cs;
	}

	/**
	 * 创建代边框背景的CellStyle
	 * 
	 * @param wb
	 * @param foregroundColor
	 *            背景色
	 * @param align
	 *            单元格对齐方式
	 * @return
	 */
	public static CellStyle createBorderCellStyle(HSSFWorkbook wb, short foregroundColor, short align, short valign) {
		CellStyle cs = wb.createCellStyle();
		cs.setAlignment(align);
		cs.setVerticalAlignment(valign);
		cs.setFillForegroundColor(foregroundColor);
		cs.setFillPattern(CellStyle.SOLID_FOREGROUND);
		setBorderStyle(cs);
		return cs;
	}

	/**
	 * 功能：创建CELL
	 * 
	 * @param row
	 *            HSSFRow
	 * @param cellNum
	 *            int
	 * @param cellType
	 *            HSSFStyle
	 * @return HSSFCell
	 */
	public static HSSFCell createCell(HSSFRow row, int cellNum, int cellType) {
		HSSFCell cell = row.createCell(cellNum);
		cell.setCellType(cellType);
		return cell;
	}

	/**
	 * 功能：创建CELL
	 * 
	 * @param row
	 *            HSSFRow
	 * @param cellNum
	 *            int
	 * @param style
	 *            HSSFStyle
	 * @return HSSFCell
	 */
	public static HSSFCell createCell(HSSFRow row, int cellNum, int cellType, CellStyle style) {
		HSSFCell cell = row.createCell(cellNum);
		cell.setCellStyle(style);
		cell.setCellType(cellType);
		return cell;
	}

	/**
	 * 功能：合并单元格
	 * 
	 * @param sheet
	 *            HSSFSheet
	 * @param firstRow
	 *            int
	 * @param lastRow
	 *            int
	 * @param firstColumn
	 *            int
	 * @param lastColumn
	 *            int
	 * @return int 合并区域号码
	 */
	public static int mergeCell(HSSFSheet sheet, int firstRow, int lastRow, int firstColumn, int lastColumn) {
		return sheet.addMergedRegion(new CellRangeAddress(firstRow, lastRow, firstColumn, lastColumn));
	}

	/**
	 * 功能：创建字体
	 * 
	 * @param wb
	 *            HSSFWorkbook
	 * @param boldweight
	 *            short
	 * @param color
	 *            short
	 * @return Font
	 */
	public static Font createFont(HSSFWorkbook wb, short boldweight, short color, short size) {
		Font font = wb.createFont();
		font.setBoldweight(boldweight);
		font.setColor(color);
		font.setFontHeightInPoints(size);
		return font;
	}

	/**
	 * 设置合并单元格的边框样式
	 * 
	 * @param sheet
	 *            HSSFSheet
	 * @param ca
	 *            CellRangAddress
	 * @param style
	 *            CellStyle
	 */
	public static void setRegionStyle(HSSFSheet sheet, CellRangeAddress ca, CellStyle style) {
		for (int i = ca.getFirstRow(); i <= ca.getLastRow(); i++) {
			HSSFRow row = HSSFCellUtil.getRow(i, sheet);
			for (int j = ca.getFirstColumn(); j <= ca.getLastColumn(); j++) {
				HSSFCell cell = HSSFCellUtil.getCell(row, j);
				cell.setCellStyle(style);
			}
		}
	}

	/**
	 * 为单元格赋值
	 * 
	 * @param row
	 *            行对象
	 * @param i
	 *            列下标
	 * @param value
	 */
	public static void setCell(HSSFRow row, int i, Object value) {
		HSSFCell cell = row.getCell(i);
		if (cell.getCellType() == 1) {
			cell.setCellValue(String.valueOf(value));
		} else if (cell.getCellType() == 4) {
			cell.setCellValue(Boolean.getBoolean(String.valueOf(value)));
		} else if (cell.getCellType() == 0)
			cell.setCellValue(Double.valueOf(String.valueOf(value)).doubleValue());
		else if (cell.getCellType() == 3) {
//			if ("General".equals(cell.getCellStyle().getDataFormatString())) {
//				cell.setCellValue(String.valueOf(value));
//			} else if ((cell.getCellStyle().getDataFormatString().contains("0.00")) || (cell.getCellStyle().getDataFormatString().contains("0_"))) {
//				if ((value == null) || ("".equals(value))) {
//					value = "0.0";
//				}
//				cell.setCellValue(Double.valueOf(String.valueOf(value)).doubleValue());
//			} else {
//				cell.setCellValue(String.valueOf(value));
//			}
			if(isNumber(String.valueOf(value))){
				cell.setCellValue(Double.valueOf(String.valueOf(value)).doubleValue());
			}else{
				cell.setCellValue(String.valueOf(value));
			}
		} else if (value != null)
			cell.setCellValue(String.valueOf(value));
	}
	/**
	 * 为单元格赋值
	 * 
	 * @param row
	 *            行对象
	 * @param i
	 *            列下标
	 * @param value
	 */
	public static void setCellXlsx(XSSFRow row, int i, Object value) {
		XSSFCell cell = row.getCell(i);
		if (cell.getCellType() == 1) {
			cell.setCellValue(String.valueOf(value));
		} else if (cell.getCellType() == 4) {
			cell.setCellValue(Boolean.getBoolean(String.valueOf(value)));
		} else if (cell.getCellType() == 0)
			cell.setCellValue(Double.valueOf(String.valueOf(value)).doubleValue());
		else if (cell.getCellType() == 3) {
//			if ("General".equals(cell.getCellStyle().getDataFormatString())) {
//				cell.setCellValue(String.valueOf(value));
//			} else if ((cell.getCellStyle().getDataFormatString().contains("0.00")) || (cell.getCellStyle().getDataFormatString().contains("0_"))) {
//				if ((value == null) || ("".equals(value))) {
//					value = "0.0";
//				}
//				cell.setCellValue(Double.valueOf(String.valueOf(value)).doubleValue());
//			} else {
//				cell.setCellValue(String.valueOf(value));
//			}
			if(isNumber(String.valueOf(value))){
				cell.setCellValue(Double.valueOf(String.valueOf(value)).doubleValue());
			}else{
				cell.setCellValue(String.valueOf(value));
			}
		} else if (value != null)
			cell.setCellValue(String.valueOf(value));
	}
	
	/**
	 * 为单元格赋值(异动结果)
	 * 
	 * @param row
	 *            行对象
	 * @param i
	 *            列下标
	 * @param value
	 */
	public static void setCellForYd(HSSFRow row, int i,Font style, Object value) {
		HSSFCell cell = row.getCell(i);
		//CellStyle cellStyle = cell.getCellStyle();
		//cellStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.00"));
		//cellStyle.setFont(style);
		//cell.setCellStyle(cellStyle);
		cell.setCellValue(String.valueOf(value));
		cell.getRichStringCellValue().applyFont(style);
		cell.setCellValue(cell.getRichStringCellValue());
	}
	
	/**
	  * 给单元格添加文字属性
	 * @param format 
	  */
	public static void setCellFontStyle(HSSFRow row,int i, HSSFDataFormat format) {
		HSSFCell cell = row.getCell(i);
		CellStyle cellStyle = cell.getCellStyle();
		cellStyle.setDataFormat(format.getFormat("@"));
		cell.setCellFormula(null);
		cell.setCellType(1);
		cell.setCellStyle(cellStyle);
	}

	/**
	  * 判断字符串是否是整数
	  */
	 public static boolean isInteger(String value) {
	  try {
	   Integer.parseInt(value);
	   return true;
	  } catch (NumberFormatException e) {
	   return false;
	  }
	 }

	 /**
	  * 判断字符串是否是浮点数
	  */
	 public static boolean isDouble(String value) {
	  try {
	   Double.parseDouble(value);
	   if (value.contains("."))
	    return true;
	   return false;
	  } catch (NumberFormatException e) {
	   return false;
	  }
	 }

	 /**
	  * 判断字符串是否是数字
	  */
	 public static boolean isNumber(String value) {
	  return isInteger(value) || isDouble(value);
	 }
/**
 * 为单元格赋值
 * 
 * @param row
 *            行对象
 * @param i
 *            列下标
 * @param value
 */

public static void setCellAndStyle(HSSFRow row, int i, Object value) {
	HSSFCell cell = row.getCell(i);
	HSSFCellStyle bord=cell.getCellStyle();
	if(StrUtil.isNotNull(bord.toString())){
		cell.setCellStyle(bord);
	}
	if (cell.getCellType() == 1) {
		cell.setCellValue(String.valueOf(value));
	} else if (cell.getCellType() == 4) {
		cell.setCellValue(Boolean.getBoolean(String.valueOf(value)));
	} else if (cell.getCellType() == 0)
		cell.setCellValue(Double.valueOf(String.valueOf(value)).doubleValue());
	else if (cell.getCellType() == 3) {
//		if ("General".equals(cell.getCellStyle().getDataFormatString())) {
//			cell.setCellValue(String.valueOf(value));
//		} else if ((cell.getCellStyle().getDataFormatString().contains("0.00")) || (cell.getCellStyle().getDataFormatString().contains("0_"))) {
//			if ((value == null) || ("".equals(value))) {
//				value = "0.0";
//			}
//			cell.setCellValue(Double.valueOf(String.valueOf(value)).doubleValue());
//		} else {
			cell.setCellValue(String.valueOf(value));
//		}
	} else if (value != null)
		cell.setCellValue(String.valueOf(value));
}

}
