/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20150601
 */
(function(h,g){function v(eb,v){function X(b){return c.preferFlash&&y&&!c.ignoreFlash&&c.flash[b]!==g&&c.flash[b]}function r(b){return function(c){var d=this._s;return!d||!d._a?null:b.call(this,c)}}this.setupOptions={url:eb||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
forceUseGlobalHTML5Audio:!1,ignoreMobileRestrictions:!1,html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,
useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs\x3d"mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs\x3d"mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs\x3dvorbis"],required:!1},opus:{type:["audio/ogg; codecs\x3dopus",
"audio/opus"],required:!1},wav:{type:['audio/wav; codecs\x3d"1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=v||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20150601";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};
this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var L,c=this,La=null,k=null,Y,t=navigator.userAgent,Ma=h.location.href.toString(),p=document,ma,Na,na,m,x=[],M=!1,N=!1,l=!1,z=!1,oa=!1,O,w,pa,Z,qa,E,G,H,Oa,ra,sa,$,P,aa,F,ta,Q,ua,ba,I,Pa,va,Qa,wa,Ra,R=null,xa=null,S,ya,J,ca,da,q,T=!1,za=!1,Sa,Ta,Ua,ea=0,U=null,fa,ga=[],V,u=null,Va,ha,W,C,ia,Aa,Wa,s,fb=Array.prototype.slice,A=
!1,Ba,y,Ca,Xa,B,ja,Ya=0,Da,Ea=t.match(/(ipad|iphone|ipod)/i),Za=t.match(/android/i),D=t.match(/msie/i),gb=t.match(/webkit/i),ka=t.match(/safari/i)&&!t.match(/chrome/i),Fa=t.match(/opera/i),Ga=t.match(/(mobile|pre\/|xoom)/i)||Ea||Za,$a=!Ma.match(/usehtml5audio/i)&&!Ma.match(/sm2\-ignorebadua/i)&&ka&&!t.match(/silk/i)&&t.match(/OS X 10_6_([3-7])/i),Ha=p.hasFocus!==g?p.hasFocus():null,la=ka&&(p.hasFocus===g||!p.hasFocus()),ab=!la,bb=/(mp3|mp4|mpa|m4a|m4b)/i,Ia=p.location?p.location.protocol.match(/http/i):
null,hb=!Ia?"http://":"",cb=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,db="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),ib=RegExp("\\.("+db.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!Ia;var Ja;try{Ja=Audio!==g&&(Fa&&opera!==g&&10>opera.version()?new Audio(null):new Audio).canPlayType!==g}catch(jb){Ja=!1}this.hasHTML5=Ja;this.setup=function(b){var e=!c.url;b!==g&&l&&u&&c.ok();pa(b);
c.setupOptions.useHTML5Audio&&(!A&&c.setupOptions.forceUseGlobalHTML5Audio)&&(ga.push(P.globalHTML5),A=!0);!Da&&Ga&&(c.setupOptions.ignoreMobileRestrictions&&ga.push(P.ignoreMobile),c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=!1,Za&&!t.match(/android\s2\.3/i)&&(Ea&&(c.ignoreFlash=!0),A=!0));b&&(e&&(Q&&b.url!==g)&&c.beginDelayedInit(),!Q&&(b.url!==g&&"complete"===p.readyState)&&setTimeout(F,1));Da=!0;return c};this.supported=this.ok=function(){return u?l&&!z:c.useHTML5Audio&&c.hasHTML5};
this.getMovie=function(b){return Y(b)||p[b]||h[b]};this.createSound=function(b,e){function d(){a=ca(a);c.sounds[a.id]=new L(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=null;if(!l||!c.ok())return!1;e!==g&&(b={id:b,url:e});a=w(b);a.url=fa(a.url);a.id===g&&(a.id=c.setupOptions.idPrefix+Ya++);if(q(a.id,!0))return c.sounds[a.id];if(ha(a))f=d(),f._setup_html5(a);else{if(c.html5Only||c.html5.usingFlash&&a.url&&a.url.match(/data\:/i))return d();8<m&&null===a.isMovieStar&&(a.isMovieStar=!(!a.serverURL&&
!(a.type&&a.type.match(cb)||a.url&&a.url.match(ib))));a=da(a,void 0);f=d();8===m?k._createSound(a.id,a.loops||1,a.usePolicyFile):(k._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(f.connected=!0,a.onconnect&&a.onconnect.apply(f)));!a.serverURL&&(a.autoLoad||a.autoPlay)&&f.load(a)}!a.serverURL&&a.autoPlay&&f.play();return f};this.destroySound=
function(b,e){if(!q(b))return!1;var d=c.sounds[b],a;d.stop();d._iO={};d.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}e||d.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,e){return!q(b)?!1:c.sounds[b].load(e)};this.unload=function(b){return!q(b)?!1:c.sounds[b].unload()};this.onposition=this.onPosition=function(b,e,d,a){return!q(b)?!1:c.sounds[b].onposition(e,d,a)};this.clearOnPosition=function(b,e,d){return!q(b)?!1:c.sounds[b].clearOnPosition(e,
d)};this.start=this.play=function(b,e){var d=null,a=e&&!(e instanceof Object);if(!l||!c.ok())return!1;if(q(b,a))a&&(e={url:e});else{if(!a)return!1;a&&(e={url:e});e&&e.url&&(e.id=b,d=c.createSound(e).play())}null===d&&(d=c.sounds[b].play(e));return d};this.setPosition=function(b,e){return!q(b)?!1:c.sounds[b].setPosition(e)};this.stop=function(b){return!q(b)?!1:c.sounds[b].stop()};this.stopAll=function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return!q(b)?
!1:c.sounds[b].pause()};this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return!q(b)?!1:c.sounds[b].resume()};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return!q(b)?!1:c.sounds[b].togglePause()};this.setPan=function(b,e){return!q(b)?!1:c.sounds[b].setPan(e)};this.setVolume=function(b,e){var d,a;if(b!==g&&!isNaN(b)&&e===g){d=0;for(a=c.soundIDs.length;d<
a;d++)c.sounds[c.soundIDs[d]].setVolume(b)}else return!q(b)?!1:c.sounds[b].setVolume(e)};this.mute=function(b){var e=0;b instanceof String&&(b=null);if(b)return!q(b)?!1:c.sounds[b].mute();for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return!q(b)?!1:c.sounds[b].unmute();for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=
function(){c.unmute()};this.toggleMute=function(b){return!q(b)?!1:c.sounds[b].toggleMute()};this.getMemoryUse=function(){var b=0;k&&8!==m&&(b=parseInt(k._getMemoryUse(),10));return b};this.disable=function(b){var e;b===g&&(b=!1);if(z)return!1;z=!0;for(e=c.soundIDs.length-1;0<=e;e--)Qa(c.sounds[c.soundIDs[e]]);O(b);s.remove(h,"load",G);return!0};this.canPlayMIME=function(b){var e;c.hasHTML5&&(e=W({type:b}));!e&&u&&(e=b&&c.ok()?!!(8<m&&b.match(cb)||b.match(c.mimePattern)):null);return e};this.canPlayURL=
function(b){var e;c.hasHTML5&&(e=W({url:b}));!e&&u&&(e=b&&c.ok()?!!b.match(c.filePattern):null);return e};this.canPlayLink=function(b){return b.type!==g&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b,e){return!b?null:c.sounds[b]};this.onready=function(b,c){if("function"===typeof b)c||(c=h),qa("onready",b,c),E();else throw S("needFunction","onready");return!0};this.ontimeout=function(b,c){if("function"===typeof b)c||(c=h),qa("ontimeout",b,c),E({type:"ontimeout"});
else throw S("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(b,c){return!0};this._debug=function(){};this.reboot=function(b,e){var d,a,f;for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].destruct();if(k)try{D&&(xa=k.innerHTML),R=k.parentNode.removeChild(k)}catch(g){}xa=R=u=k=null;c.enabled=Q=l=T=za=M=N=z=A=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};Ya=0;Da=!1;if(b)x=[];else for(d in x)if(x.hasOwnProperty(d)){a=0;for(f=x[d].length;a<f;a++)x[d][a].fired=!1}c.html5={usingFlash:null};
c.flash={};c.html5Only=!1;c.ignoreFlash=!1;h.setTimeout(function(){e||c.beginDelayedInit()},20);return c};this.reset=function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return k&&"PercentLoaded"in k?k.PercentLoaded():null};this.beginDelayedInit=function(){oa=!0;F();setTimeout(function(){if(za)return!1;ba();aa();return za=!0},20);H()};this.destruct=function(){c.disable(!0)};L=function(b){var e,d,a=this,f,n,h,K,p,r,t=!1,l=[],u=0,x,z,v=null,y;d=e=null;this.sID=this.id=b.id;this.url=b.url;
this._iO=this.instanceOptions=this.options=w(b);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;y=this.url?!1:!0;this.id3={};this._debug=function(){};this.load=function(b){var e=null,d;b!==g?a._iO=w(b,a.options):(b=a.options,a._iO=b,v&&v!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=fa(a._iO.url);d=a.instanceOptions=a._iO;if(!d.url&&!a.url)return a;if(d.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&d.onload&&
ja(a,function(){d.onload.apply(a,[!!a.duration])}),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ha(d))e=a._setup_html5(d),e._called_load||(a._html5_canplay=!1,a.url!==d.url&&(a._a.src=d.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0);else{if(c.html5Only||a._iO.url&&a._iO.url.match(/data\:/i))return a;try{a.isHTML5=!1;a._iO=da(ca(d));if(a._iO.autoPlay&&(a._iO.position||a._iO.from))a._iO.autoPlay=!1;d=a._iO;8===m?k._load(a.id,d.url,d.stream,d.autoPlay,
d.usePolicyFile):k._load(a.id,d.url,!!d.stream,!!d.autoPlay,d.loops||1,!!d.autoLoad,d.usePolicyFile)}catch(f){I({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}}a.url=d.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(K(),a._a&&(a._a.pause(),v=ia(a._a))):8===m?k._unload(a.id,"about:blank"):k._unload(a.id),f());return a};this.destruct=function(b){a.isHTML5?(K(),a._a&&(a._a.pause(),ia(a._a),A||h(),a._a._s=null,a._a=null)):(a._iO.onfailure=null,k._destroySound(a.id));b||c.destroySound(a.id,
!0)};this.start=this.play=function(b,e){var d,f,n,h,Ka;f=!0;f=null;e=e===g?!0:e;b||(b={});a.url&&(a._iO.url=a.url);a._iO=w(a._iO,a.options);a._iO=w(b,a._iO);a._iO.url=fa(a._iO.url);a.instanceOptions=a._iO;if(!a.isHTML5&&a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;ha(a._iO)&&(a._setup_html5(a._iO),p());1===a.playState&&!a.paused&&(d=a._iO.multiShot,d||(a.isHTML5&&a.setPosition(a._iO.position),f=a));if(null!==f)return f;b.url&&b.url!==a.url&&(!a.readyState&&!a.isHTML5&&
8===m&&y?y=!1:a.load(a._iO));a.loaded||(0===a.readyState?(!a.isHTML5&&!c.html5Only?(a._iO.autoPlay=!0,a.load(a._iO)):a.isHTML5?a.load(a._iO):f=a,a.instanceOptions=a._iO):2===a.readyState&&(f=a));if(null!==f)return f;!a.isHTML5&&(9===m&&0<a.position&&a.position===a.duration)&&(b.position=0);if(a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position))a.resume();else{a._iO=w(b,a._iO);if((!a.isHTML5&&null!==a._iO.position&&0<a._iO.position||null!==a._iO.from&&0<a._iO.from||null!==a._iO.to)&&0===a.instanceCount&&
0===a.playState&&!a._iO.serverURL){d=function(){a._iO=w(b,a._iO);a.play(a._iO)};if(a.isHTML5&&!a._html5_canplay)a.load({_oncanplay:d}),f=!1;else if(!a.isHTML5&&!a.loaded&&(!a.readyState||2!==a.readyState))a.load({onload:d}),f=!1;if(null!==f)return f;a._iO=z()}(!a.instanceCount||a._iO.multiShotEvents||a.isHTML5&&a._iO.multiShot&&!A||!a.isHTML5&&8<m&&!a.getAutoPlay())&&a.instanceCount++;a._iO.onposition&&0===a.playState&&r(a);a.playState=1;a.paused=!1;a.position=a._iO.position!==g&&!isNaN(a._iO.position)?
a._iO.position:0;a.isHTML5||(a._iO=da(ca(a._iO)));a._iO.onplay&&e&&(a._iO.onplay.apply(a),t=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?2>a.instanceCount?(p(),f=a._setup_html5(),a.setPosition(a._iO.position),f.play()):(n=new Audio(a._iO.url),h=function(){s.remove(n,"ended",h);a._onfinish(a);ia(n);n=null},Ka=function(){s.remove(n,"canplay",Ka);try{n.currentTime=a._iO.position/1E3}catch(b){}n.play()},s.add(n,"ended",h),a._iO.volume!==g&&(n.volume=Math.max(0,Math.min(1,a._iO.volume/
100))),a.muted&&(n.muted=!0),a._iO.position?s.add(n,"canplay",Ka):n.play()):(f=k._start(a.id,a._iO.loops||1,9===m?a.position:a.position/1E3,a._iO.multiShot||!1),9===m&&!f&&a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;1===a.playState&&(a._onbufferchange(0),a._resetOnPosition(0),a.paused=!1,a.isHTML5||(a.playState=0),x(),c.to&&a.clearOnPosition(c.to),a.isHTML5?a._a&&(b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),K()):
(k._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(k._setAutoPlay(a.id,b),b&&!a.instanceCount&&1===a.readyState&&a.instanceCount++)};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(b){b===g&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(a.isHTML5){if(a._a){if(a._html5_canplay){if(a._a.currentTime!==
b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(e){}}else if(b)return a;a.paused&&a._onTimer(!0)}}else b=9===m?a.position:b,a.readyState&&2!==a.readyState&&k._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);return a};this.pause=function(b){if(a.paused||0===a.playState&&1!==a.readyState)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),K()):(b||b===g)&&k._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=
a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),p()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),k._pause(a.id,b.multiShot));!t&&b.onplay?(b.onplay.apply(a),t=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===a.playState)return a.play({position:9===m&&!a.isHTML5?a.position:a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===g&&(b=0);c===g&&(c=!1);a.isHTML5||k._setPan(a.id,b);a._iO.pan=
b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,e){b===g&&(b=100);e===g&&(e=!1);a.isHTML5?a._a&&(c.muted&&!a.muted&&(a.muted=!0,a._a.muted=!0),a._a.volume=Math.max(0,Math.min(1,b/100))):k._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;e||(a.volume=b,a.options.volume=b);return a};this.mute=function(){a.muted=!0;a.isHTML5?a._a&&(a._a.muted=!0):k._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==g;a.isHTML5?a._a&&(a._a.muted=!1):k._setVolume(a.id,
b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,e){l.push({position:parseInt(b,10),method:c,scope:e!==g?e:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c;a=parseInt(a,10);if(isNaN(a))return!1;for(c=0;c<l.length;c++)if(a===l[c].position&&(!b||b===l[c].method))l[c].fired&&u--,l.splice(c,1)};this._processOnPosition=function(){var b,c;b=l.length;if(!b||!a.playState||u>=b)return!1;for(b-=
1;0<=b;b--)c=l[b],!c.fired&&a.position>=c.position&&(c.fired=!0,u++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=l.length;if(!b)return!1;for(b-=1;0<=b;b--)c=l[b],c.fired&&a<=c.position&&(c.fired=!1,u--);return!0};z=function(){var b=a._iO,c=b.from,e=b.to,d,f;f=function(){a.clearOnPosition(e,f);a.stop()};d=function(){if(null!==e&&!isNaN(e))a.onPosition(e,f)};null!==c&&!isNaN(c)&&(b.position=c,b.multiShot=!1,d());return b};r=function(){var b,c=a._iO.onposition;
if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};x=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};p=function(){a.isHTML5&&Sa(a)};K=function(){a.isHTML5&&Ta(a)};f=function(b){b||(l=[],u=0);t=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];
a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,g={};if(a._hasTimer||b){if(a._a&&(b||(0<a.playState||1===a.readyState)&&!a.paused))c=a._get_html5_duration(),c!==e&&(e=c,a.duration=c,f=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||0,c!==d&&(d=c,f=!0),(f||b)&&a._whileplaying(c,
g,g,g,g);return f}};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){b=w(a._iO,b);var c=A?La:a._a,e=decodeURI(b.url),d;A?e===decodeURI(Ba)&&(d=!0):e===decodeURI(v)&&(d=!0);if(c){if(c._s)if(A)c._s&&(c._s.playState&&!d)&&c._s.stop();else if(!A&&e===decodeURI(v))return a._apply_loop(c,b.loops),c;d||(v&&f(!1),c.src=
b.url,Ba=v=a.url=b.url,c._called_load=!1)}else b.autoLoad||b.autoPlay?(a._a=new Audio(b.url),a._a.load()):a._a=Fa&&10>opera.version()?new Audio(null):new Audio,c=a._a,c._called_load=!1,A&&(La=c);a.isHTML5=!0;a._a=c;c._s=a;n();a._apply_loop(c,b.loops);b.autoLoad||b.autoPlay?a.load():(c.autobuffer=!1,c.preload="auto");return c};n=function(){if(a._a._added_events)return!1;var b;a._a._added_events=!0;for(b in B)B.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,B[b],!1);return!0};h=function(){var b;a._a._added_events=
!1;for(b in B)B.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,B[b],!1)};this._onload=function(b){var c=!!b||!a.isHTML5&&8===m&&a.duration;a.loaded=c;a.readyState=c?3:2;a._onbufferchange(0);a._iO.onload&&ja(a,function(){a._iO.onload.apply(a,[c])});return!0};this._onbufferchange=function(b){if(0===a.playState||b&&a.isBuffering||!b&&!a.isBuffering)return!1;a.isBuffering=1===b;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a,[b]);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);
return!0};this._onfailure=function(b,c,e){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(b,c,e)};this._onwarning=function(b,c,e){if(a._iO.onwarning)a._iO.onwarning(b,c,e)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,a.instanceCount||(x(),a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},K(),a.isHTML5&&(a.position=0)),(!a.instanceCount||a._iO.multiShotEvents)&&b&&ja(a,function(){b.apply(a)}))};
this._whileloading=function(b,c,e,d){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(e);a.bufferLength=d;a.durationEstimate=!a.isHTML5&&!f.isMovieStar?f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10):a.duration;a.isHTML5||(a.buffered=[{start:0,end:a.duration}]);(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};this._whileplaying=function(b,c,e,d,f){var n=a._iO;if(isNaN(b)||null===b)return!1;a.position=
Math.max(0,b);a._processOnPosition();!a.isHTML5&&8<m&&(n.usePeakData&&(c!==g&&c)&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),n.useWaveformData&&(e!==g&&e)&&(a.waveformData={left:e.split(","),right:d.split(",")}),n.useEQData&&(f!==g&&f&&f.leftEQ)&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,f.rightEQ!==g&&f.rightEQ&&(a.eqData.right=f.rightEQ.split(","))));1===a.playState&&(!a.isHTML5&&(8===m&&!a.position&&a.isBuffering)&&a._onbufferchange(0),n.whileplaying&&n.whileplaying.apply(a));return!0};
this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var e={},d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.metadata=e;a._iO.onmetadata&&a._iO.onmetadata.call(a,a.metadata)};this._onid3=function(b,c){var e=[],d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.id3=w(a.id3,e);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=0,q(a.id)&&(a.getAutoPlay()?a.play(g,a.getAutoPlay()):
a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(b){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};ua=function(){return p.body||p.getElementsByTagName("div")[0]};Y=function(b){return p.getElementById(b)};w=function(b,e){var d=b||{},a,f;a=e===g?c.defaultOptions:e;for(f in a)a.hasOwnProperty(f)&&d[f]===g&&(d[f]="object"!==typeof a[f]||null===a[f]?a[f]:w(d[f],a[f]));return d};ja=function(b,c){!b.isHTML5&&8===m?h.setTimeout(c,0):c()};
Z={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};pa=function(b,e){var d,a=!0,f=e!==g,n=c.setupOptions;for(d in b)if(b.hasOwnProperty(d))if("object"!==typeof b[d]||null===b[d]||b[d]instanceof Array||b[d]instanceof RegExp)f&&Z[e]!==g?c[e][d]=b[d]:n[d]!==g?(c.setupOptions[d]=b[d],c[d]=b[d]):Z[d]===g?a=!1:c[d]instanceof Function?c[d].apply(c,b[d]instanceof Array?b[d]:[b[d]]):c[d]=b[d];else if(Z[d]===g)a=!1;else return pa(b[d],d);return a};s=function(){function b(a){a=fb.call(a);
var b=a.length;d?(a[1]="on"+a[1],3<b&&a.pop()):3===b&&a.push(!1);return a}function c(b,e){var g=b.shift(),h=[a[e]];if(d)g[h](b[0],b[1]);else g[h].apply(g,b)}var d=h.attachEvent,a={add:d?"attachEvent":"addEventListener",remove:d?"detachEvent":"removeEventListener"};return{add:function(){c(b(arguments),"add")},remove:function(){c(b(arguments),"remove")}}}();B={abort:r(function(){}),canplay:r(function(){var b=this._s,c;if(b._html5_canplay)return!0;b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position!==
g&&!isNaN(b._iO.position)?b._iO.position/1E3:null;if(this.currentTime!==c)try{this.currentTime=c}catch(d){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:r(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),durationchange:r(function(){var b=this._s,c;c=b._get_html5_duration();!isNaN(c)&&c!==b.duration&&(b.durationEstimate=b.duration=c)}),ended:r(function(){this._s._onfinish()}),error:r(function(){this._s._onload(!1)}),
loadeddata:r(function(){var b=this._s;!b._loaded&&!ka&&(b.duration=b._get_html5_duration())}),loadedmetadata:r(function(){}),loadstart:r(function(){this._s._onbufferchange(1)}),play:r(function(){this._s._onbufferchange(0)}),playing:r(function(){this._s._onbufferchange(0)}),progress:r(function(b){var c=this._s,d,a,f=0,f=b.target.buffered;d=b.loaded||0;var g=b.total||1;c.buffered=[];if(f&&f.length){d=0;for(a=f.length;d<a;d++)c.buffered.push({start:1E3*f.start(d),end:1E3*f.end(d)});f=1E3*(f.end(0)-f.start(0));
d=Math.min(1,f/(1E3*b.target.duration))}isNaN(d)||(c._whileloading(d,g,c._get_html5_duration()),d&&(g&&d===g)&&B.canplaythrough.call(this,b))}),ratechange:r(function(){}),suspend:r(function(b){var c=this._s;B.progress.call(this,b);c._onsuspend()}),stalled:r(function(){}),timeupdate:r(function(){this._s._onTimer()}),waiting:r(function(){this._s._onbufferchange(1)})};ha=function(b){return!b||!b.type&&!b.url&&!b.serverURL?!1:b.serverURL||b.type&&X(b.type)?!1:b.type?W({type:b.type}):W({url:b.url})||c.html5Only||
b.url.match(/data\:/i)};ia=function(b){var e;b&&(e=ka?"about:blank":c.html5.canPlayType("audio/wav")?"data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w\x3d\x3d":"about:blank",b.src=e,b._called_unload!==g&&(b._called_load=!1));A&&(Ba=null);return e};W=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=b.url||null;b=b.type||null;var d=c.audioFormats,a;if(b&&c.html5[b]!==g)return c.html5[b]&&!X(b);if(!C){C=[];for(a in d)d.hasOwnProperty(a)&&(C.push(a),d[a].related&&
(C=C.concat(d[a].related)));C=RegExp("\\.("+C.join("|")+")(\\?.*)?$","i")}a=e?e.toLowerCase().match(C):null;!a||!a.length?b&&(e=b.indexOf(";"),a=(-1!==e?b.substr(0,e):b).substr(6)):a=a[1];a&&c.html5[a]!==g?e=c.html5[a]&&!X(a):(b="audio/"+a,e=c.html5.canPlayType({type:b}),e=(c.html5[a]=e)&&c.html5[b]&&!X(b));return e};Wa=function(){function b(a){var b,d=b=!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){h=0;for(b=a.length;h<b;h++)if(c.html5[a[h]]||e.canPlayType(a[h]).match(c.html5Test))d=
!0,c.html5[a[h]]=!0,c.flash[a[h]]=!!a[h].match(bb);b=d}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return u=c.html5.usingFlash=!0,!1;var e=Audio!==g?Fa&&10>opera.version()?new Audio(null):new Audio:null,d,a,f={},n,h;n=c.audioFormats;for(d in n)if(n.hasOwnProperty(d)&&(a="audio/"+d,f[d]=b(n[d].type),f[a]=f[d],d.match(bb)?(c.flash[d]=!0,c.flash[a]=!0):(c.flash[d]=!1,c.flash[a]=!1),n[d]&&n[d].related))for(h=
n[d].related.length-1;0<=h;h--)f["audio/"+n[d].related[h]]=f[d],c.html5[n[d].related[h]]=f[d],c.flash[n[d].related[h]]=f[d];f.canPlayType=e?b:null;c.html5=w(c.html5,f);c.html5.usingFlash=Va();u=c.html5.usingFlash;return!0};P={};S=function(){};ca=function(b){8===m&&(1<b.loops&&b.stream)&&(b.stream=!1);return b};da=function(b,c){if(b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};ma=function(){return!1};Qa=function(b){for(var c in b)b.hasOwnProperty(c)&&
"function"===typeof b[c]&&(b[c]=ma)};wa=function(b){b===g&&(b=!1);(z||b)&&c.disable(b)};Ra=function(b){var e=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(e=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts\x3d"+(new Date).getTime());return b};sa=function(){m=parseInt(c.flashVersion,10);8!==m&&9!==m&&(c.flashVersion=m=8);var b=c.debugMode||c.debugFlash?
"_debug.swf":".swf";c.useHTML5Audio&&(!c.html5Only&&c.audioFormats.mp4.required&&9>m)&&(c.flashVersion=m=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===m?" (AS3/Flash 9)":" (AS2/Flash 8)");8<m?(c.defaultOptions=w(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=w(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+db.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==m?
"flash9":"flash8"];c.movieURL=(8===m?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<m};Pa=function(b,c){if(!k)return!1;k._setPolling(b,c)};va=function(){};q=this.getSoundById;J=function(){var b=[];c.debugMode&&b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&b.push("high_performance");return b.join(" ")};ya=function(){S("fbHandler");var b=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;
c.ok()?c.oMC&&(c.oMC.className=[J(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")):(u&&(c.oMC.className=J()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,E({type:"ontimeout",ignoreInit:!0,error:e}),I(e))};qa=function(b,c,d){x[b]===g&&(x[b]=[]);x[b].push({method:c,scope:d||null,fired:!1})};E=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!l&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||z&&!b.ignoreInit))return!1;var e={success:b&&
b.ignoreInit?c.ok():!z},d=b&&b.type?x[b.type]||[]:[],a=[],f,e=[e],g=u&&!c.ok();b.error&&(e[0].error=b.error);b=0;for(f=d.length;b<f;b++)!0!==d[b].fired&&a.push(d[b]);if(a.length){b=0;for(f=a.length;b<f;b++)a[b].scope?a[b].method.apply(a[b].scope,e):a[b].method.apply(this,e),g||(a[b].fired=!0)}return!0};G=function(){h.setTimeout(function(){c.useFlashBlock&&ya();E();"function"===typeof c.onload&&c.onload.apply(h);c.waitForWindowLoad&&s.add(h,"load",G)},1)};Ca=function(){if(y!==g)return y;var b=!1,c=
navigator,d=c.plugins,a,f=h.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&(c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description)&&(b=!0);else if(f!==g&&!t.match(/MSAppHost/i)){try{a=new f("ShockwaveFlash.ShockwaveFlash")}catch(n){a=null}b=!!a}return y=b};Va=function(){var b,e,d=c.audioFormats;if(Ea&&t.match(/os (1|2|3_0|3_1)\s/i))c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none");else if(c.useHTML5Audio&&
(!c.html5||!c.html5.canPlayType))c.hasHTML5=!1;if(c.useHTML5Audio&&c.hasHTML5)for(e in V=!0,d)if(d.hasOwnProperty(e)&&d[e].required)if(c.html5.canPlayType(d[e].type)){if(c.preferFlash&&(c.flash[e]||c.flash[d[e].type]))b=!0}else V=!1,b=!0;c.ignoreFlash&&(b=!1,V=!0);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};fa=function(b){var e,d,a=0;if(b instanceof Array){e=0;for(d=b.length;e<d;e++)if(b[e]instanceof Object){if(c.canPlayMIME(b[e].type)){a=e;break}}else if(c.canPlayURL(b[e])){a=
e;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Sa=function(b){b._hasTimer||(b._hasTimer=!0,!Ga&&c.html5PollingInterval&&(null===U&&0===ea&&(U=setInterval(Ua,c.html5PollingInterval)),ea++))};Ta=function(b){b._hasTimer&&(b._hasTimer=!1,!Ga&&c.html5PollingInterval&&ea--)};Ua=function(){var b;if(null!==U&&!ea)return clearInterval(U),U=null,!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};I=function(b){b=b!==
g?b:{};"function"===typeof c.onerror&&c.onerror.apply(h,[{type:b.type!==g?b.type:null}]);b.fatal!==g&&b.fatal&&c.disable()};Xa=function(){if(!$a||!Ca())return!1;var b=c.audioFormats,e,d;for(d in b)if(b.hasOwnProperty(d)&&("mp3"===d||"mp4"===d))if(c.html5[d]=!1,b[d]&&b[d].related)for(e=b[d].related.length-1;0<=e;e--)c.html5[b[d].related[e]]=!1};this._setSandboxType=function(b){};this._externalInterfaceOK=function(b){if(c.swfLoaded)return!1;c.swfLoaded=!0;la=!1;$a&&Xa();setTimeout(na,D?100:1)};ba=function(b,
e){function d(a,b){return'\x3cparam name\x3d"'+a+'" value\x3d"'+b+'" /\x3e'}if(M&&N)return!1;if(c.html5Only)return sa(),c.oMC=Y(c.movieID),na(),N=M=!0,!1;var a=e||c.url,f=c.altURL||a,h=ua(),k=J(),m=null,m=p.getElementsByTagName("html")[0],l,r,q,m=m&&m.dir&&m.dir.match(/rtl/i);b=b===g?c.id:b;sa();c.url=Ra(Ia?a:f);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(t.match(/msie 8/i)||!D&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))ga.push(P.spcWmode),
c.wmode=null;h={name:b,id:b,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:hb+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(h.FlashVars="debug\x3d1");c.wmode||delete h.wmode;if(D)a=p.createElement("div"),r=['\x3cobject id\x3d"'+b+'" data\x3d"'+e+'" type\x3d"'+h.type+'" title\x3d"'+h.title+'" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase\x3d"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d6,0,40,0"\x3e',
d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",h.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",h.FlashVars):"","\x3c/object\x3e"].join("");else for(l in a=p.createElement("embed"),h)h.hasOwnProperty(l)&&a.setAttribute(l,h[l]);va();k=J();if(h=ua())if(c.oMC=Y(c.movieID)||p.createElement("div"),c.oMC.id)q=c.oMC.className,c.oMC.className=(q?q+" ":"movieContainer")+(k?" "+k:""),c.oMC.appendChild(a),D&&(l=c.oMC.appendChild(p.createElement("div")),
l.className="sm2-object-box",l.innerHTML=r),N=!0;else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+k;l=k=null;c.useFlashBlock||(c.useHighPerformance?k={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(k={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},m&&(k.left=Math.abs(parseInt(k.left,10))+"px")));gb&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(q in k)k.hasOwnProperty(q)&&(c.oMC.style[q]=k[q]);try{D||c.oMC.appendChild(a),
h.appendChild(c.oMC),D&&(l=c.oMC.appendChild(p.createElement("div")),l.className="sm2-object-box",l.innerHTML=r),N=!0}catch(s){throw Error(S("domError")+" \n"+s.toString());}}return M=!0};aa=function(){if(c.html5Only)return ba(),!1;if(k||!c.url)return!1;k=c.getMovie(c.id);k||(R?(D?c.oMC.innerHTML=xa:c.oMC.appendChild(R),R=null,M=!0):ba(c.id,c.url),k=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};H=function(){setTimeout(Oa,1E3)};ra=function(){h.setTimeout(function(){c.setup({preferFlash:!1}).reboot();
c.didFlashBlock=!0;c.beginDelayedInit()},1)};Oa=function(){var b,e=!1;if(!c.url||T)return!1;T=!0;s.remove(h,"load",H);if(y&&la&&!Ha)return!1;l||(b=c.getMoviePercent(),0<b&&100>b&&(e=!0));setTimeout(function(){b=c.getMoviePercent();if(e)return T=!1,h.setTimeout(H,1),!1;!l&&ab&&(null===b?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&ya():!c.useFlashBlock&&V?ra():E({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0!==c.flashLoadTimeout&&(!c.useFlashBlock&&V?ra():wa(!0)))},
c.flashLoadTimeout)};$=function(){if(Ha||!la)return s.remove(h,"focus",$),!0;Ha=ab=!0;T=!1;H();s.remove(h,"focus",$);return!0};O=function(b){if(l)return!1;if(c.html5Only)return l=!0,G(),!0;var e=!0,d;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())l=!0;d={type:!y&&u?"NO_FLASH":"INIT_TIMEOUT"};if(z||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=J()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error")),E({type:"ontimeout",error:d,ignoreInit:!0}),I(d),e=!1;z||(c.waitForWindowLoad&&
!oa?s.add(h,"load",G):G());return e};Na=function(){var b,e=c.setupOptions;for(b in e)e.hasOwnProperty(b)&&(c[b]===g?c[b]=e[b]:c[b]!==e[b]&&(c.setupOptions[b]=c[b]))};na=function(){if(l)return!1;if(c.html5Only)return l||(s.remove(h,"load",c.beginDelayedInit),c.enabled=!0,O()),!0;aa();try{k._externalInterfaceTest(!1),Pa(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||k._disableDebug(),c.enabled=!0,c.html5Only||s.add(h,"unload",ma)}catch(b){return I({type:"JS_TO_FLASH_EXCEPTION",
fatal:!0}),wa(!0),O(),!1}O();s.remove(h,"load",c.beginDelayedInit);return!0};F=function(){if(Q)return!1;Q=!0;Na();va();!y&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});Wa();!y&&u&&(ga.push(P.needFlash),c.setup({flashLoadTimeout:1}));p.removeEventListener&&p.removeEventListener("DOMContentLoaded",F,!1);aa();return!0};Aa=function(){"complete"===p.readyState&&(F(),p.detachEvent("onreadystatechange",Aa));return!0};ta=function(){oa=!0;F();s.remove(h,"load",ta)};Ca();s.add(h,"focus",$);s.add(h,
"load",H);s.add(h,"load",ta);p.addEventListener?p.addEventListener("DOMContentLoaded",F,!1):p.attachEvent?p.attachEvent("onreadystatechange",Aa):I({type:"NO_DOM2_EVENTS",fatal:!0})}if(!h||!h.document)throw Error("SoundManager requires a browser with window and document objects.");var L=null;if(h.SM2_DEFER===g||!SM2_DEFER)L=new v;"object"===typeof module&&module&&"object"===typeof module.exports?(module.exports.SoundManager=v,module.exports.soundManager=L):"function"===typeof define&&define.amd&&define(function(){return{constructor:v,
getInstance:function(g){!h.soundManager&&g instanceof Function&&(g=g(v),g instanceof v&&(h.soundManager=g));return h.soundManager}}});h.SoundManager=v;h.soundManager=L})(window);