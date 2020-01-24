package com.efraiser.test.project.actiion.dy;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.FileUtil;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.common.util.nutz.R;
import com.efraiser.test.db.model.dy.*;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysOrgSummer;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dyreportinfo.DyReportInfoService;
import com.efraiser.test.db.service.dy.dyreportinfosummary.DyReportInfoSummaryService;
import com.efraiser.test.db.service.dy.dyreportinfosummary.impl.DyReportInfoSummaryServiceImpl;
import com.efraiser.test.db.service.dy.dyreportsummary.DyReportSummaryService;
import com.efraiser.test.db.service.dy.dyreportsummary.impl.DyReportSummaryServiceImpl;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytableinfo.impl.DyTableInfoServiceImpl;
import com.efraiser.test.db.service.dy.dytablemodel.DyTableModelService;
import com.efraiser.test.db.service.sys.sysorgsummer.SysOrgSummerService;
import com.efraiser.test.project.actiion.BaseController;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.CellStyle;
import org.nutz.json.Json;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("dy/report/Summary")
public class DyReportSummaryController extends BaseController {
    private static final Logger logger = LoggerFactory.getLogger(DyReportSummaryController.class);

    @Autowired
    private DyReportSummaryService dyReportSummaryService;
    @Autowired
    private DyReportInfoSummaryService dyReportInfoSummaryService;

    @Autowired
    private DyTableInfoService dyTableInfoService;

    @Autowired
    private LocalConfig localConfig;

    @Autowired
    private DyReportInfoService dyReportInfoService;
    @Autowired
    private DyTableModelService dyTableModelService;

    @Autowired
    private SysOrgSummerService sysOrgSummerService;


    @RequestMapping("/DyReportCheck")
    @ResponseBody
    public Object DyReportCheck(String brNo, String reportDate, String tabType) throws Exception {
        brNo = delParentNode(brNo);
        String bmCode[] = brNo.split(",");
        String msg = "";
        //检查各机构是否同一类别
        SysBmgl sysbmgl = SysBmglCache.getBmglInfo(bmCode[0]);
        String Category = sysbmgl.getBmType();
        for (int y = 0; y < bmCode.length; y++) {
            SysBmgl bmgl = SysBmglCache.getBmglInfo(bmCode[y]);
            String cate = bmgl.getBmType();
            if (Category != cate) {
                msg += "请检查机构类别！";
                return requestResult(false, "" + msg + "");
            }
        }


        //检查各机构是否完全导入报表
        for (int ia = 0; ia < bmCode.length; ia++) {
            int NoImport = dyReportSummaryService.noImportReport(bmCode[ia], reportDate, tabType);//未导入的报表数目
            if (NoImport != 0) {
                msg += "请检查" + SysBmglCache.getBmName(bmCode[ia]) + "机构的报表是否导入完全！";
                return requestResult(false, "" + msg + "");
            }
        }
        DyReportSummary(brNo, reportDate, tabType);
        return null;
    }

