var MediaChrome=(()=>{var qr=Object.defineProperty;var aa=Object.getOwnPropertyDescriptor;var da=Object.getOwnPropertyNames;var la=Object.prototype.hasOwnProperty;var Yr=(i,t)=>{for(var e in t)qr(i,e,{get:t[e],enumerable:!0})},ua=(i,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of da(t))!la.call(i,o)&&o!==e&&qr(i,o,{get:()=>t[o],enumerable:!(r=aa(t,o))||r.enumerable});return i};var ca=i=>ua(qr({},"__esModule",{value:!0}),i);var Qr=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(Qr(i,t,"read from private field"),e?e.call(i):t.get(i)),c=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},h=(i,t,e,r)=>(Qr(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var tn=(i,t,e,r)=>({set _(o){h(i,t,o,e)},get _(){return s(i,t,r)}}),T=(i,t,e)=>(Qr(i,t,"access private method"),e);var yl={};Yr(yl,{MediaAirplayButton:()=>Zn,MediaCaptionsButton:()=>ts,MediaCastButton:()=>rs,MediaChromeButton:()=>Qn,MediaChromeDialog:()=>ls,MediaChromeRange:()=>Es,MediaContainer:()=>An,MediaControlBar:()=>gs,MediaController:()=>qn,MediaDurationDisplay:()=>fs,MediaErrorDialog:()=>As,MediaFullscreenButton:()=>Is,MediaGestureReceiver:()=>zt,MediaKeyboardShortcutsDialog:()=>ys,MediaLiveButton:()=>_s,MediaLoadingIndicator:()=>ks,MediaLoopButton:()=>Js,MediaMuteButton:()=>xs,MediaPipButton:()=>Ps,MediaPlayButton:()=>Ns,MediaPlaybackRateButton:()=>Os,MediaPosterImage:()=>Hs,MediaPreviewChapterDisplay:()=>Fs,MediaPreviewThumbnail:()=>wi,MediaPreviewTimeDisplay:()=>$s,MediaSeekBackwardButton:()=>Bs,MediaSeekForwardButton:()=>Vs,MediaTextDisplay:()=>bs,MediaTimeDisplay:()=>qs,MediaTimeRange:()=>Zs,MediaTooltip:()=>di,MediaVolumeRange:()=>Xs,constants:()=>Zi,t:()=>g,timeUtils:()=>Ji});var Zi={};Yr(Zi,{AttributeToStateChangeEventMap:()=>jr,AvailabilityStates:()=>Y,MediaStateChangeEvents:()=>Ae,MediaStateReceiverAttributes:()=>k,MediaUIAttributes:()=>a,MediaUIEvents:()=>E,MediaUIProps:()=>zi,PointerTypes:()=>Qt,ReadyStates:()=>pa,StateChangeEventToAttributeMap:()=>ha,StreamTypes:()=>z,TextTrackKinds:()=>q,TextTrackModes:()=>ge,VolumeLevels:()=>Ea,WebkitPresentationModes:()=>zr});var E={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},k={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},zi={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},rn=Object.entries(zi),a=rn.reduce((i,[t,e])=>(i[t]=e.toLowerCase(),i),{}),ma={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Ae=rn.reduce((i,[t,e])=>(i[t]=e.toLowerCase(),i),{...ma}),ha=Object.entries(Ae).reduce((i,[t,e])=>{let r=a[t];return r&&(i[e]=r),i},{userinactivechange:"userinactive"}),jr=Object.entries(a).reduce((i,[t,e])=>{let r=Ae[t];return r&&(i[e]=r),i},{userinactive:"userinactivechange"}),q={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},ge={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},pa={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},Qt={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},Y={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},z={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Ea={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},zr={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};var Ji={};Yr(Ji,{emptyTimeRanges:()=>un,formatAsTimePhrase:()=>ye,formatTime:()=>Z,serializeTimeRanges:()=>Ta});function on(i){return i==null?void 0:i.map(ga).join(" ")}function ga(i){if(i){let{id:t,width:e,height:r}=i;return[t,e,r].filter(o=>o!=null).join(":")}}function nn(i){return i==null?void 0:i.map(ba).join(" ")}function ba(i){if(i){let{id:t,kind:e,language:r,label:o}=i;return[t,e,r,o].filter(n=>n!=null).join(":")}}function ot(i){return typeof i=="number"&&!Number.isNaN(i)&&Number.isFinite(i)}var Xi=i=>new Promise(t=>setTimeout(t,i));var sn={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var Zr={en:sn},an,Xr=((an=globalThis.navigator)==null?void 0:an.language)||"en",dn=i=>{Xr=i};var fa=i=>{var e,r,o;let[t]=Xr.split("-");return((e=Zr[Xr])==null?void 0:e[i])||((r=Zr[t])==null?void 0:r[i])||((o=Zr.en)==null?void 0:o[i])||i},g=(i,t={})=>fa(i).replace(/\{(\w+)\}/g,(e,r)=>r in t?String(t[r]):`{${r}}`);var ln=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],va=(i,t)=>{let e=i===1?g(ln[t].singular):g(ln[t].plural);return`${i} ${e}`},ye=i=>{if(!ot(i))return"";let t=Math.abs(i),e=t!==i,r=new Date(0,0,0,0,0,t,0),n=[r.getHours(),r.getMinutes(),r.getSeconds()].map((d,u)=>d&&va(d,u)).filter(d=>d).join(", ");return e?g("{time} remaining",{time:n}):n};function Z(i,t){let e=!1;i<0&&(e=!0,i=0-i),i=i<0?0:i;let r=Math.floor(i%60),o=Math.floor(i/60%60),n=Math.floor(i/3600),d=Math.floor(t/60%60),u=Math.floor(t/3600);return(isNaN(i)||i===1/0)&&(n=o=r="0"),n=n>0||u>0?n+":":"",o=((n||d>=10)&&o<10?"0"+o:o)+":",r=r<10?"0"+r:r,(e?"-":"")+n+o+r}var un=Object.freeze({length:0,start(i){let t=i>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(i){let t=i>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function Ta(i=un){return Array.from(i).map((t,e)=>[Number(i.start(e).toFixed(3)),Number(i.end(e).toFixed(3))].join(":")).join(" ")}var er=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},tr=class extends er{},ir=class extends tr{constructor(){super(...arguments);this.role=null}},Jr=class{observe(){}unobserve(){}disconnect(){}},cn={createElement:function(){return new jt.HTMLElement},createElementNS:function(){return new jt.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(i){return!1}},jt={ResizeObserver:Jr,document:cn,Node:tr,Element:ir,HTMLElement:class extends ir{constructor(){super(...arguments);this.innerHTML=""}get content(){return new jt.DocumentFragment}},DocumentFragment:class extends er{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(i){return null},setItem(i,t){},removeItem(i){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(i){return{matches:!1,media:i}},DOMParser:class{parseFromString(t,e){return{body:{textContent:t}}}}},mn="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window=="undefined"||typeof window.customElements=="undefined",hn=Object.keys(jt).every(i=>i in globalThis),l=mn&&!hn?jt:globalThis,K=mn&&!hn?cn:globalThis.document;var pn=new WeakMap,eo=i=>{let t=pn.get(i);return t||pn.set(i,t=new Set),t},En=new l.ResizeObserver(i=>{for(let t of i)for(let e of eo(t.target))e(t)});function rr(i,t){eo(i).add(t),En.observe(i)}function or(i,t){let e=eo(i);e.delete(t),e.size||En.unobserve(i)}function B(i){let t={};for(let e of i)t[e.name]=e.value;return t}function gn(i){var t;return(t=Aa(i))!=null?t:Se(i,"media-controller")}function Aa(i){var r;let{MEDIA_CONTROLLER:t}=k,e=i.getAttribute(t);if(e)return(r=Sa(i))==null?void 0:r.getElementById(e)}var nr=(i,t,e=".value")=>{let r=i.querySelector(e);r&&(r.textContent=t)},ya=(i,t)=>{let e=`slot[name="${t}"]`,r=i.shadowRoot.querySelector(e);return r?r.children:[]},sr=(i,t)=>ya(i,t)[0],ce=(i,t)=>!i||!t?!1:i!=null&&i.contains(t)?!0:ce(i,t.getRootNode().host),Se=(i,t)=>{if(!i)return null;let e=i.closest(t);return e||Se(i.getRootNode().host,t)};function to(i=document){var e;let t=i==null?void 0:i.activeElement;return t?(e=to(t.shadowRoot))!=null?e:t:null}function Sa(i){var e;let t=(e=i==null?void 0:i.getRootNode)==null?void 0:e.call(i);return t instanceof ShadowRoot||t instanceof Document?t:null}function ar(i,{depth:t=3,checkOpacity:e=!0,checkVisibilityCSS:r=!0}={}){if(i.checkVisibility)return i.checkVisibility({checkOpacity:e,checkVisibilityCSS:r});let o=i;for(;o&&t>0;){let n=getComputedStyle(o);if(e&&n.opacity==="0"||r&&n.visibility==="hidden"||n.display==="none")return!1;o=o.parentElement,t--}return!0}function bn(i,t,e,r){let o=r.x-e.x,n=r.y-e.y,d=o*o+n*n;if(d===0)return 0;let u=((i-e.x)*o+(t-e.y)*n)/d;return Math.max(0,Math.min(1,u))}function F(i,t){let e=Ia(i,r=>r===t);return e||io(i,t)}function Ia(i,t){var r,o;let e;for(e of(r=i.querySelectorAll("style:not([media])"))!=null?r:[]){let n;try{n=(o=e.sheet)==null?void 0:o.cssRules}catch{continue}for(let d of n!=null?n:[])if(t(d.selectorText))return d}}function io(i,t){var n,d;let e=(n=i.querySelectorAll("style:not([media])"))!=null?n:[],r=e==null?void 0:e[e.length-1];if(!(r!=null&&r.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",i),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let o=r==null?void 0:r.sheet.insertRule(`${t}{}`,r.sheet.cssRules.length);return(d=r.sheet.cssRules)==null?void 0:d[o]}function O(i,t,e=Number.NaN){let r=i.getAttribute(t);return r!=null?+r:e}function H(i,t,e){let r=+e;if(e==null||Number.isNaN(r)){i.hasAttribute(t)&&i.removeAttribute(t);return}O(i,t,void 0)!==r&&i.setAttribute(t,`${r}`)}function y(i,t){return i.hasAttribute(t)}function S(i,t,e){if(e==null){i.hasAttribute(t)&&i.removeAttribute(t);return}y(i,t)!=e&&i.toggleAttribute(t,e)}function R(i,t,e=null){var r;return(r=i.getAttribute(t))!=null?r:e}function D(i,t,e){if(e==null){i.hasAttribute(t)&&i.removeAttribute(t);return}let r=`${e}`;R(i,t,void 0)!==r&&i.setAttribute(t,r)}function Ma(i){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var W,nt=class extends l.HTMLElement{constructor(){super();c(this,W,void 0);if(!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER,a.MEDIA_PAUSED]}attributeChangedCallback(e,r,o){var n,d,u,m,b;e===k.MEDIA_CONTROLLER&&(r&&((d=(n=s(this,W))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,W,null)),o&&this.isConnected&&(h(this,W,(u=this.getRootNode())==null?void 0:u.getElementById(o)),(b=(m=s(this,W))==null?void 0:m.associateElement)==null||b.call(m,this)))}connectedCallback(){var e,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),h(this,W,_a(this)),this.getAttribute(k.MEDIA_CONTROLLER)&&((r=(e=s(this,W))==null?void 0:e.associateElement)==null||r.call(e,this)),s(this,W)&&(s(this,W).addEventListener("pointerdown",this),s(this,W).addEventListener("click",this),s(this,W).hasAttribute("tabindex")||(s(this,W).tabIndex=0))}disconnectedCallback(){var e,r,o,n;this.getAttribute(k.MEDIA_CONTROLLER)&&((r=(e=s(this,W))==null?void 0:e.unassociateElement)==null||r.call(e,this)),(o=s(this,W))==null||o.removeEventListener("pointerdown",this),(n=s(this,W))==null||n.removeEventListener("click",this),h(this,W,null)}handleEvent(e){var n;let r=(n=e.composedPath())==null?void 0:n[0];if(["video","media-controller"].includes(r==null?void 0:r.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){let{clientX:d,clientY:u}=e,{left:m,top:b,width:A,height:_}=this.getBoundingClientRect(),v=d-m,f=u-b;if(v<0||f<0||v>A||f>_||A===0&&_===0)return;let x=this._pointerType||"mouse";if(this._pointerType=void 0,x===Qt.TOUCH){this.handleTap(e);return}else if(x===Qt.MOUSE||x===Qt.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return y(this,a.MEDIA_PAUSED)}set mediaPaused(e){S(this,a.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let r=this.mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(r,{composed:!0,bubbles:!0}))}};W=new WeakMap,nt.shadowRootOptions={mode:"open"},nt.getTemplateHTML=Ma;function _a(i){var e;let t=i.getAttribute(k.MEDIA_CONTROLLER);return t?(e=i.getRootNode())==null?void 0:e.getElementById(t):Se(i,"media-controller")}l.customElements.get("media-gesture-receiver")||l.customElements.define("media-gesture-receiver",nt);var zt=nt;var I={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function La(i){return`
    <style>
      
      :host([${a.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${I.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${I.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${I.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${I.AUDIO}])[${I.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${I.AUDIO}])[${I.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${I.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${I.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${I.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${I.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${I.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${I.USER_INACTIVE}]:not([${a.MEDIA_PAUSED}]):not([${a.MEDIA_IS_AIRPLAYING}]):not([${a.MEDIA_IS_CASTING}]):not([${I.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${I.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${I.USER_INACTIVE}]:not([${I.NO_AUTOHIDE}]):not([${a.MEDIA_PAUSED}]):not([${a.MEDIA_IS_CASTING}]):not([${I.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${I.USER_INACTIVE}][${I.AUTOHIDE_OVER_CONTROLS}]:not([${I.NO_AUTOHIDE}]):not([${a.MEDIA_PAUSED}]):not([${a.MEDIA_IS_CASTING}]):not([${I.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${I.AUDIO}])[${a.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${zt.shadowRootOptions.mode}">
          ${zt.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var ka=Object.values(a),Ra="sm:384 md:576 lg:768 xl:960";function Da(i){fn(i.target,i.contentRect.width)}function fn(i,t){var d;if(!i.isConnected)return;let e=(d=i.getAttribute(I.BREAKPOINTS))!=null?d:Ra,r=xa(e),o=wa(r,t),n=!1;if(Object.keys(r).forEach(u=>{if(o.includes(u)){i.hasAttribute(`breakpoint${u}`)||(i.setAttribute(`breakpoint${u}`,""),n=!0);return}i.hasAttribute(`breakpoint${u}`)&&(i.removeAttribute(`breakpoint${u}`),n=!0)}),n){let u=new CustomEvent(Ae.BREAKPOINTS_CHANGE,{detail:o});i.dispatchEvent(u)}i.breakpointsComputed||(i.breakpointsComputed=!0,i.dispatchEvent(new CustomEvent(Ae.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function xa(i){let t=i.split(/\s+/);return Object.fromEntries(t.map(e=>e.split(":")))}function wa(i,t){return Object.keys(i).filter(e=>t>=parseInt(i[e]))}var st,Xt,Oe,Ue,Ne,lr,at,Jt,ur,vn,cr,Tn,dt,dr,ei,ro,He,Zt,be,ti,Ie=class extends l.HTMLElement{constructor(){super();c(this,ur);c(this,cr);c(this,dt);c(this,ei);c(this,He);c(this,st,void 0);c(this,Xt,0);c(this,Oe,null);c(this,Ue,null);c(this,Ne,void 0);this.breakpointsComputed=!1;c(this,lr,e=>{let r=this.media;for(let o of e){if(o.type!=="childList")continue;let n=o.removedNodes;for(let d of n){if(d.slot!="media"||o.target!=this)continue;let u=o.previousSibling&&o.previousSibling.previousElementSibling;if(!u||!r)this.mediaUnsetCallback(d);else{let m=u.slot!=="media";for(;(u=u.previousSibling)!==null;)u.slot=="media"&&(m=!1);m&&this.mediaUnsetCallback(d)}}if(r)for(let d of o.addedNodes)d===r&&this.handleMediaUpdated(r)}});c(this,at,!1);c(this,Jt,e=>{s(this,at)||(setTimeout(()=>{Da(e),h(this,at,!1)},0),h(this,at,!0))});c(this,be,void 0);c(this,ti,()=>{if(!s(this,be).assignedElements({flatten:!0}).length){s(this,Oe)&&this.mediaUnsetCallback(s(this,Oe));return}this.handleMediaUpdated(this.media)});if(!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes),r=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(r):this.shadowRoot.innerHTML=r}h(this,st,new MutationObserver(s(this,lr)))}static get observedAttributes(){return[I.AUTOHIDE,I.GESTURES_DISABLED].concat(ka).filter(e=>![a.MEDIA_RENDITION_LIST,a.MEDIA_AUDIO_TRACK_LIST,a.MEDIA_CHAPTERS_CUES,a.MEDIA_WIDTH,a.MEDIA_HEIGHT,a.MEDIA_ERROR,a.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,r,o){e.toLowerCase()==I.AUTOHIDE&&(this.autohide=o)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(h(this,Oe,e),e.localName.includes("-")&&await l.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var n;s(this,st).observe(this,{childList:!0,subtree:!0}),rr(this,s(this,Jt));let r=this.getAttribute(I.AUDIO)!=null?g("audio player"):g("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",r),this.handleMediaUpdated(this.media),this.setAttribute(I.USER_INACTIVE,""),fn(this,this.getBoundingClientRect().width);let o=this.querySelector(":scope > slot[slot=media]");o&&(h(this,be,o),s(this,be).addEventListener("slotchange",s(this,ti))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(n=l.window)==null||n.addEventListener("mouseup",this)}disconnectedCallback(){var e;or(this,s(this,Jt)),clearTimeout(s(this,Ue)),s(this,st).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=l.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),s(this,be)&&(s(this,be).removeEventListener("slotchange",s(this,ti)),h(this,be,null))}mediaSetCallback(e){}mediaUnsetCallback(e){h(this,Oe,null)}handleEvent(e){switch(e.type){case"pointerdown":h(this,Xt,e.timeStamp);break;case"pointermove":T(this,ur,vn).call(this,e);break;case"pointerup":T(this,cr,Tn).call(this,e);break;case"mouseleave":T(this,dt,dr).call(this);break;case"mouseup":this.removeAttribute(I.KEYBOARD_CONTROL);break;case"keyup":T(this,He,Zt).call(this),this.setAttribute(I.KEYBOARD_CONTROL,"");break}}set autohide(e){let r=Number(e);h(this,Ne,isNaN(r)?0:r)}get autohide(){return(s(this,Ne)===void 0?2:s(this,Ne)).toString()}get breakpoints(){return R(this,I.BREAKPOINTS)}set breakpoints(e){D(this,I.BREAKPOINTS,e)}get audio(){return y(this,I.AUDIO)}set audio(e){S(this,I.AUDIO,e)}get gesturesDisabled(){return y(this,I.GESTURES_DISABLED)}set gesturesDisabled(e){S(this,I.GESTURES_DISABLED,e)}get keyboardControl(){return y(this,I.KEYBOARD_CONTROL)}set keyboardControl(e){S(this,I.KEYBOARD_CONTROL,e)}get noAutohide(){return y(this,I.NO_AUTOHIDE)}set noAutohide(e){S(this,I.NO_AUTOHIDE,e)}get autohideOverControls(){return y(this,I.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){S(this,I.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return y(this,I.USER_INACTIVE)}set userInteractive(e){S(this,I.USER_INACTIVE,e)}};st=new WeakMap,Xt=new WeakMap,Oe=new WeakMap,Ue=new WeakMap,Ne=new WeakMap,lr=new WeakMap,at=new WeakMap,Jt=new WeakMap,ur=new WeakSet,vn=function(e){if(e.pointerType!=="mouse"&&e.timeStamp-s(this,Xt)<250)return;T(this,ei,ro).call(this),clearTimeout(s(this,Ue));let r=this.hasAttribute(I.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||r)&&T(this,He,Zt).call(this)},cr=new WeakSet,Tn=function(e){if(e.pointerType==="touch"){let r=!this.hasAttribute(I.USER_INACTIVE);[this,this.media].includes(e.target)&&r?T(this,dt,dr).call(this):T(this,He,Zt).call(this)}else e.composedPath().some(r=>["media-play-button","media-fullscreen-button"].includes(r==null?void 0:r.localName))&&T(this,He,Zt).call(this)},dt=new WeakSet,dr=function(){if(s(this,Ne)<0||this.hasAttribute(I.USER_INACTIVE))return;this.setAttribute(I.USER_INACTIVE,"");let e=new l.CustomEvent(Ae.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},ei=new WeakSet,ro=function(){if(!this.hasAttribute(I.USER_INACTIVE))return;this.removeAttribute(I.USER_INACTIVE);let e=new l.CustomEvent(Ae.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},He=new WeakSet,Zt=function(){T(this,ei,ro).call(this),clearTimeout(s(this,Ue));let e=parseInt(this.autohide);e<0||h(this,Ue,setTimeout(()=>{T(this,dt,dr).call(this)},e*1e3))},be=new WeakMap,ti=new WeakMap,Ie.shadowRootOptions={mode:"open"},Ie.getTemplateHTML=La;l.customElements.get("media-container")||l.customElements.define("media-container",Ie);var An=Ie;var Fe,$e,ii,_e,me,Me,lt=class{constructor(t,e,{defaultValue:r}={defaultValue:void 0}){c(this,me);c(this,Fe,void 0);c(this,$e,void 0);c(this,ii,void 0);c(this,_e,new Set);h(this,Fe,t),h(this,$e,e),h(this,ii,new Set(r))}[Symbol.iterator](){return s(this,me,Me).values()}get length(){return s(this,me,Me).size}get value(){var t;return(t=[...s(this,me,Me)].join(" "))!=null?t:""}set value(t){var e;t!==this.value&&(h(this,_e,new Set),this.add(...(e=t==null?void 0:t.split(" "))!=null?e:[]))}toString(){return this.value}item(t){return[...s(this,me,Me)][t]}values(){return s(this,me,Me).values()}forEach(t,e){s(this,me,Me).forEach(t,e)}add(...t){var e,r;t.forEach(o=>s(this,_e).add(o)),!(this.value===""&&!((e=s(this,Fe))!=null&&e.hasAttribute(`${s(this,$e)}`)))&&((r=s(this,Fe))==null||r.setAttribute(`${s(this,$e)}`,`${this.value}`))}remove(...t){var e;t.forEach(r=>s(this,_e).delete(r)),(e=s(this,Fe))==null||e.setAttribute(`${s(this,$e)}`,`${this.value}`)}contains(t){return s(this,me,Me).has(t)}toggle(t,e){return typeof e!="undefined"?e?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,e){return this.remove(t),this.add(e),t===e}};Fe=new WeakMap,$e=new WeakMap,ii=new WeakMap,_e=new WeakMap,me=new WeakSet,Me=function(){return s(this,_e).size?s(this,_e):s(this,ii)};var Ca=(i="")=>i.split(/\s+/),yn=(i="")=>{let[t,e,r]=i.split(":"),o=r?decodeURIComponent(r):void 0;return{kind:t==="cc"?q.CAPTIONS:q.SUBTITLES,language:e,label:o}},oo=(i="",t={})=>Ca(i).map(e=>{let r=yn(e);return{...t,...r}}),no=i=>i?Array.isArray(i)?i.map(t=>typeof t=="string"?yn(t):t):typeof i=="string"?oo(i):[i]:[],Pa=({kind:i,label:t,language:e}={kind:"subtitles"})=>t?`${i==="captions"?"cc":"sb"}:${e}:${encodeURIComponent(t)}`:e,ri=(i=[])=>Array.prototype.map.call(i,Pa).join(" "),Oa=(i,t)=>e=>e[i]===t,Sn=i=>{let t=Object.entries(i).map(([e,r])=>Oa(e,r));return e=>t.every(r=>r(e))},Be=(i,t=[],e=[])=>{let r=no(e).map(Sn),o=n=>r.some(d=>d(n));Array.from(t).filter(o).forEach(n=>{n.mode=i})},Ve=(i,t=()=>!0)=>{if(!(i!=null&&i.textTracks))return[];let e=typeof t=="function"?t:Sn(t);return Array.from(i.textTracks).filter(e)},In=i=>{var e;return!!((e=i.mediaSubtitlesShowing)!=null&&e.length)||i.hasAttribute(a.MEDIA_SUBTITLES_SHOWING)};var _n=i=>{var r;let{media:t,fullscreenElement:e}=i;try{let o=e&&"requestFullscreen"in e?"requestFullscreen":e&&"webkitRequestFullScreen"in e?"webkitRequestFullScreen":void 0;if(o){let n=(r=e[o])==null?void 0:r.call(e);if(n instanceof Promise)return n.catch(()=>{})}else t!=null&&t.webkitEnterFullscreen?t.webkitEnterFullscreen():t!=null&&t.requestFullscreen&&t.requestFullscreen()}catch(o){console.error(o)}},Mn="exitFullscreen"in K?"exitFullscreen":"webkitExitFullscreen"in K?"webkitExitFullscreen":"webkitCancelFullScreen"in K?"webkitCancelFullScreen":void 0,Ln=i=>{var e;let{documentElement:t}=i;if(Mn){let r=(e=t==null?void 0:t[Mn])==null?void 0:e.call(t);if(r instanceof Promise)return r.catch(()=>{})}},oi="fullscreenElement"in K?"fullscreenElement":"webkitFullscreenElement"in K?"webkitFullscreenElement":void 0,Ua=i=>{let{documentElement:t,media:e}=i,r=t==null?void 0:t[oi];return!r&&"webkitDisplayingFullscreen"in e&&"webkitPresentationMode"in e&&e.webkitDisplayingFullscreen&&e.webkitPresentationMode===zr.FULLSCREEN?e:r},kn=i=>{var n;let{media:t,documentElement:e,fullscreenElement:r=t}=i;if(!t||!e)return!1;let o=Ua(i);if(!o)return!1;if(o===r||o===t)return!0;if(o.localName.includes("-")){let d=o.shadowRoot;if(!(oi in d))return ce(o,r);for(;d!=null&&d[oi];){if(d[oi]===r)return!0;d=(n=d[oi])==null?void 0:n.shadowRoot}}return!1},Na="fullscreenEnabled"in K?"fullscreenEnabled":"webkitFullscreenEnabled"in K?"webkitFullscreenEnabled":void 0,Rn=i=>{let{documentElement:t,media:e}=i;return!!(t!=null&&t[Na])||e&&"webkitSupportsFullscreen"in e};var mr,so=()=>{var i,t;return mr||(mr=(t=(i=K)==null?void 0:i.createElement)==null?void 0:t.call(i,"video"),mr)},Dn=async(i=so())=>{if(!i)return!1;let t=i.volume;i.volume=t/2+.1;let e=new AbortController,r=await Promise.race([Ha(i,e.signal),Fa(i,t)]);return e.abort(),r},Ha=(i,t)=>new Promise(e=>{i.addEventListener("volumechange",()=>e(!0),{signal:t})}),Fa=async(i,t)=>{for(let e=0;e<10;e++){if(i.volume===t)return!1;await Xi(10)}return i.volume!==t},$a=/.*Version\/.*Safari\/.*/.test(l.navigator.userAgent),ao=(i=so())=>l.matchMedia("(display-mode: standalone)").matches&&$a?!1:typeof(i==null?void 0:i.requestPictureInPicture)=="function",lo=(i=so())=>Rn({documentElement:K,media:i}),xn=lo(),wn=ao(),Cn=!!l.WebKitPlaybackTargetAvailabilityEvent,Pn=!!l.chrome;var ut=i=>Ve(i.media,t=>[q.SUBTITLES,q.CAPTIONS].includes(t.kind)).sort((t,e)=>t.kind>=e.kind?1:-1),uo=i=>Ve(i.media,t=>t.mode===ge.SHOWING&&[q.SUBTITLES,q.CAPTIONS].includes(t.kind)),hr=(i,t)=>{let e=ut(i),r=uo(i),o=!!r.length;if(e.length){if(t===!1||o&&t!==!0)Be(ge.DISABLED,e,r);else if(t===!0||!o&&t!==!1){let n=e[0],{options:d}=i;if(!(d!=null&&d.noSubtitlesLangPref)){let A=l.localStorage.getItem("media-chrome-pref-subtitles-lang"),_=A?[A,...l.navigator.languages]:l.navigator.languages,v=e.filter(f=>_.some(x=>f.language.toLowerCase().startsWith(x.split("-")[0]))).sort((f,x)=>{let M=_.findIndex(C=>f.language.toLowerCase().startsWith(C.split("-")[0])),L=_.findIndex(C=>x.language.toLowerCase().startsWith(C.split("-")[0]));return M-L});v[0]&&(n=v[0])}let{language:u,label:m,kind:b}=n;Be(ge.DISABLED,e,r),Be(ge.SHOWING,e,[{language:u,label:m,kind:b}])}}},pr=(i,t)=>i===t?!0:i==null||t==null||typeof i!=typeof t?!1:typeof i=="number"&&Number.isNaN(i)&&Number.isNaN(t)?!0:typeof i!="object"?!1:Array.isArray(i)?Ba(i,t):Object.entries(i).every(([e,r])=>e in t&&pr(r,t[e])),Ba=(i,t)=>{let e=Array.isArray(i),r=Array.isArray(t);return e!==r?!1:e||r?i.length!==t.length?!1:i.every((o,n)=>pr(o,t[n])):!0};var Va=Object.values(z),Er,Ka=Dn().then(i=>(Er=i,Er)),On=async(...i)=>{await Promise.all(i.filter(t=>t).map(async t=>{if(!("localName"in t&&t instanceof l.HTMLElement))return;let e=t.localName;if(!e.includes("-"))return;let r=l.customElements.get(e);r&&t instanceof r||(await l.customElements.whenDefined(e),l.customElements.upgrade(t))}))},Ga=new l.DOMParser,Wa=i=>i&&(Ga.parseFromString(i,"text/html").body.textContent||i),ct={mediaError:{get(i,t){let{media:e}=i;if((t==null?void 0:t.type)!=="playing")return e==null?void 0:e.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(i,t){var r;let{media:e}=i;if((t==null?void 0:t.type)!=="playing")return(r=e==null?void 0:e.error)==null?void 0:r.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(i,t){var r,o;let{media:e}=i;if((t==null?void 0:t.type)!=="playing")return(o=(r=e==null?void 0:e.error)==null?void 0:r.message)!=null?o:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.paused)!=null?e:!0},set(i,t){var r;let{media:e}=t;e&&(i?e.pause():(r=e.play())==null||r.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(i,t){let{media:e}=i;return e?t?t.type==="playing":!e.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.playbackRate)!=null?e:1},set(i,t){let{media:e}=t;e&&Number.isFinite(+i)&&(e.playbackRate=+i)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.muted)!=null?e:!1},set(i,t){let{media:e,options:{noMutedPref:r}={}}=t;if(e){e.muted=i;try{let o=l.localStorage.getItem("media-chrome-pref-muted")!==null,n=e.hasAttribute("muted");if(r){o&&l.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!o)return;l.localStorage.setItem("media-chrome-pref-muted",i?"true":"false")}catch(o){console.debug("Error setting muted pref",o)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(i,t)=>{let{options:{noMutedPref:e}}=t,{media:r}=t;if(!(!r||r.muted||e))try{let o=l.localStorage.getItem("media-chrome-pref-muted")==="true";ct.mediaMuted.set(o,t),i(o)}catch(o){console.debug("Error getting muted pref",o)}}]},mediaLoop:{get(i){let{media:t}=i;return t==null?void 0:t.loop},set(i,t){let{media:e}=t;e&&(e.loop=i)},mediaEvents:["medialooprequest"]},mediaVolume:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.volume)!=null?e:1},set(i,t){let{media:e,options:{noVolumePref:r}={}}=t;if(e){try{i==null?l.localStorage.removeItem("media-chrome-pref-volume"):!e.hasAttribute("muted")&&!r&&l.localStorage.setItem("media-chrome-pref-volume",i.toString())}catch(o){console.debug("Error setting volume pref",o)}Number.isFinite(+i)&&(e.volume=+i)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(i,t)=>{let{options:{noVolumePref:e}}=t;if(!e)try{let{media:r}=t;if(!r)return;let o=l.localStorage.getItem("media-chrome-pref-volume");if(o==null)return;ct.mediaVolume.set(+o,t),i(+o)}catch(r){console.debug("Error getting volume pref",r)}}]},mediaVolumeLevel:{get(i){let{media:t}=i;return typeof(t==null?void 0:t.volume)=="undefined"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(i){var e;let{media:t}=i;return(e=t==null?void 0:t.currentTime)!=null?e:0},set(i,t){let{media:e}=t;!e||!ot(i)||(e.currentTime=i)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(i){let{media:t,options:{defaultDuration:e}={}}=i;return e&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?e:Number.isFinite(t==null?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(i){let{media:t}=i;return(t==null?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(i){var o;let{media:t}=i;if(!((o=t==null?void 0:t.seekable)!=null&&o.length))return;let e=t.seekable.start(0),r=t.seekable.end(t.seekable.length-1);if(!(!e&&!r))return[Number(e.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(i){var r;let{media:t}=i,e=(r=t==null?void 0:t.buffered)!=null?r:[];return Array.from(e).map((o,n)=>[Number(e.start(n).toFixed(3)),Number(e.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(i){let{media:t,options:{defaultStreamType:e}={}}=i,r=[z.LIVE,z.ON_DEMAND].includes(e)?e:void 0;if(!t)return r;let{streamType:o}=t;if(Va.includes(o))return o===z.UNKNOWN?r:o;let n=t.duration;return n===1/0?z.LIVE:Number.isFinite(n)?z.ON_DEMAND:r},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(i){let{media:t}=i;if(!t)return Number.NaN;let{targetLiveWindow:e}=t,r=ct.mediaStreamType.get(i);return(e==null||Number.isNaN(e))&&r===z.LIVE?0:e},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(i){let{media:t,options:{liveEdgeOffset:e=10}={}}=i;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(!(ct.mediaStreamType.get(i)===z.LIVE))return!1;let o=t.seekable;if(!o)return!0;if(!o.length)return!1;let n=o.end(o.length-1)-e;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(i){return ut(i).map(({kind:t,label:e,language:r})=>({kind:t,label:e,language:r}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(i){return uo(i).map(({kind:t,label:e,language:r})=>({kind:t,label:e,language:r}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(i,t)=>{var n,d;let{media:e,options:r}=t;if(!e)return;let o=u=>{var b;!r.defaultSubtitles||u&&![q.CAPTIONS,q.SUBTITLES].includes((b=u==null?void 0:u.track)==null?void 0:b.kind)||hr(t,!0)};return e.addEventListener("loadstart",o),(n=e.textTracks)==null||n.addEventListener("addtrack",o),(d=e.textTracks)==null||d.addEventListener("removetrack",o),()=>{var u,m;e.removeEventListener("loadstart",o),(u=e.textTracks)==null||u.removeEventListener("addtrack",o),(m=e.textTracks)==null||m.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(i){var r;let{media:t}=i;if(!t)return[];let[e]=Ve(t,{kind:q.CHAPTERS});return Array.from((r=e==null?void 0:e.cues)!=null?r:[]).map(({text:o,startTime:n,endTime:d})=>({text:Wa(o),startTime:n,endTime:d}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(i,t)=>{var n;let{media:e}=t;if(!e)return;let r=e.querySelector('track[kind="chapters"][default][src]'),o=(n=e.shadowRoot)==null?void 0:n.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",i),o==null||o.addEventListener("load",i),()=>{r==null||r.removeEventListener("load",i),o==null||o.removeEventListener("load",i)}}]},mediaIsPip:{get(i){var r,o;let{media:t,documentElement:e}=i;if(!t||!e||!e.pictureInPictureElement)return!1;if(e.pictureInPictureElement===t)return!0;if(e.pictureInPictureElement instanceof HTMLMediaElement)return(r=t.localName)!=null&&r.includes("-")?ce(t,e.pictureInPictureElement):!1;if(e.pictureInPictureElement.localName.includes("-")){let n=e.pictureInPictureElement.shadowRoot;for(;n!=null&&n.pictureInPictureElement;){if(n.pictureInPictureElement===t)return!0;n=(o=n.pictureInPictureElement)==null?void 0:o.shadowRoot}}return!1},set(i,t){let{media:e}=t;if(e)if(i){if(!K.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!e.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let r=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};e.requestPictureInPicture().catch(o=>{if(o.code===11){if(!e.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(e.readyState===0&&e.preload==="none"){let n=()=>{e.removeEventListener("loadedmetadata",d),e.preload="none"},d=()=>{e.requestPictureInPicture().catch(r),n()};e.addEventListener("loadedmetadata",d),e.preload="metadata",setTimeout(()=>{e.readyState===0&&r(),n()},1e3)}else throw o}else throw o})}else K.pictureInPictureElement&&K.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(i){var e;let{media:t}=i;return[...(e=t==null?void 0:t.videoRenditions)!=null?e:[]].map(r=>({...r}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(i){var e,r,o;let{media:t}=i;return(o=(r=t==null?void 0:t.videoRenditions)==null?void 0:r[(e=t.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:o.id},set(i,t){let{media:e}=t;if(!(e!=null&&e.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let r=i,o=Array.prototype.findIndex.call(e.videoRenditions,n=>n.id==r);e.videoRenditions.selectedIndex!=o&&(e.videoRenditions.selectedIndex=o)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(i){var e;let{media:t}=i;return[...(e=t==null?void 0:t.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(i){var e,r;let{media:t}=i;return(r=[...(e=t==null?void 0:t.audioTracks)!=null?e:[]].find(o=>o.enabled))==null?void 0:r.id},set(i,t){let{media:e}=t;if(!(e!=null&&e.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}let r=i;for(let o of e.audioTracks)o.enabled=r==o.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(i){return kn(i)},set(i,t,e){var r,o;i?(_n(t),e.detail&&!((r=t.media)!=null&&r.inert)&&((o=t.media)==null||o.focus())):Ln(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(i){var e;let{media:t}=i;return!(t!=null&&t.remote)||((e=t.remote)==null?void 0:e.state)==="disconnected"?!1:!!t.remote.state},set(i,t){var r,o;let{media:e}=t;if(e&&!(i&&((r=e.remote)==null?void 0:r.state)!=="disconnected")&&!(!i&&((o=e.remote)==null?void 0:o.state)!=="connected")){if(typeof e.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}e.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(i,t){let{media:e}=t;if(e){if(!(e.webkitShowPlaybackTargetPicker&&l.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}e.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(i){let{media:t}=i;if(!xn||!lo(t))return Y.UNSUPPORTED}},mediaPipUnavailable:{get(i){let{media:t}=i;if(!wn||!ao(t))return Y.UNSUPPORTED;if(t!=null&&t.disablePictureInPicture)return Y.UNAVAILABLE}},mediaVolumeUnavailable:{get(i){let{media:t}=i;if(Er===!1||(t==null?void 0:t.volume)==null)return Y.UNSUPPORTED},stateOwnersUpdateHandlers:[i=>{Er==null&&Ka.then(t=>i(t?void 0:Y.UNSUPPORTED))}]},mediaCastUnavailable:{get(i,{availability:t="not-available"}={}){var r;let{media:e}=i;if(!Pn||!((r=e==null?void 0:e.remote)!=null&&r.state))return Y.UNSUPPORTED;if(!(t==null||t==="available"))return Y.UNAVAILABLE},stateOwnersUpdateHandlers:[(i,t)=>{var o;let{media:e}=t;return e?(e.disableRemotePlayback||e.hasAttribute("disableremoteplayback")||(o=e==null?void 0:e.remote)==null||o.watchAvailability(n=>{i({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?i({availability:null}):i({availability:"not-available"})}),()=>{var n;(n=e==null?void 0:e.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(i,t){if(!Cn)return Y.UNSUPPORTED;if((t==null?void 0:t.availability)==="not-available")return Y.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(i,t)=>{var o;let{media:e}=t;return e?(e.disableRemotePlayback||e.hasAttribute("disableremoteplayback")||(o=e==null?void 0:e.remote)==null||o.watchAvailability(n=>{i({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?i({availability:null}):i({availability:"not-available"})}),()=>{var n;(n=e==null?void 0:e.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(i){var e;let{media:t}=i;if(!(t!=null&&t.videoRenditions))return Y.UNSUPPORTED;if(!((e=t.videoRenditions)!=null&&e.length))return Y.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(i){var e,r;let{media:t}=i;if(!(t!=null&&t.audioTracks))return Y.UNSUPPORTED;if(((r=(e=t.audioTracks)==null?void 0:e.length)!=null?r:0)<=1)return Y.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(i){let{options:{mediaLang:t}={}}=i;return t!=null?t:"en"}}};var Un={[E.MEDIA_PREVIEW_REQUEST](i,t,{detail:e}){var A,_,v;let{media:r}=t,o=e!=null?e:void 0,n,d;if(r&&o!=null){let[f]=Ve(r,{kind:q.METADATA,label:"thumbnails"}),x=Array.prototype.find.call((A=f==null?void 0:f.cues)!=null?A:[],(M,L,C)=>L===0?M.endTime>o:L===C.length-1?M.startTime<=o:M.startTime<=o&&M.endTime>o);if(x){let M=/'^(?:[a-z]+:)?\/\//i.test(x.text)||(_=r==null?void 0:r.querySelector('track[label="thumbnails"]'))==null?void 0:_.src,L=new URL(x.text,M);d=new URLSearchParams(L.hash).get("#xywh").split(",").map(P=>+P),n=L.href}}let u=i.mediaDuration.get(t),b=(v=i.mediaChaptersCues.get(t).find((f,x,M)=>x===M.length-1&&u===f.endTime?f.startTime<=o&&f.endTime>=o:f.startTime<=o&&f.endTime>o))==null?void 0:v.text;return e!=null&&b==null&&(b=""),{mediaPreviewTime:o,mediaPreviewImage:n,mediaPreviewCoords:d,mediaPreviewChapter:b}},[E.MEDIA_PAUSE_REQUEST](i,t){i["mediaPaused"].set(!0,t)},[E.MEDIA_PLAY_REQUEST](i,t){var u,m,b,A;let e="mediaPaused",o=i.mediaStreamType.get(t)===z.LIVE,n=!((u=t.options)!=null&&u.noAutoSeekToLive),d=i.mediaTargetLiveWindow.get(t)>0;if(o&&n&&!d){let _=(m=i.mediaSeekable.get(t))==null?void 0:m[1];if(_){let v=(A=(b=t.options)==null?void 0:b.seekToLiveOffset)!=null?A:0,f=_-v;i.mediaCurrentTime.set(f,t)}}i[e].set(!1,t)},[E.MEDIA_PLAYBACK_RATE_REQUEST](i,t,{detail:e}){let r="mediaPlaybackRate",o=e;i[r].set(o,t)},[E.MEDIA_MUTE_REQUEST](i,t){i["mediaMuted"].set(!0,t)},[E.MEDIA_UNMUTE_REQUEST](i,t){let e="mediaMuted";i.mediaVolume.get(t)||i.mediaVolume.set(.25,t),i[e].set(!1,t)},[E.MEDIA_LOOP_REQUEST](i,t,{detail:e}){let r="mediaLoop",o=!!e;return i[r].set(o,t),{mediaLoop:o}},[E.MEDIA_VOLUME_REQUEST](i,t,{detail:e}){let r="mediaVolume",o=e;o&&i.mediaMuted.get(t)&&i.mediaMuted.set(!1,t),i[r].set(o,t)},[E.MEDIA_SEEK_REQUEST](i,t,{detail:e}){let r="mediaCurrentTime",o=e;i[r].set(o,t)},[E.MEDIA_SEEK_TO_LIVE_REQUEST](i,t){var d,u,m;let e="mediaCurrentTime",r=(d=i.mediaSeekable.get(t))==null?void 0:d[1];if(Number.isNaN(Number(r)))return;let o=(m=(u=t.options)==null?void 0:u.seekToLiveOffset)!=null?m:0,n=r-o;i[e].set(n,t)},[E.MEDIA_SHOW_SUBTITLES_REQUEST](i,t,{detail:e}){var u;let{options:r}=t,o=ut(t),n=no(e),d=(u=n[0])==null?void 0:u.language;d&&!r.noSubtitlesLangPref&&l.localStorage.setItem("media-chrome-pref-subtitles-lang",d),Be(ge.SHOWING,o,n)},[E.MEDIA_DISABLE_SUBTITLES_REQUEST](i,t,{detail:e}){let r=ut(t),o=e!=null?e:[];Be(ge.DISABLED,r,o)},[E.MEDIA_TOGGLE_SUBTITLES_REQUEST](i,t,{detail:e}){hr(t,e)},[E.MEDIA_RENDITION_REQUEST](i,t,{detail:e}){let r="mediaRenditionSelected",o=e;i[r].set(o,t)},[E.MEDIA_AUDIO_TRACK_REQUEST](i,t,{detail:e}){let r="mediaAudioTrackEnabled",o=e;i[r].set(o,t)},[E.MEDIA_ENTER_PIP_REQUEST](i,t){let e="mediaIsPip";i.mediaIsFullscreen.get(t)&&i.mediaIsFullscreen.set(!1,t),i[e].set(!0,t)},[E.MEDIA_EXIT_PIP_REQUEST](i,t){i["mediaIsPip"].set(!1,t)},[E.MEDIA_ENTER_FULLSCREEN_REQUEST](i,t,e){let r="mediaIsFullscreen";i.mediaIsPip.get(t)&&i.mediaIsPip.set(!1,t),i[r].set(!0,t,e)},[E.MEDIA_EXIT_FULLSCREEN_REQUEST](i,t){i["mediaIsFullscreen"].set(!1,t)},[E.MEDIA_ENTER_CAST_REQUEST](i,t){let e="mediaIsCasting";i.mediaIsFullscreen.get(t)&&i.mediaIsFullscreen.set(!1,t),i[e].set(!0,t)},[E.MEDIA_EXIT_CAST_REQUEST](i,t){i["mediaIsCasting"].set(!1,t)},[E.MEDIA_AIRPLAY_REQUEST](i,t){i["mediaIsAirplaying"].set(!0,t)}};var Nn=({media:i,fullscreenElement:t,documentElement:e,stateMediator:r=ct,requestMap:o=Un,options:n={},monitorStateOwnersOnlyWithSubscriptions:d=!0})=>{let u=[],m={options:{...n}},b=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),A=M=>{M!=null&&(pr(M,b)||(b=Object.freeze({...b,...M}),u.forEach(L=>L(b))))},_=()=>{let M=Object.entries(r).reduce((L,[C,{get:P}])=>(L[C]=P(m),L),{});A(M)},v={},f,x=async(M,L)=>{var Fo,$o,Bo,Vo,Ko,Go,Wo,qo,Yo,Qo,jo,zo,Zo,Xo,Jo,en;let C=!!f;if(f={...m,...f!=null?f:{},...M},C)return;await On(...Object.values(M));let P=u.length>0&&L===0&&d,J=m.media!==f.media,Gr=((Fo=m.media)==null?void 0:Fo.textTracks)!==(($o=f.media)==null?void 0:$o.textTracks),Wt=((Bo=m.media)==null?void 0:Bo.videoRenditions)!==((Vo=f.media)==null?void 0:Vo.videoRenditions),it=((Ko=m.media)==null?void 0:Ko.audioTracks)!==((Go=f.media)==null?void 0:Go.audioTracks),pe=((Wo=m.media)==null?void 0:Wo.remote)!==((qo=f.media)==null?void 0:qo.remote),Ee=m.documentElement!==f.documentElement,qt=!!m.media&&(J||P),Pe=!!((Yo=m.media)!=null&&Yo.textTracks)&&(Gr||P),ko=!!((Qo=m.media)!=null&&Qo.videoRenditions)&&(Wt||P),Ro=!!((jo=m.media)!=null&&jo.audioTracks)&&(it||P),Do=!!((zo=m.media)!=null&&zo.remote)&&(pe||P),xo=!!m.documentElement&&(Ee||P),Wr=qt||Pe||ko||Ro||Do||xo,rt=u.length===0&&L===1&&d,wo=!!f.media&&(J||rt),Co=!!((Zo=f.media)!=null&&Zo.textTracks)&&(Gr||rt),Po=!!((Xo=f.media)!=null&&Xo.videoRenditions)&&(Wt||rt),Oo=!!((Jo=f.media)!=null&&Jo.audioTracks)&&(it||rt),Uo=!!((en=f.media)!=null&&en.remote)&&(pe||rt),No=!!f.documentElement&&(Ee||rt),Ho=wo||Co||Po||Oo||Uo||No;if(!(Wr||Ho)){Object.entries(f).forEach(([N,Yt])=>{m[N]=Yt}),_(),f=void 0;return}Object.entries(r).forEach(([N,{get:Yt,mediaEvents:ea=[],textTracksEvents:ta=[],videoRenditionsEvents:ia=[],audioTracksEvents:ra=[],remoteEvents:oa=[],rootEvents:na=[],stateOwnersUpdateHandlers:sa=[]}])=>{v[N]||(v[N]={});let j=$=>{let V=Yt(m,$);A({[N]:V})},G;G=v[N].mediaEvents,ea.forEach($=>{G&&qt&&(m.media.removeEventListener($,G),v[N].mediaEvents=void 0),wo&&(f.media.addEventListener($,j),v[N].mediaEvents=j)}),G=v[N].textTracksEvents,ta.forEach($=>{var V,ee;G&&Pe&&((V=m.media.textTracks)==null||V.removeEventListener($,G),v[N].textTracksEvents=void 0),Co&&((ee=f.media.textTracks)==null||ee.addEventListener($,j),v[N].textTracksEvents=j)}),G=v[N].videoRenditionsEvents,ia.forEach($=>{var V,ee;G&&ko&&((V=m.media.videoRenditions)==null||V.removeEventListener($,G),v[N].videoRenditionsEvents=void 0),Po&&((ee=f.media.videoRenditions)==null||ee.addEventListener($,j),v[N].videoRenditionsEvents=j)}),G=v[N].audioTracksEvents,ra.forEach($=>{var V,ee;G&&Ro&&((V=m.media.audioTracks)==null||V.removeEventListener($,G),v[N].audioTracksEvents=void 0),Oo&&((ee=f.media.audioTracks)==null||ee.addEventListener($,j),v[N].audioTracksEvents=j)}),G=v[N].remoteEvents,oa.forEach($=>{var V,ee;G&&Do&&((V=m.media.remote)==null||V.removeEventListener($,G),v[N].remoteEvents=void 0),Uo&&((ee=f.media.remote)==null||ee.addEventListener($,j),v[N].remoteEvents=j)}),G=v[N].rootEvents,na.forEach($=>{G&&xo&&(m.documentElement.removeEventListener($,G),v[N].rootEvents=void 0),No&&(f.documentElement.addEventListener($,j),v[N].rootEvents=j)});let ji=v[N].stateOwnersUpdateHandlers;if(ji&&Wr&&(Array.isArray(ji)?ji:[ji]).forEach(V=>{typeof V=="function"&&V()}),Ho){let $=sa.map(V=>V(j,f)).filter(V=>typeof V=="function");v[N].stateOwnersUpdateHandlers=$.length===1?$[0]:$}else Wr&&(v[N].stateOwnersUpdateHandlers=void 0)}),Object.entries(f).forEach(([N,Yt])=>{m[N]=Yt}),_(),f=void 0};return x({media:i,fullscreenElement:t,documentElement:e,options:n}),{dispatch(M){let{type:L,detail:C}=M;if(o[L]&&b.mediaErrorCode==null){A(o[L](r,m,M));return}L==="mediaelementchangerequest"?x({media:C}):L==="fullscreenelementchangerequest"?x({fullscreenElement:C}):L==="documentelementchangerequest"?x({documentElement:C}):L==="optionschangerequest"&&(Object.entries(C!=null?C:{}).forEach(([P,J])=>{m.options[P]=J}),_())},getState(){return b},subscribe(M){return x({},u.length+1),u.push(M),M(b),()=>{let L=u.indexOf(M);L>=0&&(x({},u.length-1),u.splice(L,1))}}}};var Hn=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Fn=10,$n=.025,Bn=.25,qa=.25,Ya=2,p={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"},fe,mt,w,Le,ht,te,ni,pt,si,mo,ke,ai,ho,br,Gn,gr=class extends Ie{constructor(){super();c(this,si);c(this,ai);c(this,br);this.mediaStateReceivers=[];this.associatedElementSubscriptions=new Map;c(this,fe,new lt(this,p.HOTKEYS));c(this,mt,void 0);c(this,w,void 0);c(this,Le,null);c(this,ht,void 0);c(this,te,void 0);c(this,ni,e=>{var r;(r=s(this,w))==null||r.dispatch(e)});c(this,pt,void 0);c(this,ke,e=>{let{key:r,shiftKey:o}=e;if(!(o&&(r==="/"||r==="?")||Hn.includes(r))){this.removeEventListener("keyup",s(this,ke));return}this.keyboardShortcutHandler(e)});this.associateElement(this);let e={};h(this,ht,r=>{Object.entries(r).forEach(([o,n])=>{if(o in e&&e[o]===n)return;this.propagateMediaState(o,n);let d=o.toLowerCase(),u=new l.CustomEvent(jr[d],{composed:!0,detail:n});this.dispatchEvent(u)}),e=r}),this.hasAttribute(p.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(p.NO_HOTKEYS,p.HOTKEYS,p.DEFAULT_STREAM_TYPE,p.DEFAULT_SUBTITLES,p.DEFAULT_DURATION,p.NO_MUTED_PREF,p.NO_VOLUME_PREF,p.LANG,p.LOOP)}get mediaStore(){return s(this,w)}set mediaStore(e){var r,o;if(s(this,w)&&((r=s(this,te))==null||r.call(this),h(this,te,void 0)),h(this,w,e),!s(this,w)&&!this.hasAttribute(p.NO_DEFAULT_STORE)){T(this,si,mo).call(this);return}h(this,te,(o=s(this,w))==null?void 0:o.subscribe(s(this,ht)))}get fullscreenElement(){var e;return(e=s(this,mt))!=null?e:this}set fullscreenElement(e){var r;this.hasAttribute(p.FULLSCREEN_ELEMENT)&&this.removeAttribute(p.FULLSCREEN_ELEMENT),h(this,mt,e),(r=s(this,w))==null||r.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return y(this,p.DEFAULT_SUBTITLES)}set defaultSubtitles(e){S(this,p.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return R(this,p.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){D(this,p.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return O(this,p.DEFAULT_DURATION)}set defaultDuration(e){H(this,p.DEFAULT_DURATION,e)}get noHotkeys(){return y(this,p.NO_HOTKEYS)}set noHotkeys(e){S(this,p.NO_HOTKEYS,e)}get keysUsed(){return R(this,p.KEYS_USED)}set keysUsed(e){D(this,p.KEYS_USED,e)}get liveEdgeOffset(){return O(this,p.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){H(this,p.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return y(this,p.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){S(this,p.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return y(this,p.NO_VOLUME_PREF)}set noVolumePref(e){S(this,p.NO_VOLUME_PREF,e)}get noMutedPref(){return y(this,p.NO_MUTED_PREF)}set noMutedPref(e){S(this,p.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return y(this,p.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){S(this,p.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return y(this,p.NO_DEFAULT_STORE)}set noDefaultStore(e){S(this,p.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,r,o){var n,d,u,m,b,A,_,v,f,x,M,L;if(super.attributeChangedCallback(e,r,o),e===p.NO_HOTKEYS)o!==r&&o===""?(this.hasAttribute(p.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):o!==r&&o===null&&this.enableHotkeys();else if(e===p.HOTKEYS)s(this,fe).value=o;else if(e===p.DEFAULT_SUBTITLES&&o!==r)(n=s(this,w))==null||n.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(p.DEFAULT_SUBTITLES)}});else if(e===p.DEFAULT_STREAM_TYPE)(u=s(this,w))==null||u.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(d=this.getAttribute(p.DEFAULT_STREAM_TYPE))!=null?d:void 0}});else if(e===p.LIVE_EDGE_OFFSET)(m=s(this,w))==null||m.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(p.LIVE_EDGE_OFFSET)?+this.getAttribute(p.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(p.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(p.LIVE_EDGE_OFFSET)}});else if(e===p.SEEK_TO_LIVE_OFFSET)(b=s(this,w))==null||b.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(p.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(p.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===p.NO_AUTO_SEEK_TO_LIVE)(A=s(this,w))==null||A.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(p.NO_AUTO_SEEK_TO_LIVE)}});else if(e===p.FULLSCREEN_ELEMENT){let C=o?(_=this.getRootNode())==null?void 0:_.getElementById(o):void 0;h(this,mt,C),(v=s(this,w))==null||v.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===p.LANG&&o!==r?(dn(o),(f=s(this,w))==null||f.dispatch({type:"optionschangerequest",detail:{mediaLang:o}})):e===p.LOOP&&o!==r?(x=s(this,w))==null||x.dispatch({type:E.MEDIA_LOOP_REQUEST,detail:o!=null}):e===p.NO_VOLUME_PREF&&o!==r?(M=s(this,w))==null||M.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(p.NO_VOLUME_PREF)}}):e===p.NO_MUTED_PREF&&o!==r&&((L=s(this,w))==null||L.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(p.NO_MUTED_PREF)}}))}connectedCallback(){var e,r;!s(this,w)&&!this.hasAttribute(p.NO_DEFAULT_STORE)&&T(this,si,mo).call(this),(e=s(this,w))==null||e.dispatch({type:"documentelementchangerequest",detail:K}),super.connectedCallback(),s(this,w)&&!s(this,te)&&h(this,te,(r=s(this,w))==null?void 0:r.subscribe(s(this,ht))),s(this,pt)!==void 0&&s(this,w)&&this.media&&setTimeout(()=>{var o,n,d;(n=(o=this.media)==null?void 0:o.textTracks)!=null&&n.length&&((d=s(this,w))==null||d.dispatch({type:E.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:s(this,pt)}))},0),this.hasAttribute(p.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,r,o,n,d;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),s(this,w)){let u=s(this,w).getState();h(this,pt,!!((r=u.mediaSubtitlesShowing)!=null&&r.length)),(o=s(this,w))==null||o.dispatch({type:"documentelementchangerequest",detail:void 0}),(n=s(this,w))==null||n.dispatch({type:E.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}s(this,te)&&((d=s(this,te))==null||d.call(this),h(this,te,void 0)),this.unassociateElement(this)}mediaSetCallback(e){var r;super.mediaSetCallback(e),(r=s(this,w))==null||r.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var r;super.mediaUnsetCallback(e),(r=s(this,w))==null||r.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,r){Kn(this.mediaStateReceivers,e,r)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:r}=this;if(r.has(e))return;let o=this.registerMediaStateReceiver.bind(this),n=this.unregisterMediaStateReceiver.bind(this),d=Ja(e,o,n);Object.values(E).forEach(u=>{e.addEventListener(u,s(this,ni))}),r.set(e,d)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:r}=this;if(!r.has(e))return;r.get(e)(),r.delete(e),Object.values(E).forEach(n=>{e.removeEventListener(n,s(this,ni))})}registerMediaStateReceiver(e){if(!e)return;let r=this.mediaStateReceivers;r.indexOf(e)>-1||(r.push(e),s(this,w)&&Object.entries(s(this,w).getState()).forEach(([n,d])=>{Kn([e],n,d)}))}unregisterMediaStateReceiver(e){let r=this.mediaStateReceivers,o=r.indexOf(e);o<0||r.splice(o,1)}enableHotkeys(){this.addEventListener("keydown",T(this,ai,ho))}disableHotkeys(){this.removeEventListener("keydown",T(this,ai,ho)),this.removeEventListener("keyup",s(this,ke))}get hotkeys(){return R(this,p.HOTKEYS)}set hotkeys(e){D(this,p.HOTKEYS,e)}keyboardShortcutHandler(e){var b,A,_,v,f,x,M,L,C;let r=e.target;if(((_=(A=(b=r.getAttribute(p.KEYS_USED))==null?void 0:b.split(" "))!=null?A:r==null?void 0:r.keysUsed)!=null?_:[]).map(P=>P==="Space"?" ":P).filter(Boolean).includes(e.key))return;let n,d,u;if(!(s(this,fe).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&s(this,fe).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&s(this,fe).contains("noshift+/")))switch(e.key){case" ":case"k":n=s(this,w).getState().mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new l.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"m":n=this.mediaStore.getState().mediaVolumeLevel==="off"?E.MEDIA_UNMUTE_REQUEST:E.MEDIA_MUTE_REQUEST,this.dispatchEvent(new l.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"f":n=this.mediaStore.getState().mediaIsFullscreen?E.MEDIA_EXIT_FULLSCREEN_REQUEST:E.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new l.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new l.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let P=this.hasAttribute(p.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(p.KEYBOARD_BACKWARD_SEEK_OFFSET):Fn;d=Math.max(((v=this.mediaStore.getState().mediaCurrentTime)!=null?v:0)-P,0),u=new l.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(u);break}case"ArrowRight":case"l":{let P=this.hasAttribute(p.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(p.KEYBOARD_FORWARD_SEEK_OFFSET):Fn;d=Math.max(((f=this.mediaStore.getState().mediaCurrentTime)!=null?f:0)+P,0),u=new l.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(u);break}case"ArrowUp":{let P=this.hasAttribute(p.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(p.KEYBOARD_UP_VOLUME_STEP):$n;d=Math.min(((x=this.mediaStore.getState().mediaVolume)!=null?x:1)+P,1),u=new l.CustomEvent(E.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(u);break}case"ArrowDown":{let P=this.hasAttribute(p.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(p.KEYBOARD_DOWN_VOLUME_STEP):$n;d=Math.max(((M=this.mediaStore.getState().mediaVolume)!=null?M:1)-P,0),u=new l.CustomEvent(E.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(u);break}case"<":{let P=(L=this.mediaStore.getState().mediaPlaybackRate)!=null?L:1;d=Math.max(P-Bn,qa).toFixed(2),u=new l.CustomEvent(E.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(u);break}case">":{let P=(C=this.mediaStore.getState().mediaPlaybackRate)!=null?C:1;d=Math.min(P+Bn,Ya).toFixed(2),u=new l.CustomEvent(E.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:d}),this.dispatchEvent(u);break}case"/":case"?":{e.shiftKey&&T(this,br,Gn).call(this);break}case"p":{n=this.mediaStore.getState().mediaIsPip?E.MEDIA_EXIT_PIP_REQUEST:E.MEDIA_ENTER_PIP_REQUEST,u=new l.CustomEvent(n,{composed:!0,bubbles:!0}),this.dispatchEvent(u);break}default:break}}};fe=new WeakMap,mt=new WeakMap,w=new WeakMap,Le=new WeakMap,ht=new WeakMap,te=new WeakMap,ni=new WeakMap,pt=new WeakMap,si=new WeakSet,mo=function(){var e;this.mediaStore=Nn({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(p.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(p.DEFAULT_DURATION)?+this.getAttribute(p.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(p.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(p.LIVE_EDGE_OFFSET)?+this.getAttribute(p.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(p.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(p.SEEK_TO_LIVE_OFFSET):this.hasAttribute(p.LIVE_EDGE_OFFSET)?+this.getAttribute(p.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(p.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(p.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(p.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(p.NO_SUBTITLES_LANG_PREF)}})},ke=new WeakMap,ai=new WeakSet,ho=function(e){var A;let{metaKey:r,altKey:o,key:n,shiftKey:d}=e,u=d&&(n==="/"||n==="?");if(u&&((A=s(this,Le))!=null&&A.open)){this.removeEventListener("keyup",s(this,ke));return}if(r||o||!u&&!Hn.includes(n)){this.removeEventListener("keyup",s(this,ke));return}let m=e.target,b=m instanceof HTMLElement&&(m.tagName.toLowerCase()==="media-volume-range"||m.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n)&&!(s(this,fe).contains(`no${n.toLowerCase()}`)||n===" "&&s(this,fe).contains("nospace"))&&!b&&e.preventDefault(),this.addEventListener("keyup",s(this,ke),{once:!0})},br=new WeakSet,Gn=function(){s(this,Le)||(h(this,Le,K.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(s(this,Le))),s(this,Le).open=!0};var Qa=Object.values(a),ja=Object.values(zi),Wn=i=>{var r,o,n,d;let{observedAttributes:t}=i.constructor;!t&&((r=i.nodeName)!=null&&r.includes("-"))&&(l.customElements.upgrade(i),{observedAttributes:t}=i.constructor);let e=(d=(n=(o=i==null?void 0:i.getAttribute)==null?void 0:o.call(i,k.MEDIA_CHROME_ATTRIBUTES))==null?void 0:n.split)==null?void 0:d.call(n,/\s+/);return Array.isArray(t||e)?(t||e).filter(u=>Qa.includes(u)):[]},za=i=>{var t,e;return(t=i.nodeName)!=null&&t.includes("-")&&l.customElements.get((e=i.nodeName)==null?void 0:e.toLowerCase())&&!(i instanceof l.customElements.get(i.nodeName.toLowerCase()))&&l.customElements.upgrade(i),ja.some(r=>r in i)},po=i=>za(i)||!!Wn(i).length,Vn=i=>{var t;return(t=i==null?void 0:i.join)==null?void 0:t.call(i,":")},co={[a.MEDIA_SUBTITLES_LIST]:ri,[a.MEDIA_SUBTITLES_SHOWING]:ri,[a.MEDIA_SEEKABLE]:Vn,[a.MEDIA_BUFFERED]:i=>i==null?void 0:i.map(Vn).join(" "),[a.MEDIA_PREVIEW_COORDS]:i=>i==null?void 0:i.join(" "),[a.MEDIA_RENDITION_LIST]:on,[a.MEDIA_AUDIO_TRACK_LIST]:nn},Za=async(i,t,e)=>{var o,n;if(i.isConnected||await Xi(0),typeof e=="boolean"||e==null)return S(i,t,e);if(typeof e=="number")return H(i,t,e);if(typeof e=="string")return D(i,t,e);if(Array.isArray(e)&&!e.length)return i.removeAttribute(t);let r=(n=(o=co[t])==null?void 0:o.call(co,e))!=null?n:e;return i.setAttribute(t,r)},Xa=i=>{var t;return!!((t=i.closest)!=null&&t.call(i,'*[slot="media"]'))},Ke=(i,t)=>{if(Xa(i))return;let e=(o,n)=>{var b,A;po(o)&&n(o);let{children:d=[]}=o!=null?o:{},u=(A=(b=o==null?void 0:o.shadowRoot)==null?void 0:b.children)!=null?A:[];[...d,...u].forEach(_=>Ke(_,n))},r=i==null?void 0:i.nodeName.toLowerCase();if(r.includes("-")&&!po(i)){l.customElements.whenDefined(r).then(()=>{e(i,t)});return}e(i,t)},Kn=(i,t,e)=>{i.forEach(r=>{if(t in r){r[t]=e;return}let o=Wn(r),n=t.toLowerCase();o.includes(n)&&Za(r,n,e)})},Ja=(i,t,e)=>{Ke(i,t);let r=A=>{var v;let _=(v=A==null?void 0:A.composedPath()[0])!=null?v:A.target;t(_)},o=A=>{var v;let _=(v=A==null?void 0:A.composedPath()[0])!=null?v:A.target;e(_)};i.addEventListener(E.REGISTER_MEDIA_STATE_RECEIVER,r),i.addEventListener(E.UNREGISTER_MEDIA_STATE_RECEIVER,o);let n=A=>{A.forEach(_=>{let{addedNodes:v=[],removedNodes:f=[],type:x,target:M,attributeName:L}=_;x==="childList"?(Array.prototype.forEach.call(v,C=>Ke(C,t)),Array.prototype.forEach.call(f,C=>Ke(C,e))):x==="attributes"&&L===k.MEDIA_CHROME_ATTRIBUTES&&(po(M)?t(M):e(M))})},d=[],u=A=>{let _=A.target;_.name!=="media"&&(d.forEach(v=>Ke(v,e)),d=[..._.assignedElements({flatten:!0})],d.forEach(v=>Ke(v,t)))};i.addEventListener("slotchange",u);let m=new MutationObserver(n);return m.observe(i,{childList:!0,attributes:!0,subtree:!0}),()=>{Ke(i,e),i.removeEventListener("slotchange",u),m.disconnect(),i.removeEventListener(E.REGISTER_MEDIA_STATE_RECEIVER,r),i.removeEventListener(E.UNREGISTER_MEDIA_STATE_RECEIVER,o)}};l.customElements.get("media-controller")||l.customElements.define("media-controller",gr);var qn=gr;var Et={PLACEMENT:"placement",BOUNDS:"bounds"};function ed(i){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var gt=class extends l.HTMLElement{constructor(){super();this.updateXOffset=()=>{var C;if(!ar(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let e=this.placement;if(e==="left"||e==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}let r=getComputedStyle(this),o=(C=Se(this,"#"+this.bounds))!=null?C:gn(this);if(!o)return;let{x:n,width:d}=o.getBoundingClientRect(),{x:u,width:m}=this.getBoundingClientRect(),b=u+m,A=n+d,_=r.getPropertyValue("--media-tooltip-offset-x"),v=_?parseFloat(_.replace("px","")):0,f=r.getPropertyValue("--media-tooltip-container-margin"),x=f?parseFloat(f.replace("px","")):0,M=u-n+v-x,L=b-A+v+x;if(M<0){this.style.setProperty("--media-tooltip-offset-x",`${M}px`);return}if(L>0){this.style.setProperty("--media-tooltip-offset-x",`${L}px`);return}this.style.removeProperty("--media-tooltip-offset-x")};if(!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Et.PLACEMENT,Et.BOUNDS]}get placement(){return R(this,Et.PLACEMENT)}set placement(e){D(this,Et.PLACEMENT,e)}get bounds(){return R(this,Et.BOUNDS)}set bounds(e){D(this,Et.BOUNDS,e)}};gt.shadowRootOptions={mode:"open"},gt.getTemplateHTML=ed;l.customElements.get("media-tooltip")||l.customElements.define("media-tooltip",gt);var di=gt;var Re={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function td(i,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(i,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${di.shadowRootOptions.mode}">
          ${di.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(i)}
        </slot>
      </media-tooltip>
    </slot>
  `}function id(i,t){return`
    <slot></slot>
  `}function rd(){return""}var ie,Ge,ve,We,li,fr,Yn,U=class extends l.HTMLElement{constructor(){super();c(this,fr);c(this,ie,void 0);this.preventClick=!1;this.tooltipEl=null;c(this,Ge,e=>{this.preventClick||this.handleClick(e),setTimeout(s(this,ve),0)});c(this,ve,()=>{var e,r;(r=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||r.call(e)});c(this,We,e=>{let{key:r}=e;if(!this.keysUsed.includes(r)){this.removeEventListener("keyup",s(this,We));return}this.preventClick||this.handleClick(e)});c(this,li,e=>{let{metaKey:r,altKey:o,key:n}=e;if(r||o||!this.keysUsed.includes(n)){this.removeEventListener("keyup",s(this,We));return}this.addEventListener("keyup",s(this,We),{once:!0})});if(!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes),r=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(r):this.shadowRoot.innerHTML=r}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Re.TOOLTIP_PLACEMENT,k.MEDIA_CONTROLLER,a.MEDIA_LANG]}enable(){this.addEventListener("click",s(this,Ge)),this.addEventListener("keydown",s(this,li)),this.tabIndex=0}disable(){this.removeEventListener("click",s(this,Ge)),this.removeEventListener("keydown",s(this,li)),this.removeEventListener("keyup",s(this,We)),this.tabIndex=-1}attributeChangedCallback(e,r,o){var n,d,u,m,b;e===k.MEDIA_CONTROLLER?(r&&((d=(n=s(this,ie))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,ie,null)),o&&this.isConnected&&(h(this,ie,(u=this.getRootNode())==null?void 0:u.getElementById(o)),(b=(m=s(this,ie))==null?void 0:m.associateElement)==null||b.call(m,this))):e==="disabled"&&o!==r?o==null?this.enable():this.disable():e===Re.TOOLTIP_PLACEMENT&&this.tooltipEl&&o!==r?this.tooltipEl.placement=o:e===a.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),s(this,ve).call(this)}connectedCallback(){var o,n,d;let{style:e}=F(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(k.MEDIA_CONTROLLER);r&&(h(this,ie,(o=this.getRootNode())==null?void 0:o.getElementById(r)),(d=(n=s(this,ie))==null?void 0:n.associateElement)==null||d.call(n,this)),l.customElements.whenDefined("media-tooltip").then(()=>T(this,fr,Yn).call(this))}disconnectedCallback(){var e,r;this.disable(),(r=(e=s(this,ie))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,ie,null),this.removeEventListener("mouseenter",s(this,ve)),this.removeEventListener("focus",s(this,ve)),this.removeEventListener("click",s(this,Ge))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return R(this,Re.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){D(this,Re.TOOLTIP_PLACEMENT,e)}get mediaController(){return R(this,k.MEDIA_CONTROLLER)}set mediaController(e){D(this,k.MEDIA_CONTROLLER,e)}get disabled(){return y(this,Re.DISABLED)}set disabled(e){S(this,Re.DISABLED,e)}get noTooltip(){return y(this,Re.NO_TOOLTIP)}set noTooltip(e){S(this,Re.NO_TOOLTIP,e)}handleClick(e){}};ie=new WeakMap,Ge=new WeakMap,ve=new WeakMap,We=new WeakMap,li=new WeakMap,fr=new WeakSet,Yn=function(){this.addEventListener("mouseenter",s(this,ve)),this.addEventListener("focus",s(this,ve)),this.addEventListener("click",s(this,Ge));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},U.shadowRootOptions={mode:"open"},U.getTemplateHTML=td,U.getSlotTemplateHTML=id,U.getTooltipContentHTML=rd;l.customElements.get("media-chrome-button")||l.customElements.define("media-chrome-button",U);var Qn=U;var jn=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function od(i){return`
    <style>
      :host([${a.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${a.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${a.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${jn}</slot>
      <slot name="exit">${jn}</slot>
    </slot>
  `}function nd(){return`
    <slot name="tooltip-enter">${g("start airplay")}</slot>
    <slot name="tooltip-exit">${g("stop airplay")}</slot>
  `}var zn=i=>{let t=i.mediaIsAirplaying?g("stop airplay"):g("start airplay");i.setAttribute("aria-label",t)},bt=class extends U{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_AIRPLAYING,a.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),zn(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t===a.MEDIA_IS_AIRPLAYING&&zn(this)}get mediaIsAirplaying(){return y(this,a.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(t){S(this,a.MEDIA_IS_AIRPLAYING,t)}get mediaAirplayUnavailable(){return R(this,a.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(t){D(this,a.MEDIA_AIRPLAY_UNAVAILABLE,t)}handleClick(){let t=new l.CustomEvent(E.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(t)}};bt.getSlotTemplateHTML=od,bt.getTooltipContentHTML=nd;l.customElements.get("media-airplay-button")||l.customElements.define("media-airplay-button",bt);var Zn=bt;var sd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ad=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function dd(i){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${sd}</slot>
      <slot name="off">${ad}</slot>
    </slot>
  `}function ld(){return`
    <slot name="tooltip-enable">${g("Enable captions")}</slot>
    <slot name="tooltip-disable">${g("Disable captions")}</slot>
  `}var Xn=i=>{i.setAttribute("aria-checked",In(i).toString())},ft=class extends U{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_SUBTITLES_LIST,a.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",g("closed captions")),Xn(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t===a.MEDIA_SUBTITLES_SHOWING&&Xn(this)}get mediaSubtitlesList(){return Jn(this,a.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){es(this,a.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Jn(this,a.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){es(this,a.MEDIA_SUBTITLES_SHOWING,t)}handleClick(){this.dispatchEvent(new l.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};ft.getSlotTemplateHTML=dd,ft.getTooltipContentHTML=ld;var Jn=(i,t)=>{let e=i.getAttribute(t);return e?oo(e):[]},es=(i,t,e)=>{if(!(e!=null&&e.length)){i.removeAttribute(t);return}let r=ri(e);i.getAttribute(t)!==r&&i.setAttribute(t,r)};l.customElements.get("media-captions-button")||l.customElements.define("media-captions-button",ft);var ts=ft;var ud='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',cd='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function md(i){return`
    <style>
      :host([${a.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${a.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${a.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ud}</slot>
      <slot name="exit">${cd}</slot>
    </slot>
  `}function hd(){return`
    <slot name="tooltip-enter">${g("Start casting")}</slot>
    <slot name="tooltip-exit">${g("Stop casting")}</slot>
  `}var is=i=>{let t=i.mediaIsCasting?g("stop casting"):g("start casting");i.setAttribute("aria-label",t)},vt=class extends U{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_CASTING,a.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),is(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t===a.MEDIA_IS_CASTING&&is(this)}get mediaIsCasting(){return y(this,a.MEDIA_IS_CASTING)}set mediaIsCasting(t){S(this,a.MEDIA_IS_CASTING,t)}get mediaCastUnavailable(){return R(this,a.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(t){D(this,a.MEDIA_CAST_UNAVAILABLE,t)}handleClick(){let t=this.mediaIsCasting?E.MEDIA_EXIT_CAST_REQUEST:E.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new l.CustomEvent(t,{composed:!0,bubbles:!0}))}};vt.getSlotTemplateHTML=md,vt.getTooltipContentHTML=hd;l.customElements.get("media-cast-button")||l.customElements.define("media-cast-button",vt);var rs=vt;function pd(i){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(i)}
  `}function Ed(i){return`
    <slot id="content"></slot>
  `}var ui={OPEN:"open",ANCHOR:"anchor"},ci,Tt,De,mi,Eo,vr,os,Tr,ns,Ar,ss,yr,as,Sr,ds,re=class extends l.HTMLElement{constructor(){super();c(this,mi);c(this,vr);c(this,Tr);c(this,Ar);c(this,yr);c(this,Sr);c(this,ci,!1);c(this,Tt,null);c(this,De,null)}static get observedAttributes(){return[ui.OPEN,ui.ANCHOR]}get open(){return y(this,ui.OPEN)}set open(e){S(this,ui.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":T(this,Ar,ss).call(this,e);break;case"focusout":T(this,yr,as).call(this,e);break;case"keydown":T(this,Sr,ds).call(this,e);break}}connectedCallback(){T(this,mi,Eo).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,r,o){T(this,mi,Eo).call(this),e===ui.OPEN&&o!==r&&(this.open?T(this,vr,os).call(this):T(this,Tr,ns).call(this))}focus(){h(this,Tt,to());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),r=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||r)return;let o=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');o==null||o.focus()}get keysUsed(){return["Escape","Tab"]}};ci=new WeakMap,Tt=new WeakMap,De=new WeakMap,mi=new WeakSet,Eo=function(){if(!s(this,ci)&&(h(this,ci,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:r}=F(this.shadowRoot,":host");r.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},vr=new WeakSet,os=function(){var e;(e=s(this,De))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},Tr=new WeakSet,ns=function(){var e;(e=s(this,De))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},Ar=new WeakSet,ss=function(e){h(this,De,e.relatedTarget),ce(this,e.relatedTarget)||(this.open=!this.open)},yr=new WeakSet,as=function(e){var r;ce(this,e.relatedTarget)||((r=s(this,Tt))==null||r.focus(),s(this,De)&&s(this,De)!==e.relatedTarget&&this.open&&(this.open=!1))},Sr=new WeakSet,ds=function(e){var u,m,b,A,_;let{key:r,ctrlKey:o,altKey:n,metaKey:d}=e;o||n||d||this.keysUsed.includes(r)&&(e.preventDefault(),e.stopPropagation(),r==="Tab"?(e.shiftKey?(m=(u=this.previousElementSibling)==null?void 0:u.focus)==null||m.call(u):(A=(b=this.nextElementSibling)==null?void 0:b.focus)==null||A.call(b),this.blur()):r==="Escape"&&((_=s(this,Tt))==null||_.focus(),this.open=!1))},re.shadowRootOptions={mode:"open"},re.getTemplateHTML=pd,re.getSlotTemplateHTML=Ed;l.customElements.get("media-chrome-dialog")||l.customElements.define("media-chrome-dialog",re);var ls=re;function gd(i){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(i)}
    </div>
    <div id="rightgap"></div>
  `}function bd(i){return""}var oe,hi,pi,Ei,X,gi,bi,fi,vi,Ir,us,Ti,go,Ai,bo,yi,fo,Mr,cs,_r,ms,Lr,hs,kr,ps,ne=class extends l.HTMLElement{constructor(){super();c(this,Ir);c(this,Ti);c(this,Ai);c(this,yi);c(this,Mr);c(this,_r);c(this,Lr);c(this,kr);c(this,oe,void 0);c(this,hi,void 0);c(this,pi,void 0);c(this,Ei,void 0);c(this,X,{});c(this,gi,[]);c(this,bi,()=>{if(this.range.matches(":focus-visible")){let{style:e}=F(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}});c(this,fi,()=>{let{style:e}=F(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")});c(this,vi,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)});if(!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes),r=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(r):this.shadowRoot.innerHTML=r}this.container=this.shadowRoot.querySelector("#container"),h(this,pi,this.shadowRoot.querySelector("#startpoint")),h(this,Ei,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",k.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,o){var n,d,u,m,b;e===k.MEDIA_CONTROLLER?(r&&((d=(n=s(this,oe))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,oe,null)),o&&this.isConnected&&(h(this,oe,(u=this.getRootNode())==null?void 0:u.getElementById(o)),(b=(m=s(this,oe))==null?void 0:m.associateElement)==null||b.call(m,this))):(e==="disabled"||e==="aria-disabled"&&r!==o)&&(o==null?(this.range.removeAttribute(e),T(this,Ti,go).call(this)):(this.range.setAttribute(e,o),T(this,Ai,bo).call(this)))}connectedCallback(){var o,n,d;let{style:e}=F(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),s(this,X).pointer=F(this.shadowRoot,"#pointer"),s(this,X).progress=F(this.shadowRoot,"#progress"),s(this,X).thumb=F(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),s(this,X).activeSegment=F(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(k.MEDIA_CONTROLLER);r&&(h(this,oe,(o=this.getRootNode())==null?void 0:o.getElementById(r)),(d=(n=s(this,oe))==null?void 0:n.associateElement)==null||d.call(n,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",s(this,bi)),this.shadowRoot.addEventListener("focusout",s(this,fi)),T(this,Ti,go).call(this),rr(this.container,s(this,vi))}disconnectedCallback(){var e,r;T(this,Ai,bo).call(this),(r=(e=s(this,oe))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,oe,null),this.shadowRoot.removeEventListener("focusin",s(this,bi)),this.shadowRoot.removeEventListener("focusout",s(this,fi)),or(this.container,s(this,vi))}updatePointerBar(e){var r;(r=s(this,X).pointer)==null||r.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var r,o;let e=this.range.valueAsNumber*100;(r=s(this,X).progress)==null||r.style.setProperty("width",`${e}%`),(o=s(this,X).thumb)==null||o.style.setProperty("left",`${e}%`)}updateSegments(e){let r=this.shadowRoot.querySelector("#segments-clipping");if(r.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;let o=[...new Set([+this.range.min,...e.flatMap(d=>[d.start,d.end]),+this.range.max])];h(this,gi,[...o]);let n=o.pop();for(let[d,u]of o.entries()){let[m,b]=[d===0,d===o.length-1],A=m?"calc(var(--segments-gap) / -1)":`${u*100}%`,v=`calc(${((b?n:o[d+1])-u)*100}%${m||b?"":" - var(--segments-gap)"})`,f=K.createElementNS("http://www.w3.org/2000/svg","rect"),x=io(this.shadowRoot,`#segments-clipping rect:nth-child(${d+1})`);x.style.setProperty("x",A),x.style.setProperty("width",v),r.append(f)}}getPointerRatio(e){return bn(e.clientX,e.clientY,s(this,pi).getBoundingClientRect(),s(this,Ei).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":T(this,kr,ps).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":T(this,Mr,cs).call(this,e);break;case"pointerdown":T(this,yi,fo).call(this,e);break;case"pointerup":T(this,_r,ms).call(this);break;case"pointerleave":T(this,Lr,hs).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};oe=new WeakMap,hi=new WeakMap,pi=new WeakMap,Ei=new WeakMap,X=new WeakMap,gi=new WeakMap,bi=new WeakMap,fi=new WeakMap,vi=new WeakMap,Ir=new WeakSet,us=function(e){let r=s(this,X).activeSegment;if(!r)return;let o=this.getPointerRatio(e),d=`#segments-clipping rect:nth-child(${s(this,gi).findIndex((u,m,b)=>{let A=b[m+1];return A!=null&&o>=u&&o<=A})+1})`;(r.selectorText!=d||!r.style.transform)&&(r.selectorText=d,r.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},Ti=new WeakSet,go=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},Ai=new WeakSet,bo=function(){var e,r;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(e=l.window)==null||e.removeEventListener("pointerup",this),(r=l.window)==null||r.removeEventListener("pointermove",this)},yi=new WeakSet,fo=function(e){var r;h(this,hi,e.composedPath().includes(this.range)),(r=l.window)==null||r.addEventListener("pointerup",this,{once:!0})},Mr=new WeakSet,cs=function(e){var r;e.pointerType!=="mouse"&&T(this,yi,fo).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),(r=l.window)==null||r.addEventListener("pointermove",this)},_r=new WeakSet,ms=function(){var e;(e=l.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},Lr=new WeakSet,hs=function(){var e,r;this.removeEventListener("pointerleave",this),(e=l.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(r=s(this,X).activeSegment)==null||r.style.removeProperty("transform")},kr=new WeakSet,ps=function(e){e.pointerType==="pen"&&e.buttons===0||(this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),T(this,Ir,us).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!s(this,hi))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},ne.shadowRootOptions={mode:"open"},ne.getTemplateHTML=gd,ne.getContainerTemplateHTML=bd;l.customElements.get("media-chrome-range")||l.customElements.define("media-chrome-range",ne);var Es=ne;function fd(i){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var se,At=class extends l.HTMLElement{constructor(){super();c(this,se,void 0);if(!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,o){var n,d,u,m,b;e===k.MEDIA_CONTROLLER&&(r&&((d=(n=s(this,se))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,se,null)),o&&this.isConnected&&(h(this,se,(u=this.getRootNode())==null?void 0:u.getElementById(o)),(b=(m=s(this,se))==null?void 0:m.associateElement)==null||b.call(m,this)))}connectedCallback(){var r,o,n;let e=this.getAttribute(k.MEDIA_CONTROLLER);e&&(h(this,se,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(o=s(this,se))==null?void 0:o.associateElement)==null||n.call(o,this))}disconnectedCallback(){var e,r;(r=(e=s(this,se))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,se,null)}};se=new WeakMap,At.shadowRootOptions={mode:"open"},At.getTemplateHTML=fd;l.customElements.get("media-control-bar")||l.customElements.define("media-control-bar",At);var gs=At;function vd(i,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(i,t)}
  `}function Td(i,t){return`
    <slot></slot>
  `}var ae,Q=class extends l.HTMLElement{constructor(){super();c(this,ae,void 0);if(!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,o){var n,d,u,m,b;e===k.MEDIA_CONTROLLER&&(r&&((d=(n=s(this,ae))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,ae,null)),o&&this.isConnected&&(h(this,ae,(u=this.getRootNode())==null?void 0:u.getElementById(o)),(b=(m=s(this,ae))==null?void 0:m.associateElement)==null||b.call(m,this)))}connectedCallback(){var o,n,d;let{style:e}=F(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(k.MEDIA_CONTROLLER);r&&(h(this,ae,(o=this.getRootNode())==null?void 0:o.getElementById(r)),(d=(n=s(this,ae))==null?void 0:n.associateElement)==null||d.call(n,this))}disconnectedCallback(){var e,r;(r=(e=s(this,ae))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,ae,null)}};ae=new WeakMap,Q.shadowRootOptions={mode:"open"},Q.getTemplateHTML=vd,Q.getSlotTemplateHTML=Td;l.customElements.get("media-text-display")||l.customElements.define("media-text-display",Q);var bs=Q;function Ad(i,t){return`
    <slot>${Z(t.mediaDuration)}</slot>
  `}var yt,Si=class extends Q{constructor(){var e;super();c(this,yt,void 0);h(this,yt,this.shadowRoot.querySelector("slot")),s(this,yt).textContent=Z((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_DURATION]}attributeChangedCallback(e,r,o){e===a.MEDIA_DURATION&&(s(this,yt).textContent=Z(+o)),super.attributeChangedCallback(e,r,o)}get mediaDuration(){return O(this,a.MEDIA_DURATION)}set mediaDuration(e){H(this,a.MEDIA_DURATION,e)}};yt=new WeakMap,Si.getSlotTemplateHTML=Ad;l.customElements.get("media-duration-display")||l.customElements.define("media-duration-display",Si);var fs=Si;var yd={2:g("Network Error"),3:g("Decode Error"),4:g("Source Not Supported"),5:g("Encryption Error")},Sd={2:g("A network error caused the media download to fail."),3:g("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:g("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:g("The media is encrypted and there are no keys to decrypt it.")},Rr=i=>{var t,e;return i.code===1?null:{title:(t=yd[i.code])!=null?t:`Error ${i.code}`,message:(e=Sd[i.code])!=null?e:i.message}};function Id(i){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${i.mediaerrorcode}" id="content">
      ${Ts({code:+i.mediaerrorcode,message:i.mediaerrormessage})}
    </slot>
  `}function Md(i){return i.code&&Rr(i)!==null}function Ts(i){var o;let{title:t,message:e}=(o=Rr(i))!=null?o:{},r="";return t&&(r+=`<slot name="error-${i.code}-title"><h3>${t}</h3></slot>`),e&&(r+=`<slot name="error-${i.code}-message"><p>${e}</p></slot>`),r}var vs=[a.MEDIA_ERROR_CODE,a.MEDIA_ERROR_MESSAGE],Ii,St=class extends re{constructor(){super(...arguments);c(this,Ii,null)}static get observedAttributes(){return[...super.observedAttributes,...vs]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,r,o){var d;if(super.attributeChangedCallback(e,r,o),!vs.includes(e))return;let n=(d=this.mediaError)!=null?d:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=Md(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n),!this.hasAttribute("aria-label"))){let{title:u}=Rr(n);u&&this.setAttribute("aria-label",u)}}get mediaError(){return s(this,Ii)}set mediaError(e){h(this,Ii,e)}get mediaErrorCode(){return O(this,"mediaerrorcode")}set mediaErrorCode(e){H(this,"mediaerrorcode",e)}get mediaErrorMessage(){return R(this,"mediaerrormessage")}set mediaErrorMessage(e){D(this,"mediaerrormessage",e)}};Ii=new WeakMap,St.getSlotTemplateHTML=Id,St.formatErrorMessage=Ts;l.customElements.get("media-error-dialog")||l.customElements.define("media-error-dialog",St);var As=St;function _d(i){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${Ld()}
    </slot>
  `}function Ld(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["\u2190","j"],description:"Seek back 10s"},{keys:["\u2192","l"],description:"Seek forward 10s"},{keys:["\u2191"],description:"Turn volume up"},{keys:["\u2193"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:r})=>`
      <tr>
        <td>
          <div class="key-combo">${e.map((n,d)=>d>0?`<span class="key-separator">or</span><span class="key">${n}</span>`:`<span class="key">${n}</span>`).join("")}</div>
        </td>
        <td class="description">${r}</td>
      </tr>
    `).join("")}</table>
  `}var qe,Ye,Mi=class extends re{constructor(){super(...arguments);c(this,qe,e=>{var u;if(!this.open)return;let r=(u=this.shadowRoot)==null?void 0:u.querySelector("#content");if(!r)return;let o=e.composedPath(),n=o[0]===this||o.includes(this),d=o.includes(r);n&&!d&&(this.open=!1)});c(this,Ye,e=>{if(!this.open)return;let r=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||r)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",s(this,qe)),document.addEventListener("keydown",s(this,Ye)))}disconnectedCallback(){this.removeEventListener("click",s(this,qe)),document.removeEventListener("keydown",s(this,Ye))}attributeChangedCallback(e,r,o){super.attributeChangedCallback(e,r,o),e==="open"&&(this.open?(this.addEventListener("click",s(this,qe)),document.addEventListener("keydown",s(this,Ye))):(this.removeEventListener("click",s(this,qe)),document.removeEventListener("keydown",s(this,Ye))))}};qe=new WeakMap,Ye=new WeakMap,Mi.getSlotTemplateHTML=_d;l.customElements.get("media-keyboard-shortcuts-dialog")||l.customElements.define("media-keyboard-shortcuts-dialog",Mi);var ys=Mi;var kd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Rd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function Dd(i){return`
    <style>
      :host([${a.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${a.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${a.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${kd}</slot>
      <slot name="exit">${Rd}</slot>
    </slot>
  `}function xd(){return`
    <slot name="tooltip-enter">${g("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${g("Exit fullscreen mode")}</slot>
  `}var Ss=i=>{let t=i.mediaIsFullscreen?g("exit fullscreen mode"):g("enter fullscreen mode");i.setAttribute("aria-label",t)},_i,It=class extends U{constructor(){super(...arguments);c(this,_i,null)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_FULLSCREEN,a.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ss(this)}attributeChangedCallback(e,r,o){super.attributeChangedCallback(e,r,o),e===a.MEDIA_IS_FULLSCREEN&&Ss(this)}get mediaFullscreenUnavailable(){return R(this,a.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){D(this,a.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return y(this,a.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){S(this,a.MEDIA_IS_FULLSCREEN,e)}handleClick(e){h(this,_i,e);let r=s(this,_i)instanceof PointerEvent,o=this.mediaIsFullscreen?new l.CustomEvent(E.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new l.CustomEvent(E.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(o)}};_i=new WeakMap,It.getSlotTemplateHTML=Dd,It.getTooltipContentHTML=xd;l.customElements.get("media-fullscreen-button")||l.customElements.define("media-fullscreen-button",It);var Is=It;var{MEDIA_TIME_IS_LIVE:Dr,MEDIA_PAUSED:Li}=a,{MEDIA_SEEK_TO_LIVE_REQUEST:wd,MEDIA_PLAY_REQUEST:Cd}=E,Pd='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function Od(i){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Dr}]:not([${Li}])) slot[name=indicator] > *,
      :host([${Dr}]:not([${Li}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Dr}]:not([${Li}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Pd}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${g("live")}</slot>
  `}var Ms=i=>{var o;let t=i.mediaPaused||!i.mediaTimeIsLive,e=t?g("seek to live"):g("playing live");i.setAttribute("aria-label",e);let r=(o=i.shadowRoot)==null?void 0:o.querySelector('slot[name="text"]');r&&(r.textContent=g("live")),t?i.removeAttribute("aria-disabled"):i.setAttribute("aria-disabled","true")},ki=class extends U{static get observedAttributes(){return[...super.observedAttributes,Dr,Li]}connectedCallback(){super.connectedCallback(),Ms(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),Ms(this)}get mediaPaused(){return y(this,a.MEDIA_PAUSED)}set mediaPaused(t){S(this,a.MEDIA_PAUSED,t)}get mediaTimeIsLive(){return y(this,a.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(t){S(this,a.MEDIA_TIME_IS_LIVE,t)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new l.CustomEvent(wd,{composed:!0,bubbles:!0})),this.hasAttribute(Li)&&this.dispatchEvent(new l.CustomEvent(Cd,{composed:!0,bubbles:!0})))}};ki.getSlotTemplateHTML=Od;l.customElements.get("media-live-button")||l.customElements.define("media-live-button",ki);var _s=ki;var xr={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Ls=500,Ud=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Nd(i){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Ls}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Ud}</slot>
    <div id="status" role="status" aria-live="polite">${g("media loading")}</div>
  `}var de,Ri,Mt=class extends l.HTMLElement{constructor(){super();c(this,de,void 0);c(this,Ri,Ls);if(!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER,a.MEDIA_PAUSED,a.MEDIA_LOADING,xr.LOADING_DELAY]}attributeChangedCallback(e,r,o){var n,d,u,m,b;e===xr.LOADING_DELAY&&r!==o?this.loadingDelay=Number(o):e===k.MEDIA_CONTROLLER&&(r&&((d=(n=s(this,de))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,de,null)),o&&this.isConnected&&(h(this,de,(u=this.getRootNode())==null?void 0:u.getElementById(o)),(b=(m=s(this,de))==null?void 0:m.associateElement)==null||b.call(m,this)))}connectedCallback(){var r,o,n;let e=this.getAttribute(k.MEDIA_CONTROLLER);e&&(h(this,de,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(o=s(this,de))==null?void 0:o.associateElement)==null||n.call(o,this))}disconnectedCallback(){var e,r;(r=(e=s(this,de))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,de,null)}get loadingDelay(){return s(this,Ri)}set loadingDelay(e){h(this,Ri,e);let{style:r}=F(this.shadowRoot,":host");r.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return y(this,a.MEDIA_PAUSED)}set mediaPaused(e){S(this,a.MEDIA_PAUSED,e)}get mediaLoading(){return y(this,a.MEDIA_LOADING)}set mediaLoading(e){S(this,a.MEDIA_LOADING,e)}get mediaController(){return R(this,k.MEDIA_CONTROLLER)}set mediaController(e){D(this,k.MEDIA_CONTROLLER,e)}get noAutohide(){return y(this,xr.NO_AUTOHIDE)}set noAutohide(e){S(this,xr.NO_AUTOHIDE,e)}};de=new WeakMap,Ri=new WeakMap,Mt.shadowRootOptions={mode:"open"},Mt.getTemplateHTML=Nd;l.customElements.get("media-loading-indicator")||l.customElements.define("media-loading-indicator",Mt);var ks=Mt;var Hd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Rs=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Fd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function $d(i){return`
    <style>
      :host(:not([${a.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${a.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${a.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${a.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${a.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${a.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${a.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Hd}</slot>
      <slot name="low">${Rs}</slot>
      <slot name="medium">${Rs}</slot>
      <slot name="high">${Fd}</slot>
    </slot>
  `}function Bd(){return`
    <slot name="tooltip-mute">${g("Mute")}</slot>
    <slot name="tooltip-unmute">${g("Unmute")}</slot>
  `}var Ds=i=>{let e=i.mediaVolumeLevel==="off"?g("unmute"):g("mute");i.setAttribute("aria-label",e)},_t=class extends U{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Ds(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t===a.MEDIA_VOLUME_LEVEL&&Ds(this)}get mediaVolumeLevel(){return R(this,a.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(t){D(this,a.MEDIA_VOLUME_LEVEL,t)}handleClick(){let t=this.mediaVolumeLevel==="off"?E.MEDIA_UNMUTE_REQUEST:E.MEDIA_MUTE_REQUEST;this.dispatchEvent(new l.CustomEvent(t,{composed:!0,bubbles:!0}))}};_t.getSlotTemplateHTML=$d,_t.getTooltipContentHTML=Bd;l.customElements.get("media-mute-button")||l.customElements.define("media-mute-button",_t);var xs=_t;var ws=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Vd(i){return`
    <style>
      :host([${a.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${a.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${a.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ws}</slot>
      <slot name="exit">${ws}</slot>
    </slot>
  `}function Kd(){return`
    <slot name="tooltip-enter">${g("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${g("Exit picture in picture mode")}</slot>
  `}var Cs=i=>{let t=i.mediaIsPip?g("exit picture in picture mode"):g("enter picture in picture mode");i.setAttribute("aria-label",t)},Lt=class extends U{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_PIP,a.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Cs(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t===a.MEDIA_IS_PIP&&Cs(this)}get mediaPipUnavailable(){return R(this,a.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(t){D(this,a.MEDIA_PIP_UNAVAILABLE,t)}get mediaIsPip(){return y(this,a.MEDIA_IS_PIP)}set mediaIsPip(t){S(this,a.MEDIA_IS_PIP,t)}handleClick(){let t=this.mediaIsPip?E.MEDIA_EXIT_PIP_REQUEST:E.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new l.CustomEvent(t,{composed:!0,bubbles:!0}))}};Lt.getSlotTemplateHTML=Vd,Lt.getTooltipContentHTML=Kd;l.customElements.get("media-pip-button")||l.customElements.define("media-pip-button",Lt);var Ps=Lt;var vo={RATES:"rates"},Gd=[1,1.2,1.5,1.7,2],Di=1;function Wd(i){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${i.mediaplaybackrate||Di}x</slot>
  `}function qd(){return g("Playback rate")}var Te,kt=class extends U{constructor(){var e;super();c(this,Te,new lt(this,vo.RATES,{defaultValue:Gd}));this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:Di}x`}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PLAYBACK_RATE,vo.RATES]}attributeChangedCallback(e,r,o){if(super.attributeChangedCallback(e,r,o),e===vo.RATES&&(s(this,Te).value=o),e===a.MEDIA_PLAYBACK_RATE){let n=o?+o:Number.NaN,d=Number.isNaN(n)?Di:n;this.container.innerHTML=`${d}x`,this.setAttribute("aria-label",g("Playback rate {playbackRate}",{playbackRate:d}))}}get rates(){return s(this,Te)}set rates(e){e?Array.isArray(e)?s(this,Te).value=e.join(" "):typeof e=="string"&&(s(this,Te).value=e):s(this,Te).value=""}get mediaPlaybackRate(){return O(this,a.MEDIA_PLAYBACK_RATE,Di)}set mediaPlaybackRate(e){H(this,a.MEDIA_PLAYBACK_RATE,e)}handleClick(){var n,d;let e=Array.from(s(this,Te).values(),u=>+u).sort((u,m)=>u-m),r=(d=(n=e.find(u=>u>this.mediaPlaybackRate))!=null?n:e[0])!=null?d:Di,o=new l.CustomEvent(E.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(o)}};Te=new WeakMap,kt.getSlotTemplateHTML=Wd,kt.getTooltipContentHTML=qd;l.customElements.get("media-playback-rate-button")||l.customElements.define("media-playback-rate-button",kt);var Os=kt;var Yd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Qd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function jd(i){return`
    <style>
      :host([${a.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${a.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${a.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${a.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Yd}</slot>
      <slot name="pause">${Qd}</slot>
    </slot>
  `}function zd(){return`
    <slot name="tooltip-play">${g("Play")}</slot>
    <slot name="tooltip-pause">${g("Pause")}</slot>
  `}var Us=i=>{let t=i.mediaPaused?g("play"):g("pause");i.setAttribute("aria-label",t)},Rt=class extends U{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PAUSED,a.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Us(this)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),(t===a.MEDIA_PAUSED||t===a.MEDIA_LANG)&&Us(this)}get mediaPaused(){return y(this,a.MEDIA_PAUSED)}set mediaPaused(t){S(this,a.MEDIA_PAUSED,t)}handleClick(){let t=this.mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(t,{composed:!0,bubbles:!0}))}};Rt.getSlotTemplateHTML=jd,Rt.getTooltipContentHTML=zd;l.customElements.get("media-play-button")||l.customElements.define("media-play-button",Rt);var Ns=Rt;var he={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function Zd(i){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var Xd=i=>{i.style.removeProperty("background-image")},Jd=(i,t)=>{i.style["background-image"]=`url('${t}')`},Dt=class extends l.HTMLElement{static get observedAttributes(){return[he.PLACEHOLDER_SRC,he.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let t=B(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(t,e,r){t===he.SRC&&(r==null?this.image.removeAttribute(he.SRC):this.image.setAttribute(he.SRC,r)),t===he.PLACEHOLDER_SRC&&(r==null?Xd(this.image):Jd(this.image,r))}get placeholderSrc(){return R(this,he.PLACEHOLDER_SRC)}set placeholderSrc(t){D(this,he.SRC,t)}get src(){return R(this,he.SRC)}set src(t){D(this,he.SRC,t)}};Dt.shadowRootOptions={mode:"open"},Dt.getTemplateHTML=Zd;l.customElements.get("media-poster-image")||l.customElements.define("media-poster-image",Dt);var Hs=Dt;var xi,wr=class extends Q{constructor(){super();c(this,xi,void 0);h(this,xi,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PREVIEW_CHAPTER,a.MEDIA_LANG]}attributeChangedCallback(e,r,o){if(super.attributeChangedCallback(e,r,o),(e===a.MEDIA_PREVIEW_CHAPTER||e===a.MEDIA_LANG)&&o!==r&&o!=null)if(s(this,xi).textContent=o,o!==""){let n=g("chapter: {chapterName}",{chapterName:o});this.setAttribute("aria-valuetext",n)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return R(this,a.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){D(this,a.MEDIA_PREVIEW_CHAPTER,e)}};xi=new WeakMap;l.customElements.get("media-preview-chapter-display")||l.customElements.define("media-preview-chapter-display",wr);var Fs=wr;function el(i){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var le,xt=class extends l.HTMLElement{constructor(){super();c(this,le,void 0);if(!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=B(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER,a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_COORDS]}connectedCallback(){var r,o,n;let e=this.getAttribute(k.MEDIA_CONTROLLER);e&&(h(this,le,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(o=s(this,le))==null?void 0:o.associateElement)==null||n.call(o,this))}disconnectedCallback(){var e,r;(r=(e=s(this,le))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,le,null)}attributeChangedCallback(e,r,o){var n,d,u,m,b;[a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===k.MEDIA_CONTROLLER&&(r&&((d=(n=s(this,le))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,le,null)),o&&this.isConnected&&(h(this,le,(u=this.getRootNode())==null?void 0:u.getElementById(o)),(b=(m=s(this,le))==null?void 0:m.associateElement)==null||b.call(m,this)))}get mediaPreviewImage(){return R(this,a.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){D(this,a.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(a.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(r=>+r)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(a.MEDIA_PREVIEW_COORDS);return}this.setAttribute(a.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,r=this.mediaPreviewImage;if(!(e&&r))return;let[o,n,d,u]=e,m=r.split("#")[0],b=getComputedStyle(this),{maxWidth:A,maxHeight:_,minWidth:v,minHeight:f}=b,x=b.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain",M,L;if(x==="fill"){let pe=parseInt(A)/d,Ee=parseInt(_)/u,qt=parseInt(v)/d,Pe=parseInt(f)/u;M=pe<1?pe:Math.max(pe,qt),L=Ee<1?Ee:Math.max(Ee,Pe)}else{let pe=Math.min(parseInt(A)/d,parseInt(_)/u),Ee=Math.max(parseInt(v)/d,parseInt(f)/u),Pe=pe<1?pe:Ee>1?Ee:1;M=Pe,L=Pe}let{style:C}=F(this.shadowRoot,":host"),P=F(this.shadowRoot,"img").style,J=this.shadowRoot.querySelector("img"),Wt=Math.min(M,L)<1?"min":"max";C.setProperty(`${Wt}-width`,"initial","important"),C.setProperty(`${Wt}-height`,"initial","important"),C.width=`${d*M}px`,C.height=`${u*L}px`;let it=()=>{P.width=`${this.imgWidth*M}px`,P.height=`${this.imgHeight*L}px`,P.display="block"};J.src!==m&&(J.onload=()=>{this.imgWidth=J.naturalWidth,this.imgHeight=J.naturalHeight,it(),J.onload=null},J.src=m,it()),it(),P.transform=`translate(-${o*M}px, -${n*L}px)`}};le=new WeakMap,xt.shadowRootOptions={mode:"open"},xt.getTemplateHTML=el;l.customElements.get("media-preview-thumbnail")||l.customElements.define("media-preview-thumbnail",xt);var wi=xt;var wt,Cr=class extends Q{constructor(){super();c(this,wt,void 0);h(this,wt,this.shadowRoot.querySelector("slot")),s(this,wt).textContent=Z(0)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,r,o){super.attributeChangedCallback(e,r,o),e===a.MEDIA_PREVIEW_TIME&&o!=null&&(s(this,wt).textContent=Z(parseFloat(o)))}get mediaPreviewTime(){return O(this,a.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){H(this,a.MEDIA_PREVIEW_TIME,e)}};wt=new WeakMap;l.customElements.get("media-preview-time-display")||l.customElements.define("media-preview-time-display",Cr);var $s=Cr;var Ct={SEEK_OFFSET:"seekoffset"},To=30,tl=i=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function il(i,t){return`
    <slot name="icon">${tl(t.seekOffset)}</slot>
  `}var rl=(i,t)=>{i.setAttribute("aria-label",g("seek back {seekOffset} seconds",{seekOffset:t}))};function ol(){return g("Seek backward")}var nl=0,Pt=class extends U{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_CURRENT_TIME,Ct.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,Ct.SEEK_OFFSET,To)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),rl(this,this.seekOffset),t===Ct.SEEK_OFFSET&&(this.seekOffset=O(this,Ct.SEEK_OFFSET,To))}get seekOffset(){return O(this,Ct.SEEK_OFFSET,To)}set seekOffset(t){H(this,Ct.SEEK_OFFSET,t),this.setAttribute("aria-label",g("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),nr(sr(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return O(this,a.MEDIA_CURRENT_TIME,nl)}set mediaCurrentTime(t){H(this,a.MEDIA_CURRENT_TIME,t)}handleClick(){let t=Math.max(this.mediaCurrentTime-this.seekOffset,0),e=new l.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(e)}};Pt.getSlotTemplateHTML=il,Pt.getTooltipContentHTML=ol;l.customElements.get("media-seek-backward-button")||l.customElements.define("media-seek-backward-button",Pt);var Bs=Pt;var Ot={SEEK_OFFSET:"seekoffset"},Ao=30,sl=i=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function al(i,t){return`
    <slot name="icon">${sl(t.seekOffset)}</slot>
  `}var dl=(i,t)=>{i.setAttribute("aria-label",g("seek forward {seekOffset} seconds",{seekOffset:t}))};function ll(){return g("Seek forward")}var ul=0,Ut=class extends U{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_CURRENT_TIME,Ot.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,Ot.SEEK_OFFSET,Ao)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),dl(this,this.seekOffset),t===Ot.SEEK_OFFSET&&(this.seekOffset=O(this,Ot.SEEK_OFFSET,Ao))}get seekOffset(){return O(this,Ot.SEEK_OFFSET,Ao)}set seekOffset(t){H(this,Ot.SEEK_OFFSET,t),this.setAttribute("aria-label",g("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),nr(sr(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return O(this,a.MEDIA_CURRENT_TIME,ul)}set mediaCurrentTime(t){H(this,a.MEDIA_CURRENT_TIME,t)}handleClick(){let t=this.mediaCurrentTime+this.seekOffset,e=new l.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(e)}};Ut.getSlotTemplateHTML=al,Ut.getTooltipContentHTML=ll;l.customElements.get("media-seek-forward-button")||l.customElements.define("media-seek-forward-button",Ut);var Vs=Ut;var xe={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Ks=[...Object.values(xe),a.MEDIA_CURRENT_TIME,a.MEDIA_DURATION,a.MEDIA_SEEKABLE],Gs=["Enter"," "],cl="&nbsp;/&nbsp;",yo=(i,{timesSep:t=cl}={})=>{var d,u;let e=(d=i.mediaCurrentTime)!=null?d:0,[,r]=(u=i.mediaSeekable)!=null?u:[],o=0;Number.isFinite(i.mediaDuration)?o=i.mediaDuration:Number.isFinite(r)&&(o=r);let n=i.remaining?Z(0-(o-e)):Z(e);return i.showDuration?`${n}${t}${Z(o)}`:n},ml=i=>{var u;let t=i.mediaCurrentTime,[,e]=(u=i.mediaSeekable)!=null?u:[],r=null;if(Number.isFinite(i.mediaDuration)?r=i.mediaDuration:Number.isFinite(e)&&(r=e),t==null||r===null){i.setAttribute("aria-valuetext",g("video not loaded, unknown time."));return}let o=i.remaining?ye(0-(r-t)):ye(t);if(!i.showDuration){i.setAttribute("aria-valuetext",o);return}let n=ye(r),d=g("{currentTime} of {totalTime}",{currentTime:o,totalTime:n});i.setAttribute("aria-valuetext",d)};function hl(i,t){return`
    <slot>${yo(t)}</slot>
  `}var pl=i=>{i.setAttribute("aria-label",g("playback time"))},Qe,ue,Pi,Or,Ws,Oi,So,Nt,Pr,Ui,Io,Ci=class extends Q{constructor(){super();c(this,Or);c(this,Oi);c(this,Nt);c(this,Ui);c(this,Qe,void 0);c(this,ue,null);c(this,Pi,e=>{let{metaKey:r,altKey:o,key:n}=e;if(r||o||!Gs.includes(n)){this.removeEventListener("keyup",s(this,ue));return}this.addEventListener("keyup",s(this,ue))});h(this,Qe,this.shadowRoot.querySelector("slot")),s(this,Qe).innerHTML=`${yo(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Ks,"disabled"]}connectedCallback(){let{style:e}=F(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",g("playback time")),T(this,Nt,Pr).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),T(this,Oi,So).call(this),super.disconnectedCallback()}attributeChangedCallback(e,r,o){pl(this),Ks.includes(e)?this.update():e==="disabled"&&o!==r?o==null?T(this,Nt,Pr).call(this):T(this,Ui,Io).call(this):e===xe.NO_TOGGLE&&o!==r&&(this.noToggle?T(this,Ui,Io).call(this):T(this,Nt,Pr).call(this)),super.attributeChangedCallback(e,r,o)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return y(this,xe.REMAINING)}set remaining(e){S(this,xe.REMAINING,e)}get showDuration(){return y(this,xe.SHOW_DURATION)}set showDuration(e){S(this,xe.SHOW_DURATION,e)}get noToggle(){return y(this,xe.NO_TOGGLE)}set noToggle(e){S(this,xe.NO_TOGGLE,e)}get mediaDuration(){return O(this,a.MEDIA_DURATION)}set mediaDuration(e){H(this,a.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,a.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){H(this,a.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(a.MEDIA_SEEKABLE);if(e)return e.split(":").map(r=>+r)}set mediaSeekable(e){if(e==null){this.removeAttribute(a.MEDIA_SEEKABLE);return}this.setAttribute(a.MEDIA_SEEKABLE,e.join(":"))}update(){let e=yo(this);ml(this),e!==s(this,Qe).innerHTML&&(s(this,Qe).innerHTML=e)}};Qe=new WeakMap,ue=new WeakMap,Pi=new WeakMap,Or=new WeakSet,Ws=function(){s(this,ue)||(h(this,ue,e=>{let{key:r}=e;if(!Gs.includes(r)){this.removeEventListener("keyup",s(this,ue));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",s(this,Pi)),this.addEventListener("click",this.toggleTimeDisplay))},Oi=new WeakSet,So=function(){s(this,ue)&&(this.removeEventListener("keyup",s(this,ue)),this.removeEventListener("keydown",s(this,Pi)),this.removeEventListener("click",this.toggleTimeDisplay),h(this,ue,null))},Nt=new WeakSet,Pr=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),T(this,Or,Ws).call(this))},Ui=new WeakSet,Io=function(){this.removeAttribute("role"),this.disable(),T(this,Oi,So).call(this)},Ci.getSlotTemplateHTML=hl;l.customElements.get("media-time-display")||l.customElements.define("media-time-display",Ci);var qs=Ci;var je,Ni,ze,Ht,Hi,Fi,$i,Ze,we,Bi,Ur=class{constructor(t,e,r){c(this,je,void 0);c(this,Ni,void 0);c(this,ze,void 0);c(this,Ht,void 0);c(this,Hi,void 0);c(this,Fi,void 0);c(this,$i,void 0);c(this,Ze,void 0);c(this,we,0);c(this,Bi,(t=performance.now())=>{h(this,we,requestAnimationFrame(s(this,Bi))),h(this,Ht,performance.now()-s(this,ze));let e=1e3/this.fps;if(s(this,Ht)>e){h(this,ze,t-s(this,Ht)%e);let r=1e3/((t-s(this,Ni))/++tn(this,Hi)._),o=(t-s(this,Fi))/1e3/this.duration,n=s(this,$i)+o*this.playbackRate;n-s(this,je).valueAsNumber>0?h(this,Ze,this.playbackRate/this.duration/r):(h(this,Ze,.995*s(this,Ze)),n=s(this,je).valueAsNumber+s(this,Ze)),this.callback(n)}});h(this,je,t),this.callback=e,this.fps=r}start(){s(this,we)===0&&(h(this,ze,performance.now()),h(this,Ni,s(this,ze)),h(this,Hi,0),s(this,Bi).call(this))}stop(){s(this,we)!==0&&(cancelAnimationFrame(s(this,we)),h(this,we,0))}update({start:t,duration:e,playbackRate:r}){let o=t-s(this,je).valueAsNumber,n=Math.abs(e-this.duration);(o>0||o<-.03||n>=.5)&&this.callback(t),h(this,$i,t),h(this,Fi,performance.now()),this.duration=e,this.playbackRate=r}};je=new WeakMap,Ni=new WeakMap,ze=new WeakMap,Ht=new WeakMap,Hi=new WeakMap,Fi=new WeakMap,$i=new WeakMap,Ze=new WeakMap,we=new WeakMap,Bi=new WeakMap;var El=i=>{let t=i.range,e=ye(+Ys(i)),r=ye(+i.mediaSeekableEnd),o=e&&r?g("{currentTime} of {totalTime}",{currentTime:e,totalTime:r}):g("video not loaded, unknown time.");t.setAttribute("aria-valuetext",o)};function gl(i){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${a.MEDIA_PREVIEW_IMAGE}], [${a.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${a.MEDIA_PREVIEW_IMAGE}], [${a.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${a.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${a.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${a.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${a.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${a.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${a.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${a.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${a.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${a.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${a.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${wi.shadowRootOptions.mode}">
            ${wi.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var Nr=(i,t=i.mediaCurrentTime)=>{let e=Number.isFinite(i.mediaSeekableStart)?i.mediaSeekableStart:0,r=Number.isFinite(i.mediaDuration)?i.mediaDuration:i.mediaSeekableEnd;if(Number.isNaN(r))return 0;let o=(t-e)/(r-e);return Math.max(0,Math.min(o,1))},Ys=(i,t=i.range.valueAsNumber)=>{let e=Number.isFinite(i.mediaSeekableStart)?i.mediaSeekableStart:0,r=Number.isFinite(i.mediaDuration)?i.mediaDuration:i.mediaSeekableEnd;return Number.isNaN(r)?0:t*(r-e)+e},Xe,Ce,Vi,$t,Ki,Gi,Bt,Vt,Je,et,tt,Fr,Qs,$r,Wi,Mo,qi,_o,Yi,Lo,Br,js,Kt,Hr,Vr,zs,Ft=class extends ne{constructor(){super();c(this,Fr);c(this,Wi);c(this,qi);c(this,Yi);c(this,Br);c(this,Kt);c(this,Vr);c(this,Xe,null);c(this,Ce,void 0);c(this,Vi,void 0);c(this,$t,void 0);c(this,Ki,void 0);c(this,Gi,void 0);c(this,Bt,void 0);c(this,Vt,void 0);c(this,Je,void 0);c(this,et,void 0);c(this,tt,()=>{T(this,Fr,Qs).call(this)?s(this,Ce).start():s(this,Ce).stop()});c(this,$r,e=>{this.dragging||(ot(e)&&(this.range.valueAsNumber=e),s(this,et)||this.updateBar())});this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),h(this,Vi,this.shadowRoot.querySelectorAll('[part~="box"]')),h(this,Ki,this.shadowRoot.querySelector('[part~="preview-box"]')),h(this,Gi,this.shadowRoot.querySelector('[part~="current-box"]'));let r=getComputedStyle(this);h(this,Bt,parseInt(r.getPropertyValue("--media-box-padding-left"))),h(this,Vt,parseInt(r.getPropertyValue("--media-box-padding-right"))),h(this,Ce,new Ur(this.range,s(this,$r),60))}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PAUSED,a.MEDIA_DURATION,a.MEDIA_SEEKABLE,a.MEDIA_CURRENT_TIME,a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_TIME,a.MEDIA_PREVIEW_CHAPTER,a.MEDIA_BUFFERED,a.MEDIA_PLAYBACK_RATE,a.MEDIA_LOADING,a.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",g("seek")),s(this,tt).call(this),h(this,Xe,this.getRootNode()),(e=s(this,Xe))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),s(this,tt).call(this),(e=s(this,Xe))==null||e.removeEventListener("transitionstart",this),h(this,Xe,null)}attributeChangedCallback(e,r,o){super.attributeChangedCallback(e,r,o),r!=o&&(e===a.MEDIA_CURRENT_TIME||e===a.MEDIA_PAUSED||e===a.MEDIA_ENDED||e===a.MEDIA_LOADING||e===a.MEDIA_DURATION||e===a.MEDIA_SEEKABLE?(s(this,Ce).update({start:Nr(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),s(this,tt).call(this),El(this)):e===a.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===a.MEDIA_DURATION||e===a.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=s(this,Je),this.updateBar()))}get mediaChaptersCues(){return s(this,Je)}set mediaChaptersCues(e){var r;h(this,Je,e),this.updateSegments((r=s(this,Je))==null?void 0:r.map(o=>({start:Nr(this,o.startTime),end:Nr(this,o.endTime)})))}get mediaPaused(){return y(this,a.MEDIA_PAUSED)}set mediaPaused(e){S(this,a.MEDIA_PAUSED,e)}get mediaLoading(){return y(this,a.MEDIA_LOADING)}set mediaLoading(e){S(this,a.MEDIA_LOADING,e)}get mediaDuration(){return O(this,a.MEDIA_DURATION)}set mediaDuration(e){H(this,a.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,a.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){H(this,a.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return O(this,a.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){H(this,a.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(a.MEDIA_BUFFERED);return e?e.split(" ").map(r=>r.split(":").map(o=>+o)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(a.MEDIA_BUFFERED);return}let r=e.map(o=>o.join(":")).join(" ");this.setAttribute(a.MEDIA_BUFFERED,r)}get mediaSeekable(){let e=this.getAttribute(a.MEDIA_SEEKABLE);if(e)return e.split(":").map(r=>+r)}set mediaSeekable(e){if(e==null){this.removeAttribute(a.MEDIA_SEEKABLE);return}this.setAttribute(a.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var r;let[,e=this.mediaDuration]=(r=this.mediaSeekable)!=null?r:[];return e}get mediaSeekableStart(){var r;let[e=0]=(r=this.mediaSeekable)!=null?r:[];return e}get mediaPreviewImage(){return R(this,a.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){D(this,a.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return O(this,a.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){H(this,a.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return y(this,a.MEDIA_ENDED)}set mediaEnded(e){S(this,a.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var n;let e=this.mediaBuffered;if(!e.length)return;let r;if(this.mediaEnded)r=1;else{let d=this.mediaCurrentTime,[,u=this.mediaSeekableStart]=(n=e.find(([m,b])=>m<=d&&d<=b))!=null?n:[];r=Nr(this,u)}let{style:o}=F(this.shadowRoot,"#buffered");o.setProperty("width",`${r*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let r=F(this.shadowRoot,"#current-rail"),o=F(this.shadowRoot,'[part~="current-box"]'),n=T(this,Wi,Mo).call(this,s(this,Gi)),d=T(this,qi,_o).call(this,n,this.range.valueAsNumber),u=T(this,Yi,Lo).call(this,n,this.range.valueAsNumber);r.style.transform=`translateX(${d})`,r.style.setProperty("--_range-width",`${n.range.width}`),o.style.setProperty("--_box-shift",`${u}`),o.style.setProperty("--_box-width",`${n.box.width}px`),o.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":T(this,Vr,zs).call(this);break;case"pointermove":T(this,Br,js).call(this,e);break;case"pointerup":s(this,et)&&h(this,et,!1);break;case"pointerdown":h(this,et,!0);break;case"pointerleave":T(this,Kt,Hr).call(this,null);break;case"transitionstart":ce(e.target,this)&&setTimeout(()=>s(this,tt).call(this),0);break}}};Xe=new WeakMap,Ce=new WeakMap,Vi=new WeakMap,$t=new WeakMap,Ki=new WeakMap,Gi=new WeakMap,Bt=new WeakMap,Vt=new WeakMap,Je=new WeakMap,et=new WeakMap,tt=new WeakMap,Fr=new WeakSet,Qs=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ar(this)},$r=new WeakMap,Wi=new WeakSet,Mo=function(e){var b;let o=((b=this.getAttribute("bounds")?Se(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?b:this).getBoundingClientRect(),n=this.range.getBoundingClientRect(),d=e.offsetWidth,u=-(n.left-o.left-d/2),m=o.right-n.left-d/2;return{box:{width:d,min:u,max:m},bounds:o,range:n}},qi=new WeakSet,_o=function(e,r){let o=`${r*100}%`,{width:n,min:d,max:u}=e.box;if(!n)return o;if(Number.isNaN(d)||(o=`max(${`calc(1 / var(--_range-width) * 100 * ${d}% + var(--media-box-padding-left))`}, ${o})`),!Number.isNaN(u)){let b=`calc(1 / var(--_range-width) * 100 * ${u}% - var(--media-box-padding-right))`;o=`min(${o}, ${b})`}return o},Yi=new WeakSet,Lo=function(e,r){let{width:o,min:n,max:d}=e.box,u=r*e.range.width;if(u<n+s(this,Bt)){let m=e.range.left-e.bounds.left-s(this,Bt);return`${u-o/2+m}px`}if(u>d-s(this,Vt)){let m=e.bounds.right-e.range.right-s(this,Vt);return`${u+o/2-m-e.range.width}px`}return 0},Br=new WeakSet,js=function(e){let r=[...s(this,Vi)].some(v=>e.composedPath().includes(v));if(!this.dragging&&(r||!e.composedPath().includes(this))){T(this,Kt,Hr).call(this,null);return}let o=this.mediaSeekableEnd;if(!o)return;let n=F(this.shadowRoot,"#preview-rail"),d=F(this.shadowRoot,'[part~="preview-box"]'),u=T(this,Wi,Mo).call(this,s(this,Ki)),m=(e.clientX-u.range.left)/u.range.width;m=Math.max(0,Math.min(1,m));let b=T(this,qi,_o).call(this,u,m),A=T(this,Yi,Lo).call(this,u,m);n.style.transform=`translateX(${b})`,n.style.setProperty("--_range-width",`${u.range.width}`),d.style.setProperty("--_box-shift",`${A}`),d.style.setProperty("--_box-width",`${u.box.width}px`);let _=Math.round(s(this,$t))-Math.round(m*o);Math.abs(_)<1&&m>.01&&m<.99||(h(this,$t,m*o),T(this,Kt,Hr).call(this,s(this,$t)))},Kt=new WeakSet,Hr=function(e){this.dispatchEvent(new l.CustomEvent(E.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},Vr=new WeakSet,zs=function(){s(this,Ce).stop();let e=Ys(this);this.dispatchEvent(new l.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},Ft.shadowRootOptions={mode:"open"},Ft.getContainerTemplateHTML=gl;l.customElements.get("media-time-range")||l.customElements.define("media-time-range",Ft);var Zs=Ft;var bl=1,fl=i=>i.mediaMuted?0:i.mediaVolume,vl=i=>`${Math.round(i*100)}%`,Qi,Kr=class extends ne{constructor(){super(...arguments);c(this,Qi,()=>{let e=this.range.value,r=new l.CustomEvent(E.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(r)})}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_VOLUME,a.MEDIA_MUTED,a.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",g("volume")),this.range.addEventListener("input",s(this,Qi))}disconnectedCallback(){this.range.removeEventListener("input",s(this,Qi)),super.disconnectedCallback()}attributeChangedCallback(e,r,o){super.attributeChangedCallback(e,r,o),(e===a.MEDIA_VOLUME||e===a.MEDIA_MUTED)&&(this.range.valueAsNumber=fl(this),this.range.setAttribute("aria-valuetext",vl(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return O(this,a.MEDIA_VOLUME,bl)}set mediaVolume(e){H(this,a.MEDIA_VOLUME,e)}get mediaMuted(){return y(this,a.MEDIA_MUTED)}set mediaMuted(e){S(this,a.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return R(this,a.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){D(this,a.MEDIA_VOLUME_UNAVAILABLE,e)}};Qi=new WeakMap;l.customElements.get("media-volume-range")||l.customElements.define("media-volume-range",Kr);var Xs=Kr;function Tl(i){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${a.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function Al(){return g("Loop")}var Gt=class extends U{constructor(){super(...arguments);this.container=null}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=g("Loop"))}attributeChangedCallback(e,r,o){super.attributeChangedCallback(e,r,o),e===a.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return y(this,a.MEDIA_LOOP)}set mediaLoop(e){S(this,a.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,r=new l.CustomEvent(E.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(r)}};Gt.getSlotTemplateHTML=Tl,Gt.getTooltipContentHTML=Al;l.customElements.get("media-loop-button")||l.customElements.define("media-loop-button",Gt);var Js=Gt;return ca(yl);})();
