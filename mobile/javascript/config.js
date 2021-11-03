﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#4A555A";bookConfig.iconColor="#E5E5E5";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#b7b7b7";bookConfig.toolbarAlwaysShow="No";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Show";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#4F6D75";bookConfig.bgEndColor="#4F6D75";bookConfig.bgMRotation="-90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="tile";bookConfig.backgroundOpacity="100";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.5";bookConfig.RightShadowWidth="65";bookConfig.RightShadowAlpha="0.5";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="Yes";bookConfig.hardCoverBorderWidth="6";bookConfig.borderColor="#485a6e";bookConfig.outerCoverBorder="No";bookConfig.cornerRound="4";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#cccccc";bookConfig.showThicknessOnMobile="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#979322";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=317;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1634;;bookConfig.securityType="1";bookConfig.bookTitle="MODUL TEMATIK BERBASIS LINGKUNGAN HIDUP DAN KEARIFAN LOKAL";bookConfig.bookmarkCR="6349cd010ed06f0261947d03663f73139ea299bb";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947239517","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube1","x":"0.2268321513002364","y":"0.3160925925925926","width":"0.5402186761229314","height":"0.21883333333333332","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"uVlFKGyznyk","playerParameters":"autoplay=0\&loop=0"},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947232934","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube2","x":"0.2208628841607565","y":"0.6452777777777777","width":"0.5461879432624114","height":"0.22257407407407406","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"-AKZw4Mu0-s","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947234333","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube3","x":"0.17310874704491724","y":"0.6939074074074074","width":"0.6566193853427896","height":"0.1702037037037037","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"QdS_G19phok","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947233405","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube4","x":"0.14027777777777778","y":"0.6284444444444445","width":"0.7133274231678487","height":"0.2337962962962963","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"0GT_VrthHt0","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947236248","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube5","x":"0.25070921985815603","y":"0.28429629629629627","width":"0.4805260047281324","height":"0.3965185185185185","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"SkRYj1qxvmc","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947237868","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube6","x":"0.15520094562647754","y":"0.23753703703703705","width":"0.7013888888888888","height":"0.41709259259259257","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"vwdM9Ycx_A8","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947235591","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube7","x":"0.3492021276595745","y":"0.7200925925925926","width":"0.49544917257683213","height":"0.16833333333333333","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"RDvW3MeZrAU","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947234644","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube8","x":"0.14326241134751774","y":"0.2599814814814815","width":"0.7103427895981087","height":"0.43392592592592594","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"P5dOjKNLdaI","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947232322","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube9","x":"0.13132387706855791","y":"0.18516666666666667","width":"0.7222813238770686","height":"0.41709259259259257","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"R7JfusP0Occ","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947232860","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube10","x":"0.30741725768321515","y":"0.7163518518518519","width":"0.3611406619385343","height":"0.13092592592592592","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"heLQkZXloM8","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947233197","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube11","x":"0.14624704491725768","y":"0.4619814814814815","width":"0.6775118203309692","height":"0.3553703703703704","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"7eYS-5T_UcI","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947231942","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube12","x":"0.1641548463356974","y":"0.26746296296296296","width":"0.6566193853427896","height":"0.4096111111111111","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"WF0IAgquCEU","playerParameters":"autoplay=0\&loop=0"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947233538","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube13","x":"0.12236997635933806","y":"0.08042592592592593","width":"0.7073581560283688","height":"0.1889074074074074","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"55CU1_cXcd4","playerParameters":"autoplay=0\&loop=0"},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"20212194723163","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube14","x":"0.11640070921985815","y":"0.6752037037037038","width":"0.7222813238770686","height":"0.19077777777777777","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"O0TAtCq3ceI","playerParameters":"autoplay=0\&loop=0"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"20212194723176","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube15","x":"0.12236997635933806","y":"0.12905555555555556","width":"0.7342198581560284","height":"0.2094814814814815","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"a8cCBysRN_o","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947233624","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube16","x":"0.14923167848699764","y":"0.6265740740740741","width":"0.6506501182033096","height":"0.22818518518518519","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"y3r-VfuUz14","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202121947232864","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube17","x":"0.12535460992907801","y":"0.21509259259259259","width":"0.7222813238770686","height":"0.33666666666666667","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"qHhH5vm9B3w","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"20212194723631","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube18","x":"0.188031914893617","y":"0.26185185185185184","width":"0.6148345153664303","height":"0.30112962962962964","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"BPYg5o5Meyk","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"20212194723968","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.19503500000000001","y":"0.699524","width":"0.722335","height":"-0.032297","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1057.5","pageHeight":"1687.5"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://gretha.my.id/audiobuku/sd-kelas-4-","linkTarget":"Blank"}}],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=true;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}