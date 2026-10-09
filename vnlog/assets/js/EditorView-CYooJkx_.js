import{c as ne,s as oe,S as ye,b as Oe,i as Re,D as ve,P as Ne}from"./SplitExportControls-P8aHC0Gg.js";import{f as X}from"./focusTrap-CcupLkoy.js";import Ae from"./PlayerView-CQx9mQBP.js";import{_ as L,c as u,a as t,t as g,b as I,w as S,l as V,d as T,m as A,p as U,j as k,n as w,e as R,o as d,F as v,u as G,r as N,v as y,i as Y,A as M,f as p,q as H,h as _,x as F,g as B,y as de,z as ce,C as J,s as Z,E as we,G as Ce}from"./index-DUq-NNHS.js";import{c as z,s as x,b as Le}from"./sanitize-BOazqeBd.js";import{R as De,i as He,c as ue}from"./RoomZipService-BAVu-EFB.js";import{p as Ue,A as ke,a as Fe,s as Q,b as he,f as pe,c as Pe,e as fe,g as me,h as ge,i as Te}from"./AppSelect-nwU8GrJ2.js";import{g as xe,a as Ve,P as Me,C as We,D as Be}from"./PlayerStage-B426VVVG.js";import{a as Ye}from"./LogImportService-Cmhchtz_.js";import"./LogParserService-B_keEpHY.js";const se=[{key:"background",label:"배경"},{key:"bgm",label:"배경 음악"},{key:"sfx",label:"효과음"}];function Ge(o,e=""){const i=[];for(const{key:r,label:n}of se.filter(s=>!e||s.key===e)){let s=null;o.forEach((c,m)=>{const l=c.effects?.[r],a=r==="background"?c.effects?.backgroundOpacity??.3:null;if(!l){s=null;return}s&&s.endStep===m&&s.value===l&&s.opacity===a?s.endStep=m+1:(s={key:r,label:n,startStep:m+1,endStep:m+1,value:l,opacity:a},i.push(s))})}return i.sort((r,n)=>r.startStep-n.startStep||r.key.localeCompare(n.key))}function q(o,e,i){return Number.isInteger(o)&&Number.isInteger(e)&&o>=1&&e>=o&&e<=i}function _e(o,e){return o?.effects?.[e.key]===e.value&&(e.key!=="background"||(o.effects.backgroundOpacity??.3)===e.opacity)}function ze(o,e){return se.some(i=>i.key===e.key)&&Array.isArray(e.stepIds)&&e.stepIds.length===e.endStep-e.startStep+1&&q(e.startStep,e.endStep,o.length)&&o.slice(e.startStep-1,e.endStep).every((i,r)=>_e(i,e)&&i.id===e.stepIds[r])}const je={components:{PlayerView:Ae},props:{step:{type:Object,default:null},characters:{type:Object,default:()=>({})},customCSS:{type:Object,default:()=>({})},title:{type:String,default:"대사 미리보기"},baseTheme:{type:Object,default:()=>({})},label:{type:String,default:"선택한 대사 미리보기"},reserveSpace:{type:Number,default:0}},data(){return{expanded:window.innerWidth>=768&&window.innerHeight>=700,width:window.innerWidth,height:window.innerHeight,parentHeight:0,frameWidth:0,frameHeight:0,frameSize:Math.min(400,Math.max(240,window.innerHeight*.33)),scale:1,zoom:"read",resizing:!1}},computed:{minSize(){return this.reserveSpace&&this.width>=768?120:180},maxSize(){const o=Math.max(280,this.height-(this.width<768?280:560));return!this.reserveSpace||this.width<768||!this.parentHeight?o:Math.max(this.minSize,Math.min(o,this.parentHeight-this.reserveSpace-130))},project(){return{title:this.title,characters:this.characters,scenes:[{name:"",steps:this.step?[this.step]:[]}]}},theme(){return{...this.baseTheme,bgImageUrl:this.step?.effects?.background||this.baseTheme.bgImageUrl||"",bgImageOpacity:this.step?.effects?.backgroundOpacity??this.baseTheme.bgImageOpacity??.3}}},watch:{expanded(){this.$nextTick(this.fit)},step:{deep:!0,handler(){this.$nextTick(this.focusDialogue)}},customCSS:{deep:!0,handler(){this.$nextTick(this.focusDialogue)}}},methods:{fit(){this.width=window.innerWidth,this.height=window.innerHeight,this.parentHeight=this.$el.parentElement?.clientHeight||0,this.frameSize=Math.max(this.minSize,Math.min(this.maxSize,this.frameSize));const o=this.$refs.frame;!o?.clientWidth||!o?.clientHeight||(this.frameWidth=o.clientWidth,this.frameHeight=o.clientHeight,this.scale=this.zoom==="fit"?Math.min(1,this.frameWidth/this.width,this.frameHeight/this.height):this.zoom==="read"?Math.max(.75,Math.min(1,this.frameWidth/this.width)):Number(this.zoom),this.$nextTick(this.focusDialogue))},focusDialogue(){if(!this.expanded||this.zoom==="fit")return;const o=this.$refs.frame,e=o?.querySelector(".dialog-box")||o?.querySelector(".dialog-wrapper");if(!e)return;const i=o.getBoundingClientRect(),r=e.getBoundingClientRect();o.scrollLeft+=r.left-i.left-Math.max(16,(o.clientWidth-r.width)/2);const n=o.querySelector(".character-avatar img")?.getBoundingClientRect(),s=n?.height&&r.bottom-n.top<=o.clientHeight-32?n.top:r.top;o.scrollTop+=(s+r.bottom)/2-i.top-o.clientHeight/2},setSize(o){this.frameSize=Math.max(this.minSize,Math.min(this.maxSize,o)),this.$nextTick(this.fit)},startResize(o){o.button===0&&(o.preventDefault(),o.currentTarget.focus(),this.resizing=!0,this._dragY=o.clientY,this._dragSize=this.frameSize,window.addEventListener("pointermove",this.moveResize),window.addEventListener("pointerup",this.stopResize),window.addEventListener("pointercancel",this.stopResize))},moveResize(o){this.resizing&&this.setSize(this._dragSize+o.clientY-this._dragY)},stopResize(){this.resizing=!1,window.removeEventListener("pointermove",this.moveResize),window.removeEventListener("pointerup",this.stopResize),window.removeEventListener("pointercancel",this.stopResize)},resizeKey(o){const e={ArrowUp:this.frameSize-40,ArrowDown:this.frameSize+40,Home:this.minSize,End:this.maxSize};o.key in e&&(o.preventDefault(),this.setSize(e[o.key]))}},mounted(){window.addEventListener("resize",this.fit),typeof ResizeObserver<"u"&&(this._observer=new ResizeObserver(()=>this.fit()),this._observer.observe(this.$refs.frame),this.reserveSpace&&this.$el.parentElement&&this._observer.observe(this.$el.parentElement)),this.$nextTick(this.fit)},beforeUnmount(){this.stopResize(),window.removeEventListener("resize",this.fit),this._observer?.disconnect()}},Ke={class:"preview-toolbar"},qe=["aria-expanded"],Xe={key:0},Je={key:0,class:"empty-preview"},Ze=["aria-valuenow","aria-valuemin","aria-valuemax"],Qe={key:1,class:"preview-note"};function $e(o,e,i,r,n,s){const c=R("PlayerView");return d(),u("section",{class:w(["step-live-preview",{expanded:n.expanded}])},[t("div",Ke,[t("strong",null,g(i.label),1),t("span",null,g(i.step?.character?.name||"대사 선택 전")+" · "+g(Math.round(n.scale*100))+"%",1),t("button",{"aria-expanded":n.expanded,onClick:e[0]||(e[0]=m=>n.expanded=!n.expanded)},g(n.expanded?"접기":"펼치기"),9,qe),n.expanded?(d(),u("label",Xe,[e[6]||(e[6]=I("보기",-1)),S(t("select",{"onUpdate:modelValue":e[1]||(e[1]=m=>n.zoom=m),"aria-label":"미리보기 보기 방식",onChange:e[2]||(e[2]=(...m)=>s.fit&&s.fit(...m))},[...e[5]||(e[5]=[t("option",{value:"read"},"대사 중심",-1),t("option",{value:"fit"},"전체 장면",-1),t("option",{value:"0.75"},"75%",-1),t("option",{value:"1"},"100%",-1)])],544),[[V,n.zoom]])])):T("",!0)]),S(t("div",{ref:"frame",class:"preview-frame",style:U({height:n.frameSize+"px"})},[i.step?(d(),u("div",{key:1,style:U({width:Math.max(n.frameWidth,n.width*n.scale)+"px",height:Math.max(n.frameHeight,n.height*n.scale)+"px"}),class:"preview-plane"},[t("div",{class:"preview-canvas",style:U({width:n.width+"px",height:n.height+"px",transform:`translate(-50%, -50%) scale(${n.scale})`})},[(d(),k(c,{ref:"player",key:i.step.id+":"+i.step.type,"vn-data":s.project,"custom-c-s-s":i.customCSS,"base-theme":s.theme,"passive-preview":""},null,8,["vn-data","custom-c-s-s","base-theme"]))],4)],4)):(d(),u("p",Je,"대사 목록에서 미리 볼 대사를 선택하세요."))],4),[[A,n.expanded]]),n.expanded?(d(),u("div",{key:0,class:"preview-resize",role:"separator","aria-label":"미리보기 높이 조절","aria-orientation":"horizontal","aria-valuenow":Math.round(n.frameSize),"aria-valuemin":s.minSize,"aria-valuemax":s.maxSize,tabindex:"0",onPointerdown:e[3]||(e[3]=(...m)=>s.startResize&&s.startResize(...m)),onKeydown:e[4]||(e[4]=(...m)=>s.resizeKey&&s.resizeKey(...m))},[...e[7]||(e[7]=[t("span",{"aria-hidden":"true"},"미리보기 높이 조절",-1)])],40,Ze)):T("",!0),n.expanded?(d(),u("p",Qe,g(n.zoom==="read"?"대사가 보이는 위치로 맞췄어요. 화면을 스크롤해 주변을 볼 수 있어요.":"원본 화면의 비율을 유지해요.")+" 음악과 효과음은 재생 화면에서 확인하세요.",1)):T("",!0)],2)}const be=L(je,[["render",$e],["__scopeId","data-v-306b9187"]]);function j(o){const e=new Map,i=r=>{r?.name&&!e.has(r.name)&&e.set(r.name,{name:r.name,color:z(r.color),avatarUrl:r.avatarUrl||""})};for(const r of o?.assetLibrary?.characters||[])i(r);for(const r of o?.scenes||[])for(const n of r.steps||[])i(n.character);return[...e.values()]}function K(o){const e=new Map,i=(r,n)=>{typeof r=="string"&&r&&!e.has(r)&&e.set(r,{url:r,name:n||`이미지 ${e.size+1}`})};for(const r of o?.assetLibrary?.images||[])i(r.url,r.name);for(const r of j(o))i(r.avatarUrl,`${r.name} · 표정`);for(const r of o?.scenes||[])for(const n of r.steps||[]){i(n.character?.avatarUrl,`${n.character?.name||"인물"} · 표정`),i(n.effects?.background,"대사에 사용한 배경");for(const s of n.illustrations||[])i(s.url,s.alt||"일러스트")}for(const r of o?.handouts||[])i(r.imageUrl,r.title||"핸드아웃");return[...e.values()]}function $(o,e,i){if(o.assetLibrary||={characters:[],images:[]},o.assetLibrary.characters||=[],o.assetLibrary.images||=[],e==="character"){if(j(o).some(r=>r.name===i.name))return!1;o.assetLibrary.characters.push({name:i.name,color:i.color,avatarUrl:i.avatarUrl||""})}else{if(K(o).some(r=>r.url===i.url))return!1;o.assetLibrary.images.push({name:i.name,url:i.url})}return!0}function et(o,e,i=""){o.assetLibrary||={characters:[],images:[]},o.assetLibrary.characters||=[],o.characters||={};for(const r of e.characters||[]){const n=Object.values(o.characters).find(m=>m.name===r.name),s=n||{name:r.name,color:r.color||"",avatarUrl:r.avatarUrl||""};n||Object.defineProperty(o.characters,r.name,{value:s,enumerable:!0,configurable:!0,writable:!0}),s.avatarUrl||(s.avatarUrl=r.avatarUrl||""),s.emotions={...s.emotions||{}};for(const[m,l]of(r.faces||[]).entries()){const a=l.label||`표정 ${m+1}`;Object.hasOwn(s.emotions,a)||Object.defineProperty(s.emotions,a,{value:l.url,enumerable:!0,configurable:!0,writable:!0}),$(o,"image",{name:`${r.name} · ${a}`,url:l.url})}const c=o.assetLibrary.characters.find(m=>m.name===r.name);c?c.avatarUrl||(c.avatarUrl=s.avatarUrl):o.assetLibrary.characters.push({...s})}for(const r of e.scenes||[]){const n=r.images?.length?r.images:[{url:r.representativeUrl||r.backgroundUrl}];for(const s of n)s.url&&$(o,"image",{name:`${r.name||"룸"} · 배경`,url:s.url})}o.assetLibrary.roomScenes=e.scenes||[],o.assetLibrary.roomSource={filename:i,characterCount:e.characters?.length||0,sceneCount:e.scenes?.length||0,skippedCount:e.stats?.skipped?.length||0}}const tt={props:{source:Object,busy:Boolean},emits:["import"],data(){return{reading:!1,error:""}},methods:{async importFile(o){const e=o.target.files?.[0];if(!(!e||this.reading||this.busy)){this.reading=!0,this.error="";try{const i=await De.parse(e);this.$emit("import",{assets:i,filename:e.name})}catch{this.error="룸 데이터를 읽지 못했어요. 코코포리아의 ‘룸 데이터 내보내기’로 받은 ZIP을 다시 선택해 주세요."}finally{this.reading=!1,o.target.value=""}}}}},nt={class:"room-assets","aria-labelledby":"room-assets-title"},ot={class:"room-columns"},st={class:"room-import"},it={class:"room-file"},rt=["disabled"],at={key:0,role:"status"},lt={key:1,class:"room-error",role:"alert"},dt={class:"room-summary",role:"status"},ct={key:0},ut={key:1};function ht(o,e,i,r,n,s){return d(),u("section",nt,[e[6]||(e[6]=t("h3",{id:"room-assets-title"},"룸 데이터 추가",-1)),e[7]||(e[7]=t("p",{class:"room-intro"},"코코포리아에서 내보낸 캐릭터·표정·배경을 이 로그에 더해요.",-1)),t("div",ot,[t("section",st,[e[2]||(e[2]=t("h4",null,"파일 선택",-1)),e[3]||(e[3]=t("p",null,"코코포리아의 ‘룸 데이터 내보내기’로 받은 ZIP을 선택하세요.",-1)),t("label",it,[e[1]||(e[1]=I(" 룸 데이터 ZIP ",-1)),t("input",{ref:"file",type:"file",accept:".zip",disabled:n.reading||i.busy,onChange:e[0]||(e[0]=(...c)=>s.importFile&&s.importFile(...c))},null,40,rt)]),n.reading?(d(),u("p",at,"룸 데이터를 읽고 있어요…")):T("",!0),n.error?(d(),u("p",lt,g(n.error),1)):T("",!0)]),e[5]||(e[5]=t("section",{class:"room-preservation"},[t("h4",null,"기존 설정과 함께 사용"),t("p",null,"이미 있는 캐릭터의 이름·색상·이미지는 유지하고, 같은 이름에 새 표정을 연결해요."),t("p",null,"추가한 자료는 캐릭터·이미지 탭에서 확인하고 대사·연출에서 선택하세요.")],-1)),t("section",dt,[e[4]||(e[4]=t("h4",null,"추가한 룸 데이터",-1)),i.source?(d(),u(v,{key:0},[t("p",null,g(i.source.filename),1),t("p",null,"캐릭터 "+g(i.source.characterCount)+"명 · 장면 "+g(i.source.sceneCount)+"개",1),i.source.skippedCount?(d(),u("p",ct,"이미지 "+g(i.source.skippedCount)+"개를 가져오지 못했어요. 이미지 탭에서 다시 추가할 수 있어요.",1)):T("",!0)],64)):(d(),u("p",ut,"아직 추가한 룸 데이터가 없어요."))])])])}const pt=L(tt,[["render",ht],["__scopeId","data-v-4265eaac"]]),ft={props:{modelValue:{type:String,default:""},label:{type:String,default:"캐릭터 색상"}},emits:["update:modelValue"],data(){return{lastColor:"#a9bdf2",error:""}},computed:{resolvedColor(){return z(this.modelValue)},swatch(){if(/^#[\da-f]{6}$/i.test(this.resolvedColor))return this.resolvedColor;if(/^#[\da-f]{3}$/i.test(this.resolvedColor))return"#"+[...this.resolvedColor.slice(1)].map(o=>o+o).join("");if(this.resolvedColor){const o=document.createElement("span");o.style.cssText="position:fixed;visibility:hidden;pointer-events:none",o.style.color=this.resolvedColor,document.body.append(o);const e=getComputedStyle(o).color.match(/^rgba?\(\s*(\d+)[, ]+\s*(\d+)[, ]+\s*(\d+)/i);if(o.remove(),e)return"#"+e.slice(1).map(i=>Number(i).toString(16).padStart(2,"0")).join("")}return"#a9bdf2"}},methods:{setAutomatic(o){this.error="",o&&this.resolvedColor&&(this.lastColor=this.resolvedColor),this.$emit("update:modelValue",o?"":this.lastColor)},setColor(o){const e=z(o);if(e&&!CSS.supports("color",e)){this.error="사용할 수 있는 색상값을 입력하거나 색 없음으로 바꿔 주세요.";return}this.error="",this.$emit("update:modelValue",e)}}},mt={class:"character-color-input"},gt={class:"color-mode"},Tt=["checked"],St={key:0,class:"color-fields"},It=["value","aria-label"],bt=["value","aria-label"],Et={key:1,role:"alert"};function yt(o,e,i,r,n,s){return d(),u("div",mt,[t("label",gt,[t("input",{type:"checkbox",checked:!s.resolvedColor,onChange:e[0]||(e[0]=c=>s.setAutomatic(c.target.checked))},null,40,Tt),e[3]||(e[3]=I("색 없음 · 테마에 맞춤",-1))]),s.resolvedColor?(d(),u("div",St,[t("input",{type:"color",value:s.swatch,"aria-label":i.label+" 고르기",onInput:e[1]||(e[1]=c=>o.$emit("update:modelValue",c.target.value))},null,40,It),t("input",{type:"text",value:s.resolvedColor,"aria-label":i.label+" 값",placeholder:"#a9bdf2",onChange:e[2]||(e[2]=c=>s.setColor(c.target.value))},null,40,bt)])):T("",!0),n.error?(d(),u("p",Et,g(n.error),1)):T("",!0)])}const ie=L(ft,[["render",yt],["__scopeId","data-v-c66fa9bc"]]),Ot={props:{label:{type:String,default:"보관한 이미지"},modelValue:{type:String,default:""},currentLabel:{type:String,default:"현재 선택한 이미지"},resetAfterSelect:{type:Boolean,default:!1}},emits:["select","update:modelValue"],setup(){return{store:G()}},computed:{images(){const o=K(this.store.vnData);return this.modelValue&&!o.some(e=>e.url===this.modelValue)&&o.push({url:this.modelValue,name:this.currentLabel}),o},selectedIndex(){const o=this.images.findIndex(e=>e.url===this.modelValue);return this.resetAfterSelect||o<0?"":String(o)}},methods:{choose(o){const e=this.images[Number(o.target.value)];o.target.value!==""&&e&&(this.$emit("update:modelValue",e.url),this.$emit("select",e.url)),this.resetAfterSelect?o.target.value="":o.target.value===""&&this.$emit("update:modelValue","")}}},Rt={class:"library-image-select"},vt=["aria-label","value"],Nt=["value"];function At(o,e,i,r,n,s){return d(),u("label",Rt,[I(g(i.label),1),t("select",{"aria-label":i.label,value:s.selectedIndex,onChange:e[0]||(e[0]=(...c)=>s.choose&&s.choose(...c))},[e[1]||(e[1]=t("option",{value:""},"등록·사용한 이미지에서 선택",-1)),(d(!0),u(v,null,N(s.images,(c,m)=>(d(),u("option",{key:c.url,value:m},g(c.name),9,Nt))),128))],40,vt)])}const re=L(Ot,[["render",At],["__scopeId","data-v-524b3172"]]),wt={components:{LibraryImageSelect:re,CharacterColorInput:ie},props:{kind:{type:String,required:!0}},emits:["register","dirty"],setup(){return{store:G()}},data(){return{name:"",color:"",url:"",busy:!1,error:"",imageReady:!1,imageFailed:!1}},computed:{isDirty(){return!!(this.name||this.color||this.url)}},watch:{isDirty(o){this.$emit("dirty",o)},url(o){this.imageReady=!1,this.imageFailed=!1,this.error=o&&!x(o)?"올바른 이미지 주소나 파일을 선택해 주세요.":""}},methods:{resetForm(){this.name="",this.color="",this.url="",this.error=""},safeSrc:x,async readFile(o){const e=o.target.files[0];if(e){if(this.error="",!e.type.startsWith("image/")||e.size>10*1024*1024){this.error="10MB 이하 이미지 파일을 선택해 주세요.",o.target.value="";return}this.busy=!0;try{this.url=await new Promise((i,r)=>{const n=new FileReader;n.onload=()=>i(n.result),n.onerror=r,n.readAsDataURL(e)}),!this.name&&this.kind==="image"&&(this.name=e.name.replace(/\.[^.]+$/,""))}catch{this.error="이미지 파일을 읽지 못했어요."}finally{this.busy=!1,o.target.value=""}}},submit(){if(this.busy||this.url&&!this.imageReady)return;this.error="";const o=x(this.url.trim());if(!this.name.trim()||this.url&&!o||this.kind==="image"&&!o){this.error="이름과 올바른 이미지 주소 또는 파일을 확인해 주세요.";return}if(this.kind==="character"?j(this.store.vnData).some(e=>e.name===this.name.trim()):K(this.store.vnData).some(e=>e.url===o)){this.error="이미 있는 항목이에요. 아래 목록에서 선택해 수정하세요.";return}this.$emit("register",{kind:this.kind,asset:{name:this.name.trim(),color:this.color,url:o,avatarUrl:o}}),this.resetForm()}}},Ct={class:"asset-registration"},Lt=["aria-label"],Dt=["value","readonly"],Ht=["src"],Ut={key:4,role:"alert"},kt=["disabled"];function Ft(o,e,i,r,n,s){const c=R("CharacterColorInput"),m=R("LibraryImageSelect");return d(),u("details",Ct,[t("summary",null,g(i.kind==="character"?"캐릭터 등록":"이미지 등록"),1),t("form",{onSubmit:e[8]||(e[8]=Y((...l)=>s.submit&&s.submit(...l),["prevent"]))},[e[10]||(e[10]=t("p",null,"아직 대사에 쓰지 않은 항목도 보관할 수 있어요. 대사·연출에서 골라 사용하세요.",-1)),t("label",null,[I(g(i.kind==="character"?"캐릭터 이름":"이미지 이름"),1),S(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>n.name=l),"aria-label":i.kind==="character"?"등록할 캐릭터 이름":"등록할 이미지 이름",required:"",maxlength:"120"},null,8,Lt),[[y,n.name,void 0,{trim:!0}]])]),i.kind==="character"?(d(),k(c,{key:0,modelValue:n.color,"onUpdate:modelValue":e[1]||(e[1]=l=>n.color=l),label:"등록할 캐릭터 색상"},null,8,["modelValue"])):T("",!0),i.kind==="character"?(d(),k(m,{key:1,label:"캐릭터 이미지 선택",modelValue:n.url,"onUpdate:modelValue":e[2]||(e[2]=l=>n.url=l)},null,8,["modelValue"])):T("",!0),t("label",null,[I(g(i.kind==="character"?"캐릭터 이미지 주소 (선택)":"이미지 주소"),1),t("input",{value:n.url.startsWith("data:")?"선택한 이미지 파일":n.url,readonly:n.url.startsWith("data:"),onInput:e[3]||(e[3]=l=>n.url=l.target.value),"aria-label":"등록할 이미지 주소",placeholder:"https://…"},null,40,Dt)]),t("label",null,[e[9]||(e[9]=I("이미지 파일",-1)),t("input",{type:"file",accept:"image/*","aria-label":"등록할 이미지 파일",onChange:e[4]||(e[4]=(...l)=>s.readFile&&s.readFile(...l))},null,32)]),s.safeSrc(n.url)&&!n.imageFailed?(d(),u("img",{key:n.url,src:s.safeSrc(n.url),alt:"등록할 이미지 미리보기",onLoad:e[5]||(e[5]=l=>n.imageReady=!0),onError:e[6]||(e[6]=l=>{n.imageFailed=!0,n.error="이미지를 열지 못했어요. 주소를 확인하거나 다른 이미지 파일을 선택해 주세요."})},null,40,Ht)):T("",!0),n.url?(d(),u("button",{key:3,type:"button",onClick:e[7]||(e[7]=l=>n.url="")},"이미지 비우기")):T("",!0),n.error?(d(),u("p",Ut,g(n.error),1)):T("",!0),t("button",{type:"submit",disabled:n.busy||n.url&&!n.imageReady||r.store.editInProgress},g(n.busy?"파일 읽는 중…":n.url&&!n.imageReady&&!n.imageFailed?"이미지 확인 중…":"등록하기"),9,kt)],32)])}const Pt=L(wt,[["render",Ft],["__scopeId","data-v-e21ba609"]]),xt={components:{AppIcon:M,LibraryImageSelect:re},name:"StepEffectsEditor",mixins:[X],props:{totalSteps:{type:Number,required:!0},selectedStep:{type:Number,default:null},currentEffects:{type:Object,default:null},currentIllustrations:{type:Array,default:()=>[]}},data(){return{logStore:G(),effectKinds:se,draftBaseline:null,rangeMode:"new",activeEffect:"background",effectOptions:[{key:"background",label:"배경",icon:"photo"},{key:"bgm",label:"음악",icon:"music"},{key:"sfx",label:"효과음",icon:"volume"},{key:"illustration",label:"일러스트",icon:"document"}],rangeSearch:"",rangeKind:"",visibleRangeCount:50,editingRange:null,trimOriginalRange:!0,startStep:1,endStep:1,effects:{sfx:"",bgm:"",background:"",backgroundOpacity:.3},isLoadingFile:!1,backgroundFileName:"",showRemoveConfirm:!1,includeIllustrations:!1,selectedPaletteIndex:null,expandedSceneIndex:null}},computed:{draftValue(){return{effects:this.effects,startStep:this.startStep,endStep:this.endStep,includeIllustrations:this.includeIllustrations,trimOriginalRange:this.trimOriginalRange}},isDirty(){return!!this.draftBaseline&&!oe(this.draftValue,this.draftBaseline)},activeEffectLabel(){return this.effectOptions.find(o=>o.key===this.activeEffect)?.label||"효과"},allSteps(){return(this.logStore.vnData?.scenes||[]).flatMap(o=>o.steps||[])},sceneRanges(){let o=0;return(this.logStore.vnData?.scenes||[]).map((e,i)=>{const r=o+1;return o+=(e.steps||[]).length,{start:r,end:o,label:e.name||e.title||`장면 ${i+1}`}}).filter(e=>e.end>=e.start)},selectedScene(){return this.sceneRanges.find(o=>this.selectedStep>=o.start&&this.selectedStep<=o.end)},foundSteps(){const o=this.rangeSearch.trim().toLocaleLowerCase();return this.allSteps.map((e,i)=>({step:e,number:i+1})).filter(e=>!o||`${e.step.character?.name||""} ${e.step.text||""}`.toLocaleLowerCase().includes(o)).slice(0,30)},savedRanges(){return Ge(this.allSteps,this.rangeKind)},canApply(){return q(this.startStep,this.endStep,this.totalSteps)},hasAnyEffect(){return this.effects.sfx||this.effects.bgm||this.effects.background},canApplyAll(){return!this.isLoadingFile&&this.canApply&&(this.activeEffect==="illustration"?this.includeIllustrations&&this.selectedStep!==null:!!this.effects[this.activeEffect])},currentIllustrationsCount(){return Array.isArray(this.currentIllustrations)?this.currentIllustrations.length:0},scenePaletteItems(){const o=this.logStore.vnData.assetLibrary?.roomScenes||this.logStore.roomAssets?.scenes;return Array.isArray(o)?o.filter(e=>e.representativeUrl||e.backgroundUrl):[]},expandedScene(){return this.expandedSceneIndex===null?null:this.scenePaletteItems[this.expandedSceneIndex]||null},removeRangeLabel(){return this.startStep===this.endStep?`스텝 ${this.startStep}`:`스텝 ${this.startStep}~${this.endStep}`}},methods:{markDraftBaseline(){this.draftBaseline=ne(this.draftValue)},discardDraft(){this.resetForm(),this.loadStepEffects(),this.markDraftBaseline()},emitPreview(){this.$emit("preview",{effects:{...this.effects},kind:this.activeEffect,startStep:this.startStep,endStep:this.endStep})},changeRangeMode(o){this.rangeMode!==o&&(this.rangeMode=o,this.resetForm(),this.loadStepEffects())},setRange(o,e){this.startStep=o,this.endStep=e},chooseScene(o){const e=this.sceneRanges[Number(o.target.value)];o.target.value!==""&&e&&this.setRange(e.start,e.end),o.target.value=""},stepLabel(o){const e=this.allSteps[o-1];return e?`${o}. ${e.character?.name||"시스템"} · ${(e.text||"").slice(0,70)}`:""},editRange(o){this.resetForm(),this.editingRange={...o,stepIds:this.allSteps.slice(o.startStep-1,o.endStep).map(e=>e.id)},this.rangeMode="existing",this.activeEffect=o.key,this.trimOriginalRange=!0,this.setRange(o.startStep,o.endStep),this.effects[o.key]=o.value,o.key==="background"&&(this.effects.backgroundOpacity=o.opacity),this.$nextTick(()=>{this.$el.querySelector(".editor-body").scrollTop=0,this.$el.querySelector("#see-start-step").focus({preventScroll:!0})})},cancelRangeEdit(){this.resetForm(),this.loadStepEffects()},formatPreviewUrl(o){return o?o.startsWith("data:")?`[로컬 ${o.split(";")[0].split(":")[1].split("/")[0]==="audio"?"오디오":"이미지"} 파일]`:o:""},async handleSfxFileSelect(o){const e=o.target.files[0];if(e){if(e.size>5*1024*1024){this.$toast("효과음 파일은 5MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const i=await this.fileToBase64(e);this.effects.sfx=i,e.name,e.size,i.length}catch(i){console.error("[StepEffectsEditor] 파일 로드 실패:",i),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}}},fileToBase64(o){return new Promise((e,i)=>{const r=new FileReader;r.onload=()=>e(r.result),r.onerror=i,r.readAsDataURL(o)})},clearSfx(){this.effects.sfx=""},async handleBgmFileSelect(o){const e=o.target.files[0];if(e){if(e.size>10*1024*1024){this.$toast("BGM 파일은 10MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const i=await this.fileToBase64(e);this.effects.bgm=i,e.name,e.size,i.length}catch(i){console.error("[StepEffectsEditor] 파일 로드 실패:",i),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}}},clearBgm(){this.effects.bgm=""},async handleBgFileSelect(o){const e=o.target.files[0];if(e){if(e.size>2*1024*1024){this.$toast("이미지 파일은 2MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const i=await this.fileToBase64(e);this.effects.background=i,this.backgroundFileName=e.name,e.name,e.size,i.length}catch(i){console.error("[StepEffectsEditor] 파일 로드 실패:",i),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}}},clearBackground(){this.effects.background=""},safeSrc(o){return x(o)},sceneThumbUrl(o){return o.representativeUrl||o.backgroundUrl},sceneImages(o){return Array.isArray(o.images)&&o.images.length>0?o.images:o.backgroundUrl?[{url:o.backgroundUrl,source:"background"}]:[]},sourceLabel(o){return{background:"배경",foreground:"전경",marker:"오브젝트"}[o]||"이미지"},applySceneBackground(o,e){this.effects.background=this.sceneThumbUrl(o),this.selectedPaletteIndex=e},toggleSceneImages(o){this.expandedSceneIndex=this.expandedSceneIndex===o?null:o},applySceneImage(o){this.effects.background=o,this.selectedPaletteIndex=this.expandedSceneIndex},isSceneSelected(o,e){return this.selectedPaletteIndex===e&&this.sceneImages(o).some(i=>i.url===this.effects.background)},isSceneImageSelected(o){return this.expandedSceneIndex!==null&&this.expandedSceneIndex===this.selectedPaletteIndex&&this.effects.background===o.url},convertToDirectURL(o){if(!o||!o.trim())return o;const e=o.trim();if(e.startsWith("data:"))return e;const i=e.match(/drive\.google\.com\/file\/d\/([^\/\?]+)/);return i?`https://docs.google.com/uc?export=download&id=${i[1]}`:e.includes("dropbox.com")?e.replace(/[?&]dl=0/,"?dl=1"):e.includes("1drv.ms")||e.includes("onedrive.live.com")?e.replace("/embed?","/download?"):e},applyAll(){if(!this.canApplyAll)return;let o=null;if(this.activeEffect==="illustration"&&this.includeIllustrations&&(o=JSON.parse(JSON.stringify(this.currentIllustrations||[])),o.length===0&&!confirm(`현재 스텝의 일러스트가 비어 있어요.
지정한 범위의 일러스트를 모두 제거할까요?`)))return;const e={};this.activeEffect==="sfx"&&this.effects.sfx&&(e.sfx=this.convertToDirectURL(this.effects.sfx)),this.activeEffect==="bgm"&&this.effects.bgm&&(e.bgm=this.convertToDirectURL(this.effects.bgm)),this.activeEffect==="background"&&this.effects.background&&(e.background=this.convertToDirectURL(this.effects.background),e.backgroundOpacity=this.effects.backgroundOpacity),this.$emit("apply",{startStep:this.startStep,endStep:this.endStep,effects:e,illustrations:o,replaceRange:this.editingRange&&this.trimOriginalRange?{...this.editingRange}:null,onComplete:i=>this.finishOperation(i,e)})},removeEffects(){this.canApply&&(this.showRemoveConfirm=!0,this.activateFocusTrap("removeConfirmModal"))},confirmRemoveEffects(){this.showRemoveConfirm=!1,this.deactivateFocusTrap(),this.$emit("remove",{startStep:this.startStep,endStep:this.endStep,kind:this.activeEffect,onComplete:this.finishOperation})},cancelRemoveEffects(){this.showRemoveConfirm=!1,this.deactivateFocusTrap()},finishOperation(o,e=null){if(o){if(e){this.editingRange=null,this.effects={...this.effects,...e},this.markDraftBaseline();return}this.resetForm(),this.loadStepEffects(!1),this.markDraftBaseline()}},resetForm(){this.editingRange=null,this.backgroundFileName="",this.effects={sfx:"",bgm:"",background:"",backgroundOpacity:.3},this.includeIllustrations=!1,this.selectedPaletteIndex=null,this.expandedSceneIndex=null,this.markDraftBaseline()},loadStepEffects(o=!0){o&&this.selectedStep!==null&&(this.startStep=this.selectedStep,this.endStep=this.selectedStep),this.currentEffects&&(this.effects={sfx:this.currentEffects.sfx||"",bgm:this.currentEffects.bgm||"",background:this.currentEffects.background||"",backgroundOpacity:this.currentEffects.backgroundOpacity??.3})}},watch:{isDirty(o){this.$emit("dirty",o)},effects:{deep:!0,handler(){this.emitPreview()}},activeEffect(){this.emitPreview()},startStep(){this.emitPreview()},endStep(){this.emitPreview()},selectedStep:{immediate:!0,handler(){this.resetForm(),this.loadStepEffects(),this.markDraftBaseline()}},currentEffects:{immediate:!0,handler(){!this.editingRange&&!this.isDirty&&(this.loadStepEffects(!1),this.markDraftBaseline())}},"effects.background"(o){if(this.selectedPaletteIndex===null)return;const e=this.scenePaletteItems[this.selectedPaletteIndex];(!e||!this.sceneImages(e).some(i=>i.url===o))&&(this.selectedPaletteIndex=null)}}},Vt={class:"step-effects-editor"},Mt={class:"editor-header"},Wt={class:"effect-task-nav","aria-label":"효과 작업 선택"},Bt=["aria-pressed"],Yt=["aria-pressed"],Gt={class:"editor-body"},_t={key:0,class:"saved-ranges"},zt=["value"],jt={key:0},Kt={class:"saved-range-list"},qt=["onClick"],Xt={class:"range-workflow"},Jt={key:0,class:"editing-context"},Zt={class:"section"},Qt={class:"range-shortcuts"},$t=["disabled"],en=["disabled"],tn={class:"scene-range-label"},nn=["value"],on={class:"step-range"},sn={class:"input-group"},rn=["max"],an={class:"input-group"},ln=["min","max"],dn={key:0,class:"range-summary",role:"status"},cn={key:1,class:"range-error",role:"alert"},un={key:2,class:"range-boundaries"},hn={class:"range-picker"},pn=["onClick"],fn=["onClick"],mn={key:0},gn={key:3,class:"range-edit-status"},Tn={class:"hint-text"},Sn={class:"effect-settings"},In={class:"effect-settings-heading"},bn={class:"workflow-heading"},En={key:0,class:"effect-kind-nav","aria-label":"설정할 효과"},yn=["aria-pressed","onClick"],On={class:"hint-text"},Rn={class:"section effect-fields"},vn={class:"file-input-group"},Nn=["value","readonly"],An={class:"hint-text"},wn={class:"section effect-fields"},Cn={class:"file-input-group"},Ln=["value","readonly"],Dn={class:"hint-text"},Hn={class:"section effect-fields"},Un={class:"file-input-group"},kn=["value","readonly"],Fn={class:"hint-text"},Pn={key:0,class:"scene-palette-block"},xn={class:"scene-palette",role:"group","aria-labelledby":"scene-palette-title"},Vn=["aria-label","aria-pressed","onClick"],Mn=["src"],Wn={class:"scene-thumb-name"},Bn=["aria-label","aria-expanded","onClick"],Yn=["aria-label"],Gn=["aria-label","aria-pressed","onClick"],_n=["src"],zn={class:"scene-image-option-label"},jn={key:1,class:"scene-palette-block"},Kn={key:2,class:"opacity-control"},qn={for:"see-bg-opacity"},Xn={class:"section effect-fields"},Jn={class:"illustration-toggle"},Zn=["disabled"],Qn={key:0,class:"section preview-section"},$n={class:"preview-list"},eo={key:0,class:"preview-item"},to={key:1,class:"preview-item"},no={key:2,class:"preview-item"},oo={key:3,class:"preview-item"},so={class:"actions"},io=["disabled"],ro=["disabled"],ao={class:"modal-container remove-confirm-container",ref:"removeConfirmModal",tabindex:"-1",role:"dialog","aria-modal":"true","aria-labelledby":"effects-remove-title"},lo={class:"modal-header"},co={id:"effects-remove-title"},uo={class:"remove-confirm-message"},ho={class:"remove-confirm-buttons"};function po(o,e,i,r,n,s){const c=R("AppIcon"),m=R("LibraryImageSelect");return d(),u("div",Vt,[t("div",Mt,[t("h3",null,[p(c,{name:"sparkles",size:20}),e[34]||(e[34]=I(" 배경과 소리 ",-1))])]),t("nav",Wt,[t("button",{"aria-pressed":n.rangeMode==="new",onClick:e[0]||(e[0]=l=>s.changeRangeMode("new"))},"새로 적용",8,Bt),t("button",{"aria-pressed":n.rangeMode==="existing",onClick:e[1]||(e[1]=l=>s.changeRangeMode("existing"))},[e[35]||(e[35]=I("적용된 효과 수정 ",-1)),t("span",null,g(s.savedRanges.length),1)],8,Yt)]),t("div",Gt,[n.rangeMode==="existing"&&!n.editingRange?(d(),u("section",_t,[t("h4",null,[e[36]||(e[36]=I("수정할 효과를 선택하세요 ",-1)),t("span",null,g(s.savedRanges.length),1)]),e[38]||(e[38]=t("p",{class:"hint-text"},"같은 효과가 연속된 대사를 묶어서 보여줘요. 범위를 누르면 해당 효과만 불러와 수정해요. 따로 적용했어도 값이 같고 이어져 있으면 하나로 표시돼요.",-1)),S(t("select",{"onUpdate:modelValue":e[2]||(e[2]=l=>n.rangeKind=l),"aria-label":"효과 범위 종류"},[e[37]||(e[37]=t("option",{value:""},"모든 효과",-1)),(d(!0),u(v,null,N(n.effectKinds,l=>(d(),u("option",{key:l.key,value:l.key},g(l.label),9,zt))),128))],512),[[V,n.rangeKind]]),s.savedRanges.length?T("",!0):(d(),u("p",jt,"아직 적용된 효과가 없어요.")),t("div",Kt,[(d(!0),u(v,null,N(s.savedRanges.slice(0,n.visibleRangeCount),l=>(d(),u("button",{key:l.key+":"+l.startStep,onClick:a=>s.editRange(l)},[t("strong",null,g(l.label)+" · "+g(l.startStep)+"~"+g(l.endStep)+"번",1),t("span",null,g(s.stepLabel(l.startStep)),1)],8,qt))),128))]),s.savedRanges.length>n.visibleRangeCount?(d(),u("button",{key:1,onClick:e[3]||(e[3]=l=>n.visibleRangeCount+=50)},"범위 더 보기")):T("",!0)])):T("",!0),S(t("div",Xt,[n.editingRange?(d(),u("div",Jt,[t("span",null,g(n.editingRange.label)+" · 원래 "+g(n.editingRange.startStep)+"~"+g(n.editingRange.endStep)+"번",1),t("button",{onClick:e[4]||(e[4]=(...l)=>s.cancelRangeEdit&&s.cancelRangeEdit(...l))},"다른 범위 선택")])):T("",!0),t("div",Zt,[e[47]||(e[47]=t("h4",{class:"workflow-heading"},[t("span",null,"1"),I(" 적용 범위")],-1)),t("div",Qt,[t("button",{disabled:!i.selectedStep,onClick:e[5]||(e[5]=l=>s.setRange(i.selectedStep,i.selectedStep))},"선택한 대사만",8,$t),t("button",{disabled:!s.selectedScene,onClick:e[6]||(e[6]=l=>s.setRange(s.selectedScene.start,s.selectedScene.end))},"현재 장면",8,en),t("button",{onClick:e[7]||(e[7]=l=>s.setRange(1,i.totalSteps))},"전체 대사")]),t("label",tn,[e[40]||(e[40]=I("장면으로 범위 잡기 ",-1)),t("select",{"aria-label":"범위로 사용할 장면",onChange:e[8]||(e[8]=l=>s.chooseScene(l))},[e[39]||(e[39]=t("option",{value:""},"장면 선택",-1)),(d(!0),u(v,null,N(s.sceneRanges,(l,a)=>(d(),u("option",{key:a,value:a},g(l.label)+" · "+g(l.start)+"~"+g(l.end)+"번",9,nn))),128))],32)]),t("div",on,[t("div",sn,[e[41]||(e[41]=t("label",{for:"see-start-step"},"시작 스텝",-1)),S(t("input",{id:"see-start-step","onUpdate:modelValue":e[9]||(e[9]=l=>n.startStep=l),type:"number",min:1,max:i.totalSteps,placeholder:"1"},null,8,rn),[[y,n.startStep,void 0,{number:!0}]])]),t("div",an,[e[42]||(e[42]=t("label",{for:"see-end-step"},"종료 스텝",-1)),S(t("input",{id:"see-end-step","onUpdate:modelValue":e[10]||(e[10]=l=>n.endStep=l),type:"number",min:n.startStep,max:i.totalSteps,placeholder:"1"},null,8,ln),[[y,n.endStep,void 0,{number:!0}]])])]),s.canApply?(d(),u("p",dn,g(n.startStep)+"~"+g(n.endStep)+"번 · "+g(n.endStep-n.startStep+1)+"개 대사",1)):(d(),u("p",cn,"1~"+g(i.totalSteps)+" 사이의 정수로, 시작보다 같거나 뒤인 종료 번호를 입력해 주세요.",1)),s.canApply?(d(),u("div",un,[t("p",null,[e[43]||(e[43]=t("strong",null,"시작",-1)),I(" "+g(s.stepLabel(n.startStep)),1)]),t("p",null,[e[44]||(e[44]=t("strong",null,"끝",-1)),I(" "+g(s.stepLabel(n.endStep)),1)])])):T("",!0),t("details",hn,[e[45]||(e[45]=t("summary",null,"대사를 찾아 시작·끝 정하기",-1)),S(t("input",{"onUpdate:modelValue":e[11]||(e[11]=l=>n.rangeSearch=l),type:"search","aria-label":"범위 대사 검색",placeholder:"인물이나 대사 찾기"},null,512),[[y,n.rangeSearch]]),e[46]||(e[46]=t("p",{class:"hint-text"},"검색 결과 중 앞 30개를 표시해요.",-1)),(d(!0),u(v,null,N(s.foundSteps,l=>(d(),u("div",{key:l.number,class:"range-pick-row"},[t("span",null,g(s.stepLabel(l.number)),1),t("button",{onClick:a=>s.setRange(l.number,Math.max(l.number,n.endStep||l.number))},"시작",8,pn),t("button",{onClick:a=>s.setRange(Math.min(n.startStep||l.number,l.number),l.number)},"끝",8,fn)]))),128)),s.foundSteps.length?T("",!0):(d(),u("p",mn,"찾은 대사가 없어요."))]),n.editingRange?(d(),u("div",gn,[t("p",null,[t("strong",null,g(n.editingRange.label)+" "+g(n.editingRange.startStep)+"~"+g(n.editingRange.endStep)+"번 수정 중",1)]),t("label",null,[S(t("input",{"onUpdate:modelValue":e[12]||(e[12]=l=>n.trimOriginalRange=l),type:"checkbox"},null,512),[[H,n.trimOriginalRange]]),I(" 범위에서 빠진 대사의 기존 "+g(n.editingRange.label)+" 지우기",1)]),t("p",Tn,"새 범위의 "+g(n.editingRange.label)+"은 덮어써요. 다른 종류의 효과는 유지해요.",1)])):T("",!0)]),t("div",Sn,[t("div",In,[t("h4",bn,[e[48]||(e[48]=t("span",null,"2",-1)),I(" "+g(n.editingRange?n.editingRange.label+" 설정":"효과 설정"),1)]),n.editingRange?T("",!0):(d(),u("div",En,[(d(!0),u(v,null,N(n.effectOptions,l=>(d(),u("button",{key:l.key,"aria-pressed":n.activeEffect===l.key,onClick:a=>n.activeEffect=l.key},[p(c,{name:l.icon,size:17},null,8,["name"]),I(g(l.label),1)],8,yn))),128))])),t("p",On,g(s.activeEffectLabel)+"만 적용해요. 나머지 효과는 그대로 남아요.",1)]),S(t("section",Rn,[t("h4",null,[p(c,{name:"volume",size:16}),e[49]||(e[49]=I(" 효과음 (SFX) ",-1))]),t("div",vn,[t("input",{value:n.effects.sfx.startsWith("data:")?"로그에 담긴 효과음 파일":n.effects.sfx,readonly:n.effects.sfx.startsWith("data:"),onInput:e[13]||(e[13]=l=>n.effects.sfx=l.target.value),type:"text",placeholder:"효과음 URL 입력 또는 파일 선택 버튼 클릭",class:"url-input","aria-label":"효과음 URL"},null,40,Nn),t("input",{ref:"sfxFileInput",type:"file",accept:"audio/*",onChange:e[14]||(e[14]=(...l)=>s.handleSfxFileSelect&&s.handleSfxFileSelect(...l)),style:{display:"none"}},null,544),t("button",{onClick:e[15]||(e[15]=l=>o.$refs.sfxFileInput.click()),class:"file-select-button"},[p(c,{name:"folder",size:14}),e[50]||(e[50]=I(" 파일 선택 ",-1))]),n.effects.sfx?(d(),u("button",{key:0,onClick:e[16]||(e[16]=(...l)=>s.clearSfx&&s.clearSfx(...l)),"aria-label":"효과음 선택 비우기",class:"clear-button"},[p(c,{name:"close",size:14})])):T("",!0)]),t("p",An,[p(c,{name:"info",size:12}),e[51]||(e[51]=I(" 선택한 파일은 로그에 함께 보관돼요. ",-1))])],512),[[A,n.activeEffect==="sfx"]]),S(t("section",wn,[t("h4",null,[p(c,{name:"music",size:16}),e[52]||(e[52]=I(" 배경음악 (BGM) ",-1))]),t("div",Cn,[t("input",{value:n.effects.bgm.startsWith("data:")?"로그에 담긴 음악 파일":n.effects.bgm,readonly:n.effects.bgm.startsWith("data:"),onInput:e[17]||(e[17]=l=>n.effects.bgm=l.target.value),type:"text",placeholder:"BGM URL (YouTube) 입력 또는 파일 선택 버튼 클릭",class:"url-input","aria-label":"BGM URL"},null,40,Ln),t("input",{ref:"bgmFileInput",type:"file",accept:"audio/*",onChange:e[18]||(e[18]=(...l)=>s.handleBgmFileSelect&&s.handleBgmFileSelect(...l)),style:{display:"none"}},null,544),t("button",{onClick:e[19]||(e[19]=l=>o.$refs.bgmFileInput.click()),class:"file-select-button"},[p(c,{name:"folder",size:14}),e[53]||(e[53]=I(" 파일 선택 ",-1))]),n.effects.bgm?(d(),u("button",{key:0,onClick:e[20]||(e[20]=(...l)=>s.clearBgm&&s.clearBgm(...l)),"aria-label":"음악 선택 비우기",class:"clear-button"},[p(c,{name:"close",size:14})])):T("",!0)]),t("p",Dn,[p(c,{name:"info",size:12}),e[54]||(e[54]=I(" 음원 파일이나 YouTube 주소를 사용할 수 있어요. ",-1))])],512),[[A,n.activeEffect==="bgm"]]),S(t("section",Hn,[p(m,{label:"배경 이미지 고르기",modelValue:n.effects.background,"onUpdate:modelValue":e[21]||(e[21]=l=>n.effects.background=l),"current-label":n.backgroundFileName||"현재 선택한 배경"},null,8,["modelValue","current-label"]),t("h4",null,[p(c,{name:"photo",size:16}),e[55]||(e[55]=I(" 배경 이미지 ",-1))]),t("div",Un,[t("input",{value:n.effects.background.startsWith("data:")?"로그에 담긴 배경 이미지 파일":n.effects.background,readonly:n.effects.background.startsWith("data:"),onInput:e[22]||(e[22]=l=>n.effects.background=l.target.value),type:"text",placeholder:"배경 이미지 URL 입력 또는 파일 선택 버튼 클릭",class:"url-input","aria-label":"배경 이미지 URL"},null,40,kn),t("input",{ref:"bgFileInput",type:"file",accept:"image/*",onChange:e[23]||(e[23]=(...l)=>s.handleBgFileSelect&&s.handleBgFileSelect(...l)),style:{display:"none"}},null,544),t("button",{onClick:e[24]||(e[24]=l=>o.$refs.bgFileInput.click()),class:"file-select-button"},[p(c,{name:"folder",size:14}),e[56]||(e[56]=I(" 파일 선택 ",-1))]),n.effects.background?(d(),u("button",{key:0,onClick:e[25]||(e[25]=(...l)=>s.clearBackground&&s.clearBackground(...l)),"aria-label":"배경 이미지 선택 비우기",class:"clear-button"},[p(c,{name:"close",size:14})])):T("",!0)]),t("p",Fn,[p(c,{name:"info",size:12}),e[57]||(e[57]=I(" 선택한 이미지는 로그에 함께 보관돼요. ",-1))]),s.scenePaletteItems.length>0?(d(),u("div",Pn,[e[58]||(e[58]=t("span",{class:"palette-title",id:"scene-palette-title"},"씬 배경 팔레트 (룸 데이터)",-1)),t("div",xn,[(d(!0),u(v,null,N(s.scenePaletteItems,(l,a)=>(d(),u("div",{key:a,class:"scene-thumb-wrap"},[t("button",{type:"button",class:w(["scene-thumb",{selected:s.isSceneSelected(l,a)}]),"aria-label":`배경 적용: ${l.name||"씬"}`,"aria-pressed":s.isSceneSelected(l,a)?"true":"false",onClick:b=>s.applySceneBackground(l,a)},[t("img",{src:s.safeSrc(s.sceneThumbUrl(l)),alt:"",class:"scene-thumb-img"},null,8,Mn),t("span",Wn,g(l.name||"씬"),1)],10,Vn),s.sceneImages(l).length>1?(d(),u("button",{key:0,type:"button",class:w(["scene-thumb-badge",{open:n.expandedSceneIndex===a}]),"aria-label":`${l.name||"씬"}의 다른 이미지 ${s.sceneImages(l).length-1}장 보기`,"aria-expanded":n.expandedSceneIndex===a?"true":"false",onClick:b=>s.toggleSceneImages(a)}," +"+g(s.sceneImages(l).length-1),11,Bn)):T("",!0)]))),128))]),s.expandedScene?(d(),u("div",{key:0,class:"scene-image-row",role:"group","aria-label":`${s.expandedScene.name||"씬"}의 이미지 선택`},[(d(!0),u(v,null,N(s.sceneImages(s.expandedScene),(l,a)=>(d(),u("button",{key:a,type:"button",class:w(["scene-image-option",{selected:s.isSceneImageSelected(l)}]),"aria-label":`배경 적용: ${s.expandedScene.name||"씬"} ${s.sourceLabel(l.source)}`,"aria-pressed":s.isSceneImageSelected(l)?"true":"false",onClick:b=>s.applySceneImage(l.url)},[t("img",{src:s.safeSrc(l.url),alt:"",class:"scene-image-option-img"},null,8,_n),t("span",zn,g(s.sourceLabel(l.source)),1)],10,Gn))),128))],8,Yn)):T("",!0)])):n.logStore.roomAssets?T("",!0):(d(),u("div",jn,[...e[59]||(e[59]=[t("span",{class:"palette-title"},"씬 배경 팔레트 (룸 데이터)",-1),t("p",{class:"palette-empty-hint"}," 캐릭터 & 이미지 관리의 룸 데이터 추가에서 ZIP을 올리면 배경을 선택할 수 있어요 ",-1)])])),n.effects.background?(d(),u("div",Kn,[t("label",qn,[p(c,{name:"drop",size:14}),I(" 배경 투명도 ("+g(Math.round(n.effects.backgroundOpacity*100))+"%) ",1)]),S(t("input",{id:"see-bg-opacity","onUpdate:modelValue":e[26]||(e[26]=l=>n.effects.backgroundOpacity=l),type:"range",min:"0",max:"1",step:"0.05",class:"opacity-slider"},null,512),[[y,n.effects.backgroundOpacity,void 0,{number:!0}]])])):T("",!0)],512),[[A,n.activeEffect==="background"]]),S(t("section",Xn,[t("h4",null,[p(c,{name:"photo",size:16}),e[60]||(e[60]=I(" 일러스트 범위 적용 ",-1))]),t("label",Jn,[S(t("input",{"onUpdate:modelValue":e[27]||(e[27]=l=>n.includeIllustrations=l),type:"checkbox",disabled:i.selectedStep===null},null,8,Zn),[[H,n.includeIllustrations]]),I(" 선택한 대사의 일러스트("+g(s.currentIllustrationsCount)+"개)를 이 범위에 적용 ",1)]),e[61]||(e[61]=t("p",{class:"hint-text"}," 체크하면 적용하기를 누를 때 지정 범위의 일러스트를 현재 스텝 것으로 덮어써요 ",-1))],512),[[A,n.activeEffect==="illustration"]]),n.effects[n.activeEffect]?(d(),u("div",Qn,[t("h4",null,[p(c,{name:"eye",size:16}),e[62]||(e[62]=I(" 설정 미리보기 ",-1))]),t("div",$n,[n.activeEffect==="sfx"&&n.effects.sfx?(d(),u("div",eo,[e[63]||(e[63]=t("strong",null,"효과음:",-1)),t("span",null,g(s.formatPreviewUrl(n.effects.sfx)),1)])):T("",!0),n.activeEffect==="bgm"&&n.effects.bgm?(d(),u("div",to,[e[64]||(e[64]=t("strong",null,"BGM:",-1)),t("span",null,g(s.formatPreviewUrl(n.effects.bgm)),1)])):T("",!0),n.activeEffect==="background"&&n.effects.background?(d(),u("div",no,[e[65]||(e[65]=t("strong",null,"배경:",-1)),t("span",null,g(s.formatPreviewUrl(n.effects.background)),1)])):T("",!0),n.activeEffect==="background"&&n.effects.background?(d(),u("div",oo,[e[66]||(e[66]=t("strong",null,"투명도:",-1)),t("span",null,g(Math.round(n.effects.backgroundOpacity*100))+"%",1)])):T("",!0)])])):T("",!0)])],512),[[A,n.rangeMode==="new"||n.editingRange]])]),S(t("div",so,[t("button",{onClick:e[28]||(e[28]=(...l)=>s.applyAll&&s.applyAll(...l)),class:"apply-button",disabled:!s.canApplyAll},[p(c,{name:"check",size:16}),I(" "+g(n.editingRange?"범위 수정 적용":s.activeEffectLabel+" 적용"),1)],8,io),n.activeEffect!=="illustration"?(d(),u("button",{key:0,onClick:e[29]||(e[29]=(...l)=>s.removeEffects&&s.removeEffects(...l)),class:"remove-button",disabled:!s.canApply},[p(c,{name:"trash",size:16}),I(" "+g(s.activeEffectLabel)+" 제거 ",1)],8,ro)):T("",!0)],512),[[A,n.rangeMode==="new"||n.editingRange]]),n.showRemoveConfirm?(d(),u("div",{key:0,class:"modal-overlay",onClick:e[32]||(e[32]=Y((...l)=>s.cancelRemoveEffects&&s.cancelRemoveEffects(...l),["self"])),onKeydown:e[33]||(e[33]=_((...l)=>s.cancelRemoveEffects&&s.cancelRemoveEffects(...l),["esc"]))},[t("div",ao,[t("div",lo,[t("h3",co,[p(c,{name:"trash",size:20}),I(" "+g(s.activeEffectLabel)+" 제거 ",1)])]),t("p",uo,g(s.removeRangeLabel)+"의 "+g(s.activeEffectLabel)+"가 사라져요. ",1),t("div",ho,[t("button",{class:"btn btn-secondary",onClick:e[30]||(e[30]=(...l)=>s.cancelRemoveEffects&&s.cancelRemoveEffects(...l))},"유지"),t("button",{class:"btn btn-danger",onClick:e[31]||(e[31]=(...l)=>s.confirmRemoveEffects&&s.confirmRemoveEffects(...l))},"제거")])],512)],32)):T("",!0)])}const fo=L(xt,[["render",po],["__scopeId","data-v-992a1c31"]]),mo={components:{CharacterColorInput:ie,AppIcon:M,LibraryImageSelect:re},name:"StepInfoEditor",mixins:[X],props:{stepData:{type:Object,default:null}},data(){return{logStore:G(),localData:null,baseline:null,showRawJSON:!1,illustFileInputs:[],isLoadingFile:!1,showDeleteConfirm:!1}},computed:{isDirty(){return!!this.localData&&!oe(this.localData,this.baseline)},availableCharacters(){return j(this.logStore.vnData)},matchedRoomCharacter(){const o=this.localData?.character?.name;if(!o)return null;const e=Object.values(this.logStore.vnData.characters||{}).find(i=>i.name===o);return e?.emotions&&Object.keys(e.emotions).length?{...e,faces:Object.entries(e.emotions).map(([i,r])=>({label:i,url:r}))}:this.logStore.roomAssets?.characters?.find(i=>i.name===o)||null},facePaletteItems(){const o=this.matchedRoomCharacter;if(!o)return[];const e=[];o.avatarUrl&&e.push({label:"기본",url:o.avatarUrl});for(const i of o.faces||[])i.url&&e.push({label:i.label||"표정",url:i.url});return e},hasDice(){return this.localData?.diceRolls?.length>0},hasStatusChange(){return this.localData?.statusChanges?.length>0},hasDXCombo(){return this.localData?.dxCombos?.length>0},hasIllustration(){return this.localData?.illustrations?.length>0},hasOugi(){return this.localData?.ougis?.length>0},hasShinobigami(){return this.localData?.shinobigamis?.length>0}},watch:{isDirty(o){this.$emit("dirty",o)},localData:{deep:!0,handler(o){this.$emit("preview",o)}},stepData:{immediate:!0,handler(o){this.isDirty&&o?.id===this.localData?.id||(this.initializeLocalData(),this.showRawJSON=!1,this.showDeleteConfirm&&(this.showDeleteConfirm=!1,this.deactivateFocusTrap()))}},"localData.statusChanges":{handler(o){o&&o.forEach(e=>{if(e.oldValue!==null&&e.newValue!==null){const i=e.newValue-e.oldValue;e.delta!==i&&(e.delta=i)}})},deep:!0},"localData.diceRolls":{handler(o){o&&o.forEach(e=>{if(e.type==="choice"&&e.optionsText){const i=e.optionsText.split(",").map(n=>n.trim());Array.isArray(e.options)&&e.options.length===i.length&&e.options.every((n,s)=>n===i[s])||(e.options=i)}})},deep:!0}},methods:{acceptDraft(){this.baseline=ne(this.localData)},discardDraft(){this.initializeLocalData()},chooseLibraryCharacter(o){const e=this.availableCharacters[Number(o.target.value)];o.target.value!==""&&e&&this.localData&&(this.localData.character={...this.localData.character,...e}),o.target.value=""},initializeLocalData(){if(!this.stepData){this.localData=null;return}this.localData={id:this.stepData.id,sceneNumber:this.stepData.sceneNumber,type:this.stepData.type||"dialogue",character:{name:this.stepData.character?.name||"",color:z(this.stepData.character?.color),avatarUrl:this.stepData.character?.avatarUrl||""},text:this.stepData.text||"",rawText:this.stepData.rawText||"",isSceneDescription:this.stepData.isSceneDescription||!1,sceneTitle:this.stepData.sceneTitle||"",scenePCs:this.stepData.scenePCs||"",sceneDescription:this.stepData.sceneDescription||"",illustrations:JSON.parse(JSON.stringify(this.stepData.illustrations||[])),diceRolls:this.initializeDiceRolls(this.stepData.diceRolls||[]),statusChanges:JSON.parse(JSON.stringify(this.stepData.statusChanges||[])),dxCombos:JSON.parse(JSON.stringify(this.stepData.dxCombos||[])),ougis:this.initializeOugis(this.stepData.ougis||[]),shinobigamis:JSON.parse(JSON.stringify(this.stepData.shinobigamis||[]))},this.acceptDraft()},initializeDiceRolls(o){return o.map(e=>{const i={...e};return e.type==="choice"&&e.options&&Array.isArray(e.options)&&(i.optionsText=e.options.join(", ")),i})},initializeOugis(o){return o.map(e=>{const i={...e};return e.skills&&Array.isArray(e.skills)&&(i.skills=e.skills.join(", ")),i})},addIllustration(){this.localData.illustrations||(this.localData.illustrations=[]),this.localData.illustrations.push({url:"",alt:"img"})},removeIllustration(o){this.localData.illustrations.splice(o,1)},handleImageError(o){o.target.style.display="none"},safeSrc(o){return x(o)},applyFaceUrl(o){this.localData?.character&&(this.localData.character.avatarUrl=o)},async handleIllustFileSelect(o,e){const i=o.target.files?.[0];if(!i)return;const r=2*1024*1024;if(i.size>r){this.$toast("이미지 파일은 2MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const n=await this.fileToBase64(i);this.localData.illustrations[e].url=n}catch(n){console.error("[handleIllustFileSelect] 파일 변환 실패:",n),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}},clearIllustration(o){this.localData.illustrations[o].url="",this.illustFileInputs[o]&&(this.illustFileInputs[o].value="")},async handleAvatarFileSelect(o){const e=o.target.files?.[0];if(!e)return;const i=2*1024*1024;if(e.size>i){this.$toast("아바타 이미지는 2MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const r=await this.fileToBase64(e);this.localData.character.avatarUrl=r}catch(r){console.error("[handleAvatarFileSelect] 파일 변환 실패:",r),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}},clearAvatar(){this.localData.character.avatarUrl="",this.$refs.avatarFileInput&&(this.$refs.avatarFileInput.value="")},fileToBase64(o){return new Promise((e,i)=>{const r=new FileReader;r.onload=()=>e(r.result),r.onerror=i,r.readAsDataURL(o)})},addDiceRoll(){this.localData.diceRolls||(this.localData.diceRolls=[]),this.localData.diceRolls.push({type:"normal",formula:"",result:0,fullFormula:"",diceRolls:"",command:"",checkName:"",judgement:"",options:[],optionsText:""})},removeDiceRoll(o){this.localData.diceRolls.splice(o,1)},addStatusChange(){this.localData.statusChanges||(this.localData.statusChanges=[]),this.localData.statusChanges.push({characterName:"",statusName:"",oldValue:null,newValue:null,delta:0})},toggleStatusMode(o,e){e.target.checked?(o.oldValue=0,o.newValue=0,o.delta=0):(o.oldValue=null,o.newValue=null)},computeDelta(o){return o.oldValue!==null&&o.newValue!==null?o.newValue-o.oldValue:o.delta||0},removeStatusChange(o){this.localData.statusChanges.splice(o,1)},addDXCombo(){this.localData.dxCombos||(this.localData.dxCombos=[]),this.localData.dxCombos.push({type:"dx-combo",isSingleEffect:!1,comboName:"",description:"",effects:[],timing:"",difficulty:"",target:"",range:"",erosion:"",erosionCost:null,diceRoll:null})},removeDXCombo(o){this.localData.dxCombos.splice(o,1)},addOugi(){this.localData.ougis||(this.localData.ougis=[]),this.localData.ougis.push({type:"ougi",ougiName:"",skills:"",presentation:"",ougiEffect:"",ninpouInfo:"",ougiType:""})},removeOugi(o){this.localData.ougis.splice(o,1)},addShinobigami(){this.localData.shinobigamis||(this.localData.shinobigamis=[]),this.localData.shinobigamis.push({type:"shinobigami",command:"",checkName:"",formula:"",diceRolls:"",diceExpression:"",result:0,judgement:"",additionalInfo:null})},removeShinobigami(o){this.localData.shinobigamis.splice(o,1)},addShinobiAdditionalInfo(o){o.additionalInfo={type:"",range:"",cost:"",skill:"",description:""}},deleteStep(){this.stepData&&(this.showDeleteConfirm=!0,this.activateFocusTrap("deleteConfirmModal"))},confirmDeleteStep(){this.showDeleteConfirm=!1,this.deactivateFocusTrap(),this.$emit("delete",this.stepData.id)},cancelDeleteStep(){this.showDeleteConfirm=!1,this.deactivateFocusTrap()},duplicateStep(){this.stepData&&this.$emit("duplicate",this.stepData.id)},saveChanges(o){if(!this.localData)return;const e={...this.localData,hasDice:this.hasDice,hasStatusChange:this.hasStatusChange,hasDXCombo:this.hasDXCombo,hasIllustration:this.hasIllustration,hasOugi:this.hasOugi,hasShinobigami:this.hasShinobigami};e.ougis&&(e.ougis=e.ougis.map(i=>({...i,skills:typeof i.skills=="string"?i.skills.split(/[,、]/).map(r=>r.trim()).filter(r=>r):i.skills}))),this.$emit("save",{id:this.stepData.id,updates:e,onComplete:typeof o=="function"?o:void 0}),this.acceptDraft()}}},go={class:"step-info-editor"},To={class:"editor-header"},So={class:"editor-body"},Io={key:0,class:"no-selection"},bo={key:1,class:"info-form"},Eo={key:0,class:"field-group dialogue-field"},yo={key:0,class:"inline-draft-actions"},Oo=["disabled"],Ro={class:"field-group speaker-picker"},vo=["value"],No={key:1,class:"field-group speaker-name"},Ao={key:2,class:"field-group step-kind"},wo={class:"type-selection",role:"radiogroup","aria-labelledby":"sie-type-label"},Co={class:"radio-label"},Lo={class:"radio-label"},Do={class:"radio-label"},Ho={class:"radio-label"},Uo={key:3,class:"scene-desc-section"},ko={class:"field-group"},Fo={class:"field-label"},Po={class:"field-row"},xo={class:"additional-settings"},Vo={class:"field-group"},Mo={key:0,class:"field-group"},Wo={key:1,class:"field-group"},Bo={class:"file-input-group"},Yo=["placeholder","readonly"],Go=["disabled"],_o=["src"],zo={key:2,class:"field-group"},jo={key:0,class:"face-palette",role:"group","aria-labelledby":"face-palette-title"},Ko=["aria-label","aria-pressed","onClick"],qo=["src"],Xo={class:"face-thumb-label"},Jo={key:1,class:"palette-empty-hint"},Zo={key:2,class:"palette-empty-hint"},Qo={class:"field-group"},$o={key:0,class:"field-group section-header"},es={class:"field-label"},ts={key:1,class:"items-list"},ns={class:"item-content"},os={class:"file-input-group"},ss=["onUpdate:modelValue","placeholder","readonly"],is=["onChange"],rs=["onClick","disabled"],as=["onClick"],ls=["src"],ds=["onClick"],cs={class:"field-group"},us={key:0,class:"field-group section-header"},hs={class:"field-label"},ps={key:1,class:"items-list"},fs={class:"item-content"},ms={class:"field-row"},gs=["onUpdate:modelValue"],Ts=["onUpdate:modelValue"],Ss={key:0,class:"field-row"},Is=["onUpdate:modelValue"],bs={key:1,class:"dx3-fields"},Es={class:"field-row"},ys=["onUpdate:modelValue"],Os={class:"field-row"},Rs=["onUpdate:modelValue"],vs={class:"field-row"},Ns=["onUpdate:modelValue"],As={key:2,class:"judgement-fields"},ws={class:"field-row"},Cs=["onUpdate:modelValue"],Ls=["onUpdate:modelValue"],Ds={class:"field-row"},Hs=["onUpdate:modelValue"],Us=["onUpdate:modelValue"],ks={key:3,class:"choice-fields"},Fs={class:"field-row"},Ps=["onUpdate:modelValue"],xs={class:"field-row"},Vs=["onUpdate:modelValue"],Ms=["onClick"],Ws={key:2,class:"field-group section-header"},Bs={class:"field-label"},Ys={key:3,class:"items-list"},Gs={class:"item-content"},_s={class:"field-row"},zs=["onUpdate:modelValue"],js=["onUpdate:modelValue"],Ks={class:"field-row"},qs={class:"checkbox-label"},Xs=["checked","onChange"],Js={key:0,class:"field-row"},Zs=["onUpdate:modelValue"],Qs=["onUpdate:modelValue"],$s={key:1,class:"field-row"},ei=["onUpdate:modelValue"],ti=["onClick"],ni={class:"field-group"},oi={key:0,class:"field-group section-header"},si={class:"field-label"},ii={key:1,class:"items-list"},ri={class:"item-content"},ai=["onUpdate:modelValue"],li=["onUpdate:modelValue"],di=["onUpdate:modelValue"],ci=["onUpdate:modelValue"],ui=["onUpdate:modelValue"],hi=["onUpdate:modelValue"],pi=["onClick"],fi={key:2,class:"field-group section-header"},mi={class:"field-label"},gi={key:3,class:"items-list"},Ti={class:"item-content"},Si={class:"field-row"},Ii=["onUpdate:modelValue"],bi=["onUpdate:modelValue"],Ei={class:"field-row"},yi=["onUpdate:modelValue"],Oi=["onUpdate:modelValue"],Ri={class:"field-row"},vi=["onUpdate:modelValue"],Ni=["onUpdate:modelValue"],Ai={key:0,class:"shinobi-additional-info"},wi={class:"field-row"},Ci=["onUpdate:modelValue"],Li=["onUpdate:modelValue"],Di=["onUpdate:modelValue"],Hi=["onUpdate:modelValue"],Ui=["onUpdate:modelValue"],ki=["onClick"],Fi=["onClick"],Pi={key:4,class:"field-group section-header"},xi={class:"field-label"},Vi={key:5,class:"items-list"},Mi={class:"item-content"},Wi={class:"field-row"},Bi=["onUpdate:modelValue"],Yi={class:"checkbox-label"},Gi=["onUpdate:modelValue"],_i=["onUpdate:modelValue"],zi={class:"field-row"},ji=["onUpdate:modelValue"],Ki=["onUpdate:modelValue"],qi={class:"field-row"},Xi=["onUpdate:modelValue"],Ji=["onUpdate:modelValue"],Zi=["onUpdate:modelValue"],Qi={class:"field-row"},$i=["onUpdate:modelValue"],er=["onUpdate:modelValue"],tr=["onClick"],nr={class:"field-group"},or={class:"field-group"},sr=["value"],ir={key:0,class:"field-group"},rr={key:1,class:"field-group"},ar=["value"],lr={key:2,class:"field-group"},dr={class:"field-label"},cr={key:3,class:"json-viewer"},ur={key:4,class:"actions"},hr={class:"action-group left"},pr=["disabled"],fr={class:"modal-container delete-confirm-container",ref:"deleteConfirmModal",tabindex:"-1",role:"dialog","aria-modal":"true","aria-labelledby":"step-delete-title"},mr={class:"modal-header"},gr={id:"step-delete-title"},Tr={class:"delete-confirm-buttons"};function Sr(o,e,i,r,n,s){const c=R("AppIcon"),m=R("CharacterColorInput"),l=R("LibraryImageSelect");return d(),u("div",go,[t("div",To,[t("h3",null,[p(c,{name:"edit",size:20}),e[37]||(e[37]=I(" 대사와 인물 ",-1))])]),t("div",So,[i.stepData?(d(),u("div",bo,[n.localData?(d(),u("div",Eo,[e[40]||(e[40]=t("label",{class:"field-label",for:"sie-text"},"대사 텍스트",-1)),S(t("textarea",{id:"sie-text","onUpdate:modelValue":e[0]||(e[0]=a=>n.localData.text=a),class:"field-textarea",rows:"4",placeholder:"캐릭터의 대사를 입력하세요"},null,512),[[y,n.localData.text]]),s.isDirty?(d(),u("div",yo,[e[39]||(e[39]=t("span",null,"미리보기에만 반영한 수정이에요.",-1)),t("button",{type:"button",class:"btn btn-primary",disabled:n.logStore.editInProgress,onClick:e[1]||(e[1]=(...a)=>s.saveChanges&&s.saveChanges(...a))},"수정한 대사 저장",8,Oo)])):T("",!0)])):T("",!0),t("label",Ro,[e[42]||(e[42]=I("캐릭터 고르기",-1)),t("select",{class:"field-input","aria-label":"보관한 캐릭터 선택",value:"",onChange:e[2]||(e[2]=(...a)=>s.chooseLibraryCharacter&&s.chooseLibraryCharacter(...a))},[e[41]||(e[41]=t("option",{value:""},"등록·사용한 캐릭터에서 선택",-1)),(d(!0),u(v,null,N(s.availableCharacters,(a,b)=>(d(),u("option",{key:a.name,value:b},g(a.name),9,vo))),128))],32)]),n.localData?(d(),u("div",No,[e[43]||(e[43]=t("label",{class:"field-label",for:"sie-char-name"},"캐릭터 이름",-1)),S(t("input",{id:"sie-char-name","onUpdate:modelValue":e[3]||(e[3]=a=>n.localData.character.name=a),type:"text",class:"field-input",placeholder:"캐릭터 이름"},null,512),[[y,n.localData.character.name]])])):T("",!0),n.localData?(d(),u("div",Ao,[e[48]||(e[48]=t("span",{class:"field-label",id:"sie-type-label"},"대사 종류",-1)),t("div",wo,[t("label",Co,[S(t("input",{type:"radio",value:"dialogue","onUpdate:modelValue":e[4]||(e[4]=a=>n.localData.type=a)},null,512),[[F,n.localData.type]]),e[44]||(e[44]=t("span",null,"일반 대화",-1))]),t("label",Lo,[S(t("input",{type:"radio",value:"system","onUpdate:modelValue":e[5]||(e[5]=a=>n.localData.type=a)},null,512),[[F,n.localData.type]]),e[45]||(e[45]=t("span",null,"시스템 메시지",-1))]),t("label",Do,[S(t("input",{type:"radio",value:"narrator","onUpdate:modelValue":e[6]||(e[6]=a=>n.localData.type=a)},null,512),[[F,n.localData.type]]),e[46]||(e[46]=t("span",null,"나레이터",-1))]),t("label",Ho,[S(t("input",{type:"radio",value:"scene-description","onUpdate:modelValue":e[7]||(e[7]=a=>n.localData.type=a)},null,512),[[F,n.localData.type]]),e[47]||(e[47]=t("span",null,"씬 설명",-1))])])])):T("",!0),n.localData&&n.localData.type==="scene-description"?(d(),u("div",Uo,[t("div",ko,[t("span",Fo,[p(c,{name:"film",size:14}),e[49]||(e[49]=I(" 씬 정보 ",-1))])]),t("div",Po,[S(t("input",{"onUpdate:modelValue":e[8]||(e[8]=a=>n.localData.sceneNumber=a),type:"text",class:"field-input small",placeholder:"씬 번호","aria-label":"씬 번호"},null,512),[[y,n.localData.sceneNumber]]),S(t("input",{"onUpdate:modelValue":e[9]||(e[9]=a=>n.localData.sceneTitle=a),type:"text",class:"field-input",placeholder:"씬 제목","aria-label":"씬 제목"},null,512),[[y,n.localData.sceneTitle]])]),S(t("input",{"onUpdate:modelValue":e[10]||(e[10]=a=>n.localData.scenePCs=a),type:"text",class:"field-input",placeholder:"참가 PC (쉼표로 구분)","aria-label":"참가 PC"},null,512),[[y,n.localData.scenePCs]]),S(t("textarea",{"onUpdate:modelValue":e[11]||(e[11]=a=>n.localData.sceneDescription=a),class:"field-textarea",rows:"3",placeholder:"씬 상세 설명","aria-label":"씬 상세 설명"},null,512),[[y,n.localData.sceneDescription]])])):T("",!0),t("div",xo,[t("details",Vo,[e[54]||(e[54]=t("summary",null,"인물 색상과 표정",-1)),n.localData?(d(),u("div",Mo,[e[50]||(e[50]=t("span",{class:"field-label"},"캐릭터 색상",-1)),p(m,{modelValue:n.localData.character.color,"onUpdate:modelValue":e[12]||(e[12]=a=>n.localData.character.color=a)},null,8,["modelValue"])])):T("",!0),n.localData?(d(),u("div",Wo,[p(l,{label:"표정 이미지 고르기",modelValue:n.localData.character.avatarUrl,"onUpdate:modelValue":e[13]||(e[13]=a=>n.localData.character.avatarUrl=a)},null,8,["modelValue"]),e[51]||(e[51]=t("label",{class:"field-label",for:"sie-avatar-url"},"아바타 URL",-1)),t("div",Bo,[S(t("input",{id:"sie-avatar-url","onUpdate:modelValue":e[14]||(e[14]=a=>n.localData.character.avatarUrl=a),type:"text",class:"field-input",placeholder:n.localData.character.avatarUrl&&n.localData.character.avatarUrl.startsWith("data:image")?"[로컬 아바타 파일]":"https://example.com/avatar.png 또는 파일 선택",readonly:n.localData.character.avatarUrl&&n.localData.character.avatarUrl.startsWith("data:image")},null,8,Yo),[[y,n.localData.character.avatarUrl]]),t("input",{type:"file",ref:"avatarFileInput",accept:"image/*",style:{display:"none"},onChange:e[15]||(e[15]=(...a)=>s.handleAvatarFileSelect&&s.handleAvatarFileSelect(...a))},null,544),t("button",{onClick:e[16]||(e[16]=a=>o.$refs.avatarFileInput?.click()),class:"file-select-button",disabled:n.isLoadingFile},[p(c,{name:"folder",size:14}),I(" "+g(n.isLoadingFile?"불러오는 중...":"파일"),1)],8,Go),n.localData.character.avatarUrl?(d(),u("button",{key:0,onClick:e[17]||(e[17]=(...a)=>s.clearAvatar&&s.clearAvatar(...a)),class:"clear-button",title:"초기화"},[p(c,{name:"close",size:12})])):T("",!0)]),e[52]||(e[52]=t("p",{class:"hint-text"},"아바타 이미지 권장 크기: 2MB 이하",-1)),n.localData.character.avatarUrl?(d(),u("img",{key:0,src:s.safeSrc(n.localData.character.avatarUrl),class:"preview-img avatar-preview",onError:e[18]||(e[18]=(...a)=>s.handleImageError&&s.handleImageError(...a))},null,40,_o)):T("",!0)])):T("",!0),n.localData?(d(),u("div",zo,[e[53]||(e[53]=t("span",{class:"palette-title",id:"face-palette-title"},"표정 팔레트 (룸 데이터)",-1)),s.facePaletteItems.length>0?(d(),u("div",jo,[(d(!0),u(v,null,N(s.facePaletteItems,(a,b)=>(d(),u("button",{key:b,type:"button",class:w(["face-thumb",{selected:n.localData.character.avatarUrl===a.url}]),"aria-label":`표정 적용: ${a.label}`,"aria-pressed":n.localData.character.avatarUrl===a.url?"true":"false",onClick:f=>s.applyFaceUrl(a.url)},[t("img",{src:s.safeSrc(a.url),alt:"",class:"face-thumb-img",onError:e[19]||(e[19]=(...f)=>s.handleImageError&&s.handleImageError(...f))},null,40,qo),t("span",Xo,g(a.label),1)],10,Ko))),128))])):n.logStore.roomAssets?!s.matchedRoomCharacter&&n.localData.character.name?(d(),u("p",Zo," 룸 데이터에 '"+g(n.localData.character.name)+"' 캐릭터가 없어요. 룸과 로그의 캐릭터 이름이 같은지 확인해 주세요. ",1)):T("",!0):(d(),u("p",Jo," 캐릭터 & 이미지 관리의 룸 데이터 추가에서 ZIP을 올리면 표정을 선택할 수 있어요 "))])):T("",!0)]),t("details",Qo,[e[57]||(e[57]=t("summary",null,"일러스트",-1)),p(l,{label:"일러스트 이미지 추가","reset-after-select":"",onSelect:e[20]||(e[20]=a=>n.localData.illustrations.push({url:a,alt:"일러스트"}))}),n.localData?(d(),u("div",$o,[t("span",es,[p(c,{name:"photo",size:14}),I(" 일러스트 ("+g(n.localData.illustrations.length)+"개) ",1)]),t("button",{onClick:e[21]||(e[21]=(...a)=>s.addIllustration&&s.addIllustration(...a)),class:"add-button"},[p(c,{name:"plus",size:12}),e[55]||(e[55]=I(" 추가 ",-1))])])):T("",!0),n.localData.illustrations.length>0?(d(),u("div",ts,[(d(!0),u(v,null,N(n.localData.illustrations,(a,b)=>(d(),u("div",{key:b,class:"item-card"},[t("div",ns,[t("div",os,[S(t("input",{"onUpdate:modelValue":f=>a.url=f,type:"text",class:"field-input",placeholder:a.url&&a.url.startsWith("data:image")?"[로컬 이미지 파일]":"이미지 URL 또는 파일 선택",readonly:a.url&&a.url.startsWith("data:image")},null,8,ss),[[y,a.url]]),t("input",{type:"file",ref_for:!0,ref:f=>{f&&(n.illustFileInputs[b]=f)},accept:"image/*",style:{display:"none"},onChange:f=>s.handleIllustFileSelect(f,b)},null,40,is),t("button",{onClick:()=>n.illustFileInputs[b]?.click(),class:"file-select-button",disabled:n.isLoadingFile},[p(c,{name:"folder",size:14}),I(" "+g(n.isLoadingFile?"불러오는 중...":"파일"),1)],8,rs),a.url?(d(),u("button",{key:0,onClick:()=>s.clearIllustration(b),class:"clear-button",title:"초기화"},[p(c,{name:"close",size:12})],8,as)):T("",!0)]),e[56]||(e[56]=t("p",{class:"hint-text"},"이미지 파일 권장 크기: 2MB 이하",-1)),a.url?(d(),u("img",{key:0,src:s.safeSrc(a.url),class:"preview-img",onError:e[22]||(e[22]=(...f)=>s.handleImageError&&s.handleImageError(...f))},null,40,ls)):T("",!0)]),t("button",{onClick:f=>s.removeIllustration(b),class:"remove-button"},[p(c,{name:"trash",size:14})],8,ds)]))),128))])):T("",!0)]),t("details",cs,[e[67]||(e[67]=t("summary",null,"주사위와 상태 변화",-1)),n.localData?(d(),u("div",us,[t("span",hs,[p(c,{name:"cube",size:14}),I(" 다이스 롤 ("+g(n.localData.diceRolls.length)+"개) ",1)]),t("button",{onClick:e[23]||(e[23]=(...a)=>s.addDiceRoll&&s.addDiceRoll(...a)),class:"add-button"},[p(c,{name:"plus",size:12}),e[58]||(e[58]=I(" 추가 ",-1))])])):T("",!0),n.localData.diceRolls.length>0?(d(),u("div",ps,[(d(!0),u(v,null,N(n.localData.diceRolls,(a,b)=>(d(),u("div",{key:b,class:"item-card dice-card"},[t("div",fs,[t("div",ms,[S(t("select",{"onUpdate:modelValue":f=>a.type=f,class:"field-input small"},[...e[59]||(e[59]=[t("option",{value:"normal"},"일반",-1),t("option",{value:"dx3"},"DX3",-1),t("option",{value:"judgement"},"판정",-1),t("option",{value:"choice"},"선택",-1)])],8,gs),[[V,a.type]]),S(t("input",{"onUpdate:modelValue":f=>a.formula=f,type:"text",class:"field-input",placeholder:"공식 (예: 1D100, 8dx+16)"},null,8,Ts),[[y,a.formula]])]),a.type==="normal"?(d(),u("div",Ss,[e[60]||(e[60]=t("span",{class:"field-label-inline"},"결과:",-1)),S(t("input",{"onUpdate:modelValue":f=>a.result=f,type:"number",class:"field-input small",placeholder:"결과"},null,8,Is),[[y,a.result,void 0,{number:!0}]])])):T("",!0),a.type==="dx3"?(d(),u("div",bs,[t("div",Es,[S(t("input",{"onUpdate:modelValue":f=>a.fullFormula=f,type:"text",class:"field-input",placeholder:"전체 공식 (예: 8DX10+16)"},null,8,ys),[[y,a.fullFormula]])]),t("div",Os,[S(t("input",{"onUpdate:modelValue":f=>a.diceRolls=f,type:"text",class:"field-input",placeholder:"다이스 롤 (예: 10[5,6,7,8,9,10]+5[5]+16)"},null,8,Rs),[[y,a.diceRolls]])]),t("div",vs,[e[61]||(e[61]=t("span",{class:"field-label-inline"},"최종 결과:",-1)),S(t("input",{"onUpdate:modelValue":f=>a.result=f,type:"number",class:"field-input small",placeholder:"결과"},null,8,Ns),[[y,a.result,void 0,{number:!0}]])])])):T("",!0),a.type==="judgement"?(d(),u("div",As,[t("div",ws,[S(t("input",{"onUpdate:modelValue":f=>a.command=f,type:"text",class:"field-input small",placeholder:"커맨드 (cc<=70)"},null,8,Cs),[[y,a.command]]),S(t("input",{"onUpdate:modelValue":f=>a.checkName=f,type:"text",class:"field-input",placeholder:"판정명"},null,8,Ls),[[y,a.checkName]])]),t("div",Ds,[S(t("input",{"onUpdate:modelValue":f=>a.result=f,type:"number",class:"field-input small",placeholder:"결과"},null,8,Hs),[[y,a.result,void 0,{number:!0}]]),S(t("input",{"onUpdate:modelValue":f=>a.judgement=f,type:"text",class:"field-input",placeholder:"판정 (보통 성공, 실패 등)"},null,8,Us),[[y,a.judgement]])])])):T("",!0),a.type==="choice"?(d(),u("div",ks,[t("div",Fs,[S(t("textarea",{"onUpdate:modelValue":f=>a.optionsText=f,class:"field-textarea small",rows:"2",placeholder:"선택지 (쉼표로 구분)"},null,8,Ps),[[y,a.optionsText]])]),t("div",xs,[e[62]||(e[62]=t("span",{class:"field-label-inline"},"선택됨:",-1)),S(t("input",{"onUpdate:modelValue":f=>a.result=f,type:"text",class:"field-input",placeholder:"선택된 옵션"},null,8,Vs),[[y,a.result]])])])):T("",!0)]),t("button",{onClick:f=>s.removeDiceRoll(b),class:"remove-button"},[p(c,{name:"trash",size:14})],8,Ms)]))),128))])):T("",!0),n.localData?(d(),u("div",Ws,[t("span",Bs,[p(c,{name:"chart",size:14}),I(" 스테이터스 변화 ("+g(n.localData.statusChanges.length)+"개) ",1)]),t("button",{onClick:e[24]||(e[24]=(...a)=>s.addStatusChange&&s.addStatusChange(...a)),class:"add-button"},[p(c,{name:"plus",size:12}),e[63]||(e[63]=I(" 추가 ",-1))])])):T("",!0),n.localData.statusChanges.length>0?(d(),u("div",Ys,[(d(!0),u(v,null,N(n.localData.statusChanges,(a,b)=>(d(),u("div",{key:b,class:"item-card"},[t("div",Gs,[t("div",_s,[S(t("input",{"onUpdate:modelValue":f=>a.characterName=f,type:"text",class:"field-input",placeholder:"캐릭터명"},null,8,zs),[[y,a.characterName]]),S(t("input",{"onUpdate:modelValue":f=>a.statusName=f,type:"text",class:"field-input",placeholder:"상태명 (HP, 침식률 등)"},null,8,js),[[y,a.statusName]])]),t("div",Ks,[t("label",qs,[t("input",{type:"checkbox",checked:a.oldValue!==null&&a.newValue!==null,onChange:f=>s.toggleStatusMode(a,f)},null,40,Xs),e[64]||(e[64]=t("span",null,"이전값/새값 모드",-1))])]),a.oldValue!==null&&a.newValue!==null?(d(),u("div",Js,[S(t("input",{"onUpdate:modelValue":f=>a.oldValue=f,type:"number",class:"field-input small",placeholder:"이전값"},null,8,Zs),[[y,a.oldValue,void 0,{number:!0}]]),e[65]||(e[65]=t("span",{class:"arrow"},"→",-1)),S(t("input",{"onUpdate:modelValue":f=>a.newValue=f,type:"number",class:"field-input small",placeholder:"새값"},null,8,Qs),[[y,a.newValue,void 0,{number:!0}]]),t("span",{class:w(["delta",{positive:s.computeDelta(a)>0,negative:s.computeDelta(a)<0}])},g(s.computeDelta(a)>0?"+":"")+g(s.computeDelta(a)),3)])):(d(),u("div",$s,[e[66]||(e[66]=t("span",{class:"field-label-inline"},"변화량:",-1)),S(t("input",{"onUpdate:modelValue":f=>a.delta=f,type:"number",class:"field-input small",placeholder:"±변화량"},null,8,ei),[[y,a.delta,void 0,{number:!0}]]),t("span",{class:w(["delta",{positive:a.delta>0,negative:a.delta<0}])},g(a.delta>0?"+":"")+g(a.delta),3)]))]),t("button",{onClick:f=>s.removeStatusChange(b),class:"remove-button"},[p(c,{name:"trash",size:14})],8,ti)]))),128))])):T("",!0)]),t("details",ni,[e[74]||(e[74]=t("summary",null,"규칙별 기술과 콤보",-1)),n.localData?(d(),u("div",oi,[t("span",si,[p(c,{name:"star",size:14}),I(" 시노비가미 오의 ("+g((n.localData.ougis||[]).length)+"개) ",1)]),t("button",{onClick:e[25]||(e[25]=(...a)=>s.addOugi&&s.addOugi(...a)),class:"add-button"},[p(c,{name:"plus",size:12}),e[68]||(e[68]=I(" 추가 ",-1))])])):T("",!0),(n.localData.ougis||[]).length>0?(d(),u("div",ii,[(d(!0),u(v,null,N(n.localData.ougis,(a,b)=>(d(),u("div",{key:b,class:"item-card ougi-card"},[t("div",ri,[S(t("input",{"onUpdate:modelValue":f=>a.ougiName=f,type:"text",class:"field-input",placeholder:"오의 이름"},null,8,ai),[[y,a.ougiName]]),S(t("input",{"onUpdate:modelValue":f=>a.skills=f,type:"text",class:"field-input",placeholder:"지정 특기 (쉼표 구분, 예: 도검술, 인맥)"},null,8,li),[[y,a.skills]]),S(t("textarea",{"onUpdate:modelValue":f=>a.presentation=f,class:"field-textarea small",rows:"2",placeholder:"연출 (오의 사용 시 묘사)"},null,8,di),[[y,a.presentation]]),S(t("textarea",{"onUpdate:modelValue":f=>a.ougiEffect=f,class:"field-textarea small",rows:"2",placeholder:"오의 효과 (전투에서의 효과 등, 선택사항)"},null,8,ci),[[y,a.ougiEffect]]),S(t("input",{"onUpdate:modelValue":f=>a.ninpouInfo=f,type:"text",class:"field-input",placeholder:"인법 정보"},null,8,ui),[[y,a.ninpouInfo]]),S(t("input",{"onUpdate:modelValue":f=>a.ougiType=f,type:"text",class:"field-input",placeholder:"오의 종류"},null,8,hi),[[y,a.ougiType]])]),t("button",{onClick:f=>s.removeOugi(b),class:"remove-button"},[p(c,{name:"trash",size:14})],8,pi)]))),128))])):T("",!0),n.localData?(d(),u("div",fi,[t("span",mi,[p(c,{name:"bolt",size:14}),I(" 시노비가미 인법 ("+g((n.localData.shinobigamis||[]).length)+"개) ",1)]),t("button",{onClick:e[26]||(e[26]=(...a)=>s.addShinobigami&&s.addShinobigami(...a)),class:"add-button"},[p(c,{name:"plus",size:12}),e[69]||(e[69]=I(" 추가 ",-1))])])):T("",!0),(n.localData.shinobigamis||[]).length>0?(d(),u("div",gi,[(d(!0),u(v,null,N(n.localData.shinobigamis,(a,b)=>(d(),u("div",{key:b,class:"item-card shinobi-card"},[t("div",Ti,[t("div",Si,[S(t("input",{"onUpdate:modelValue":f=>a.command=f,type:"text",class:"field-input small",placeholder:"명령어 (예: SG@12#2>=5)"},null,8,Ii),[[y,a.command]]),S(t("input",{"onUpdate:modelValue":f=>a.checkName=f,type:"text",class:"field-input",placeholder:"판정명 (예: 도검술, 괴력)"},null,8,bi),[[y,a.checkName]])]),t("div",Ei,[S(t("input",{"onUpdate:modelValue":f=>a.diceRolls=f,type:"text",class:"field-input small",placeholder:"주사위 (예: 1,2)"},null,8,yi),[[y,a.diceRolls]]),S(t("input",{"onUpdate:modelValue":f=>a.diceExpression=f,type:"text",class:"field-input",placeholder:"다이스 표현 (예: 3[1,2])"},null,8,Oi),[[y,a.diceExpression]])]),t("div",Ri,[S(t("input",{"onUpdate:modelValue":f=>a.result=f,type:"number",class:"field-input small",placeholder:"결과"},null,8,vi),[[y,a.result,void 0,{number:!0}]]),S(t("input",{"onUpdate:modelValue":f=>a.judgement=f,type:"text",class:"field-input small",placeholder:"판정 (成功/失敗)"},null,8,Ni),[[y,a.judgement]])]),a.additionalInfo?(d(),u("div",Ai,[t("div",wi,[S(t("input",{"onUpdate:modelValue":f=>a.additionalInfo.type=f,type:"text",class:"field-input small",placeholder:"타입"},null,8,Ci),[[y,a.additionalInfo.type]]),S(t("input",{"onUpdate:modelValue":f=>a.additionalInfo.range=f,type:"text",class:"field-input small",placeholder:"사거리"},null,8,Li),[[y,a.additionalInfo.range]]),S(t("input",{"onUpdate:modelValue":f=>a.additionalInfo.cost=f,type:"text",class:"field-input small",placeholder:"코스트"},null,8,Di),[[y,a.additionalInfo.cost]])]),S(t("input",{"onUpdate:modelValue":f=>a.additionalInfo.skill=f,type:"text",class:"field-input",placeholder:"특기"},null,8,Hi),[[y,a.additionalInfo.skill]]),S(t("textarea",{"onUpdate:modelValue":f=>a.additionalInfo.description=f,class:"field-textarea small",rows:"2",placeholder:"설명"},null,8,Ui),[[y,a.additionalInfo.description]])])):(d(),u("button",{key:1,onClick:f=>s.addShinobiAdditionalInfo(a),class:"add-info-button"},[p(c,{name:"plus",size:10}),e[70]||(e[70]=I(" 추가 정보 입력 ",-1))],8,ki))]),t("button",{onClick:f=>s.removeShinobigami(b),class:"remove-button"},[p(c,{name:"trash",size:14})],8,Fi)]))),128))])):T("",!0),n.localData?(d(),u("div",Pi,[t("span",xi,[p(c,{name:"bolt",size:14}),I(" DX 콤보/이펙트 ("+g(n.localData.dxCombos.length)+"개) ",1)]),t("button",{onClick:e[27]||(e[27]=(...a)=>s.addDXCombo&&s.addDXCombo(...a)),class:"add-button"},[p(c,{name:"plus",size:12}),e[71]||(e[71]=I(" 추가 ",-1))])])):T("",!0),n.localData.dxCombos.length>0?(d(),u("div",Vi,[(d(!0),u(v,null,N(n.localData.dxCombos,(a,b)=>(d(),u("div",{key:b,class:"item-card combo-card"},[t("div",Mi,[t("div",Wi,[S(t("select",{"onUpdate:modelValue":f=>a.type=f,class:"field-input small"},[...e[72]||(e[72]=[t("option",{value:"dx-combo"},"콤보",-1),t("option",{value:"dx-effect"},"단일 이펙트",-1)])],8,Bi),[[V,a.type]]),t("label",Yi,[S(t("input",{type:"checkbox","onUpdate:modelValue":f=>a.isSingleEffect=f},null,8,Gi),[[H,a.isSingleEffect]]),e[73]||(e[73]=t("span",null,"단일 이펙트",-1))])]),S(t("input",{"onUpdate:modelValue":f=>a.comboName=f,type:"text",class:"field-input",placeholder:"콤보/이펙트명"},null,8,_i),[[y,a.comboName]]),t("div",zi,[S(t("input",{"onUpdate:modelValue":f=>a.timing=f,type:"text",class:"field-input",placeholder:"타이밍 (메이저, 마이너 등)"},null,8,ji),[[y,a.timing]]),S(t("input",{"onUpdate:modelValue":f=>a.difficulty=f,type:"text",class:"field-input",placeholder:"난이도 (자동, 대항 등)"},null,8,Ki),[[y,a.difficulty]])]),t("div",qi,[S(t("input",{"onUpdate:modelValue":f=>a.target=f,type:"text",class:"field-input",placeholder:"대상"},null,8,Xi),[[y,a.target]]),S(t("input",{"onUpdate:modelValue":f=>a.range=f,type:"text",class:"field-input",placeholder:"사거리"},null,8,Ji),[[y,a.range]])]),S(t("textarea",{"onUpdate:modelValue":f=>a.description=f,class:"field-textarea small",rows:"2",placeholder:"설명/기능"},null,8,Zi),[[y,a.description]]),t("div",Qi,[S(t("input",{"onUpdate:modelValue":f=>a.erosion=f,type:"text",class:"field-input small",placeholder:"침식치"},null,8,$i),[[y,a.erosion]]),S(t("input",{"onUpdate:modelValue":f=>a.erosionCost=f,type:"number",class:"field-input small",placeholder:"침식 코스트"},null,8,er),[[y,a.erosionCost,void 0,{number:!0}]])])]),t("button",{onClick:f=>s.removeDXCombo(b),class:"remove-button"},[p(c,{name:"trash",size:14})],8,tr)]))),128))])):T("",!0)]),t("details",nr,[e[79]||(e[79]=t("summary",null,"장면 번호와 원본 정보",-1)),t("div",or,[e[75]||(e[75]=t("label",{class:"field-label",for:"sie-step-id"},"스텝 ID (읽기 전용)",-1)),t("input",{id:"sie-step-id",type:"text",value:i.stepData.id,disabled:"",class:"field-input disabled"},null,8,sr)]),n.localData?(d(),u("div",ir,[e[76]||(e[76]=t("label",{class:"field-label",for:"sie-scene-number"},"씬 번호",-1)),S(t("input",{id:"sie-scene-number","onUpdate:modelValue":e[28]||(e[28]=a=>n.localData.sceneNumber=a),type:"number",class:"field-input",placeholder:"씬 번호"},null,512),[[y,n.localData.sceneNumber,void 0,{number:!0}]])])):T("",!0),i.stepData?(d(),u("div",rr,[e[77]||(e[77]=t("label",{class:"field-label",for:"sie-raw-text"},"원본 텍스트 (읽기 전용)",-1)),t("textarea",{id:"sie-raw-text",value:i.stepData.rawText,disabled:"",class:"field-textarea disabled",rows:"3"},null,8,ar)])):T("",!0),i.stepData?(d(),u("div",lr,[t("span",dr,[p(c,{name:"search",size:14}),e[78]||(e[78]=I(" JSON 원본 데이터 ",-1))]),t("button",{onClick:e[29]||(e[29]=a=>n.showRawJSON=!n.showRawJSON),class:"toggle-json-button"},g(n.showRawJSON?"숨기기":"보기"),1)])):T("",!0),n.showRawJSON?(d(),u("div",cr,[t("pre",null,g(JSON.stringify(i.stepData,null,2)),1)])):T("",!0)])]),n.localData?(d(),u("div",ur,[t("div",hr,[t("button",{onClick:e[30]||(e[30]=(...a)=>s.deleteStep&&s.deleteStep(...a)),class:"delete-button"},[p(c,{name:"trash",size:16}),e[80]||(e[80]=I(" 스텝 삭제 ",-1))]),t("button",{onClick:e[31]||(e[31]=(...a)=>s.duplicateStep&&s.duplicateStep(...a)),class:"duplicate-button"},[p(c,{name:"clipboard",size:16}),e[81]||(e[81]=I(" 스텝 복사 ",-1))])]),t("button",{onClick:e[32]||(e[32]=(...a)=>s.saveChanges&&s.saveChanges(...a)),class:"save-button",disabled:!s.isDirty||n.logStore.editInProgress},[p(c,{name:"save",size:16}),e[82]||(e[82]=I(" 대사 저장 ",-1))],8,pr)])):T("",!0)])):(d(),u("div",Io,[p(c,{name:"pointer",size:48}),e[38]||(e[38]=t("p",null,"대사 목록에서 편집할 대사를 선택해 주세요",-1))]))]),n.showDeleteConfirm&&i.stepData?(d(),u("div",{key:0,class:"modal-overlay",onClick:e[35]||(e[35]=Y((...a)=>s.cancelDeleteStep&&s.cancelDeleteStep(...a),["self"])),onKeydown:e[36]||(e[36]=_((...a)=>s.cancelDeleteStep&&s.cancelDeleteStep(...a),["esc"]))},[t("div",fr,[t("div",mr,[t("h3",gr,[p(c,{name:"trash",size:20}),e[83]||(e[83]=I(" 스텝 삭제 ",-1))])]),e[84]||(e[84]=t("p",{class:"delete-confirm-message"}," 이 대사를 삭제함으로 옮겨요. 실행 취소하거나 삭제함에서 복구할 수 있어요. ",-1)),t("div",Tr,[t("button",{class:"btn btn-secondary",onClick:e[33]||(e[33]=(...a)=>s.cancelDeleteStep&&s.cancelDeleteStep(...a))},"유지"),t("button",{class:"btn btn-danger",onClick:e[34]||(e[34]=(...a)=>s.confirmDeleteStep&&s.confirmDeleteStep(...a))},"삭제")])],512)],32)):T("",!0)])}const Ir=L(mo,[["render",Sr],["__scopeId","data-v-bc472c41"]]),br={components:{CharacterColorInput:ie,AppIcon:M},name:"CharacterBulkEditor",mixins:[X],props:{beforeChange:{type:Function,default:()=>!0},registeredCharacters:{type:Array,default:()=>[]},allSteps:{type:Array,required:!0}},data(){return{selectedCharacter:null,failedAvatars:new Set,newCharacterName:"",newCharacterColor:"",newAvatarUrl:"",replaceExistingAvatars:!1,imageScope:"empty",selectedAvatarUrl:"",isLoadingAvatar:!1,avatarError:"",avatarRequest:0,convertToNarrator:!1,narratorConfirmAcknowledged:!1,showNarratorConfirm:!1,isApplying:!1,progressCurrent:0,progressTotal:0}},watch:{selectedAvatarUrl(){this.avatarError=""},hasChanges(o){this.$emit("dirty",!!o)}},computed:{selectedSteps(){return this.allSteps.filter(o=>o.character?.name===this.selectedCharacter)},emptyPortraitCount(){return this.selectedSteps.filter(o=>!o.character?.avatarUrl).length},portraitGroups(){const o=new Map;for(const e of this.selectedSteps){const i=e.character?.avatarUrl;i&&o.set(i,(o.get(i)||0)+1)}return Array.from(o,([e,i])=>({url:e,count:i}))},portraitTargetCount(){return this.imageScope==="all"?this.selectedSteps.length:this.imageScope==="same"?this.portraitGroups.find(o=>o.url===this.selectedAvatarUrl)?.count||0:this.emptyPortraitCount},characterGroups(){const o=Object.create(null);for(const e of this.registeredCharacters)o[e.name]={...e,count:0,nonNarratorCount:0,registered:!0};return this.allSteps.forEach(e=>{const i=e.character?.name||"",r=z(e.character?.color),n=e.character?.avatarUrl||null,s=e.type==="narrator";o[i]||(o[i]={name:i,color:r,avatarUrl:null,count:0,nonNarratorCount:0}),o[i].count++,s||o[i].nonNarratorCount++,!o[i].avatarUrl&&n&&(o[i].avatarUrl=n)}),Object.values(o).filter(e=>e.nonNarratorCount>0||e.registered).sort((e,i)=>i.count-e.count)},selectedGroup(){return this.selectedCharacter?this.characterGroups.find(o=>o.name===this.selectedCharacter):null},hasChanges(){if(!this.selectedCharacter)return!1;const o=this.newCharacterName&&this.newCharacterName!==this.selectedCharacter,e=this.newCharacterColor!==this.selectedGroup?.color;return o||e||!!this.newAvatarUrl||this.convertToNarrator},afterGroup(){return{...this.selectedGroup,avatarUrl:this.newAvatarUrl||this.selectedGroup?.avatarUrl}},progressPercentage(){return this.progressTotal===0?0:Math.round(this.progressCurrent/this.progressTotal*100)}},methods:{clearAvatar(){this.avatarRequest++,this.newAvatarUrl="",this.replaceExistingAvatars=!1,this.isLoadingAvatar=!1,this.avatarError=""},async readAvatar(o){const e=o.target.files[0];if(o.target.value="",!e)return;this.clearAvatar();const i=this.avatarRequest;if(!e.type.startsWith("image/")||e.size>10*1024*1024){this.avatarError="10MB 이하 이미지 파일을 선택해 주세요.";return}this.isLoadingAvatar=!0;try{const r=await new Promise((n,s)=>{const c=new FileReader;c.onload=()=>n(c.result),c.onerror=s,c.readAsDataURL(e)});if(!x(r))throw new Error("Unsupported image");await new Promise((n,s)=>{const c=new Image;c.onload=n,c.onerror=s,c.src=r}),i===this.avatarRequest&&(this.newAvatarUrl=r)}catch{i===this.avatarRequest&&(this.avatarError="이미지를 열지 못했어요. 다른 이미지 파일을 선택해 주세요.")}finally{i===this.avatarRequest&&(this.isLoadingAvatar=!1)}},safeSrc(o){return x(o)},hasAvatar(o){return!!this.safeSrc(o?.avatarUrl)&&!this.failedAvatars.has(o.avatarUrl)},getListAvatarStyle(o){const e=o?.color||"var(--border-color)",i={borderColor:e,color:o?.color?"var(--on-accent)":"var(--text-color)",textShadow:o?.color?void 0:"none"};return this.hasAvatar(o)||(i.backgroundColor=e),i},getPreviewAvatarStyle(o,e){const i=e||"var(--border-color)",r={borderColor:i,color:e?"var(--on-accent)":"var(--text-color)",textShadow:e?void 0:"none"};return this.hasAvatar(o)||(r.backgroundColor=i),r},async selectCharacter(o){o!==this.selectedCharacter&&this.hasChanges&&!await this.beforeChange()||this.isApplying||(this.clearAvatar(),this.selectedCharacter=o,this.imageScope="empty",this.selectedAvatarUrl="",this.newCharacterName=o,this.newCharacterColor=this.selectedGroup.color,this.convertToNarrator=!1)},resetForm(){this.clearAvatar(),this.selectedGroup&&(this.newCharacterName=this.selectedCharacter,this.newCharacterColor=this.selectedGroup.color,this.convertToNarrator=!1)},cancelNarratorConfirm(){this.showNarratorConfirm=!1,this.deactivateFocusTrap()},confirmNarratorAndApply(){this.narratorConfirmAcknowledged=!0,this.showNarratorConfirm=!1,this.deactivateFocusTrap(),this.applyChanges()},async applyChanges(){if(!this.hasChanges||this.isApplying||this.isLoadingAvatar||this.avatarError)return;if(this.newAvatarUrl&&this.imageScope==="same"&&!this.selectedAvatarUrl){this.avatarError="교체할 표정을 먼저 선택해 주세요.";return}if(this.convertToNarrator&&!this.narratorConfirmAcknowledged){this.showNarratorConfirm=!0,this.activateFocusTrap("narratorConfirmModal");return}const o=this.selectedCharacter,e=this.newCharacterName||o,i=this.newCharacterColor;this.isApplying=!0,this.progressCurrent=0,this.progressTotal=this.selectedGroup.count;try{this.$emit("bulk-update",{oldName:o,newName:e,newColor:i,newAvatarUrl:this.newAvatarUrl||void 0,replaceExistingAvatars:this.imageScope==="all",imageScope:this.imageScope,selectedAvatarUrl:this.selectedAvatarUrl,convertToNarrator:this.convertToNarrator,onProgress:(r,n)=>{this.progressCurrent=r,this.progressTotal=n},onComplete:async r=>{await new Promise(n=>setTimeout(n,300)),this.selectedCharacter=null,this.newCharacterName="",this.newCharacterColor="",this.clearAvatar(),this.convertToNarrator=!1,await this.$nextTick(),this.isApplying=!1,this.progressCurrent=0,this.progressTotal=0,this.$toast(r.message,r.success?"success":"error")}})}catch(r){console.error("일괄 변경 실패:",r),this.isApplying=!1,this.progressCurrent=0,this.progressTotal=0,await new Promise(n=>setTimeout(n,150)),this.$toast("캐릭터를 일괄 변경하지 못했어요. 다시 시도해 주세요","error")}}},beforeUnmount(){this.avatarRequest++}},Er={class:"character-bulk-editor"},yr={key:0,class:"loading-overlay",role:"status","aria-live":"polite"},Or={class:"loading-content"},Rr={class:"progress-section"},vr={class:"progress-bar"},Nr={class:"progress-text"},Ar={class:"editor-header"},wr={class:"editor-body"},Cr={class:"info-message"},Lr={class:"character-list"},Dr={class:"list-header"},Hr={class:"list-body"},Ur=["aria-pressed","onClick"],kr=["src","onError","alt"],Fr={key:1},Pr={class:"character-info"},xr={class:"character-name"},Vr={key:0,class:"selection-label"},Mr={class:"character-count"},Wr={key:0,class:"edit-form"},Br={class:"form-header"},Yr={class:"affected-count"},Gr={class:"bulk-workspace"},_r={class:"bulk-settings"},zr={class:"bulk-group"},jr={class:"field-group"},Kr=["placeholder"],qr={class:"field-group"},Xr={class:"bulk-group"},Jr={class:"image-scope"},Zr=["disabled"],Qr=["disabled"],$r={key:0,class:"expression-choice"},ea=["disabled"],ta=["value"],na=["src"],oa=["disabled"],sa={class:"option-help",role:"status"},ia={class:"field-group"},ra=["disabled"],aa={key:0,role:"status",class:"option-help"},la={key:1,role:"alert",class:"image-error"},da=["disabled"],ca={class:"bulk-group"},ua={class:"field-group"},ha={class:"checkbox-row"},pa={class:"option-help"},fa={class:"bulk-preview"},ma={class:"preview-section"},ga={class:"preview-comparison"},Ta={class:"preview-item before"},Sa={class:"preview-box"},Ia=["src","alt"],ba={key:1},Ea={class:"preview-arrow"},ya={class:"preview-item after"},Oa={class:"preview-box"},Ra=["src","alt"],va={key:1},Na={class:"actions"},Aa=["disabled"],wa=["disabled"],Ca={key:1,class:"no-selection"},La={class:"confirm-content",ref:"narratorConfirmModal",tabindex:"-1",role:"dialog","aria-modal":"true","aria-labelledby":"narrator-confirm-title"},Da={class:"confirm-title",id:"narrator-confirm-title"},Ha={class:"confirm-buttons"};function Ua(o,e,i,r,n,s){const c=R("AppIcon"),m=R("CharacterColorInput");return d(),u("div",Er,[n.isApplying?(d(),u("div",yr,[t("div",Or,[e[18]||(e[18]=t("div",{class:"spinner"},null,-1)),e[19]||(e[19]=t("p",{class:"loading-text"},"캐릭터 정보를 일괄 변경하는 중...",-1)),t("div",Rr,[t("div",vr,[t("div",{class:"progress-fill",style:U({width:s.progressPercentage+"%"})},null,4)]),t("p",Nr,g(n.progressCurrent)+" / "+g(n.progressTotal)+" 스텝 ("+g(s.progressPercentage)+"%)",1)]),e[20]||(e[20]=t("p",{class:"loading-subtext"},"잠시만 기다려주세요",-1))])])):T("",!0),t("div",Ar,[t("h3",null,[p(c,{name:"users",size:20}),e[21]||(e[21]=I(" 캐릭터 일괄 편집 ",-1))])]),t("div",wr,[t("div",Cr,[p(c,{name:"info",size:18}),e[22]||(e[22]=t("p",null,"캐릭터를 선택하면 같은 이름의 대사를 한꺼번에 수정할 수 있어요.",-1))]),t("div",Lr,[t("div",Dr,[t("h4",null,"캐릭터 목록 ("+g(s.characterGroups.length)+"명)",1)]),t("div",Hr,[(d(!0),u(v,null,N(s.characterGroups,l=>(d(),u("button",{type:"button",key:l.name,class:w(["character-item",{selected:n.selectedCharacter===l.name}]),"aria-pressed":n.selectedCharacter===l.name,onClick:a=>s.selectCharacter(l.name)},[t("div",{class:"character-avatar",style:U(s.getListAvatarStyle(l))},[s.hasAvatar(l)?(d(),u("img",{key:0,src:s.safeSrc(l.avatarUrl),onError:a=>n.failedAvatars.add(l.avatarUrl),alt:`${l.name||"캐릭터"} 아바타`,loading:"lazy",referrerpolicy:"no-referrer"},null,40,kr)):(d(),u("span",Fr,g((l.name||"?").charAt(0)),1))],4),t("div",Pr,[t("div",xr,[I(g(l.name||"(이름 없음)")+" ",1),n.selectedCharacter===l.name?(d(),u("span",Vr," · 선택됨")):T("",!0)]),t("div",Mr,g(l.count)+"개 스텝",1)])],10,Ur))),128))])]),n.selectedCharacter&&s.selectedGroup?(d(),u("div",Wr,[t("div",Br,[t("h4",null,[p(c,{name:"edit",size:16}),I(' "'+g(n.selectedCharacter)+'" 편집 ',1)]),t("span",Yr,g(s.selectedGroup.count)+"개 스텝에 적용됩니다",1)]),t("div",Gr,[t("div",_r,[t("section",zr,[e[25]||(e[25]=t("h5",null,"이름과 색상",-1)),t("div",jr,[e[23]||(e[23]=t("label",{class:"field-label"},"새 캐릭터 이름",-1)),S(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>n.newCharacterName=l),type:"text",class:"field-input",placeholder:n.selectedCharacter},null,8,Kr),[[y,n.newCharacterName]])]),t("div",qr,[e[24]||(e[24]=t("label",{class:"field-label"},"새 캐릭터 색상",-1)),p(m,{modelValue:n.newCharacterColor,"onUpdate:modelValue":e[1]||(e[1]=l=>n.newCharacterColor=l)},null,8,["modelValue"])])]),t("section",Xr,[e[32]||(e[32]=t("h5",null,"캐릭터 이미지",-1)),s.selectedGroup.avatarUrl?(d(),u("button",{key:0,class:"btn btn-ghost",onClick:e[2]||(e[2]=l=>o.$emit("edit-image",s.selectedGroup.avatarUrl))},"이 그림의 모든 사용처 보기")):T("",!0),t("fieldset",Jr,[e[29]||(e[29]=t("legend",null,"어느 대사에 적용할까요?",-1)),t("label",null,[S(t("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>n.imageScope=l),type:"radio",value:"empty",disabled:n.isApplying},null,8,Zr),[[F,n.imageScope]]),I("그림이 없는 대사에만 채우기 · "+g(s.emptyPortraitCount)+"개",1)]),t("label",null,[S(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>n.imageScope=l),type:"radio",value:"same",disabled:n.isApplying||!s.portraitGroups.length},null,8,Qr),[[F,n.imageScope]]),e[26]||(e[26]=I("선택한 표정만 교체하기",-1))]),n.imageScope==="same"?(d(),u("label",$r,[e[28]||(e[28]=I("바꿀 표정",-1)),S(t("select",{"onUpdate:modelValue":e[5]||(e[5]=l=>n.selectedAvatarUrl=l),disabled:n.isApplying},[e[27]||(e[27]=t("option",{value:"",disabled:""},"표정 선택",-1)),(d(!0),u(v,null,N(s.portraitGroups,(l,a)=>(d(),u("option",{key:l.url,value:l.url},"표정 "+g(a+1)+" · "+g(l.count)+"개 대사",9,ta))),128))],8,ea),[[V,n.selectedAvatarUrl]]),n.selectedAvatarUrl?(d(),u("img",{key:0,src:s.safeSrc(n.selectedAvatarUrl),alt:"교체할 표정"},null,8,na)):T("",!0)])):T("",!0),t("label",null,[S(t("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>n.imageScope=l),type:"radio",value:"all",disabled:n.isApplying},null,8,oa),[[F,n.imageScope]]),I("이 인물의 모든 그림 바꾸기 · "+g(s.selectedGroup.count)+"개",1)]),t("p",sa,g(n.imageScope==="all"?"서로 다른 표정도 같은 그림으로 바뀌어요.":n.imageScope==="same"?"이 인물의 선택한 표정만 바꿔요. 다른 인물과 배경은 유지해요.":"기존 표정은 그대로 남아요.")+" 적용 대상 "+g(s.portraitTargetCount)+"개 대사",1)]),t("div",ia,[e[30]||(e[30]=t("label",{for:"bulk-character-image",class:"field-label"},"새 캐릭터 이미지",-1)),t("input",{id:"bulk-character-image",type:"file",accept:"image/*",class:"field-input",disabled:n.isApplying,onChange:e[7]||(e[7]=(...l)=>s.readAvatar&&s.readAvatar(...l))},null,40,ra),e[31]||(e[31]=t("p",{class:"option-help"},"10MB 이하 이미지 파일을 선택해 주세요.",-1)),n.isLoadingAvatar?(d(),u("p",aa,"이미지 확인 중…")):T("",!0),n.avatarError?(d(),u("p",la,g(n.avatarError),1)):T("",!0),n.newAvatarUrl?(d(),u("button",{key:2,type:"button",class:"btn btn-ghost",disabled:n.isApplying,onClick:e[8]||(e[8]=(...l)=>s.clearAvatar&&s.clearAvatar(...l))},"이미지 선택 취소",8,da)):T("",!0)])]),t("section",ca,[e[36]||(e[36]=t("h5",null,"대사 유형",-1)),t("div",ua,[e[35]||(e[35]=t("label",{class:"field-label"},"나레이터 변환",-1)),t("label",ha,[S(t("input",{"onUpdate:modelValue":e[9]||(e[9]=l=>n.convertToNarrator=l),type:"checkbox",class:"checkbox-input"},null,512),[[H,n.convertToNarrator]]),e[33]||(e[33]=t("span",{class:"checkbox-text"},[I(" 선택 캐릭터의 스텝을 "),t("strong",null,"나레이터"),I(" 타입으로 변환 ")],-1))]),t("p",pa,[p(c,{name:"warning",size:14}),e[34]||(e[34]=I(" 변환 후에는 대사 박스가 나레이터 스타일로 표시됩니다. ",-1))])])])]),t("aside",fa,[t("div",ma,[e[39]||(e[39]=t("h5",null,"변경 전/후 미리보기",-1)),t("div",ga,[t("div",Ta,[e[37]||(e[37]=t("span",{class:"preview-label"},"변경 전",-1)),t("div",Sa,[t("div",{class:"preview-avatar",style:U(s.getPreviewAvatarStyle(s.selectedGroup,s.selectedGroup.color))},[s.hasAvatar(s.selectedGroup)?(d(),u("img",{key:0,src:s.safeSrc(s.selectedGroup.avatarUrl),onError:e[10]||(e[10]=l=>n.failedAvatars.add(s.selectedGroup.avatarUrl)),alt:`${n.selectedCharacter} 아바타`,loading:"lazy",referrerpolicy:"no-referrer"},null,40,Ia)):(d(),u("span",ba,g(n.selectedCharacter.charAt(0)),1))],4),t("span",{class:"preview-name",style:U({color:s.selectedGroup.color})},g(n.selectedCharacter),5)])]),t("div",Ea,[p(c,{name:"arrow",size:24})]),t("div",ya,[e[38]||(e[38]=t("span",{class:"preview-label"},"변경 후",-1)),t("div",Oa,[t("div",{class:"preview-avatar",style:U(s.getPreviewAvatarStyle(s.afterGroup,n.newCharacterColor))},[s.hasAvatar(s.afterGroup)?(d(),u("img",{key:0,src:s.safeSrc(s.afterGroup.avatarUrl),onError:e[11]||(e[11]=l=>n.failedAvatars.add(s.afterGroup.avatarUrl)),alt:`${n.newCharacterName||n.selectedCharacter} 아바타`,loading:"lazy",referrerpolicy:"no-referrer"},null,40,Ra)):(d(),u("span",va,g((n.newCharacterName||n.selectedCharacter).charAt(0)),1))],4),t("span",{class:"preview-name",style:U({color:n.newCharacterColor})},g(n.newCharacterName||n.selectedCharacter),5)])])])])])]),t("div",Na,[t("button",{onClick:e[12]||(e[12]=(...l)=>s.resetForm&&s.resetForm(...l)),class:"reset-button",disabled:n.isApplying},[p(c,{name:"refresh",size:16}),e[40]||(e[40]=I(" 초기화 ",-1))],8,Aa),t("button",{onClick:e[13]||(e[13]=(...l)=>s.applyChanges&&s.applyChanges(...l)),class:"apply-button",disabled:!s.hasChanges||n.isApplying||n.isLoadingAvatar||!!n.avatarError},[n.isApplying?(d(),u(v,{key:0},[e[41]||(e[41]=t("div",{class:"button-spinner"},null,-1)),e[42]||(e[42]=I(" 적용하는 중... ",-1))],64)):(d(),u(v,{key:1},[p(c,{name:"check",size:16}),e[43]||(e[43]=I(" 일괄 적용 ",-1))],64))],8,wa)])])):(d(),u("div",Ca,[p(c,{name:"pointer",size:48}),e[44]||(e[44]=t("p",null,"목록에서 수정할 캐릭터를 선택하세요",-1))])),n.showNarratorConfirm?(d(),u("div",{key:2,class:"confirm-modal",onClick:e[16]||(e[16]=Y(()=>{},["stop"])),onKeydown:e[17]||(e[17]=_((...l)=>s.cancelNarratorConfirm&&s.cancelNarratorConfirm(...l),["esc"]))},[t("div",La,[t("h3",Da,[p(c,{name:"warning",size:18}),e[45]||(e[45]=I(" 나레이터 변환 확인 ",-1))]),e[46]||(e[46]=t("p",{class:"confirm-text"},[I(" 선택한 캐릭터의 모든 스텝 타입이 "),t("strong",null,"나레이터"),I(" 로 변경됩니다. ")],-1)),t("div",Ha,[t("button",{class:"btn btn-secondary",onClick:e[14]||(e[14]=(...l)=>s.cancelNarratorConfirm&&s.cancelNarratorConfirm(...l))}," 취소 "),t("button",{class:"btn btn-primary",onClick:e[15]||(e[15]=(...l)=>s.confirmNarratorAndApply&&s.confirmNarratorAndApply(...l))}," 변환 적용 ")])],512)],32)):T("",!0)])])}const ka=L(br,[["render",Ua],["__scopeId","data-v-e70e9be2"]]),Fa={components:{AppIcon:M},name:"ImageBulkEditor",props:{beforeChange:{type:Function,default:()=>!0},vnData:{type:Object,required:!0}},data(){return{selectedImageUrl:null,newImageUrl:"",isApplying:!1,progressCurrent:0,progressTotal:0,activeFilter:"all",imageTypes:[{value:"all",label:"전체",icon:"globe"},{value:"avatar",label:"아바타",icon:"user"},{value:"background",label:"배경",icon:"palette"},{value:"handout",label:"핸드아웃",icon:"document"},{value:"illustration",label:"일러스트",icon:"photo"}],isLoadingFile:!1}},watch:{hasChanges(o){this.$emit("dirty",!!o)}},computed:{imageGroups(){const o=Object.create(null);for(const e of K(this.vnData))o[e.url]={url:e.url,name:e.name,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}};return this.vnData.scenes&&this.vnData.scenes.forEach((e,i)=>{e.steps?.forEach((r,n)=>{const s=r.character?.avatarUrl;if(s){o[s]||(o[s]={url:s,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}}),o[s].count++,o[s].types.add("avatar");const m=r.character.name;o[s].locations.avatar.includes(m)||o[s].locations.avatar.push(m)}const c=r.effects?.background;c&&(o[c]||(o[c]={url:c,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}}),o[c].count++,o[c].types.add("background"),o[c].locations.background.push(`씬${i+1} 스텝${n+1}`)),r.illustrations&&Array.isArray(r.illustrations)&&r.illustrations.forEach((m,l)=>{const a=m.url;a&&(o[a]||(o[a]={url:a,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}}),o[a].count++,o[a].types.add("illustration"),o[a].locations.illustration.push(`씬${i+1} 스텝${n+1}-${l+1}`))})})}),this.vnData.handouts&&this.vnData.handouts.forEach(e=>{const i=e.imageUrl;i&&(o[i]||(o[i]={url:i,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}}),o[i].count++,o[i].types.add("handout"),o[i].locations.handout.push(e.title||e.id))}),Object.values(o).map(e=>({...e,types:Array.from(e.types)})).sort((e,i)=>i.count-e.count)},filteredImageGroups(){return this.activeFilter==="all"?this.imageGroups:this.imageGroups.filter(o=>o.types.includes(this.activeFilter))},selectedGroup(){return this.selectedImageUrl?this.imageGroups.find(o=>o.url===this.selectedImageUrl):null},hasChanges(){return this.selectedImageUrl?this.newImageUrl&&this.newImageUrl!==this.selectedImageUrl:!1},progressPercentage(){return this.progressTotal===0?0:Math.round(this.progressCurrent/this.progressTotal*100)}},methods:{safeSrc(o){return x(o)},async selectImage(o){o!==this.selectedImageUrl&&this.hasChanges&&!await this.beforeChange()||(this.selectedImageUrl=o,this.newImageUrl=o)},resetForm(){this.selectedGroup&&(this.newImageUrl=this.selectedImageUrl)},async handleImageFileSelect(o){const e=o.target.files[0];if(e){if(e.size>2*1024*1024){this.$toast("이미지 파일은 2MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const i=await this.fileToBase64(e);this.newImageUrl=i,e.name,e.size,i.length}catch(i){console.error("[ImageBulkEditor] 파일 로드 실패:",i),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}}},fileToBase64(o){return new Promise((e,i)=>{const r=new FileReader;r.onload=()=>e(r.result),r.onerror=i,r.readAsDataURL(o)})},clearNewImage(){this.newImageUrl=this.selectedImageUrl},truncateUrl(o,e=50){return o?o.length<=e?o:o.substring(0,e-3)+"...":""},handleImageError(o){o.target.style.display="none",o.target.parentElement.classList.add("error")},async applyChanges(){if(!this.hasChanges||this.isApplying)return;const o=this.selectedImageUrl,e=this.newImageUrl;this.isApplying=!0,this.progressCurrent=0,this.progressTotal=this.selectedGroup.count;try{this.$emit("bulk-update",{oldUrl:o,newUrl:e,onProgress:(i,r)=>{this.progressCurrent=i,this.progressTotal=r},onComplete:async i=>{await new Promise(r=>setTimeout(r,300)),this.selectedImageUrl=null,this.newImageUrl="",await this.$nextTick(),this.isApplying=!1,this.progressCurrent=0,this.progressTotal=0,this.$toast(i.message,i.success?"success":"error")}})}catch(i){console.error("일괄 변경 실패:",i),this.isApplying=!1,this.progressCurrent=0,this.progressTotal=0,await new Promise(r=>setTimeout(r,150)),this.$toast("이미지 주소를 일괄 변경하지 못했어요. 다시 시도해 주세요","error")}}}},Pa={class:"image-bulk-editor"},xa={key:0,class:"loading-overlay",role:"status","aria-live":"polite"},Va={class:"loading-content"},Ma={class:"progress-section"},Wa={class:"progress-bar"},Ba={class:"progress-text"},Ya={class:"editor-header"},Ga={class:"editor-body"},_a={class:"info-message"},za={class:"image-list"},ja={class:"list-header"},Ka={class:"filter-buttons"},qa=["onClick"],Xa={class:"list-body"},Ja=["aria-pressed","onClick"],Za={class:"image-preview"},Qa=["src","alt"],$a={class:"image-info"},el=["title"],tl={class:"image-meta"},nl={class:"usage-count"},ol={class:"usage-types"},sl={key:0,class:"edit-form"},il=["onClick"],rl={class:"form-header"},al={class:"affected-count"},ll={class:"bulk-workspace"},dl={class:"bulk-settings"},cl={class:"bulk-group"},ul={class:"field-group"},hl={class:"current-url"},pl={class:"field-group"},fl={class:"file-input-group"},ml=["value","readonly"],gl=["disabled"],Tl=["disabled"],Sl={class:"hint-text"},Il={class:"bulk-preview"},bl={class:"preview-section"},El={class:"preview-comparison"},yl={class:"preview-item before"},Ol={class:"preview-box"},Rl=["src"],vl={class:"preview-arrow"},Nl={class:"preview-item after"},Al={class:"preview-box"},wl=["src"],Cl={key:1,class:"preview-placeholder"},Ll={class:"usage-details"},Dl={class:"usage-list"},Hl={key:0,class:"usage-type"},Ul={key:1,class:"usage-type"},kl={key:2,class:"usage-type"},Fl={key:3,class:"usage-type"},Pl={class:"actions"},xl=["disabled"],Vl=["disabled"],Ml={key:1,class:"no-selection"};function Wl(o,e,i,r,n,s){const c=R("AppIcon");return d(),u("div",Pa,[n.isApplying?(d(),u("div",xa,[t("div",Va,[e[9]||(e[9]=t("div",{class:"spinner"},null,-1)),e[10]||(e[10]=t("p",{class:"loading-text"},"이미지 URL을 일괄 변경하는 중...",-1)),t("div",Ma,[t("div",Wa,[t("div",{class:"progress-fill",style:U({width:s.progressPercentage+"%"})},null,4)]),t("p",Ba,g(n.progressCurrent)+" / "+g(n.progressTotal)+" 항목 ("+g(s.progressPercentage)+"%)",1)]),e[11]||(e[11]=t("p",{class:"loading-subtext"},"잠시만 기다려주세요",-1))])])):T("",!0),t("div",Ya,[t("h3",null,[p(c,{name:"photo",size:20}),e[12]||(e[12]=I(" 이미지 일괄 편집 ",-1))])]),t("div",Ga,[t("div",_a,[p(c,{name:"info",size:18}),e[13]||(e[13]=t("p",null,"이미지를 고르면 표정·배경·삽화에 사용한 같은 이미지를 함께 바꿀 수 있어요.",-1))]),t("div",za,[t("div",ja,[t("h4",null,"이미지 목록 · "+g(s.imageGroups.length)+"개",1),t("div",Ka,[(d(!0),u(v,null,N(n.imageTypes,m=>(d(),u("button",{key:m.value,class:w(["filter-button",{active:n.activeFilter===m.value}]),onClick:l=>n.activeFilter=m.value},[p(c,{name:m.icon,size:14},null,8,["name"]),I(" "+g(m.label),1)],10,qa))),128))])]),t("div",Xa,[(d(!0),u(v,null,N(s.filteredImageGroups,m=>(d(),u("button",{type:"button",key:m.url,class:w(["image-item",{selected:n.selectedImageUrl===m.url}]),"aria-pressed":n.selectedImageUrl===m.url,onClick:l=>s.selectImage(m.url)},[t("div",Za,[t("img",{src:s.safeSrc(m.url),alt:m.name||"이미지",onError:e[0]||(e[0]=(...l)=>s.handleImageError&&s.handleImageError(...l))},null,40,Qa)]),t("div",$a,[t("div",{class:"image-url",title:m.name||s.truncateUrl(m.url)},g(m.name||s.truncateUrl(m.url)),9,el),t("div",tl,[t("span",nl,g(m.count)+"회 사용",1),t("span",ol,[m.types.includes("avatar")?(d(),k(c,{key:0,name:"user",size:12,title:"아바타"})):T("",!0),m.types.includes("background")?(d(),k(c,{key:1,name:"palette",size:12,title:"배경"})):T("",!0),m.types.includes("handout")?(d(),k(c,{key:2,name:"document",size:12,title:"핸드아웃"})):T("",!0),m.types.includes("illustration")?(d(),k(c,{key:3,name:"photo",size:12,title:"일러스트"})):T("",!0)])])])],10,Ja))),128))])]),n.selectedImageUrl&&s.selectedGroup?(d(),u("div",sl,[e[29]||(e[29]=t("p",{class:"option-help"},"이 그림의 모든 사용처를 함께 바꿔요. 특정 인물만 바꾸려면 캐릭터 편집으로 이동하세요.",-1)),t("div",null,[(d(!0),u(v,null,N(s.selectedGroup.locations.avatar,m=>(d(),u("button",{key:m,class:"btn btn-ghost",onClick:l=>o.$emit("edit-character",m)},g(m)+"의 표정만 바꾸기",9,il))),128))]),t("div",rl,[t("h4",null,[p(c,{name:"edit",size:16}),e[14]||(e[14]=I(" 선택한 이미지 교체 ",-1))]),t("span",al,g(s.selectedGroup.count)+"개 항목에 적용됩니다",1)]),t("div",ll,[t("div",dl,[t("section",cl,[e[19]||(e[19]=t("h5",null,"바꿀 이미지",-1)),t("div",ul,[e[15]||(e[15]=t("label",{class:"field-label"},"현재 이미지 URL",-1)),t("div",hl,g(n.selectedImageUrl.startsWith("data:")?"로그에 담긴 이미지 파일":n.selectedImageUrl),1)]),t("div",pl,[e[18]||(e[18]=t("label",{class:"field-label"},"새 이미지 URL",-1)),t("div",fl,[t("input",{value:n.newImageUrl.startsWith("data:")?"선택한 이미지 파일":n.newImageUrl,readonly:n.newImageUrl.startsWith("data:"),onInput:e[1]||(e[1]=m=>n.newImageUrl=m.target.value),type:"text",class:"field-input",placeholder:"새 이미지 URL 입력 또는 파일 선택"},null,40,ml),t("input",{ref:"imageFileInput",type:"file",accept:"image/*",onChange:e[2]||(e[2]=(...m)=>s.handleImageFileSelect&&s.handleImageFileSelect(...m)),style:{display:"none"}},null,544),t("button",{onClick:e[3]||(e[3]=m=>o.$refs.imageFileInput.click()),class:"file-select-button",disabled:n.isApplying},[p(c,{name:"folder",size:14}),e[16]||(e[16]=I(" 파일 ",-1))],8,gl),n.newImageUrl?(d(),u("button",{key:0,onClick:e[4]||(e[4]=(...m)=>s.clearNewImage&&s.clearNewImage(...m)),class:"clear-button",disabled:n.isApplying},[p(c,{name:"close",size:14})],8,Tl)):T("",!0)]),t("p",Sl,[p(c,{name:"info",size:12}),e[17]||(e[17]=I(" 2MB 이하 이미지 파일을 선택하세요. 로그와 함께 보관해요. ",-1))])])])]),t("aside",Il,[t("div",bl,[e[23]||(e[23]=t("h5",null,"변경 전/후 미리보기",-1)),t("div",El,[t("div",yl,[e[20]||(e[20]=t("span",{class:"preview-label"},"변경 전",-1)),t("div",Ol,[t("img",{src:s.safeSrc(n.selectedImageUrl),alt:"변경 전",onError:e[5]||(e[5]=(...m)=>s.handleImageError&&s.handleImageError(...m))},null,40,Rl)])]),t("div",vl,[p(c,{name:"arrow",size:24})]),t("div",Nl,[e[22]||(e[22]=t("span",{class:"preview-label"},"변경 후",-1)),t("div",Al,[n.newImageUrl?(d(),u("img",{key:0,src:s.safeSrc(n.newImageUrl),alt:"변경 후",onError:e[6]||(e[6]=(...m)=>s.handleImageError&&s.handleImageError(...m))},null,40,wl)):(d(),u("div",Cl,[p(c,{name:"photo",size:32}),e[21]||(e[21]=t("span",null,"URL을 입력하세요",-1))]))])])])]),t("div",Ll,[e[24]||(e[24]=t("h5",null,"사용 위치 상세",-1)),t("div",Dl,[s.selectedGroup.types.includes("avatar")?(d(),u("div",Hl,[p(c,{name:"user",size:16}),t("span",null,"아바타 ("+g(s.selectedGroup.locations.avatar.length)+"개 캐릭터)",1)])):T("",!0),s.selectedGroup.types.includes("background")?(d(),u("div",Ul,[p(c,{name:"palette",size:16}),t("span",null,"배경 ("+g(s.selectedGroup.locations.background.length)+"개 스텝)",1)])):T("",!0),s.selectedGroup.types.includes("handout")?(d(),u("div",kl,[p(c,{name:"document",size:16}),t("span",null,"핸드아웃 ("+g(s.selectedGroup.locations.handout.length)+"개)",1)])):T("",!0),s.selectedGroup.types.includes("illustration")?(d(),u("div",Fl,[p(c,{name:"photo",size:16}),t("span",null,"일러스트 ("+g(s.selectedGroup.locations.illustration.length)+"개)",1)])):T("",!0)])])])]),t("div",Pl,[t("button",{onClick:e[7]||(e[7]=(...m)=>s.resetForm&&s.resetForm(...m)),class:"reset-button",disabled:n.isApplying},[p(c,{name:"refresh",size:16}),e[25]||(e[25]=I(" 초기화 ",-1))],8,xl),t("button",{onClick:e[8]||(e[8]=(...m)=>s.applyChanges&&s.applyChanges(...m)),class:"apply-button",disabled:!s.hasChanges||n.isApplying},[n.isApplying?(d(),u(v,{key:0},[e[26]||(e[26]=t("div",{class:"button-spinner"},null,-1)),e[27]||(e[27]=I(" 적용하는 중... ",-1))],64)):(d(),u(v,{key:1},[p(c,{name:"check",size:16}),e[28]||(e[28]=I(" 일괄 적용 ",-1))],64))],8,Vl)])])):(d(),u("div",Ml,[p(c,{name:"pointer",size:48}),e[30]||(e[30]=t("p",null,"목록에서 수정할 이미지를 선택하세요",-1))]))])])}const Bl=L(Fa,[["render",Wl],["__scopeId","data-v-37c48869"]]),Yl={name:"ColorPicker",props:{modelValue:{type:String,default:"#ffffff"},supportsAlpha:{type:Boolean,default:!0},placeholder:{type:String,default:"#ffffff 또는 rgba(255,255,255,0.8)"}},data(){return{hexValue:"#ffffff",opacityValue:1,tempTextValue:""}},computed:{displayValue(){return this.tempTextValue||this.modelValue}},watch:{modelValue:{immediate:!0,handler(o){o&&!this.tempTextValue&&this.parseColor(o)}}},methods:{parseColor(o){if(!o)return;const e=o.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(e){const i=parseInt(e[1]),r=parseInt(e[2]),n=parseInt(e[3]),s=e[4]?parseFloat(e[4]):1;this.hexValue=this.rgbToHex(i,r,n),this.opacityValue=s;return}if(o.startsWith("#")){this.hexValue=o,this.opacityValue=1;return}this.hexValue=o,this.opacityValue=1},rgbToHex(o,e,i){return"#"+[o,e,i].map(r=>{const n=r.toString(16);return n.length===1?"0"+n:n}).join("")},hexToRgb(o){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},buildColorString(){if(!this.supportsAlpha||this.opacityValue===1)return this.hexValue;const o=this.hexToRgb(this.hexValue);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${this.opacityValue})`:this.hexValue},handleColorChange(o){this.hexValue=o.target.value,this.tempTextValue="",this.emitValue()},handleOpacityChange(o){this.opacityValue=parseFloat(o.target.value),this.tempTextValue="",this.emitValue()},handleTextChange(o){this.tempTextValue=o.target.value},validateAndUpdate(){const o=this.tempTextValue;if(!o){this.tempTextValue="";return}this.parseColor(o),this.tempTextValue="",this.emitValue()},emitValue(){const o=this.buildColorString();this.$emit("update:modelValue",o)}}},Gl={class:"color-picker"},_l={class:"color-inputs"},zl=["value"],jl=["value","placeholder"],Kl={key:0,class:"opacity-slider"},ql=["value"],Xl={class:"opacity-value"};function Jl(o,e,i,r,n,s){return d(),u("div",Gl,[t("div",_l,[t("input",{type:"color",value:n.hexValue,onInput:e[0]||(e[0]=(...c)=>s.handleColorChange&&s.handleColorChange(...c)),class:"color-swatch"},null,40,zl),t("input",{type:"text",value:s.displayValue,onInput:e[1]||(e[1]=(...c)=>s.handleTextChange&&s.handleTextChange(...c)),onBlur:e[2]||(e[2]=(...c)=>s.validateAndUpdate&&s.validateAndUpdate(...c)),class:"color-text",placeholder:i.placeholder},null,40,jl)]),i.supportsAlpha?(d(),u("div",Kl,[e[4]||(e[4]=t("label",{class:"opacity-label"},"투명도",-1)),t("input",{type:"range",value:n.opacityValue,onInput:e[3]||(e[3]=(...c)=>s.handleOpacityChange&&s.handleOpacityChange(...c)),min:"0",max:"1",step:"0.01",class:"opacity-range"},null,40,ql),t("span",Xl,g(Math.round(n.opacityValue*100))+"%",1)])):T("",!0)])}const Zl=L(Yl,[["render",Jl],["__scopeId","data-v-bdaacfd1"]]),Ql={name:"UnitInput",props:{modelValue:{type:String,default:"0px"},units:{type:Array,default:()=>["px","rem","em","%","vh","vw"]},min:{type:Number,default:0},max:{type:Number,default:null},step:{type:Number,default:1},placeholder:{type:String,default:"0"}},data(){return{numericValue:0,unitValue:"px"}},computed:{availableUnits(){return this.units}},watch:{modelValue:{immediate:!0,handler(o){this.parseValue(o)}}},methods:{parseValue(o){if(!o||o===""){this.numericValue=0,this.unitValue=this.units[0]||"px";return}const e=String(o).match(/^([-+]?[\d.]+)([a-z%]+)?$/i);e?(this.numericValue=parseFloat(e[1])||0,this.unitValue=e[2]||this.units[0]||"px"):(this.numericValue=0,this.unitValue=this.units[0]||"px")},handleNumberChange(o){this.numericValue=parseFloat(o.target.value)||0,this.emitValue()},handleUnitChange(o){this.unitValue=o.target.value,this.emitValue()},emitValue(){const o=`${this.numericValue}${this.unitValue}`;this.$emit("update:modelValue",o)}}},$l={class:"unit-input"},ed=["value","min","max","step","placeholder"],td=["value"],nd=["value"];function od(o,e,i,r,n,s){return d(),u("div",$l,[t("input",{type:"number",value:n.numericValue,onInput:e[0]||(e[0]=(...c)=>s.handleNumberChange&&s.handleNumberChange(...c)),min:i.min,max:i.max,step:i.step,class:"unit-number",placeholder:i.placeholder},null,40,ed),t("select",{value:n.unitValue,onChange:e[1]||(e[1]=(...c)=>s.handleUnitChange&&s.handleUnitChange(...c)),class:"unit-select"},[(d(!0),u(v,null,N(s.availableUnits,c=>(d(),u("option",{key:c,value:c},g(c),9,nd))),128))],40,td)])}const sd=L(Ql,[["render",od],["__scopeId","data-v-89956fa3"]]),id={name:"CustomCSSEditor",components:{AppIcon:M,AppSelect:ke,ColorPicker:Zl,UnitInput:sd,StepLivePreview:be},props:{previewStep:{type:Object,default:null},characters:{type:Object,default:()=>({})},projectTitle:{type:String,default:""},baseTheme:{type:Object,default:()=>({})},saving:{type:Boolean,default:!1},initialCSS:{type:Object,default:()=>({})}},data(){return{loadedCSS:null,currentSection:"easy",advanced:!1,previewWithoutCSS:!1,palettes:Fe,sections:[{id:"dialog",name:"대사창",icon:"chat"},{id:"character",name:"캐릭터 이미지",icon:"user"},{id:"controls",name:"재생 버튼",icon:"adjust"},{id:"overlay",name:"다이스·알림",icon:"device"},{id:"global",name:"전체 화면",icon:"globe"},{id:"code",name:"CSS 코드",icon:"edit"}],cssVars:this.getDefaultCSSVars(),cssCodeText:"",userCustomCSS:""}},watch:{isDirty(o){this.$emit("dirty",o)},initialCSS:{deep:!0,handler(o){oe(o,this.loadedCSS)||this.loadCustomCSS(o)}}},computed:{portraitPreset(){const o=this.cssVars.characterMaxWidth,e=this.cssVars.characterMaxHeight;return!o&&!e?"":Object.entries({small:["160px","24vh"],normal:["250px","32vh"],large:["320px","40vh"]}).find(([,i])=>i[0]===o&&i[1]===e)?.[0]||"custom"},currentCSSFingerprint(){return ue(this.userCustomCSS)},savedCSSFingerprint(){return ue(this.initialCSS?.userCustomCSS||"")},hasUserCustomCSS(){return!!this.userCustomCSS.trim()&&!He(this.userCustomCSS,this.currentCSSFingerprint)},isDirty(){const o=this.initialCSS?.cssVars||this.initialCSS||{};return Object.keys(this.cssVars).some(e=>this.cssVars[e]!==(o[e]||""))||this.currentCSSFingerprint!==this.savedCSSFingerprint}},methods:{choosePortraitSize(o){if(o==="custom")return;const[e,i]={small:["160px","24vh"],normal:["250px","32vh"],large:["320px","40vh"]}[o]||["",""];this.cssVars.characterMaxWidth=e,this.cssVars.characterMaxHeight=i,this.applyPreview()},paletteValues:Ue,matchesPalette(o){return Object.entries(this.paletteValues(o)).every(([e,i])=>this.cssVars[e]===i)},choosePalette(o){Object.assign(this.cssVars,this.paletteValues(o)),this.applyPreview()},loadCustomCSS(o){this.loadedCSS=ne(o);const e=o?.cssVars||Object.fromEntries(Object.entries(o||{}).filter(([i])=>i!=="userCustomCSS"));this.cssVars={...this.getDefaultCSSVars(),...e},this.userCustomCSS=o?.userCustomCSS||"",this.applyPreview()},getDefaultCSSVars(){return{dialogBackground:"",dialogBorderColor:"",dialogBorderWidth:"",dialogTextColor:"",dialogNameFontSize:"",dialogTextFontSize:"",dialogPadding:"",dialogBorderRadius:"",dialogMinHeight:"",dialogLineHeight:"",characterMaxHeight:"",characterMaxWidth:"",characterInactiveOpacity:"",characterFrame:"",characterBorderRadius:"",characterBorderWidth:"",characterTransition:"",controlsBackground:"",controlsBorderColor:"",controlsButtonColor:"",controlsButtonHoverColor:"",controlsButtonBg:"",controlsButtonHoverBg:"",controlsProgressColor:"",controlsProgressBg:"",controlsButtonSize:"",controlsPrimaryButtonSize:"",controlsBorderRadius:"",overlayBackground:"",overlayBlur:"",overlayContentBackground:"",overlayTextColor:"",overlayBorderRadius:"",overlayPadding:"",overlayMaxWidth:"",globalBackground:"",globalTextColor:"",globalFontFamily:"",globalLineHeight:"",globalBackgroundImage:"",globalBackgroundSize:""}},applyPreview(){this.updateCSSCodeText(),this.injectCustomStyleTag(),this.$refs.livePreview?.$refs.player&&this.$refs.livePreview?.$refs.player.$forceUpdate()},injectCustomStyleTag(){this.$refs.livePreview?.$refs.player?.applyCustomCSS?.({cssVars:this.cssVars,userCustomCSS:this.previewWithoutCSS?"":this.userCustomCSS})},generateCSSVariableRules(){return Ve(this.cssVars)},updateCSSCodeText(){const o=this.generateCSSFile();this.cssCodeText=o+this.userCustomCSS},onCodeEdit(){},syncFromCode(){try{const o=this.cssCodeText,e="/* USER CUSTOM CSS - Add your styles below */",i=o.indexOf(e);let r=o,n=o;if(i!==-1&&(r=o.substring(0,i+e.length),n=o.substring(i+e.length).trim().replace(/^\/\* =+ \*\/\s*/,""),!/--custom-[\w-]+\s*:/.test(r))){const s=r.replace(/\/\*[\s\S]*?\*\//g,"").trim();s&&(n=s+`
`+n)}this.cssVars=this.getDefaultCSSVars(),this.parseCSSFile(r),this.userCustomCSS=n?`
`+n:"",this.applyPreview(),this.injectCustomStyleTag(),this.$toast("CSS 코드를 설정 화면에 반영했어요","success")}catch(o){this.$toast("CSS 코드를 읽지 못했어요. 형식을 확인해 주세요","error"),console.error(o)}},async copyCodeToClipboard(){try{await navigator.clipboard.writeText(this.cssCodeText),this.$toast("CSS 코드를 복사했어요","success")}catch(o){this.$toast("복사하지 못했어요. 코드를 직접 선택해 복사해 주세요","error"),console.error(o)}},resetToDefault(){confirm("CSS를 기본값으로 초기화하시겠습니까?")&&(this.cssVars=this.getDefaultCSSVars(),this.userCustomCSS="",this.applyPreview())},exportCSS(){const o=this.cssCodeText,e=new Blob([o],{type:"text/css"}),i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=`vnlog-custom-${Date.now()}.css`,r.click(),URL.revokeObjectURL(i)},generateCSSFile(){return xe(this.cssVars)+`
`+this.generateCSSVariableRules()+`

/* ======================================== */
/* USER CUSTOM CSS - Add your styles below */
/* ======================================== */
`},importCSS(){this.$refs.fileInput.click()},handleFileImport(o){const e=o.target.files[0];if(!e)return;const i=new FileReader;i.onload=r=>{try{const n=r.target.result,s="/* USER CUSTOM CSS - Add your styles below */",c=n.indexOf(s);let m=n,l=n;if(c!==-1&&(m=n.substring(0,c+s.length),l=n.substring(c+s.length).trim().replace(/^\/\* =+ \*\/\s*/,""),!/--custom-[\w-]+\s*:/.test(m))){const a=m.replace(/\/\*[\s\S]*?\*\//g,"").trim();a&&(l=a+`
`+l)}this.cssVars=this.getDefaultCSSVars(),this.parseCSSFile(m),this.userCustomCSS=l?`
`+l:"",this.updateCSSCodeText(),this.applyPreview(),this.$toast("CSS를 불러왔어요","success")}catch(n){this.$toast("CSS 파일을 읽지 못했어요. 파일이 손상되지 않았는지 확인해 주세요","error"),console.error(n)}},i.readAsText(e),o.target.value=""},parseCSSFile(o){const e=o.split(`
`);for(const i of e){const r=i.trim();if(r.startsWith("--custom-")){const n=r.match(/^--custom-([^:]+):\s*(.*?)\s*;?\s*$/);if(n){const s=n[1].trim(),c=n[2].trim(),m=this.cssToCamelCase(s);this.cssVars.hasOwnProperty(m)&&(this.cssVars[m]=c)}}}this.cssVars},cssToCamelCase(o){return{"dialog-bg":"dialogBackground","dialog-border":"dialogBorderColor","dialog-text":"dialogTextColor","dialog-border-width":"dialogBorderWidth","dialog-name-size":"dialogNameFontSize","dialog-text-size":"dialogTextFontSize","dialog-padding":"dialogPadding","dialog-radius":"dialogBorderRadius","dialog-min-height":"dialogMinHeight","dialog-line-height":"dialogLineHeight","character-max-height":"characterMaxHeight","character-max-width":"characterMaxWidth","character-inactive-opacity":"characterInactiveOpacity","character-frame":"characterFrame","character-border-radius":"characterBorderRadius","character-border-width":"characterBorderWidth","character-transition":"characterTransition","controls-bg":"controlsBackground","controls-border":"controlsBorderColor","controls-button":"controlsButtonColor","controls-button-hover":"controlsButtonHoverColor","controls-button-bg":"controlsButtonBg","controls-button-hover-bg":"controlsButtonHoverBg","controls-progress":"controlsProgressColor","controls-progress-bg":"controlsProgressBg","controls-button-size":"controlsButtonSize","controls-primary-button-size":"controlsPrimaryButtonSize","controls-border-radius":"controlsBorderRadius","overlay-bg":"overlayBackground","overlay-blur":"overlayBlur","overlay-content-bg":"overlayContentBackground","overlay-text":"overlayTextColor","overlay-radius":"overlayBorderRadius","overlay-padding":"overlayPadding","overlay-max-width":"overlayMaxWidth","global-bg":"globalBackground","global-background-image":"globalBackgroundImage","global-background-size":"globalBackgroundSize","global-text":"globalTextColor","global-font":"globalFontFamily","global-line-height":"globalLineHeight"}[o]||o},applyAndSave(){this.$emit("save",{cssVars:{...this.cssVars},userCustomCSS:this.userCustomCSS})}},mounted(){this.loadCustomCSS(this.initialCSS)}},rd={class:"custom-css-editor"},ad={class:"editor-header"},ld={class:"editor-body"},dd={class:"appearance-mode"},cd=["aria-pressed"],ud=["aria-pressed"],hd={key:0,class:"section-tabs"},pd=["onClick"],fd={class:"editor-content"},md={class:"css-edit-area"},gd={key:0,class:"css-section easy-settings"},Td={class:"easy-group theme-group"},Sd={class:"palette-options"},Id=["aria-pressed","onClick"],bd={class:"easy-group"},Ed={class:"setting-fields"},yd={class:"css-field"},Od=["value"],Rd={class:"css-field"},vd=["value"],Nd={class:"easy-group"},Ad={class:"css-field"},wd={key:0,value:"custom"},Cd={class:"easy-group"},Ld={class:"css-field"},Dd=["value"],Hd={key:1,class:"custom-css-notice"},Ud={key:2,class:"css-section"},kd={class:"setting-groups"},Fd={class:"setting-group"},Pd={class:"setting-fields"},xd={class:"css-field"},Vd={class:"css-field"},Md={class:"css-field"},Wd={class:"setting-group"},Bd={class:"setting-fields"},Yd={class:"css-field"},Gd={class:"css-field"},_d={class:"css-field"},zd={class:"css-field"},jd={class:"setting-group"},Kd={class:"setting-fields"},qd={class:"css-field"},Xd={class:"css-field"},Jd={class:"css-field"},Zd={key:3,class:"css-section"},Qd={class:"setting-groups"},$d={class:"setting-group"},ec={class:"setting-fields"},tc={class:"css-field"},nc={class:"css-field"},oc={class:"css-field"},sc={class:"css-field"},ic={class:"setting-group"},rc={class:"setting-fields"},ac={class:"css-field"},lc={key:0,class:"css-field"},dc={key:1,class:"css-field"},cc={key:4,class:"css-section"},uc={class:"setting-groups"},hc={class:"setting-group"},pc={class:"setting-fields"},fc={class:"css-field"},mc={class:"css-field"},gc={class:"setting-group"},Tc={class:"setting-fields"},Sc={class:"css-field"},Ic={class:"css-field"},bc={class:"css-field"},Ec={class:"css-field"},yc={class:"setting-group"},Oc={class:"setting-fields"},Rc={class:"css-field"},vc={class:"css-field"},Nc={class:"setting-group"},Ac={class:"setting-fields"},wc={class:"css-field"},Cc={class:"css-field"},Lc={class:"css-field"},Dc={key:5,class:"css-section"},Hc={class:"setting-groups"},Uc={class:"setting-group"},kc={class:"setting-fields"},Fc={class:"css-field"},Pc={class:"css-field"},xc={class:"setting-group"},Vc={class:"setting-fields"},Mc={class:"css-field"},Wc={class:"css-field"},Bc={class:"setting-group"},Yc={class:"setting-fields"},Gc={class:"css-field"},_c={class:"css-field"},zc={class:"css-field"},jc={key:6,class:"css-section"},Kc={class:"setting-groups"},qc={class:"setting-group"},Xc={class:"setting-fields"},Jc={class:"css-field"},Zc={class:"css-field"},Qc={class:"css-field"},$c={class:"setting-group"},eu={class:"setting-fields"},tu={class:"css-field"},nu={class:"css-field"},ou={class:"css-field"},su={key:7,class:"css-section"},iu={class:"css-code-editor"},ru={class:"code-header"},au={class:"code-actions"},lu={class:"code-hint"},du={class:"editor-actions"},cu={class:"save-status",role:"status"},uu=["disabled"],hu=["disabled"];function pu(o,e,i,r,n,s){const c=R("AppIcon"),m=R("router-link"),l=R("StepLivePreview"),a=R("AppSelect"),b=R("ColorPicker"),f=R("UnitInput");return d(),u("div",rd,[t("div",ad,[t("h3",null,[p(c,{name:"palette",size:20}),e[64]||(e[64]=I(" 재생 화면 꾸미기 ",-1))]),p(m,{class:"btn btn-ghost",to:"/summary?appearance=1"},{default:B(()=>[...e[65]||(e[65]=[I("로그 문서 꾸미기로 이동",-1)])]),_:1}),e[66]||(e[66]=t("p",{class:"editor-description"}," 테마와 글자를 고르고 미리보기로 확인하세요. 저장하면 이 로그와 내보내기에 함께 적용돼요. ",-1))]),p(l,{ref:"livePreview","reserve-space":420,step:i.previewStep,characters:i.characters,"base-theme":i.baseTheme,title:i.projectTitle,label:"현재 장면 꾸미기","custom-c-s-s":{cssVars:n.cssVars,userCustomCSS:n.previewWithoutCSS?"":n.userCustomCSS}},null,8,["step","characters","base-theme","title","custom-c-s-s"]),t("div",ld,[t("div",dd,[t("button",{"aria-pressed":!n.advanced,onClick:e[0]||(e[0]=h=>{n.advanced=!1,n.currentSection="easy"})},"간단 설정",8,cd),t("button",{"aria-pressed":n.advanced,onClick:e[1]||(e[1]=h=>{n.advanced=!0,n.currentSection="dialog"})},"세부 조정 · CSS",8,ud)]),n.advanced?(d(),u("div",hd,[(d(!0),u(v,null,N(n.sections,h=>(d(),u("button",{key:h.id,class:w(["section-tab",{active:n.currentSection===h.id}]),onClick:C=>n.currentSection=h.id},[p(c,{name:h.icon,size:16},null,8,["name"]),I(" "+g(h.name),1)],10,pd))),128))])):T("",!0),t("div",fd,[t("div",md,[n.advanced?T("",!0):(d(),u("div",gd,[t("section",Td,[e[67]||(e[67]=t("h4",null,"테마",-1)),t("div",Sd,[(d(!0),u(v,null,N(n.palettes,h=>(d(),u("button",{key:h.name,"aria-pressed":s.matchesPalette(h),onClick:C=>s.choosePalette(h)},[t("span",{class:"palette-swatch",style:U({background:h.bg,color:h.text}),"aria-hidden":"true"},"가",4),I(" "+g(h.name),1)],8,Id))),128))]),e[68]||(e[68]=t("p",{class:"field-help"},"배경과 대사창, 재생 버튼의 색을 함께 바꿔요.",-1))]),t("section",bd,[e[79]||(e[79]=t("h4",null,"글자",-1)),t("div",Ed,[t("div",yd,[e[73]||(e[73]=t("label",{for:"appearance-font"},"글꼴",-1)),p(a,{id:"appearance-font",modelValue:n.cssVars.globalFontFamily,"onUpdate:modelValue":e[2]||(e[2]=h=>n.cssVars.globalFontFamily=h),onChange:s.applyPreview},{default:B(()=>[["","Pretendard","NanumSquare","Nanum Myeongjo"].includes(n.cssVars.globalFontFamily)?T("",!0):(d(),u("option",{key:0,value:n.cssVars.globalFontFamily},"직접 정한 글꼴",8,Od)),e[69]||(e[69]=t("option",{value:""},"기존 글꼴 유지",-1)),e[70]||(e[70]=t("option",{value:"Pretendard"},"프리텐다드 · 고딕",-1)),e[71]||(e[71]=t("option",{value:"NanumSquare"},"나눔스퀘어 · 고딕",-1)),e[72]||(e[72]=t("option",{value:"Nanum Myeongjo"},"나눔명조 · 명조",-1))]),_:1},8,["modelValue","onChange"])]),t("div",Rd,[e[78]||(e[78]=t("label",{for:"appearance-size"},"대사 글자 크기",-1)),p(a,{id:"appearance-size",modelValue:n.cssVars.dialogTextFontSize,"onUpdate:modelValue":e[3]||(e[3]=h=>n.cssVars.dialogTextFontSize=h),onChange:s.applyPreview},{default:B(()=>[["","16px","20px","24px"].includes(n.cssVars.dialogTextFontSize)?T("",!0):(d(),u("option",{key:0,value:n.cssVars.dialogTextFontSize},"직접 정한 크기",8,vd)),e[74]||(e[74]=t("option",{value:""},"기존 크기 유지",-1)),e[75]||(e[75]=t("option",{value:"16px"},"작게",-1)),e[76]||(e[76]=t("option",{value:"20px"},"보통",-1)),e[77]||(e[77]=t("option",{value:"24px"},"크게",-1))]),_:1},8,["modelValue","onChange"])])])]),t("section",Nd,[e[85]||(e[85]=t("h4",null,"캐릭터 이미지",-1)),t("div",Ad,[e[84]||(e[84]=t("label",{for:"appearance-portrait"},"이미지 크기",-1)),p(a,{id:"appearance-portrait","model-value":s.portraitPreset,"onUpdate:modelValue":s.choosePortraitSize},{default:B(()=>[s.portraitPreset==="custom"?(d(),u("option",wd,"직접 정한 크기")):T("",!0),e[80]||(e[80]=t("option",{value:""},"기존 크기 유지",-1)),e[81]||(e[81]=t("option",{value:"small"},"작게",-1)),e[82]||(e[82]=t("option",{value:"normal"},"보통",-1)),e[83]||(e[83]=t("option",{value:"large"},"크게",-1))]),_:1},8,["model-value","onUpdate:modelValue"])]),e[86]||(e[86]=t("p",{class:"field-help"},"대사창 위 왼쪽에 표시해요. 직접 작성한 CSS가 있으면 그 설정이 우선할 수 있어요.",-1))]),t("section",Cd,[e[92]||(e[92]=t("h4",null,"대사창 여백",-1)),t("div",Ld,[e[91]||(e[91]=t("label",{for:"appearance-spacing"},"대사창 여백",-1)),p(a,{id:"appearance-spacing",modelValue:n.cssVars.dialogPadding,"onUpdate:modelValue":e[4]||(e[4]=h=>n.cssVars.dialogPadding=h),onChange:s.applyPreview},{default:B(()=>[["","16px","24px","32px"].includes(n.cssVars.dialogPadding)?T("",!0):(d(),u("option",{key:0,value:n.cssVars.dialogPadding},"직접 정한 여백",8,Dd)),e[87]||(e[87]=t("option",{value:""},"기존 여백 유지",-1)),e[88]||(e[88]=t("option",{value:"16px"},"아담하게",-1)),e[89]||(e[89]=t("option",{value:"24px"},"보통",-1)),e[90]||(e[90]=t("option",{value:"32px"},"넉넉하게",-1))]),_:1},8,["modelValue","onChange"])]),e[93]||(e[93]=t("p",{class:"field-help"},"글자와 대사창 가장자리 사이의 간격을 조절해요.",-1))])])),s.hasUserCustomCSS?(d(),u("div",Hd,[e[95]||(e[95]=t("p",null,"직접 작성한 CSS가 있어요. 선택한 색이나 크기보다 우선할 수 있어요.",-1)),t("label",null,[S(t("input",{type:"checkbox","onUpdate:modelValue":e[5]||(e[5]=h=>n.previewWithoutCSS=h)},null,512),[[H,n.previewWithoutCSS]]),e[94]||(e[94]=I(" 미리보기에서만 직접 CSS 끄기 ",-1))])])):T("",!0),n.currentSection==="dialog"?(d(),u("div",Ud,[e[109]||(e[109]=t("h4",null,"대사창",-1)),t("div",kd,[t("section",Fd,[e[99]||(e[99]=t("h5",null,"색과 테두리",-1)),t("div",Pd,[t("div",xd,[e[96]||(e[96]=t("label",null,"배경색",-1)),p(b,{modelValue:n.cssVars.dialogBackground,"onUpdate:modelValue":[e[6]||(e[6]=h=>n.cssVars.dialogBackground=h),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Vd,[e[97]||(e[97]=t("label",null,"테두리 색상",-1)),p(b,{modelValue:n.cssVars.dialogBorderColor,"onUpdate:modelValue":[e[7]||(e[7]=h=>n.cssVars.dialogBorderColor=h),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Md,[e[98]||(e[98]=t("label",null,"테두리 두께",-1)),p(f,{modelValue:n.cssVars.dialogBorderWidth,"onUpdate:modelValue":[e[8]||(e[8]=h=>n.cssVars.dialogBorderWidth=h),s.applyPreview],units:["px"],step:1},null,8,["modelValue","onUpdate:modelValue"])])])]),t("section",Wd,[e[104]||(e[104]=t("h5",null,"글자",-1)),t("div",Bd,[t("div",Yd,[e[100]||(e[100]=t("label",null,"텍스트 색상",-1)),p(b,{modelValue:n.cssVars.dialogTextColor,"onUpdate:modelValue":[e[9]||(e[9]=h=>n.cssVars.dialogTextColor=h),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Gd,[e[101]||(e[101]=t("label",null,"캐릭터 이름 글꼴 크기",-1)),p(f,{modelValue:n.cssVars.dialogNameFontSize,"onUpdate:modelValue":[e[10]||(e[10]=h=>n.cssVars.dialogNameFontSize=h),s.applyPreview],units:["px","rem","em"],step:.1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",_d,[e[102]||(e[102]=t("label",null,"대사 글꼴 크기",-1)),p(f,{modelValue:n.cssVars.dialogTextFontSize,"onUpdate:modelValue":[e[11]||(e[11]=h=>n.cssVars.dialogTextFontSize=h),s.applyPreview],units:["px","rem","em"],step:.1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",zd,[e[103]||(e[103]=t("label",null,"줄 간격",-1)),S(t("input",{type:"text","onUpdate:modelValue":e[12]||(e[12]=h=>n.cssVars.dialogLineHeight=h),onInput:e[13]||(e[13]=(...h)=>s.applyPreview&&s.applyPreview(...h)),placeholder:"1.8"},null,544),[[y,n.cssVars.dialogLineHeight]])])])]),t("section",jd,[e[108]||(e[108]=t("h5",null,"크기와 여백",-1)),t("div",Kd,[t("div",qd,[e[105]||(e[105]=t("label",null,"안쪽 여백",-1)),p(f,{modelValue:n.cssVars.dialogPadding,"onUpdate:modelValue":[e[14]||(e[14]=h=>n.cssVars.dialogPadding=h),s.applyPreview],units:["px","rem","em"],step:.1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Xd,[e[106]||(e[106]=t("label",null,"모서리 둥글기",-1)),p(f,{modelValue:n.cssVars.dialogBorderRadius,"onUpdate:modelValue":[e[15]||(e[15]=h=>n.cssVars.dialogBorderRadius=h),s.applyPreview],units:["px","rem","%"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Jd,[e[107]||(e[107]=t("label",null,"최소 높이",-1)),p(f,{modelValue:n.cssVars.dialogMinHeight,"onUpdate:modelValue":[e[16]||(e[16]=h=>n.cssVars.dialogMinHeight=h),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])])])])])])):T("",!0),n.currentSection==="character"?(d(),u("div",Zd,[e[119]||(e[119]=t("h4",null,"등장인물",-1)),t("div",Qd,[t("section",$d,[e[114]||(e[114]=t("h5",null,"이미지 크기와 표시",-1)),t("div",ec,[t("div",tc,[e[110]||(e[110]=t("label",null,"캐릭터 이미지 최대 높이",-1)),p(f,{modelValue:n.cssVars.characterMaxHeight,"onUpdate:modelValue":[e[17]||(e[17]=h=>n.cssVars.characterMaxHeight=h),s.applyPreview],units:["vh","px","%"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",nc,[e[111]||(e[111]=t("label",null,"캐릭터 이미지 최대 너비",-1)),p(f,{modelValue:n.cssVars.characterMaxWidth,"onUpdate:modelValue":[e[18]||(e[18]=h=>n.cssVars.characterMaxWidth=h),s.applyPreview],units:["px","%","vw"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",oc,[e[112]||(e[112]=t("label",null,"캐릭터 투명도 (비활성)",-1)),S(t("input",{type:"range","onUpdate:modelValue":e[19]||(e[19]=h=>n.cssVars.characterInactiveOpacity=h),onInput:e[20]||(e[20]=(...h)=>s.applyPreview&&s.applyPreview(...h)),min:"0",max:"1",step:"0.05"},null,544),[[y,n.cssVars.characterInactiveOpacity]]),t("span",null,g(n.cssVars.characterInactiveOpacity),1)]),t("div",sc,[e[113]||(e[113]=t("label",null,"캐릭터 전환 시간",-1)),p(f,{modelValue:n.cssVars.characterTransition,"onUpdate:modelValue":[e[21]||(e[21]=h=>n.cssVars.characterTransition=h),s.applyPreview],units:["s","ms"],step:.1},null,8,["modelValue","onUpdate:modelValue"])])])]),t("section",ic,[e[118]||(e[118]=t("h5",null,"이미지 테두리",-1)),t("div",rc,[t("div",ac,[t("label",null,[S(t("input",{type:"checkbox","onUpdate:modelValue":e[22]||(e[22]=h=>n.cssVars.characterFrame=h),"true-value":"custom","false-value":"",onChange:e[23]||(e[23]=(...h)=>s.applyPreview&&s.applyPreview(...h))},null,544),[[H,n.cssVars.characterFrame]]),e[115]||(e[115]=I(" 이미지 테두리 사용 ",-1))])]),n.cssVars.characterFrame==="custom"?(d(),u("div",lc,[e[116]||(e[116]=t("label",null,"모서리 둥글기",-1)),p(f,{modelValue:n.cssVars.characterBorderRadius,"onUpdate:modelValue":[e[24]||(e[24]=h=>n.cssVars.characterBorderRadius=h),s.applyPreview],units:["px","rem","%"],step:1},null,8,["modelValue","onUpdate:modelValue"])])):T("",!0),n.cssVars.characterFrame==="custom"?(d(),u("div",dc,[e[117]||(e[117]=t("label",null,"테두리 두께",-1)),p(f,{modelValue:n.cssVars.characterBorderWidth,"onUpdate:modelValue":[e[25]||(e[25]=h=>n.cssVars.characterBorderWidth=h),s.applyPreview],units:["px"],step:1},null,8,["modelValue","onUpdate:modelValue"])])):T("",!0)])])])])):T("",!0),n.currentSection==="controls"?(d(),u("div",cc,[e[135]||(e[135]=t("h4",null,"재생 버튼",-1)),t("div",uc,[t("section",hc,[e[122]||(e[122]=t("h5",null,"재생 영역",-1)),t("div",pc,[t("div",fc,[e[120]||(e[120]=t("label",null,"컨트롤 배경색",-1)),p(b,{modelValue:n.cssVars.controlsBackground,"onUpdate:modelValue":[e[26]||(e[26]=h=>n.cssVars.controlsBackground=h),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",mc,[e[121]||(e[121]=t("label",null,"컨트롤 테두리 색상",-1)),p(b,{modelValue:n.cssVars.controlsBorderColor,"onUpdate:modelValue":[e[27]||(e[27]=h=>n.cssVars.controlsBorderColor=h),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])])])]),t("section",gc,[e[127]||(e[127]=t("h5",null,"버튼 색상",-1)),t("div",Tc,[t("div",Sc,[e[123]||(e[123]=t("label",null,"버튼 배경색",-1)),p(b,{modelValue:n.cssVars.controlsButtonBg,"onUpdate:modelValue":[e[28]||(e[28]=h=>n.cssVars.controlsButtonBg=h),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Ic,[e[124]||(e[124]=t("label",null,"버튼 호버 배경색",-1)),p(b,{modelValue:n.cssVars.controlsButtonHoverBg,"onUpdate:modelValue":[e[29]||(e[29]=h=>n.cssVars.controlsButtonHoverBg=h),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",bc,[e[125]||(e[125]=t("label",null,"버튼 아이콘 색상",-1)),p(b,{modelValue:n.cssVars.controlsButtonColor,"onUpdate:modelValue":[e[30]||(e[30]=h=>n.cssVars.controlsButtonColor=h),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Ec,[e[126]||(e[126]=t("label",null,"버튼 호버 아이콘 색상",-1)),p(b,{modelValue:n.cssVars.controlsButtonHoverColor,"onUpdate:modelValue":[e[31]||(e[31]=h=>n.cssVars.controlsButtonHoverColor=h),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])])])]),t("section",yc,[e[130]||(e[130]=t("h5",null,"진행 바",-1)),t("div",Oc,[t("div",Rc,[e[128]||(e[128]=t("label",null,"진행 바 색상",-1)),p(b,{modelValue:n.cssVars.controlsProgressColor,"onUpdate:modelValue":[e[32]||(e[32]=h=>n.cssVars.controlsProgressColor=h),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",vc,[e[129]||(e[129]=t("label",null,"진행 바 배경색",-1)),p(b,{modelValue:n.cssVars.controlsProgressBg,"onUpdate:modelValue":[e[33]||(e[33]=h=>n.cssVars.controlsProgressBg=h),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])])])]),t("section",Nc,[e[134]||(e[134]=t("h5",null,"버튼 크기",-1)),t("div",Ac,[t("div",wc,[e[131]||(e[131]=t("label",null,"버튼 크기",-1)),p(f,{modelValue:n.cssVars.controlsButtonSize,"onUpdate:modelValue":[e[34]||(e[34]=h=>n.cssVars.controlsButtonSize=h),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Cc,[e[132]||(e[132]=t("label",null,"주 버튼 크기",-1)),p(f,{modelValue:n.cssVars.controlsPrimaryButtonSize,"onUpdate:modelValue":[e[35]||(e[35]=h=>n.cssVars.controlsPrimaryButtonSize=h),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Lc,[e[133]||(e[133]=t("label",null,"버튼 모서리 둥글기",-1)),p(f,{modelValue:n.cssVars.controlsBorderRadius,"onUpdate:modelValue":[e[36]||(e[36]=h=>n.cssVars.controlsBorderRadius=h),s.applyPreview],units:["px","rem","%"],step:1},null,8,["modelValue","onUpdate:modelValue"])])])])])])):T("",!0),n.currentSection==="overlay"?(d(),u("div",Dc,[e[146]||(e[146]=t("h4",null,"오버레이 (다이스, 콤보, 씬 설명)",-1)),t("div",Hc,[t("section",Uc,[e[138]||(e[138]=t("h5",null,"화면 가림",-1)),t("div",kc,[t("div",Fc,[e[136]||(e[136]=t("label",null,"오버레이 배경색",-1)),p(b,{modelValue:n.cssVars.overlayBackground,"onUpdate:modelValue":[e[37]||(e[37]=h=>n.cssVars.overlayBackground=h),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Pc,[e[137]||(e[137]=t("label",null,"오버레이 블러",-1)),p(f,{modelValue:n.cssVars.overlayBlur,"onUpdate:modelValue":[e[38]||(e[38]=h=>n.cssVars.overlayBlur=h),s.applyPreview],units:["px"],step:1},null,8,["modelValue","onUpdate:modelValue"])])])]),t("section",xc,[e[141]||(e[141]=t("h5",null,"내용 색상",-1)),t("div",Vc,[t("div",Mc,[e[139]||(e[139]=t("label",null,"오버레이 콘텐츠 배경",-1)),p(b,{modelValue:n.cssVars.overlayContentBackground,"onUpdate:modelValue":[e[39]||(e[39]=h=>n.cssVars.overlayContentBackground=h),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Wc,[e[140]||(e[140]=t("label",null,"오버레이 텍스트 색상",-1)),p(b,{modelValue:n.cssVars.overlayTextColor,"onUpdate:modelValue":[e[40]||(e[40]=h=>n.cssVars.overlayTextColor=h),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])])])]),t("section",Bc,[e[145]||(e[145]=t("h5",null,"내용 크기와 여백",-1)),t("div",Yc,[t("div",Gc,[e[142]||(e[142]=t("label",null,"콘텐츠 모서리 둥글기",-1)),p(f,{modelValue:n.cssVars.overlayBorderRadius,"onUpdate:modelValue":[e[41]||(e[41]=h=>n.cssVars.overlayBorderRadius=h),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",_c,[e[143]||(e[143]=t("label",null,"콘텐츠 안쪽 여백",-1)),p(f,{modelValue:n.cssVars.overlayPadding,"onUpdate:modelValue":[e[42]||(e[42]=h=>n.cssVars.overlayPadding=h),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",zc,[e[144]||(e[144]=t("label",null,"콘텐츠 최대 너비",-1)),p(f,{modelValue:n.cssVars.overlayMaxWidth,"onUpdate:modelValue":[e[43]||(e[43]=h=>n.cssVars.overlayMaxWidth=h),s.applyPreview],units:["px","%","vw"],step:10},null,8,["modelValue","onUpdate:modelValue"])])])])])])):T("",!0),n.currentSection==="global"?(d(),u("div",jc,[e[157]||(e[157]=t("h4",null,"전역 스타일",-1)),t("div",Kc,[t("section",qc,[e[151]||(e[151]=t("h5",null,"전체 배경",-1)),t("div",Xc,[t("div",Jc,[e[147]||(e[147]=t("label",null,"메인 배경색",-1)),p(b,{modelValue:n.cssVars.globalBackground,"onUpdate:modelValue":[e[44]||(e[44]=h=>n.cssVars.globalBackground=h),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Zc,[e[148]||(e[148]=t("label",null,"배경 이미지 URL",-1)),S(t("input",{type:"text","onUpdate:modelValue":e[45]||(e[45]=h=>n.cssVars.globalBackgroundImage=h),onInput:e[46]||(e[46]=(...h)=>s.applyPreview&&s.applyPreview(...h)),placeholder:"url(https://...)"},null,544),[[y,n.cssVars.globalBackgroundImage]])]),t("div",Qc,[e[150]||(e[150]=t("label",null,"배경 이미지 크기",-1)),S(t("select",{"onUpdate:modelValue":e[47]||(e[47]=h=>n.cssVars.globalBackgroundSize=h),onChange:e[48]||(e[48]=(...h)=>s.applyPreview&&s.applyPreview(...h))},[...e[149]||(e[149]=[de('<option value="" data-v-3dd53891>설정 안 함</option><option value="cover" data-v-3dd53891>덮기 (Cover)</option><option value="contain" data-v-3dd53891>맞추기 (Contain)</option><option value="auto" data-v-3dd53891>자동 (Auto)</option><option value="100% 100%" data-v-3dd53891>늘이기 (100% 100%)</option>',5)])],544),[[V,n.cssVars.globalBackgroundSize]])])])]),t("section",$c,[e[156]||(e[156]=t("h5",null,"기본 글자",-1)),t("div",eu,[t("div",tu,[e[152]||(e[152]=t("label",null,"기본 텍스트 색상",-1)),p(b,{modelValue:n.cssVars.globalTextColor,"onUpdate:modelValue":[e[49]||(e[49]=h=>n.cssVars.globalTextColor=h),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",nu,[e[154]||(e[154]=t("label",null,"폰트 패밀리",-1)),S(t("select",{"onUpdate:modelValue":e[50]||(e[50]=h=>n.cssVars.globalFontFamily=h),onChange:e[51]||(e[51]=(...h)=>s.applyPreview&&s.applyPreview(...h))},[...e[153]||(e[153]=[de('<option value="" data-v-3dd53891>설정 안 함</option><option value="var(--font-pretendard)" data-v-3dd53891>Pretendard (기본)</option><option value="var(--font-nanum-square)" data-v-3dd53891>나눔스퀘어</option><option value="var(--font-nanum-myeongjo)" data-v-3dd53891>나눔명조</option><option value="var(--font-noto-serif)" data-v-3dd53891>Noto Serif KR</option>',5)])],544),[[V,n.cssVars.globalFontFamily]])]),t("div",ou,[e[155]||(e[155]=t("label",null,"기본 줄 간격",-1)),S(t("input",{type:"text","onUpdate:modelValue":e[52]||(e[52]=h=>n.cssVars.globalLineHeight=h),onInput:e[53]||(e[53]=(...h)=>s.applyPreview&&s.applyPreview(...h)),placeholder:"1.5"},null,544),[[y,n.cssVars.globalLineHeight]])])])])])])):T("",!0),n.currentSection==="code"?(d(),u("div",su,[e[162]||(e[162]=t("h4",null,"CSS 코드 직접 편집",-1)),t("div",iu,[t("div",ru,[e[160]||(e[160]=t("span",{class:"code-label"},"생성된 CSS 코드",-1)),t("div",au,[t("button",{onClick:e[54]||(e[54]=(...h)=>s.syncFromCode&&s.syncFromCode(...h)),class:"btn-sync",title:"코드에서 UI로 동기화"},[p(c,{name:"refresh",size:14}),e[158]||(e[158]=I(" 동기화 ",-1))]),t("button",{onClick:e[55]||(e[55]=(...h)=>s.copyCodeToClipboard&&s.copyCodeToClipboard(...h)),class:"btn-copy-code",title:"코드 복사"},[p(c,{name:"clipboard",size:14}),e[159]||(e[159]=I(" 복사 ",-1))])])]),S(t("textarea",{"onUpdate:modelValue":e[56]||(e[56]=h=>n.cssCodeText=h),class:"css-textarea",spellcheck:"false",onInput:e[57]||(e[57]=(...h)=>s.onCodeEdit&&s.onCodeEdit(...h))},null,544),[[y,n.cssCodeText]]),t("p",lu,[p(c,{name:"info",size:14}),e[161]||(e[161]=I(" 이 코드를 직접 수정한 후 '동기화' 버튼을 눌러 UI에 반영하세요. ",-1))])])])):T("",!0)])])]),t("div",du,[t("button",{onClick:e[58]||(e[58]=(...h)=>s.resetToDefault&&s.resetToDefault(...h)),class:"btn-reset"},[p(c,{name:"refresh",size:16}),e[163]||(e[163]=I(" 기본값으로 초기화 ",-1))]),n.advanced?(d(),u("button",{key:0,onClick:e[59]||(e[59]=(...h)=>s.exportCSS&&s.exportCSS(...h)),class:"btn-export"},[p(c,{name:"save",size:16}),e[164]||(e[164]=I(" CSS 내보내기 ",-1))])):T("",!0),n.advanced?(d(),u("button",{key:1,onClick:e[60]||(e[60]=(...h)=>s.importCSS&&s.importCSS(...h)),class:"btn-import"},[p(c,{name:"folder",size:16}),e[165]||(e[165]=I(" CSS 불러오기 ",-1))])):T("",!0),t("span",cu,g(i.saving?"저장 중…":s.isDirty?"아직 저장하지 않은 변경이 있어요":"저장된 설정과 같아요"),1),t("button",{onClick:e[61]||(e[61]=h=>s.loadCustomCSS(i.initialCSS)),disabled:!s.isDirty||i.saving,class:"btn-reset"},"변경 취소",8,uu),t("button",{onClick:e[62]||(e[62]=(...h)=>s.applyAndSave&&s.applyAndSave(...h)),disabled:!s.isDirty||i.saving,class:"btn-save"},[p(c,{name:"check",size:16}),e[166]||(e[166]=I(" 꾸미기 저장 ",-1))],8,hu)]),t("input",{ref:"fileInput",type:"file",accept:".css",style:{display:"none"},onChange:e[63]||(e[63]=(...h)=>s.handleFileImport&&s.handleFileImport(...h))},null,544)])}const fu=L(id,[["render",pu],["__scopeId","data-v-3dd53891"]]),mu=`VNLog — external software and assets

VNLog's own terms: VNLOG_LICENSE.txt

JSZip and pako are used under their MIT options. DOMPurify is used under
its Apache-2.0 option. Their original dual-license notices are retained below.
Fonts are local system fallbacks; no font binary is bundled in this app.

Sample photograph: Wojtek Pacześ, Pexels #18298089
https://www.pexels.com/photo/a-library-with-many-books-on-shelves-18298089/
https://www.pexels.com/license/
The Pexels License is separate from VNLog's terms. It permits use in apps
and templates, but does not permit resale of unaltered copies, redistribution
on stock-photo/wallpaper platforms, or implying endorsement.
The sample portraits and dialogue were authored for VNLog.


========================================================================
@babel/helper-string-parser 7.29.7 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2014-present Sebastian McKenzie and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


========================================================================
@babel/helper-validator-identifier 7.29.7 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2014-present Sebastian McKenzie and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


========================================================================
@babel/parser 7.29.9 — MIT

--- LICENSE ---
Copyright (C) 2012-2014 by various contributors (see AUTHORS)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
@babel/types 7.29.8 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2014-present Sebastian McKenzie and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


========================================================================
@heroicons/vue 2.2.0 — MIT

--- LICENSE ---
MIT License

Copyright (c) Tailwind Labs, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
@jridgewell/sourcemap-codec 1.6.0 — MIT

--- LICENSE ---
Copyright 2024 Justin Ridgewell <justin@ridgewell.name>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
@types/trusted-types 2.0.7 — MIT

--- LICENSE ---
    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE


========================================================================
@vue/compiler-core 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
@vue/compiler-dom 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
@vue/compiler-sfc 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
@vue/compiler-ssr 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
@vue/devtools-api 7.7.10 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2023 webfansplz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
@vue/devtools-kit 7.7.10 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2023 webfansplz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
@vue/devtools-shared 7.7.10 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2023 webfansplz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
@vue/reactivity 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
@vue/runtime-core 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
@vue/runtime-dom 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
@vue/server-renderer 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
@vue/shared 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
birpc 2.9.0 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2021 Anthony Fu <https://github.com/antfu>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
copy-anything 4.1.5 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2018 Luca Ban - Mesqueeb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
core-util-is 1.0.3 — MIT

--- LICENSE ---
Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.


========================================================================
csstype 3.2.3 — MIT

--- LICENSE ---
Copyright (c) 2017-2018 Fredrik Nicol

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
dompurify 3.4.16 — (MPL-2.0 OR Apache-2.0)

--- LICENSE ---

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--- LICENSE-MPL ---
Mozilla Public License Version 2.0
==================================

1. Definitions
--------------

1.1. "Contributor"
    means each individual or legal entity that creates, contributes to
    the creation of, or owns Covered Software.

1.2. "Contributor Version"
    means the combination of the Contributions of others (if any) used
    by a Contributor and that particular Contributor's Contribution.

1.3. "Contribution"
    means Covered Software of a particular Contributor.

1.4. "Covered Software"
    means Source Code Form to which the initial Contributor has attached
    the notice in Exhibit A, the Executable Form of such Source Code
    Form, and Modifications of such Source Code Form, in each case
    including portions thereof.

1.5. "Incompatible With Secondary Licenses"
    means

    (a) that the initial Contributor has attached the notice described
        in Exhibit B to the Covered Software; or

    (b) that the Covered Software was made available under the terms of
        version 1.1 or earlier of the License, but not also under the
        terms of a Secondary License.

1.6. "Executable Form"
    means any form of the work other than Source Code Form.

1.7. "Larger Work"
    means a work that combines Covered Software with other material, in 
    a separate file or files, that is not Covered Software.

1.8. "License"
    means this document.

1.9. "Licensable"
    means having the right to grant, to the maximum extent possible,
    whether at the time of the initial grant or subsequently, any and
    all of the rights conveyed by this License.

1.10. "Modifications"
    means any of the following:

    (a) any file in Source Code Form that results from an addition to,
        deletion from, or modification of the contents of Covered
        Software; or

    (b) any new file in Source Code Form that contains any Covered
        Software.

1.11. "Patent Claims" of a Contributor
    means any patent claim(s), including without limitation, method,
    process, and apparatus claims, in any patent Licensable by such
    Contributor that would be infringed, but for the grant of the
    License, by the making, using, selling, offering for sale, having
    made, import, or transfer of either its Contributions or its
    Contributor Version.

1.12. "Secondary License"
    means either the GNU General Public License, Version 2.0, the GNU
    Lesser General Public License, Version 2.1, the GNU Affero General
    Public License, Version 3.0, or any later versions of those
    licenses.

1.13. "Source Code Form"
    means the form of the work preferred for making modifications.

1.14. "You" (or "Your")
    means an individual or a legal entity exercising rights under this
    License. For legal entities, "You" includes any entity that
    controls, is controlled by, or is under common control with You. For
    purposes of this definition, "control" means (a) the power, direct
    or indirect, to cause the direction or management of such entity,
    whether by contract or otherwise, or (b) ownership of more than
    fifty percent (50%) of the outstanding shares or beneficial
    ownership of such entity.

2. License Grants and Conditions
--------------------------------

2.1. Grants

Each Contributor hereby grants You a world-wide, royalty-free,
non-exclusive license:

(a) under intellectual property rights (other than patent or trademark)
    Licensable by such Contributor to use, reproduce, make available,
    modify, display, perform, distribute, and otherwise exploit its
    Contributions, either on an unmodified basis, with Modifications, or
    as part of a Larger Work; and

(b) under Patent Claims of such Contributor to make, use, sell, offer
    for sale, have made, import, and otherwise transfer either its
    Contributions or its Contributor Version.

2.2. Effective Date

The licenses granted in Section 2.1 with respect to any Contribution
become effective for each Contribution on the date the Contributor first
distributes such Contribution.

2.3. Limitations on Grant Scope

The licenses granted in this Section 2 are the only rights granted under
this License. No additional rights or licenses will be implied from the
distribution or licensing of Covered Software under this License.
Notwithstanding Section 2.1(b) above, no patent license is granted by a
Contributor:

(a) for any code that a Contributor has removed from Covered Software;
    or

(b) for infringements caused by: (i) Your and any other third party's
    modifications of Covered Software, or (ii) the combination of its
    Contributions with other software (except as part of its Contributor
    Version); or

(c) under Patent Claims infringed by Covered Software in the absence of
    its Contributions.

This License does not grant any rights in the trademarks, service marks,
or logos of any Contributor (except as may be necessary to comply with
the notice requirements in Section 3.4).

2.4. Subsequent Licenses

No Contributor makes additional grants as a result of Your choice to
distribute the Covered Software under a subsequent version of this
License (see Section 10.2) or under the terms of a Secondary License (if
permitted under the terms of Section 3.3).

2.5. Representation

Each Contributor represents that the Contributor believes its
Contributions are its original creation(s) or it has sufficient rights
to grant the rights to its Contributions conveyed by this License.

2.6. Fair Use

This License is not intended to limit any rights You have under
applicable copyright doctrines of fair use, fair dealing, or other
equivalents.

2.7. Conditions

Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted
in Section 2.1.

3. Responsibilities
-------------------

3.1. Distribution of Source Form

All distribution of Covered Software in Source Code Form, including any
Modifications that You create or to which You contribute, must be under
the terms of this License. You must inform recipients that the Source
Code Form of the Covered Software is governed by the terms of this
License, and how they can obtain a copy of this License. You may not
attempt to alter or restrict the recipients' rights in the Source Code
Form.

3.2. Distribution of Executable Form

If You distribute Covered Software in Executable Form then:

(a) such Covered Software must also be made available in Source Code
    Form, as described in Section 3.1, and You must inform recipients of
    the Executable Form how they can obtain a copy of such Source Code
    Form by reasonable means in a timely manner, at a charge no more
    than the cost of distribution to the recipient; and

(b) You may distribute such Executable Form under the terms of this
    License, or sublicense it under different terms, provided that the
    license for the Executable Form does not attempt to limit or alter
    the recipients' rights in the Source Code Form under this License.

3.3. Distribution of a Larger Work

You may create and distribute a Larger Work under terms of Your choice,
provided that You also comply with the requirements of this License for
the Covered Software. If the Larger Work is a combination of Covered
Software with a work governed by one or more Secondary Licenses, and the
Covered Software is not Incompatible With Secondary Licenses, this
License permits You to additionally distribute such Covered Software
under the terms of such Secondary License(s), so that the recipient of
the Larger Work may, at their option, further distribute the Covered
Software under the terms of either this License or such Secondary
License(s).

3.4. Notices

You may not remove or alter the substance of any license notices
(including copyright notices, patent notices, disclaimers of warranty,
or limitations of liability) contained within the Source Code Form of
the Covered Software, except that You may alter any license notices to
the extent required to remedy known factual inaccuracies.

3.5. Application of Additional Terms

You may choose to offer, and to charge a fee for, warranty, support,
indemnity or liability obligations to one or more recipients of Covered
Software. However, You may do so only on Your own behalf, and not on
behalf of any Contributor. You must make it absolutely clear that any
such warranty, support, indemnity, or liability obligation is offered by
You alone, and You hereby agree to indemnify every Contributor for any
liability incurred by such Contributor as a result of warranty, support,
indemnity or liability terms You offer. You may include additional
disclaimers of warranty and limitations of liability specific to any
jurisdiction.

4. Inability to Comply Due to Statute or Regulation
---------------------------------------------------

If it is impossible for You to comply with any of the terms of this
License with respect to some or all of the Covered Software due to
statute, judicial order, or regulation then You must: (a) comply with
the terms of this License to the maximum extent possible; and (b)
describe the limitations and the code they affect. Such description must
be placed in a text file included with all distributions of the Covered
Software under this License. Except to the extent prohibited by statute
or regulation, such description must be sufficiently detailed for a
recipient of ordinary skill to be able to understand it.

5. Termination
--------------

5.1. The rights granted under this License will terminate automatically
if You fail to comply with any of its terms. However, if You become
compliant, then the rights granted under this License from a particular
Contributor are reinstated (a) provisionally, unless and until such
Contributor explicitly and finally terminates Your grants, and (b) on an
ongoing basis, if such Contributor fails to notify You of the
non-compliance by some reasonable means prior to 60 days after You have
come back into compliance. Moreover, Your grants from a particular
Contributor are reinstated on an ongoing basis if such Contributor
notifies You of the non-compliance by some reasonable means, this is the
first time You have received notice of non-compliance with this License
from such Contributor, and You become compliant prior to 30 days after
Your receipt of the notice.

5.2. If You initiate litigation against any entity by asserting a patent
infringement claim (excluding declaratory judgment actions,
counter-claims, and cross-claims) alleging that a Contributor Version
directly or indirectly infringes any patent, then the rights granted to
You by any and all Contributors for the Covered Software under Section
2.1 of this License shall terminate.

5.3. In the event of termination under Sections 5.1 or 5.2 above, all
end user license agreements (excluding distributors and resellers) which
have been validly granted by You or Your distributors under this License
prior to termination shall survive termination.

************************************************************************
*                                                                      *
*  6. Disclaimer of Warranty                                           *
*  -------------------------                                           *
*                                                                      *
*  Covered Software is provided under this License on an "as is"       *
*  basis, without warranty of any kind, either expressed, implied, or  *
*  statutory, including, without limitation, warranties that the       *
*  Covered Software is free of defects, merchantable, fit for a        *
*  particular purpose or non-infringing. The entire risk as to the     *
*  quality and performance of the Covered Software is with You.        *
*  Should any Covered Software prove defective in any respect, You     *
*  (not any Contributor) assume the cost of any necessary servicing,   *
*  repair, or correction. This disclaimer of warranty constitutes an   *
*  essential part of this License. No use of any Covered Software is   *
*  authorized under this License except under this disclaimer.         *
*                                                                      *
************************************************************************

************************************************************************
*                                                                      *
*  7. Limitation of Liability                                          *
*  --------------------------                                          *
*                                                                      *
*  Under no circumstances and under no legal theory, whether tort      *
*  (including negligence), contract, or otherwise, shall any           *
*  Contributor, or anyone who distributes Covered Software as          *
*  permitted above, be liable to You for any direct, indirect,         *
*  special, incidental, or consequential damages of any character      *
*  including, without limitation, damages for lost profits, loss of    *
*  goodwill, work stoppage, computer failure or malfunction, or any    *
*  and all other commercial damages or losses, even if such party      *
*  shall have been informed of the possibility of such damages. This   *
*  limitation of liability shall not apply to liability for death or   *
*  personal injury resulting from such party's negligence to the       *
*  extent applicable law prohibits such limitation. Some               *
*  jurisdictions do not allow the exclusion or limitation of           *
*  incidental or consequential damages, so this exclusion and          *
*  limitation may not apply to You.                                    *
*                                                                      *
************************************************************************

8. Litigation
-------------

Any litigation relating to this License may be brought only in the
courts of a jurisdiction where the defendant maintains its principal
place of business and such litigation shall be governed by laws of that
jurisdiction, without reference to its conflict-of-law provisions.
Nothing in this Section shall prevent a party's ability to bring
cross-claims or counter-claims.

9. Miscellaneous
----------------

This License represents the complete agreement concerning the subject
matter hereof. If any provision of this License is held to be
unenforceable, such provision shall be reformed only to the extent
necessary to make it enforceable. Any law or regulation which provides
that the language of a contract shall be construed against the drafter
shall not be used to construe this License against a Contributor.

10. Versions of the License
---------------------------

10.1. New Versions

Mozilla Foundation is the license steward. Except as provided in Section
10.3, no one other than the license steward has the right to modify or
publish new versions of this License. Each version will be given a
distinguishing version number.

10.2. Effect of New Versions

You may distribute the Covered Software under the terms of the version
of the License under which You originally received the Covered Software,
or under the terms of any subsequent version published by the license
steward.

10.3. Modified Versions

If you create software not governed by this License, and you want to
create a new license for such software, you may create and use a
modified version of this License if you rename the license and remove
any references to the name of the license steward (except to note that
such modified license differs from this License).

10.4. Distributing Source Code Form that is Incompatible With Secondary
Licenses

If You choose to distribute Source Code Form that is Incompatible With
Secondary Licenses under the terms of this version of the License, the
notice described in Exhibit B of this License must be attached.

Exhibit A - Source Code Form License Notice
-------------------------------------------

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular
file, then You may include the notice in a location (such as a LICENSE
file in a relevant directory) where a recipient would be likely to look
for such a notice.

You may add additional accurate notices of copyright ownership.

Exhibit B - "Incompatible With Secondary Licenses" Notice
---------------------------------------------------------

  This Source Code Form is "Incompatible With Secondary Licenses", as
  defined by the Mozilla Public License, v. 2.0.


========================================================================
entities 7.0.1 — BSD-2-Clause

--- LICENSE ---
Copyright (c) Felix Böhm
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


========================================================================
estree-walker 2.0.2 — MIT

--- LICENSE ---
Copyright (c) 2015-20 [these people](https://github.com/Rich-Harris/estree-walker/graphs/contributors)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

========================================================================
hookable 5.5.3 — MIT

--- LICENSE.md ---
The MIT License (MIT)

Copyright (c) Pooya Parsa <pooya@pi0.io>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
immediate 3.0.6 — MIT

--- LICENSE.txt ---
Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, Domenic Denicola, Brian Cavalier

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


========================================================================
inherits 2.0.4 — ISC

--- LICENSE ---
The ISC License

Copyright (c) Isaac Z. Schlueter

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.



========================================================================
isarray 1.0.0 — MIT


(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

========================================================================
jszip 3.10.2 — (MIT OR GPL-3.0-or-later)

--- LICENSE.markdown ---
JSZip is dual licensed. At your choice you may use it under the MIT license *or* the GPLv3
license.

The MIT License
===============

Copyright (c) 2009-2016 Stuart Knightley, David Duponchel, Franz Buchinger, António Afonso

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


GPL version 3
=============

                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS


========================================================================
lie 3.3.0 — MIT

--- license.md ---
#Copyright (c) 2014-2018 Calvin Metcalf, Jordan Harband

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.**


========================================================================
magic-string 0.30.21 — MIT

--- LICENSE ---
Copyright 2018 Rich Harris

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


========================================================================
mitt 3.0.1 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2021 Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
nanoid 3.3.20 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright 2017 Andrey Sitnik <andrey@sitnik.ru>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


========================================================================
pako 1.0.11 — (MIT AND Zlib)

--- LICENSE ---
(The MIT License)

Copyright (C) 2014-2017 by Vitaly Puzrin and Andrei Tuputcyn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
perfect-debounce 1.0.0 — MIT

--- LICENSE ---
MIT License

Copyright (c) Pooya Parsa <pooya@pi0.io>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
picocolors 1.1.1 — ISC

--- LICENSE ---
ISC License

Copyright (c) 2021-2024 Oleksii Raspopov, Kostiantyn Denysov, Anton Verinov

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


========================================================================
pinia 3.0.4 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2019-present Eduardo San Martin Morote

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
postcss 8.5.29 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright 2013 Andrey Sitnik <andrey@sitnik.es>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


========================================================================
process-nextick-args 2.0.1 — MIT

--- license.md ---
# Copyright (c) 2015 Calvin Metcalf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

**THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.**


========================================================================
readable-stream 2.3.8 — MIT

--- LICENSE ---
Node.js is licensed for use as follows:

"""
Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
"""

This license applies to parts of Node.js originating from the
https://github.com/joyent/node repository:

"""
Copyright Joyent, Inc. and other Node contributors. All rights reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
"""


========================================================================
rfdc 1.4.1 — MIT

--- LICENSE ---
Copyright 2019 "David Mark Clements <david.mark.clements@gmail.com>"

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
IN THE SOFTWARE.


========================================================================
safe-buffer 5.1.2 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) Feross Aboukhadijeh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
setimmediate 1.0.5 — MIT

--- LICENSE.txt ---
Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


========================================================================
source-map-js 1.2.2 — BSD-3-Clause

--- LICENSE ---

Copyright (c) 2009-2011, Mozilla Foundation and contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the names of the Mozilla Foundation nor the names of project
  contributors may be used to endorse or promote products derived from this
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


========================================================================
speakingurl 14.0.1 — BSD-3-Clause

--- LICENSE ---
The BSD 3-Clause License (BSD3)

Copyright (c) 2013-2017 Sascha Droste <pid@posteo.net>
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of the author nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


========================================================================
string_decoder 1.1.1 — MIT

--- LICENSE ---
Node.js is licensed for use as follows:

"""
Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
"""

This license applies to parts of Node.js originating from the
https://github.com/joyent/node repository:

"""
Copyright Joyent, Inc. and other Node contributors. All rights reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
"""



========================================================================
superjson 2.2.6 — MIT

--- LICENSE ---
MIT License

Copyright (c) 2020 Simon Knott and superjson contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
util-deprecate 1.0.2 — MIT

--- LICENSE ---
(The MIT License)

Copyright (c) 2014 Nathan Rajlich <nathan@tootallnate.net>

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


========================================================================
vue 3.5.43 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


========================================================================
vue-router 4.6.4 — MIT

--- LICENSE ---
The MIT License (MIT)

Copyright (c) 2019-present Eduardo San Martin Morote

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


========================================================================
@vue/devtools-api 6.6.4 — MIT
The MIT License (MIT)

Copyright (c) 2014-present Evan You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`,gu=`VNLog
제작: 소뇨 (Sonyo)
배포처: https://bydarti.dothome.co.kr/sonyo-edition/free/#vnlog

VNLog의 자체 작성 코드·디자인·예시 대사·SVG는 무료로 사용·수정·재배포할 수 있습니다.
수정하거나 재배포할 때도 제작자 소뇨와 원래 배포처의 출처 표기 및 이 안내를 유지해 주세요.

이 허용은 VNLog가 자체 작성한 부분에 적용됩니다. 외부 라이브러리와 사진은
각각의 원래 라이선스를 따릅니다. public/THIRD_PARTY_NOTICES.txt와
src/assets/demo/README.md에 출처와 적용 조건이 있습니다.
Pexels 사진을 VNLog의 자체 저작물이나 자유 재라이선스 가능한 자료로 표시하지 마세요.

사용자가 가져온 로그·캐릭터·이미지·음원·글꼴에 대한 권리를 이 프로그램이
부여하는 것은 아닙니다. 공유할 자료의 공개 범위와 권리는 사용자가 확인해야 합니다.
VNLog는 Roll20·코코포리아 및 언급된 게임 제작사와 제휴한 공식 서비스가 아닙니다.

이 소프트웨어는 현 상태로 제공됩니다. 모든 기기·서비스와의 호환, 무오류,
영구 보관이나 개별 설치·유지보수를 보장하지 않습니다. 중요한 작업은 파일로 보관해 주세요.
법률이 허용하는 범위에서 이용으로 발생하는 손해에 대한 책임을 제한합니다.
`,ee=o=>String(o).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function ae(o){const e=J(o);delete e.vnData.assetLibrary,delete e.vnData.deletedSteps;for(const i of e.vnData.scenes||[])for(const r of i.steps||[])delete r.rawText;return e}function Tu(o,e,i){const r=ae(o),n=Z(r).replace(/</g,"\\u003c").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"),s=ee(`${gu}

${mu}`);return`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${ee(r.vnData.title||"VNLog")}</title><style>${i.replace(/<\/style/gi,"<\\/style")}</style></head><body><div id="app"></div><template id="vnlog-license-notices">${s}</template><script id="vnlog-project" type="application/json">${n}<\/script><script>${e.replace(/<\/script/gi,"<\\/script")}<\/script></body></html>`}function Su(o){return`<iframe title="VNLog 로그 플레이어" sandbox="allow-scripts" allow="autoplay; fullscreen" style="display:block;width:100%;height:720px;border:0" srcdoc="${ee(o)}"></iframe>`}function Se(o,e){const i=URL.createObjectURL(new Blob([o],{type:"text/html;charset=utf-8"})),r=document.createElement("a");r.href=i,r.download=`${Q(e,"vnlog")}.html`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function te(o){const e=[],i=(r,n=[])=>{if(!(!r||typeof r!="object"))for(const[s,c]of Object.entries(r))typeof c=="string"&&/^https?:\/\//i.test(c)&&(/^(avatarUrl|imageUrl|background|backgroundImage|sfx|sfxUrl|bgm|bgmUrl|url)$/.test(s)||n.includes("emotions"))?e.push({node:r,key:s,url:c}):c&&typeof c=="object"&&i(c,[...n,s])};return i(o),e}async function Ee(o,e=()=>{}){const i=ae(o),r=te(i),n=[...new Set(r.map(l=>l.url))],s=new Map,c=[];let m=0;for(const[l,a]of n.entries()){const b=new AbortController,f=setTimeout(()=>b.abort(),15e3);try{const h=await fetch(a,{credentials:"omit",mode:"cors",signal:b.signal});if(!h.ok)throw new Error("download");const C=await h.blob();if(!/^(image|audio)\//.test(C.type)||C.size>15*1024*1024||m+C.size>100*1024*1024)throw new Error("size/type");const W=await new Promise((O,D)=>{const E=new FileReader;E.onload=()=>O(E.result),E.onerror=D,E.readAsDataURL(C)});m+=C.size,s.set(a,W)}catch{c.push(a)}finally{clearTimeout(f)}e(l+1,n.length)}return r.forEach(l=>{s.has(l.url)&&(l.node[l.key]=s.get(l.url))}),{project:i,failures:c}}async function Ie(o,e,i){const[{default:r},{default:n}]=await Promise.all([ce(()=>import("./player-Bdx7D5jF.js"),[]),ce(()=>import("./style-CclJd-gM.js"),[])]),s=e?await Ee(o,i):{project:ae(o),failures:[]};return{...s,html:Tu(s.project,r,n)}}const Iu={name:"ExportPanel",props:{active:{type:Boolean,default:!0},mode:{type:String,default:"all"},previewStep:{type:Object,default:null}},components:{SplitExportControls:ye,AppIcon:M,CustomCSSEditor:fu},setup(){return{logStore:G()}},data(){return{exportPurpose:"file",readingKind:"player",splitOptions:{mode:"single",count:1e3,points:[]},publicationMedia:!1,publicationBusy:!1,publicationStatus:"",showStyleEditor:!1,appearanceMounted:!1,embedJsonUrl:"",embedAutoplay:!1,jsonIncludeImages:!0,embedCopied:!1,embedPreviewLoaded:!1,embedPreviewSrc:"",textExportIncludeDice:!0,textExportIncludeNarrator:!0,textExportIncludeSceneHeaders:!0,textExportCopied:!1}},computed:{exportItems(){return pe(this.logStore.vnData)},exportRanges(){try{return he(this.exportItems.length,this.splitOptions)}catch{return[]}},generatedTextExport(){return this.textForProject(this.logStore.vnData)},embedLinkStatus(){return Ye(this.embedJsonUrl)},validEmbedUrl(){return this.embedLinkStatus?.expired?"":Le(this.embedJsonUrl.trim())},generatedEmbedCode(){if(!this.validEmbedUrl)return"<!-- JSON URL을 입력하세요 -->";const o=window.location.origin,e="/vnlog/",i=this.embedAutoplay?"&autoplay=true":"";return`<iframe src="${`${o}${e}embed?json=${encodeURIComponent(this.validEmbedUrl)}${i}`}" title="VNLog 로그 플레이어" width="100%" height="600" style="display:block;width:100%;max-width:100%;border:0" allow="autoplay; fullscreen" allowfullscreen></iframe>`},embedPreviewUrl(){if(!this.validEmbedUrl)return"";const o=window.location.origin,e="/vnlog/",i=this.embedAutoplay?"&autoplay=true":"";return`${o}${e}embed?json=${encodeURIComponent(this.validEmbedUrl)}${i}`},jsonExportBytes(){return this.logStore.vnData?we(Ce(this.exportEnvelope())):0},jsonSizeText(){return Te(this.jsonExportBytes)}},methods:{async exportRecord(){if(!(this.publicationBusy||!this.exportRanges.length)){this.publicationBusy=!0,this.publicationStatus="로그 문서를 만들고 있어요…";try{const o=this.logStore.vnData,e=this.exportRanges,i=o.title||"로그 기록",r=e.map((n,s)=>({name:me(i+"_로그문서",s,e.length,"html"),content:Oe(o,this.exportItems.slice(n.start,n.end),fe(i,s,e.length))}));if(this.exportPurpose==="blog")for(const n of r)n.content=await Re(n.content);r.length>1?await ge(r,i+"_로그문서"):Se(r[0].content,i+"_로그문서"),this.publicationStatus=`${r.length}개 로그 문서 HTML을 내려받았어요.`}catch{this.publicationStatus="로그 문서를 만들지 못했어요. 다시 시도해 주세요."}finally{this.publicationBusy=!1}}},textForProject(o){const e=o?.scenes||[],i=[],r=o?.title;return r&&i.push(r,""),e.forEach((n,s)=>{this.textExportIncludeSceneHeaders&&i.push(`--- ${n.name||"씬 "+(s+1)} ---`,""),(n.steps||[]).forEach(c=>{const m=c.type==="system"||c.type==="narrator"||c.isSceneDescription;if(!(m&&!this.textExportIncludeNarrator)){if(m)i.push(c.text||"");else{const l=c.character?.name||"???";i.push(`${l}: ${c.text||""}`)}this.textExportIncludeDice&&c.hasDice&&(c.diceRolls||[]).forEach(l=>{const a=l.formula||l.text||"",b=l.result!=null?` → ${l.result}`:"";i.push(`  [🎲 ${a}${b}]`)}),i.push("")}})}),i.join(`
`).trim()},async exportPublication(o){if(!this.publicationBusy){if(!o&&this.exportRanges.length>1){await this.downloadBatch("html");return}this.publicationBusy=!0,this.publicationStatus="읽기용 파일을 만들고 있어요…";try{const e={vnData:this.logStore.vnData,theme:this.logStore.vnData.theme||null},{html:i,project:r,failures:n}=await Ie(e,this.publicationMedia,(c,m)=>{this.publicationStatus=`이미지·음원 담는 중 ${c} / ${m}`});o?await navigator.clipboard.writeText(Su(i)):Se(i,e.vnData.title);const s=new Set(te(r).map(c=>c.url)).size;this.publicationStatus=`${o?"본문 삽입 코드를 복사했어요":"HTML 파일을 내려받았어요"} · ${Te(new Blob([i]).size)}${s?` · 외부 이미지·음원 ${s}개는 원래 주소로 연결돼요`:" · 대사와 플레이어가 파일에 포함됐어요"}${n.length?` (다운로드 실패 ${n.length}개)`:""}`}catch{this.publicationStatus=o?"복사하지 못했어요. HTML 파일로 내려받아 주세요.":"파일을 만들지 못했어요. 잠시 후 다시 시도해 주세요."}finally{this.publicationBusy=!1}}},async persistEdits(){return this.logStore.vnData?.fileCode?await this.logStore.persistProject():(console.warn("파일 식별자가 없어 편집 내용을 저장하지 못했습니다."),!1)},async handleSaveCustomCSS(o){this.logStore.vnData||(this.logStore.vnData={}),this.logStore.recordEdit("꾸미기 저장"),this.logStore.vnData.customCSS=o;try{const e=await this.persistEdits();return this.$toast(e?this.logStore.vnData.isDemo?"예시에 꾸미기를 적용했어요":"꾸미기를 저장했어요":"화면에 적용했지만 기기에 저장하지 못했어요. JSON으로 내보내 주세요",e?"success":"error"),e}catch{return this.$toast("저장하지 못했어요. JSON으로 내보내 주세요","error"),!1}finally{this.logStore.editInProgress=!1}},stripInlineImages(o){const e=J(o),i=r=>typeof r=="string"&&r.startsWith("data:");Object.values(e.characters||{}).forEach(r=>{!r||typeof r!="object"||(i(r.avatarUrl)&&(r.avatarUrl=null),r.emotions&&typeof r.emotions=="object"&&Object.keys(r.emotions).forEach(n=>{i(r.emotions[n])&&delete r.emotions[n]}))}),(e.scenes||[]).forEach(r=>{(r.steps||[]).forEach(n=>{n.character&&i(n.character.avatarUrl)&&(n.character.avatarUrl=null),n.effects&&i(n.effects.background)&&(n.effects.background="")})});for(const r of e.assetLibrary?.characters||[]){i(r.avatarUrl)&&(r.avatarUrl="");for(const n of Object.keys(r.emotions||{}))i(r.emotions[n])&&delete r.emotions[n]}e.assetLibrary?.images&&(e.assetLibrary.images=e.assetLibrary.images.filter(r=>!i(r.url)));for(const r of e.assetLibrary?.roomScenes||[]){for(const n of["backgroundUrl","representativeUrl","foregroundUrl"])i(r[n])&&(r[n]="");r.images&&(r.images=r.images.filter(n=>!i(n.url)))}return i(e.theme?.bgImageUrl)&&(e.theme.bgImageUrl=""),e},exportEnvelope(){const o=this.logStore.vnData;if(!o)return{};const e=this.jsonIncludeImages?o:this.stripInlineImages(o);return{vnData:e,theme:e.theme||null,exportedAt:new Date().toISOString(),version:"1.1.10"}},serializeExportJSON(){return Z(this.exportEnvelope())},async downloadBatch(o){if(!this.publicationBusy){this.publicationBusy=!0,this.publicationStatus="분할 파일을 만들고 있어요…";try{const e=he(this.exportItems.length,this.splitOptions);let i=o==="json"?this.exportEnvelope().vnData:this.logStore.vnData;i=J(i);let r=[];if(o==="html"&&this.publicationMedia){const m=await Ee({vnData:i},(l,a)=>{this.publicationStatus=`이미지·음원 담는 중 ${l} / ${a}`});i=m.project.vnData,r=m.failures}const n=pe(i),s=[];for(const[m,l]of e.entries()){const a=Pe(i,n.slice(l.start,l.end),fe(i.title,m,e.length),o==="json"&&m===0),b={vnData:a,theme:a.theme||null,exportedAt:new Date().toISOString(),version:"1.1.10"};let f;o==="html"?f=(await Ie(b,!1)).html:o==="json"?f=Z(b):f=this.textForProject(a),s.push({name:me(i.title,m,e.length,o),content:f}),this.publicationStatus=`파일 만드는 중 ${m+1} / ${e.length}`}await ge(s,i.title);const c=o==="html"?new Set(te({vnData:i}).map(m=>m.url)).size:0;this.publicationStatus=`${s.length}개 파일을 ZIP으로 내려받았어요.${c?` 외부 이미지·음원 ${c}개는 원래 주소로 연결돼요.`:""}${r.length?` (다운로드 실패 ${r.length}개)`:""}`,this.$toast(this.publicationStatus,"success")}catch(e){this.publicationStatus=e.message||"분할 파일을 만들지 못했어요. 다시 시도해 주세요.",this.$toast(this.publicationStatus,"error")}finally{this.publicationBusy=!1}}},exportJSON(){if(this.exportRanges.length>1)return this.downloadBatch("json");const o=this.logStore.vnData;if(!o){this.$toast("내보낼 데이터가 없어요. 로그를 먼저 불러와 주세요","error");return}try{const e=this.serializeExportJSON(),i=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(i),n=document.createElement("a");n.href=r,n.download=`${Q(o.title,"vnlog")}_edited.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)}catch{this.$toast("파일을 만들지 못했어요. 파일 나누기에서 메시지 수를 줄여 다시 시도해 주세요.","error")}},async copyEmbedCode(){if(!this.validEmbedUrl){this.$toast("올바른 JSON 파일 주소를 먼저 입력해 주세요","error");return}try{await navigator.clipboard.writeText(this.generatedEmbedCode),this.embedCopied=!0,setTimeout(()=>{this.embedCopied=!1},2e3)}catch(o){console.error("클립보드 복사 실패:",o),this.$toast("복사하지 못했어요. 코드를 직접 선택해 복사해 주세요","error")}},downloadTextExport(){if(this.exportRanges.length>1)return this.downloadBatch("txt");const o=this.generatedTextExport;if(!o){this.$toast("내보낼 데이터가 없어요. 로그를 먼저 불러와 주세요","error");return}const e=new Blob([o],{type:"text/plain;charset=utf-8"}),i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download=`${Q(this.logStore.vnData?.title,"vnlog")}_text.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)},async copyTextExport(){try{await navigator.clipboard.writeText(this.generatedTextExport),this.textExportCopied=!0,setTimeout(()=>{this.textExportCopied=!1},2e3)}catch(o){console.error("클립보드 복사 실패:",o),this.$toast("복사하지 못했어요. 미리보기 텍스트를 직접 선택해 복사해 주세요","error")}}},watch:{showStyleEditor(o){o&&(this.appearanceMounted=!0)},mode:{immediate:!0,handler(o){o==="appearance"&&(this.appearanceMounted=!0)}},embedPreviewUrl(o){if(this.embedPreviewLoaded=!1,clearTimeout(this._embedPreviewTimer),!o){this.embedPreviewSrc="";return}this._embedPreviewTimer=setTimeout(()=>{this.embedPreviewSrc=o},500)}},beforeUnmount(){clearTimeout(this._embedPreviewTimer)}},bu={class:"export-section advanced-style"},Eu={key:0,class:"export-options"},yu={class:"export-purpose"},Ou=["disabled"],Ru=["disabled"],vu=["disabled"],Nu={key:0,class:"reading-kind"},Au=["disabled"],wu={key:1,class:"export-section record-export-section"},Cu={class:"export-desc"},Lu=["disabled"],Du={role:"status"},Hu={class:"export-split-panel"},Uu={key:0,class:"export-desc"},ku={class:"export-section publication-section"},Fu={class:"option-item"},Pu=["disabled"],xu={class:"publication-actions"},Vu=["disabled"],Mu=["disabled"],Wu={class:"publication-status",role:"status"},Bu={class:"export-section backup-section"},Yu={class:"json-export-options"},Gu={class:"option-item"},_u={class:"json-size-caption"},zu=["disabled"],ju={class:"export-section address-section"},Ku={class:"embed-step"},qu={class:"hosting-guide"},Xu={class:"hosting-option recommended"},Ju={class:"hosting-option warning"},Zu={class:"embed-step"},Qu={class:"embed-step"},$u={class:"option-item"},eh={class:"embed-step"},th={class:"code-preview"},nh=["disabled"],oh={key:0,class:"help-text-small",role:"alert"},sh={key:1,class:"help-text-small",role:"alert"},ih={key:2,class:"embed-preview-section"},rh={class:"embed-preview-frame"},ah={key:0,class:"preview-loading"},lh=["src"],dh={class:"help-text-small"},ch={class:"export-section text-section"},uh={class:"text-export-options"},hh={class:"option-item"},ph={class:"option-item"},fh={class:"option-item"},mh={class:"text-export-preview"},gh={class:"text-export-actions"},Th=["disabled"];function Sh(o,e,i,r,n,s){const c=R("CustomCSSEditor"),m=R("router-link"),l=R("SplitExportControls"),a=R("AppIcon");return d(),u("div",{class:w(["export-pane",{"appearance-workspace":i.mode==="appearance"}])},[S(t("section",bu,[i.mode!=="appearance"?(d(),u("button",{key:0,class:"btn btn-secondary",onClick:e[0]||(e[0]=b=>n.showStyleEditor=!n.showStyleEditor)},"재생 화면 꾸미기")):T("",!0),n.appearanceMounted||i.mode==="appearance"?S((d(),k(c,{key:1,ref:"appearanceEditor","base-theme":r.logStore.vnData.theme||{},"initial-c-s-s":r.logStore.vnData?.customCSS||{},saving:r.logStore.editInProgress,"preview-step":i.previewStep||r.logStore.currentStep,characters:r.logStore.vnData.characters||{},"project-title":r.logStore.vnData.title||"",onSave:s.handleSaveCustomCSS,onDirty:e[1]||(e[1]=b=>o.$emit("dirty",b))},null,8,["base-theme","initial-c-s-s","saving","preview-step","characters","project-title","onSave"])),[[A,n.showStyleEditor||i.mode==="appearance"]]):T("",!0)],512),[[A,i.mode!=="export"]]),i.active&&i.mode!=="appearance"?(d(),u("div",Eu,[e[58]||(e[58]=t("h3",{class:"export-heading"},"어떻게 가져갈까요?",-1)),t("fieldset",yu,[e[25]||(e[25]=t("legend",null,"용도 선택",-1)),t("label",null,[S(t("input",{"onUpdate:modelValue":e[2]||(e[2]=b=>n.exportPurpose=b),value:"file",type:"radio",disabled:n.publicationBusy},null,8,Ou),[[F,n.exportPurpose]]),e[22]||(e[22]=I("파일로 건네기",-1))]),t("label",null,[S(t("input",{"onUpdate:modelValue":e[3]||(e[3]=b=>n.exportPurpose=b),value:"blog",type:"radio",disabled:n.publicationBusy},null,8,Ru),[[F,n.exportPurpose]]),e[23]||(e[23]=I("블로그 글에 넣기",-1))]),t("label",null,[S(t("input",{"onUpdate:modelValue":e[4]||(e[4]=b=>n.exportPurpose=b),value:"backup",type:"radio",disabled:n.publicationBusy},null,8,vu),[[F,n.exportPurpose]]),e[24]||(e[24]=I("나중에 다시 편집하기",-1))])]),n.exportPurpose!=="backup"?(d(),u("label",Nu,[e[27]||(e[27]=I("읽는 모습",-1)),S(t("select",{"onUpdate:modelValue":e[5]||(e[5]=b=>n.readingKind=b),disabled:n.publicationBusy},[...e[26]||(e[26]=[t("option",{value:"player"},"비주얼 노벨",-1),t("option",{value:"log"},"로그 문서",-1)])],8,Au),[[V,n.readingKind]])])):T("",!0),n.exportPurpose!=="backup"&&n.readingKind==="log"?(d(),u("section",wu,[t("h4",null,g(n.exportPurpose==="blog"?"게시용 HTML · 로그 문서":"읽기용 HTML · 로그 문서"),1),t("p",Cu,g(n.exportPurpose==="blog"?"내려받은 HTML 소스를 게시처의 HTML 편집기에 붙여넣어요.":"대사를 한 문서로 이어 읽는 파일이에요.")+" 전체 "+g(s.exportItems.length)+"개 대사를 담아요.",1),p(m,{class:"btn btn-ghost",to:"/summary?appearance=1"},{default:B(()=>[...e[28]||(e[28]=[I("로그 문서 꾸미기 · 검색해서 일부만 내보내기",-1)])]),_:1}),t("button",{class:"export-action-button",disabled:n.publicationBusy||!s.exportRanges.length,onClick:e[6]||(e[6]=(...b)=>s.exportRecord&&s.exportRecord(...b))},g(s.exportRanges.length>1?`로그 문서 HTML ${s.exportRanges.length}개 · ZIP 다운로드`:"로그 문서 HTML 다운로드"),9,Lu),t("p",Du,g(n.publicationStatus),1),e[29]||(e[29]=t("p",{class:"help-text-small"},"게시처가 스타일을 제거하면 모양이 달라질 수 있어요. 외부 이미지는 원래 주소로 연결돼요.",-1))])):T("",!0),t("details",Hu,[t("summary",null,"파일 나누기 · "+g(s.exportRanges.length||0)+"개 파일",1),p(l,{id:"project-split",modelValue:n.splitOptions,"onUpdate:modelValue":e[7]||(e[7]=b=>n.splitOptions=b),items:s.exportItems,disabled:n.publicationBusy},null,8,["modelValue","items","disabled"]),n.splitOptions.mode!=="single"?(d(),u("p",Uu,"파일 다운로드에 분할을 적용해요. 본문 삽입 코드와 텍스트 복사는 전체 로그를 담아요. 나눈 JSON의 삭제함은 첫 파일에 보관해요.")):T("",!0)]),S(t("section",ku,[t("h4",null,g(n.exportPurpose==="blog"?"본문 삽입 코드 · 비주얼 노벨":"읽기용 HTML · 비주얼 노벨"),1),e[31]||(e[31]=t("p",{class:"export-desc"},"로그와 플레이어를 하나의 HTML 파일로 저장해요. 별도의 JSON 주소 없이 열 수 있어요.",-1)),t("label",Fu,[S(t("input",{"onUpdate:modelValue":e[8]||(e[8]=b=>n.publicationMedia=b),type:"checkbox",disabled:n.publicationBusy},null,8,Pu),[[H,n.publicationMedia]]),e[30]||(e[30]=t("span",null,"외부 이미지·음원도 내려받아 담기",-1))]),e[32]||(e[32]=t("p",{class:"help-text-small"},"체크하면 각 이미지·음원 주소로 다운로드를 요청해요. 사용자 CSS의 외부 파일·웹폰트는 포함되지 않아요.",-1)),t("div",xu,[S(t("button",{class:"export-action-button",disabled:n.publicationBusy||!s.exportRanges.length,onClick:e[9]||(e[9]=b=>s.exportPublication(!1))},g(s.exportRanges.length>1?`읽기용 HTML ${s.exportRanges.length}개 · ZIP 다운로드`:"읽기용 HTML 다운로드"),9,Vu),[[A,n.exportPurpose==="file"]]),S(t("button",{class:"export-action-button",disabled:n.publicationBusy,onClick:e[10]||(e[10]=b=>s.exportPublication(!0))},"본문 삽입 코드 복사",8,Mu),[[A,n.exportPurpose==="blog"]])]),t("p",Wu,g(n.publicationStatus),1),e[33]||(e[33]=t("details",{class:"publication-guide"},[t("summary",null,"어디에 게시하나요?"),t("p",null,"HTML 파일을 GitHub Pages 같은 정적 호스팅에 올려 주소를 공유하세요. 블로그의 HTML 편집에는 본문 삽입 코드를 붙여 넣을 수 있어요. 블로그가 iframe·srcdoc를 제거하거나 글 크기를 제한하면 정적 호스팅을 이용해 주세요."),t("p",null,"이미지를 담지 않거나 다운로드에 실패한 경우 원래 주소를 사용해요. 게시 전 저장한 HTML을 열어 확인해 주세요. 작업을 이어갈 때는 ‘나중에 다시 편집하기’에서 JSON을 보관하세요.")],-1))],512),[[A,n.exportPurpose!=="backup"&&n.readingKind==="player"]]),S(t("section",Bu,[t("h4",null,[p(a,{name:"upload",size:16}),e[34]||(e[34]=I(" 작업 파일 보관 ",-1))]),e[36]||(e[36]=t("p",{class:"export-desc"},"대사·연출·테마를 JSON 파일로 보관해요. 삭제함도 함께 보관해요. 홈에서 다시 열어 편집을 이어갈 수 있어요.",-1)),t("div",Yu,[t("label",Gu,[S(t("input",{"onUpdate:modelValue":e[11]||(e[11]=b=>n.jsonIncludeImages=b),type:"checkbox"},null,512),[[H,n.jsonIncludeImages]]),e[35]||(e[35]=t("span",null,"이미지(스탠딩·표정) 포함",-1))]),t("span",_u,"파일 크기 ~"+g(s.jsonSizeText),1)]),t("button",{onClick:e[12]||(e[12]=(...b)=>s.exportJSON&&s.exportJSON(...b)),class:"export-action-button",disabled:n.publicationBusy||!s.exportRanges.length},[p(a,{name:"save",size:16}),I(" "+g(s.exportRanges.length>1?`JSON ${s.exportRanges.length}개 · ZIP 다운로드`:"JSON 다운로드"),1)],8,zu)],512),[[A,n.exportPurpose==="backup"]]),S(t("details",ju,[e[50]||(e[50]=t("summary",null,"공개 JSON 주소로 연결하기",-1)),t("h4",null,[p(a,{name:"link",size:16}),e[37]||(e[37]=I(" 임베드 코드 생성 ",-1))]),t("div",Ku,[e[42]||(e[42]=t("p",{class:"export-desc"},"JSON 파일을 공개 저장 공간에 올린 뒤, 파일이 바로 열리는 주소를 넣어 주세요.",-1)),t("div",qu,[t("div",Xu,[p(a,{name:"check",size:14}),e[38]||(e[38]=t("strong",null,"추천:",-1)),e[39]||(e[39]=I(" GitHub Gist의 Raw 링크, GitHub Pages ",-1))]),t("div",Ju,[p(a,{name:"warning",size:14}),e[40]||(e[40]=t("strong",null,"공유 페이지 주의:",-1)),e[41]||(e[41]=I(" Google Drive·OneDrive 공유 페이지는 파일 주소가 아니에요. ",-1))])]),e[43]||(e[43]=t("p",{class:"hosting-caption"},"이미지를 포함한 JSON은 파일이 커서 외부 호스팅 크기 제한에 걸릴 수 있어요.",-1))]),t("div",Zu,[e[44]||(e[44]=t("label",{class:"embed-label",for:"export-embed-url"},"JSON URL",-1)),S(t("input",{id:"export-embed-url","onUpdate:modelValue":e[13]||(e[13]=b=>n.embedJsonUrl=b),type:"url",placeholder:"https://example.com/my-log.json",class:"embed-url-input"},null,512),[[y,n.embedJsonUrl]])]),t("div",Qu,[t("label",$u,[S(t("input",{"onUpdate:modelValue":e[14]||(e[14]=b=>n.embedAutoplay=b),type:"checkbox"},null,512),[[H,n.embedAutoplay]]),e[45]||(e[45]=t("span",null,"자동 재생",-1))])]),t("div",eh,[e[46]||(e[46]=t("label",{class:"embed-label"},"임베드 코드",-1)),t("div",th,[t("pre",null,[t("code",null,g(s.generatedEmbedCode),1)])]),t("button",{onClick:e[15]||(e[15]=(...b)=>s.copyEmbedCode&&s.copyEmbedCode(...b)),disabled:!s.validEmbedUrl,class:w(["copy-button",{copied:n.embedCopied}])},[p(a,{name:n.embedCopied?"check":"clipboard",size:16},null,8,["name"]),I(" "+g(n.embedCopied?"복사 완료!":"코드 복사"),1)],10,nh)]),s.embedLinkStatus?(d(),u("p",oh,g(s.embedLinkStatus.expired?"유효기간이 지난 티스토리 첨부파일 주소예요. 이 주소로는 코드를 만들 수 없어요.":"이 티스토리 첨부파일 주소에는 유효기간이 있어요. 오래 게시할 로그는 만료되지 않는 공개 파일 주소를 사용해 주세요."),1)):n.embedJsonUrl&&!s.validEmbedUrl?(d(),u("p",sh,"http 또는 https로 시작하는 파일 주소를 입력해 주세요.")):T("",!0),s.validEmbedUrl?(d(),u("div",ih,[e[49]||(e[49]=t("label",{class:"embed-label"},"미리보기",-1)),t("div",rh,[n.embedPreviewLoaded?T("",!0):(d(),u("div",ah,[...e[47]||(e[47]=[t("span",null,"불러오는 중...",-1)])])),n.embedPreviewSrc?(d(),u("iframe",{key:1,src:n.embedPreviewSrc,width:"100%",height:"100%",title:"블로그 플레이어 미리보기",frameborder:"0",allowfullscreen:"",allow:"autoplay",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",class:"preview-iframe",onLoad:e[16]||(e[16]=b=>n.embedPreviewLoaded=!0)},null,40,lh)):T("",!0)]),t("p",dh,[p(a,{name:"info",size:14}),e[48]||(e[48]=I(" 파일을 못 불러오면 미리보기의 “원본 파일 열기”로 링크를 확인해 주세요. 티스토리 첨부파일 주소는 외부 연결이 막힐 수 있어요. ",-1))])])):T("",!0)],512),[[A,n.exportPurpose!=="backup"]]),S(t("details",ch,[e[56]||(e[56]=t("summary",null,"텍스트로 내보내기",-1)),t("h4",null,[p(a,{name:"edit",size:16}),e[51]||(e[51]=I(" 텍스트 내보내기 ",-1))]),e[57]||(e[57]=t("p",{class:"export-desc"},"로그를 소설 스타일 텍스트로 변환하여 다운로드합니다.",-1)),t("div",uh,[t("label",hh,[S(t("input",{"onUpdate:modelValue":e[17]||(e[17]=b=>n.textExportIncludeDice=b),type:"checkbox"},null,512),[[H,n.textExportIncludeDice]]),e[52]||(e[52]=t("span",null,"다이스 결과 포함",-1))]),t("label",ph,[S(t("input",{"onUpdate:modelValue":e[18]||(e[18]=b=>n.textExportIncludeNarrator=b),type:"checkbox"},null,512),[[H,n.textExportIncludeNarrator]]),e[53]||(e[53]=t("span",null,"나레이터/시스템 메시지 포함",-1))]),t("label",fh,[S(t("input",{"onUpdate:modelValue":e[19]||(e[19]=b=>n.textExportIncludeSceneHeaders=b),type:"checkbox"},null,512),[[H,n.textExportIncludeSceneHeaders]]),e[54]||(e[54]=t("span",null,"씬 구분 헤더 포함",-1))])]),t("div",mh,[e[55]||(e[55]=t("label",{class:"embed-label"},"미리보기",-1)),t("div",{class:"text-preview-box",ref:"textPreviewBox"},g(s.generatedTextExport),513)]),t("div",gh,[t("button",{onClick:e[20]||(e[20]=(...b)=>s.downloadTextExport&&s.downloadTextExport(...b)),class:"export-action-button",disabled:n.publicationBusy||!s.exportRanges.length},[p(a,{name:"save",size:16}),I(" "+g(s.exportRanges.length>1?`텍스트 ${s.exportRanges.length}개 · ZIP 다운로드`:".txt 다운로드"),1)],8,Th),t("button",{onClick:e[21]||(e[21]=(...b)=>s.copyTextExport&&s.copyTextExport(...b)),class:"export-action-button secondary"},[p(a,{name:n.textExportCopied?"check":"clipboard",size:16},null,8,["name"]),I(" "+g(n.textExportCopied?"복사 완료!":"텍스트 복사"),1)])])],512),[[A,n.exportPurpose!=="backup"]])])):T("",!0)],2)}const Ih=L(Iu,[["render",Sh],["__scopeId","data-v-dbcef5d9"]]),bh={name:"EditorView",mixins:[X],components:{ProjectSaveStatus:Ne,DraftLeaveDialog:ve,RoomAssetPanel:pt,StepLivePreview:be,AssetRegistration:Pt,AppIcon:M,StepEffectsEditor:fo,StepInfoEditor:Ir,CharacterBulkEditor:ka,ImageBulkEditor:Bl,ExportPanel:Ih,DialogBox:Be,CharacterDisplay:We,PlaybackControls:Me},setup(){return{logStore:G()}},data(){return{activeTab:"step",drafts:{info:!1,effects:!1,appearance:!1,character:!1,image:!1,characterRegistration:!1,imageRegistration:!1},leaveRequest:null,infoPreview:null,effectsPreview:null,effectOperation:null,showStepList:!1,workspaceTabs:[{id:"step",label:"대사·연출",icon:"edit"},{id:"data",label:"캐릭터 & 이미지 관리",icon:"users"},{id:"appearance",label:"꾸미기",icon:"palette"},{id:"export",label:"내보내기",icon:"upload"}],stepSearch:"",showTrash:!1,stepSubTab:"info",dataSubTab:"characters",selectedStepIndex:null}},computed:{hasDrafts(){return Object.values(this.drafts).some(Boolean)},previewStep(){if(!this.selectedStep)return null;if(this.stepSubTab==="info")return this.infoPreview?.id===this.selectedStep.id?{...this.infoPreview,effects:this.selectedStep.effects}:this.selectedStep;const o=this.effectsPreview,e={...this.selectedStep,effects:{...this.selectedStep.effects}},i=this.selectedStepIndex+1;return o&&i>=o.startStep&&i<=o.endStep&&["background","bgm","sfx"].includes(o.kind)&&(e.effects[o.kind]=o.effects[o.kind],o.kind==="background"&&(e.effects.backgroundOpacity=o.effects.backgroundOpacity)),e},filteredSteps(){const o=this.stepSearch.trim().toLocaleLowerCase();return this.allSteps.map((e,i)=>({step:e,index:i})).filter(({step:e})=>!o||`${e.character?.name||""} ${e.text}`.toLocaleLowerCase().includes(o))},allSteps(){const o=[];return(this.logStore.vnData?.scenes||[]).forEach(i=>{o.push(...i.steps||[])}),o},totalSteps(){return this.allSteps.length},selectedStep(){return this.selectedStepIndex===null?null:this.allSteps[this.selectedStepIndex]||null},selectedStepEffects(){return this.selectedStep?.effects||null}},methods:{async editImageUsage(o){await this.confirmDrafts(["character","image"])&&(this.dataSubTab="images",await this.$refs.imageEditor.selectImage(o))},async editCharacterPortrait(o){await this.confirmDrafts(["character","image"])&&(this.dataSubTab="characters",await this.$refs.characterEditor.selectCharacter(o),this.$refs.characterEditor.imageScope="same",this.$refs.characterEditor.selectedAvatarUrl=this.$refs.imageEditor.selectedImageUrl)},async confirmDrafts(o=Object.keys(this.drafts)){if(this.logStore.editInProgress||this.effectOperation)return!1;const e=o.filter(r=>this.drafts[r]);if(!e.length)return!0;if(this.leaveRequest)return!1;const i={info:"대사",effects:"배경과 소리",appearance:"재생 화면 꾸미기",character:"캐릭터",image:"이미지",characterRegistration:"캐릭터 등록",imageRegistration:"이미지 등록"};return new Promise(r=>{this.leaveRequest={keys:e,resolve:r,canSave:e.every(n=>["info","appearance"].includes(n)),message:`${e.map(n=>i[n]).join(" · ")}에 아직 적용하지 않은 수정이 있어요. 계속하면 이 수정은 포함되지 않아요.`}})},async resolveLeave(o){const e=this.leaveRequest;if(e){if(this.leaveRequest=null,o==="cancel"){this.showDraft(e.keys[0]),e.resolve(!1);return}if(o==="save")for(const i of e.keys){let r=!1;if(i==="info"&&(r=await new Promise(n=>this.$refs.infoEditor.saveChanges(n))),i==="appearance"){const n=this.$refs.exportPanel.$refs.appearanceEditor;r=await this.$refs.exportPanel.handleSaveCustomCSS({cssVars:{...n.cssVars},userCustomCSS:n.userCustomCSS})}if(!r){e.resolve(!1);return}}else for(const i of e.keys)i==="info"&&this.$refs.infoEditor.discardDraft(),i==="appearance"&&this.$refs.exportPanel.$refs.appearanceEditor.loadCustomCSS(this.logStore.vnData.customCSS||{}),i==="effects"&&this.$refs.effectsEditor.discardDraft(),i==="character"&&this.$refs.characterEditor.resetForm(),i==="image"&&this.$refs.imageEditor.resetForm(),i.endsWith("Registration")&&this.$refs[i].resetForm(),this.drafts[i]=!1;e.resolve(!0)}},showDraft(o){o==="appearance"?this.activeTab="appearance":["character","image","characterRegistration","imageRegistration"].includes(o)?(this.activeTab="data",this.dataSubTab=o.startsWith("character")?"characters":"images"):(this.activeTab="step",this.stepSubTab=o==="effects"?"effects":"info")},async changeWorkspace(o){o==="export"&&!await this.confirmDrafts()||(this.activeTab=o)},async openBackup(){await this.confirmDrafts()&&(this.activeTab="export",this.$refs.exportPanel.exportPurpose="backup")},protectUnload(o){!this.hasDrafts&&this.logStore.projectSaveState!=="failed"||(o.preventDefault(),o.returnValue="")},async handleImportRoom({assets:o,filename:e}){this.logStore.editInProgress||(this.logStore.recordEdit("룸 데이터 추가"),et(this.logStore.vnData,o,e),await this.persistAndNotify("룸 데이터를 추가했어요. 캐릭터와 이미지 탭에서 확인하세요."))},async handleRegisterAsset({kind:o,asset:e}){(o==="character"?j(this.logStore.vnData).some(r=>r.name===e.name):K(this.logStore.vnData).some(r=>r.url===e.url))||(this.logStore.recordEdit("자료 등록"),$(this.logStore.vnData,o,e)&&await this.persistAndNotify(o==="character"?"캐릭터를 등록했어요":"이미지를 등록했어요"))},async travelHistory(o){if(!await this.confirmDrafts())return;const e=this.selectedStep?.id;if(!this.logStore.travelHistory(o))return;const i=this.allSteps.findIndex(r=>r.id===e);this.selectedStepIndex=i>=0?i:Math.max(0,Math.min(this.selectedStepIndex||0,this.totalSteps-1)),await this.persistAndNotify(o==="undo"?"이전 편집으로 되돌렸어요":"편집을 다시 적용했어요")},handleHistoryKey(o){!(o.ctrlKey||o.metaKey)||o.altKey||o.target.closest('input, textarea, select, [contenteditable="true"]')||o.key.toLowerCase()==="z"&&(o.preventDefault(),this.travelHistory(o.shiftKey?"redo":"undo"))},async restoreDeleted(o){const e=this.logStore.vnData.deletedSteps||[],i=e.findIndex(m=>m.key===o);if(i<0)return;this.logStore.recordEdit("삭제한 대사 복구");const r=e.splice(i,1)[0],n=this.logStore.vnData.scenes;let s=n.find(m=>m.id===r.scene.id);s||(s={...r.scene,steps:[]},n.splice(Math.min(r.sceneIndex,n.length),0,s));const c=s.steps.findIndex(m=>m.id===r.nextId);s.steps.splice(c>=0?c:Math.min(r.stepIndex,s.steps.length),0,r.step),this.selectedStepIndex=this.allSteps.findIndex(m=>m.id===r.step.id),await this.persistAndNotify("삭제한 대사를 복구했어요")},async selectStep(o){o!==this.selectedStepIndex&&!await this.confirmDrafts(["info","effects"])||(this.showStepList=!1,this.selectedStepIndex=o)},async saveAndPlay(){await this.confirmDrafts()&&await this.persistEdits()&&(this.selectedStepIndex!==null&&sessionStorage.setItem("player-target-step",this.selectedStepIndex+1),this.$router.push("/player"))},async persistEdits(){if(!this.logStore.vnData?.fileCode)return console.warn("파일 식별자가 없어 편집 내용을 저장하지 못했습니다."),this.logStore.editInProgress=!1,!1;try{return await this.logStore.persistProject()}finally{this.logStore.editInProgress=!1}},async persistAndNotify(o){const e=await this.persistEdits();return e?this.$toast(o,"success"):this.$toast("변경은 적용했지만 저장하지 못했어요. 저장 공간을 확인해 주세요","error"),e},async handleSaveStepInfo({id:o,updates:e,onComplete:i}){const r=this.allSteps.find(s=>s.id===o);if(!r){this.$toast("대사를 찾지 못했어요","error"),i?.(!1);return}this.logStore.recordEdit("대사 수정"),r.sceneNumber=e.sceneNumber,r.type=e.type,r.character.name=e.character.name,r.character.color=e.character.color,r.character.avatarUrl=e.character.avatarUrl,r.text=e.text,r.isSceneDescription=e.isSceneDescription,r.sceneTitle=e.sceneTitle,r.scenePCs=e.scenePCs,r.sceneDescription=e.sceneDescription,r.illustrations=JSON.parse(JSON.stringify(e.illustrations||[])),r.diceRolls=JSON.parse(JSON.stringify(e.diceRolls||[])),r.statusChanges=JSON.parse(JSON.stringify(e.statusChanges||[])),r.dxCombos=JSON.parse(JSON.stringify(e.dxCombos||[])),r.hasDice=e.hasDice,r.hasStatusChange=e.hasStatusChange,r.hasDXCombo=e.hasDXCombo,r.hasIllustration=e.hasIllustration;const n=await this.persistAndNotify(this.logStore.vnData.isDemo?"예시에 대사 수정을 적용했어요":"대사를 저장했어요");return i?.(n),n},async handleDeleteStep(o){if(this.totalSteps<=1){this.$toast("재생할 대사 하나는 남겨 주세요","info");return}if(!this.allSteps.some(n=>n.id===o))return;this.logStore.recordEdit("대사 삭제");const e=this.logStore.vnData.scenes;let i=!1;for(let n=0;n<e.length;n++){const s=e[n],c=s.steps.findIndex(m=>m.id===o);if(c!==-1){const{steps:m,...l}=s;(this.logStore.vnData.deletedSteps||=[]).push({key:crypto.randomUUID(),step:JSON.parse(JSON.stringify(m[c])),scene:l,sceneIndex:n,stepIndex:c,nextId:m[c+1]?.id}),s.steps.splice(c,1),s.steps.length||e.splice(n,1),i=!0;break}}if(!i){this.$toast("스텝을 찾지 못했어요","error");return}this.logStore.playback.currentSceneIndex=0,this.logStore.playback.currentStepIndex=0;const r=this.allSteps.length;this.selectedStepIndex>=r&&(this.selectedStepIndex=r>0?r-1:null),await this.persistAndNotify("스텝을 삭제했어요")},async handleDuplicateStep(o){if(!this.allSteps.some(s=>s.id===o))return;this.logStore.recordEdit("대사 복제");const e=this.logStore.vnData.scenes;let i=!1,r=0;const n=crypto.randomUUID();for(let s=0;s<e.length;s++){const c=e[s],m=c.steps.findIndex(l=>l.id===o);if(m!==-1){const l=c.steps[m],a=JSON.parse(JSON.stringify(l));a.id=n,c.steps.splice(m+1,0,a),r+=m+1,i=!0;break}r+=c.steps.length}if(!i){this.$toast("스텝을 찾지 못했어요","error");return}this.selectedStepIndex=r,await this.persistAndNotify(`스텝을 복사했어요 (새 ID: ${n})`)},async yieldEffectFrame(){await this.$nextTick(),await new Promise(o=>setTimeout(o,16))},async runEffectOperation(o,e,i,r){if(!(this.effectOperation||this.logStore.editInProgress||!e.length)){this.effectOperation={label:o,current:0,total:e.length,phase:"변경을 준비하고 있어요…"},this.logStore.editInProgress=!0,this.activateFocusTrap("effectProgressModal");try{await this.yieldEffectFrame(),this.logStore.recordEdit(o),this.effectOperation.phase="대사에 변경을 적용하고 있어요…";for(let n=0;n<e.length;n++)i(e[n]),this.effectOperation.current=n+1,(n+1)%100===0&&await this.yieldEffectFrame();return this.effectOperation.phase="이 브라우저에 저장하고 있어요…",await this.yieldEffectFrame(),await this.persistAndNotify(r)}catch{return this.$toast("변경을 완료하지 못했어요. 현재 내용을 확인하고 다시 시도해 주세요. 적용된 변경은 실행 취소할 수 있어요.","error"),!1}finally{this.logStore.editInProgress=!1,this.effectOperation=null,await this.$nextTick(),this.deactivateFocusTrap()}}},async handleApplyEffects({startStep:o,endStep:e,effects:i,illustrations:r,replaceRange:n,onComplete:s}){const c=this.allSteps;if(this.effectOperation||this.logStore.editInProgress||!q(o,e,c.length))return;if(n&&!ze(c,n)){this.$toast("원래 범위가 변경됐어요. 적용한 효과 범위에서 다시 선택해 주세요.","error");return}const m=[];if(i?.sfx&&m.push("효과음"),i?.bgm&&m.push("BGM"),i?.background&&m.push("배경"),r&&m.push("일러스트"),!m.length)return;const l=[];if(n)for(let h=n.startStep;h<=n.endStep;h++)(h<o||h>e)&&l.push({step:c[h-1],clear:!0});for(let h=o-1;h<e;h++)l.push({step:c[h],clear:!1});const a=o===e?`스텝 ${o}`:`스텝 ${o}~${e}`,b=m.at(-1)==="일러스트"?"를":"을",f=await this.runEffectOperation(n?"효과 범위 수정":"연출 적용",l,({step:h,clear:C})=>{if(C){h.effects[n.key]=null,n.key==="background"&&delete h.effects.backgroundOpacity;return}(i?.sfx||i?.bgm||i?.background)&&(h.effects||(h.effects={}),i.sfx&&(h.effects.sfx=i.sfx),i.bgm&&(h.effects.bgm=i.bgm),i.background&&(h.effects.background=i.background,h.effects.backgroundOpacity=i.backgroundOpacity)),r&&(h.illustrations=JSON.parse(JSON.stringify(r)),h.hasIllustration=h.illustrations.length>0)},`${a}에 ${m.join("·")}${b} 적용했어요`);return s?.(f),f},async handleRemoveEffects({startStep:o,endStep:e,kind:i=null,onComplete:r}){const n=this.allSteps;if(this.effectOperation||this.logStore.editInProgress||!q(o,e,n.length)||i&&!["sfx","bgm","background"].includes(i))return;const s=o===e?`스텝 ${o}`:`스텝 ${o}~${e}`,c=await this.runEffectOperation("연출 제거",n.slice(o-1,e),m=>{if(m.effects){for(const l of i?[i]:["sfx","bgm","background"])m.effects[l]=null;(!i||i==="background")&&delete m.effects.backgroundOpacity}},`${s}의 효과를 제거했어요`);return r?.(c),c},async handleBulkUpdateCharacter({oldName:o,newName:e,newColor:i,newAvatarUrl:r,replaceExistingAvatars:n=!1,imageScope:s,selectedAvatarUrl:c,convertToNarrator:m,onProgress:l,onComplete:a}){this.logStore.recordEdit("인물 일괄 수정");const b=O=>{if(O.name=e,O.color=i,s==="same"&&r&&c)for(const D of Object.keys(O.emotions||{}))O.emotions[D]===c&&(O.emotions[D]=r);r&&(s==="same"?c&&O.avatarUrl===c:n||!O.avatarUrl)&&(O.avatarUrl=r)};let f=0,h=0,C=0;this.allSteps.forEach(O=>{O.character&&O.character.name===o&&h++});for(let O=0;O<this.allSteps.length;O++){const D=this.allSteps[O];D.character&&D.character.name===o&&(m&&D.type!=="narrator"&&(D.type="narrator",C++),b(D.character),f++,l&&l(f,h),f%10===0&&await new Promise(E=>setTimeout(E,10)))}for(const O of Object.values(this.logStore.vnData.characters||{}))O.name===o&&b(O);for(const O of this.logStore.vnData.assetLibrary?.characters||[])O.name===o&&b(O);const W=await this.persistEdits();if(a){const O=[];f?o!==e?O.push(`"${o}" → "${e}" 스텝 ${f}개를 바꿨어요`):O.push(`"${o}" 스텝 ${f}개를 바꿨어요`):O.push(`등록한 캐릭터 "${e}"을 수정했어요`),m&&O.push(`나레이터 변환 ${C}개`),W||O.push("저장하지 못했어요. 저장 공간을 확인해 주세요"),await a({success:W,updatedCount:f,message:O.join(" · ")})}},async handleBulkUpdateImage({oldUrl:o,newUrl:e,onProgress:i,onComplete:r}){this.logStore.recordEdit("이미지 일괄 수정");let n=0,s=0;const c=this.logStore.vnData;if(c.scenes&&c.scenes.forEach(l=>{l.steps?.forEach(a=>{a.character?.avatarUrl===o&&s++,a.effects?.background===o&&s++,a.illustrations&&Array.isArray(a.illustrations)&&a.illustrations.forEach(b=>{b.url===o&&s++})})}),c.handouts&&c.handouts.forEach(l=>{l.imageUrl===o&&s++}),c.scenes)for(let l=0;l<c.scenes.length;l++){const a=c.scenes[l];if(a.steps)for(let b=0;b<a.steps.length;b++){const f=a.steps[b];if(f.character?.avatarUrl===o&&(f.character.avatarUrl=e,n++,i&&i(n,s)),f.effects?.background===o&&(f.effects.background=e,n++,i&&i(n,s)),f.illustrations&&Array.isArray(f.illustrations))for(let h=0;h<f.illustrations.length;h++){const C=f.illustrations[h];C.url===o&&(C.url=e,n++,i&&i(n,s))}n%10===0&&await new Promise(h=>setTimeout(h,10))}}if(c.characters)for(const l in c.characters){const a=c.characters[l];a.avatarUrl===o&&(a.avatarUrl=e);for(const b of Object.keys(a.emotions||{}))a.emotions[b]===o&&(a.emotions[b]=e)}if(c.handouts)for(let l=0;l<c.handouts.length;l++){const a=c.handouts[l];a.imageUrl===o&&(a.imageUrl=e,n++,i&&i(n,s),n%10===0&&await new Promise(b=>setTimeout(b,10)))}for(const l of c.assetLibrary?.images||[])l.url===o&&(l.url=e);for(const l of c.assetLibrary?.characters||[])l.avatarUrl===o&&(l.avatarUrl=e);const m=await this.persistEdits();if(r){const l=m?n?`이미지 주소 ${n}개와 등록 자료를 바꿨어요`:"등록한 이미지를 바꿨어요":`이미지 주소 ${n}개를 바꿨지만 저장하지 못했어요. 저장 공간을 확인해 주세요`;await r({success:m,updatedCount:n,message:l})}},hasEffects(o){return o.effects&&(o.effects.sfx||o.effects.bgm||o.effects.background)},truncateText(o,e){return o?o.length>e?o.substring(0,e)+"...":o:""},scrollToTargetStep(){const o=sessionStorage.getItem("editor-target-step");if(o){const e=parseInt(o,10);if(e>=1&&e<=this.totalSteps){const i=e-1;this.$nextTick(()=>{this.selectStep(i);const r=document.querySelectorAll(".step-item");r[i]&&r[i].scrollIntoView({behavior:"smooth",block:"center"})})}sessionStorage.removeItem("editor-target-step")}}},async beforeRouteLeave(){return await this.confirmDrafts()},async mounted(){window.addEventListener("keydown",this.handleHistoryKey),window.addEventListener("beforeunload",this.protectUnload);const o=()=>this.logStore.vnData?.scenes?.length>0;if(!o()&&(!await this.logStore.loadAutoSave()||!o())){this.$router.push("/");return}this.scrollToTargetStep(),["appearance","export"].includes(this.$route?.query?.tab)&&(this.activeTab=this.$route.query.tab),this.$route?.query?.purpose==="backup"&&(this.$refs.exportPanel.exportPurpose="backup")},beforeUnmount(){window.removeEventListener("keydown",this.handleHistoryKey),window.removeEventListener("beforeunload",this.protectUnload),this.leaveRequest?.resolve(!1)},watch:{activeTab(o,e){e==="css"&&o!=="css"&&(this.cssPreviewAutoPlay=!1)}}},Eh={class:"editor-view"},yh=["inert"],Oh={class:"editor-header"},Rh={class:"document-heading"},vh={class:"header-actions"},Nh=["disabled","title"],Ah=["disabled"],wh=["aria-expanded"],Ch={key:0,class:"trash-panel","aria-label":"삭제한 대사"},Lh={class:"trash-heading"},Dh={key:0},Hh={key:1},Uh=["disabled","onClick"],kh=["inert"],Fh={class:"workspace-nav","aria-label":"작업실 메뉴"},Ph=["aria-pressed","onClick"],xh=["aria-expanded"],Vh={class:"list-header"},Mh={key:0,class:"search-count"},Wh={class:"list-body"},Bh=["aria-pressed","onClick","onKeydown"],Yh={class:"step-number"},Gh={class:"step-info"},_h={class:"step-character"},zh={key:0,class:"selection-label"},jh={class:"step-text"},Kh={key:0,class:"step-effects-tags"},qh={key:0,class:"effect-tag sfx"},Xh={key:1,class:"effect-tag bgm"},Jh={key:2,class:"effect-tag bg"},Zh={class:"editor-panel"},Qh={class:"tab-content"},$h={class:"tab-pane step-edit-pane"},ep={class:"sub-tabs"},tp=["aria-pressed"],np=["aria-pressed"],op={class:"tab-pane"},sp={class:"sub-tabs"},ip=["aria-pressed"],rp=["aria-pressed"],ap=["aria-pressed"],lp={key:1,class:"modal-overlay effect-progress-overlay"},dp={ref:"effectProgressModal",class:"modal-container effect-progress-dialog",role:"dialog","aria-modal":"true","aria-labelledby":"effect-progress-title","aria-describedby":"effect-progress-status",tabindex:"-1"},cp={id:"effect-progress-title"},up={id:"effect-progress-status",role:"status"},hp=["value","max"],pp={class:"effect-progress-count"};function fp(o,e,i,r,n,s){const c=R("ProjectSaveStatus"),m=R("AppIcon"),l=R("StepLivePreview"),a=R("StepInfoEditor"),b=R("StepEffectsEditor"),f=R("RoomAssetPanel"),h=R("AssetRegistration"),C=R("CharacterBulkEditor"),W=R("ImageBulkEditor"),O=R("ExportPanel"),D=R("DraftLeaveDialog");return d(),u("div",Eh,[t("div",{class:"editor-container",inert:!!n.effectOperation||void 0},[t("header",Oh,[t("div",Rh,[e[25]||(e[25]=t("span",{class:"eyebrow"},"나의 로그 작업실",-1)),t("h2",null,g(r.logStore.vnData.title||"로그 편집기"),1),p(c,{dirty:s.hasDrafts,onBackup:s.openBackup},null,8,["dirty","onBackup"])]),t("div",vh,[t("button",{class:"history-button history-icon",disabled:!r.logStore.undoStack.length||r.logStore.editInProgress,title:"실행 취소"+(r.logStore.undoStack.at(-1)?.label?" · "+r.logStore.undoStack.at(-1).label:""),"aria-label":"실행 취소",onClick:e[0]||(e[0]=E=>s.travelHistory("undo"))},[p(m,{name:"undo",size:20})],8,Nh),t("button",{class:"history-button history-icon",disabled:!r.logStore.redoStack.length||r.logStore.editInProgress,title:"다시 실행","aria-label":"다시 실행",onClick:e[1]||(e[1]=E=>s.travelHistory("redo"))},[p(m,{name:"redo",size:20})],8,Ah),t("button",{class:"history-button trash-button","aria-expanded":n.showTrash,onClick:e[2]||(e[2]=E=>n.showTrash=!n.showTrash)},"삭제함 "+g(r.logStore.vnData.deletedSteps?.length||0),9,wh),t("button",{onClick:e[3]||(e[3]=(...E)=>s.saveAndPlay&&s.saveAndPlay(...E)),class:"save-button"},[p(m,{name:"play",size:18}),e[26]||(e[26]=I(" 재생하기 ",-1))])])]),n.showTrash?(d(),u("section",Ch,[t("div",Lh,[e[27]||(e[27]=t("h3",null,"삭제한 대사",-1)),t("button",{onClick:e[4]||(e[4]=E=>n.showTrash=!1)},"닫기")]),e[28]||(e[28]=t("p",null,"삭제한 대사는 작업 파일에 함께 보관돼요. 복구하면 원래 장면으로 돌아가요.",-1)),r.logStore.vnData.deletedSteps?.length?(d(),u("ul",Hh,[(d(!0),u(v,null,N(r.logStore.vnData.deletedSteps,E=>(d(),u("li",{key:E.key},[t("span",null,g(E.step.character?.name||"시스템")+" · "+g(s.truncateText(E.step.text,80)),1),t("button",{disabled:r.logStore.editInProgress,onClick:P=>s.restoreDeleted(E.key)},"복구",8,Uh)]))),128))])):(d(),u("p",Dh,"삭제한 대사가 없어요."))])):T("",!0),t("div",{class:w(["editor-content",{"editing-step":n.activeTab==="step"}]),inert:r.logStore.editInProgress||void 0},[t("nav",Fh,[(d(!0),u(v,null,N(n.workspaceTabs,E=>(d(),u("button",{key:E.id,class:w({active:n.activeTab===E.id}),"aria-pressed":n.activeTab===E.id,onClick:P=>s.changeWorkspace(E.id)},[p(m,{name:E.icon,size:20},null,8,["name"]),t("span",null,g(E.label),1)],10,Ph))),128))]),S(t("button",{class:"step-list-toggle","aria-expanded":n.showStepList,"aria-controls":"workspace-steps",onClick:e[5]||(e[5]=E=>n.showStepList=!n.showStepList)},[I("대사 목록 · "+g(n.selectedStepIndex===null?"선택하기":n.selectedStepIndex+1+"번 선택"),1),p(m,{name:"down",size:16})],8,xh),[[A,n.activeTab==="step"]]),S(t("div",{id:"workspace-steps",class:w(["steps-list",{"mobile-open":n.showStepList}])},[t("div",Vh,[t("h3",null,[e[29]||(e[29]=I("대사 목록 ",-1)),t("span",null,g(s.totalSteps),1)]),e[30]||(e[30]=t("label",{class:"sr-only",for:"step-search"},"대사·인물 검색",-1)),S(t("input",{id:"step-search","onUpdate:modelValue":e[6]||(e[6]=E=>n.stepSearch=E),type:"search",placeholder:"대사나 인물 찾기"},null,512),[[y,n.stepSearch]]),n.stepSearch?(d(),u("p",Mh,g(s.filteredSteps.length)+"개를 찾았어요",1)):T("",!0)]),t("div",Wh,[(d(!0),u(v,null,N(s.filteredSteps,({step:E,index:P})=>(d(),u("div",{key:E.id,class:w(["step-item",{"has-effects":s.hasEffects(E),selected:n.selectedStepIndex===P}]),role:"button",tabindex:"0","aria-pressed":n.selectedStepIndex===P,onClick:le=>s.selectStep(P),onKeydown:[_(Y(le=>s.selectStep(P),["prevent"]),["enter"]),_(Y(le=>s.selectStep(P),["prevent"]),["space"])]},[t("div",Yh,g(P+1),1),t("div",Gh,[t("div",_h,[I(g(E.character?.name||"시스템"),1),n.selectedStepIndex===P?(d(),u("span",zh,"선택")):T("",!0)]),t("div",jh,g(s.truncateText(E.text,50)),1),s.hasEffects(E)?(d(),u("div",Kh,[E.effects.sfx?(d(),u("span",qh,[p(m,{name:"volume",size:12})])):T("",!0),E.effects.bgm?(d(),u("span",Xh,[p(m,{name:"music",size:12})])):T("",!0),E.effects.background?(d(),u("span",Jh,[p(m,{name:"photo",size:12})])):T("",!0)])):T("",!0)])],42,Bh))),128))])],2),[[A,n.activeTab==="step"]]),t("div",Zh,[t("div",Qh,[S(t("div",$h,[n.activeTab==="step"?(d(),k(l,{key:0,"reserve-space":420,step:s.previewStep,title:r.logStore.vnData.title,characters:r.logStore.vnData.characters,"base-theme":r.logStore.vnData.theme||{},"custom-c-s-s":r.logStore.vnData.customCSS||{}},null,8,["step","title","characters","base-theme","custom-c-s-s"])):T("",!0),t("div",ep,[t("button",{class:w(["sub-tab-button",{active:n.stepSubTab==="info"}]),"aria-pressed":n.stepSubTab==="info",onClick:e[7]||(e[7]=E=>n.stepSubTab="info")}," 대사와 인물 ",10,tp),t("button",{class:w(["sub-tab-button",{active:n.stepSubTab==="effects"}]),"aria-pressed":n.stepSubTab==="effects",onClick:e[8]||(e[8]=E=>n.stepSubTab="effects")}," 배경과 소리 ",10,np)]),S(p(a,{ref:"infoEditor",onDirty:e[9]||(e[9]=E=>n.drafts.info=E),"step-data":s.selectedStep,onPreview:e[10]||(e[10]=E=>n.infoPreview=E),onSave:s.handleSaveStepInfo,onDelete:s.handleDeleteStep,onDuplicate:s.handleDuplicateStep,onClose:e[11]||(e[11]=E=>n.stepSubTab="effects")},null,8,["step-data","onSave","onDelete","onDuplicate"]),[[A,n.stepSubTab==="info"]]),S(p(b,{ref:"effectsEditor",onDirty:e[12]||(e[12]=E=>n.drafts.effects=E),"total-steps":s.totalSteps,onPreview:e[13]||(e[13]=E=>n.effectsPreview=E),"selected-step":n.selectedStepIndex!==null?n.selectedStepIndex+1:null,"current-effects":s.selectedStepEffects,"current-illustrations":s.selectedStep?.illustrations||[],onApply:s.handleApplyEffects,onRemove:s.handleRemoveEffects,onClose:e[14]||(e[14]=E=>n.stepSubTab="info")},null,8,["total-steps","selected-step","current-effects","current-illustrations","onApply","onRemove"]),[[A,n.stepSubTab==="effects"]])],512),[[A,n.activeTab==="step"]]),S(t("div",op,[t("div",sp,[t("button",{class:w(["sub-tab-button",{active:n.dataSubTab==="characters"}]),"aria-pressed":n.dataSubTab==="characters",onClick:e[15]||(e[15]=E=>n.dataSubTab="characters")},[p(m,{name:"users",size:14}),e[31]||(e[31]=I(" 캐릭터 ",-1))],10,ip),t("button",{class:w(["sub-tab-button",{active:n.dataSubTab==="images"}]),"aria-pressed":n.dataSubTab==="images",onClick:e[16]||(e[16]=E=>n.dataSubTab="images")},[p(m,{name:"photo",size:14}),e[32]||(e[32]=I(" 이미지 ",-1))],10,rp),t("button",{class:w(["sub-tab-button",{active:n.dataSubTab==="room"}]),"aria-pressed":n.dataSubTab==="room",onClick:e[17]||(e[17]=E=>n.dataSubTab="room")},[p(m,{name:"folder",size:14}),e[33]||(e[33]=I("룸 데이터 추가",-1))],10,ap)]),n.dataSubTab==="room"?(d(),k(f,{key:0,source:r.logStore.vnData.assetLibrary?.roomSource,busy:r.logStore.editInProgress,onImport:s.handleImportRoom},null,8,["source","busy","onImport"])):T("",!0),S(p(h,{ref:"characterRegistration",kind:"character",onDirty:e[18]||(e[18]=E=>n.drafts.characterRegistration=E),onRegister:s.handleRegisterAsset},null,8,["onRegister"]),[[A,n.dataSubTab==="characters"]]),S(p(h,{ref:"imageRegistration",kind:"image",onDirty:e[19]||(e[19]=E=>n.drafts.imageRegistration=E),onRegister:s.handleRegisterAsset},null,8,["onRegister"]),[[A,n.dataSubTab==="images"]]),S(p(C,{ref:"characterEditor","before-change":()=>s.confirmDrafts(["character"]),onEditImage:s.editImageUsage,onDirty:e[20]||(e[20]=E=>n.drafts.character=E),"all-steps":s.allSteps,"registered-characters":r.logStore.vnData.assetLibrary?.characters||[],onBulkUpdate:s.handleBulkUpdateCharacter,onClose:e[21]||(e[21]=E=>n.dataSubTab="images")},null,8,["before-change","onEditImage","all-steps","registered-characters","onBulkUpdate"]),[[A,n.dataSubTab==="characters"]]),S(p(W,{ref:"imageEditor","before-change":()=>s.confirmDrafts(["image"]),onEditCharacter:s.editCharacterPortrait,onDirty:e[22]||(e[22]=E=>n.drafts.image=E),"vn-data":r.logStore.vnData,onBulkUpdate:s.handleBulkUpdateImage,onClose:e[23]||(e[23]=E=>n.dataSubTab="characters")},null,8,["before-change","onEditCharacter","vn-data","onBulkUpdate"]),[[A,n.dataSubTab==="images"]])],512),[[A,n.activeTab==="data"]]),S(p(O,{ref:"exportPanel",onDirty:e[24]||(e[24]=E=>n.drafts.appearance=E),active:n.activeTab==="export","preview-step":s.selectedStep||r.logStore.currentStep,mode:n.activeTab==="appearance"?"appearance":"export",class:"tab-pane"},null,8,["active","preview-step","mode"]),[[A,n.activeTab==="appearance"||n.activeTab==="export"]])])])],10,kh)],8,yh),n.leaveRequest?(d(),k(D,{key:0,message:n.leaveRequest.message,"can-save":n.leaveRequest.canSave,onChoose:s.resolveLeave},null,8,["message","can-save","onChoose"])):T("",!0),n.effectOperation?(d(),u("div",lp,[t("section",dp,[t("h3",cp,g(n.effectOperation.label),1),t("p",up,g(n.effectOperation.phase),1),t("progress",{value:n.effectOperation.current,max:n.effectOperation.total,"aria-label":"대사 처리 진행률"},null,8,hp),t("p",pp,g(n.effectOperation.current)+" / "+g(n.effectOperation.total)+"개 대사 · "+g(Math.round(n.effectOperation.current/n.effectOperation.total*100))+"%",1)],512)])):T("",!0)])}const vp=L(bh,[["render",fp],["__scopeId","data-v-d9104a01"]]);export{vp as default};