    @RequestMapping("/DyReportSummary")
    @ResponseBody
    public Object DyReportSummary(String brNo,String reportDate,String tabType) throws Exception{
        brNo=delParentNode(brNo);
        String msg="";
        List<String> bmCode=new ArrayList<String>();
        List<SysOrgSummer> sysOrgSummers=sysOrgSummerService.getBySumCode(brNo);
        for (int i = 0; i < sysOrgSummers.size(); i++) {
            bmCode.add(sysOrgSummers.get(i).getSubCode());
        }
        //检查各机构是否完全导入报表
        for(int ia=0;ia<bmCode.size();ia++){
            int NoImport=dyReportSummaryService.noImportReport(bmCode.get(ia),reportDate,tabType);//未导入的报表数目
            if(NoImport!=0){
                msg +="请检查"+SysBmglCache.getBmName(bmCode.get(ia))+"机构的报表是否导入完全！";
                return requestResult(false, ""+msg+"");
            }
        }
        //报表汇总
        List<DyTableImportHelper> rbiList;
        String flag="add";
		/*String brnos="";
		for(int ib=0;ib<bmCode.size();ib++){
			brnos=bmCode[ib];
		}*/
        String bmCodes="(";
        for(int ic=0;ic<bmCode.size();ic++){
            if(ic==(bmCode.size()-1)){
                bmCodes +="'"+bmCode.get(ic)+"'";
            }else{
                bmCodes +="'"+bmCode.get(ic)+"',";
            }
        }
        bmCodes +=")";
        int SbReport=0;
        String sbString;
        rbiList = dyReportSummaryService.getDyTableInfoListByBmCode(bmCode, tabType, reportDate, flag);//获取汇总机构所需报表信息

        if(rbiList.size()>0){
            logger.info("----------------------"+bmCodes+"---------------------------");
            for(DyTableImportHelper Id:rbiList){
                DyReportDataSummary rdpd=new DyReportDataSummary();
                String reportId2= R.UU16();
                String tableId3="";
                String reportId="";
                reportId=Id.getReportId();
                if(reportId!=null){
                    List<DyReportData> rowNum=dyReportSummaryService.getRowNum(reportDate,reportId);//获取该reportId的rowNum的List
                    String tableId2=dyReportSummaryService.getTableId(reportId);//获取该reportId下的tableId
                    List<DyTableImportHelper> AllReporIdtList=dyReportSummaryService.getAllReporIdtList(bmCodes,reportDate,tableId2);//获取该tableId下所有要汇总机构的reportId
                    SbReport=AllReporIdtList.size();
                    for(DyReportData row:rowNum){
                        double  a = 0,b = 0,c = 0,d = 0,e = 0,f = 0,g = 0,h = 0,i = 0,j = 0,k = 0,//初始化元素值
                                l = 0,m = 0,n = 0,o = 0,p = 0,q = 0,r = 0,s = 0,t = 0,u = 0,v = 0,
                                w = 0,x = 0,y = 0,z = 0,aa = 0,ab = 0,ac = 0,ad = 0,ae = 0,af = 0,
                                ag = 0,ah = 0,ai = 0,aj = 0,ak = 0,al = 0,am = 0,an = 0,ao = 0,ap = 0,
                                aq = 0,ar = 0,as = 0,at = 0,au = 0,av = 0,aw = 0,ax = 0,ay = 0,az = 0;
                        String  sa = "",sb = "",sc = "",sd = "",se = "",sf = "",sg = "",sh = "",si = "",
                                sj = "",sk = "",sl = "",sm = "",sn = "",so = "",sp = "",sq = "",sr = "",
                                ss = "",st = "",su = "",sv = "",sw = "",sx = "",sy = "",sz = "",saa = "",
                                sab = "",sac = "",sad = "",sae = "",saf = "",sag = "",sah = "",sai = "",
                                saj = "",sak = "",sal = "",sam = "",san = "",sao = "",sap = "",saq = "",
                                sar = "",sas = "",sat = "",sau = "",sav = "",saw = "",sax = "",say = "",saz = "";
                        boolean aIsCount=true,bIsCount=true,cIsCount=true,dIsCount=true,eIsCount=true,fIsCount=true,gIsCount=true,hIsCount=true,iIsCount=true,jIsCount=true,kIsCount=true,
                                lIsCount=true,mIsCount=true,nIsCount=true,oIsCount=true,pIsCount=true,qIsCount=true,rIsCount=true,sIsCount=true,tIsCount=true,uIsCount=true,vIsCount=true,
                                wIsCount=true,xIsCount=true,yIsCount=true,zIsCount=true,aaIsCount=true,abIsCount=true,acIsCount=true,adIsCount=true,aeIsCount=true,afIsCount=true,
                                agIsCount=true,ahIsCount=true,aiIsCount=true,ajIsCount=true,akIsCount=true,alIsCount=true,amIsCount=true,anIsCount=true,aoIsCount=true,apIsCount=true,
                                aqIsCount=true,arIsCount=true,asIsCount=true,atIsCount=true,auIsCount=true,avIsCount=true,awIsCount=true,axIsCount=true,ayIsCount=true,azIsCount=true,
                                aIsString=true,bIsString=true,cIsString=true,dIsString=true,eIsString=true,fIsString=true,gIsString=true,hIsString=true,iIsString=true,jIsString=true,kIsString=true,
                                lIsString=true,mIsString=true,nIsString=true,oIsString=true,pIsString=true,qIsString=true,rIsString=true,sIsString=true,tIsString=true,uIsString=true,vIsString=true,
                                wIsString=true,xIsString=true,yIsString=true,zIsString=true,aaIsString=true,abIsString=true,acIsString=true,adIsString=true,aeIsString=true,afIsString=true,
                                agIsString=true,ahIsString=true,aiIsString=true,ajIsString=true,akIsString=true,alIsString=true,amIsString=true,anIsString=true,aoIsString=true,apIsString=true,
                                aqIsString=true,arIsString=true,asIsString=true,atIsString=true,auIsString=true,avIsString=true,awIsString=true,axIsString=true,ayIsString=true,azIsString=true;
                        for(DyTableImportHelper Ids:AllReporIdtList){//获取reportIds
                            String reportIds=Ids.getReportId();
                            rdpd=dyReportSummaryService.getData(reportDate,reportIds,row.getReportRowNum());//获取此reportId该列的值
                            //列值相加
                            if(rdpd.getValueA()!=null){a=add(a,rdpd.getValueA());aIsCount=true;}else{if(a==0){aIsCount=false;}else{aIsCount=true;}};
                            if(rdpd.getValueB()!=null){b=add(b,rdpd.getValueB());bIsCount=true;}else{if(b==0){bIsCount=false;}else{bIsCount=true;}};
                            if(rdpd.getValueC()!=null){c=add(c,rdpd.getValueC());cIsCount=true;}else{if(c==0){cIsCount=false;}else{cIsCount=true;}};
                            if(rdpd.getValueD()!=null){d=add(d,rdpd.getValueD());dIsCount=true;}else{if(d==0){dIsCount=false;}else{dIsCount=true;}};
                            if(rdpd.getValueE()!=null){e=add(e,rdpd.getValueE());eIsCount=true;}else{if(e==0){eIsCount=false;}else{eIsCount=true;}};
                            if(rdpd.getValueF()!=null){f=add(f,rdpd.getValueF());fIsCount=true;}else{if(f==0){fIsCount=false;}else{fIsCount=true;}};
                            if(rdpd.getValueG()!=null){g=add(g,rdpd.getValueG());gIsCount=true;}else{if(g==0){gIsCount=false;}else{gIsCount=true;}};
                            if(rdpd.getValueH()!=null){h=add(h,rdpd.getValueH());hIsCount=true;}else{if(h==0){hIsCount=false;}else{hIsCount=true;}};
                            if(rdpd.getValueI()!=null){i=add(i,rdpd.getValueI());iIsCount=true;}else{if(i==0){iIsCount=false;}else{iIsCount=true;}};
                            if(rdpd.getValueJ()!=null){j=add(j,rdpd.getValueJ());jIsCount=true;}else{if(j==0){jIsCount=false;}else{jIsCount=true;}};
                            if(rdpd.getValueK()!=null){k=add(k,rdpd.getValueK());kIsCount=true;}else{if(k==0){kIsCount=false;}else{kIsCount=true;}};
                            if(rdpd.getValueL()!=null){l=add(l,rdpd.getValueL());lIsCount=true;}else{if(l==0){lIsCount=false;}else{lIsCount=true;}};
                            if(rdpd.getValueM()!=null){m=add(m,rdpd.getValueM());mIsCount=true;}else{if(m==0){mIsCount=false;}else{mIsCount=true;}};
                            if(rdpd.getValueN()!=null){n=add(n,rdpd.getValueN());nIsCount=true;}else{if(n==0){nIsCount=false;}else{nIsCount=true;}};
                            if(rdpd.getValueO()!=null){o=add(o,rdpd.getValueO());oIsCount=true;}else{if(o==0){oIsCount=false;}else{oIsCount=true;}};
                            if(rdpd.getValueP()!=null){p=add(p,rdpd.getValueP());pIsCount=true;}else{if(p==0){pIsCount=false;}else{pIsCount=true;}};
                            if(rdpd.getValueQ()!=null){q=add(q,rdpd.getValueQ());qIsCount=true;}else{if(q==0){qIsCount=false;}else{qIsCount=true;}};
                            if(rdpd.getValueR()!=null){r=add(r,rdpd.getValueR());rIsCount=true;}else{if(r==0){rIsCount=false;}else{rIsCount=true;}};
                            if(rdpd.getValueS()!=null){s=add(s,rdpd.getValueS());sIsCount=true;}else{if(s==0){sIsCount=false;}else{sIsCount=true;}};
                            if(rdpd.getValueT()!=null){t=add(t,rdpd.getValueT());tIsCount=true;}else{if(t==0){tIsCount=false;}else{tIsCount=true;}};
                            if(rdpd.getValueU()!=null){u=add(u,rdpd.getValueU());uIsCount=true;}else{if(u==0){uIsCount=false;}else{uIsCount=true;}};
                            if(rdpd.getValueV()!=null){v=add(v,rdpd.getValueV());vIsCount=true;}else{if(v==0){vIsCount=false;}else{vIsCount=true;}};
                            if(rdpd.getValueW()!=null){w=add(w,rdpd.getValueW());wIsCount=true;}else{if(w==0){wIsCount=false;}else{wIsCount=true;}};
                            if(rdpd.getValueX()!=null){x=add(x,rdpd.getValueX());xIsCount=true;}else{if(x==0){xIsCount=false;}else{xIsCount=true;}};
                            if(rdpd.getValueY()!=null){y=add(y,rdpd.getValueY());yIsCount=true;}else{if(y==0){yIsCount=false;}else{yIsCount=true;}};
                            if(rdpd.getValueZ()!=null){z=add(z,rdpd.getValueZ());zIsCount=true;}else{if(z==0){zIsCount=false;}else{zIsCount=true;}};
                            if(rdpd.getValueAA()!=null){aa=add(aa,rdpd.getValueAA());aaIsCount=true;}else{if(aa==0){aaIsCount=false;}else{aaIsCount=true;}};
                            if(rdpd.getValueAB()!=null){ab=add(ab,rdpd.getValueAB());abIsCount=true;}else{if(ab==0){abIsCount=false;}else{abIsCount=true;}};
                            if(rdpd.getValueAC()!=null){ac=add(ac,rdpd.getValueAC());acIsCount=true;}else{if(ac==0){acIsCount=false;}else{acIsCount=true;}};
                            if(rdpd.getValueAD()!=null){ad=add(ad,rdpd.getValueAD());adIsCount=true;}else{if(ad==0){adIsCount=false;}else{adIsCount=true;}};
                            if(rdpd.getValueAE()!=null){ae=add(ae,rdpd.getValueAE());aeIsCount=true;}else{if(ae==0){aeIsCount=false;}else{aeIsCount=true;}};
                            if(rdpd.getValueAF()!=null){af=add(af,rdpd.getValueAF());afIsCount=true;}else{if(af==0){afIsCount=false;}else{afIsCount=true;}};
                            if(rdpd.getValueAG()!=null){ag=add(ag,rdpd.getValueAG());agIsCount=true;}else{if(ag==0){agIsCount=false;}else{agIsCount=true;}};
                            if(rdpd.getValueAH()!=null){ah=add(ah,rdpd.getValueAH());ahIsCount=true;}else{if(ah==0){ahIsCount=false;}else{ahIsCount=true;}};
                            if(rdpd.getValueAI()!=null){ai=add(ai,rdpd.getValueAI());aiIsCount=true;}else{if(ai==0){aiIsCount=false;}else{aiIsCount=true;}};
                            if(rdpd.getValueAJ()!=null){aj=add(aj,rdpd.getValueAJ());ajIsCount=true;}else{if(aj==0){ajIsCount=false;}else{ajIsCount=true;}};
                            if(rdpd.getValueAK()!=null){ak=add(ak,rdpd.getValueAK());akIsCount=true;}else{if(ak==0){akIsCount=false;}else{akIsCount=true;}};
                            if(rdpd.getValueAL()!=null){al=add(al,rdpd.getValueAL());alIsCount=true;}else{if(al==0){alIsCount=false;}else{alIsCount=true;}};
                            if(rdpd.getValueAM()!=null){am=add(am,rdpd.getValueAM());amIsCount=true;}else{if(am==0){amIsCount=false;}else{amIsCount=true;}};
                            if(rdpd.getValueAN()!=null){an=add(an,rdpd.getValueAN());anIsCount=true;}else{if(an==0){anIsCount=false;}else{anIsCount=true;}};
                            if(rdpd.getValueAO()!=null){ao=add(ao,rdpd.getValueAO());aoIsCount=true;}else{if(ao==0){aoIsCount=false;}else{aoIsCount=true;}};
                            if(rdpd.getValueAP()!=null){ap=add(ap,rdpd.getValueAP());apIsCount=true;}else{if(ap==0){apIsCount=false;}else{apIsCount=true;}};
                            if(rdpd.getValueAQ()!=null){aq=add(aq,rdpd.getValueAQ());aqIsCount=true;}else{if(aq==0){aqIsCount=false;}else{aqIsCount=true;}};
                            if(rdpd.getValueAR()!=null){ar=add(ar,rdpd.getValueAR());arIsCount=true;}else{if(ar==0){arIsCount=false;}else{arIsCount=true;}};
                            if(rdpd.getValueAS()!=null){as=add(as,rdpd.getValueAS());asIsCount=true;}else{if(as==0){asIsCount=false;}else{asIsCount=true;}};
                            if(rdpd.getValueAT()!=null){at=add(at,rdpd.getValueAT());atIsCount=true;}else{if(at==0){atIsCount=false;}else{atIsCount=true;}};
                            if(rdpd.getValueAU()!=null){au=add(au,rdpd.getValueAU());auIsCount=true;}else{if(au==0){auIsCount=false;}else{auIsCount=true;}};
                            if(rdpd.getValueAV()!=null){av=add(av,rdpd.getValueAV());avIsCount=true;}else{if(av==0){avIsCount=false;}else{avIsCount=true;}};
                            if(rdpd.getValueAW()!=null){aw=add(aw,rdpd.getValueAW());awIsCount=true;}else{if(aw==0){awIsCount=false;}else{awIsCount=true;}};
                            if(rdpd.getValueAX()!=null){ax=add(ax,rdpd.getValueAX());axIsCount=true;}else{if(ax==0){axIsCount=false;}else{axIsCount=true;}};
                            if(rdpd.getValueAY()!=null){ay=add(ay,rdpd.getValueAY());ayIsCount=true;}else{if(ay==0){ayIsCount=false;}else{ayIsCount=true;}};
                            if(rdpd.getValueAZ()!=null){az=add(az,rdpd.getValueAZ());azIsCount=true;}else{if(az==0){azIsCount=false;}else{azIsCount=true;}};
                            if(rdpd.getNameA()!=null){sa=sa+rdpd.getNameA();aIsString=true;}else{if(sa.equals("")){aIsString=false;}else{aIsString=true;}};
                            if(rdpd.getNameB()!=null){sb=sb+rdpd.getNameB();bIsString=true;}else{if(sb.equals("")){bIsString=false;}else{bIsString=true;}};
                            if(rdpd.getNameC()!=null){sc=sc+rdpd.getNameC();cIsString=true;}else{if(sc.equals("")){cIsString=false;}else{cIsString=true;}};
                            if(rdpd.getNameD()!=null){sd=sd+rdpd.getNameD();dIsString=true;}else{if(sd.equals("")){dIsString=false;}else{dIsString=true;}};
                            if(rdpd.getNameE()!=null){se=se+rdpd.getNameE();eIsString=true;}else{if(se.equals("")){eIsString=false;}else{eIsString=true;}};
                            if(rdpd.getNameF()!=null){sf=sf+rdpd.getNameF();fIsString=true;}else{if(sf.equals("")){fIsString=false;}else{fIsString=true;}};
                            if(rdpd.getNameG()!=null){sg=sg+rdpd.getNameG();gIsString=true;}else{if(sg.equals("")){gIsString=false;}else{gIsString=true;}};
                            if(rdpd.getNameH()!=null){sh=sh+rdpd.getNameH();hIsString=true;}else{if(sh.equals("")){hIsString=false;}else{hIsString=true;}};
                            if(rdpd.getNameI()!=null){si=si+rdpd.getNameI();iIsString=true;}else{if(si.equals("")){iIsString=false;}else{iIsString=true;}};
                            if(rdpd.getNameJ()!=null){sj=sj+rdpd.getNameJ();jIsString=true;}else{if(sj.equals("")){jIsString=false;}else{jIsString=true;}};
                            if(rdpd.getNameK()!=null){sk=sk+rdpd.getNameK();kIsString=true;}else{if(sk.equals("")){kIsString=false;}else{kIsString=true;}};
                            if(rdpd.getNameL()!=null){sl=sl+rdpd.getNameL();lIsString=true;}else{if(sl.equals("")){lIsString=false;}else{lIsString=true;}};
                            if(rdpd.getNameM()!=null){sm=sm+rdpd.getNameM();mIsString=true;}else{if(sm.equals("")){mIsString=false;}else{mIsString=true;}};
                            if(rdpd.getNameN()!=null){sn=sn+rdpd.getNameN();nIsString=true;}else{if(sn.equals("")){nIsString=false;}else{nIsString=true;}};
                            if(rdpd.getNameO()!=null){so=so+rdpd.getNameO();oIsString=true;}else{if(so.equals("")){oIsString=false;}else{oIsString=true;}};
                            if(rdpd.getNameP()!=null){sp=sp+rdpd.getNameP();pIsString=true;}else{if(sp.equals("")){pIsString=false;}else{pIsString=true;}};
                            if(rdpd.getNameQ()!=null){sq=sq+rdpd.getNameQ();qIsString=true;}else{if(sq.equals("")){qIsString=false;}else{qIsString=true;}};
                            if(rdpd.getNameR()!=null){sr=sr+rdpd.getNameR();rIsString=true;}else{if(sr.equals("")){rIsString=false;}else{rIsString=true;}};
                            if(rdpd.getNameS()!=null){ss=ss+rdpd.getNameS();sIsString=true;}else{if(ss.equals("")){sIsString=false;}else{sIsString=true;}};
                            if(rdpd.getNameT()!=null){st=st+rdpd.getNameT();tIsString=true;}else{if(st.equals("")){tIsString=false;}else{tIsString=true;}};
                            if(rdpd.getNameU()!=null){su=su+rdpd.getNameU();uIsString=true;}else{if(su.equals("")){uIsString=false;}else{uIsString=true;}};
                            if(rdpd.getNameV()!=null){sv=sv+rdpd.getNameV();vIsString=true;}else{if(sv.equals("")){vIsString=false;}else{vIsString=true;}};
                            if(rdpd.getNameW()!=null){sw=sw+rdpd.getNameW();wIsString=true;}else{if(sw.equals("")){wIsString=false;}else{wIsString=true;}};
                            if(rdpd.getNameX()!=null){sx=sx+rdpd.getNameX();xIsString=true;}else{if(sx.equals("")){xIsString=false;}else{xIsString=true;}};
                            if(rdpd.getNameY()!=null){sy=sy+rdpd.getNameY();yIsString=true;}else{if(sy.equals("")){yIsString=false;}else{yIsString=true;}};
                            if(rdpd.getNameZ()!=null){sz=sz+rdpd.getNameZ();zIsString=true;}else{if(sz.equals("")){zIsString=false;}else{zIsString=true;}};
                            if(rdpd.getNameAA()!=null){saa=saa+rdpd.getNameAA();aaIsString=true;}else{if(saa.equals("")){aaIsString=false;}else{aaIsString=true;}};
                            if(rdpd.getNameAB()!=null){sab=sab+rdpd.getNameAB();abIsString=true;}else{if(sab.equals("")){abIsString=false;}else{abIsString=true;}};
                            if(rdpd.getNameAC()!=null){sac=sac+rdpd.getNameAC();acIsString=true;}else{if(sac.equals("")){acIsString=false;}else{acIsString=true;}};
                            if(rdpd.getNameAD()!=null){sad=sad+rdpd.getNameAD();adIsString=true;}else{if(sad.equals("")){adIsString=false;}else{adIsString=true;}};
                            if(rdpd.getNameAE()!=null){sae=sae+rdpd.getNameAE();aeIsString=true;}else{if(sae.equals("")){aeIsString=false;}else{aeIsString=true;}};
                            if(rdpd.getNameAF()!=null){saf=saf+rdpd.getNameAF();afIsString=true;}else{if(saf.equals("")){afIsString=false;}else{afIsString=true;}};
                            if(rdpd.getNameAG()!=null){sag=sag+rdpd.getNameAG();agIsString=true;}else{if(sag.equals("")){agIsString=false;}else{agIsString=true;}};
                            if(rdpd.getNameAH()!=null){sah=sah+rdpd.getNameAH();ahIsString=true;}else{if(sah.equals("")){ahIsString=false;}else{ahIsString=true;}};
                            if(rdpd.getNameAI()!=null){sai=sai+rdpd.getNameAI();aiIsString=true;}else{if(sai.equals("")){aiIsString=false;}else{aiIsString=true;}};
                            if(rdpd.getNameAJ()!=null){saj=saj+rdpd.getNameAJ();ajIsString=true;}else{if(saj.equals("")){ajIsString=false;}else{ajIsString=true;}};
                            if(rdpd.getNameAK()!=null){sak=sak+rdpd.getNameAK();akIsString=true;}else{if(sak.equals("")){akIsString=false;}else{akIsString=true;}};
                            if(rdpd.getNameAL()!=null){sal=sal+rdpd.getNameAL();alIsString=true;}else{if(sal.equals("")){alIsString=false;}else{alIsString=true;}};
                            if(rdpd.getNameAM()!=null){sam=sam+rdpd.getNameAM();amIsString=true;}else{if(sam.equals("")){amIsString=false;}else{amIsString=true;}};
                            if(rdpd.getNameAN()!=null){san=san+rdpd.getNameAN();anIsString=true;}else{if(san.equals("")){anIsString=false;}else{anIsString=true;}};
                            if(rdpd.getNameAO()!=null){sao=sao+rdpd.getNameAO();aoIsString=true;}else{if(sao.equals("")){aoIsString=false;}else{aoIsString=true;}};
                            if(rdpd.getNameAP()!=null){sap=sap+rdpd.getNameAP();apIsString=true;}else{if(sap.equals("")){apIsString=false;}else{apIsString=true;}};
                            if(rdpd.getNameAQ()!=null){saq=saq+rdpd.getNameAQ();aqIsString=true;}else{if(saq.equals("")){aqIsString=false;}else{aqIsString=true;}};
                            if(rdpd.getNameAR()!=null){sar=sar+rdpd.getNameAR();arIsString=true;}else{if(sar.equals("")){arIsString=false;}else{arIsString=true;}};
                            if(rdpd.getNameAS()!=null){sas=sas+rdpd.getNameAS();asIsString=true;}else{if(sas.equals("")){asIsString=false;}else{asIsString=true;}};
                            if(rdpd.getNameAT()!=null){sat=sat+rdpd.getNameAT();atIsString=true;}else{if(sat.equals("")){atIsString=false;}else{atIsString=true;}};
                            if(rdpd.getNameAU()!=null){sau=sau+rdpd.getNameAU();auIsString=true;}else{if(sau.equals("")){auIsString=false;}else{auIsString=true;}};
                            if(rdpd.getNameAV()!=null){sav=sav+rdpd.getNameAV();avIsString=true;}else{if(sav.equals("")){avIsString=false;}else{avIsString=true;}};
                            if(rdpd.getNameAW()!=null){saw=saw+rdpd.getNameAW();awIsString=true;}else{if(saw.equals("")){awIsString=false;}else{awIsString=true;}};
                            if(rdpd.getNameAX()!=null){sax=sax+rdpd.getNameAX();axIsString=true;}else{if(sax.equals("")){axIsString=false;}else{axIsString=true;}};
                            if(rdpd.getNameAY()!=null){say=say+rdpd.getNameAY();ayIsString=true;}else{if(say.equals("")){ayIsString=false;}else{ayIsString=true;}};
                            if(rdpd.getNameAZ()!=null){saz=saz+rdpd.getNameAZ();azIsString=true;}else{if(saz.equals("")){azIsString=false;}else{azIsString=true;}};
                        }
                        rdpd.setReportId(reportId2);
                        rdpd.setReportRowNum(row.getReportRowNum());
                        if(aIsCount){rdpd.setValueA(a);};if(bIsCount){rdpd.setValueB(b);};if(cIsCount){rdpd.setValueC(c);};if(dIsCount){rdpd.setValueD(d);};
                        if(eIsCount){rdpd.setValueE(e);};if(fIsCount){rdpd.setValueF(f);};if(gIsCount){rdpd.setValueG(g);};if(hIsCount){rdpd.setValueH(h);};
                        if(iIsCount){rdpd.setValueI(i);};if(jIsCount){rdpd.setValueJ(j);};if(kIsCount){rdpd.setValueK(k);};if(lIsCount){rdpd.setValueL(l);};
                        if(mIsCount){rdpd.setValueM(m);};if(nIsCount){rdpd.setValueN(n);};if(oIsCount){rdpd.setValueO(o);};if(pIsCount){rdpd.setValueP(p);};
                        if(qIsCount){rdpd.setValueQ(q);};if(rIsCount){rdpd.setValueR(r);};if(sIsCount){rdpd.setValueS(s);};if(tIsCount){rdpd.setValueT(t);};
                        if(uIsCount){rdpd.setValueU(u);};if(vIsCount){rdpd.setValueV(v);};if(wIsCount){rdpd.setValueW(w);};if(xIsCount){rdpd.setValueX(x);};
                        if(yIsCount){rdpd.setValueY(y);};if(zIsCount){rdpd.setValueZ(z);};
                        if(aaIsCount){rdpd.setValueAA(aa);};if(abIsCount){rdpd.setValueAB(ab);};if(acIsCount){rdpd.setValueAC(ac);};if(adIsCount){rdpd.setValueAD(ad);};
                        if(aeIsCount){rdpd.setValueAE(ae);};if(afIsCount){rdpd.setValueAF(af);};if(agIsCount){rdpd.setValueAG(ag);};if(ahIsCount){rdpd.setValueAH(ah);};
                        if(aiIsCount){rdpd.setValueAI(ai);};if(ajIsCount){rdpd.setValueAJ(aj);};if(akIsCount){rdpd.setValueAK(ak);};if(alIsCount){rdpd.setValueAL(al);};
                        if(amIsCount){rdpd.setValueAM(am);};if(anIsCount){rdpd.setValueAN(an);};if(aoIsCount){rdpd.setValueAO(ao);};if(apIsCount){rdpd.setValueAP(ap);};
                        if(aqIsCount){rdpd.setValueAQ(aq);};if(arIsCount){rdpd.setValueAR(ar);};if(asIsCount){rdpd.setValueAS(as);};if(atIsCount){rdpd.setValueAT(at);};
                        if(auIsCount){rdpd.setValueAU(au);};if(avIsCount){rdpd.setValueAV(av);};if(awIsCount){rdpd.setValueAW(aw);};if(axIsCount){rdpd.setValueAX(ax);};
                        if(ayIsCount){rdpd.setValueAY(ay);};if(azIsCount){rdpd.setValueAZ(az);};
                        if(aIsString){rdpd.setNameA(sa);};if(bIsString){rdpd.setNameB(sb);};if(cIsString){rdpd.setNameC(sc);};if(dIsString){rdpd.setNameD(sd);};
                        if(eIsString){rdpd.setNameE(se);};if(fIsString){rdpd.setNameF(sf);};if(gIsString){rdpd.setNameG(sg);};if(hIsString){rdpd.setNameH(sh);};
                        if(iIsString){rdpd.setNameI(si);};if(jIsString){rdpd.setNameJ(sj);};if(kIsString){rdpd.setNameK(sk);};if(lIsString){rdpd.setNameL(sl);};
                        if(mIsString){rdpd.setNameM(sm);};if(nIsString){rdpd.setNameN(sn);};if(oIsString){rdpd.setNameO(so);};if(pIsString){rdpd.setNameP(sp);};
                        if(qIsString){rdpd.setNameQ(sq);};if(rIsString){rdpd.setNameR(sr);};if(sIsString){rdpd.setNameS(ss);};if(tIsString){rdpd.setNameT(st);};
                        if(uIsString){rdpd.setNameU(su);};if(vIsString){rdpd.setNameV(sv);};if(wIsString){rdpd.setNameW(sw);};if(xIsString){rdpd.setNameX(sx);};
                        if(yIsString){rdpd.setNameY(sy);};if(zIsString){rdpd.setNameZ(sz);};
                        if(aaIsString){rdpd.setNameAA(saa);};if(abIsString){rdpd.setNameAB(sab);};if(acIsString){rdpd.setNameAC(sac);};if(adIsString){rdpd.setNameAD(sad);};
                        if(aeIsString){rdpd.setNameAE(sae);};if(afIsString){rdpd.setNameAF(saf);};if(agIsString){rdpd.setNameAG(sag);};if(ahIsString){rdpd.setNameAH(sah);};
                        if(aiIsString){rdpd.setNameAI(sai);};if(ajIsString){rdpd.setNameAJ(saj);};if(akIsString){rdpd.setNameAK(sak);};if(alIsString){rdpd.setNameAL(sal);};
                        if(amIsString){rdpd.setNameAM(sam);};if(anIsString){rdpd.setNameAN(san);};if(aoIsString){rdpd.setNameAO(sao);};if(apIsString){rdpd.setNameAP(sap);};
                        if(aqIsString){rdpd.setNameAQ(saq);};if(arIsString){rdpd.setNameAR(sar);};if(asIsString){rdpd.setNameAS(sas);};if(atIsString){rdpd.setNameAT(sat);};
                        if(auIsString){rdpd.setNameAU(sau);};if(avIsString){rdpd.setNameAV(sav);};if(awIsString){rdpd.setNameAW(saw);};if(axIsString){rdpd.setNameAX(sax);};
                        if(ayIsString){rdpd.setNameAY(say);};if(azIsString){rdpd.setNameAZ(saz);};
                        dyReportSummaryService.saveDate(rdpd);//保存此report信息
                        tableId3=tableId2;
                    }
                    DyReportInfoSummary reportInfo = new DyReportInfoSummary();
                    reportInfo.setReportId(reportId2);
                    reportInfo.setTableId(tableId3);
                    reportInfo.setBrNo(brNo);
                    reportInfo.setDataType("1");
                    reportInfo.setReportDate(reportDate);
                    reportInfo.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));

                    int count=dyReportSummaryService.reportCount(tableId3,brNo,reportDate);
                    if(count>0){
                        dyReportSummaryService.delReportInfo(tableId3,brNo,reportDate);
                    }
                    dyReportSummaryService.saveReportInfo(reportInfo);//保存reportTableInfo
                    msg +=Id.getTabName()+"报表共:"+bmCode.size()+"机构需上报"+",其中已上报"+SbReport+"机构\r\n";
                }else{
                    msg +=Id.getTabName()+"报表共:"+bmCode.size()+"机构需上报"+",其中已上报"+0+"机构\r\n";
                }
            }
        }

        return requestResult(true, msg);
    }


    public static double add(double x, double y) {
        //BigDecimal add1 = new BigDecimal(x+"");
        BigDecimal add1 = new BigDecimal(Double.toString(x));
        BigDecimal add2 = new BigDecimal(y + "");

        return add1.add(add2).doubleValue();
    }

    @RequestMapping("/getDyTableInfoListByBrNo")
    @ResponseBody
    public Object getDyTableInfoListByBrNo(String brNo, String tabType, String reportDate, String flag) {
        try {
            brNo = delParentNode(brNo);
            return dyReportSummaryService.getDyTableInfoListByBmCodes(brNo, tabType, reportDate, flag);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @RequestMapping("/toDyTableReport")
    public ModelAndView toDyTableReport(String tableId, String reportId, HttpServletRequest req) {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/dy/jsp/dy_table_report_summary");

        DyTableInfo tableInfo = DyTableModelCache.getTableInfo(tableId);
        DyReportSummaryServiceImpl dyReportSummaryServiceImpl =(DyReportSummaryServiceImpl)dyReportSummaryService;

        DyReportDataSummary reportInfo = dyReportSummaryServiceImpl.fetch(reportId);
        if (reportInfo != null) {
            //int lsM = DateUtil.getMonth(DateUtil.addMonth(new Date(), -1));
            modelAndView.addObject("tableInfo", tableInfo);
            modelAndView.addObject("reportId", reportId);
            boolean bjFlag = false;
            List<String> userRoles = (List<String>) req.getSession().getAttribute(SystemConstants.SESSION_USER_ROLE_ID);
            //去掉了(lsM == Integer.parseInt(reportInfo.getReportDate().substring(4, 6)))条件
            logger.info("----------------------" + userRoles + "---------------------------");
            if ((userRoles.contains("5") || userRoles.contains("admin")) && "1".equals(localConfig.getProperties().getPageEditFlag())) {
                bjFlag = true;
            }
            modelAndView.addObject("bjFlag", bjFlag);
        }
        return modelAndView;

    }


    private String delParentNode(String brNos) {
        if (brNos.contains(",")) {
            String brNo = "";
            String brnos[] = brNos.split(",");
            for (int i = 0; i < brnos.length; i++) {
                int num = dyReportInfoService.CheckParent(brnos[i]);
                if (num == 0) {
                    if (i == brnos.length - 1) {
                        brNo += "" + brnos[i] + "";
                    } else {
                        brNo += "" + brnos[i] + ",";
                    }
                }

            }
            return brNo;
        } else {
            return brNos;
        }
    }


    /**
     * 功能描述：汇总报表导出
     *
     * @param reportId
     * @param req
     * @return
     * @author
     * @date 2016年2月17日
     * @modify log:
     */
    @RequestMapping("/doExportExcel")
    @ResponseBody
    public Object doExportExcel( String reportId, HttpServletRequest req) {

        DyReportInfoSummaryServiceImpl dyReportInfoSummaryServiceImpl =(DyReportInfoSummaryServiceImpl)dyReportInfoSummaryService;
        DyTableInfoServiceImpl dyTableInfoServiceImpl =(DyTableInfoServiceImpl)dyTableInfoService;

        DyReportInfoSummary dyReportInfo = dyReportInfoSummaryServiceImpl.fetch(reportId);
        DyTableInfo dyTableInfo = dyTableInfoServiceImpl.fetch(dyReportInfo.getTableId());

        List<DyTableModel> dyTableModel = dyTableModelService.getModel(dyReportInfo.getTableId());
        List<DyReportDataSummary> results = dyReportSummaryService.getDate(reportId);
        try {
            // excel模板路径
            File fi = new File(localConfig.getProperties().getReportExcelTempletPath() + File.separator + dyTableInfo.getTabCode() + "_" + dyTableInfo.getVersionNo() + ".xls");
            POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(fi));
            // 读取excel模板
            HSSFWorkbook wb = new HSSFWorkbook(fs);
            HSSFSheet sheet = wb.getSheetAt(0);
            HSSFCell cell = null;
            HSSFRow row = null;
            CellStyle cellNum = wb.createCellStyle();
            CellStyle csBord = createBorderCellStyle(wb);
            cellNum.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.00"));

            String tableRow = dyTableInfo.getRowInfo();
            DyReportDataSummary rs = null;
            String rrow[] = dyTableInfo.getRowInfo().split("@");
            String rcol[] = dyTableInfo.getColInfo().split("@");
            for (int j = 0; j < rrow.length; j++) {
                String errow[] = rrow[j].split("#");
                String ercol[] = rcol[j].split("#");
                for (int k = 1; k <= Integer.valueOf(errow[1]) - Integer.valueOf(errow[2]) + 1; k++) {
                    for (int i = 0; i < results.size(); i++) {
                        if ((Integer.valueOf(errow[2]) + k - 1) == results.get(i).getReportRowNum()) {
                            rs = results.get(i);
                        }
                    }
                    row = sheet.getRow(Integer.valueOf(errow[2]) + k - 2);
                    int z = 1;
                    //从每一列最后一项做赋值
                    for (int l = (Integer.valueOf(ercol[0]) - Integer.valueOf(ercol[1]) + 1); l >= 1; l--) {
                        String isSetValue = null;
                        for (int m = 0; m < dyTableModel.size(); m++) {
                            if ((Integer.valueOf(errow[2]) + k - 1) == dyTableModel.get(m).getFileRownum()) {
                                isSetValue = getIsSetValue(Integer.valueOf(ercol[1]) + l - z, dyTableModel.get(m));
                                if (isSetValue != null && isSetValue.equals("END")) {//为结束标签时获取单元格信息
                                    isSetValue = getIsSetValue(Integer.valueOf(ercol[1]) + l - z - 1, dyTableModel.get(m));
                                    z = z + 1;
                                    if (isSetValue.split("#").length > 3) {
                                        isSetValue = getIsSetValue(Integer.valueOf(ercol[1]) + l - z, dyTableModel.get(m));
                                        z = z - 1;
                                    }
                                } else if (StrUtil.isNull(isSetValue)) {
                                    for (int n = 1; n <= (Integer.valueOf(ercol[0]) - Integer.valueOf(ercol[1]) + 1); n++) {
                                        isSetValue = getIsSetValue(Integer.valueOf(ercol[1]) + l - n, dyTableModel.get(m));
                                        if (isSetValue != null && isSetValue.equals("END")) {
                                            isSetValue = getIsSetValue(Integer.valueOf(ercol[1]) + l - n - 1, dyTableModel.get(m));
                                            z = n + 1;
                                            if (StrUtil.isNotNull(isSetValue) && isSetValue.split("#").length > 3) {
                                                isSetValue = getIsSetValue(Integer.valueOf(ercol[1]) + l - 1, dyTableModel.get(m));
                                                z = n;
                                            }
                                            continue;
                                        }
                                    }
                                }
                            }
                        }
                        //更加模板信息填入数据
                        if (isSetValue != null) {
                            String setValue[] = isSetValue.split("#");
                            if (setValue[0].equals("END")) {
                            } else if (setValue[0].equals("LD")) {

                                if (setValue[1].equals("1") || setValue[1].equals("0.0")) {
                                    cell = row.getCell(Integer.valueOf(ercol[1]) + l - 2);
                                    if (getValue(l, rs).equals("null")) {
                                        cell.setCellStyle(csBord);
                                        cell.setCellValue("");
                                    } else {
                                        cell.setCellStyle(csBord);
                                        cell.setCellValue(Double.parseDouble(getValue(l, rs)));
                                    }
                                } else if (setValue[1].equals("0")) {
                                    cell = row.getCell(Integer.valueOf(ercol[1]) + l - 2);
                                    cell.setCellStyle(csBord);
                                    String formula = cell.getCellFormula();
                                    cell.setCellFormula(formula);
                                }
                            } else if (setValue[0].equals("LS")) {
                                if (setValue[1].equals("1")) {
                                    cell = row.getCell(Integer.valueOf(ercol[1]) + l - 2);
                                    if (getName(l, rs) == null) {
                                        cell.setCellStyle(csBord);
                                        cell.setCellValue("");
                                    } else {
                                        cell.setCellStyle(csBord);
                                        cell.setCellValue(getName(l, rs));
                                    }
                                }
                            }
                        }
                    }
                }
            }

            File tf = FileUtil.createFile(localConfig.getProperties().getTempStringPath() + File.separator + "汇总报表_" + dyTableInfo.getTabCode() + "_" + dyTableInfo.getVersionNo() + "_" + System.currentTimeMillis() + ".xls");
            FileOutputStream out = new FileOutputStream(tf);
            wb.write(out);
            out.close();
            return tf.getCanonicalPath();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private CellStyle createBorderCellStyle(HSSFWorkbook wb) {
        CellStyle cs = wb.createCellStyle();
        cs.setBorderLeft(CellStyle.BORDER_THIN);
        cs.setBorderRight(CellStyle.BORDER_THIN);
        cs.setBorderTop(CellStyle.BORDER_THIN);
        cs.setBorderBottom(CellStyle.BORDER_THIN);
        cs.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.00"));
        return cs;
    }

    private String getValue(int l, DyReportDataSummary rs) {
        Double value = 0.0;
        String Fvalue = "null";
        if (l == 1) {
            value = rs.getValueA();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }

        } else if (l == 2) {
            value = rs.getValueB();
            if (value == null) {
                Fvalue = "null";
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 3) {
            value = rs.getValueC();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 4) {
            value = rs.getValueD();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 5) {
            value = rs.getValueE();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 6) {
            value = rs.getValueF();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 7) {
            value = rs.getValueG();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 8) {
            value = rs.getValueH();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 9) {
            value = rs.getValueI();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 10) {
            value = rs.getValueJ();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 11) {
            value = rs.getValueK();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 12) {
            value = rs.getValueL();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 13) {
            value = rs.getValueM();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 14) {
            value = rs.getValueN();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 15) {
            value = rs.getValueO();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 16) {
            value = rs.getValueP();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 17) {
            value = rs.getValueQ();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 18) {
            value = rs.getValueR();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 19) {
            value = rs.getValueS();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 20) {
            value = rs.getValueT();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 21) {
            value = rs.getValueU();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 22) {
            value = rs.getValueV();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 23) {
            value = rs.getValueW();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 24) {
            value = rs.getValueX();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 25) {
            value = rs.getValueY();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 26) {
            value = rs.getValueZ();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 27) {
            value = rs.getValueAA();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 28) {
            value = rs.getValueAB();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 29) {
            value = rs.getValueAC();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 30) {
            value = rs.getValueAD();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 31) {
            value = rs.getValueAE();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 32) {
            value = rs.getValueAF();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 33) {
            value = rs.getValueAG();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 34) {
            value = rs.getValueAH();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 35) {
            value = rs.getValueAI();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 36) {
            value = rs.getValueAJ();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 37) {
            value = rs.getValueAK();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 38) {
            value = rs.getValueAL();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 39) {
            value = rs.getValueAM();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 40) {
            value = rs.getValueAN();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 41) {
            value = rs.getValueAO();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 42) {
            value = rs.getValueAP();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 43) {
            value = rs.getValueAQ();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 44) {
            value = rs.getValueAR();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 45) {
            value = rs.getValueAS();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 46) {
            value = rs.getValueAT();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 47) {
            value = rs.getValueAU();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 48) {
            value = rs.getValueAV();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 49) {
            value = rs.getValueAW();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 50) {
            value = rs.getValueAX();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 51) {
            value = rs.getValueAY();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        } else if (l == 52) {
            value = rs.getValueAZ();
            if (value == null) {
            } else {
                Fvalue = value.toString();
            }
        }
        return Fvalue;
    }

    private String getName(int l, DyReportDataSummary rs) {
        String Name = "";
        String FName = "null";
        if (l == 1) {
            Name = rs.getNameA();
        } else if (l == 2) {
            Name = rs.getNameB();
        } else if (l == 3) {
            Name = rs.getNameC();
        } else if (l == 4) {
            Name = rs.getNameD();
        } else if (l == 5) {
            Name = rs.getNameE();
        } else if (l == 6) {
            Name = rs.getNameF();
        } else if (l == 7) {
            Name = rs.getNameG();
        } else if (l == 8) {
            Name = rs.getNameH();
        } else if (l == 9) {
            Name = rs.getNameI();
        } else if (l == 10) {
            Name = rs.getNameJ();
        } else if (l == 11) {
            Name = rs.getNameK();
        } else if (l == 12) {
            Name = rs.getNameL();
        } else if (l == 13) {
            Name = rs.getNameM();
        } else if (l == 14) {
            Name = rs.getNameN();
        } else if (l == 15) {
            Name = rs.getNameO();
        } else if (l == 16) {
            Name = rs.getNameP();
        } else if (l == 17) {
            Name = rs.getNameQ();
        } else if (l == 18) {
            Name = rs.getNameR();
        } else if (l == 19) {
            Name = rs.getNameS();
        } else if (l == 20) {
            Name = rs.getNameT();
        } else if (l == 21) {
            Name = rs.getNameU();
        } else if (l == 22) {
            Name = rs.getNameV();
        } else if (l == 23) {
            Name = rs.getNameW();
        } else if (l == 24) {
            Name = rs.getNameX();
        } else if (l == 25) {
            Name = rs.getNameY();
        } else if (l == 26) {
            Name = rs.getNameZ();
        } else if (l == 27) {
            Name = rs.getNameAA();
        } else if (l == 28) {
            Name = rs.getNameAB();
        } else if (l == 29) {
            Name = rs.getNameAC();
        } else if (l == 30) {
            Name = rs.getNameAD();
        } else if (l == 31) {
            Name = rs.getNameAE();
        } else if (l == 32) {
            Name = rs.getNameAF();
        } else if (l == 33) {
            Name = rs.getNameAG();
        } else if (l == 34) {
            Name = rs.getNameAH();
        } else if (l == 35) {
            Name = rs.getNameAI();
        } else if (l == 36) {
            Name = rs.getNameAJ();
        } else if (l == 37) {
            Name = rs.getNameAK();
        } else if (l == 38) {
            Name = rs.getNameAL();
        } else if (l == 39) {
            Name = rs.getNameAM();
        } else if (l == 40) {
            Name = rs.getNameAN();
        } else if (l == 41) {
            Name = rs.getNameAO();
        } else if (l == 42) {
            Name = rs.getNameAP();
        } else if (l == 43) {
            Name = rs.getNameAQ();
        } else if (l == 44) {
            Name = rs.getNameAR();
        } else if (l == 45) {
            Name = rs.getNameAS();
        } else if (l == 46) {
            Name = rs.getNameAT();
        } else if (l == 47) {
            Name = rs.getNameAU();
        } else if (l == 48) {
            Name = rs.getNameAV();
        } else if (l == 49) {
            Name = rs.getNameAW();
        } else if (l == 50) {
            Name = rs.getNameAX();
        } else if (l == 51) {
            Name = rs.getNameAY();
        } else if (l == 52) {
            Name = rs.getNameAZ();
        }
        return Name;
    }

    private String getIsSetValue(int m, DyTableModel rdTableModel) {
        String isSetValue = null;
        if (m == 1) {
            isSetValue = rdTableModel.getField_1();
        } else if (m == 2) {
            isSetValue = rdTableModel.getField_2();
        } else if (m == 3) {
            isSetValue = rdTableModel.getField_3();
        } else if (m == 4) {
            isSetValue = rdTableModel.getField_4();
        } else if (m == 5) {
            isSetValue = rdTableModel.getField_5();
        } else if (m == 6) {
            isSetValue = rdTableModel.getField_6();
        } else if (m == 7) {
            isSetValue = rdTableModel.getField_7();
        } else if (m == 8) {
            isSetValue = rdTableModel.getField_8();
        } else if (m == 9) {
            isSetValue = rdTableModel.getField_9();
        } else if (m == 10) {
            isSetValue = rdTableModel.getField_10();
        } else if (m == 11) {
            isSetValue = rdTableModel.getField_11();
        } else if (m == 12) {
            isSetValue = rdTableModel.getField_12();
        } else if (m == 13) {
            isSetValue = rdTableModel.getField_13();
        } else if (m == 14) {
            isSetValue = rdTableModel.getField_14();
        } else if (m == 15) {
            isSetValue = rdTableModel.getField_15();
        } else if (m == 16) {
            isSetValue = rdTableModel.getField_16();
        } else if (m == 17) {
            isSetValue = rdTableModel.getField_17();
        } else if (m == 18) {
            isSetValue = rdTableModel.getField_18();
        } else if (m == 19) {
            isSetValue = rdTableModel.getField_19();
        } else if (m == 20) {
            isSetValue = rdTableModel.getField_20();
        } else if (m == 21) {
            isSetValue = rdTableModel.getField_21();
        } else if (m == 22) {
            isSetValue = rdTableModel.getField_22();
        } else if (m == 23) {
            isSetValue = rdTableModel.getField_23();
        } else if (m == 24) {
            isSetValue = rdTableModel.getField_24();
        } else if (m == 25) {
            isSetValue = rdTableModel.getField_25();
        } else if (m == 26) {
            isSetValue = rdTableModel.getField_26();
        } else if (m == 27) {
            isSetValue = rdTableModel.getField_27();
        } else if (m == 28) {
            isSetValue = rdTableModel.getField_28();
        } else if (m == 29) {
            isSetValue = rdTableModel.getField_29();
        } else if (m == 30) {
            isSetValue = rdTableModel.getField_30();
        } else if (m == 31) {
            isSetValue = rdTableModel.getField_31();
        } else if (m == 32) {
            isSetValue = rdTableModel.getField_32();
        } else if (m == 33) {
            isSetValue = rdTableModel.getField_33();
        } else if (m == 34) {
            isSetValue = rdTableModel.getField_34();
        } else if (m == 35) {
            isSetValue = rdTableModel.getField_35();
        } else if (m == 36) {
            isSetValue = rdTableModel.getField_36();
        } else if (m == 37) {
            isSetValue = rdTableModel.getField_37();
        } else if (m == 38) {
            isSetValue = rdTableModel.getField_38();
        } else if (m == 39) {
            isSetValue = rdTableModel.getField_39();
        } else if (m == 40) {
            isSetValue = rdTableModel.getField_40();
        } else if (m == 41) {
            isSetValue = rdTableModel.getField_41();
        } else if (m == 42) {
            isSetValue = rdTableModel.getField_42();
        } else if (m == 43) {
            isSetValue = rdTableModel.getField_43();
        } else if (m == 44) {
            isSetValue = rdTableModel.getField_44();
        } else if (m == 45) {
            isSetValue = rdTableModel.getField_45();
        } else if (m == 46) {
            isSetValue = rdTableModel.getField_46();
        } else if (m == 47) {
            isSetValue = rdTableModel.getField_47();
        } else if (m == 48) {
            isSetValue = rdTableModel.getField_48();
        } else if (m == 49) {
            isSetValue = rdTableModel.getField_49();
        } else if (m == 50) {
            isSetValue = rdTableModel.getField_50();
        }
        return isSetValue;
    }


    @RequestMapping("/doPartTaskSummary")
    @ResponseBody
    public RequestResult doPartTaskSummary(String json, String brNo, String reportDate, String tabType) {
        try {
            DyTableInfo[] rdTableInfo = Json.fromJson(DyTableInfo[].class, json);
            brNo = delParentNode(brNo);
            List<String> bmCode = new ArrayList<String>();
            List<SysOrgSummer> sysOrgSummers = sysOrgSummerService.getBySumCode(brNo);
            for (int i = 0; i < sysOrgSummers.size(); i++) {
                bmCode.add(sysOrgSummers.get(i).getSubCode());
            }
            //String bmCode[]=brNo.split(",");
            String msg = "";
            int SbReport = 0;

            //报表汇总
            List<DyTableImportHelper> rbiList;
            String flag = "add";
            String brnos = "";
            for (int ib = 0; ib < bmCode.size(); ib++) {
                brnos = bmCode.get(ib);
            }
            String bmCodes = "(";
            for (int ic = 0; ic < bmCode.size(); ic++) {
                if (ic == (bmCode.size() - 1)) {
                    bmCodes += "'" + bmCode.get(ic) + "'";
                } else {
                    bmCodes += "'" + bmCode.get(ic) + "',";
                }
            }
            bmCodes += ")";

            if (rdTableInfo.length > 0) {
                logger.info("----------------------" + bmCodes + "---------------------------");
                for (int size = 0; size < rdTableInfo.length; size++) {
                    logger.info("------汇总" + rdTableInfo[size].getTabName() + "开始------");
                    //获取未上传该报表或报表有错误信息的机构，写sql,放入msg,在return true里面显示

                    for (int i = 0; i < bmCode.size(); i++) {
                        List<DyTableImportHelper> rbrList = dyReportSummaryService.getDyReportBrno(rdTableInfo[size].getTableId(), bmCode.get(i), tabType, reportDate);
                        if (rbrList.size() > 0) {
                            msg += SysBmglCache.getBmName(bmCode.get(i) + "该公司未导入" + rdTableInfo[size].getTabName() + "该报表或导入该报表失败！\r\n");
                        } else {

                        }
                    }


                    DyReportDataSummary rdpd = new DyReportDataSummary();
                    String reportId2 = R.UU16();
                    String tableId3 = "";
                    List<DyTableImportHelper> AllReporIdtList = dyReportSummaryService.getAllReporIdtList(bmCodes, reportDate, rdTableInfo[size].getTableId());//获取该tableId下所有要汇总机构的reportId
                    if (AllReporIdtList.size() > 0) {
                        SbReport = AllReporIdtList.size();
                        List<DyReportData> rowNum = dyReportSummaryService.getRowNum(reportDate, AllReporIdtList.get(0).getReportId());//获取该reportId的rowNum的List
                        for (DyReportData row : rowNum) {
                            double a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0,//初始化元素值
                                    l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0,
                                    w = 0, x = 0, y = 0, z = 0, aa = 0, ab = 0, ac = 0, ad = 0, ae = 0, af = 0,
                                    ag = 0, ah = 0, ai = 0, aj = 0, ak = 0, al = 0, am = 0, an = 0, ao = 0, ap = 0,
                                    aq = 0, ar = 0, as = 0, at = 0, au = 0, av = 0, aw = 0, ax = 0, ay = 0, az = 0;
                            String sa = "", sb = "", sc = "", sd = "", se = "", sf = "", sg = "", sh = "", si = "",
                                    sj = "", sk = "", sl = "", sm = "", sn = "", so = "", sp = "", sq = "", sr = "",
                                    ss = "", st = "", su = "", sv = "", sw = "", sx = "", sy = "", sz = "", saa = "",
                                    sab = "", sac = "", sad = "", sae = "", saf = "", sag = "", sah = "", sai = "",
                                    saj = "", sak = "", sal = "", sam = "", san = "", sao = "", sap = "", saq = "",
                                    sar = "", sas = "", sat = "", sau = "", sav = "", saw = "", sax = "", say = "", saz = "";
                            boolean aIsCount = true, bIsCount = true, cIsCount = true, dIsCount = true, eIsCount = true, fIsCount = true, gIsCount = true, hIsCount = true, iIsCount = true, jIsCount = true, kIsCount = true,
                                    lIsCount = true, mIsCount = true, nIsCount = true, oIsCount = true, pIsCount = true, qIsCount = true, rIsCount = true, sIsCount = true, tIsCount = true, uIsCount = true, vIsCount = true,
                                    wIsCount = true, xIsCount = true, yIsCount = true, zIsCount = true, aaIsCount = true, abIsCount = true, acIsCount = true, adIsCount = true, aeIsCount = true, afIsCount = true,
                                    agIsCount = true, ahIsCount = true, aiIsCount = true, ajIsCount = true, akIsCount = true, alIsCount = true, amIsCount = true, anIsCount = true, aoIsCount = true, apIsCount = true,
                                    aqIsCount = true, arIsCount = true, asIsCount = true, atIsCount = true, auIsCount = true, avIsCount = true, awIsCount = true, axIsCount = true, ayIsCount = true, azIsCount = true,
                                    aIsString = true, bIsString = true, cIsString = true, dIsString = true, eIsString = true, fIsString = true, gIsString = true, hIsString = true, iIsString = true, jIsString = true, kIsString = true,
                                    lIsString = true, mIsString = true, nIsString = true, oIsString = true, pIsString = true, qIsString = true, rIsString = true, sIsString = true, tIsString = true, uIsString = true, vIsString = true,
                                    wIsString = true, xIsString = true, yIsString = true, zIsString = true, aaIsString = true, abIsString = true, acIsString = true, adIsString = true, aeIsString = true, afIsString = true,
                                    agIsString = true, ahIsString = true, aiIsString = true, ajIsString = true, akIsString = true, alIsString = true, amIsString = true, anIsString = true, aoIsString = true, apIsString = true,
                                    aqIsString = true, arIsString = true, asIsString = true, atIsString = true, auIsString = true, avIsString = true, awIsString = true, axIsString = true, ayIsString = true, azIsString = true;
                            for (DyTableImportHelper Ids : AllReporIdtList) {//获取reportIds
                                String reportIds = Ids.getReportId();
                                rdpd = dyReportSummaryService.getData(reportDate, reportIds, row.getReportRowNum());//获取此reportId该列的值
                                //列值相加
                                if(rdpd.getValueA()!=null){a=add(a,rdpd.getValueA());aIsCount=true;}else{if(a==0){aIsCount=false;}else{aIsCount=true;}};
                                if(rdpd.getValueB()!=null){b=add(b,rdpd.getValueB());bIsCount=true;}else{if(b==0){bIsCount=false;}else{bIsCount=true;}};
                                if(rdpd.getValueC()!=null){c=add(c,rdpd.getValueC());cIsCount=true;}else{if(c==0){cIsCount=false;}else{cIsCount=true;}};
                                if(rdpd.getValueD()!=null){d=add(d,rdpd.getValueD());dIsCount=true;}else{if(d==0){dIsCount=false;}else{dIsCount=true;}};
                                if(rdpd.getValueE()!=null){e=add(e,rdpd.getValueE());eIsCount=true;}else{if(e==0){eIsCount=false;}else{eIsCount=true;}};
                                if(rdpd.getValueF()!=null){f=add(f,rdpd.getValueF());fIsCount=true;}else{if(f==0){fIsCount=false;}else{fIsCount=true;}};
                                if(rdpd.getValueG()!=null){g=add(g,rdpd.getValueG());gIsCount=true;}else{if(g==0){gIsCount=false;}else{gIsCount=true;}};
                                if(rdpd.getValueH()!=null){h=add(h,rdpd.getValueH());hIsCount=true;}else{if(h==0){hIsCount=false;}else{hIsCount=true;}};
                                if(rdpd.getValueI()!=null){i=add(i,rdpd.getValueI());iIsCount=true;}else{if(i==0){iIsCount=false;}else{iIsCount=true;}};
                                if(rdpd.getValueJ()!=null){j=add(j,rdpd.getValueJ());jIsCount=true;}else{if(j==0){jIsCount=false;}else{jIsCount=true;}};
                                if(rdpd.getValueK()!=null){k=add(k,rdpd.getValueK());kIsCount=true;}else{if(k==0){kIsCount=false;}else{kIsCount=true;}};
                                if(rdpd.getValueL()!=null){l=add(l,rdpd.getValueL());lIsCount=true;}else{if(l==0){lIsCount=false;}else{lIsCount=true;}};
                                if(rdpd.getValueM()!=null){m=add(m,rdpd.getValueM());mIsCount=true;}else{if(m==0){mIsCount=false;}else{mIsCount=true;}};
                                if(rdpd.getValueN()!=null){n=add(n,rdpd.getValueN());nIsCount=true;}else{if(n==0){nIsCount=false;}else{nIsCount=true;}};
                                if(rdpd.getValueO()!=null){o=add(o,rdpd.getValueO());oIsCount=true;}else{if(o==0){oIsCount=false;}else{oIsCount=true;}};
                                if(rdpd.getValueP()!=null){p=add(p,rdpd.getValueP());pIsCount=true;}else{if(p==0){pIsCount=false;}else{pIsCount=true;}};
                                if(rdpd.getValueQ()!=null){q=add(q,rdpd.getValueQ());qIsCount=true;}else{if(q==0){qIsCount=false;}else{qIsCount=true;}};
                                if(rdpd.getValueR()!=null){r=add(r,rdpd.getValueR());rIsCount=true;}else{if(r==0){rIsCount=false;}else{rIsCount=true;}};
                                if(rdpd.getValueS()!=null){s=add(s,rdpd.getValueS());sIsCount=true;}else{if(s==0){sIsCount=false;}else{sIsCount=true;}};
                                if(rdpd.getValueT()!=null){t=add(t,rdpd.getValueT());tIsCount=true;}else{if(t==0){tIsCount=false;}else{tIsCount=true;}};
                                if(rdpd.getValueU()!=null){u=add(u,rdpd.getValueU());uIsCount=true;}else{if(u==0){uIsCount=false;}else{uIsCount=true;}};
                                if(rdpd.getValueV()!=null){v=add(v,rdpd.getValueV());vIsCount=true;}else{if(v==0){vIsCount=false;}else{vIsCount=true;}};
                                if(rdpd.getValueW()!=null){w=add(w,rdpd.getValueW());wIsCount=true;}else{if(w==0){wIsCount=false;}else{wIsCount=true;}};
                                if(rdpd.getValueX()!=null){x=add(x,rdpd.getValueX());xIsCount=true;}else{if(x==0){xIsCount=false;}else{xIsCount=true;}};
                                if(rdpd.getValueY()!=null){y=add(y,rdpd.getValueY());yIsCount=true;}else{if(y==0){yIsCount=false;}else{yIsCount=true;}};
                                if(rdpd.getValueZ()!=null){z=add(z,rdpd.getValueZ());zIsCount=true;}else{if(z==0){zIsCount=false;}else{zIsCount=true;}};
                                if(rdpd.getValueAA()!=null){aa=add(aa,rdpd.getValueAA());aaIsCount=true;}else{if(aa==0){aaIsCount=false;}else{aaIsCount=true;}};
                                if(rdpd.getValueAB()!=null){ab=add(ab,rdpd.getValueAB());abIsCount=true;}else{if(ab==0){abIsCount=false;}else{abIsCount=true;}};
                                if(rdpd.getValueAC()!=null){ac=add(ac,rdpd.getValueAC());acIsCount=true;}else{if(ac==0){acIsCount=false;}else{acIsCount=true;}};
                                if(rdpd.getValueAD()!=null){ad=add(ad,rdpd.getValueAD());adIsCount=true;}else{if(ad==0){adIsCount=false;}else{adIsCount=true;}};
                                if(rdpd.getValueAE()!=null){ae=add(ae,rdpd.getValueAE());aeIsCount=true;}else{if(ae==0){aeIsCount=false;}else{aeIsCount=true;}};
                                if(rdpd.getValueAF()!=null){af=add(af,rdpd.getValueAF());afIsCount=true;}else{if(af==0){afIsCount=false;}else{afIsCount=true;}};
                                if(rdpd.getValueAG()!=null){ag=add(ag,rdpd.getValueAG());agIsCount=true;}else{if(ag==0){agIsCount=false;}else{agIsCount=true;}};
                                if(rdpd.getValueAH()!=null){ah=add(ah,rdpd.getValueAH());ahIsCount=true;}else{if(ah==0){ahIsCount=false;}else{ahIsCount=true;}};
                                if(rdpd.getValueAI()!=null){ai=add(ai,rdpd.getValueAI());aiIsCount=true;}else{if(ai==0){aiIsCount=false;}else{aiIsCount=true;}};
                                if(rdpd.getValueAJ()!=null){aj=add(aj,rdpd.getValueAJ());ajIsCount=true;}else{if(aj==0){ajIsCount=false;}else{ajIsCount=true;}};
                                if(rdpd.getValueAK()!=null){ak=add(ak,rdpd.getValueAK());akIsCount=true;}else{if(ak==0){akIsCount=false;}else{akIsCount=true;}};
                                if(rdpd.getValueAL()!=null){al=add(al,rdpd.getValueAL());alIsCount=true;}else{if(al==0){alIsCount=false;}else{alIsCount=true;}};
                                if(rdpd.getValueAM()!=null){am=add(am,rdpd.getValueAM());amIsCount=true;}else{if(am==0){amIsCount=false;}else{amIsCount=true;}};
                                if(rdpd.getValueAN()!=null){an=add(an,rdpd.getValueAN());anIsCount=true;}else{if(an==0){anIsCount=false;}else{anIsCount=true;}};
                                if(rdpd.getValueAO()!=null){ao=add(ao,rdpd.getValueAO());aoIsCount=true;}else{if(ao==0){aoIsCount=false;}else{aoIsCount=true;}};
                                if(rdpd.getValueAP()!=null){ap=add(ap,rdpd.getValueAP());apIsCount=true;}else{if(ap==0){apIsCount=false;}else{apIsCount=true;}};
                                if(rdpd.getValueAQ()!=null){aq=add(aq,rdpd.getValueAQ());aqIsCount=true;}else{if(aq==0){aqIsCount=false;}else{aqIsCount=true;}};
                                if(rdpd.getValueAR()!=null){ar=add(ar,rdpd.getValueAR());arIsCount=true;}else{if(ar==0){arIsCount=false;}else{arIsCount=true;}};
                                if(rdpd.getValueAS()!=null){as=add(as,rdpd.getValueAS());asIsCount=true;}else{if(as==0){asIsCount=false;}else{asIsCount=true;}};
                                if(rdpd.getValueAT()!=null){at=add(at,rdpd.getValueAT());atIsCount=true;}else{if(at==0){atIsCount=false;}else{atIsCount=true;}};
                                if(rdpd.getValueAU()!=null){au=add(au,rdpd.getValueAU());auIsCount=true;}else{if(au==0){auIsCount=false;}else{auIsCount=true;}};
                                if(rdpd.getValueAV()!=null){av=add(av,rdpd.getValueAV());avIsCount=true;}else{if(av==0){avIsCount=false;}else{avIsCount=true;}};
                                if(rdpd.getValueAW()!=null){aw=add(aw,rdpd.getValueAW());awIsCount=true;}else{if(aw==0){awIsCount=false;}else{awIsCount=true;}};
                                if(rdpd.getValueAX()!=null){ax=add(ax,rdpd.getValueAX());axIsCount=true;}else{if(ax==0){axIsCount=false;}else{axIsCount=true;}};
                                if(rdpd.getValueAY()!=null){ay=add(ay,rdpd.getValueAY());ayIsCount=true;}else{if(ay==0){ayIsCount=false;}else{ayIsCount=true;}};
                                if(rdpd.getValueAZ()!=null){az=add(az,rdpd.getValueAZ());azIsCount=true;}else{if(az==0){azIsCount=false;}else{azIsCount=true;}};
                                if(rdpd.getNameA()!=null){sa=sa+rdpd.getNameA();aIsString=true;}else{if(sa.equals("")){aIsString=false;}else{aIsString=true;}};
                                if(rdpd.getNameB()!=null){sb=sb+rdpd.getNameB();bIsString=true;}else{if(sb.equals("")){bIsString=false;}else{bIsString=true;}};
                                if(rdpd.getNameC()!=null){sc=sc+rdpd.getNameC();cIsString=true;}else{if(sc.equals("")){cIsString=false;}else{cIsString=true;}};
                                if(rdpd.getNameD()!=null){sd=sd+rdpd.getNameD();dIsString=true;}else{if(sd.equals("")){dIsString=false;}else{dIsString=true;}};
                                if(rdpd.getNameE()!=null){se=se+rdpd.getNameE();eIsString=true;}else{if(se.equals("")){eIsString=false;}else{eIsString=true;}};
                                if(rdpd.getNameF()!=null){sf=sf+rdpd.getNameF();fIsString=true;}else{if(sf.equals("")){fIsString=false;}else{fIsString=true;}};
                                if(rdpd.getNameG()!=null){sg=sg+rdpd.getNameG();gIsString=true;}else{if(sg.equals("")){gIsString=false;}else{gIsString=true;}};
                                if(rdpd.getNameH()!=null){sh=sh+rdpd.getNameH();hIsString=true;}else{if(sh.equals("")){hIsString=false;}else{hIsString=true;}};
                                if(rdpd.getNameI()!=null){si=si+rdpd.getNameI();iIsString=true;}else{if(si.equals("")){iIsString=false;}else{iIsString=true;}};
                                if(rdpd.getNameJ()!=null){sj=sj+rdpd.getNameJ();jIsString=true;}else{if(sj.equals("")){jIsString=false;}else{jIsString=true;}};
                                if(rdpd.getNameK()!=null){sk=sk+rdpd.getNameK();kIsString=true;}else{if(sk.equals("")){kIsString=false;}else{kIsString=true;}};
                                if(rdpd.getNameL()!=null){sl=sl+rdpd.getNameL();lIsString=true;}else{if(sl.equals("")){lIsString=false;}else{lIsString=true;}};
                                if(rdpd.getNameM()!=null){sm=sm+rdpd.getNameM();mIsString=true;}else{if(sm.equals("")){mIsString=false;}else{mIsString=true;}};
                                if(rdpd.getNameN()!=null){sn=sn+rdpd.getNameN();nIsString=true;}else{if(sn.equals("")){nIsString=false;}else{nIsString=true;}};
                                if(rdpd.getNameO()!=null){so=so+rdpd.getNameO();oIsString=true;}else{if(so.equals("")){oIsString=false;}else{oIsString=true;}};
                                if(rdpd.getNameP()!=null){sp=sp+rdpd.getNameP();pIsString=true;}else{if(sp.equals("")){pIsString=false;}else{pIsString=true;}};
                                if(rdpd.getNameQ()!=null){sq=sq+rdpd.getNameQ();qIsString=true;}else{if(sq.equals("")){qIsString=false;}else{qIsString=true;}};
                                if(rdpd.getNameR()!=null){sr=sr+rdpd.getNameR();rIsString=true;}else{if(sr.equals("")){rIsString=false;}else{rIsString=true;}};
                                if(rdpd.getNameS()!=null){ss=ss+rdpd.getNameS();sIsString=true;}else{if(ss.equals("")){sIsString=false;}else{sIsString=true;}};
                                if(rdpd.getNameT()!=null){st=st+rdpd.getNameT();tIsString=true;}else{if(st.equals("")){tIsString=false;}else{tIsString=true;}};
                                if(rdpd.getNameU()!=null){su=su+rdpd.getNameU();uIsString=true;}else{if(su.equals("")){uIsString=false;}else{uIsString=true;}};
                                if(rdpd.getNameV()!=null){sv=sv+rdpd.getNameV();vIsString=true;}else{if(sv.equals("")){vIsString=false;}else{vIsString=true;}};
                                if(rdpd.getNameW()!=null){sw=sw+rdpd.getNameW();wIsString=true;}else{if(sw.equals("")){wIsString=false;}else{wIsString=true;}};
                                if(rdpd.getNameX()!=null){sx=sx+rdpd.getNameX();xIsString=true;}else{if(sx.equals("")){xIsString=false;}else{xIsString=true;}};
                                if(rdpd.getNameY()!=null){sy=sy+rdpd.getNameY();yIsString=true;}else{if(sy.equals("")){yIsString=false;}else{yIsString=true;}};
                                if(rdpd.getNameZ()!=null){sz=sz+rdpd.getNameZ();zIsString=true;}else{if(sz.equals("")){zIsString=false;}else{zIsString=true;}};
                                if(rdpd.getNameAA()!=null){saa=saa+rdpd.getNameAA();aaIsString=true;}else{if(saa.equals("")){aaIsString=false;}else{aaIsString=true;}};
                                if(rdpd.getNameAB()!=null){sab=sab+rdpd.getNameAB();abIsString=true;}else{if(sab.equals("")){abIsString=false;}else{abIsString=true;}};
                                if(rdpd.getNameAC()!=null){sac=sac+rdpd.getNameAC();acIsString=true;}else{if(sac.equals("")){acIsString=false;}else{acIsString=true;}};
                                if(rdpd.getNameAD()!=null){sad=sad+rdpd.getNameAD();adIsString=true;}else{if(sad.equals("")){adIsString=false;}else{adIsString=true;}};
                                if(rdpd.getNameAE()!=null){sae=sae+rdpd.getNameAE();aeIsString=true;}else{if(sae.equals("")){aeIsString=false;}else{aeIsString=true;}};
                                if(rdpd.getNameAF()!=null){saf=saf+rdpd.getNameAF();afIsString=true;}else{if(saf.equals("")){afIsString=false;}else{afIsString=true;}};
                                if(rdpd.getNameAG()!=null){sag=sag+rdpd.getNameAG();agIsString=true;}else{if(sag.equals("")){agIsString=false;}else{agIsString=true;}};
                                if(rdpd.getNameAH()!=null){sah=sah+rdpd.getNameAH();ahIsString=true;}else{if(sah.equals("")){ahIsString=false;}else{ahIsString=true;}};
                                if(rdpd.getNameAI()!=null){sai=sai+rdpd.getNameAI();aiIsString=true;}else{if(sai.equals("")){aiIsString=false;}else{aiIsString=true;}};
                                if(rdpd.getNameAJ()!=null){saj=saj+rdpd.getNameAJ();ajIsString=true;}else{if(saj.equals("")){ajIsString=false;}else{ajIsString=true;}};
                                if(rdpd.getNameAK()!=null){sak=sak+rdpd.getNameAK();akIsString=true;}else{if(sak.equals("")){akIsString=false;}else{akIsString=true;}};
                                if(rdpd.getNameAL()!=null){sal=sal+rdpd.getNameAL();alIsString=true;}else{if(sal.equals("")){alIsString=false;}else{alIsString=true;}};
                                if(rdpd.getNameAM()!=null){sam=sam+rdpd.getNameAM();amIsString=true;}else{if(sam.equals("")){amIsString=false;}else{amIsString=true;}};
                                if(rdpd.getNameAN()!=null){san=san+rdpd.getNameAN();anIsString=true;}else{if(san.equals("")){anIsString=false;}else{anIsString=true;}};
                                if(rdpd.getNameAO()!=null){sao=sao+rdpd.getNameAO();aoIsString=true;}else{if(sao.equals("")){aoIsString=false;}else{aoIsString=true;}};
                                if(rdpd.getNameAP()!=null){sap=sap+rdpd.getNameAP();apIsString=true;}else{if(sap.equals("")){apIsString=false;}else{apIsString=true;}};
                                if(rdpd.getNameAQ()!=null){saq=saq+rdpd.getNameAQ();aqIsString=true;}else{if(saq.equals("")){aqIsString=false;}else{aqIsString=true;}};
                                if(rdpd.getNameAR()!=null){sar=sar+rdpd.getNameAR();arIsString=true;}else{if(sar.equals("")){arIsString=false;}else{arIsString=true;}};
                                if(rdpd.getNameAS()!=null){sas=sas+rdpd.getNameAS();asIsString=true;}else{if(sas.equals("")){asIsString=false;}else{asIsString=true;}};
                                if(rdpd.getNameAT()!=null){sat=sat+rdpd.getNameAT();atIsString=true;}else{if(sat.equals("")){atIsString=false;}else{atIsString=true;}};
                                if(rdpd.getNameAU()!=null){sau=sau+rdpd.getNameAU();auIsString=true;}else{if(sau.equals("")){auIsString=false;}else{auIsString=true;}};
                                if(rdpd.getNameAV()!=null){sav=sav+rdpd.getNameAV();avIsString=true;}else{if(sav.equals("")){avIsString=false;}else{avIsString=true;}};
                                if(rdpd.getNameAW()!=null){saw=saw+rdpd.getNameAW();awIsString=true;}else{if(saw.equals("")){awIsString=false;}else{awIsString=true;}};
                                if(rdpd.getNameAX()!=null){sax=sax+rdpd.getNameAX();axIsString=true;}else{if(sax.equals("")){axIsString=false;}else{axIsString=true;}};
                                if(rdpd.getNameAY()!=null){say=say+rdpd.getNameAY();ayIsString=true;}else{if(say.equals("")){ayIsString=false;}else{ayIsString=true;}};
                                if(rdpd.getNameAZ()!=null){saz=saz+rdpd.getNameAZ();azIsString=true;}else{if(saz.equals("")){azIsString=false;}else{azIsString=true;}};
                            }
                            rdpd.setReportId(reportId2);
                            rdpd.setReportRowNum(row.getReportRowNum());
                            if(aIsCount){rdpd.setValueA(a);};if(bIsCount){rdpd.setValueB(b);};if(cIsCount){rdpd.setValueC(c);};if(dIsCount){rdpd.setValueD(d);};
                            if(eIsCount){rdpd.setValueE(e);};if(fIsCount){rdpd.setValueF(f);};if(gIsCount){rdpd.setValueG(g);};if(hIsCount){rdpd.setValueH(h);};
                            if(iIsCount){rdpd.setValueI(i);};if(jIsCount){rdpd.setValueJ(j);};if(kIsCount){rdpd.setValueK(k);};if(lIsCount){rdpd.setValueL(l);};
                            if(mIsCount){rdpd.setValueM(m);};if(nIsCount){rdpd.setValueN(n);};if(oIsCount){rdpd.setValueO(o);};if(pIsCount){rdpd.setValueP(p);};
                            if(qIsCount){rdpd.setValueQ(q);};if(rIsCount){rdpd.setValueR(r);};if(sIsCount){rdpd.setValueS(s);};if(tIsCount){rdpd.setValueT(t);};
                            if(uIsCount){rdpd.setValueU(u);};if(vIsCount){rdpd.setValueV(v);};if(wIsCount){rdpd.setValueW(w);};if(xIsCount){rdpd.setValueX(x);};
                            if(yIsCount){rdpd.setValueY(y);};if(zIsCount){rdpd.setValueZ(z);};
                            if(aaIsCount){rdpd.setValueAA(aa);};if(abIsCount){rdpd.setValueAB(ab);};if(acIsCount){rdpd.setValueAC(ac);};if(adIsCount){rdpd.setValueAD(ad);};
                            if(aeIsCount){rdpd.setValueAE(ae);};if(afIsCount){rdpd.setValueAF(af);};if(agIsCount){rdpd.setValueAG(ag);};if(ahIsCount){rdpd.setValueAH(ah);};
                            if(aiIsCount){rdpd.setValueAI(ai);};if(ajIsCount){rdpd.setValueAJ(aj);};if(akIsCount){rdpd.setValueAK(ak);};if(alIsCount){rdpd.setValueAL(al);};
                            if(amIsCount){rdpd.setValueAM(am);};if(anIsCount){rdpd.setValueAN(an);};if(aoIsCount){rdpd.setValueAO(ao);};if(apIsCount){rdpd.setValueAP(ap);};
                            if(aqIsCount){rdpd.setValueAQ(aq);};if(arIsCount){rdpd.setValueAR(ar);};if(asIsCount){rdpd.setValueAS(as);};if(atIsCount){rdpd.setValueAT(at);};
                            if(auIsCount){rdpd.setValueAU(au);};if(avIsCount){rdpd.setValueAV(av);};if(awIsCount){rdpd.setValueAW(aw);};if(axIsCount){rdpd.setValueAX(ax);};
                            if(ayIsCount){rdpd.setValueAY(ay);};if(azIsCount){rdpd.setValueAZ(az);};
                            if(aIsString){rdpd.setNameA(sa);};if(bIsString){rdpd.setNameB(sb);};if(cIsString){rdpd.setNameC(sc);};if(dIsString){rdpd.setNameD(sd);};
                            if(eIsString){rdpd.setNameE(se);};if(fIsString){rdpd.setNameF(sf);};if(gIsString){rdpd.setNameG(sg);};if(hIsString){rdpd.setNameH(sh);};
                            if(iIsString){rdpd.setNameI(si);};if(jIsString){rdpd.setNameJ(sj);};if(kIsString){rdpd.setNameK(sk);};if(lIsString){rdpd.setNameL(sl);};
                            if(mIsString){rdpd.setNameM(sm);};if(nIsString){rdpd.setNameN(sn);};if(oIsString){rdpd.setNameO(so);};if(pIsString){rdpd.setNameP(sp);};
                            if(qIsString){rdpd.setNameQ(sq);};if(rIsString){rdpd.setNameR(sr);};if(sIsString){rdpd.setNameS(ss);};if(tIsString){rdpd.setNameT(st);};
                            if(uIsString){rdpd.setNameU(su);};if(vIsString){rdpd.setNameV(sv);};if(wIsString){rdpd.setNameW(sw);};if(xIsString){rdpd.setNameX(sx);};
                            if(yIsString){rdpd.setNameY(sy);};if(zIsString){rdpd.setNameZ(sz);};
                            if(aaIsString){rdpd.setNameAA(saa);};if(abIsString){rdpd.setNameAB(sab);};if(acIsString){rdpd.setNameAC(sac);};if(adIsString){rdpd.setNameAD(sad);};
                            if(aeIsString){rdpd.setNameAE(sae);};if(afIsString){rdpd.setNameAF(saf);};if(agIsString){rdpd.setNameAG(sag);};if(ahIsString){rdpd.setNameAH(sah);};
                            if(aiIsString){rdpd.setNameAI(sai);};if(ajIsString){rdpd.setNameAJ(saj);};if(akIsString){rdpd.setNameAK(sak);};if(alIsString){rdpd.setNameAL(sal);};
                            if(amIsString){rdpd.setNameAM(sam);};if(anIsString){rdpd.setNameAN(san);};if(aoIsString){rdpd.setNameAO(sao);};if(apIsString){rdpd.setNameAP(sap);};
                            if(aqIsString){rdpd.setNameAQ(saq);};if(arIsString){rdpd.setNameAR(sar);};if(asIsString){rdpd.setNameAS(sas);};if(atIsString){rdpd.setNameAT(sat);};
                            if(auIsString){rdpd.setNameAU(sau);};if(avIsString){rdpd.setNameAV(sav);};if(awIsString){rdpd.setNameAW(saw);};if(axIsString){rdpd.setNameAX(sax);};
                            if(ayIsString){rdpd.setNameAY(say);};if(azIsString){rdpd.setNameAZ(saz);};
                            dyReportSummaryService.saveDate(rdpd);//保存此report信息
                            tableId3=rdTableInfo[size].getTableId();
                        }
                        DyReportInfoSummary reportInfo = new DyReportInfoSummary();
                        reportInfo.setReportId(reportId2);
                        reportInfo.setTableId(tableId3);
                        reportInfo.setBrNo(brNo);
                        reportInfo.setDataType("1");
                        reportInfo.setReportDate(reportDate);
                        reportInfo.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                        int count=dyReportSummaryService.reportCount(tableId3,brNo,reportDate);
                        if(count>0){
                            dyReportSummaryService.delReportInfo(tableId3,brNo,reportDate);
                        }
                        dyReportSummaryService.saveReportInfo(reportInfo);//保存reportTableInfo
                        logger.info("------汇总"+rdTableInfo[size].getTabName()+"成功------");
                        msg +=rdTableInfo[size].getTabName()+"报表共:"+bmCode.size()+"机构需上报"+",其中已上报"+SbReport+"机构\r\n";
                    }else{
                        return requestResult(false,"未导入"+rdTableInfo[size].getTabName()+"该类报表");

                    }
                }
            }

            return requestResult(true, msg);
        } catch (Exception e) {
            e.printStackTrace();
            logger.info("------汇总失败:" + e.getMessage() + "------");
            return requestResult(false, e.getMessage());
        }

    }


}
