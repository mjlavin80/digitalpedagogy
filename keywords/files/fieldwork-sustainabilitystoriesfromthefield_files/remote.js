(function(g){var window=this;var Gza=function(a,b){var c=[];g.vi(b,function(a){try{var b=g.zD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.yD(b)&&c.push(a):c.push(a)},a);
return c},Hza=function(a,b){var c=Gza(a,b);
(0,g.G)(c,function(a){g.zD.prototype.remove.call(this,a)},a)},Iza=function(){var a=g.tH;
Hza(a,a.g.Wd(!0))},Q7=function(a,b){g.O0.call(this,g.T("YTP_MDX_TITLE"),0,a,b);
this.T=a;this.F={};this.P(a,"onMdxReceiversChange",this.I);this.P(a,"presentingplayerstatechange",this.I);this.I()},Jza=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},Kza=function(a,b){var c=new window.XMLHttpRequest;
c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}},R7=function(){var a=Jza();
a&&a(!1,"No cast extension found")},S7=function(a,b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},T7=function(a){if(a>=g.rsa.length)R7();
else{var b=g.rsa[a],c="chrome-extension://"+b+g.osa;0<=g.j2.indexOf(b)?Kza(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,S7(c,R7)):T7(a+1)}):S7(c,function(){T7(a+1)})}},U7=function(a){return 0<=window.navigator.userAgent.indexOf(a)},Lza=function(){if(g.psa){var a=2,b=Jza(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;S7("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",R7,c)}},Mza=function(){if(U7("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Lza();a({command:"cast.sender.init"});return}}if(!window.chrome||U7("Edge"))R7();else if(Lza(),U7("Android")&&U7("Chrome/")&&window.navigator.presentation){a="";var b=g.Ph();55<=b?a="55":50<=b&&(a="50");S7("//www.gstatic.com/eureka/clank"+a+g.osa,R7)}else T7(0)},Nza=function(a){g.MG[a]&&(a=g.MG[a],(0,g.G)(a,function(a){g.KG[a]&&delete g.KG[a]}),a.length=0)},Oza=function(a){var b=g.JG();
if(b)if(b.clear(a),a)Nza(a);else for(var c in g.MG)Nza(c)},Pza=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Hg(a)||"";b&&(this.port=":"+b);this.domain=g.Gg(a)||"";a=g.Hb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ya(a,"10.0")&&(this.o=!1))},Qza=function(a){return(0,g.J)(a,function(a){return{key:a.id,
name:a.name}})},Rza=function(){var a=window.document.createElement("a");
g.Wc(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Za(a)},Sza=function(a,b){var c=g.Bd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Xc(c,g.ae("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},Tza=function(){var a=Rza(),b=window.document.getElementById(a),c=b&&g.ZF(b,"loaded");
c||b&&!c||(b=Sza(a,function(){g.ZF(b,"loaded")||(g.YF(b,"loaded","true"),g.QG(a),g.ZE(g.Ea(Oza,a),0))}))},Uza=function(){var a=0<=g.Hb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.AL||a},V7=function(a){g.JH("cloudview",a)},W7=function(a){g.ua("yt.mdx.remote.cloudview.initializing_",a,void 0)},X7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},Vza=function(a,b,c,d){var e=!1;
X7()||(a=new g.KI(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.vH("yt-remote-cast-available",a);g.RG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){V7("onReceiverSelected: "+a.friendlyName);
g.vH("yt-remote-cast-receiver",a);g.RG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){V7("onReceiverResumed: "+a.friendlyName);
g.vH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){V7("onSessionChange: "+g.RH(a));
a||g.xH("yt-remote-cast-receiver");g.RG("yt-remote-cast2-session-change",a)}),g.ua("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
V7("cloudview.createSingleton_: "+e);return e},Wza=function(a){V7("setApiReady_ "+a);
g.ua("yt.mdx.remote.cloudview.apiReady_",a,void 0)},Xza=function(){V7("dispose");
var a=X7();a&&a.dispose();g.ua("yt.mdx.remote.cloudview.instance_",null,void 0);Wza(!1);g.OG(Y7);Y7.length=0},Z7=function(){return!!g.wH("yt-remote-cast-installed")},Yza=function(){var a=g.wH("yt-remote-cast-receiver");
return a?a.friendlyName:null},Zza=function(){V7("clearCurrentReceiver");
g.xH("yt-remote-cast-receiver")},$7=function(a){g.JH("cloudview",a)},$za=function(){return Z7()?X7()?X7().getCastSession():($7("getCastSelector: Cast is not initialized."),null):($7("getCastSelector: Cast API is not installed!"),null)},a8=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},b8=function(){Z7()?X7()?a8()?(V7("Requesting cast selector."),X7().requestSession()):(V7("Wait for cast API to be ready to request the session."),Y7.push(g.NG("yt-remote-cast2-api-ready",b8))):$7("requestCastSelector: Cast is not initialized."):
$7("requestCastSelector: Cast API is not installed!")},c8=function(a,b){a8()?X7().setConnectedScreenStatus(a,b):$7("setConnectedScreenStatus called before ready.")},d8=function(a){V7("setCastInstalled_ "+a);
g.vH("yt-remote-cast-installed",a)},aAa=function(a,b){X7().init(a,b)},bAa=function(a,b){d8(!0);
W7(!1);aAa(a,function(a){a?(Wza(!0),g.QG("yt-remote-cast2-api-ready")):($7("Failed to initialize cast API."),d8(!1),g.xH("yt-remote-cast-available"),g.xH("yt-remote-cast-receiver"),Xza());b(a)})},cAa=function(a,b,c,d,e,f,k){Uza()?Vza(b,e,f,k)&&(W7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?bAa(a,c):(window.__onGCastApiAvailable=function(b,d){b?bAa(a,c):($7("Failed to load cast API: "+d),d8(!1),W7(!1),g.xH("yt-remote-cast-available"),g.xH("yt-remote-cast-receiver"),Xza(),
c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Tza():Mza())):V7("Cannot initialize because not running Chrome")},f8=function(a,b){g.AG.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.NB;this.A=this.o=null;this.I=(0,g.z)(this.YN,this);this.F=(0,g.z)(this.pl,this);this.G=(0,g.z)(this.XN,this);this.J=(0,g.z)(this.lO,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.ku,this),dAa(this))):c=3;0!=c&&(b?this.ku(c):g.ZE((0,g.z)(function(){this.ku(c)},this),0));
var d=$za();d&&e8(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},g8=function(a){return new g.QI(a.B.getPlayerContextData())},dAa=function(a){(0,g.G)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Ea(this.pQ,a),this))},a)},eAa=function(a){(0,g.G)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},h8=function(a,b){50>a.C.Ic()&&g.PB(a.C,b)},j8=function(a,b,c){var d=g8(a);
g.TI(d,c);-1E3!=d.g&&(d.g=b);i8(a,d)},k8=function(a,b,c){a.B.sendMessage(b,c)},i8=function(a,b){eAa(a);
a.B.setPlayerContextData(g.WI(b));dAa(a)},e8=function(a,b){a.A&&(a.A.removeUpdateListener(a.I),a.A.removeMediaListener(a.F),a.pl(null));
a.A=b;a.A&&(l8("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.I),a.A.addMediaListener(a.F),a.A.media.length&&a.pl(a.A.media[0]))},fAa=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=g8(a);b.contentId!=d.videoId&&l8("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.TI(d,a.o.getEstimatedTime());i8(a,d)}else l8("No cast media video. Ignoring state update.")},l8=function(a){g.JH("CP",a)},m8=function(a,b,c){return(0,g.z)(function(a){this.Zb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Zb("Retrying "+b+" using MDx browser channel."),k8(this,b,c))},a)},n8=function(a){g.WH.call(this,"ScreenServiceProxy");
this.bd=a;this.o=[];this.o.push(this.bd.$_s("screenChange",(0,g.z)(this.FT,this)));this.o.push(this.bd.$_s("onlineScreenChange",(0,g.z)(this.VP,this)))},o8=function(){return g.x("yt.mdx.remote.currentScreenId_")},p8=function(a){g.JH("remote",a)},q8=function(a){g.ua("yt.mdx.remote.connectData_",a,void 0)},r8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},gAa=function(){var a=r8();
if(g.Wb(a)){a=g.bI();var b=g.wH("yt-remote-session-name")||"",c=g.wH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ua("yt.mdx.remote.channelParams_",a,void 0)}},hAa=function(a){a?(g.vH("yt-remote-session-app",a.app),g.vH("yt-remote-session-name",a.name)):(g.xH("yt-remote-session-app"),g.xH("yt-remote-session-name"));
g.ua("yt.mdx.remote.channelParams_",a,void 0)},s8=function(){return g.x("yt.mdx.remote.connection_")},t8=function(){var a=s8();
return!!a&&3!=a.getProxyState()},iAa=function(){return g.x("yt.mdx.remote.connectData_")},v8=function(){if(!u8){var a=g.x("yt.mdx.remote.screenService_");
u8=a?new n8(a):null}return u8},w8=function(){var a=g.cI();
if(!a)return null;var b=v8().fe();return g.VH(b,a)},x8=function(){var a=o8();
if(!a)return null;var b=v8().fe();return g.VH(b,a)},jAa=function(){var a=v8().bd.$_gos();
var b=x8();b&&s8()&&(g.UH(a,b)||a.push(b));return Qza(a)},kAa=function(){var a=jAa(),b=x8();
b||(b=w8());return g.fb(a,function(a){return b&&g.OH(b,a.key)?!0:!1})},y8=function(){var a=kAa();
!a&&Z7()&&Yza()&&(a={key:"cast-selector-receiver",name:Yza()});return a},lAa=function(){var a=jAa();
Z7()&&g.wH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},mAa=function(a){g.ua("yt.mdx.remote.currentScreenId_",a,void 0)},A8=function(a){var b=s8();
q8(null);a||mAa("");g.ua("yt.mdx.remote.connection_",a,void 0);z8&&((0,g.G)(z8,function(b){b(a)}),z8.length=0);
b&&!a?g.RG("yt-remote-connection-change",!1):!b&&a&&g.RG("yt-remote-connection-change",!0)},C8=function(a,b){x8()&&x8();
mAa(a.id);var c=new g.bJ(B8,a,r8());c.connect(b,iAa());c.subscribe("beforeDisconnect",function(a){g.RG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){s8()&&A8(null)});
A8(c)},nAa=function(){var a=w8();
a?(p8("Resume connection to: "+g.RH(a)),C8(a,0)):(g.jI(),Zza(),p8("Skipping connecting because no session screen found."))},D8=function(){a8()?X7().stopSession():$7("stopSession called before API ready.");
var a=s8();a&&(a.disconnect(1),A8(null))},oAa=function(a){p8("remote.onCastSessionChange_: "+g.RH(a));
if(a){var b=x8();b&&b.id==a.id?c8(b.id,"YouTube TV"):(b&&D8(),C8(a,1))}else s8()&&D8()},pAa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.qE("MDX_CONFIG")||b;g.tH&&Iza();g.dI();B8||(B8=new Pza(b?b.loungeApiHost:void 0),g.lI()&&(B8.g="/api/loungedev"));z8||(z8=g.x("yt.mdx.remote.deferredProxies_")||[],g.ua("yt.mdx.remote.deferredProxies_",z8,void 0));gAa();var c=v8();if(!c){var d=new g.wI(B8);g.ua("yt.mdx.remote.screenService_",d,void 0);c=v8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);cAa(a,d,function(a){a?o8()&&c8(o8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.RG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.ua("yt.mdx.remote.initialized_",!0,void 0),p8("Initializing: "+g.yg(b)),E8.push(g.NG("yt-remote-cast2-availability-change",function(){g.RG("yt-remote-receiver-availability-change")})),E8.push(g.NG("yt-remote-cast2-receiver-selected",function(){q8(null);
g.RG("yt-remote-auto-connect","cast-selector-receiver")})),E8.push(g.NG("yt-remote-cast2-receiver-resumed",function(){g.RG("yt-remote-receiver-resumed","cast-selector-receiver")})),E8.push(g.NG("yt-remote-cast2-session-change",oAa)),E8.push(g.NG("yt-remote-connection-change",function(a){a?c8(o8(),"YouTube TV"):w8()||(c8(null,null),Zza())})),a=r8(),b.isAuto&&(a.id+="#dial"),g.EF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),p8(" -- with channel params: "+
g.yg(a)),hAa(a),c.start(),o8()||nAa())},F8=function(a,b,c){g.L.call(this);
this.D=null!=c?(0,g.z)(a,c):a;this.qc=b;this.C=(0,g.z)(this.rH,this);this.g=!1;this.o=0;this.A=this.za=null;this.B=[]},G8=function(a,b,c){g.L.call(this);
this.F=a;this.T=b;this.o=new g.xG(this);g.M(this,this.o);this.o.P(b,"onCaptionsTrackListChanged",this.oP);this.o.P(b,"captionschanged",this.WN);this.o.P(b,"captionssettingschanged",this.iC);this.o.P(b,"videoplayerreset",this.qo);this.o.P(b,"mdxautoplaycancel",this.zG);this.O=this.o.P(b,"onVolumeChange",this.AA);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.NA,this);c.subscribe("remotePlayerChange",this.rl,this);c.subscribe("remoteQueueChange",this.qo,this);c.subscribe("autoplayUpNext",this.nA,
this);c.subscribe("previousNextChange",this.KA,this);c.subscribe("nowAutoplaying",this.CA,this);c.subscribe("autoplayDismissed",this.mA,this);this.suggestion=null;this.G=new g.eR(64);this.A=new g.Ct(this.dC,500,this);g.M(this,this.A);this.B=new g.Ct(this.eC,1E3,this);g.M(this,this.B);this.J=new F8(this.eT,0,this);g.M(this,this.J);this.C={};this.L=new g.Ct(this.GC,1E3,this);g.M(this,this.L);this.I=new g.sk(this.JK,1E3,this);g.M(this,this.I);this.N=g.y;this.iC();this.qo();this.rl()},H8=function(a,b){var c=
a.F,d=a.T.ga().lengthSeconds;
c.I=b||0;c.g.U("progresssync",b,d)},qAa=function(a){H8(a,0);
a.A.stop();I8(a,new g.eR(64))},K8=function(a,b){if(J8(a)&&!a.D){var c=null;
b&&(c={style:a.T.ni()},g.dc(c,b));a.g.WB(a.T.ga().videoId,c);a.C=g8(a.g).o}},L8=function(a,b){var c=a.T.Qf();
if(c){var d=c.be();var e=c.listId.toString()}var f=a.T.ga();c=a.g;var k=a.T.ga().videoId,l=d;d=f.playerParams;f=f.pj;var m=g8(c),n=e||m.listId;l=l||0;var q={videoId:k,currentIndex:l};g.VI(m,k,l);g.t(b)&&(g.TI(m,b),q.currentTime=b);g.t(n)&&(q.listId=n);null!=d&&(q.playerParams=d);null!=f&&(q.clickTrackingParams=f);k8(c,"setPlaylist",q);e||i8(c,m);I8(a,new g.eR(1))},rAa=function(a,b){if(b){var c=a.T.wc("captions","tracklist",{Ux:1});
c&&c.length?(a.T.Dd("captions","track",b),a.D=!1):(a.T.bl("captions"),a.D=!0)}else a.T.Dd("captions","track",{})},J8=function(a){return g8(a.g).videoId==a.T.ga().videoId},I8=function(a,b){a.B.stop();
var c=a.G;if(!g.jR(c,b)){var d=g.V(b,2);if(d!=g.V(a.G,2)){var e=a.T;g.G1(e.app,d,e.playerType)}a.G=b;sAa(a.F,c,b)}},M8=function(a){g.Y.call(this,{H:"div",
M:"ytp-remote",K:[{H:"div",M:"ytp-remote-display-status",K:[{H:"div",M:"ytp-remote-display-status-icon",K:[g.vE()]},{H:"div",M:"ytp-remote-display-status-text",K:["{{statustext}}"]}]}]});this.o=new g.GX(this,250);g.M(this,this.o);this.A=a;this.P(a,"presentingplayerstatechange",this.B);tAa(this,g.QW(a))},tAa=function(a,b){if(3==a.A.Wa()){var c={RECEIVER_NAME:a.A.wc("remote","currentReceiver").name};
c=g.V(b,128)?g.T("YTP_MDX_STATUS_ERROR_2",c):b.ib()||g.V(b,4)?g.T("YTP_MDX_STATUS_PLAYING_2",c):g.T("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},N8=function(a){g.zX.call(this,a);
this.A={key:g.TH(),name:g.T("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.eR(64);this.I=0;var b=g.JW(a).G;b&&(b=b.A&&b.A.g)&&(b=new Q7(a,b),g.M(this,b));b=new M8(a);g.M(this,b);g.eX(a,b.element,4)},sAa=function(a,b,c){a.F=c;
a.g.U("presentingplayerstatechange",new g.oR(c,b))},O8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)D8();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ga(1),e=d.videoId;if(c||e){var f=a.g.Qf();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.fc(l).videoId}else k=[e];f=a.g.getCurrentTime();c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.pj,index:Math.max(a.g.ez(),0),currentTime:0==f?void 0:f}}else c=null;p8("Connecting to: "+g.yg(b));"cast-selector-receiver"==b.key?(q8(c||null),a8()?X7().setLaunchParams(c||null):$7("setLaunchParams called before ready.")):!c&&
t8()&&o8()==b.key?g.RG("yt-remote-connection-change",!0):(D8(),q8(c||null),c=v8().fe(),(c=g.VH(c,b.key))&&C8(c,1))}};
g.p(Q7,g.O0);Q7.prototype.I=function(){var a=this.T.wc("remote","receivers");a&&1<a.length&&!this.T.wc("remote","quickCast")?(this.F=g.Gb(a,this.B,this),g.P0(this,(0,g.J)(a,this.B)),a=this.T.wc("remote","currentReceiver"),this.lf(this.B(a)),this.enable(!0)):this.enable(!1)};
Q7.prototype.B=function(a){return a.key};
Q7.prototype.kf=function(a){return"cast-selector-receiver"==a?g.T("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
Q7.prototype.qd=function(a){g.O0.prototype.qd.call(this,a);this.T.Dd("remote","currentReceiver",this.F[a]);this.A.Kb()};
g.h=Pza.prototype;g.h.Xh=function(a){var b=this.g;if(g.t(void 0)?0:this.o)b="https://"+this.domain+this.port+this.g;return g.Qg(b+a,{})};
g.h.iu=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Tb:g.Ea(this.AT,c,!0),onError:g.Ea(this.zT,d),Fd:g.Ea(this.BT,d)};b&&(c.Mb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.oF(a,c)};
g.h.AT=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.zT=function(a,b){a(Error("Request error: "+b.status))};
g.h.BT=function(a){a(Error("request timed out"))};
var Y7=[];g.A(f8,g.AG);g.h=f8.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,m8(this,"play")):k8(this,"play"),j8(this,1,g.UI(g8(this))),this.U("remotePlayerChange")):h8(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,m8(this,"pause")):k8(this,"pause"),j8(this,2,g.UI(g8(this))),this.U("remotePlayerChange")):h8(this,this.pause)};
g.h.RC=function(a){if(1==this.g){if(this.o){var b=g8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.ib()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,m8(this,"seekTo",{newTime:a}))}else k8(this,"seekTo",{newTime:a});j8(this,3,a);this.U("remotePlayerChange")}else h8(this,g.Ea(this.RC,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,m8(this,"stopVideo")):k8(this,"stopVideo");var a=g8(this);a.index=-1;a.videoId="";g.RI(a);i8(this,a);this.U("remotePlayerChange")}else h8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=g8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){l8("set receiver volume: "+d)},this),(0,g.z)(function(){this.Zb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){l8("set receiver muted: "+b)},this),(0,g.z)(function(){this.Zb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);k8(this,"setVolume",e)}c.muted=b;c.volume=a;i8(this,c)}else h8(this,g.Ea(this.setVolume,a,b))};
g.h.WB=function(a,b){if(1==this.g){var c=g8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.yg(b.style),g.dc(d,c.o));k8(this,"setSubtitlesTrack",d);i8(this,c)}else h8(this,g.Ea(this.WB,a,b))};
g.h.ju=function(a,b){if(1==this.g){k8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Qc.id});var c=g8(this);c.audioTrackId=b.Qc.id;i8(this,c)}else h8(this,g.Ea(this.ju,a,b))};
g.h.QC=function(a,b){if(1==this.g){if(a&&b){var c=g8(this);g.VI(c,a,b);i8(this,c)}k8(this,"previous")}else h8(this,g.Ea(this.QC,a,b))};
g.h.PC=function(a,b){if(1==this.g){if(a&&b){var c=g8(this);g.VI(c,a,b);i8(this,c)}k8(this,"next")}else h8(this,g.Ea(this.PC,a,b))};
g.h.ow=function(){1==this.g?k8(this,"dismissAutoplay"):h8(this,this.ow)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.U("proxyStateChange",a,this.g)}f8.Z.dispose.call(this)};
g.h.X=function(){eAa(this);this.B=null;this.C.clear();e8(this,null);f8.Z.X.call(this)};
g.h.ku=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.U("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.QB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.pQ=function(a,b){this.U(a,b)};
g.h.YN=function(a){if(!a)this.pl(null),e8(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=g8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)l8("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,i8(this,b)}};
g.h.pl=function(a){l8("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),fAa(this),this.U("remotePlayerChange")};
g.h.XN=function(a){a?(fAa(this),this.U("remotePlayerChange")):this.pl(null)};
g.h.lO=function(){var a=$za();a&&e8(this,a)};
g.h.Zb=function(a){g.JH("CP",a)};
g.A(n8,g.WH);g.h=n8.prototype;g.h.fe=function(a){return this.bd.$_gs(a)};
g.h.contains=function(a){return!!this.bd.$_c(a)};
g.h.get=function(a){return this.bd.$_g(a)};
g.h.start=function(){this.bd.$_st()};
g.h.rp=function(a,b,c){this.bd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.bd.$_r(a,b,c)};
g.h.Yo=function(a,b,c,d){this.bd.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.o.length;a<b;++a)this.bd.$_ubk(this.o[a]);this.o.length=0;this.bd=null;n8.Z.X.call(this)};
g.h.FT=function(){this.U("screenChange")};
g.h.VP=function(){this.U("onlineScreenChange")};
var B8=null,z8=null,E8=[],u8=null;g.A(F8,g.L);g.h=F8.prototype;g.h.qH=function(a){this.B=arguments;this.g=!1;this.za?this.A=(0,g.F)()+this.qc:this.za=g.sg(this.C,this.qc)};
g.h.stop=function(){this.za&&(g.tg(this.za),this.za=null);this.A=null;this.g=!1;this.B=[]};
g.h.pause=function(){++this.o};
g.h.resume=function(){this.o&&(--this.o,!this.o&&this.g&&(this.g=!1,this.D.apply(null,this.B)))};
g.h.X=function(){this.stop();F8.Z.X.call(this)};
g.h.rH=function(){this.A?(this.za=g.sg(this.C,this.A-(0,g.F)()),this.A=null):(this.za=null,this.o?this.g=!0:(this.g=!1,this.D.apply(null,this.B)))};g.p(G8,g.L);g.h=G8.prototype;
g.h.X=function(){g.L.prototype.X.call(this);this.A.stop();this.B.stop();this.J.stop();this.N();this.g.unsubscribe("proxyStateChange",this.NA,this);this.g.unsubscribe("remotePlayerChange",this.rl,this);this.g.unsubscribe("remoteQueueChange",this.qo,this);this.g.unsubscribe("autoplayUpNext",this.nA,this);this.g.unsubscribe("previousNextChange",this.KA,this);this.g.unsubscribe("nowAutoplaying",this.CA,this);this.g.unsubscribe("autoplayDismissed",this.mA,this);this.g=this.F=null};
g.h.Uy=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(J8(this)){if(1081!=g8(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":g8(this.g).ib()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.dj(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.g.ju(this.T.ga().videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.T.getCurrentTime();L8(this,0==c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.g.ju(this.T.ga().videoId,c)}};
g.h.WN=function(a){this.J.qH(a)};
g.h.eT=function(a){this.Uy("control_subtitles_set_track",g.Wb(a)?null:a)};
g.h.iC=function(){var a=this.T.wc("captions","track");g.Wb(a)||K8(this,a)};
g.h.AA=function(a){if(J8(this)){this.g.unsubscribe("remotePlayerChange",this.rl,this);var b=Math.round(a.volume);a=!!a.muted;var c=g8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.L.start();this.g.subscribe("remotePlayerChange",this.rl,this)}};
g.h.oP=function(){g.Wb(this.C)||rAa(this,this.C);this.D=!1};
g.h.NA=function(a,b){this.B.stop();2==b&&this.eC()};
g.h.rl=function(){if(J8(this)){this.A.stop();var a=g8(this.g);switch(a.g){case 1081:I8(this,new g.eR(8));break;case 1:this.dC();I8(this,new g.eR(8));break;case 1083:case 3:I8(this,new g.eR(9));break;case 0:I8(this,new g.eR(2));this.I.stop();H8(this,this.T.ga().lengthSeconds);break;case 1082:I8(this,new g.eR(4));break;case 2:I8(this,new g.eR(4));H8(this,g.UI(a));break;case -1:I8(this,new g.eR(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.T("YTP_MDX_PLAYER_ERROR")},I8(this,new g.eR(128,
a))}a=g8(this.g).o;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,rAa(this,a));a=g8(this.g);-1==a.volume||Math.round(this.T.getVolume())==a.volume&&this.T.isMuted()==a.muted||this.L.isActive()||this.GC()}else qAa(this)};
g.h.KA=function(){this.T.U("mdxpreviousnextchange")};
g.h.qo=function(){J8(this)||qAa(this)};
g.h.zG=function(){this.g.ow()};
g.h.nA=function(a){a&&(a=g.oF("/watch_queue_ajax",{method:"GET",Xc:{action_get_watch_queue_item:1,video_id:a},Tb:(0,g.z)(this.oR,this)}))&&(this.N=(0,g.z)(a.abort,a))};
g.h.oR=function(a,b){var c=new g.gQ({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.T.U("mdxautoplayupnext",c)};
g.h.CA=function(a){(0,window.isNaN)(a)||this.T.U("mdxnowautoplaying",a)};
g.h.mA=function(){this.T.U("mdxautoplaycanceled")};
g.h.JK=function(a,b){-1==g8(this.g).g?L8(this,a):b&&this.g.RC(a)};
g.h.GC=function(){if(J8(this)){var a=g8(this.g);this.o.Da(this.O);a.muted?this.T.mute():this.T.Rf();this.T.setVolume(a.volume);this.O=this.o.P(this.T,"onVolumeChange",this.AA)}};
g.h.dC=function(){this.A.stop();if(!this.g.ka()){var a=g8(this.g);a.ib()&&I8(this,new g.eR(8));H8(this,g.UI(a));this.A.start()}};
g.h.eC=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(M8,g.Y);M8.prototype.B=function(a){tAa(this,a.state)};g.p(N8,g.zX);g.h=N8.prototype;g.h.create=function(){pAa(g.iO(g.X(this.g)));this.D.push(g.NG("yt-remote-before-disconnect",this.SN,this));this.D.push(g.NG("yt-remote-connection-change",this.yQ,this));this.D.push(g.NG("yt-remote-receiver-availability-change",this.LA,this));this.D.push(g.NG("yt-remote-auto-connect",this.wQ,this));this.D.push(g.NG("yt-remote-receiver-resumed",this.vQ,this));this.LA()};
g.h.load=function(){this.g.Up();g.zX.prototype.load.call(this);this.C=new G8(this,this.g,this.o);var a=iAa();a=a?a.currentTime:0;var b=t8()?new f8(s8(),void 0):null;0==a&&b&&(a=g.UI(g8(b)));0!=a&&(this.I=a||0,this.g.U("progresssync",a,void 0));sAa(this,this.F,this.F);g.K1(this.g.app,6)};
g.h.unload=function(){this.g.U("mdxautoplaycanceled");this.B=this.A;g.Xe(this.C,this.o);this.o=this.C=null;g.zX.prototype.unload.call(this);g.K1(this.g.app,5)};
g.h.X=function(){g.OG(this.D);g.zX.prototype.X.call(this)};
g.h.Vk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.Uy.apply(this.C,[].concat([a],g.pa(c)))};
g.h.mH=function(){return this.loaded?this.C.suggestion:null};
g.h.Gf=function(){return this.o?g8(this.o).Gf:!1};
g.h.hasNext=function(){return this.o?g8(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.mK=function(){var a=g8(this.o),b=this.g.ga();return{allowSeeking:this.g.cd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.D?a.B+g.SI(a):a.B,isPeggedToLive:1>=(a.D?a.A+g.SI(a):a.A)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.D?a.A+g.SI(a):a.A,seekableStart:0<a.C?a.C+g.SI(a):a.C}};
g.h.nK=function(){this.o&&this.o.PC()};
g.h.oK=function(){this.o&&this.o.QC()};
g.h.SN=function(a){1==a&&(this.J=this.o?g8(this.o):null)};
g.h.yQ=function(){var a=t8()?new f8(s8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.We(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ga().videoId&&this.g.bz(a.videoId,g.UI(a)));this.g.U("videodatachange","newdata",this.g.ga(),3)};
g.h.LA=function(){this.G=[this.A].concat(lAa());var a=y8()||this.A;O8(this,a);this.g.va("onMdxReceiversChange")};
g.h.wQ=function(){var a=y8();O8(this,a)};
g.h.vQ=function(){this.B=y8()};
g.h.lK=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?b8():O8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&b8(),!0):!1}};
g.h.pK=function(){k8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.sd=function(){return!1};g.SZ.remote=N8;})(_yt_player);