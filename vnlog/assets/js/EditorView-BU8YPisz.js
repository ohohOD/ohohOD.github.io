import pe from"./PlayerView-SjRS-Dld.js";import{_ as C,c as h,a as t,t as f,b as I,w as T,l as V,d as g,m as A,p as U,j as H,n as v,e as R,o as u,u as W,F as O,r as N,v as E,i as M,A as x,f as p,q as L,h as B,s as z,g as j,x as oe,y as se,S as ce,z as fe}from"./index-CWu20z7A.js";import{c as Y,s as F,b as me}from"./sanitize-BOazqeBd.js";import{R as ge,i as Te,c as ie}from"./RoomZipService-5isXJR8P.js";import{f as Q,g as Ie,a as Se,P as Ee,C as be,D as ye}from"./PlayerStage-DH3k0xHe.js";import{S as Oe}from"./SplitExportControls-CdhShiRJ.js";import{p as Re,A as Ne,a as ve,s as K,b as re,f as ae,c as Ae,e as we,g as Ce,h as Le,i as le}from"./AppSelect-Bog3bhBX.js";import{a as He}from"./LogImportService-hHtMLhJb.js";import"./LogParserService-B_keEpHY.js";const $=[{key:"background",label:"배경"},{key:"bgm",label:"배경 음악"},{key:"sfx",label:"효과음"}];function De(o,e=""){const i=[];for(const{key:a,label:n}of $.filter(s=>!e||s.key===e)){let s=null;o.forEach((c,m)=>{const d=c.effects?.[a],r=a==="background"?c.effects?.backgroundOpacity??.3:null;if(!d){s=null;return}s&&s.endStep===m&&s.value===d&&s.opacity===r?s.endStep=m+1:(s={key:a,label:n,startStep:m+1,endStep:m+1,value:d,opacity:r},i.push(s))})}return i.sort((a,n)=>a.startStep-n.startStep||a.key.localeCompare(n.key))}function J(o,e,i){return Number.isInteger(o)&&Number.isInteger(e)&&o>=1&&e>=o&&e<=i}function Ue(o,e){return o?.effects?.[e.key]===e.value&&(e.key!=="background"||(o.effects.backgroundOpacity??.3)===e.opacity)}function ke(o,e){return $.some(i=>i.key===e.key)&&Array.isArray(e.stepIds)&&e.stepIds.length===e.endStep-e.startStep+1&&J(e.startStep,e.endStep,o.length)&&o.slice(e.startStep-1,e.endStep).every((i,a)=>Ue(i,e)&&i.id===e.stepIds[a])}const Fe={components:{PlayerView:pe},props:{step:{type:Object,default:null},characters:{type:Object,default:()=>({})},customCSS:{type:Object,default:()=>({})},title:{type:String,default:"대사 미리보기"},baseTheme:{type:Object,default:()=>({})},label:{type:String,default:"선택한 대사 미리보기"}},data(){return{expanded:window.innerWidth>=768&&window.innerHeight>=700,width:window.innerWidth,height:window.innerHeight,frameWidth:0,frameHeight:0,frameSize:Math.min(400,Math.max(240,window.innerHeight*.33)),scale:1,zoom:"read",resizing:!1}},computed:{minSize(){return 180},maxSize(){return Math.max(280,this.height-(this.width<768?280:560))},project(){return{title:this.title,characters:this.characters,scenes:[{name:"",steps:this.step?[this.step]:[]}]}},theme(){return{...this.baseTheme,bgImageUrl:this.step?.effects?.background||this.baseTheme.bgImageUrl||"",bgImageOpacity:this.step?.effects?.backgroundOpacity??this.baseTheme.bgImageOpacity??.3}}},watch:{expanded(){this.$nextTick(this.fit)},step:{deep:!0,handler(){this.$nextTick(this.focusDialogue)}},customCSS:{deep:!0,handler(){this.$nextTick(this.focusDialogue)}}},methods:{fit(){this.width=window.innerWidth,this.height=window.innerHeight,this.frameSize=Math.max(this.minSize,Math.min(this.maxSize,this.frameSize));const o=this.$refs.frame;!o?.clientWidth||!o?.clientHeight||(this.frameWidth=o.clientWidth,this.frameHeight=o.clientHeight,this.scale=this.zoom==="fit"?Math.min(1,this.frameWidth/this.width,this.frameHeight/this.height):this.zoom==="read"?Math.max(.75,Math.min(1,this.frameWidth/this.width)):Number(this.zoom),this.$nextTick(this.focusDialogue))},focusDialogue(){if(!this.expanded||this.zoom==="fit")return;const o=this.$refs.frame,e=o?.querySelector(".dialog-wrapper");if(!e)return;const i=o.getBoundingClientRect(),a=e.getBoundingClientRect();o.scrollLeft+=a.left+a.width/2-i.left-o.clientWidth/2,o.scrollTop+=a.top+a.height/2-i.top-o.clientHeight/2},setSize(o){this.frameSize=Math.max(this.minSize,Math.min(this.maxSize,o)),this.$nextTick(this.fit)},startResize(o){o.button===0&&(o.preventDefault(),o.currentTarget.focus(),this.resizing=!0,this._dragY=o.clientY,this._dragSize=this.frameSize,window.addEventListener("pointermove",this.moveResize),window.addEventListener("pointerup",this.stopResize),window.addEventListener("pointercancel",this.stopResize))},moveResize(o){this.resizing&&this.setSize(this._dragSize+o.clientY-this._dragY)},stopResize(){this.resizing=!1,window.removeEventListener("pointermove",this.moveResize),window.removeEventListener("pointerup",this.stopResize),window.removeEventListener("pointercancel",this.stopResize)},resizeKey(o){const e={ArrowUp:this.frameSize-40,ArrowDown:this.frameSize+40,Home:this.minSize,End:this.maxSize};o.key in e&&(o.preventDefault(),this.setSize(e[o.key]))}},mounted(){window.addEventListener("resize",this.fit),typeof ResizeObserver<"u"&&(this._observer=new ResizeObserver(()=>this.fit()),this._observer.observe(this.$refs.frame)),this.$nextTick(this.fit)},beforeUnmount(){this.stopResize(),window.removeEventListener("resize",this.fit),this._observer?.disconnect()}},Pe={class:"preview-toolbar"},xe=["aria-expanded"],Ve={key:0},Me={key:0,class:"empty-preview"},We=["aria-valuenow","aria-valuemin","aria-valuemax"],Be={key:1,class:"preview-note"};function Ye(o,e,i,a,n,s){const c=R("PlayerView");return u(),h("section",{class:v(["step-live-preview",{expanded:n.expanded}])},[t("div",Pe,[t("strong",null,f(i.label),1),t("span",null,f(i.step?.character?.name||"대사 선택 전")+" · "+f(Math.round(n.scale*100))+"%",1),t("button",{"aria-expanded":n.expanded,onClick:e[0]||(e[0]=m=>n.expanded=!n.expanded)},f(n.expanded?"접기":"펼치기"),9,xe),n.expanded?(u(),h("label",Ve,[e[6]||(e[6]=I("보기",-1)),T(t("select",{"onUpdate:modelValue":e[1]||(e[1]=m=>n.zoom=m),"aria-label":"미리보기 보기 방식",onChange:e[2]||(e[2]=(...m)=>s.fit&&s.fit(...m))},[...e[5]||(e[5]=[t("option",{value:"read"},"대사 중심",-1),t("option",{value:"fit"},"전체 장면",-1),t("option",{value:"0.75"},"75%",-1),t("option",{value:"1"},"100%",-1)])],544),[[V,n.zoom]])])):g("",!0)]),T(t("div",{ref:"frame",class:"preview-frame",style:U({height:n.frameSize+"px"})},[i.step?(u(),h("div",{key:1,style:U({width:Math.max(n.frameWidth,n.width*n.scale)+"px",height:Math.max(n.frameHeight,n.height*n.scale)+"px"}),class:"preview-plane"},[t("div",{class:"preview-canvas",style:U({width:n.width+"px",height:n.height+"px",transform:`translate(-50%, -50%) scale(${n.scale})`})},[(u(),H(c,{ref:"player",key:i.step.id+":"+i.step.type,"vn-data":s.project,"custom-c-s-s":i.customCSS,"base-theme":s.theme,"passive-preview":""},null,8,["vn-data","custom-c-s-s","base-theme"]))],4)],4)):(u(),h("p",Me,"대사 목록에서 미리 볼 대사를 선택하세요."))],4),[[A,n.expanded]]),n.expanded?(u(),h("div",{key:0,class:"preview-resize",role:"separator","aria-label":"미리보기 높이 조절","aria-orientation":"horizontal","aria-valuenow":Math.round(n.frameSize),"aria-valuemin":s.minSize,"aria-valuemax":s.maxSize,tabindex:"0",onPointerdown:e[3]||(e[3]=(...m)=>s.startResize&&s.startResize(...m)),onKeydown:e[4]||(e[4]=(...m)=>s.resizeKey&&s.resizeKey(...m))},[...e[7]||(e[7]=[t("span",{"aria-hidden":"true"},"미리보기 높이 조절",-1)])],40,We)):g("",!0),n.expanded?(u(),h("p",Be,f(n.zoom==="read"?"대사가 보이는 위치로 맞췄어요. 화면을 스크롤해 주변을 볼 수 있어요.":"원본 화면의 비율을 유지해요.")+" 음악과 효과음은 재생 화면에서 확인하세요.",1)):g("",!0)],2)}const ue=C(Fe,[["render",Ye],["__scopeId","data-v-30383789"]]);function G(o){const e=new Map,i=a=>{a?.name&&!e.has(a.name)&&e.set(a.name,{name:a.name,color:Y(a.color),avatarUrl:a.avatarUrl||""})};for(const a of o?.assetLibrary?.characters||[])i(a);for(const a of o?.scenes||[])for(const n of a.steps||[])i(n.character);return[...e.values()]}function _(o){const e=new Map,i=(a,n)=>{typeof a=="string"&&a&&!e.has(a)&&e.set(a,{url:a,name:n||`이미지 ${e.size+1}`})};for(const a of o?.assetLibrary?.images||[])i(a.url,a.name);for(const a of G(o))i(a.avatarUrl,`${a.name} · 표정`);for(const a of o?.scenes||[])for(const n of a.steps||[]){i(n.character?.avatarUrl,`${n.character?.name||"인물"} · 표정`),i(n.effects?.background,"대사에 사용한 배경");for(const s of n.illustrations||[])i(s.url,s.alt||"일러스트")}for(const a of o?.handouts||[])i(a.imageUrl,a.title||"핸드아웃");return[...e.values()]}function q(o,e,i){if(o.assetLibrary||={characters:[],images:[]},o.assetLibrary.characters||=[],o.assetLibrary.images||=[],e==="character"){if(G(o).some(a=>a.name===i.name))return!1;o.assetLibrary.characters.push({name:i.name,color:i.color,avatarUrl:i.avatarUrl||""})}else{if(_(o).some(a=>a.url===i.url))return!1;o.assetLibrary.images.push({name:i.name,url:i.url})}return!0}function Ge(o,e,i=""){o.assetLibrary||={characters:[],images:[]},o.assetLibrary.characters||=[],o.characters||={};for(const a of e.characters||[]){const n=Object.values(o.characters).find(m=>m.name===a.name),s=n||{name:a.name,color:a.color||"",avatarUrl:a.avatarUrl||""};n||Object.defineProperty(o.characters,a.name,{value:s,enumerable:!0,configurable:!0,writable:!0}),s.avatarUrl||(s.avatarUrl=a.avatarUrl||""),s.emotions={...s.emotions||{}};for(const[m,d]of(a.faces||[]).entries()){const r=d.label||`표정 ${m+1}`;Object.hasOwn(s.emotions,r)||Object.defineProperty(s.emotions,r,{value:d.url,enumerable:!0,configurable:!0,writable:!0}),q(o,"image",{name:`${a.name} · ${r}`,url:d.url})}const c=o.assetLibrary.characters.find(m=>m.name===a.name);c?c.avatarUrl||(c.avatarUrl=s.avatarUrl):o.assetLibrary.characters.push({...s})}for(const a of e.scenes||[]){const n=a.images?.length?a.images:[{url:a.representativeUrl||a.backgroundUrl}];for(const s of n)s.url&&q(o,"image",{name:`${a.name||"룸"} · 배경`,url:s.url})}o.assetLibrary.roomScenes=e.scenes||[],o.assetLibrary.roomSource={filename:i,characterCount:e.characters?.length||0,sceneCount:e.scenes?.length||0,skippedCount:e.stats?.skipped?.length||0}}const _e={props:{source:Object,busy:Boolean},emits:["import"],data(){return{reading:!1,error:""}},methods:{async importFile(o){const e=o.target.files?.[0];if(!(!e||this.reading||this.busy)){this.reading=!0,this.error="";try{const i=await ge.parse(e);this.$emit("import",{assets:i,filename:e.name})}catch{this.error="룸 데이터를 읽지 못했어요. 코코포리아의 ‘룸 데이터 내보내기’로 받은 ZIP을 다시 선택해 주세요."}finally{this.reading=!1,o.target.value=""}}}}},ze={class:"room-assets","aria-labelledby":"room-assets-title"},je={class:"room-file"},Je=["disabled"],Ke={key:0,role:"status"},qe={key:1,class:"room-error",role:"alert"},Xe={key:2,class:"room-summary",role:"status"},Ze={key:0};function Qe(o,e,i,a,n,s){return u(),h("section",ze,[e[4]||(e[4]=t("h3",{id:"room-assets-title"},"룸 데이터 추가",-1)),e[5]||(e[5]=t("p",null,"코코포리아의 ‘룸 데이터 내보내기’로 받은 ZIP을 선택하세요. 캐릭터·표정·배경을 이 로그의 자료에 추가해요.",-1)),e[6]||(e[6]=t("p",null,"이미 있는 캐릭터의 이름·색상·이미지는 유지하고, 같은 이름에 새 표정을 연결해요.",-1)),t("label",je,[e[1]||(e[1]=I("룸 데이터 ZIP",-1)),t("input",{ref:"file",type:"file",accept:".zip",disabled:n.reading||i.busy,onChange:e[0]||(e[0]=(...c)=>s.importFile&&s.importFile(...c))},null,40,Je)]),n.reading?(u(),h("p",Ke,"룸 데이터를 읽고 있어요…")):g("",!0),n.error?(u(),h("p",qe,f(n.error),1)):g("",!0),i.source?(u(),h("div",Xe,[e[2]||(e[2]=t("h4",null,"추가한 룸 데이터",-1)),t("p",null,f(i.source.filename),1),t("p",null,"캐릭터 "+f(i.source.characterCount)+"명 · 장면 "+f(i.source.sceneCount)+"개",1),i.source.skippedCount?(u(),h("p",Ze,"이미지 "+f(i.source.skippedCount)+"개를 가져오지 못했어요. 이미지 탭에서 다시 추가할 수 있어요.",1)):g("",!0),e[3]||(e[3]=t("p",null,"캐릭터·이미지 탭에서 확인하고 대사·연출에서 선택하세요.",-1))])):g("",!0)])}const $e=C(_e,[["render",Qe],["__scopeId","data-v-719675a1"]]),et={props:{modelValue:{type:String,default:""},label:{type:String,default:"캐릭터 색상"}},emits:["update:modelValue"],data(){return{lastColor:"#a9bdf2",error:""}},computed:{resolvedColor(){return Y(this.modelValue)},swatch(){if(/^#[\da-f]{6}$/i.test(this.resolvedColor))return this.resolvedColor;if(/^#[\da-f]{3}$/i.test(this.resolvedColor))return"#"+[...this.resolvedColor.slice(1)].map(o=>o+o).join("");if(this.resolvedColor){const o=document.createElement("span");o.style.cssText="position:fixed;visibility:hidden;pointer-events:none",o.style.color=this.resolvedColor,document.body.append(o);const e=getComputedStyle(o).color.match(/^rgba?\(\s*(\d+)[, ]+\s*(\d+)[, ]+\s*(\d+)/i);if(o.remove(),e)return"#"+e.slice(1).map(i=>Number(i).toString(16).padStart(2,"0")).join("")}return"#a9bdf2"}},methods:{setAutomatic(o){this.error="",o&&this.resolvedColor&&(this.lastColor=this.resolvedColor),this.$emit("update:modelValue",o?"":this.lastColor)},setColor(o){const e=Y(o);if(e&&!CSS.supports("color",e)){this.error="사용할 수 있는 색상값을 입력하거나 색 없음으로 바꿔 주세요.";return}this.error="",this.$emit("update:modelValue",e)}}},tt={class:"character-color-input"},nt={class:"color-mode"},ot=["checked"],st={key:0,class:"color-fields"},it=["value","aria-label"],rt=["value","aria-label"],at={key:1,role:"alert"};function lt(o,e,i,a,n,s){return u(),h("div",tt,[t("label",nt,[t("input",{type:"checkbox",checked:!s.resolvedColor,onChange:e[0]||(e[0]=c=>s.setAutomatic(c.target.checked))},null,40,ot),e[3]||(e[3]=I("색 없음 · 테마에 맞춤",-1))]),s.resolvedColor?(u(),h("div",st,[t("input",{type:"color",value:s.swatch,"aria-label":i.label+" 고르기",onInput:e[1]||(e[1]=c=>o.$emit("update:modelValue",c.target.value))},null,40,it),t("input",{type:"text",value:s.resolvedColor,"aria-label":i.label+" 값",placeholder:"#a9bdf2",onChange:e[2]||(e[2]=c=>s.setColor(c.target.value))},null,40,rt)])):g("",!0),n.error?(u(),h("p",at,f(n.error),1)):g("",!0)])}const ee=C(et,[["render",lt],["__scopeId","data-v-c66fa9bc"]]),dt={props:{label:{type:String,default:"보관한 이미지"}},emits:["select"],setup(){return{store:W()}},computed:{images(){return _(this.store.vnData)}},methods:{choose(o){const e=this.images[Number(o.target.value)];o.target.value!==""&&e&&this.$emit("select",e.url),o.target.value=""}}},ct={class:"library-image-select"},ut=["aria-label"],ht=["value"];function pt(o,e,i,a,n,s){return u(),h("label",ct,[I(f(i.label),1),t("select",{"aria-label":i.label,value:"",onChange:e[0]||(e[0]=(...c)=>s.choose&&s.choose(...c))},[e[1]||(e[1]=t("option",{value:""},"등록·사용한 이미지에서 선택",-1)),(u(!0),h(O,null,N(s.images,(c,m)=>(u(),h("option",{key:c.url,value:m},f(c.name),9,ht))),128))],40,ut)])}const te=C(dt,[["render",pt],["__scopeId","data-v-c477623a"]]),ft={components:{LibraryImageSelect:te,CharacterColorInput:ee},props:{kind:{type:String,required:!0}},emits:["register"],setup(){return{store:W()}},data(){return{name:"",color:"",url:"",busy:!1,error:"",imageReady:!1,imageFailed:!1}},watch:{url(o){this.imageReady=!1,this.imageFailed=!1,this.error=o&&!F(o)?"올바른 이미지 주소나 파일을 선택해 주세요.":""}},methods:{safeSrc:F,async readFile(o){const e=o.target.files[0];if(e){if(this.error="",!e.type.startsWith("image/")||e.size>10*1024*1024){this.error="10MB 이하 이미지 파일을 선택해 주세요.",o.target.value="";return}this.busy=!0;try{this.url=await new Promise((i,a)=>{const n=new FileReader;n.onload=()=>i(n.result),n.onerror=a,n.readAsDataURL(e)}),!this.name&&this.kind==="image"&&(this.name=e.name.replace(/\.[^.]+$/,""))}catch{this.error="이미지 파일을 읽지 못했어요."}finally{this.busy=!1,o.target.value=""}}},submit(){if(this.busy||this.url&&!this.imageReady)return;this.error="";const o=F(this.url.trim());if(!this.name.trim()||this.url&&!o||this.kind==="image"&&!o){this.error="이름과 올바른 이미지 주소 또는 파일을 확인해 주세요.";return}if(this.kind==="character"?G(this.store.vnData).some(e=>e.name===this.name.trim()):_(this.store.vnData).some(e=>e.url===o)){this.error="이미 있는 항목이에요. 아래 목록에서 선택해 수정하세요.";return}this.$emit("register",{kind:this.kind,asset:{name:this.name.trim(),color:this.color,url:o,avatarUrl:o}}),this.name="",this.url=""}}},mt={class:"asset-registration"},gt=["aria-label"],Tt=["value","readonly"],It=["src"],St={key:4,role:"alert"},Et=["disabled"];function bt(o,e,i,a,n,s){const c=R("CharacterColorInput"),m=R("LibraryImageSelect");return u(),h("details",mt,[t("summary",null,f(i.kind==="character"?"캐릭터 등록":"이미지 등록"),1),t("form",{onSubmit:e[8]||(e[8]=M((...d)=>s.submit&&s.submit(...d),["prevent"]))},[e[10]||(e[10]=t("p",null,"아직 대사에 쓰지 않은 항목도 보관할 수 있어요. 대사·연출에서 골라 사용하세요.",-1)),t("label",null,[I(f(i.kind==="character"?"캐릭터 이름":"이미지 이름"),1),T(t("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>n.name=d),"aria-label":i.kind==="character"?"등록할 캐릭터 이름":"등록할 이미지 이름",required:"",maxlength:"120"},null,8,gt),[[E,n.name,void 0,{trim:!0}]])]),i.kind==="character"?(u(),H(c,{key:0,modelValue:n.color,"onUpdate:modelValue":e[1]||(e[1]=d=>n.color=d),label:"등록할 캐릭터 색상"},null,8,["modelValue"])):g("",!0),i.kind==="character"?(u(),H(m,{key:1,label:"캐릭터 이미지 선택",onSelect:e[2]||(e[2]=d=>n.url=d)})):g("",!0),t("label",null,[I(f(i.kind==="character"?"캐릭터 이미지 주소 (선택)":"이미지 주소"),1),t("input",{value:n.url.startsWith("data:")?"선택한 이미지 파일":n.url,readonly:n.url.startsWith("data:"),onInput:e[3]||(e[3]=d=>n.url=d.target.value),"aria-label":"등록할 이미지 주소",placeholder:"https://…"},null,40,Tt)]),t("label",null,[e[9]||(e[9]=I("이미지 파일",-1)),t("input",{type:"file",accept:"image/*","aria-label":"등록할 이미지 파일",onChange:e[4]||(e[4]=(...d)=>s.readFile&&s.readFile(...d))},null,32)]),s.safeSrc(n.url)&&!n.imageFailed?(u(),h("img",{key:n.url,src:s.safeSrc(n.url),alt:"등록할 이미지 미리보기",onLoad:e[5]||(e[5]=d=>n.imageReady=!0),onError:e[6]||(e[6]=d=>{n.imageFailed=!0,n.error="이미지를 열지 못했어요. 주소를 확인하거나 다른 이미지 파일을 선택해 주세요."})},null,40,It)):g("",!0),n.url?(u(),h("button",{key:3,type:"button",onClick:e[7]||(e[7]=d=>n.url="")},"이미지 비우기")):g("",!0),n.error?(u(),h("p",St,f(n.error),1)):g("",!0),t("button",{type:"submit",disabled:n.busy||n.url&&!n.imageReady||a.store.editInProgress},f(n.busy?"파일 읽는 중…":n.url&&!n.imageReady&&!n.imageFailed?"이미지 확인 중…":"등록하기"),9,Et)],32)])}const yt=C(ft,[["render",bt],["__scopeId","data-v-c68ad0fa"]]),Ot={components:{AppIcon:x,LibraryImageSelect:te},name:"StepEffectsEditor",mixins:[Q],props:{totalSteps:{type:Number,required:!0},selectedStep:{type:Number,default:null},currentEffects:{type:Object,default:null},currentIllustrations:{type:Array,default:()=>[]}},data(){return{logStore:W(),effectKinds:$,rangeMode:"new",activeEffect:"background",effectOptions:[{key:"background",label:"배경",icon:"photo"},{key:"bgm",label:"음악",icon:"music"},{key:"sfx",label:"효과음",icon:"volume"},{key:"illustration",label:"일러스트",icon:"document"}],rangeSearch:"",rangeKind:"",visibleRangeCount:50,editingRange:null,trimOriginalRange:!0,startStep:1,endStep:1,effects:{sfx:"",bgm:"",background:"",backgroundOpacity:.3},isLoadingFile:!1,showRemoveConfirm:!1,includeIllustrations:!1,selectedPaletteIndex:null,expandedSceneIndex:null}},computed:{activeEffectLabel(){return this.effectOptions.find(o=>o.key===this.activeEffect)?.label||"효과"},allSteps(){return(this.logStore.vnData?.scenes||[]).flatMap(o=>o.steps||[])},sceneRanges(){let o=0;return(this.logStore.vnData?.scenes||[]).map((e,i)=>{const a=o+1;return o+=(e.steps||[]).length,{start:a,end:o,label:e.name||e.title||`장면 ${i+1}`}}).filter(e=>e.end>=e.start)},selectedScene(){return this.sceneRanges.find(o=>this.selectedStep>=o.start&&this.selectedStep<=o.end)},foundSteps(){const o=this.rangeSearch.trim().toLocaleLowerCase();return this.allSteps.map((e,i)=>({step:e,number:i+1})).filter(e=>!o||`${e.step.character?.name||""} ${e.step.text||""}`.toLocaleLowerCase().includes(o)).slice(0,30)},savedRanges(){return De(this.allSteps,this.rangeKind)},canApply(){return J(this.startStep,this.endStep,this.totalSteps)},hasAnyEffect(){return this.effects.sfx||this.effects.bgm||this.effects.background},canApplyAll(){return this.canApply&&(this.activeEffect==="illustration"?this.includeIllustrations&&this.selectedStep!==null:!!this.effects[this.activeEffect])},currentIllustrationsCount(){return Array.isArray(this.currentIllustrations)?this.currentIllustrations.length:0},scenePaletteItems(){const o=this.logStore.vnData.assetLibrary?.roomScenes||this.logStore.roomAssets?.scenes;return Array.isArray(o)?o.filter(e=>e.representativeUrl||e.backgroundUrl):[]},expandedScene(){return this.expandedSceneIndex===null?null:this.scenePaletteItems[this.expandedSceneIndex]||null},removeRangeLabel(){return this.startStep===this.endStep?`스텝 ${this.startStep}`:`스텝 ${this.startStep}~${this.endStep}`}},methods:{emitPreview(){this.$emit("preview",{effects:{...this.effects},kind:this.activeEffect,startStep:this.startStep,endStep:this.endStep})},changeRangeMode(o){this.rangeMode!==o&&(this.rangeMode=o,this.resetForm(),this.loadStepEffects())},setRange(o,e){this.startStep=o,this.endStep=e},chooseScene(o){const e=this.sceneRanges[Number(o.target.value)];o.target.value!==""&&e&&this.setRange(e.start,e.end),o.target.value=""},stepLabel(o){const e=this.allSteps[o-1];return e?`${o}. ${e.character?.name||"시스템"} · ${(e.text||"").slice(0,70)}`:""},editRange(o){this.resetForm(),this.editingRange={...o,stepIds:this.allSteps.slice(o.startStep-1,o.endStep).map(e=>e.id)},this.rangeMode="existing",this.activeEffect=o.key,this.trimOriginalRange=!0,this.setRange(o.startStep,o.endStep),this.effects[o.key]=o.value,o.key==="background"&&(this.effects.backgroundOpacity=o.opacity),this.$nextTick(()=>{this.$el.querySelector(".editor-body").scrollTop=0,this.$el.querySelector("#see-start-step").focus({preventScroll:!0})})},cancelRangeEdit(){this.resetForm(),this.loadStepEffects()},formatPreviewUrl(o){return o?o.startsWith("data:")?`[로컬 ${o.split(";")[0].split(":")[1].split("/")[0]==="audio"?"오디오":"이미지"} 파일]`:o:""},async handleSfxFileSelect(o){const e=o.target.files[0];if(e){if(e.size>5*1024*1024){this.$toast("효과음 파일은 5MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const i=await this.fileToBase64(e);this.effects.sfx=i,e.name,e.size,i.length}catch(i){console.error("[StepEffectsEditor] 파일 로드 실패:",i),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}}},fileToBase64(o){return new Promise((e,i)=>{const a=new FileReader;a.onload=()=>e(a.result),a.onerror=i,a.readAsDataURL(o)})},clearSfx(){this.effects.sfx=""},async handleBgmFileSelect(o){const e=o.target.files[0];if(e){if(e.size>10*1024*1024){this.$toast("BGM 파일은 10MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const i=await this.fileToBase64(e);this.effects.bgm=i,e.name,e.size,i.length}catch(i){console.error("[StepEffectsEditor] 파일 로드 실패:",i),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}}},clearBgm(){this.effects.bgm=""},async handleBgFileSelect(o){const e=o.target.files[0];if(e){if(e.size>2*1024*1024){this.$toast("이미지 파일은 2MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const i=await this.fileToBase64(e);this.effects.background=i,e.name,e.size,i.length}catch(i){console.error("[StepEffectsEditor] 파일 로드 실패:",i),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}}},clearBackground(){this.effects.background=""},safeSrc(o){return F(o)},sceneThumbUrl(o){return o.representativeUrl||o.backgroundUrl},sceneImages(o){return Array.isArray(o.images)&&o.images.length>0?o.images:o.backgroundUrl?[{url:o.backgroundUrl,source:"background"}]:[]},sourceLabel(o){return{background:"배경",foreground:"전경",marker:"오브젝트"}[o]||"이미지"},applySceneBackground(o,e){this.effects.background=this.sceneThumbUrl(o),this.selectedPaletteIndex=e},toggleSceneImages(o){this.expandedSceneIndex=this.expandedSceneIndex===o?null:o},applySceneImage(o){this.effects.background=o,this.selectedPaletteIndex=this.expandedSceneIndex},isSceneSelected(o,e){return this.selectedPaletteIndex===e&&this.sceneImages(o).some(i=>i.url===this.effects.background)},isSceneImageSelected(o){return this.expandedSceneIndex!==null&&this.expandedSceneIndex===this.selectedPaletteIndex&&this.effects.background===o.url},convertToDirectURL(o){if(!o||!o.trim())return o;const e=o.trim();if(e.startsWith("data:"))return e;const i=e.match(/drive\.google\.com\/file\/d\/([^\/\?]+)/);return i?`https://docs.google.com/uc?export=download&id=${i[1]}`:e.includes("dropbox.com")?e.replace(/[?&]dl=0/,"?dl=1"):e.includes("1drv.ms")||e.includes("onedrive.live.com")?e.replace("/embed?","/download?"):e},applyAll(){if(!this.canApplyAll)return;let o=null;if(this.activeEffect==="illustration"&&this.includeIllustrations&&(o=JSON.parse(JSON.stringify(this.currentIllustrations||[])),o.length===0&&!confirm(`현재 스텝의 일러스트가 비어 있어요.
지정한 범위의 일러스트를 모두 제거할까요?`)))return;const e={};this.activeEffect==="sfx"&&this.effects.sfx&&(e.sfx=this.convertToDirectURL(this.effects.sfx)),this.activeEffect==="bgm"&&this.effects.bgm&&(e.bgm=this.convertToDirectURL(this.effects.bgm)),this.activeEffect==="background"&&this.effects.background&&(e.background=this.convertToDirectURL(this.effects.background),e.backgroundOpacity=this.effects.backgroundOpacity),this.$emit("apply",{startStep:this.startStep,endStep:this.endStep,effects:e,illustrations:o,replaceRange:this.editingRange&&this.trimOriginalRange?{...this.editingRange}:null}),this.resetForm()},removeEffects(){this.canApply&&(this.showRemoveConfirm=!0,this.activateFocusTrap("removeConfirmModal"))},confirmRemoveEffects(){this.showRemoveConfirm=!1,this.deactivateFocusTrap(),this.$emit("remove",{startStep:this.startStep,endStep:this.endStep,kind:this.activeEffect}),this.resetForm()},cancelRemoveEffects(){this.showRemoveConfirm=!1,this.deactivateFocusTrap()},resetForm(){this.editingRange=null,this.effects={sfx:"",bgm:"",background:"",backgroundOpacity:.3},this.includeIllustrations=!1,this.selectedPaletteIndex=null,this.expandedSceneIndex=null},loadStepEffects(o=!0){o&&this.selectedStep!==null&&(this.startStep=this.selectedStep,this.endStep=this.selectedStep),this.currentEffects&&(this.effects={sfx:this.currentEffects.sfx||"",bgm:this.currentEffects.bgm||"",background:this.currentEffects.background||"",backgroundOpacity:this.currentEffects.backgroundOpacity??.3})}},watch:{effects:{deep:!0,handler(){this.emitPreview()}},activeEffect(){this.emitPreview()},startStep(){this.emitPreview()},endStep(){this.emitPreview()},selectedStep:{immediate:!0,handler(){this.resetForm(),this.loadStepEffects()}},currentEffects:{immediate:!0,handler(){this.editingRange||this.loadStepEffects(!1)}},"effects.background"(o){if(this.selectedPaletteIndex===null)return;const e=this.scenePaletteItems[this.selectedPaletteIndex];(!e||!this.sceneImages(e).some(i=>i.url===o))&&(this.selectedPaletteIndex=null)}}},Rt={class:"step-effects-editor"},Nt={class:"editor-header"},vt={class:"effect-task-nav","aria-label":"효과 작업 선택"},At=["aria-pressed"],wt=["aria-pressed"],Ct={class:"editor-body"},Lt={key:0,class:"saved-ranges"},Ht=["value"],Dt={key:0},Ut={class:"saved-range-list"},kt=["onClick"],Ft={class:"range-workflow"},Pt={key:0,class:"editing-context"},xt={class:"section"},Vt={class:"range-shortcuts"},Mt=["disabled"],Wt=["disabled"],Bt={class:"scene-range-label"},Yt=["value"],Gt={class:"step-range"},_t={class:"input-group"},zt=["max"],jt={class:"input-group"},Jt=["min","max"],Kt={key:0,class:"range-summary",role:"status"},qt={key:1,class:"range-error",role:"alert"},Xt={key:2,class:"range-boundaries"},Zt={class:"range-picker"},Qt=["onClick"],$t=["onClick"],en={key:0},tn={key:3,class:"range-edit-status"},nn={class:"hint-text"},on={class:"effect-settings"},sn={class:"effect-settings-heading"},rn={class:"workflow-heading"},an={key:0,class:"effect-kind-nav","aria-label":"설정할 효과"},ln=["aria-pressed","onClick"],dn={class:"hint-text"},cn={class:"section effect-fields"},un={class:"file-input-group"},hn=["value","readonly"],pn={class:"hint-text"},fn={class:"section effect-fields"},mn={class:"file-input-group"},gn=["value","readonly"],Tn={class:"hint-text"},In={class:"section effect-fields"},Sn={class:"file-input-group"},En=["value","readonly"],bn={class:"hint-text"},yn={key:0,class:"scene-palette-block"},On={class:"scene-palette",role:"group","aria-labelledby":"scene-palette-title"},Rn=["aria-label","aria-pressed","onClick"],Nn=["src"],vn={class:"scene-thumb-name"},An=["aria-label","aria-expanded","onClick"],wn=["aria-label"],Cn=["aria-label","aria-pressed","onClick"],Ln=["src"],Hn={class:"scene-image-option-label"},Dn={key:1,class:"scene-palette-block"},Un={key:2,class:"opacity-control"},kn={for:"see-bg-opacity"},Fn={class:"section effect-fields"},Pn={class:"illustration-toggle"},xn=["disabled"],Vn={key:0,class:"section preview-section"},Mn={class:"preview-list"},Wn={key:0,class:"preview-item"},Bn={key:1,class:"preview-item"},Yn={key:2,class:"preview-item"},Gn={key:3,class:"preview-item"},_n={class:"actions"},zn=["disabled"],jn=["disabled"],Jn={class:"modal-container remove-confirm-container",ref:"removeConfirmModal",tabindex:"-1",role:"dialog","aria-modal":"true","aria-labelledby":"effects-remove-title"},Kn={class:"modal-header"},qn={id:"effects-remove-title"},Xn={class:"remove-confirm-message"},Zn={class:"remove-confirm-buttons"};function Qn(o,e,i,a,n,s){const c=R("AppIcon"),m=R("LibraryImageSelect");return u(),h("div",Rt,[t("div",Nt,[t("h3",null,[p(c,{name:"sparkles",size:20}),e[34]||(e[34]=I(" 배경과 소리 ",-1))])]),t("nav",vt,[t("button",{"aria-pressed":n.rangeMode==="new",onClick:e[0]||(e[0]=d=>s.changeRangeMode("new"))},"새로 적용",8,At),t("button",{"aria-pressed":n.rangeMode==="existing",onClick:e[1]||(e[1]=d=>s.changeRangeMode("existing"))},[e[35]||(e[35]=I("적용된 효과 수정 ",-1)),t("span",null,f(s.savedRanges.length),1)],8,wt)]),t("div",Ct,[n.rangeMode==="existing"&&!n.editingRange?(u(),h("section",Lt,[t("h4",null,[e[36]||(e[36]=I("수정할 효과를 선택하세요 ",-1)),t("span",null,f(s.savedRanges.length),1)]),e[38]||(e[38]=t("p",{class:"hint-text"},"같은 효과가 연속된 대사를 묶어서 보여줘요. 범위를 누르면 해당 효과만 불러와 수정해요. 따로 적용했어도 값이 같고 이어져 있으면 하나로 표시돼요.",-1)),T(t("select",{"onUpdate:modelValue":e[2]||(e[2]=d=>n.rangeKind=d),"aria-label":"효과 범위 종류"},[e[37]||(e[37]=t("option",{value:""},"모든 효과",-1)),(u(!0),h(O,null,N(n.effectKinds,d=>(u(),h("option",{key:d.key,value:d.key},f(d.label),9,Ht))),128))],512),[[V,n.rangeKind]]),s.savedRanges.length?g("",!0):(u(),h("p",Dt,"아직 적용된 효과가 없어요.")),t("div",Ut,[(u(!0),h(O,null,N(s.savedRanges.slice(0,n.visibleRangeCount),d=>(u(),h("button",{key:d.key+":"+d.startStep,onClick:r=>s.editRange(d)},[t("strong",null,f(d.label)+" · "+f(d.startStep)+"~"+f(d.endStep)+"번",1),t("span",null,f(s.stepLabel(d.startStep)),1)],8,kt))),128))]),s.savedRanges.length>n.visibleRangeCount?(u(),h("button",{key:1,onClick:e[3]||(e[3]=d=>n.visibleRangeCount+=50)},"범위 더 보기")):g("",!0)])):g("",!0),T(t("div",Ft,[n.editingRange?(u(),h("div",Pt,[t("span",null,f(n.editingRange.label)+" · 원래 "+f(n.editingRange.startStep)+"~"+f(n.editingRange.endStep)+"번",1),t("button",{onClick:e[4]||(e[4]=(...d)=>s.cancelRangeEdit&&s.cancelRangeEdit(...d))},"다른 범위 선택")])):g("",!0),t("div",xt,[e[47]||(e[47]=t("h4",{class:"workflow-heading"},[t("span",null,"1"),I(" 적용 범위")],-1)),t("div",Vt,[t("button",{disabled:!i.selectedStep,onClick:e[5]||(e[5]=d=>s.setRange(i.selectedStep,i.selectedStep))},"선택한 대사만",8,Mt),t("button",{disabled:!s.selectedScene,onClick:e[6]||(e[6]=d=>s.setRange(s.selectedScene.start,s.selectedScene.end))},"현재 장면",8,Wt),t("button",{onClick:e[7]||(e[7]=d=>s.setRange(1,i.totalSteps))},"전체 대사")]),t("label",Bt,[e[40]||(e[40]=I("장면으로 범위 잡기 ",-1)),t("select",{"aria-label":"범위로 사용할 장면",onChange:e[8]||(e[8]=d=>s.chooseScene(d))},[e[39]||(e[39]=t("option",{value:""},"장면 선택",-1)),(u(!0),h(O,null,N(s.sceneRanges,(d,r)=>(u(),h("option",{key:r,value:r},f(d.label)+" · "+f(d.start)+"~"+f(d.end)+"번",9,Yt))),128))],32)]),t("div",Gt,[t("div",_t,[e[41]||(e[41]=t("label",{for:"see-start-step"},"시작 스텝",-1)),T(t("input",{id:"see-start-step","onUpdate:modelValue":e[9]||(e[9]=d=>n.startStep=d),type:"number",min:1,max:i.totalSteps,placeholder:"1"},null,8,zt),[[E,n.startStep,void 0,{number:!0}]])]),t("div",jt,[e[42]||(e[42]=t("label",{for:"see-end-step"},"종료 스텝",-1)),T(t("input",{id:"see-end-step","onUpdate:modelValue":e[10]||(e[10]=d=>n.endStep=d),type:"number",min:n.startStep,max:i.totalSteps,placeholder:"1"},null,8,Jt),[[E,n.endStep,void 0,{number:!0}]])])]),s.canApply?(u(),h("p",Kt,f(n.startStep)+"~"+f(n.endStep)+"번 · "+f(n.endStep-n.startStep+1)+"개 대사",1)):(u(),h("p",qt,"1~"+f(i.totalSteps)+" 사이의 정수로, 시작보다 같거나 뒤인 종료 번호를 입력해 주세요.",1)),s.canApply?(u(),h("div",Xt,[t("p",null,[e[43]||(e[43]=t("strong",null,"시작",-1)),I(" "+f(s.stepLabel(n.startStep)),1)]),t("p",null,[e[44]||(e[44]=t("strong",null,"끝",-1)),I(" "+f(s.stepLabel(n.endStep)),1)])])):g("",!0),t("details",Zt,[e[45]||(e[45]=t("summary",null,"대사를 찾아 시작·끝 정하기",-1)),T(t("input",{"onUpdate:modelValue":e[11]||(e[11]=d=>n.rangeSearch=d),type:"search","aria-label":"범위 대사 검색",placeholder:"인물이나 대사 찾기"},null,512),[[E,n.rangeSearch]]),e[46]||(e[46]=t("p",{class:"hint-text"},"검색 결과 중 앞 30개를 표시해요.",-1)),(u(!0),h(O,null,N(s.foundSteps,d=>(u(),h("div",{key:d.number,class:"range-pick-row"},[t("span",null,f(s.stepLabel(d.number)),1),t("button",{onClick:r=>s.setRange(d.number,Math.max(d.number,n.endStep||d.number))},"시작",8,Qt),t("button",{onClick:r=>s.setRange(Math.min(n.startStep||d.number,d.number),d.number)},"끝",8,$t)]))),128)),s.foundSteps.length?g("",!0):(u(),h("p",en,"찾은 대사가 없어요."))]),n.editingRange?(u(),h("div",tn,[t("p",null,[t("strong",null,f(n.editingRange.label)+" "+f(n.editingRange.startStep)+"~"+f(n.editingRange.endStep)+"번 수정 중",1)]),t("label",null,[T(t("input",{"onUpdate:modelValue":e[12]||(e[12]=d=>n.trimOriginalRange=d),type:"checkbox"},null,512),[[L,n.trimOriginalRange]]),I(" 범위에서 빠진 대사의 기존 "+f(n.editingRange.label)+" 지우기",1)]),t("p",nn,"새 범위의 "+f(n.editingRange.label)+"은 덮어써요. 다른 종류의 효과는 유지해요.",1)])):g("",!0)]),t("div",on,[t("div",sn,[t("h4",rn,[e[48]||(e[48]=t("span",null,"2",-1)),I(" "+f(n.editingRange?n.editingRange.label+" 설정":"효과 설정"),1)]),n.editingRange?g("",!0):(u(),h("div",an,[(u(!0),h(O,null,N(n.effectOptions,d=>(u(),h("button",{key:d.key,"aria-pressed":n.activeEffect===d.key,onClick:r=>n.activeEffect=d.key},[p(c,{name:d.icon,size:17},null,8,["name"]),I(f(d.label),1)],8,ln))),128))])),t("p",dn,f(s.activeEffectLabel)+"만 적용해요. 나머지 효과는 그대로 남아요.",1)]),T(t("section",cn,[t("h4",null,[p(c,{name:"volume",size:16}),e[49]||(e[49]=I(" 효과음 (SFX) ",-1))]),t("div",un,[t("input",{value:n.effects.sfx.startsWith("data:")?"로그에 담긴 효과음 파일":n.effects.sfx,readonly:n.effects.sfx.startsWith("data:"),onInput:e[13]||(e[13]=d=>n.effects.sfx=d.target.value),type:"text",placeholder:"효과음 URL 입력 또는 파일 선택 버튼 클릭",class:"url-input","aria-label":"효과음 URL"},null,40,hn),t("input",{ref:"sfxFileInput",type:"file",accept:"audio/*",onChange:e[14]||(e[14]=(...d)=>s.handleSfxFileSelect&&s.handleSfxFileSelect(...d)),style:{display:"none"}},null,544),t("button",{onClick:e[15]||(e[15]=d=>o.$refs.sfxFileInput.click()),class:"file-select-button"},[p(c,{name:"folder",size:14}),e[50]||(e[50]=I(" 파일 선택 ",-1))]),n.effects.sfx?(u(),h("button",{key:0,onClick:e[16]||(e[16]=(...d)=>s.clearSfx&&s.clearSfx(...d)),"aria-label":"효과음 선택 비우기",class:"clear-button"},[p(c,{name:"close",size:14})])):g("",!0)]),t("p",pn,[p(c,{name:"info",size:12}),e[51]||(e[51]=I(" 선택한 파일은 로그에 함께 보관돼요. ",-1))])],512),[[A,n.activeEffect==="sfx"]]),T(t("section",fn,[t("h4",null,[p(c,{name:"music",size:16}),e[52]||(e[52]=I(" 배경음악 (BGM) ",-1))]),t("div",mn,[t("input",{value:n.effects.bgm.startsWith("data:")?"로그에 담긴 음악 파일":n.effects.bgm,readonly:n.effects.bgm.startsWith("data:"),onInput:e[17]||(e[17]=d=>n.effects.bgm=d.target.value),type:"text",placeholder:"BGM URL (YouTube) 입력 또는 파일 선택 버튼 클릭",class:"url-input","aria-label":"BGM URL"},null,40,gn),t("input",{ref:"bgmFileInput",type:"file",accept:"audio/*",onChange:e[18]||(e[18]=(...d)=>s.handleBgmFileSelect&&s.handleBgmFileSelect(...d)),style:{display:"none"}},null,544),t("button",{onClick:e[19]||(e[19]=d=>o.$refs.bgmFileInput.click()),class:"file-select-button"},[p(c,{name:"folder",size:14}),e[53]||(e[53]=I(" 파일 선택 ",-1))]),n.effects.bgm?(u(),h("button",{key:0,onClick:e[20]||(e[20]=(...d)=>s.clearBgm&&s.clearBgm(...d)),"aria-label":"음악 선택 비우기",class:"clear-button"},[p(c,{name:"close",size:14})])):g("",!0)]),t("p",Tn,[p(c,{name:"info",size:12}),e[54]||(e[54]=I(" 음원 파일이나 YouTube 주소를 사용할 수 있어요. ",-1))])],512),[[A,n.activeEffect==="bgm"]]),T(t("section",In,[p(m,{label:"배경 이미지 고르기",onSelect:e[21]||(e[21]=d=>n.effects.background=d)}),t("h4",null,[p(c,{name:"photo",size:16}),e[55]||(e[55]=I(" 배경 이미지 ",-1))]),t("div",Sn,[t("input",{value:n.effects.background.startsWith("data:")?"로그에 담긴 배경 이미지 파일":n.effects.background,readonly:n.effects.background.startsWith("data:"),onInput:e[22]||(e[22]=d=>n.effects.background=d.target.value),type:"text",placeholder:"배경 이미지 URL 입력 또는 파일 선택 버튼 클릭",class:"url-input","aria-label":"배경 이미지 URL"},null,40,En),t("input",{ref:"bgFileInput",type:"file",accept:"image/*",onChange:e[23]||(e[23]=(...d)=>s.handleBgFileSelect&&s.handleBgFileSelect(...d)),style:{display:"none"}},null,544),t("button",{onClick:e[24]||(e[24]=d=>o.$refs.bgFileInput.click()),class:"file-select-button"},[p(c,{name:"folder",size:14}),e[56]||(e[56]=I(" 파일 선택 ",-1))]),n.effects.background?(u(),h("button",{key:0,onClick:e[25]||(e[25]=(...d)=>s.clearBackground&&s.clearBackground(...d)),"aria-label":"배경 이미지 선택 비우기",class:"clear-button"},[p(c,{name:"close",size:14})])):g("",!0)]),t("p",bn,[p(c,{name:"info",size:12}),e[57]||(e[57]=I(" 선택한 이미지는 로그에 함께 보관돼요. ",-1))]),s.scenePaletteItems.length>0?(u(),h("div",yn,[e[58]||(e[58]=t("span",{class:"palette-title",id:"scene-palette-title"},"씬 배경 팔레트 (룸 데이터)",-1)),t("div",On,[(u(!0),h(O,null,N(s.scenePaletteItems,(d,r)=>(u(),h("div",{key:r,class:"scene-thumb-wrap"},[t("button",{type:"button",class:v(["scene-thumb",{selected:s.isSceneSelected(d,r)}]),"aria-label":`배경 적용: ${d.name||"씬"}`,"aria-pressed":s.isSceneSelected(d,r)?"true":"false",onClick:S=>s.applySceneBackground(d,r)},[t("img",{src:s.safeSrc(s.sceneThumbUrl(d)),alt:"",class:"scene-thumb-img"},null,8,Nn),t("span",vn,f(d.name||"씬"),1)],10,Rn),s.sceneImages(d).length>1?(u(),h("button",{key:0,type:"button",class:v(["scene-thumb-badge",{open:n.expandedSceneIndex===r}]),"aria-label":`${d.name||"씬"}의 다른 이미지 ${s.sceneImages(d).length-1}장 보기`,"aria-expanded":n.expandedSceneIndex===r?"true":"false",onClick:S=>s.toggleSceneImages(r)}," +"+f(s.sceneImages(d).length-1),11,An)):g("",!0)]))),128))]),s.expandedScene?(u(),h("div",{key:0,class:"scene-image-row",role:"group","aria-label":`${s.expandedScene.name||"씬"}의 이미지 선택`},[(u(!0),h(O,null,N(s.sceneImages(s.expandedScene),(d,r)=>(u(),h("button",{key:r,type:"button",class:v(["scene-image-option",{selected:s.isSceneImageSelected(d)}]),"aria-label":`배경 적용: ${s.expandedScene.name||"씬"} ${s.sourceLabel(d.source)}`,"aria-pressed":s.isSceneImageSelected(d)?"true":"false",onClick:S=>s.applySceneImage(d.url)},[t("img",{src:s.safeSrc(d.url),alt:"",class:"scene-image-option-img"},null,8,Ln),t("span",Hn,f(s.sourceLabel(d.source)),1)],10,Cn))),128))],8,wn)):g("",!0)])):n.logStore.roomAssets?g("",!0):(u(),h("div",Dn,[...e[59]||(e[59]=[t("span",{class:"palette-title"},"씬 배경 팔레트 (룸 데이터)",-1),t("p",{class:"palette-empty-hint"}," 캐릭터 & 이미지 관리의 룸 데이터 추가에서 ZIP을 올리면 배경을 선택할 수 있어요 ",-1)])])),n.effects.background?(u(),h("div",Un,[t("label",kn,[p(c,{name:"drop",size:14}),I(" 배경 투명도 ("+f(Math.round(n.effects.backgroundOpacity*100))+"%) ",1)]),T(t("input",{id:"see-bg-opacity","onUpdate:modelValue":e[26]||(e[26]=d=>n.effects.backgroundOpacity=d),type:"range",min:"0",max:"1",step:"0.05",class:"opacity-slider"},null,512),[[E,n.effects.backgroundOpacity,void 0,{number:!0}]])])):g("",!0)],512),[[A,n.activeEffect==="background"]]),T(t("section",Fn,[t("h4",null,[p(c,{name:"photo",size:16}),e[60]||(e[60]=I(" 일러스트 범위 적용 ",-1))]),t("label",Pn,[T(t("input",{"onUpdate:modelValue":e[27]||(e[27]=d=>n.includeIllustrations=d),type:"checkbox",disabled:i.selectedStep===null},null,8,xn),[[L,n.includeIllustrations]]),I(" 선택한 대사의 일러스트("+f(s.currentIllustrationsCount)+"개)를 이 범위에 적용 ",1)]),e[61]||(e[61]=t("p",{class:"hint-text"}," 체크하면 적용하기를 누를 때 지정 범위의 일러스트를 현재 스텝 것으로 덮어써요 ",-1))],512),[[A,n.activeEffect==="illustration"]]),n.effects[n.activeEffect]?(u(),h("div",Vn,[t("h4",null,[p(c,{name:"eye",size:16}),e[62]||(e[62]=I(" 설정 미리보기 ",-1))]),t("div",Mn,[n.activeEffect==="sfx"&&n.effects.sfx?(u(),h("div",Wn,[e[63]||(e[63]=t("strong",null,"효과음:",-1)),t("span",null,f(s.formatPreviewUrl(n.effects.sfx)),1)])):g("",!0),n.activeEffect==="bgm"&&n.effects.bgm?(u(),h("div",Bn,[e[64]||(e[64]=t("strong",null,"BGM:",-1)),t("span",null,f(s.formatPreviewUrl(n.effects.bgm)),1)])):g("",!0),n.activeEffect==="background"&&n.effects.background?(u(),h("div",Yn,[e[65]||(e[65]=t("strong",null,"배경:",-1)),t("span",null,f(s.formatPreviewUrl(n.effects.background)),1)])):g("",!0),n.activeEffect==="background"&&n.effects.background?(u(),h("div",Gn,[e[66]||(e[66]=t("strong",null,"투명도:",-1)),t("span",null,f(Math.round(n.effects.backgroundOpacity*100))+"%",1)])):g("",!0)])])):g("",!0)])],512),[[A,n.rangeMode==="new"||n.editingRange]])]),T(t("div",_n,[t("button",{onClick:e[28]||(e[28]=(...d)=>s.applyAll&&s.applyAll(...d)),class:"apply-button",disabled:!s.canApplyAll},[p(c,{name:"check",size:16}),I(" "+f(n.editingRange?"범위 수정 적용":s.activeEffectLabel+" 적용"),1)],8,zn),n.activeEffect!=="illustration"?(u(),h("button",{key:0,onClick:e[29]||(e[29]=(...d)=>s.removeEffects&&s.removeEffects(...d)),class:"remove-button",disabled:!s.canApply},[p(c,{name:"trash",size:16}),I(" "+f(s.activeEffectLabel)+" 제거 ",1)],8,jn)):g("",!0)],512),[[A,n.rangeMode==="new"||n.editingRange]]),n.showRemoveConfirm?(u(),h("div",{key:0,class:"modal-overlay",onClick:e[32]||(e[32]=M((...d)=>s.cancelRemoveEffects&&s.cancelRemoveEffects(...d),["self"])),onKeydown:e[33]||(e[33]=B((...d)=>s.cancelRemoveEffects&&s.cancelRemoveEffects(...d),["esc"]))},[t("div",Jn,[t("div",Kn,[t("h3",qn,[p(c,{name:"trash",size:20}),I(" "+f(s.activeEffectLabel)+" 제거 ",1)])]),t("p",Xn,f(s.removeRangeLabel)+"의 "+f(s.activeEffectLabel)+"가 사라져요. ",1),t("div",Zn,[t("button",{class:"btn btn-secondary",onClick:e[30]||(e[30]=(...d)=>s.cancelRemoveEffects&&s.cancelRemoveEffects(...d))},"유지"),t("button",{class:"btn btn-danger",onClick:e[31]||(e[31]=(...d)=>s.confirmRemoveEffects&&s.confirmRemoveEffects(...d))},"제거")])],512)],32)):g("",!0)])}const $n=C(Ot,[["render",Qn],["__scopeId","data-v-ccdb6852"]]),eo={components:{CharacterColorInput:ee,AppIcon:x,LibraryImageSelect:te},name:"StepInfoEditor",mixins:[Q],props:{stepData:{type:Object,default:null}},data(){return{logStore:W(),localData:null,showRawJSON:!1,illustFileInputs:[],isLoadingFile:!1,showDeleteConfirm:!1}},computed:{availableCharacters(){return G(this.logStore.vnData)},matchedRoomCharacter(){const o=this.localData?.character?.name;if(!o)return null;const e=Object.values(this.logStore.vnData.characters||{}).find(i=>i.name===o);return e?.emotions&&Object.keys(e.emotions).length?{...e,faces:Object.entries(e.emotions).map(([i,a])=>({label:i,url:a}))}:this.logStore.roomAssets?.characters?.find(i=>i.name===o)||null},facePaletteItems(){const o=this.matchedRoomCharacter;if(!o)return[];const e=[];o.avatarUrl&&e.push({label:"기본",url:o.avatarUrl});for(const i of o.faces||[])i.url&&e.push({label:i.label||"표정",url:i.url});return e},hasDice(){return this.localData?.diceRolls?.length>0},hasStatusChange(){return this.localData?.statusChanges?.length>0},hasDXCombo(){return this.localData?.dxCombos?.length>0},hasIllustration(){return this.localData?.illustrations?.length>0},hasOugi(){return this.localData?.ougis?.length>0},hasShinobigami(){return this.localData?.shinobigamis?.length>0}},watch:{localData:{deep:!0,handler(o){this.$emit("preview",o)}},stepData:{immediate:!0,handler(){this.initializeLocalData(),this.showRawJSON=!1,this.showDeleteConfirm&&(this.showDeleteConfirm=!1,this.deactivateFocusTrap())}},"localData.statusChanges":{handler(o){o&&o.forEach(e=>{if(e.oldValue!==null&&e.newValue!==null){const i=e.newValue-e.oldValue;e.delta!==i&&(e.delta=i)}})},deep:!0},"localData.diceRolls":{handler(o){o&&o.forEach(e=>{if(e.type==="choice"&&e.optionsText){const i=e.optionsText.split(",").map(n=>n.trim());Array.isArray(e.options)&&e.options.length===i.length&&e.options.every((n,s)=>n===i[s])||(e.options=i)}})},deep:!0}},methods:{chooseLibraryCharacter(o){const e=this.availableCharacters[Number(o.target.value)];o.target.value!==""&&e&&this.localData&&(this.localData.character={...this.localData.character,...e}),o.target.value=""},initializeLocalData(){if(!this.stepData){this.localData=null;return}this.localData={id:this.stepData.id,sceneNumber:this.stepData.sceneNumber,type:this.stepData.type||"dialogue",character:{name:this.stepData.character?.name||"",color:Y(this.stepData.character?.color),avatarUrl:this.stepData.character?.avatarUrl||""},text:this.stepData.text||"",rawText:this.stepData.rawText||"",isSceneDescription:this.stepData.isSceneDescription||!1,sceneTitle:this.stepData.sceneTitle||"",scenePCs:this.stepData.scenePCs||"",sceneDescription:this.stepData.sceneDescription||"",illustrations:JSON.parse(JSON.stringify(this.stepData.illustrations||[])),diceRolls:this.initializeDiceRolls(this.stepData.diceRolls||[]),statusChanges:JSON.parse(JSON.stringify(this.stepData.statusChanges||[])),dxCombos:JSON.parse(JSON.stringify(this.stepData.dxCombos||[])),ougis:this.initializeOugis(this.stepData.ougis||[]),shinobigamis:JSON.parse(JSON.stringify(this.stepData.shinobigamis||[])),effects:JSON.parse(JSON.stringify(this.stepData.effects||{sfx:null,bgm:null,background:null,backgroundOpacity:.3}))}},initializeDiceRolls(o){return o.map(e=>{const i={...e};return e.type==="choice"&&e.options&&Array.isArray(e.options)&&(i.optionsText=e.options.join(", ")),i})},initializeOugis(o){return o.map(e=>{const i={...e};return e.skills&&Array.isArray(e.skills)&&(i.skills=e.skills.join(", ")),i})},addIllustration(){this.localData.illustrations||(this.localData.illustrations=[]),this.localData.illustrations.push({url:"",alt:"img"})},removeIllustration(o){this.localData.illustrations.splice(o,1)},handleImageError(o){o.target.style.display="none"},safeSrc(o){return F(o)},applyFaceUrl(o){this.localData?.character&&(this.localData.character.avatarUrl=o)},async handleIllustFileSelect(o,e){const i=o.target.files?.[0];if(!i)return;const a=2*1024*1024;if(i.size>a){this.$toast("이미지 파일은 2MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const n=await this.fileToBase64(i);this.localData.illustrations[e].url=n}catch(n){console.error("[handleIllustFileSelect] 파일 변환 실패:",n),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}},clearIllustration(o){this.localData.illustrations[o].url="",this.illustFileInputs[o]&&(this.illustFileInputs[o].value="")},async handleAvatarFileSelect(o){const e=o.target.files?.[0];if(!e)return;const i=2*1024*1024;if(e.size>i){this.$toast("아바타 이미지는 2MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const a=await this.fileToBase64(e);this.localData.character.avatarUrl=a}catch(a){console.error("[handleAvatarFileSelect] 파일 변환 실패:",a),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}},clearAvatar(){this.localData.character.avatarUrl="",this.$refs.avatarFileInput&&(this.$refs.avatarFileInput.value="")},fileToBase64(o){return new Promise((e,i)=>{const a=new FileReader;a.onload=()=>e(a.result),a.onerror=i,a.readAsDataURL(o)})},addDiceRoll(){this.localData.diceRolls||(this.localData.diceRolls=[]),this.localData.diceRolls.push({type:"normal",formula:"",result:0,fullFormula:"",diceRolls:"",command:"",checkName:"",judgement:"",options:[],optionsText:""})},removeDiceRoll(o){this.localData.diceRolls.splice(o,1)},addStatusChange(){this.localData.statusChanges||(this.localData.statusChanges=[]),this.localData.statusChanges.push({characterName:"",statusName:"",oldValue:null,newValue:null,delta:0})},toggleStatusMode(o,e){e.target.checked?(o.oldValue=0,o.newValue=0,o.delta=0):(o.oldValue=null,o.newValue=null)},computeDelta(o){return o.oldValue!==null&&o.newValue!==null?o.newValue-o.oldValue:o.delta||0},removeStatusChange(o){this.localData.statusChanges.splice(o,1)},addDXCombo(){this.localData.dxCombos||(this.localData.dxCombos=[]),this.localData.dxCombos.push({type:"dx-combo",isSingleEffect:!1,comboName:"",description:"",effects:[],timing:"",difficulty:"",target:"",range:"",erosion:"",erosionCost:null,diceRoll:null})},removeDXCombo(o){this.localData.dxCombos.splice(o,1)},addOugi(){this.localData.ougis||(this.localData.ougis=[]),this.localData.ougis.push({type:"ougi",ougiName:"",skills:"",presentation:"",ougiEffect:"",ninpouInfo:"",ougiType:""})},removeOugi(o){this.localData.ougis.splice(o,1)},addShinobigami(){this.localData.shinobigamis||(this.localData.shinobigamis=[]),this.localData.shinobigamis.push({type:"shinobigami",command:"",checkName:"",formula:"",diceRolls:"",diceExpression:"",result:0,judgement:"",additionalInfo:null})},removeShinobigami(o){this.localData.shinobigamis.splice(o,1)},addShinobiAdditionalInfo(o){o.additionalInfo={type:"",range:"",cost:"",skill:"",description:""}},deleteStep(){this.stepData&&(this.showDeleteConfirm=!0,this.activateFocusTrap("deleteConfirmModal"))},confirmDeleteStep(){this.showDeleteConfirm=!1,this.deactivateFocusTrap(),this.$emit("delete",this.stepData.id)},cancelDeleteStep(){this.showDeleteConfirm=!1,this.deactivateFocusTrap()},duplicateStep(){this.stepData&&this.$emit("duplicate",this.stepData.id)},saveChanges(){if(!this.localData)return;const o={...this.localData,hasDice:this.hasDice,hasStatusChange:this.hasStatusChange,hasDXCombo:this.hasDXCombo,hasIllustration:this.hasIllustration,hasOugi:this.hasOugi,hasShinobigami:this.hasShinobigami};o.ougis&&(o.ougis=o.ougis.map(e=>({...e,skills:typeof e.skills=="string"?e.skills.split(/[,、]/).map(i=>i.trim()).filter(i=>i):e.skills}))),this.$emit("save",{id:this.stepData.id,updates:o})}}},to={class:"step-info-editor"},no={class:"editor-header"},oo={class:"editor-body"},so={key:0,class:"no-selection"},io={key:1,class:"info-form"},ro={class:"field-group speaker-picker"},ao=["value"],lo={key:0,class:"field-group speaker-name"},co={key:1,class:"field-group step-kind"},uo={class:"type-selection",role:"radiogroup","aria-labelledby":"sie-type-label"},ho={class:"radio-label"},po={class:"radio-label"},fo={class:"radio-label"},mo={class:"radio-label"},go={key:2,class:"field-group dialogue-field"},To={key:3,class:"scene-desc-section"},Io={class:"field-group"},So={class:"field-label"},Eo={class:"field-row"},bo={class:"additional-settings"},yo={class:"field-group"},Oo={key:0,class:"field-group"},Ro={key:1,class:"field-group"},No={class:"file-input-group"},vo=["placeholder","readonly"],Ao=["disabled"],wo=["src"],Co={key:2,class:"field-group"},Lo={key:0,class:"face-palette",role:"group","aria-labelledby":"face-palette-title"},Ho=["aria-label","aria-pressed","onClick"],Do=["src"],Uo={class:"face-thumb-label"},ko={key:1,class:"palette-empty-hint"},Fo={key:2,class:"palette-empty-hint"},Po={class:"field-group"},xo={key:0,class:"field-group section-header"},Vo={class:"field-label"},Mo={key:1,class:"items-list"},Wo={class:"item-content"},Bo={class:"file-input-group"},Yo=["onUpdate:modelValue","placeholder","readonly"],Go=["onChange"],_o=["onClick","disabled"],zo=["onClick"],jo=["src"],Jo=["onClick"],Ko={class:"field-group"},qo={key:0,class:"field-group section-header"},Xo={class:"field-label"},Zo={key:1,class:"items-list"},Qo={class:"item-content"},$o={class:"field-row"},es=["onUpdate:modelValue"],ts=["onUpdate:modelValue"],ns={key:0,class:"field-row"},os=["onUpdate:modelValue"],ss={key:1,class:"dx3-fields"},is={class:"field-row"},rs=["onUpdate:modelValue"],as={class:"field-row"},ls=["onUpdate:modelValue"],ds={class:"field-row"},cs=["onUpdate:modelValue"],us={key:2,class:"judgement-fields"},hs={class:"field-row"},ps=["onUpdate:modelValue"],fs=["onUpdate:modelValue"],ms={class:"field-row"},gs=["onUpdate:modelValue"],Ts=["onUpdate:modelValue"],Is={key:3,class:"choice-fields"},Ss={class:"field-row"},Es=["onUpdate:modelValue"],bs={class:"field-row"},ys=["onUpdate:modelValue"],Os=["onClick"],Rs={key:2,class:"field-group section-header"},Ns={class:"field-label"},vs={key:3,class:"items-list"},As={class:"item-content"},ws={class:"field-row"},Cs=["onUpdate:modelValue"],Ls=["onUpdate:modelValue"],Hs={class:"field-row"},Ds={class:"checkbox-label"},Us=["checked","onChange"],ks={key:0,class:"field-row"},Fs=["onUpdate:modelValue"],Ps=["onUpdate:modelValue"],xs={key:1,class:"field-row"},Vs=["onUpdate:modelValue"],Ms=["onClick"],Ws={class:"field-group"},Bs={key:0,class:"field-group section-header"},Ys={class:"field-label"},Gs={key:1,class:"items-list"},_s={class:"item-content"},zs=["onUpdate:modelValue"],js=["onUpdate:modelValue"],Js=["onUpdate:modelValue"],Ks=["onUpdate:modelValue"],qs=["onUpdate:modelValue"],Xs=["onUpdate:modelValue"],Zs=["onClick"],Qs={key:2,class:"field-group section-header"},$s={class:"field-label"},ei={key:3,class:"items-list"},ti={class:"item-content"},ni={class:"field-row"},oi=["onUpdate:modelValue"],si=["onUpdate:modelValue"],ii={class:"field-row"},ri=["onUpdate:modelValue"],ai=["onUpdate:modelValue"],li={class:"field-row"},di=["onUpdate:modelValue"],ci=["onUpdate:modelValue"],ui={key:0,class:"shinobi-additional-info"},hi={class:"field-row"},pi=["onUpdate:modelValue"],fi=["onUpdate:modelValue"],mi=["onUpdate:modelValue"],gi=["onUpdate:modelValue"],Ti=["onUpdate:modelValue"],Ii=["onClick"],Si=["onClick"],Ei={key:4,class:"field-group section-header"},bi={class:"field-label"},yi={key:5,class:"items-list"},Oi={class:"item-content"},Ri={class:"field-row"},Ni=["onUpdate:modelValue"],vi={class:"checkbox-label"},Ai=["onUpdate:modelValue"],wi=["onUpdate:modelValue"],Ci={class:"field-row"},Li=["onUpdate:modelValue"],Hi=["onUpdate:modelValue"],Di={class:"field-row"},Ui=["onUpdate:modelValue"],ki=["onUpdate:modelValue"],Fi=["onUpdate:modelValue"],Pi={class:"field-row"},xi=["onUpdate:modelValue"],Vi=["onUpdate:modelValue"],Mi=["onClick"],Wi={class:"field-group"},Bi={class:"field-group"},Yi=["value"],Gi={key:0,class:"field-group"},_i={key:1,class:"field-group"},zi=["value"],ji={key:2,class:"field-group"},Ji={class:"field-label"},Ki={key:3,class:"json-viewer"},qi={key:4,class:"actions"},Xi={class:"action-group left"},Zi={class:"modal-container delete-confirm-container",ref:"deleteConfirmModal",tabindex:"-1",role:"dialog","aria-modal":"true","aria-labelledby":"step-delete-title"},Qi={class:"modal-header"},$i={id:"step-delete-title"},er={class:"delete-confirm-buttons"};function tr(o,e,i,a,n,s){const c=R("AppIcon"),m=R("CharacterColorInput"),d=R("LibraryImageSelect");return u(),h("div",to,[t("div",no,[t("h3",null,[p(c,{name:"edit",size:20}),e[36]||(e[36]=I(" 대사와 인물 ",-1))])]),t("div",oo,[i.stepData?(u(),h("div",io,[t("label",ro,[e[39]||(e[39]=I("캐릭터 고르기",-1)),t("select",{class:"field-input","aria-label":"보관한 캐릭터 선택",value:"",onChange:e[0]||(e[0]=(...r)=>s.chooseLibraryCharacter&&s.chooseLibraryCharacter(...r))},[e[38]||(e[38]=t("option",{value:""},"등록·사용한 캐릭터에서 선택",-1)),(u(!0),h(O,null,N(s.availableCharacters,(r,S)=>(u(),h("option",{key:r.name,value:S},f(r.name),9,ao))),128))],32)]),n.localData?(u(),h("div",lo,[e[40]||(e[40]=t("label",{class:"field-label",for:"sie-char-name"},"캐릭터 이름",-1)),T(t("input",{id:"sie-char-name","onUpdate:modelValue":e[1]||(e[1]=r=>n.localData.character.name=r),type:"text",class:"field-input",placeholder:"캐릭터 이름"},null,512),[[E,n.localData.character.name]])])):g("",!0),n.localData?(u(),h("div",co,[e[45]||(e[45]=t("span",{class:"field-label",id:"sie-type-label"},"대사 종류",-1)),t("div",uo,[t("label",ho,[T(t("input",{type:"radio",value:"dialogue","onUpdate:modelValue":e[2]||(e[2]=r=>n.localData.type=r)},null,512),[[z,n.localData.type]]),e[41]||(e[41]=t("span",null,"일반 대화",-1))]),t("label",po,[T(t("input",{type:"radio",value:"system","onUpdate:modelValue":e[3]||(e[3]=r=>n.localData.type=r)},null,512),[[z,n.localData.type]]),e[42]||(e[42]=t("span",null,"시스템 메시지",-1))]),t("label",fo,[T(t("input",{type:"radio",value:"narrator","onUpdate:modelValue":e[4]||(e[4]=r=>n.localData.type=r)},null,512),[[z,n.localData.type]]),e[43]||(e[43]=t("span",null,"나레이터",-1))]),t("label",mo,[T(t("input",{type:"radio",value:"scene-description","onUpdate:modelValue":e[5]||(e[5]=r=>n.localData.type=r)},null,512),[[z,n.localData.type]]),e[44]||(e[44]=t("span",null,"씬 설명",-1))])])])):g("",!0),n.localData?(u(),h("div",go,[e[46]||(e[46]=t("label",{class:"field-label",for:"sie-text"},"대사 텍스트",-1)),T(t("textarea",{id:"sie-text","onUpdate:modelValue":e[6]||(e[6]=r=>n.localData.text=r),class:"field-textarea",rows:"4",placeholder:"캐릭터의 대사를 입력하세요"},null,512),[[E,n.localData.text]])])):g("",!0),n.localData&&n.localData.type==="scene-description"?(u(),h("div",To,[t("div",Io,[t("span",So,[p(c,{name:"film",size:14}),e[47]||(e[47]=I(" 씬 정보 ",-1))])]),t("div",Eo,[T(t("input",{"onUpdate:modelValue":e[7]||(e[7]=r=>n.localData.sceneNumber=r),type:"text",class:"field-input small",placeholder:"씬 번호","aria-label":"씬 번호"},null,512),[[E,n.localData.sceneNumber]]),T(t("input",{"onUpdate:modelValue":e[8]||(e[8]=r=>n.localData.sceneTitle=r),type:"text",class:"field-input",placeholder:"씬 제목","aria-label":"씬 제목"},null,512),[[E,n.localData.sceneTitle]])]),T(t("input",{"onUpdate:modelValue":e[9]||(e[9]=r=>n.localData.scenePCs=r),type:"text",class:"field-input",placeholder:"참가 PC (쉼표로 구분)","aria-label":"참가 PC"},null,512),[[E,n.localData.scenePCs]]),T(t("textarea",{"onUpdate:modelValue":e[10]||(e[10]=r=>n.localData.sceneDescription=r),class:"field-textarea",rows:"3",placeholder:"씬 상세 설명","aria-label":"씬 상세 설명"},null,512),[[E,n.localData.sceneDescription]])])):g("",!0),t("div",bo,[t("details",yo,[e[52]||(e[52]=t("summary",null,"인물 색상과 표정",-1)),n.localData?(u(),h("div",Oo,[e[48]||(e[48]=t("span",{class:"field-label"},"캐릭터 색상",-1)),p(m,{modelValue:n.localData.character.color,"onUpdate:modelValue":e[11]||(e[11]=r=>n.localData.character.color=r)},null,8,["modelValue"])])):g("",!0),n.localData?(u(),h("div",Ro,[p(d,{label:"표정 이미지 고르기",onSelect:e[12]||(e[12]=r=>n.localData.character.avatarUrl=r)}),e[49]||(e[49]=t("label",{class:"field-label",for:"sie-avatar-url"},"아바타 URL",-1)),t("div",No,[T(t("input",{id:"sie-avatar-url","onUpdate:modelValue":e[13]||(e[13]=r=>n.localData.character.avatarUrl=r),type:"text",class:"field-input",placeholder:n.localData.character.avatarUrl&&n.localData.character.avatarUrl.startsWith("data:image")?"[로컬 아바타 파일]":"https://example.com/avatar.png 또는 파일 선택",readonly:n.localData.character.avatarUrl&&n.localData.character.avatarUrl.startsWith("data:image")},null,8,vo),[[E,n.localData.character.avatarUrl]]),t("input",{type:"file",ref:"avatarFileInput",accept:"image/*",style:{display:"none"},onChange:e[14]||(e[14]=(...r)=>s.handleAvatarFileSelect&&s.handleAvatarFileSelect(...r))},null,544),t("button",{onClick:e[15]||(e[15]=r=>o.$refs.avatarFileInput?.click()),class:"file-select-button",disabled:n.isLoadingFile},[p(c,{name:"folder",size:14}),I(" "+f(n.isLoadingFile?"불러오는 중...":"파일"),1)],8,Ao),n.localData.character.avatarUrl?(u(),h("button",{key:0,onClick:e[16]||(e[16]=(...r)=>s.clearAvatar&&s.clearAvatar(...r)),class:"clear-button",title:"초기화"},[p(c,{name:"close",size:12})])):g("",!0)]),e[50]||(e[50]=t("p",{class:"hint-text"},"아바타 이미지 권장 크기: 2MB 이하",-1)),n.localData.character.avatarUrl?(u(),h("img",{key:0,src:s.safeSrc(n.localData.character.avatarUrl),class:"preview-img avatar-preview",onError:e[17]||(e[17]=(...r)=>s.handleImageError&&s.handleImageError(...r))},null,40,wo)):g("",!0)])):g("",!0),n.localData?(u(),h("div",Co,[e[51]||(e[51]=t("span",{class:"palette-title",id:"face-palette-title"},"표정 팔레트 (룸 데이터)",-1)),s.facePaletteItems.length>0?(u(),h("div",Lo,[(u(!0),h(O,null,N(s.facePaletteItems,(r,S)=>(u(),h("button",{key:S,type:"button",class:v(["face-thumb",{selected:n.localData.character.avatarUrl===r.url}]),"aria-label":`표정 적용: ${r.label}`,"aria-pressed":n.localData.character.avatarUrl===r.url?"true":"false",onClick:l=>s.applyFaceUrl(r.url)},[t("img",{src:s.safeSrc(r.url),alt:"",class:"face-thumb-img",onError:e[18]||(e[18]=(...l)=>s.handleImageError&&s.handleImageError(...l))},null,40,Do),t("span",Uo,f(r.label),1)],10,Ho))),128))])):n.logStore.roomAssets?!s.matchedRoomCharacter&&n.localData.character.name?(u(),h("p",Fo," 룸 데이터에 '"+f(n.localData.character.name)+"' 캐릭터가 없어요. 룸과 로그의 캐릭터 이름이 같은지 확인해 주세요. ",1)):g("",!0):(u(),h("p",ko," 캐릭터 & 이미지 관리의 룸 데이터 추가에서 ZIP을 올리면 표정을 선택할 수 있어요 "))])):g("",!0)]),t("details",Po,[e[55]||(e[55]=t("summary",null,"일러스트",-1)),p(d,{label:"일러스트 이미지 추가",onSelect:e[19]||(e[19]=r=>n.localData.illustrations.push({url:r,alt:"일러스트"}))}),n.localData?(u(),h("div",xo,[t("span",Vo,[p(c,{name:"photo",size:14}),I(" 일러스트 ("+f(n.localData.illustrations.length)+"개) ",1)]),t("button",{onClick:e[20]||(e[20]=(...r)=>s.addIllustration&&s.addIllustration(...r)),class:"add-button"},[p(c,{name:"plus",size:12}),e[53]||(e[53]=I(" 추가 ",-1))])])):g("",!0),n.localData.illustrations.length>0?(u(),h("div",Mo,[(u(!0),h(O,null,N(n.localData.illustrations,(r,S)=>(u(),h("div",{key:S,class:"item-card"},[t("div",Wo,[t("div",Bo,[T(t("input",{"onUpdate:modelValue":l=>r.url=l,type:"text",class:"field-input",placeholder:r.url&&r.url.startsWith("data:image")?"[로컬 이미지 파일]":"이미지 URL 또는 파일 선택",readonly:r.url&&r.url.startsWith("data:image")},null,8,Yo),[[E,r.url]]),t("input",{type:"file",ref_for:!0,ref:l=>{l&&(n.illustFileInputs[S]=l)},accept:"image/*",style:{display:"none"},onChange:l=>s.handleIllustFileSelect(l,S)},null,40,Go),t("button",{onClick:()=>n.illustFileInputs[S]?.click(),class:"file-select-button",disabled:n.isLoadingFile},[p(c,{name:"folder",size:14}),I(" "+f(n.isLoadingFile?"불러오는 중...":"파일"),1)],8,_o),r.url?(u(),h("button",{key:0,onClick:()=>s.clearIllustration(S),class:"clear-button",title:"초기화"},[p(c,{name:"close",size:12})],8,zo)):g("",!0)]),e[54]||(e[54]=t("p",{class:"hint-text"},"이미지 파일 권장 크기: 2MB 이하",-1)),r.url?(u(),h("img",{key:0,src:s.safeSrc(r.url),class:"preview-img",onError:e[21]||(e[21]=(...l)=>s.handleImageError&&s.handleImageError(...l))},null,40,jo)):g("",!0)]),t("button",{onClick:l=>s.removeIllustration(S),class:"remove-button"},[p(c,{name:"trash",size:14})],8,Jo)]))),128))])):g("",!0)]),t("details",Ko,[e[65]||(e[65]=t("summary",null,"주사위와 상태 변화",-1)),n.localData?(u(),h("div",qo,[t("span",Xo,[p(c,{name:"cube",size:14}),I(" 다이스 롤 ("+f(n.localData.diceRolls.length)+"개) ",1)]),t("button",{onClick:e[22]||(e[22]=(...r)=>s.addDiceRoll&&s.addDiceRoll(...r)),class:"add-button"},[p(c,{name:"plus",size:12}),e[56]||(e[56]=I(" 추가 ",-1))])])):g("",!0),n.localData.diceRolls.length>0?(u(),h("div",Zo,[(u(!0),h(O,null,N(n.localData.diceRolls,(r,S)=>(u(),h("div",{key:S,class:"item-card dice-card"},[t("div",Qo,[t("div",$o,[T(t("select",{"onUpdate:modelValue":l=>r.type=l,class:"field-input small"},[...e[57]||(e[57]=[t("option",{value:"normal"},"일반",-1),t("option",{value:"dx3"},"DX3",-1),t("option",{value:"judgement"},"판정",-1),t("option",{value:"choice"},"선택",-1)])],8,es),[[V,r.type]]),T(t("input",{"onUpdate:modelValue":l=>r.formula=l,type:"text",class:"field-input",placeholder:"공식 (예: 1D100, 8dx+16)"},null,8,ts),[[E,r.formula]])]),r.type==="normal"?(u(),h("div",ns,[e[58]||(e[58]=t("span",{class:"field-label-inline"},"결과:",-1)),T(t("input",{"onUpdate:modelValue":l=>r.result=l,type:"number",class:"field-input small",placeholder:"결과"},null,8,os),[[E,r.result,void 0,{number:!0}]])])):g("",!0),r.type==="dx3"?(u(),h("div",ss,[t("div",is,[T(t("input",{"onUpdate:modelValue":l=>r.fullFormula=l,type:"text",class:"field-input",placeholder:"전체 공식 (예: 8DX10+16)"},null,8,rs),[[E,r.fullFormula]])]),t("div",as,[T(t("input",{"onUpdate:modelValue":l=>r.diceRolls=l,type:"text",class:"field-input",placeholder:"다이스 롤 (예: 10[5,6,7,8,9,10]+5[5]+16)"},null,8,ls),[[E,r.diceRolls]])]),t("div",ds,[e[59]||(e[59]=t("span",{class:"field-label-inline"},"최종 결과:",-1)),T(t("input",{"onUpdate:modelValue":l=>r.result=l,type:"number",class:"field-input small",placeholder:"결과"},null,8,cs),[[E,r.result,void 0,{number:!0}]])])])):g("",!0),r.type==="judgement"?(u(),h("div",us,[t("div",hs,[T(t("input",{"onUpdate:modelValue":l=>r.command=l,type:"text",class:"field-input small",placeholder:"커맨드 (cc<=70)"},null,8,ps),[[E,r.command]]),T(t("input",{"onUpdate:modelValue":l=>r.checkName=l,type:"text",class:"field-input",placeholder:"판정명"},null,8,fs),[[E,r.checkName]])]),t("div",ms,[T(t("input",{"onUpdate:modelValue":l=>r.result=l,type:"number",class:"field-input small",placeholder:"결과"},null,8,gs),[[E,r.result,void 0,{number:!0}]]),T(t("input",{"onUpdate:modelValue":l=>r.judgement=l,type:"text",class:"field-input",placeholder:"판정 (보통 성공, 실패 등)"},null,8,Ts),[[E,r.judgement]])])])):g("",!0),r.type==="choice"?(u(),h("div",Is,[t("div",Ss,[T(t("textarea",{"onUpdate:modelValue":l=>r.optionsText=l,class:"field-textarea small",rows:"2",placeholder:"선택지 (쉼표로 구분)"},null,8,Es),[[E,r.optionsText]])]),t("div",bs,[e[60]||(e[60]=t("span",{class:"field-label-inline"},"선택됨:",-1)),T(t("input",{"onUpdate:modelValue":l=>r.result=l,type:"text",class:"field-input",placeholder:"선택된 옵션"},null,8,ys),[[E,r.result]])])])):g("",!0)]),t("button",{onClick:l=>s.removeDiceRoll(S),class:"remove-button"},[p(c,{name:"trash",size:14})],8,Os)]))),128))])):g("",!0),n.localData?(u(),h("div",Rs,[t("span",Ns,[p(c,{name:"chart",size:14}),I(" 스테이터스 변화 ("+f(n.localData.statusChanges.length)+"개) ",1)]),t("button",{onClick:e[23]||(e[23]=(...r)=>s.addStatusChange&&s.addStatusChange(...r)),class:"add-button"},[p(c,{name:"plus",size:12}),e[61]||(e[61]=I(" 추가 ",-1))])])):g("",!0),n.localData.statusChanges.length>0?(u(),h("div",vs,[(u(!0),h(O,null,N(n.localData.statusChanges,(r,S)=>(u(),h("div",{key:S,class:"item-card"},[t("div",As,[t("div",ws,[T(t("input",{"onUpdate:modelValue":l=>r.characterName=l,type:"text",class:"field-input",placeholder:"캐릭터명"},null,8,Cs),[[E,r.characterName]]),T(t("input",{"onUpdate:modelValue":l=>r.statusName=l,type:"text",class:"field-input",placeholder:"상태명 (HP, 침식률 등)"},null,8,Ls),[[E,r.statusName]])]),t("div",Hs,[t("label",Ds,[t("input",{type:"checkbox",checked:r.oldValue!==null&&r.newValue!==null,onChange:l=>s.toggleStatusMode(r,l)},null,40,Us),e[62]||(e[62]=t("span",null,"이전값/새값 모드",-1))])]),r.oldValue!==null&&r.newValue!==null?(u(),h("div",ks,[T(t("input",{"onUpdate:modelValue":l=>r.oldValue=l,type:"number",class:"field-input small",placeholder:"이전값"},null,8,Fs),[[E,r.oldValue,void 0,{number:!0}]]),e[63]||(e[63]=t("span",{class:"arrow"},"→",-1)),T(t("input",{"onUpdate:modelValue":l=>r.newValue=l,type:"number",class:"field-input small",placeholder:"새값"},null,8,Ps),[[E,r.newValue,void 0,{number:!0}]]),t("span",{class:v(["delta",{positive:s.computeDelta(r)>0,negative:s.computeDelta(r)<0}])},f(s.computeDelta(r)>0?"+":"")+f(s.computeDelta(r)),3)])):(u(),h("div",xs,[e[64]||(e[64]=t("span",{class:"field-label-inline"},"변화량:",-1)),T(t("input",{"onUpdate:modelValue":l=>r.delta=l,type:"number",class:"field-input small",placeholder:"±변화량"},null,8,Vs),[[E,r.delta,void 0,{number:!0}]]),t("span",{class:v(["delta",{positive:r.delta>0,negative:r.delta<0}])},f(r.delta>0?"+":"")+f(r.delta),3)]))]),t("button",{onClick:l=>s.removeStatusChange(S),class:"remove-button"},[p(c,{name:"trash",size:14})],8,Ms)]))),128))])):g("",!0)]),t("details",Ws,[e[72]||(e[72]=t("summary",null,"규칙별 기술과 콤보",-1)),n.localData?(u(),h("div",Bs,[t("span",Ys,[p(c,{name:"star",size:14}),I(" 시노비가미 오의 ("+f((n.localData.ougis||[]).length)+"개) ",1)]),t("button",{onClick:e[24]||(e[24]=(...r)=>s.addOugi&&s.addOugi(...r)),class:"add-button"},[p(c,{name:"plus",size:12}),e[66]||(e[66]=I(" 추가 ",-1))])])):g("",!0),(n.localData.ougis||[]).length>0?(u(),h("div",Gs,[(u(!0),h(O,null,N(n.localData.ougis,(r,S)=>(u(),h("div",{key:S,class:"item-card ougi-card"},[t("div",_s,[T(t("input",{"onUpdate:modelValue":l=>r.ougiName=l,type:"text",class:"field-input",placeholder:"오의 이름"},null,8,zs),[[E,r.ougiName]]),T(t("input",{"onUpdate:modelValue":l=>r.skills=l,type:"text",class:"field-input",placeholder:"지정 특기 (쉼표 구분, 예: 도검술, 인맥)"},null,8,js),[[E,r.skills]]),T(t("textarea",{"onUpdate:modelValue":l=>r.presentation=l,class:"field-textarea small",rows:"2",placeholder:"연출 (오의 사용 시 묘사)"},null,8,Js),[[E,r.presentation]]),T(t("textarea",{"onUpdate:modelValue":l=>r.ougiEffect=l,class:"field-textarea small",rows:"2",placeholder:"오의 효과 (전투에서의 효과 등, 선택사항)"},null,8,Ks),[[E,r.ougiEffect]]),T(t("input",{"onUpdate:modelValue":l=>r.ninpouInfo=l,type:"text",class:"field-input",placeholder:"인법 정보"},null,8,qs),[[E,r.ninpouInfo]]),T(t("input",{"onUpdate:modelValue":l=>r.ougiType=l,type:"text",class:"field-input",placeholder:"오의 종류"},null,8,Xs),[[E,r.ougiType]])]),t("button",{onClick:l=>s.removeOugi(S),class:"remove-button"},[p(c,{name:"trash",size:14})],8,Zs)]))),128))])):g("",!0),n.localData?(u(),h("div",Qs,[t("span",$s,[p(c,{name:"bolt",size:14}),I(" 시노비가미 인법 ("+f((n.localData.shinobigamis||[]).length)+"개) ",1)]),t("button",{onClick:e[25]||(e[25]=(...r)=>s.addShinobigami&&s.addShinobigami(...r)),class:"add-button"},[p(c,{name:"plus",size:12}),e[67]||(e[67]=I(" 추가 ",-1))])])):g("",!0),(n.localData.shinobigamis||[]).length>0?(u(),h("div",ei,[(u(!0),h(O,null,N(n.localData.shinobigamis,(r,S)=>(u(),h("div",{key:S,class:"item-card shinobi-card"},[t("div",ti,[t("div",ni,[T(t("input",{"onUpdate:modelValue":l=>r.command=l,type:"text",class:"field-input small",placeholder:"명령어 (예: SG@12#2>=5)"},null,8,oi),[[E,r.command]]),T(t("input",{"onUpdate:modelValue":l=>r.checkName=l,type:"text",class:"field-input",placeholder:"판정명 (예: 도검술, 괴력)"},null,8,si),[[E,r.checkName]])]),t("div",ii,[T(t("input",{"onUpdate:modelValue":l=>r.diceRolls=l,type:"text",class:"field-input small",placeholder:"주사위 (예: 1,2)"},null,8,ri),[[E,r.diceRolls]]),T(t("input",{"onUpdate:modelValue":l=>r.diceExpression=l,type:"text",class:"field-input",placeholder:"다이스 표현 (예: 3[1,2])"},null,8,ai),[[E,r.diceExpression]])]),t("div",li,[T(t("input",{"onUpdate:modelValue":l=>r.result=l,type:"number",class:"field-input small",placeholder:"결과"},null,8,di),[[E,r.result,void 0,{number:!0}]]),T(t("input",{"onUpdate:modelValue":l=>r.judgement=l,type:"text",class:"field-input small",placeholder:"판정 (成功/失敗)"},null,8,ci),[[E,r.judgement]])]),r.additionalInfo?(u(),h("div",ui,[t("div",hi,[T(t("input",{"onUpdate:modelValue":l=>r.additionalInfo.type=l,type:"text",class:"field-input small",placeholder:"타입"},null,8,pi),[[E,r.additionalInfo.type]]),T(t("input",{"onUpdate:modelValue":l=>r.additionalInfo.range=l,type:"text",class:"field-input small",placeholder:"사거리"},null,8,fi),[[E,r.additionalInfo.range]]),T(t("input",{"onUpdate:modelValue":l=>r.additionalInfo.cost=l,type:"text",class:"field-input small",placeholder:"코스트"},null,8,mi),[[E,r.additionalInfo.cost]])]),T(t("input",{"onUpdate:modelValue":l=>r.additionalInfo.skill=l,type:"text",class:"field-input",placeholder:"특기"},null,8,gi),[[E,r.additionalInfo.skill]]),T(t("textarea",{"onUpdate:modelValue":l=>r.additionalInfo.description=l,class:"field-textarea small",rows:"2",placeholder:"설명"},null,8,Ti),[[E,r.additionalInfo.description]])])):(u(),h("button",{key:1,onClick:l=>s.addShinobiAdditionalInfo(r),class:"add-info-button"},[p(c,{name:"plus",size:10}),e[68]||(e[68]=I(" 추가 정보 입력 ",-1))],8,Ii))]),t("button",{onClick:l=>s.removeShinobigami(S),class:"remove-button"},[p(c,{name:"trash",size:14})],8,Si)]))),128))])):g("",!0),n.localData?(u(),h("div",Ei,[t("span",bi,[p(c,{name:"bolt",size:14}),I(" DX 콤보/이펙트 ("+f(n.localData.dxCombos.length)+"개) ",1)]),t("button",{onClick:e[26]||(e[26]=(...r)=>s.addDXCombo&&s.addDXCombo(...r)),class:"add-button"},[p(c,{name:"plus",size:12}),e[69]||(e[69]=I(" 추가 ",-1))])])):g("",!0),n.localData.dxCombos.length>0?(u(),h("div",yi,[(u(!0),h(O,null,N(n.localData.dxCombos,(r,S)=>(u(),h("div",{key:S,class:"item-card combo-card"},[t("div",Oi,[t("div",Ri,[T(t("select",{"onUpdate:modelValue":l=>r.type=l,class:"field-input small"},[...e[70]||(e[70]=[t("option",{value:"dx-combo"},"콤보",-1),t("option",{value:"dx-effect"},"단일 이펙트",-1)])],8,Ni),[[V,r.type]]),t("label",vi,[T(t("input",{type:"checkbox","onUpdate:modelValue":l=>r.isSingleEffect=l},null,8,Ai),[[L,r.isSingleEffect]]),e[71]||(e[71]=t("span",null,"단일 이펙트",-1))])]),T(t("input",{"onUpdate:modelValue":l=>r.comboName=l,type:"text",class:"field-input",placeholder:"콤보/이펙트명"},null,8,wi),[[E,r.comboName]]),t("div",Ci,[T(t("input",{"onUpdate:modelValue":l=>r.timing=l,type:"text",class:"field-input",placeholder:"타이밍 (메이저, 마이너 등)"},null,8,Li),[[E,r.timing]]),T(t("input",{"onUpdate:modelValue":l=>r.difficulty=l,type:"text",class:"field-input",placeholder:"난이도 (자동, 대항 등)"},null,8,Hi),[[E,r.difficulty]])]),t("div",Di,[T(t("input",{"onUpdate:modelValue":l=>r.target=l,type:"text",class:"field-input",placeholder:"대상"},null,8,Ui),[[E,r.target]]),T(t("input",{"onUpdate:modelValue":l=>r.range=l,type:"text",class:"field-input",placeholder:"사거리"},null,8,ki),[[E,r.range]])]),T(t("textarea",{"onUpdate:modelValue":l=>r.description=l,class:"field-textarea small",rows:"2",placeholder:"설명/기능"},null,8,Fi),[[E,r.description]]),t("div",Pi,[T(t("input",{"onUpdate:modelValue":l=>r.erosion=l,type:"text",class:"field-input small",placeholder:"침식치"},null,8,xi),[[E,r.erosion]]),T(t("input",{"onUpdate:modelValue":l=>r.erosionCost=l,type:"number",class:"field-input small",placeholder:"침식 코스트"},null,8,Vi),[[E,r.erosionCost,void 0,{number:!0}]])])]),t("button",{onClick:l=>s.removeDXCombo(S),class:"remove-button"},[p(c,{name:"trash",size:14})],8,Mi)]))),128))])):g("",!0)]),t("details",Wi,[e[77]||(e[77]=t("summary",null,"장면 번호와 원본 정보",-1)),t("div",Bi,[e[73]||(e[73]=t("label",{class:"field-label",for:"sie-step-id"},"스텝 ID (읽기 전용)",-1)),t("input",{id:"sie-step-id",type:"text",value:i.stepData.id,disabled:"",class:"field-input disabled"},null,8,Yi)]),n.localData?(u(),h("div",Gi,[e[74]||(e[74]=t("label",{class:"field-label",for:"sie-scene-number"},"씬 번호",-1)),T(t("input",{id:"sie-scene-number","onUpdate:modelValue":e[27]||(e[27]=r=>n.localData.sceneNumber=r),type:"number",class:"field-input",placeholder:"씬 번호"},null,512),[[E,n.localData.sceneNumber,void 0,{number:!0}]])])):g("",!0),i.stepData?(u(),h("div",_i,[e[75]||(e[75]=t("label",{class:"field-label",for:"sie-raw-text"},"원본 텍스트 (읽기 전용)",-1)),t("textarea",{id:"sie-raw-text",value:i.stepData.rawText,disabled:"",class:"field-textarea disabled",rows:"3"},null,8,zi)])):g("",!0),i.stepData?(u(),h("div",ji,[t("span",Ji,[p(c,{name:"search",size:14}),e[76]||(e[76]=I(" JSON 원본 데이터 ",-1))]),t("button",{onClick:e[28]||(e[28]=r=>n.showRawJSON=!n.showRawJSON),class:"toggle-json-button"},f(n.showRawJSON?"숨기기":"보기"),1)])):g("",!0),n.showRawJSON?(u(),h("div",Ki,[t("pre",null,f(JSON.stringify(i.stepData,null,2)),1)])):g("",!0)])]),n.localData?(u(),h("div",qi,[t("div",Xi,[t("button",{onClick:e[29]||(e[29]=(...r)=>s.deleteStep&&s.deleteStep(...r)),class:"delete-button"},[p(c,{name:"trash",size:16}),e[78]||(e[78]=I(" 스텝 삭제 ",-1))]),t("button",{onClick:e[30]||(e[30]=(...r)=>s.duplicateStep&&s.duplicateStep(...r)),class:"duplicate-button"},[p(c,{name:"clipboard",size:16}),e[79]||(e[79]=I(" 스텝 복사 ",-1))])]),t("button",{onClick:e[31]||(e[31]=(...r)=>s.saveChanges&&s.saveChanges(...r)),class:"save-button"},[p(c,{name:"save",size:16}),e[80]||(e[80]=I(" 변경사항 저장 ",-1))])])):g("",!0)])):(u(),h("div",so,[p(c,{name:"pointer",size:48}),e[37]||(e[37]=t("p",null,"대사 목록에서 편집할 대사를 선택해 주세요",-1))]))]),n.showDeleteConfirm&&i.stepData?(u(),h("div",{key:0,class:"modal-overlay",onClick:e[34]||(e[34]=M((...r)=>s.cancelDeleteStep&&s.cancelDeleteStep(...r),["self"])),onKeydown:e[35]||(e[35]=B((...r)=>s.cancelDeleteStep&&s.cancelDeleteStep(...r),["esc"]))},[t("div",Zi,[t("div",Qi,[t("h3",$i,[p(c,{name:"trash",size:20}),e[81]||(e[81]=I(" 스텝 삭제 ",-1))])]),e[82]||(e[82]=t("p",{class:"delete-confirm-message"}," 이 대사를 삭제함으로 옮겨요. 실행 취소하거나 삭제함에서 복구할 수 있어요. ",-1)),t("div",er,[t("button",{class:"btn btn-secondary",onClick:e[32]||(e[32]=(...r)=>s.cancelDeleteStep&&s.cancelDeleteStep(...r))},"유지"),t("button",{class:"btn btn-danger",onClick:e[33]||(e[33]=(...r)=>s.confirmDeleteStep&&s.confirmDeleteStep(...r))},"삭제")])],512)],32)):g("",!0)])}const nr=C(eo,[["render",tr],["__scopeId","data-v-ce53ef75"]]),or={components:{CharacterColorInput:ee,AppIcon:x},name:"CharacterBulkEditor",mixins:[Q],props:{registeredCharacters:{type:Array,default:()=>[]},allSteps:{type:Array,required:!0}},data(){return{selectedCharacter:null,failedAvatars:new Set,newCharacterName:"",newCharacterColor:"",newAvatarUrl:"",replaceExistingAvatars:!1,isLoadingAvatar:!1,avatarError:"",avatarRequest:0,convertToNarrator:!1,narratorConfirmAcknowledged:!1,showNarratorConfirm:!1,isApplying:!1,progressCurrent:0,progressTotal:0}},computed:{characterGroups(){const o=Object.create(null);for(const e of this.registeredCharacters)o[e.name]={...e,count:0,nonNarratorCount:0,registered:!0};return this.allSteps.forEach(e=>{const i=e.character?.name||"",a=Y(e.character?.color),n=e.character?.avatarUrl||null,s=e.type==="narrator";o[i]||(o[i]={name:i,color:a,avatarUrl:null,count:0,nonNarratorCount:0}),o[i].count++,s||o[i].nonNarratorCount++,!o[i].avatarUrl&&n&&(o[i].avatarUrl=n)}),Object.values(o).filter(e=>e.nonNarratorCount>0||e.registered).sort((e,i)=>i.count-e.count)},selectedGroup(){return this.selectedCharacter?this.characterGroups.find(o=>o.name===this.selectedCharacter):null},hasChanges(){if(!this.selectedCharacter)return!1;const o=this.newCharacterName&&this.newCharacterName!==this.selectedCharacter,e=this.newCharacterColor!==this.selectedGroup?.color;return o||e||!!this.newAvatarUrl||this.convertToNarrator},afterGroup(){return{...this.selectedGroup,avatarUrl:this.newAvatarUrl||this.selectedGroup?.avatarUrl}},progressPercentage(){return this.progressTotal===0?0:Math.round(this.progressCurrent/this.progressTotal*100)}},methods:{clearAvatar(){this.avatarRequest++,this.newAvatarUrl="",this.replaceExistingAvatars=!1,this.isLoadingAvatar=!1,this.avatarError=""},async readAvatar(o){const e=o.target.files[0];if(o.target.value="",!e)return;this.clearAvatar();const i=this.avatarRequest;if(!e.type.startsWith("image/")||e.size>10*1024*1024){this.avatarError="10MB 이하 이미지 파일을 선택해 주세요.";return}this.isLoadingAvatar=!0;try{const a=await new Promise((n,s)=>{const c=new FileReader;c.onload=()=>n(c.result),c.onerror=s,c.readAsDataURL(e)});if(!F(a))throw new Error("Unsupported image");await new Promise((n,s)=>{const c=new Image;c.onload=n,c.onerror=s,c.src=a}),i===this.avatarRequest&&(this.newAvatarUrl=a)}catch{i===this.avatarRequest&&(this.avatarError="이미지를 열지 못했어요. 다른 이미지 파일을 선택해 주세요.")}finally{i===this.avatarRequest&&(this.isLoadingAvatar=!1)}},safeSrc(o){return F(o)},hasAvatar(o){return!!this.safeSrc(o?.avatarUrl)&&!this.failedAvatars.has(o.avatarUrl)},getListAvatarStyle(o){const e=o?.color||"var(--border-color)",i={borderColor:e,color:o?.color?"var(--on-accent)":"var(--text-color)",textShadow:o?.color?void 0:"none"};return this.hasAvatar(o)||(i.backgroundColor=e),i},getPreviewAvatarStyle(o,e){const i=e||"var(--border-color)",a={borderColor:i,color:e?"var(--on-accent)":"var(--text-color)",textShadow:e?void 0:"none"};return this.hasAvatar(o)||(a.backgroundColor=i),a},selectCharacter(o){this.isApplying||(this.clearAvatar(),this.selectedCharacter=o,this.newCharacterName=o,this.newCharacterColor=this.selectedGroup.color,this.convertToNarrator=!1)},resetForm(){this.clearAvatar(),this.selectedGroup&&(this.newCharacterName=this.selectedCharacter,this.newCharacterColor=this.selectedGroup.color,this.convertToNarrator=!1)},cancelNarratorConfirm(){this.showNarratorConfirm=!1,this.deactivateFocusTrap()},confirmNarratorAndApply(){this.narratorConfirmAcknowledged=!0,this.showNarratorConfirm=!1,this.deactivateFocusTrap(),this.applyChanges()},async applyChanges(){if(!this.hasChanges||this.isApplying||this.isLoadingAvatar||this.avatarError)return;if(this.convertToNarrator&&!this.narratorConfirmAcknowledged){this.showNarratorConfirm=!0,this.activateFocusTrap("narratorConfirmModal");return}const o=this.selectedCharacter,e=this.newCharacterName||o,i=this.newCharacterColor;this.isApplying=!0,this.progressCurrent=0,this.progressTotal=this.selectedGroup.count;try{this.$emit("bulk-update",{oldName:o,newName:e,newColor:i,newAvatarUrl:this.newAvatarUrl||void 0,replaceExistingAvatars:this.replaceExistingAvatars,convertToNarrator:this.convertToNarrator,onProgress:(a,n)=>{this.progressCurrent=a,this.progressTotal=n},onComplete:async a=>{await new Promise(n=>setTimeout(n,300)),this.isApplying=!1,this.progressCurrent=0,this.progressTotal=0,await new Promise(n=>setTimeout(n,150)),this.$toast(a.message,a.success?"success":"error"),this.selectedCharacter=null,this.newCharacterName="",this.newCharacterColor="",this.clearAvatar(),this.convertToNarrator=!1}})}catch(a){console.error("일괄 변경 실패:",a),this.isApplying=!1,this.progressCurrent=0,this.progressTotal=0,await new Promise(n=>setTimeout(n,150)),this.$toast("캐릭터를 일괄 변경하지 못했어요. 다시 시도해 주세요","error")}}},beforeUnmount(){this.avatarRequest++}},sr={class:"character-bulk-editor"},ir={key:0,class:"loading-overlay",role:"status","aria-live":"polite"},rr={class:"loading-content"},ar={class:"progress-section"},lr={class:"progress-bar"},dr={class:"progress-text"},cr={class:"editor-header"},ur={class:"editor-body"},hr={class:"info-message"},pr={class:"character-list"},fr={class:"list-header"},mr={class:"list-body"},gr=["aria-pressed","onClick"],Tr=["src","onError","alt"],Ir={key:1},Sr={class:"character-info"},Er={class:"character-name"},br={key:0,class:"selection-label"},yr={class:"character-count"},Or={key:0,class:"edit-form"},Rr={class:"form-header"},Nr={class:"affected-count"},vr={class:"field-group"},Ar=["placeholder"],wr={class:"field-group"},Cr={class:"field-group"},Lr=["disabled"],Hr={key:0,role:"status",class:"option-help"},Dr={key:1,role:"alert",class:"image-error"},Ur={class:"checkbox-row"},kr=["disabled"],Fr=["disabled"],Pr={class:"field-group"},xr={class:"checkbox-row"},Vr={class:"option-help"},Mr={class:"preview-section"},Wr={class:"preview-comparison"},Br={class:"preview-item before"},Yr={class:"preview-box"},Gr=["src","alt"],_r={key:1},zr={class:"preview-arrow"},jr={class:"preview-item after"},Jr={class:"preview-box"},Kr=["src","alt"],qr={key:1},Xr={class:"actions"},Zr=["disabled"],Qr=["disabled"],$r={key:1,class:"no-selection"},ea={class:"confirm-content",ref:"narratorConfirmModal",tabindex:"-1",role:"dialog","aria-modal":"true","aria-labelledby":"narrator-confirm-title"},ta={class:"confirm-title",id:"narrator-confirm-title"},na={class:"confirm-buttons"};function oa(o,e,i,a,n,s){const c=R("AppIcon"),m=R("CharacterColorInput");return u(),h("div",sr,[n.isApplying?(u(),h("div",ir,[t("div",rr,[e[14]||(e[14]=t("div",{class:"spinner"},null,-1)),e[15]||(e[15]=t("p",{class:"loading-text"},"캐릭터 정보를 일괄 변경하는 중...",-1)),t("div",ar,[t("div",lr,[t("div",{class:"progress-fill",style:U({width:s.progressPercentage+"%"})},null,4)]),t("p",dr,f(n.progressCurrent)+" / "+f(n.progressTotal)+" 스텝 ("+f(s.progressPercentage)+"%)",1)]),e[16]||(e[16]=t("p",{class:"loading-subtext"},"잠시만 기다려주세요",-1))])])):g("",!0),t("div",cr,[t("h3",null,[p(c,{name:"users",size:20}),e[17]||(e[17]=I(" 캐릭터 일괄 편집 ",-1))])]),t("div",ur,[t("div",hr,[p(c,{name:"info",size:18}),e[18]||(e[18]=t("p",null,"캐릭터를 선택하면 같은 이름의 대사를 한꺼번에 수정할 수 있어요.",-1))]),t("div",pr,[t("div",fr,[t("h4",null,"캐릭터 목록 ("+f(s.characterGroups.length)+"명)",1)]),t("div",mr,[(u(!0),h(O,null,N(s.characterGroups,d=>(u(),h("button",{type:"button",key:d.name,class:v(["character-item",{selected:n.selectedCharacter===d.name}]),"aria-pressed":n.selectedCharacter===d.name,onClick:r=>s.selectCharacter(d.name)},[t("div",{class:"character-avatar",style:U(s.getListAvatarStyle(d))},[s.hasAvatar(d)?(u(),h("img",{key:0,src:s.safeSrc(d.avatarUrl),onError:r=>n.failedAvatars.add(d.avatarUrl),alt:`${d.name||"캐릭터"} 아바타`,loading:"lazy",referrerpolicy:"no-referrer"},null,40,Tr)):(u(),h("span",Ir,f((d.name||"?").charAt(0)),1))],4),t("div",Sr,[t("div",Er,[I(f(d.name||"(이름 없음)"),1),n.selectedCharacter===d.name?(u(),h("span",br," · 선택됨")):g("",!0)]),t("div",yr,f(d.count)+"개 스텝",1)])],10,gr))),128))])]),n.selectedCharacter&&s.selectedGroup?(u(),h("div",Or,[t("div",Rr,[t("h4",null,[p(c,{name:"edit",size:16}),I(' "'+f(n.selectedCharacter)+'" 편집 ',1)]),t("span",Nr,f(s.selectedGroup.count)+"개 스텝에 적용됩니다",1)]),t("div",vr,[e[19]||(e[19]=t("label",{class:"field-label"},"새 캐릭터 이름",-1)),T(t("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>n.newCharacterName=d),type:"text",class:"field-input",placeholder:n.selectedCharacter},null,8,Ar),[[E,n.newCharacterName]])]),t("div",wr,[e[20]||(e[20]=t("label",{class:"field-label"},"새 캐릭터 색상",-1)),p(m,{modelValue:n.newCharacterColor,"onUpdate:modelValue":e[1]||(e[1]=d=>n.newCharacterColor=d)},null,8,["modelValue"])]),t("div",Cr,[e[22]||(e[22]=t("label",{for:"bulk-character-image",class:"field-label"},"새 캐릭터 이미지",-1)),t("input",{id:"bulk-character-image",type:"file",accept:"image/*",class:"field-input",disabled:n.isApplying,onChange:e[2]||(e[2]=(...d)=>s.readAvatar&&s.readAvatar(...d))},null,40,Lr),e[23]||(e[23]=t("p",{class:"option-help"},"10MB 이하 이미지 파일을 선택하면 이미지가 없는 대사에 한꺼번에 넣어요.",-1)),n.isLoadingAvatar?(u(),h("p",Hr,"이미지 확인 중…")):g("",!0),n.avatarError?(u(),h("p",Dr,f(n.avatarError),1)):g("",!0),n.newAvatarUrl?(u(),h(O,{key:2},[t("label",Ur,[T(t("input",{"onUpdate:modelValue":e[3]||(e[3]=d=>n.replaceExistingAvatars=d),type:"checkbox",disabled:n.isApplying},null,8,kr),[[L,n.replaceExistingAvatars]]),e[21]||(e[21]=t("span",null,"기존 이미지도 이 이미지로 바꾸기",-1))]),t("button",{type:"button",class:"btn btn-ghost",disabled:n.isApplying,onClick:e[4]||(e[4]=(...d)=>s.clearAvatar&&s.clearAvatar(...d))},"이미지 선택 취소",8,Fr)],64)):g("",!0)]),t("div",Pr,[e[26]||(e[26]=t("label",{class:"field-label"},"나레이터 변환",-1)),t("label",xr,[T(t("input",{"onUpdate:modelValue":e[5]||(e[5]=d=>n.convertToNarrator=d),type:"checkbox",class:"checkbox-input"},null,512),[[L,n.convertToNarrator]]),e[24]||(e[24]=t("span",{class:"checkbox-text"},[I(" 선택 캐릭터의 스텝을 "),t("strong",null,"나레이터"),I(" 타입으로 변환 ")],-1))]),t("p",Vr,[p(c,{name:"warning",size:14}),e[25]||(e[25]=I(" 변환 후에는 대사 박스가 나레이터 스타일로 표시됩니다. ",-1))])]),t("div",Mr,[e[29]||(e[29]=t("h5",null,"변경 전/후 미리보기",-1)),t("div",Wr,[t("div",Br,[e[27]||(e[27]=t("span",{class:"preview-label"},"변경 전",-1)),t("div",Yr,[t("div",{class:"preview-avatar",style:U(s.getPreviewAvatarStyle(s.selectedGroup,s.selectedGroup.color))},[s.hasAvatar(s.selectedGroup)?(u(),h("img",{key:0,src:s.safeSrc(s.selectedGroup.avatarUrl),onError:e[6]||(e[6]=d=>n.failedAvatars.add(s.selectedGroup.avatarUrl)),alt:`${n.selectedCharacter} 아바타`,loading:"lazy",referrerpolicy:"no-referrer"},null,40,Gr)):(u(),h("span",_r,f(n.selectedCharacter.charAt(0)),1))],4),t("span",{class:"preview-name",style:U({color:s.selectedGroup.color})},f(n.selectedCharacter),5)])]),t("div",zr,[p(c,{name:"arrow",size:24})]),t("div",jr,[e[28]||(e[28]=t("span",{class:"preview-label"},"변경 후",-1)),t("div",Jr,[t("div",{class:"preview-avatar",style:U(s.getPreviewAvatarStyle(s.afterGroup,n.newCharacterColor))},[s.hasAvatar(s.afterGroup)?(u(),h("img",{key:0,src:s.safeSrc(s.afterGroup.avatarUrl),onError:e[7]||(e[7]=d=>n.failedAvatars.add(s.afterGroup.avatarUrl)),alt:`${n.newCharacterName||n.selectedCharacter} 아바타`,loading:"lazy",referrerpolicy:"no-referrer"},null,40,Kr)):(u(),h("span",qr,f((n.newCharacterName||n.selectedCharacter).charAt(0)),1))],4),t("span",{class:"preview-name",style:U({color:n.newCharacterColor})},f(n.newCharacterName||n.selectedCharacter),5)])])])]),t("div",Xr,[t("button",{onClick:e[8]||(e[8]=(...d)=>s.resetForm&&s.resetForm(...d)),class:"reset-button",disabled:n.isApplying},[p(c,{name:"refresh",size:16}),e[30]||(e[30]=I(" 초기화 ",-1))],8,Zr),t("button",{onClick:e[9]||(e[9]=(...d)=>s.applyChanges&&s.applyChanges(...d)),class:"apply-button",disabled:!s.hasChanges||n.isApplying||n.isLoadingAvatar||!!n.avatarError},[n.isApplying?(u(),h(O,{key:0},[e[31]||(e[31]=t("div",{class:"button-spinner"},null,-1)),e[32]||(e[32]=I(" 적용하는 중... ",-1))],64)):(u(),h(O,{key:1},[p(c,{name:"check",size:16}),e[33]||(e[33]=I(" 일괄 적용 ",-1))],64))],8,Qr)])])):(u(),h("div",$r,[p(c,{name:"pointer",size:48}),e[34]||(e[34]=t("p",null,"왼쪽에서 캐릭터를 선택하세요",-1))])),n.showNarratorConfirm?(u(),h("div",{key:2,class:"confirm-modal",onClick:e[12]||(e[12]=M(()=>{},["stop"])),onKeydown:e[13]||(e[13]=B((...d)=>s.cancelNarratorConfirm&&s.cancelNarratorConfirm(...d),["esc"]))},[t("div",ea,[t("h3",ta,[p(c,{name:"warning",size:18}),e[35]||(e[35]=I(" 나레이터 변환 확인 ",-1))]),e[36]||(e[36]=t("p",{class:"confirm-text"},[I(" 선택한 캐릭터의 모든 스텝 타입이 "),t("strong",null,"나레이터"),I("로 변경됩니다. ")],-1)),t("div",na,[t("button",{class:"btn btn-secondary",onClick:e[10]||(e[10]=(...d)=>s.cancelNarratorConfirm&&s.cancelNarratorConfirm(...d))}," 취소 "),t("button",{class:"btn btn-primary",onClick:e[11]||(e[11]=(...d)=>s.confirmNarratorAndApply&&s.confirmNarratorAndApply(...d))}," 변환 적용 ")])],512)],32)):g("",!0)])])}const sa=C(or,[["render",oa],["__scopeId","data-v-27032c70"]]),ia={components:{AppIcon:x},name:"ImageBulkEditor",props:{vnData:{type:Object,required:!0}},data(){return{selectedImageUrl:null,newImageUrl:"",isApplying:!1,progressCurrent:0,progressTotal:0,activeFilter:"all",imageTypes:[{value:"all",label:"전체",icon:"globe"},{value:"avatar",label:"아바타",icon:"user"},{value:"background",label:"배경",icon:"palette"},{value:"handout",label:"핸드아웃",icon:"document"},{value:"illustration",label:"일러스트",icon:"photo"}],isLoadingFile:!1}},computed:{imageGroups(){const o=Object.create(null);for(const e of _(this.vnData))o[e.url]={url:e.url,name:e.name,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}};return this.vnData.scenes&&this.vnData.scenes.forEach((e,i)=>{e.steps?.forEach((a,n)=>{const s=a.character?.avatarUrl;if(s){o[s]||(o[s]={url:s,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}}),o[s].count++,o[s].types.add("avatar");const m=a.character.name;o[s].locations.avatar.includes(m)||o[s].locations.avatar.push(m)}const c=a.effects?.background;c&&(o[c]||(o[c]={url:c,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}}),o[c].count++,o[c].types.add("background"),o[c].locations.background.push(`씬${i+1} 스텝${n+1}`)),a.illustrations&&Array.isArray(a.illustrations)&&a.illustrations.forEach((m,d)=>{const r=m.url;r&&(o[r]||(o[r]={url:r,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}}),o[r].count++,o[r].types.add("illustration"),o[r].locations.illustration.push(`씬${i+1} 스텝${n+1}-${d+1}`))})})}),this.vnData.handouts&&this.vnData.handouts.forEach(e=>{const i=e.imageUrl;i&&(o[i]||(o[i]={url:i,count:0,types:new Set,locations:{avatar:[],background:[],handout:[],illustration:[]}}),o[i].count++,o[i].types.add("handout"),o[i].locations.handout.push(e.title||e.id))}),Object.values(o).map(e=>({...e,types:Array.from(e.types)})).sort((e,i)=>i.count-e.count)},filteredImageGroups(){return this.activeFilter==="all"?this.imageGroups:this.imageGroups.filter(o=>o.types.includes(this.activeFilter))},selectedGroup(){return this.selectedImageUrl?this.imageGroups.find(o=>o.url===this.selectedImageUrl):null},hasChanges(){return this.selectedImageUrl?this.newImageUrl&&this.newImageUrl!==this.selectedImageUrl:!1},progressPercentage(){return this.progressTotal===0?0:Math.round(this.progressCurrent/this.progressTotal*100)}},methods:{safeSrc(o){return F(o)},selectImage(o){this.selectedImageUrl=o,this.newImageUrl=o},resetForm(){this.selectedGroup&&(this.newImageUrl=this.selectedImageUrl)},async handleImageFileSelect(o){const e=o.target.files[0];if(e){if(e.size>2*1024*1024){this.$toast("이미지 파일은 2MB 이하만 올릴 수 있어요","error"),o.target.value="";return}this.isLoadingFile=!0;try{const i=await this.fileToBase64(e);this.newImageUrl=i,e.name,e.size,i.length}catch(i){console.error("[ImageBulkEditor] 파일 로드 실패:",i),this.$toast("파일을 불러오지 못했어요. 다시 시도해 주세요","error")}finally{this.isLoadingFile=!1,o.target.value=""}}},fileToBase64(o){return new Promise((e,i)=>{const a=new FileReader;a.onload=()=>e(a.result),a.onerror=i,a.readAsDataURL(o)})},clearNewImage(){this.newImageUrl=this.selectedImageUrl},truncateUrl(o,e=50){return o?o.length<=e?o:o.substring(0,e-3)+"...":""},handleImageError(o){o.target.style.display="none",o.target.parentElement.classList.add("error")},async applyChanges(){if(!this.hasChanges||this.isApplying)return;const o=this.selectedImageUrl,e=this.newImageUrl;this.isApplying=!0,this.progressCurrent=0,this.progressTotal=this.selectedGroup.count;try{this.$emit("bulk-update",{oldUrl:o,newUrl:e,onProgress:(i,a)=>{this.progressCurrent=i,this.progressTotal=a},onComplete:async i=>{await new Promise(a=>setTimeout(a,300)),this.isApplying=!1,this.progressCurrent=0,this.progressTotal=0,await new Promise(a=>setTimeout(a,150)),this.$toast(i.message,i.success?"success":"error"),this.selectedImageUrl=null,this.newImageUrl=""}})}catch(i){console.error("일괄 변경 실패:",i),this.isApplying=!1,this.progressCurrent=0,this.progressTotal=0,await new Promise(a=>setTimeout(a,150)),this.$toast("이미지 주소를 일괄 변경하지 못했어요. 다시 시도해 주세요","error")}}}},ra={class:"image-bulk-editor"},aa={key:0,class:"loading-overlay",role:"status","aria-live":"polite"},la={class:"loading-content"},da={class:"progress-section"},ca={class:"progress-bar"},ua={class:"progress-text"},ha={class:"editor-header"},pa={class:"editor-body"},fa={class:"info-message"},ma={class:"image-list"},ga={class:"list-header"},Ta={class:"filter-buttons"},Ia=["onClick"],Sa={class:"list-body"},Ea=["onClick"],ba={class:"image-preview"},ya=["src","alt"],Oa={class:"image-info"},Ra=["title"],Na={class:"image-meta"},va={class:"usage-count"},Aa={class:"usage-types"},wa={key:0,class:"edit-form"},Ca={class:"form-header"},La={class:"affected-count"},Ha={class:"field-group"},Da={class:"current-url"},Ua={class:"field-group"},ka={class:"file-input-group"},Fa=["disabled"],Pa=["disabled"],xa={class:"hint-text"},Va={class:"preview-section"},Ma={class:"preview-comparison"},Wa={class:"preview-item before"},Ba={class:"preview-box"},Ya=["src"],Ga={class:"preview-arrow"},_a={class:"preview-item after"},za={class:"preview-box"},ja=["src"],Ja={key:1,class:"preview-placeholder"},Ka={class:"usage-details"},qa={class:"usage-list"},Xa={key:0,class:"usage-type"},Za={key:1,class:"usage-type"},Qa={key:2,class:"usage-type"},$a={key:3,class:"usage-type"},el={class:"actions"},tl=["disabled"],nl=["disabled"],ol={key:1,class:"no-selection"};function sl(o,e,i,a,n,s){const c=R("AppIcon");return u(),h("div",ra,[n.isApplying?(u(),h("div",aa,[t("div",la,[e[9]||(e[9]=t("div",{class:"spinner"},null,-1)),e[10]||(e[10]=t("p",{class:"loading-text"},"이미지 URL을 일괄 변경하는 중...",-1)),t("div",da,[t("div",ca,[t("div",{class:"progress-fill",style:U({width:s.progressPercentage+"%"})},null,4)]),t("p",ua,f(n.progressCurrent)+" / "+f(n.progressTotal)+" 항목 ("+f(s.progressPercentage)+"%)",1)]),e[11]||(e[11]=t("p",{class:"loading-subtext"},"잠시만 기다려주세요",-1))])])):g("",!0),t("div",ha,[t("h3",null,[p(c,{name:"photo",size:20}),e[12]||(e[12]=I(" 이미지 URL 일괄 편집 ",-1))])]),t("div",pa,[t("div",fa,[p(c,{name:"info",size:18}),e[13]||(e[13]=t("p",null,"동일한 이미지 URL을 모두 선택하여 한 번에 변경할 수 있습니다. (아바타, 배경, 핸드아웃 등)",-1))]),t("div",ma,[t("div",ga,[t("h4",null,"이미지 URL 목록 ("+f(s.imageGroups.length)+"개)",1),t("div",Ta,[(u(!0),h(O,null,N(n.imageTypes,m=>(u(),h("button",{key:m.value,class:v(["filter-button",{active:n.activeFilter===m.value}]),onClick:d=>n.activeFilter=m.value},[p(c,{name:m.icon,size:14},null,8,["name"]),I(" "+f(m.label),1)],10,Ia))),128))])]),t("div",Sa,[(u(!0),h(O,null,N(s.filteredImageGroups,m=>(u(),h("div",{key:m.url,class:v(["image-item",{selected:n.selectedImageUrl===m.url}]),onClick:d=>s.selectImage(m.url)},[t("div",ba,[t("img",{src:s.safeSrc(m.url),alt:m.name||"이미지",onError:e[0]||(e[0]=(...d)=>s.handleImageError&&s.handleImageError(...d))},null,40,ya)]),t("div",Oa,[t("div",{class:"image-url",title:m.name||s.truncateUrl(m.url)},f(m.name||s.truncateUrl(m.url)),9,Ra),t("div",Na,[t("span",va,f(m.count)+"회 사용",1),t("span",Aa,[m.types.includes("avatar")?(u(),H(c,{key:0,name:"user",size:12,title:"아바타"})):g("",!0),m.types.includes("background")?(u(),H(c,{key:1,name:"palette",size:12,title:"배경"})):g("",!0),m.types.includes("handout")?(u(),H(c,{key:2,name:"document",size:12,title:"핸드아웃"})):g("",!0),m.types.includes("illustration")?(u(),H(c,{key:3,name:"photo",size:12,title:"일러스트"})):g("",!0)])])])],10,Ea))),128))])]),n.selectedImageUrl&&s.selectedGroup?(u(),h("div",wa,[t("div",Ca,[t("h4",null,[p(c,{name:"edit",size:16}),e[14]||(e[14]=I(" URL 변경 ",-1))]),t("span",La,f(s.selectedGroup.count)+"개 항목에 적용됩니다",1)]),t("div",Ha,[e[15]||(e[15]=t("label",{class:"field-label"},"현재 이미지 URL",-1)),t("div",Da,f(n.selectedImageUrl),1)]),t("div",Ua,[e[18]||(e[18]=t("label",{class:"field-label"},"새 이미지 URL",-1)),t("div",ka,[T(t("input",{"onUpdate:modelValue":e[1]||(e[1]=m=>n.newImageUrl=m),type:"text",class:"field-input",placeholder:"새 이미지 URL 입력 또는 파일 선택"},null,512),[[E,n.newImageUrl]]),t("input",{ref:"imageFileInput",type:"file",accept:"image/*",onChange:e[2]||(e[2]=(...m)=>s.handleImageFileSelect&&s.handleImageFileSelect(...m)),style:{display:"none"}},null,544),t("button",{onClick:e[3]||(e[3]=m=>o.$refs.imageFileInput.click()),class:"file-select-button",disabled:n.isApplying},[p(c,{name:"folder",size:14}),e[16]||(e[16]=I(" 파일 ",-1))],8,Fa),n.newImageUrl?(u(),h("button",{key:0,onClick:e[4]||(e[4]=(...m)=>s.clearNewImage&&s.clearNewImage(...m)),class:"clear-button",disabled:n.isApplying},[p(c,{name:"close",size:14})],8,Pa)):g("",!0)]),t("p",xa,[p(c,{name:"info",size:12}),e[17]||(e[17]=I(" 로컬 파일은 base64로 인코딩 (2MB 이하) ",-1))])]),t("div",Va,[e[22]||(e[22]=t("h5",null,"변경 전/후 미리보기",-1)),t("div",Ma,[t("div",Wa,[e[19]||(e[19]=t("span",{class:"preview-label"},"변경 전",-1)),t("div",Ba,[t("img",{src:s.safeSrc(n.selectedImageUrl),alt:"변경 전",onError:e[5]||(e[5]=(...m)=>s.handleImageError&&s.handleImageError(...m))},null,40,Ya)])]),t("div",Ga,[p(c,{name:"arrow",size:24})]),t("div",_a,[e[21]||(e[21]=t("span",{class:"preview-label"},"변경 후",-1)),t("div",za,[n.newImageUrl?(u(),h("img",{key:0,src:s.safeSrc(n.newImageUrl),alt:"변경 후",onError:e[6]||(e[6]=(...m)=>s.handleImageError&&s.handleImageError(...m))},null,40,ja)):(u(),h("div",Ja,[p(c,{name:"photo",size:32}),e[20]||(e[20]=t("span",null,"URL을 입력하세요",-1))]))])])])]),t("div",Ka,[e[23]||(e[23]=t("h5",null,"사용 위치 상세",-1)),t("div",qa,[s.selectedGroup.types.includes("avatar")?(u(),h("div",Xa,[p(c,{name:"user",size:16}),t("span",null,"아바타 ("+f(s.selectedGroup.locations.avatar.length)+"개 캐릭터)",1)])):g("",!0),s.selectedGroup.types.includes("background")?(u(),h("div",Za,[p(c,{name:"palette",size:16}),t("span",null,"배경 ("+f(s.selectedGroup.locations.background.length)+"개 스텝)",1)])):g("",!0),s.selectedGroup.types.includes("handout")?(u(),h("div",Qa,[p(c,{name:"document",size:16}),t("span",null,"핸드아웃 ("+f(s.selectedGroup.locations.handout.length)+"개)",1)])):g("",!0),s.selectedGroup.types.includes("illustration")?(u(),h("div",$a,[p(c,{name:"photo",size:16}),t("span",null,"일러스트 ("+f(s.selectedGroup.locations.illustration.length)+"개)",1)])):g("",!0)])]),t("div",el,[t("button",{onClick:e[7]||(e[7]=(...m)=>s.resetForm&&s.resetForm(...m)),class:"reset-button",disabled:n.isApplying},[p(c,{name:"refresh",size:16}),e[24]||(e[24]=I(" 초기화 ",-1))],8,tl),t("button",{onClick:e[8]||(e[8]=(...m)=>s.applyChanges&&s.applyChanges(...m)),class:"apply-button",disabled:!s.hasChanges||n.isApplying},[n.isApplying?(u(),h(O,{key:0},[e[25]||(e[25]=t("div",{class:"button-spinner"},null,-1)),e[26]||(e[26]=I(" 적용하는 중... ",-1))],64)):(u(),h(O,{key:1},[p(c,{name:"check",size:16}),e[27]||(e[27]=I(" 일괄 적용 ",-1))],64))],8,nl)])])):(u(),h("div",ol,[p(c,{name:"pointer",size:48}),e[28]||(e[28]=t("p",null,"왼쪽에서 이미지 URL을 선택하세요",-1))]))])])}const il=C(ia,[["render",sl],["__scopeId","data-v-5b8cfad2"]]),rl={name:"ColorPicker",props:{modelValue:{type:String,default:"#ffffff"},supportsAlpha:{type:Boolean,default:!0},placeholder:{type:String,default:"#ffffff 또는 rgba(255,255,255,0.8)"}},data(){return{hexValue:"#ffffff",opacityValue:1,tempTextValue:""}},computed:{displayValue(){return this.tempTextValue||this.modelValue}},watch:{modelValue:{immediate:!0,handler(o){o&&!this.tempTextValue&&this.parseColor(o)}}},methods:{parseColor(o){if(!o)return;const e=o.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(e){const i=parseInt(e[1]),a=parseInt(e[2]),n=parseInt(e[3]),s=e[4]?parseFloat(e[4]):1;this.hexValue=this.rgbToHex(i,a,n),this.opacityValue=s;return}if(o.startsWith("#")){this.hexValue=o,this.opacityValue=1;return}this.hexValue=o,this.opacityValue=1},rgbToHex(o,e,i){return"#"+[o,e,i].map(a=>{const n=a.toString(16);return n.length===1?"0"+n:n}).join("")},hexToRgb(o){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},buildColorString(){if(!this.supportsAlpha||this.opacityValue===1)return this.hexValue;const o=this.hexToRgb(this.hexValue);return o?`rgba(${o.r}, ${o.g}, ${o.b}, ${this.opacityValue})`:this.hexValue},handleColorChange(o){this.hexValue=o.target.value,this.tempTextValue="",this.emitValue()},handleOpacityChange(o){this.opacityValue=parseFloat(o.target.value),this.tempTextValue="",this.emitValue()},handleTextChange(o){this.tempTextValue=o.target.value},validateAndUpdate(){const o=this.tempTextValue;if(!o){this.tempTextValue="";return}this.parseColor(o),this.tempTextValue="",this.emitValue()},emitValue(){const o=this.buildColorString();this.$emit("update:modelValue",o)}}},al={class:"color-picker"},ll={class:"color-inputs"},dl=["value"],cl=["value","placeholder"],ul={key:0,class:"opacity-slider"},hl=["value"],pl={class:"opacity-value"};function fl(o,e,i,a,n,s){return u(),h("div",al,[t("div",ll,[t("input",{type:"color",value:n.hexValue,onInput:e[0]||(e[0]=(...c)=>s.handleColorChange&&s.handleColorChange(...c)),class:"color-swatch"},null,40,dl),t("input",{type:"text",value:s.displayValue,onInput:e[1]||(e[1]=(...c)=>s.handleTextChange&&s.handleTextChange(...c)),onBlur:e[2]||(e[2]=(...c)=>s.validateAndUpdate&&s.validateAndUpdate(...c)),class:"color-text",placeholder:i.placeholder},null,40,cl)]),i.supportsAlpha?(u(),h("div",ul,[e[4]||(e[4]=t("label",{class:"opacity-label"},"투명도",-1)),t("input",{type:"range",value:n.opacityValue,onInput:e[3]||(e[3]=(...c)=>s.handleOpacityChange&&s.handleOpacityChange(...c)),min:"0",max:"1",step:"0.01",class:"opacity-range"},null,40,hl),t("span",pl,f(Math.round(n.opacityValue*100))+"%",1)])):g("",!0)])}const ml=C(rl,[["render",fl],["__scopeId","data-v-d614b2ad"]]),gl={name:"UnitInput",props:{modelValue:{type:String,default:"0px"},units:{type:Array,default:()=>["px","rem","em","%","vh","vw"]},min:{type:Number,default:0},max:{type:Number,default:null},step:{type:Number,default:1},placeholder:{type:String,default:"0"}},data(){return{numericValue:0,unitValue:"px"}},computed:{availableUnits(){return this.units}},watch:{modelValue:{immediate:!0,handler(o){this.parseValue(o)}}},methods:{parseValue(o){if(!o||o===""){this.numericValue=0,this.unitValue=this.units[0]||"px";return}const e=String(o).match(/^([-+]?[\d.]+)([a-z%]+)?$/i);e?(this.numericValue=parseFloat(e[1])||0,this.unitValue=e[2]||this.units[0]||"px"):(this.numericValue=0,this.unitValue=this.units[0]||"px")},handleNumberChange(o){this.numericValue=parseFloat(o.target.value)||0,this.emitValue()},handleUnitChange(o){this.unitValue=o.target.value,this.emitValue()},emitValue(){const o=`${this.numericValue}${this.unitValue}`;this.$emit("update:modelValue",o)}}},Tl={class:"unit-input"},Il=["value","min","max","step","placeholder"],Sl=["value"],El=["value"];function bl(o,e,i,a,n,s){return u(),h("div",Tl,[t("input",{type:"number",value:n.numericValue,onInput:e[0]||(e[0]=(...c)=>s.handleNumberChange&&s.handleNumberChange(...c)),min:i.min,max:i.max,step:i.step,class:"unit-number",placeholder:i.placeholder},null,40,Il),t("select",{value:n.unitValue,onChange:e[1]||(e[1]=(...c)=>s.handleUnitChange&&s.handleUnitChange(...c)),class:"unit-select"},[(u(!0),h(O,null,N(s.availableUnits,c=>(u(),h("option",{key:c,value:c},f(c),9,El))),128))],40,Sl)])}const yl=C(gl,[["render",bl],["__scopeId","data-v-89956fa3"]]),Ol={name:"CustomCSSEditor",components:{AppIcon:x,AppSelect:Ne,ColorPicker:ml,UnitInput:yl,StepLivePreview:ue},props:{previewStep:{type:Object,default:null},characters:{type:Object,default:()=>({})},projectTitle:{type:String,default:""},baseTheme:{type:Object,default:()=>({})},saving:{type:Boolean,default:!1},initialCSS:{type:Object,default:()=>({})}},data(){return{currentSection:"easy",advanced:!1,previewWithoutCSS:!1,palettes:ve,sections:[{id:"dialog",name:"대사 박스",icon:"chat"},{id:"character",name:"캐릭터",icon:"user"},{id:"controls",name:"컨트롤",icon:"adjust"},{id:"overlay",name:"오버레이",icon:"device"},{id:"global",name:"전역",icon:"globe"},{id:"code",name:"CSS 코드",icon:"edit"}],cssVars:this.getDefaultCSSVars(),cssCodeText:"",userCustomCSS:""}},watch:{initialCSS:{deep:!0,handler(o){this.loadCustomCSS(o)}}},computed:{currentCSSFingerprint(){return ie(this.userCustomCSS)},savedCSSFingerprint(){return ie(this.initialCSS?.userCustomCSS||"")},hasUserCustomCSS(){return!!this.userCustomCSS.trim()&&!Te(this.userCustomCSS,this.currentCSSFingerprint)},isDirty(){const o=this.initialCSS?.cssVars||this.initialCSS||{};return Object.keys(this.cssVars).some(e=>this.cssVars[e]!==(o[e]||""))||this.currentCSSFingerprint!==this.savedCSSFingerprint}},methods:{paletteValues:Re,matchesPalette(o){return Object.entries(this.paletteValues(o)).every(([e,i])=>this.cssVars[e]===i)},choosePalette(o){Object.assign(this.cssVars,this.paletteValues(o)),this.applyPreview()},loadCustomCSS(o){const e=o?.cssVars||Object.fromEntries(Object.entries(o||{}).filter(([i])=>i!=="userCustomCSS"));this.cssVars={...this.getDefaultCSSVars(),...e},this.userCustomCSS=o?.userCustomCSS||"",this.applyPreview()},getDefaultCSSVars(){return{dialogBackground:"",dialogBorderColor:"",dialogBorderWidth:"",dialogTextColor:"",dialogNameFontSize:"",dialogTextFontSize:"",dialogPadding:"",dialogBorderRadius:"",dialogMinHeight:"",dialogLineHeight:"",characterMaxHeight:"",characterMaxWidth:"",characterInactiveOpacity:"",characterFrame:"",characterBorderRadius:"",characterBorderWidth:"",characterTransition:"",controlsBackground:"",controlsBorderColor:"",controlsButtonColor:"",controlsButtonHoverColor:"",controlsButtonBg:"",controlsButtonHoverBg:"",controlsProgressColor:"",controlsProgressBg:"",controlsButtonSize:"",controlsPrimaryButtonSize:"",controlsBorderRadius:"",overlayBackground:"",overlayBlur:"",overlayContentBackground:"",overlayTextColor:"",overlayBorderRadius:"",overlayPadding:"",overlayMaxWidth:"",globalBackground:"",globalTextColor:"",globalFontFamily:"",globalLineHeight:"",globalBackgroundImage:"",globalBackgroundSize:""}},applyPreview(){this.updateCSSCodeText(),this.injectCustomStyleTag(),this.$refs.livePreview?.$refs.player&&this.$refs.livePreview?.$refs.player.$forceUpdate()},injectCustomStyleTag(){this.$refs.livePreview?.$refs.player?.applyCustomCSS?.({cssVars:this.cssVars,userCustomCSS:this.previewWithoutCSS?"":this.userCustomCSS})},generateCSSVariableRules(){return Se(this.cssVars)},updateCSSCodeText(){const o=this.generateCSSFile();this.cssCodeText=o+this.userCustomCSS},onCodeEdit(){},syncFromCode(){try{const o=this.cssCodeText,e="/* USER CUSTOM CSS - Add your styles below */",i=o.indexOf(e);let a=o,n=o;if(i!==-1&&(a=o.substring(0,i+e.length),n=o.substring(i+e.length).trim().replace(/^\/\* =+ \*\/\s*/,""),!/--custom-[\w-]+\s*:/.test(a))){const s=a.replace(/\/\*[\s\S]*?\*\//g,"").trim();s&&(n=s+`
`+n)}this.cssVars=this.getDefaultCSSVars(),this.parseCSSFile(a),this.userCustomCSS=n?`
`+n:"",this.applyPreview(),this.injectCustomStyleTag(),this.$toast("CSS 코드를 설정 화면에 반영했어요","success")}catch(o){this.$toast("CSS 코드를 읽지 못했어요. 형식을 확인해 주세요","error"),console.error(o)}},async copyCodeToClipboard(){try{await navigator.clipboard.writeText(this.cssCodeText),this.$toast("CSS 코드를 복사했어요","success")}catch(o){this.$toast("복사하지 못했어요. 코드를 직접 선택해 복사해 주세요","error"),console.error(o)}},resetToDefault(){confirm("CSS를 기본값으로 초기화하시겠습니까?")&&(this.cssVars=this.getDefaultCSSVars(),this.userCustomCSS="",this.applyPreview())},exportCSS(){const o=this.cssCodeText,e=new Blob([o],{type:"text/css"}),i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=`vnlog-custom-${Date.now()}.css`,a.click(),URL.revokeObjectURL(i)},generateCSSFile(){return Ie(this.cssVars)+`
`+this.generateCSSVariableRules()+`

/* ======================================== */
/* USER CUSTOM CSS - Add your styles below */
/* ======================================== */
`},importCSS(){this.$refs.fileInput.click()},handleFileImport(o){const e=o.target.files[0];if(!e)return;const i=new FileReader;i.onload=a=>{try{const n=a.target.result,s="/* USER CUSTOM CSS - Add your styles below */",c=n.indexOf(s);let m=n,d=n;if(c!==-1&&(m=n.substring(0,c+s.length),d=n.substring(c+s.length).trim().replace(/^\/\* =+ \*\/\s*/,""),!/--custom-[\w-]+\s*:/.test(m))){const r=m.replace(/\/\*[\s\S]*?\*\//g,"").trim();r&&(d=r+`
`+d)}this.cssVars=this.getDefaultCSSVars(),this.parseCSSFile(m),this.userCustomCSS=d?`
`+d:"",this.updateCSSCodeText(),this.applyPreview(),this.$toast("CSS를 불러왔어요","success")}catch(n){this.$toast("CSS 파일을 읽지 못했어요. 파일이 손상되지 않았는지 확인해 주세요","error"),console.error(n)}},i.readAsText(e),o.target.value=""},parseCSSFile(o){const e=o.split(`
`);for(const i of e){const a=i.trim();if(a.startsWith("--custom-")){const n=a.match(/^--custom-([^:]+):\s*(.*?)\s*;?\s*$/);if(n){const s=n[1].trim(),c=n[2].trim(),m=this.cssToCamelCase(s);this.cssVars.hasOwnProperty(m)&&(this.cssVars[m]=c)}}}this.cssVars},cssToCamelCase(o){return{"dialog-bg":"dialogBackground","dialog-border":"dialogBorderColor","dialog-text":"dialogTextColor","dialog-border-width":"dialogBorderWidth","dialog-name-size":"dialogNameFontSize","dialog-text-size":"dialogTextFontSize","dialog-padding":"dialogPadding","dialog-radius":"dialogBorderRadius","dialog-min-height":"dialogMinHeight","dialog-line-height":"dialogLineHeight","character-max-height":"characterMaxHeight","character-max-width":"characterMaxWidth","character-inactive-opacity":"characterInactiveOpacity","character-frame":"characterFrame","character-border-radius":"characterBorderRadius","character-border-width":"characterBorderWidth","character-transition":"characterTransition","controls-bg":"controlsBackground","controls-border":"controlsBorderColor","controls-button":"controlsButtonColor","controls-button-hover":"controlsButtonHoverColor","controls-button-bg":"controlsButtonBg","controls-button-hover-bg":"controlsButtonHoverBg","controls-progress":"controlsProgressColor","controls-progress-bg":"controlsProgressBg","controls-button-size":"controlsButtonSize","controls-primary-button-size":"controlsPrimaryButtonSize","controls-border-radius":"controlsBorderRadius","overlay-bg":"overlayBackground","overlay-blur":"overlayBlur","overlay-content-bg":"overlayContentBackground","overlay-text":"overlayTextColor","overlay-radius":"overlayBorderRadius","overlay-padding":"overlayPadding","overlay-max-width":"overlayMaxWidth","global-bg":"globalBackground","global-background-image":"globalBackgroundImage","global-background-size":"globalBackgroundSize","global-text":"globalTextColor","global-font":"globalFontFamily","global-line-height":"globalLineHeight"}[o]||o},applyAndSave(){this.$emit("save",{cssVars:{...this.cssVars},userCustomCSS:this.userCustomCSS})}},mounted(){this.loadCustomCSS(this.initialCSS)}},Rl={class:"custom-css-editor"},Nl={class:"editor-header"},vl={class:"editor-actions"},Al={class:"save-status",role:"status"},wl=["disabled"],Cl=["disabled"],Ll={class:"editor-body"},Hl={class:"appearance-mode"},Dl=["aria-pressed"],Ul=["aria-pressed"],kl={key:0,class:"section-tabs"},Fl=["onClick"],Pl={class:"editor-content"},xl={class:"css-edit-area"},Vl={key:0,class:"css-section easy-settings"},Ml={class:"palette-options"},Wl=["aria-pressed","onClick"],Bl={class:"css-field"},Yl=["value"],Gl={class:"css-field"},_l=["value"],zl={class:"css-field"},jl=["value"],Jl={key:1,class:"custom-css-notice"},Kl={key:2,class:"css-section"},ql={class:"css-field"},Xl={class:"css-field"},Zl={class:"css-field"},Ql={class:"css-field"},$l={class:"css-field"},ed={class:"css-field"},td={class:"css-field"},nd={class:"css-field"},od={class:"css-field"},sd={class:"css-field"},id={key:3,class:"css-section"},rd={class:"css-field"},ad={class:"css-field"},ld={class:"css-field"},dd={class:"css-field"},cd={key:0,class:"css-field"},ud={key:1,class:"css-field"},hd={class:"css-field"},pd={key:4,class:"css-section"},fd={class:"css-field"},md={class:"css-field"},gd={class:"css-field"},Td={class:"css-field"},Id={class:"css-field"},Sd={class:"css-field"},Ed={class:"css-field"},bd={class:"css-field"},yd={class:"css-field"},Od={class:"css-field"},Rd={class:"css-field"},Nd={key:5,class:"css-section"},vd={class:"css-field"},Ad={class:"css-field"},wd={class:"css-field"},Cd={class:"css-field"},Ld={class:"css-field"},Hd={class:"css-field"},Dd={class:"css-field"},Ud={key:6,class:"css-section"},kd={class:"css-field"},Fd={class:"css-field"},Pd={class:"css-field"},xd={class:"css-field"},Vd={class:"css-field"},Md={class:"css-field"},Wd={key:7,class:"css-section"},Bd={class:"css-code-editor"},Yd={class:"code-header"},Gd={class:"code-actions"},_d={class:"code-hint"};function zd(o,e,i,a,n,s){const c=R("AppIcon"),m=R("StepLivePreview"),d=R("AppSelect"),r=R("ColorPicker"),S=R("UnitInput");return u(),h("div",Rl,[t("div",Nl,[t("h3",null,[p(c,{name:"palette",size:20}),e[64]||(e[64]=I(" 플레이어 꾸미기 ",-1))]),e[65]||(e[65]=t("p",{class:"editor-description"}," 테마와 글자를 고르고 미리보기로 확인하세요. 저장하면 이 로그와 내보내기에 함께 적용돼요. ",-1))]),p(m,{ref:"livePreview",step:i.previewStep,characters:i.characters,"base-theme":i.baseTheme,title:i.projectTitle,label:"현재 장면 꾸미기","custom-c-s-s":{cssVars:n.cssVars,userCustomCSS:n.previewWithoutCSS?"":n.userCustomCSS}},null,8,["step","characters","base-theme","title","custom-c-s-s"]),t("div",vl,[t("button",{onClick:e[0]||(e[0]=(...l)=>s.resetToDefault&&s.resetToDefault(...l)),class:"btn-reset"},[p(c,{name:"refresh",size:16}),e[66]||(e[66]=I(" 기본값으로 초기화 ",-1))]),n.advanced?(u(),h("button",{key:0,onClick:e[1]||(e[1]=(...l)=>s.exportCSS&&s.exportCSS(...l)),class:"btn-export"},[p(c,{name:"save",size:16}),e[67]||(e[67]=I(" CSS 내보내기 ",-1))])):g("",!0),n.advanced?(u(),h("button",{key:1,onClick:e[2]||(e[2]=(...l)=>s.importCSS&&s.importCSS(...l)),class:"btn-import"},[p(c,{name:"folder",size:16}),e[68]||(e[68]=I(" CSS 불러오기 ",-1))])):g("",!0),t("span",Al,f(i.saving?"저장 중…":s.isDirty?"아직 저장하지 않은 변경이 있어요":"저장된 설정과 같아요"),1),t("button",{onClick:e[3]||(e[3]=l=>s.loadCustomCSS(i.initialCSS)),disabled:!s.isDirty||i.saving,class:"btn-reset"},"변경 취소",8,wl),t("button",{onClick:e[4]||(e[4]=(...l)=>s.applyAndSave&&s.applyAndSave(...l)),disabled:!s.isDirty||i.saving,class:"btn-save"},[p(c,{name:"check",size:16}),e[69]||(e[69]=I(" 꾸미기 저장 ",-1))],8,Cl)]),t("div",Ll,[t("div",Hl,[t("button",{"aria-pressed":!n.advanced,onClick:e[5]||(e[5]=l=>{n.advanced=!1,n.currentSection="easy"})},"간단 설정",8,Dl),t("button",{"aria-pressed":n.advanced,onClick:e[6]||(e[6]=l=>{n.advanced=!0,n.currentSection="dialog"})},"세부 조정 · CSS",8,Ul)]),n.advanced?(u(),h("div",kl,[(u(!0),h(O,null,N(n.sections,l=>(u(),h("button",{key:l.id,class:v(["section-tab",{active:n.currentSection===l.id}]),onClick:w=>n.currentSection=l.id},[p(c,{name:l.icon,size:16},null,8,["name"]),I(" "+f(l.name),1)],10,Fl))),128))])):g("",!0),t("div",Pl,[t("div",xl,[n.advanced?g("",!0):(u(),h("div",Vl,[e[85]||(e[85]=t("h4",null,"테마",-1)),t("div",Ml,[(u(!0),h(O,null,N(n.palettes,l=>(u(),h("button",{key:l.name,"aria-pressed":s.matchesPalette(l),onClick:w=>s.choosePalette(l)},[t("span",{class:"palette-swatch",style:U({background:l.bg,color:l.text}),"aria-hidden":"true"},"가",4),I(f(l.name),1)],8,Wl))),128))]),e[86]||(e[86]=t("p",{class:"field-help"},"배경과 대사창, 재생 버튼의 색을 함께 바꿔요.",-1)),t("div",Bl,[e[74]||(e[74]=t("label",{for:"appearance-font"},"글꼴",-1)),p(d,{id:"appearance-font",modelValue:n.cssVars.globalFontFamily,"onUpdate:modelValue":e[7]||(e[7]=l=>n.cssVars.globalFontFamily=l),onChange:s.applyPreview},{default:j(()=>[["","Pretendard","NanumSquare","Nanum Myeongjo"].includes(n.cssVars.globalFontFamily)?g("",!0):(u(),h("option",{key:0,value:n.cssVars.globalFontFamily},"직접 정한 글꼴",8,Yl)),e[70]||(e[70]=t("option",{value:""},"기존 글꼴 유지",-1)),e[71]||(e[71]=t("option",{value:"Pretendard"},"프리텐다드 · 고딕",-1)),e[72]||(e[72]=t("option",{value:"NanumSquare"},"나눔스퀘어 · 고딕",-1)),e[73]||(e[73]=t("option",{value:"Nanum Myeongjo"},"나눔명조 · 명조",-1))]),_:1},8,["modelValue","onChange"])]),t("div",Gl,[e[79]||(e[79]=t("label",{for:"appearance-size"},"대사 글자 크기",-1)),p(d,{id:"appearance-size",modelValue:n.cssVars.dialogTextFontSize,"onUpdate:modelValue":e[8]||(e[8]=l=>n.cssVars.dialogTextFontSize=l),onChange:s.applyPreview},{default:j(()=>[["","16px","20px","24px"].includes(n.cssVars.dialogTextFontSize)?g("",!0):(u(),h("option",{key:0,value:n.cssVars.dialogTextFontSize},"직접 정한 크기",8,_l)),e[75]||(e[75]=t("option",{value:""},"기존 크기 유지",-1)),e[76]||(e[76]=t("option",{value:"16px"},"작게",-1)),e[77]||(e[77]=t("option",{value:"20px"},"보통",-1)),e[78]||(e[78]=t("option",{value:"24px"},"크게",-1))]),_:1},8,["modelValue","onChange"])]),t("div",zl,[e[84]||(e[84]=t("label",{for:"appearance-spacing"},"대사창 여백",-1)),p(d,{id:"appearance-spacing",modelValue:n.cssVars.dialogPadding,"onUpdate:modelValue":e[9]||(e[9]=l=>n.cssVars.dialogPadding=l),onChange:s.applyPreview},{default:j(()=>[["","16px","24px","32px"].includes(n.cssVars.dialogPadding)?g("",!0):(u(),h("option",{key:0,value:n.cssVars.dialogPadding},"직접 정한 여백",8,jl)),e[80]||(e[80]=t("option",{value:""},"기존 여백 유지",-1)),e[81]||(e[81]=t("option",{value:"16px"},"아담하게",-1)),e[82]||(e[82]=t("option",{value:"24px"},"보통",-1)),e[83]||(e[83]=t("option",{value:"32px"},"넉넉하게",-1))]),_:1},8,["modelValue","onChange"])])])),s.hasUserCustomCSS?(u(),h("div",Jl,[e[88]||(e[88]=t("p",null,"직접 작성한 CSS가 있어요. 선택한 색이나 크기보다 우선할 수 있어요.",-1)),t("label",null,[T(t("input",{type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=l=>n.previewWithoutCSS=l)},null,512),[[L,n.previewWithoutCSS]]),e[87]||(e[87]=I(" 미리보기에서만 직접 CSS 끄기",-1))])])):g("",!0),n.currentSection==="dialog"?(u(),h("div",Kl,[e[99]||(e[99]=t("h4",null,"대사창",-1)),t("div",ql,[e[89]||(e[89]=t("label",null,"배경색",-1)),p(r,{modelValue:n.cssVars.dialogBackground,"onUpdate:modelValue":[e[11]||(e[11]=l=>n.cssVars.dialogBackground=l),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Xl,[e[90]||(e[90]=t("label",null,"테두리 색상",-1)),p(r,{modelValue:n.cssVars.dialogBorderColor,"onUpdate:modelValue":[e[12]||(e[12]=l=>n.cssVars.dialogBorderColor=l),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Zl,[e[91]||(e[91]=t("label",null,"테두리 두께",-1)),p(S,{modelValue:n.cssVars.dialogBorderWidth,"onUpdate:modelValue":[e[13]||(e[13]=l=>n.cssVars.dialogBorderWidth=l),s.applyPreview],units:["px"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Ql,[e[92]||(e[92]=t("label",null,"텍스트 색상",-1)),p(r,{modelValue:n.cssVars.dialogTextColor,"onUpdate:modelValue":[e[14]||(e[14]=l=>n.cssVars.dialogTextColor=l),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",$l,[e[93]||(e[93]=t("label",null,"캐릭터 이름 글꼴 크기",-1)),p(S,{modelValue:n.cssVars.dialogNameFontSize,"onUpdate:modelValue":[e[15]||(e[15]=l=>n.cssVars.dialogNameFontSize=l),s.applyPreview],units:["px","rem","em"],step:.1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",ed,[e[94]||(e[94]=t("label",null,"대사 글꼴 크기",-1)),p(S,{modelValue:n.cssVars.dialogTextFontSize,"onUpdate:modelValue":[e[16]||(e[16]=l=>n.cssVars.dialogTextFontSize=l),s.applyPreview],units:["px","rem","em"],step:.1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",td,[e[95]||(e[95]=t("label",null,"안쪽 여백",-1)),p(S,{modelValue:n.cssVars.dialogPadding,"onUpdate:modelValue":[e[17]||(e[17]=l=>n.cssVars.dialogPadding=l),s.applyPreview],units:["px","rem","em"],step:.1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",nd,[e[96]||(e[96]=t("label",null,"모서리 둥글기",-1)),p(S,{modelValue:n.cssVars.dialogBorderRadius,"onUpdate:modelValue":[e[18]||(e[18]=l=>n.cssVars.dialogBorderRadius=l),s.applyPreview],units:["px","rem","%"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",od,[e[97]||(e[97]=t("label",null,"최소 높이",-1)),p(S,{modelValue:n.cssVars.dialogMinHeight,"onUpdate:modelValue":[e[19]||(e[19]=l=>n.cssVars.dialogMinHeight=l),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",sd,[e[98]||(e[98]=t("label",null,"줄 간격",-1)),T(t("input",{type:"text","onUpdate:modelValue":e[20]||(e[20]=l=>n.cssVars.dialogLineHeight=l),onInput:e[21]||(e[21]=(...l)=>s.applyPreview&&s.applyPreview(...l)),placeholder:"1.8"},null,544),[[E,n.cssVars.dialogLineHeight]])])])):g("",!0),n.currentSection==="character"?(u(),h("div",id,[e[107]||(e[107]=t("h4",null,"등장인물",-1)),t("div",rd,[e[100]||(e[100]=t("label",null,"캐릭터 이미지 최대 높이",-1)),p(S,{modelValue:n.cssVars.characterMaxHeight,"onUpdate:modelValue":[e[22]||(e[22]=l=>n.cssVars.characterMaxHeight=l),s.applyPreview],units:["vh","px","%"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",ad,[e[101]||(e[101]=t("label",null,"캐릭터 이미지 최대 너비",-1)),p(S,{modelValue:n.cssVars.characterMaxWidth,"onUpdate:modelValue":[e[23]||(e[23]=l=>n.cssVars.characterMaxWidth=l),s.applyPreview],units:["px","%","vw"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",ld,[e[102]||(e[102]=t("label",null,"캐릭터 투명도 (비활성)",-1)),T(t("input",{type:"range","onUpdate:modelValue":e[24]||(e[24]=l=>n.cssVars.characterInactiveOpacity=l),onInput:e[25]||(e[25]=(...l)=>s.applyPreview&&s.applyPreview(...l)),min:"0",max:"1",step:"0.05"},null,544),[[E,n.cssVars.characterInactiveOpacity]]),t("span",null,f(n.cssVars.characterInactiveOpacity),1)]),t("div",dd,[t("label",null,[T(t("input",{type:"checkbox","onUpdate:modelValue":e[26]||(e[26]=l=>n.cssVars.characterFrame=l),"true-value":"custom","false-value":"",onChange:e[27]||(e[27]=(...l)=>s.applyPreview&&s.applyPreview(...l))},null,544),[[L,n.cssVars.characterFrame]]),e[103]||(e[103]=I(" 이미지 테두리 사용",-1))])]),n.cssVars.characterFrame==="custom"?(u(),h("div",cd,[e[104]||(e[104]=t("label",null,"모서리 둥글기",-1)),p(S,{modelValue:n.cssVars.characterBorderRadius,"onUpdate:modelValue":[e[28]||(e[28]=l=>n.cssVars.characterBorderRadius=l),s.applyPreview],units:["px","rem","%"],step:1},null,8,["modelValue","onUpdate:modelValue"])])):g("",!0),n.cssVars.characterFrame==="custom"?(u(),h("div",ud,[e[105]||(e[105]=t("label",null,"테두리 두께",-1)),p(S,{modelValue:n.cssVars.characterBorderWidth,"onUpdate:modelValue":[e[29]||(e[29]=l=>n.cssVars.characterBorderWidth=l),s.applyPreview],units:["px"],step:1},null,8,["modelValue","onUpdate:modelValue"])])):g("",!0),t("div",hd,[e[106]||(e[106]=t("label",null,"캐릭터 전환 시간",-1)),p(S,{modelValue:n.cssVars.characterTransition,"onUpdate:modelValue":[e[30]||(e[30]=l=>n.cssVars.characterTransition=l),s.applyPreview],units:["s","ms"],step:.1},null,8,["modelValue","onUpdate:modelValue"])])])):g("",!0),n.currentSection==="controls"?(u(),h("div",pd,[e[119]||(e[119]=t("h4",null,"재생 버튼",-1)),t("div",fd,[e[108]||(e[108]=t("label",null,"컨트롤 배경색",-1)),p(r,{modelValue:n.cssVars.controlsBackground,"onUpdate:modelValue":[e[31]||(e[31]=l=>n.cssVars.controlsBackground=l),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",md,[e[109]||(e[109]=t("label",null,"컨트롤 테두리 색상",-1)),p(r,{modelValue:n.cssVars.controlsBorderColor,"onUpdate:modelValue":[e[32]||(e[32]=l=>n.cssVars.controlsBorderColor=l),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",gd,[e[110]||(e[110]=t("label",null,"버튼 배경색",-1)),p(r,{modelValue:n.cssVars.controlsButtonBg,"onUpdate:modelValue":[e[33]||(e[33]=l=>n.cssVars.controlsButtonBg=l),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Td,[e[111]||(e[111]=t("label",null,"버튼 호버 배경색",-1)),p(r,{modelValue:n.cssVars.controlsButtonHoverBg,"onUpdate:modelValue":[e[34]||(e[34]=l=>n.cssVars.controlsButtonHoverBg=l),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Id,[e[112]||(e[112]=t("label",null,"버튼 아이콘 색상",-1)),p(r,{modelValue:n.cssVars.controlsButtonColor,"onUpdate:modelValue":[e[35]||(e[35]=l=>n.cssVars.controlsButtonColor=l),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Sd,[e[113]||(e[113]=t("label",null,"버튼 호버 아이콘 색상",-1)),p(r,{modelValue:n.cssVars.controlsButtonHoverColor,"onUpdate:modelValue":[e[36]||(e[36]=l=>n.cssVars.controlsButtonHoverColor=l),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Ed,[e[114]||(e[114]=t("label",null,"진행 바 색상",-1)),p(r,{modelValue:n.cssVars.controlsProgressColor,"onUpdate:modelValue":[e[37]||(e[37]=l=>n.cssVars.controlsProgressColor=l),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",bd,[e[115]||(e[115]=t("label",null,"진행 바 배경색",-1)),p(r,{modelValue:n.cssVars.controlsProgressBg,"onUpdate:modelValue":[e[38]||(e[38]=l=>n.cssVars.controlsProgressBg=l),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",yd,[e[116]||(e[116]=t("label",null,"버튼 크기",-1)),p(S,{modelValue:n.cssVars.controlsButtonSize,"onUpdate:modelValue":[e[39]||(e[39]=l=>n.cssVars.controlsButtonSize=l),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Od,[e[117]||(e[117]=t("label",null,"주 버튼 크기",-1)),p(S,{modelValue:n.cssVars.controlsPrimaryButtonSize,"onUpdate:modelValue":[e[40]||(e[40]=l=>n.cssVars.controlsPrimaryButtonSize=l),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Rd,[e[118]||(e[118]=t("label",null,"버튼 모서리 둥글기",-1)),p(S,{modelValue:n.cssVars.controlsBorderRadius,"onUpdate:modelValue":[e[41]||(e[41]=l=>n.cssVars.controlsBorderRadius=l),s.applyPreview],units:["px","rem","%"],step:1},null,8,["modelValue","onUpdate:modelValue"])])])):g("",!0),n.currentSection==="overlay"?(u(),h("div",Nd,[e[127]||(e[127]=t("h4",null,"오버레이 (다이스, 콤보, 씬 설명)",-1)),t("div",vd,[e[120]||(e[120]=t("label",null,"오버레이 배경색",-1)),p(r,{modelValue:n.cssVars.overlayBackground,"onUpdate:modelValue":[e[42]||(e[42]=l=>n.cssVars.overlayBackground=l),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Ad,[e[121]||(e[121]=t("label",null,"오버레이 블러",-1)),p(S,{modelValue:n.cssVars.overlayBlur,"onUpdate:modelValue":[e[43]||(e[43]=l=>n.cssVars.overlayBlur=l),s.applyPreview],units:["px"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",wd,[e[122]||(e[122]=t("label",null,"오버레이 콘텐츠 배경",-1)),p(r,{modelValue:n.cssVars.overlayContentBackground,"onUpdate:modelValue":[e[44]||(e[44]=l=>n.cssVars.overlayContentBackground=l),s.applyPreview],"supports-alpha":!0},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Cd,[e[123]||(e[123]=t("label",null,"오버레이 텍스트 색상",-1)),p(r,{modelValue:n.cssVars.overlayTextColor,"onUpdate:modelValue":[e[45]||(e[45]=l=>n.cssVars.overlayTextColor=l),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Ld,[e[124]||(e[124]=t("label",null,"콘텐츠 모서리 둥글기",-1)),p(S,{modelValue:n.cssVars.overlayBorderRadius,"onUpdate:modelValue":[e[46]||(e[46]=l=>n.cssVars.overlayBorderRadius=l),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Hd,[e[125]||(e[125]=t("label",null,"콘텐츠 안쪽 여백",-1)),p(S,{modelValue:n.cssVars.overlayPadding,"onUpdate:modelValue":[e[47]||(e[47]=l=>n.cssVars.overlayPadding=l),s.applyPreview],units:["px","rem"],step:1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Dd,[e[126]||(e[126]=t("label",null,"콘텐츠 최대 너비",-1)),p(S,{modelValue:n.cssVars.overlayMaxWidth,"onUpdate:modelValue":[e[48]||(e[48]=l=>n.cssVars.overlayMaxWidth=l),s.applyPreview],units:["px","%","vw"],step:10},null,8,["modelValue","onUpdate:modelValue"])])])):g("",!0),n.currentSection==="global"?(u(),h("div",Ud,[e[136]||(e[136]=t("h4",null,"전역 스타일",-1)),t("div",kd,[e[128]||(e[128]=t("label",null,"메인 배경색",-1)),p(r,{modelValue:n.cssVars.globalBackground,"onUpdate:modelValue":[e[49]||(e[49]=l=>n.cssVars.globalBackground=l),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Fd,[e[129]||(e[129]=t("label",null,"기본 텍스트 색상",-1)),p(r,{modelValue:n.cssVars.globalTextColor,"onUpdate:modelValue":[e[50]||(e[50]=l=>n.cssVars.globalTextColor=l),s.applyPreview],"supports-alpha":!1},null,8,["modelValue","onUpdate:modelValue"])]),t("div",Pd,[e[131]||(e[131]=t("label",null,"폰트 패밀리",-1)),T(t("select",{"onUpdate:modelValue":e[51]||(e[51]=l=>n.cssVars.globalFontFamily=l),onChange:e[52]||(e[52]=(...l)=>s.applyPreview&&s.applyPreview(...l))},[...e[130]||(e[130]=[oe('<option value="" data-v-3f16e1f4>설정 안 함</option><option value="var(--font-pretendard)" data-v-3f16e1f4>Pretendard (기본)</option><option value="var(--font-nanum-square)" data-v-3f16e1f4>나눔스퀘어</option><option value="var(--font-nanum-myeongjo)" data-v-3f16e1f4>나눔명조</option><option value="var(--font-noto-serif)" data-v-3f16e1f4>Noto Serif KR</option>',5)])],544),[[V,n.cssVars.globalFontFamily]])]),t("div",xd,[e[132]||(e[132]=t("label",null,"기본 줄 간격",-1)),T(t("input",{type:"text","onUpdate:modelValue":e[53]||(e[53]=l=>n.cssVars.globalLineHeight=l),onInput:e[54]||(e[54]=(...l)=>s.applyPreview&&s.applyPreview(...l)),placeholder:"1.5"},null,544),[[E,n.cssVars.globalLineHeight]])]),t("div",Vd,[e[133]||(e[133]=t("label",null,"배경 이미지 URL",-1)),T(t("input",{type:"text","onUpdate:modelValue":e[55]||(e[55]=l=>n.cssVars.globalBackgroundImage=l),onInput:e[56]||(e[56]=(...l)=>s.applyPreview&&s.applyPreview(...l)),placeholder:"url(https://...)"},null,544),[[E,n.cssVars.globalBackgroundImage]])]),t("div",Md,[e[135]||(e[135]=t("label",null,"배경 이미지 크기",-1)),T(t("select",{"onUpdate:modelValue":e[57]||(e[57]=l=>n.cssVars.globalBackgroundSize=l),onChange:e[58]||(e[58]=(...l)=>s.applyPreview&&s.applyPreview(...l))},[...e[134]||(e[134]=[oe('<option value="" data-v-3f16e1f4>설정 안 함</option><option value="cover" data-v-3f16e1f4>덮기 (Cover)</option><option value="contain" data-v-3f16e1f4>맞추기 (Contain)</option><option value="auto" data-v-3f16e1f4>자동 (Auto)</option><option value="100% 100%" data-v-3f16e1f4>늘이기 (100% 100%)</option>',5)])],544),[[V,n.cssVars.globalBackgroundSize]])])])):g("",!0),n.currentSection==="code"?(u(),h("div",Wd,[e[141]||(e[141]=t("h4",null,"CSS 코드 직접 편집",-1)),t("div",Bd,[t("div",Yd,[e[139]||(e[139]=t("span",{class:"code-label"},"생성된 CSS 코드",-1)),t("div",Gd,[t("button",{onClick:e[59]||(e[59]=(...l)=>s.syncFromCode&&s.syncFromCode(...l)),class:"btn-sync",title:"코드에서 UI로 동기화"},[p(c,{name:"refresh",size:14}),e[137]||(e[137]=I(" 동기화 ",-1))]),t("button",{onClick:e[60]||(e[60]=(...l)=>s.copyCodeToClipboard&&s.copyCodeToClipboard(...l)),class:"btn-copy-code",title:"코드 복사"},[p(c,{name:"clipboard",size:14}),e[138]||(e[138]=I(" 복사 ",-1))])])]),T(t("textarea",{"onUpdate:modelValue":e[61]||(e[61]=l=>n.cssCodeText=l),class:"css-textarea",spellcheck:"false",onInput:e[62]||(e[62]=(...l)=>s.onCodeEdit&&s.onCodeEdit(...l))},null,544),[[E,n.cssCodeText]]),t("p",_d,[p(c,{name:"info",size:14}),e[140]||(e[140]=I(" 이 코드를 직접 수정한 후 '동기화' 버튼을 눌러 UI에 반영하세요. ",-1))])])])):g("",!0)])])]),t("input",{ref:"fileInput",type:"file",accept:".css",style:{display:"none"},onChange:e[63]||(e[63]=(...l)=>s.handleFileImport&&s.handleFileImport(...l))},null,544)])}const jd=C(Ol,[["render",zd],["__scopeId","data-v-3f16e1f4"]]),Jd=`VNLog — external software and assets

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
`,Kd=`VNLog
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
`,X=o=>String(o).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function ne(o){const e=JSON.parse(JSON.stringify(o));delete e.vnData.assetLibrary,delete e.vnData.deletedSteps;for(const i of e.vnData.scenes||[])for(const a of i.steps||[])delete a.rawText;return e}function qd(o,e,i){const a=ne(o),n=JSON.stringify(a).replace(/</g,"\\u003c").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"),s=X(`${Kd}

${Jd}`);return`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${X(a.vnData.title||"VNLog")}</title><style>${i.replace(/<\/style/gi,"<\\/style")}</style></head><body><div id="app"></div><template id="vnlog-license-notices">${s}</template><script id="vnlog-project" type="application/json">${n}<\/script><script>${e.replace(/<\/script/gi,"<\\/script")}<\/script></body></html>`}function Xd(o){return`<iframe title="VNLog 로그 플레이어" sandbox="allow-scripts" allow="autoplay; fullscreen" style="display:block;width:100%;height:720px;border:0" srcdoc="${X(o)}"></iframe>`}function Zd(o,e){const i=URL.createObjectURL(new Blob([o],{type:"text/html;charset=utf-8"})),a=document.createElement("a");a.href=i,a.download=`${K(e,"vnlog")}.html`,a.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Z(o){const e=[],i=(a,n=[])=>{if(!(!a||typeof a!="object"))for(const[s,c]of Object.entries(a))typeof c=="string"&&/^https?:\/\//i.test(c)&&(/^(avatarUrl|imageUrl|background|backgroundImage|sfx|sfxUrl|bgm|bgmUrl|url)$/.test(s)||n.includes("emotions"))?e.push({node:a,key:s,url:c}):c&&typeof c=="object"&&i(c,[...n,s])};return i(o),e}async function he(o,e=()=>{}){const i=ne(o),a=Z(i),n=[...new Set(a.map(d=>d.url))],s=new Map,c=[];let m=0;for(const[d,r]of n.entries()){const S=new AbortController,l=setTimeout(()=>S.abort(),15e3);try{const w=await fetch(r,{credentials:"omit",mode:"cors",signal:S.signal});if(!w.ok)throw new Error("download");const y=await w.blob();if(!/^(image|audio)\//.test(y.type)||y.size>15*1024*1024||m+y.size>100*1024*1024)throw new Error("size/type");const k=await new Promise((b,D)=>{const P=new FileReader;P.onload=()=>b(P.result),P.onerror=D,P.readAsDataURL(y)});m+=y.size,s.set(r,k)}catch{c.push(r)}finally{clearTimeout(l)}e(d+1,n.length)}return a.forEach(d=>{s.has(d.url)&&(d.node[d.key]=s.get(d.url))}),{project:i,failures:c}}async function de(o,e,i){const[{default:a},{default:n}]=await Promise.all([se(()=>import("./player-BhoC1NUL.js"),[]),se(()=>import("./style-an-zWUbu.js"),[])]),s=e?await he(o,i):{project:ne(o),failures:[]};return{...s,html:qd(s.project,a,n)}}const Qd={name:"ExportPanel",props:{mode:{type:String,default:"all"},previewStep:{type:Object,default:null}},components:{SplitExportControls:Oe,AppIcon:x,CustomCSSEditor:jd},setup(){return{logStore:W()}},data(){return{splitOptions:{mode:"single",count:1e3,points:[]},publicationMedia:!1,publicationBusy:!1,publicationStatus:"",showStyleEditor:!1,embedJsonUrl:"",embedAutoplay:!1,jsonIncludeImages:!0,embedCopied:!1,embedPreviewLoaded:!1,embedPreviewSrc:"",textExportIncludeDice:!0,textExportIncludeNarrator:!0,textExportIncludeSceneHeaders:!0,textExportCopied:!1}},computed:{exportItems(){return ae(this.logStore.vnData)},exportRanges(){try{return re(this.exportItems.length,this.splitOptions)}catch{return[]}},generatedTextExport(){return this.textForProject(this.logStore.vnData)},embedLinkStatus(){return He(this.embedJsonUrl)},validEmbedUrl(){return this.embedLinkStatus?.expired?"":me(this.embedJsonUrl.trim())},generatedEmbedCode(){if(!this.validEmbedUrl)return"<!-- JSON URL을 입력하세요 -->";const o=window.location.origin,e="/vnlog/",i=this.embedAutoplay?"&autoplay=true":"";return`<iframe src="${`${o}${e}embed?json=${encodeURIComponent(this.validEmbedUrl)}${i}`}" title="VNLog 로그 플레이어" width="100%" height="600" style="display:block;width:100%;max-width:100%;border:0" allow="autoplay; fullscreen" allowfullscreen></iframe>`},embedPreviewUrl(){if(!this.validEmbedUrl)return"";const o=window.location.origin,e="/vnlog/",i=this.embedAutoplay?"&autoplay=true":"";return`${o}${e}embed?json=${encodeURIComponent(this.validEmbedUrl)}${i}`},jsonExportBytes(){return this.logStore.vnData?new Blob([this.serializeExportJSON()]).size:0},jsonSizeText(){return le(this.jsonExportBytes)}},methods:{textForProject(o){const e=o?.scenes||[],i=[],a=o?.title;return a&&i.push(a,""),e.forEach((n,s)=>{this.textExportIncludeSceneHeaders&&i.push(`--- ${n.name||"씬 "+(s+1)} ---`,""),(n.steps||[]).forEach(c=>{const m=c.type==="system"||c.type==="narrator"||c.isSceneDescription;if(!(m&&!this.textExportIncludeNarrator)){if(m)i.push(c.text||"");else{const d=c.character?.name||"???";i.push(`${d}: ${c.text||""}`)}this.textExportIncludeDice&&c.hasDice&&(c.diceRolls||[]).forEach(d=>{const r=d.formula||d.text||"",S=d.result!=null?` → ${d.result}`:"";i.push(`  [🎲 ${r}${S}]`)}),i.push("")}})}),i.join(`
`).trim()},async exportPublication(o){if(!this.publicationBusy){if(!o&&this.exportRanges.length>1){await this.downloadBatch("html");return}this.publicationBusy=!0,this.publicationStatus="읽기용 파일을 만들고 있어요…";try{const e=JSON.parse(this.serializeExportJSON());e.vnData=this.logStore.vnData,e.theme=this.logStore.vnData.theme||null;const{html:i,project:a,failures:n}=await de(e,this.publicationMedia,(c,m)=>{this.publicationStatus=`이미지·음원 담는 중 ${c} / ${m}`});o?await navigator.clipboard.writeText(Xd(i)):Zd(i,e.vnData.title);const s=new Set(Z(a).map(c=>c.url)).size;this.publicationStatus=`${o?"본문 삽입 코드를 복사했어요":"HTML 파일을 내려받았어요"} · ${le(new Blob([i]).size)}${s?` · 외부 이미지·음원 ${s}개는 원래 주소로 연결돼요`:" · 대사와 플레이어가 파일에 포함됐어요"}${n.length?` (다운로드 실패 ${n.length}개)`:""}`}catch{this.publicationStatus=o?"복사하지 못했어요. HTML 파일로 내려받아 주세요.":"파일을 만들지 못했어요. 잠시 후 다시 시도해 주세요."}finally{this.publicationBusy=!1}}},async persistEdits(){const o=this.logStore.vnData;return o?.fileCode?await ce.saveFileData(o.fileCode,o):(console.warn("파일 식별자가 없어 편집 내용을 저장하지 못했습니다."),!1)},async handleSaveCustomCSS(o){this.logStore.vnData||(this.logStore.vnData={}),this.logStore.recordEdit("꾸미기 저장"),this.logStore.vnData.customCSS=o;try{const e=await this.persistEdits();this.$toast(e?"꾸미기를 저장했어요":"화면에 적용했지만 기기에 저장하지 못했어요. JSON으로 내보내 주세요",e?"success":"error")}catch{this.$toast("저장하지 못했어요. JSON으로 내보내 주세요","error")}finally{this.logStore.editInProgress=!1}},stripInlineImages(o){const e=JSON.parse(JSON.stringify(o)),i=a=>typeof a=="string"&&a.startsWith("data:");Object.values(e.characters||{}).forEach(a=>{!a||typeof a!="object"||(i(a.avatarUrl)&&(a.avatarUrl=null),a.emotions&&typeof a.emotions=="object"&&Object.keys(a.emotions).forEach(n=>{i(a.emotions[n])&&delete a.emotions[n]}))}),(e.scenes||[]).forEach(a=>{(a.steps||[]).forEach(n=>{n.character&&i(n.character.avatarUrl)&&(n.character.avatarUrl=null),n.effects&&i(n.effects.background)&&(n.effects.background="")})});for(const a of e.assetLibrary?.characters||[]){i(a.avatarUrl)&&(a.avatarUrl="");for(const n of Object.keys(a.emotions||{}))i(a.emotions[n])&&delete a.emotions[n]}e.assetLibrary?.images&&(e.assetLibrary.images=e.assetLibrary.images.filter(a=>!i(a.url)));for(const a of e.assetLibrary?.roomScenes||[]){for(const n of["backgroundUrl","representativeUrl","foregroundUrl"])i(a[n])&&(a[n]="");a.images&&(a.images=a.images.filter(n=>!i(n.url)))}return i(e.theme?.bgImageUrl)&&(e.theme.bgImageUrl=""),e},serializeExportJSON(){const o=this.logStore.vnData;if(!o)return"";const e=this.jsonIncludeImages?o:this.stripInlineImages(o),i={vnData:e,theme:e.theme||null,exportedAt:new Date().toISOString(),version:"1.0.0"};return JSON.stringify(i,null,2)},async downloadBatch(o){if(!this.publicationBusy){this.publicationBusy=!0,this.publicationStatus="분할 파일을 만들고 있어요…";try{const e=re(this.exportItems.length,this.splitOptions);let i=o==="json"?JSON.parse(this.serializeExportJSON()).vnData:this.logStore.vnData;i=JSON.parse(JSON.stringify(i));let a=[];if(o==="html"&&this.publicationMedia){const m=await he({vnData:i},(d,r)=>{this.publicationStatus=`이미지·음원 담는 중 ${d} / ${r}`});i=m.project.vnData,a=m.failures}const n=ae(i),s=[];for(const[m,d]of e.entries()){const r=Ae(i,n.slice(d.start,d.end),we(i.title,m,e.length),o==="json"&&m===0),S={vnData:r,theme:r.theme||null,exportedAt:new Date().toISOString(),version:"1.0.0"};let l;o==="html"?l=(await de(S,!1)).html:o==="json"?l=JSON.stringify(S,null,2):l=this.textForProject(r),s.push({name:Ce(i.title,m,e.length,o),content:l}),this.publicationStatus=`파일 만드는 중 ${m+1} / ${e.length}`}await Le(s,i.title);const c=o==="html"?new Set(Z({vnData:i}).map(m=>m.url)).size:0;this.publicationStatus=`${s.length}개 파일을 ZIP으로 내려받았어요.${c?` 외부 이미지·음원 ${c}개는 원래 주소로 연결돼요.`:""}${a.length?` (다운로드 실패 ${a.length}개)`:""}`,this.$toast(this.publicationStatus,"success")}catch(e){this.publicationStatus=e.message||"분할 파일을 만들지 못했어요. 다시 시도해 주세요.",this.$toast(this.publicationStatus,"error")}finally{this.publicationBusy=!1}}},exportJSON(){if(this.exportRanges.length>1)return this.downloadBatch("json");const o=this.logStore.vnData;if(!o){this.$toast("내보낼 데이터가 없어요. 로그를 먼저 불러와 주세요","error");return}const e=this.serializeExportJSON(),i=new Blob([e],{type:"application/json"}),a=URL.createObjectURL(i),n=document.createElement("a");n.href=a,n.download=`${K(o.title,"vnlog")}_edited.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)},async copyEmbedCode(){if(!this.validEmbedUrl){this.$toast("올바른 JSON 파일 주소를 먼저 입력해 주세요","error");return}try{await navigator.clipboard.writeText(this.generatedEmbedCode),this.embedCopied=!0,setTimeout(()=>{this.embedCopied=!1},2e3)}catch(o){console.error("클립보드 복사 실패:",o),this.$toast("복사하지 못했어요. 코드를 직접 선택해 복사해 주세요","error")}},downloadTextExport(){if(this.exportRanges.length>1)return this.downloadBatch("txt");const o=this.generatedTextExport;if(!o){this.$toast("내보낼 데이터가 없어요. 로그를 먼저 불러와 주세요","error");return}const e=new Blob([o],{type:"text/plain;charset=utf-8"}),i=URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=`${K(this.logStore.vnData?.title,"vnlog")}_text.txt`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},async copyTextExport(){try{await navigator.clipboard.writeText(this.generatedTextExport),this.textExportCopied=!0,setTimeout(()=>{this.textExportCopied=!1},2e3)}catch(o){console.error("클립보드 복사 실패:",o),this.$toast("복사하지 못했어요. 미리보기 텍스트를 직접 선택해 복사해 주세요","error")}}},watch:{embedPreviewUrl(o){if(this.embedPreviewLoaded=!1,clearTimeout(this._embedPreviewTimer),!o){this.embedPreviewSrc="";return}this._embedPreviewTimer=setTimeout(()=>{this.embedPreviewSrc=o},500)}},beforeUnmount(){clearTimeout(this._embedPreviewTimer)}},$d={key:0},ec={class:"export-options"},tc={key:0,class:"export-desc"},nc={class:"export-section publication-section"},oc={class:"option-item"},sc=["disabled"],ic={class:"publication-actions"},rc=["disabled"],ac=["disabled"],lc={class:"publication-status",role:"status"},dc={class:"export-section"},cc={class:"json-export-options"},uc={class:"option-item"},hc={class:"json-size-caption"},pc=["disabled"],fc={class:"export-section"},mc={class:"embed-step"},gc={class:"hosting-guide"},Tc={class:"hosting-option recommended"},Ic={class:"hosting-option warning"},Sc={class:"embed-step"},Ec={class:"embed-step"},bc={class:"option-item"},yc={class:"embed-step"},Oc={class:"code-preview"},Rc=["disabled"],Nc={key:0,class:"help-text-small",role:"alert"},vc={key:1,class:"help-text-small",role:"alert"},Ac={key:2,class:"embed-preview-section"},wc={class:"embed-preview-frame"},Cc={key:0,class:"preview-loading"},Lc=["src"],Hc={class:"help-text-small"},Dc={class:"export-section"},Uc={class:"text-export-options"},kc={class:"option-item"},Fc={class:"option-item"},Pc={class:"option-item"},xc={class:"text-export-preview"},Vc={class:"text-export-actions"},Mc=["disabled"];function Wc(o,e,i,a,n,s){const c=R("CustomCSSEditor"),m=R("SplitExportControls"),d=R("AppIcon");return u(),h("div",{class:v(["export-pane",{"appearance-workspace":i.mode==="appearance"}])},[T((u(),H(fe(i.mode==="appearance"?"section":"details"),{open:i.mode==="appearance",class:"export-section advanced-style",onToggle:e[0]||(e[0]=r=>n.showStyleEditor=n.showStyleEditor||r.target.open)},{default:j(()=>[i.mode!=="appearance"?(u(),h("summary",$d,"플레이어 꾸미기")):g("",!0),n.showStyleEditor||i.mode==="appearance"?(u(),H(c,{key:1,"base-theme":a.logStore.vnData.theme||{},"initial-c-s-s":a.logStore.vnData?.customCSS||{},saving:a.logStore.editInProgress,"preview-step":i.previewStep||a.logStore.currentStep,characters:a.logStore.vnData.characters||{},"project-title":a.logStore.vnData.title||"",onSave:s.handleSaveCustomCSS},null,8,["base-theme","initial-c-s-s","saving","preview-step","characters","project-title","onSave"])):g("",!0)]),_:1},40,["open"])),[[A,i.mode!=="export"]]),T(t("div",ec,[e[45]||(e[45]=t("h3",{class:"export-heading"},"파일로 저장하거나 공유하기",-1)),p(m,{id:"project-split",modelValue:n.splitOptions,"onUpdate:modelValue":e[1]||(e[1]=r=>n.splitOptions=r),items:s.exportItems,disabled:n.publicationBusy},null,8,["modelValue","items","disabled"]),n.splitOptions.mode!=="single"?(u(),h("p",tc,"파일 다운로드에 분할을 적용해요. 본문 삽입 코드와 텍스트 복사는 전체 로그를 담아요. 나눈 JSON의 삭제함은 첫 파일에 보관해요.")):g("",!0),t("section",nc,[e[17]||(e[17]=t("h4",null,"읽기용 HTML 저장",-1)),e[18]||(e[18]=t("p",{class:"export-desc"},"로그와 플레이어를 하나의 HTML 파일로 저장해요. 별도의 JSON 주소 없이 열 수 있어요.",-1)),t("label",oc,[T(t("input",{"onUpdate:modelValue":e[2]||(e[2]=r=>n.publicationMedia=r),type:"checkbox",disabled:n.publicationBusy},null,8,sc),[[L,n.publicationMedia]]),e[16]||(e[16]=t("span",null,"외부 이미지·음원도 내려받아 담기",-1))]),e[19]||(e[19]=t("p",{class:"help-text-small"},"체크하면 각 이미지·음원 주소로 다운로드를 요청해요. 사용자 CSS의 외부 파일·웹폰트는 포함되지 않아요.",-1)),t("div",ic,[t("button",{class:"export-action-button",disabled:n.publicationBusy||!s.exportRanges.length,onClick:e[3]||(e[3]=r=>s.exportPublication(!1))},f(s.exportRanges.length>1?`읽기용 HTML ${s.exportRanges.length}개 · ZIP 다운로드`:"읽기용 HTML 다운로드"),9,rc),t("button",{class:"export-action-button secondary",disabled:n.publicationBusy,onClick:e[4]||(e[4]=r=>s.exportPublication(!0))},"본문 삽입 코드 복사",8,ac)]),t("p",lc,f(n.publicationStatus),1),e[20]||(e[20]=t("details",{class:"publication-guide"},[t("summary",null,"어디에 게시하나요?"),t("p",null,"HTML 파일을 GitHub Pages 같은 정적 호스팅에 올려 주소를 공유하세요. 블로그의 HTML 편집에는 본문 삽입 코드를 붙여 넣을 수 있어요. 블로그가 iframe·srcdoc를 제거하거나 글 크기를 제한하면 정적 호스팅을 이용해 주세요."),t("p",null,"이미지를 담지 않거나 다운로드에 실패한 경우 원래 주소를 사용해요. 게시 전 저장한 HTML을 열어 확인해 주세요. 작업을 이어갈 때는 아래 JSON을 보관하세요.")],-1))]),t("div",dc,[t("h4",null,[p(d,{name:"upload",size:16}),e[21]||(e[21]=I(" 작업 파일 보관 ",-1))]),e[23]||(e[23]=t("p",{class:"export-desc"},"대사·연출·테마를 JSON 파일로 보관해요. 삭제함도 함께 보관해요. 홈에서 다시 열어 편집을 이어갈 수 있어요.",-1)),t("div",cc,[t("label",uc,[T(t("input",{"onUpdate:modelValue":e[5]||(e[5]=r=>n.jsonIncludeImages=r),type:"checkbox"},null,512),[[L,n.jsonIncludeImages]]),e[22]||(e[22]=t("span",null,"이미지(스탠딩·표정) 포함",-1))]),t("span",hc,"파일 크기 ~"+f(s.jsonSizeText),1)]),t("button",{onClick:e[6]||(e[6]=(...r)=>s.exportJSON&&s.exportJSON(...r)),class:"export-action-button",disabled:n.publicationBusy||!s.exportRanges.length},[p(d,{name:"save",size:16}),I(" "+f(s.exportRanges.length>1?`JSON ${s.exportRanges.length}개 · ZIP 다운로드`:"JSON 다운로드"),1)],8,pc)]),t("details",fc,[e[37]||(e[37]=t("summary",null,"공개 JSON 주소로 연결하기",-1)),t("h4",null,[p(d,{name:"link",size:16}),e[24]||(e[24]=I(" 임베드 코드 생성 ",-1))]),t("div",mc,[e[29]||(e[29]=t("p",{class:"export-desc"},"JSON 파일을 공개 저장 공간에 올린 뒤, 파일이 바로 열리는 주소를 넣어 주세요.",-1)),t("div",gc,[t("div",Tc,[p(d,{name:"check",size:14}),e[25]||(e[25]=t("strong",null,"추천:",-1)),e[26]||(e[26]=I(" GitHub Gist의 Raw 링크, GitHub Pages ",-1))]),t("div",Ic,[p(d,{name:"warning",size:14}),e[27]||(e[27]=t("strong",null,"공유 페이지 주의:",-1)),e[28]||(e[28]=I(" Google Drive·OneDrive 공유 페이지는 파일 주소가 아니에요. ",-1))])]),e[30]||(e[30]=t("p",{class:"hosting-caption"},"이미지를 포함한 JSON은 파일이 커서 외부 호스팅 크기 제한에 걸릴 수 있어요.",-1))]),t("div",Sc,[e[31]||(e[31]=t("label",{class:"embed-label",for:"export-embed-url"},"JSON URL",-1)),T(t("input",{id:"export-embed-url","onUpdate:modelValue":e[7]||(e[7]=r=>n.embedJsonUrl=r),type:"url",placeholder:"https://example.com/my-log.json",class:"embed-url-input"},null,512),[[E,n.embedJsonUrl]])]),t("div",Ec,[t("label",bc,[T(t("input",{"onUpdate:modelValue":e[8]||(e[8]=r=>n.embedAutoplay=r),type:"checkbox"},null,512),[[L,n.embedAutoplay]]),e[32]||(e[32]=t("span",null,"자동 재생",-1))])]),t("div",yc,[e[33]||(e[33]=t("label",{class:"embed-label"},"임베드 코드",-1)),t("div",Oc,[t("pre",null,[t("code",null,f(s.generatedEmbedCode),1)])]),t("button",{onClick:e[9]||(e[9]=(...r)=>s.copyEmbedCode&&s.copyEmbedCode(...r)),disabled:!s.validEmbedUrl,class:v(["copy-button",{copied:n.embedCopied}])},[p(d,{name:n.embedCopied?"check":"clipboard",size:16},null,8,["name"]),I(" "+f(n.embedCopied?"복사 완료!":"코드 복사"),1)],10,Rc)]),s.embedLinkStatus?(u(),h("p",Nc,f(s.embedLinkStatus.expired?"유효기간이 지난 티스토리 첨부파일 주소예요. 이 주소로는 코드를 만들 수 없어요.":"이 티스토리 첨부파일 주소에는 유효기간이 있어요. 오래 게시할 로그는 만료되지 않는 공개 파일 주소를 사용해 주세요."),1)):n.embedJsonUrl&&!s.validEmbedUrl?(u(),h("p",vc,"http 또는 https로 시작하는 파일 주소를 입력해 주세요.")):g("",!0),s.validEmbedUrl?(u(),h("div",Ac,[e[36]||(e[36]=t("label",{class:"embed-label"},"미리보기",-1)),t("div",wc,[n.embedPreviewLoaded?g("",!0):(u(),h("div",Cc,[...e[34]||(e[34]=[t("span",null,"불러오는 중...",-1)])])),n.embedPreviewSrc?(u(),h("iframe",{key:1,src:n.embedPreviewSrc,width:"100%",height:"100%",title:"블로그 플레이어 미리보기",frameborder:"0",allowfullscreen:"",allow:"autoplay",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",class:"preview-iframe",onLoad:e[10]||(e[10]=r=>n.embedPreviewLoaded=!0)},null,40,Lc)):g("",!0)]),t("p",Hc,[p(d,{name:"info",size:14}),e[35]||(e[35]=I(" 파일을 못 불러오면 미리보기의 “원본 파일 열기”로 링크를 확인해 주세요. 티스토리 첨부파일 주소는 외부 연결이 막힐 수 있어요. ",-1))])])):g("",!0)]),t("details",Dc,[e[43]||(e[43]=t("summary",null,"텍스트로 내보내기",-1)),t("h4",null,[p(d,{name:"edit",size:16}),e[38]||(e[38]=I(" 텍스트 내보내기 ",-1))]),e[44]||(e[44]=t("p",{class:"export-desc"},"로그를 소설 스타일 텍스트로 변환하여 다운로드합니다.",-1)),t("div",Uc,[t("label",kc,[T(t("input",{"onUpdate:modelValue":e[11]||(e[11]=r=>n.textExportIncludeDice=r),type:"checkbox"},null,512),[[L,n.textExportIncludeDice]]),e[39]||(e[39]=t("span",null,"다이스 결과 포함",-1))]),t("label",Fc,[T(t("input",{"onUpdate:modelValue":e[12]||(e[12]=r=>n.textExportIncludeNarrator=r),type:"checkbox"},null,512),[[L,n.textExportIncludeNarrator]]),e[40]||(e[40]=t("span",null,"나레이터/시스템 메시지 포함",-1))]),t("label",Pc,[T(t("input",{"onUpdate:modelValue":e[13]||(e[13]=r=>n.textExportIncludeSceneHeaders=r),type:"checkbox"},null,512),[[L,n.textExportIncludeSceneHeaders]]),e[41]||(e[41]=t("span",null,"씬 구분 헤더 포함",-1))])]),t("div",xc,[e[42]||(e[42]=t("label",{class:"embed-label"},"미리보기",-1)),t("div",{class:"text-preview-box",ref:"textPreviewBox"},f(s.generatedTextExport),513)]),t("div",Vc,[t("button",{onClick:e[14]||(e[14]=(...r)=>s.downloadTextExport&&s.downloadTextExport(...r)),class:"export-action-button",disabled:n.publicationBusy||!s.exportRanges.length},[p(d,{name:"save",size:16}),I(" "+f(s.exportRanges.length>1?`텍스트 ${s.exportRanges.length}개 · ZIP 다운로드`:".txt 다운로드"),1)],8,Mc),t("button",{onClick:e[15]||(e[15]=(...r)=>s.copyTextExport&&s.copyTextExport(...r)),class:"export-action-button secondary"},[p(d,{name:n.textExportCopied?"check":"clipboard",size:16},null,8,["name"]),I(" "+f(n.textExportCopied?"복사 완료!":"텍스트 복사"),1)])])])],512),[[A,i.mode!=="appearance"]])],2)}const Bc=C(Qd,[["render",Wc],["__scopeId","data-v-54584d29"]]),Yc={name:"EditorView",components:{RoomAssetPanel:$e,StepLivePreview:ue,AssetRegistration:yt,AppIcon:x,StepEffectsEditor:$n,StepInfoEditor:nr,CharacterBulkEditor:sa,ImageBulkEditor:il,ExportPanel:Bc,DialogBox:ye,CharacterDisplay:be,PlaybackControls:Ee},setup(){return{logStore:W()}},data(){return{activeTab:"step",infoPreview:null,effectsPreview:null,showStepList:!1,workspaceTabs:[{id:"step",label:"대사·연출",icon:"edit"},{id:"data",label:"캐릭터 & 이미지 관리",icon:"users"},{id:"appearance",label:"꾸미기",icon:"palette"},{id:"export",label:"내보내기",icon:"upload"}],stepSearch:"",showTrash:!1,stepSubTab:"info",dataSubTab:"characters",selectedStepIndex:null}},computed:{previewStep(){if(!this.selectedStep)return null;if(this.stepSubTab==="info")return this.infoPreview?.id===this.selectedStep.id?this.infoPreview:this.selectedStep;const o=this.effectsPreview,e={...this.selectedStep,effects:{...this.selectedStep.effects}},i=this.selectedStepIndex+1;return o&&i>=o.startStep&&i<=o.endStep&&["background","bgm","sfx"].includes(o.kind)&&(e.effects[o.kind]=o.effects[o.kind],o.kind==="background"&&(e.effects.backgroundOpacity=o.effects.backgroundOpacity)),e},filteredSteps(){const o=this.stepSearch.trim().toLocaleLowerCase();return this.allSteps.map((e,i)=>({step:e,index:i})).filter(({step:e})=>!o||`${e.character?.name||""} ${e.text}`.toLocaleLowerCase().includes(o))},allSteps(){const o=[];return(this.logStore.vnData?.scenes||[]).forEach(i=>{o.push(...i.steps||[])}),o},totalSteps(){return this.allSteps.length},selectedStep(){return this.selectedStepIndex===null?null:this.allSteps[this.selectedStepIndex]||null},selectedStepEffects(){return this.selectedStep?.effects||null}},methods:{async handleImportRoom({assets:o,filename:e}){this.logStore.editInProgress||(this.logStore.recordEdit("룸 데이터 추가"),Ge(this.logStore.vnData,o,e),await this.persistAndNotify("룸 데이터를 추가했어요. 캐릭터와 이미지 탭에서 확인하세요."))},async handleRegisterAsset({kind:o,asset:e}){(o==="character"?G(this.logStore.vnData).some(a=>a.name===e.name):_(this.logStore.vnData).some(a=>a.url===e.url))||(this.logStore.recordEdit("자료 등록"),q(this.logStore.vnData,o,e)&&await this.persistAndNotify(o==="character"?"캐릭터를 등록했어요":"이미지를 등록했어요"))},async travelHistory(o){const e=this.selectedStep?.id;if(!this.logStore.travelHistory(o))return;const i=this.allSteps.findIndex(a=>a.id===e);this.selectedStepIndex=i>=0?i:Math.max(0,Math.min(this.selectedStepIndex||0,this.totalSteps-1)),await this.persistAndNotify(o==="undo"?"이전 편집으로 되돌렸어요":"편집을 다시 적용했어요")},handleHistoryKey(o){!(o.ctrlKey||o.metaKey)||o.altKey||o.target.closest('input, textarea, select, [contenteditable="true"]')||o.key.toLowerCase()==="z"&&(o.preventDefault(),this.travelHistory(o.shiftKey?"redo":"undo"))},async restoreDeleted(o){const e=this.logStore.vnData.deletedSteps||[],i=e.findIndex(m=>m.key===o);if(i<0)return;this.logStore.recordEdit("삭제한 대사 복구");const a=e.splice(i,1)[0],n=this.logStore.vnData.scenes;let s=n.find(m=>m.id===a.scene.id);s||(s={...a.scene,steps:[]},n.splice(Math.min(a.sceneIndex,n.length),0,s));const c=s.steps.findIndex(m=>m.id===a.nextId);s.steps.splice(c>=0?c:Math.min(a.stepIndex,s.steps.length),0,a.step),this.selectedStepIndex=this.allSteps.findIndex(m=>m.id===a.step.id),await this.persistAndNotify("삭제한 대사를 복구했어요")},selectStep(o){this.showStepList=!1,this.selectedStepIndex=o},async saveAndPlay(){await this.persistEdits(),this.selectedStepIndex!==null&&sessionStorage.setItem("player-target-step",this.selectedStepIndex+1),this.$router.push("/player")},async persistEdits(){const o=this.logStore.vnData;if(!o?.fileCode)return console.warn("파일 식별자가 없어 편집 내용을 저장하지 못했습니다."),this.logStore.editInProgress=!1,!1;try{return await ce.saveFileData(o.fileCode,o)}finally{this.logStore.editInProgress=!1}},async persistAndNotify(o){const e=await this.persistEdits();return e?this.$toast(o,"success"):this.$toast("변경은 적용했지만 저장하지 못했어요. 저장 공간을 확인해 주세요","error"),e},async handleSaveStepInfo({id:o,updates:e}){const i=this.allSteps.find(a=>a.id===o);if(!i){this.$toast("스텝을 찾지 못했어요","error");return}this.logStore.recordEdit("대사 수정"),i.sceneNumber=e.sceneNumber,i.type=e.type,i.character.name=e.character.name,i.character.color=e.character.color,i.character.avatarUrl=e.character.avatarUrl,i.text=e.text,i.isSceneDescription=e.isSceneDescription,i.sceneTitle=e.sceneTitle,i.scenePCs=e.scenePCs,i.sceneDescription=e.sceneDescription,i.illustrations=JSON.parse(JSON.stringify(e.illustrations||[])),i.diceRolls=JSON.parse(JSON.stringify(e.diceRolls||[])),i.statusChanges=JSON.parse(JSON.stringify(e.statusChanges||[])),i.dxCombos=JSON.parse(JSON.stringify(e.dxCombos||[])),i.effects=JSON.parse(JSON.stringify(e.effects||{})),i.hasDice=e.hasDice,i.hasStatusChange=e.hasStatusChange,i.hasDXCombo=e.hasDXCombo,i.hasIllustration=e.hasIllustration,await this.persistAndNotify("스텝 정보를 저장했어요")},async handleDeleteStep(o){if(this.totalSteps<=1){this.$toast("재생할 대사 하나는 남겨 주세요","info");return}if(!this.allSteps.some(n=>n.id===o))return;this.logStore.recordEdit("대사 삭제");const e=this.logStore.vnData.scenes;let i=!1;for(let n=0;n<e.length;n++){const s=e[n],c=s.steps.findIndex(m=>m.id===o);if(c!==-1){const{steps:m,...d}=s;(this.logStore.vnData.deletedSteps||=[]).push({key:crypto.randomUUID(),step:JSON.parse(JSON.stringify(m[c])),scene:d,sceneIndex:n,stepIndex:c,nextId:m[c+1]?.id}),s.steps.splice(c,1),s.steps.length||e.splice(n,1),i=!0;break}}if(!i){this.$toast("스텝을 찾지 못했어요","error");return}this.logStore.playback.currentSceneIndex=0,this.logStore.playback.currentStepIndex=0;const a=this.allSteps.length;this.selectedStepIndex>=a&&(this.selectedStepIndex=a>0?a-1:null),await this.persistAndNotify("스텝을 삭제했어요")},async handleDuplicateStep(o){if(!this.allSteps.some(s=>s.id===o))return;this.logStore.recordEdit("대사 복제");const e=this.logStore.vnData.scenes;let i=!1,a=0;const n=crypto.randomUUID();for(let s=0;s<e.length;s++){const c=e[s],m=c.steps.findIndex(d=>d.id===o);if(m!==-1){const d=c.steps[m],r=JSON.parse(JSON.stringify(d));r.id=n,c.steps.splice(m+1,0,r),a+=m+1,i=!0;break}a+=c.steps.length}if(!i){this.$toast("스텝을 찾지 못했어요","error");return}this.selectedStepIndex=a,await this.persistAndNotify(`스텝을 복사했어요 (새 ID: ${n})`)},async handleApplyEffects({startStep:o,endStep:e,effects:i,illustrations:a,replaceRange:n}){if(!J(o,e,this.allSteps.length))return;if(n&&!ke(this.allSteps,n)){this.$toast("원래 범위가 변경됐어요. 적용한 효과 범위에서 다시 선택해 주세요.","error");return}const s=[];if(i?.sfx&&s.push("효과음"),i?.bgm&&s.push("BGM"),i?.background&&s.push("배경"),a&&s.push("일러스트"),s.length===0)return;if(this.logStore.recordEdit(n?"효과 범위 수정":"연출 적용"),n)for(let S=n.startStep;S<=n.endStep;S++){if(S>=o&&S<=e)continue;const l=this.allSteps[S-1].effects;l[n.key]=null,n.key==="background"&&delete l.backgroundOpacity}const c=this.allSteps,m=i&&(i.sfx||i.bgm||i.background);for(let S=o-1;S<e&&S<c.length;S++){const l=c[S];m&&(l.effects||(l.effects={}),i.sfx&&(l.effects.sfx=i.sfx),i.bgm&&(l.effects.bgm=i.bgm),i.background&&(l.effects.background=i.background,l.effects.backgroundOpacity=i.backgroundOpacity)),a&&(l.illustrations=JSON.parse(JSON.stringify(a)),l.hasIllustration=l.illustrations.length>0)}const d=o===e?`스텝 ${o}`:`스텝 ${o}~${e}`,r=s[s.length-1]==="일러스트"?"를":"을";await this.persistAndNotify(`${d}에 ${s.join("·")}${r} 적용했어요`)},async handleRemoveEffects({startStep:o,endStep:e,kind:i=null}){if(!J(o,e,this.allSteps.length)||i&&!["sfx","bgm","background"].includes(i))return;this.logStore.recordEdit("연출 제거");const a=this.allSteps;for(let s=o-1;s<e&&s<a.length;s++){const c=a[s];if(c.effects){for(const m of i?[i]:["sfx","bgm","background"])c.effects[m]=null;(!i||i==="background")&&delete c.effects.backgroundOpacity}}const n=o===e?`스텝 ${o}`:`스텝 ${o}~${e}`;await this.persistAndNotify(`${n}의 효과를 제거했어요`)},async handleBulkUpdateCharacter({oldName:o,newName:e,newColor:i,newAvatarUrl:a,replaceExistingAvatars:n=!1,convertToNarrator:s,onProgress:c,onComplete:m}){this.logStore.recordEdit("인물 일괄 수정");const d=y=>{y.name=e,y.color=i,a&&(n||!y.avatarUrl)&&(y.avatarUrl=a)};let r=0,S=0,l=0;this.allSteps.forEach(y=>{y.character&&y.character.name===o&&S++});for(let y=0;y<this.allSteps.length;y++){const k=this.allSteps[y];k.character&&k.character.name===o&&(s&&k.type!=="narrator"&&(k.type="narrator",l++),d(k.character),r++,c&&c(r,S),r%10===0&&await new Promise(b=>setTimeout(b,10)))}for(const y of Object.values(this.logStore.vnData.characters||{}))y.name===o&&d(y);for(const y of this.logStore.vnData.assetLibrary?.characters||[])y.name===o&&d(y);const w=await this.persistEdits();if(m){const y=[];r?o!==e?y.push(`"${o}" → "${e}" 스텝 ${r}개를 바꿨어요`):y.push(`"${o}" 스텝 ${r}개를 바꿨어요`):y.push(`등록한 캐릭터 "${e}"을 수정했어요`),s&&y.push(`나레이터 변환 ${l}개`),w||y.push("저장하지 못했어요. 저장 공간을 확인해 주세요"),await m({success:w,updatedCount:r,message:y.join(" · ")})}},async handleBulkUpdateImage({oldUrl:o,newUrl:e,onProgress:i,onComplete:a}){this.logStore.recordEdit("이미지 일괄 수정");let n=0,s=0;const c=this.logStore.vnData;if(c.scenes&&c.scenes.forEach(d=>{d.steps?.forEach(r=>{r.character?.avatarUrl===o&&s++,r.effects?.background===o&&s++,r.illustrations&&Array.isArray(r.illustrations)&&r.illustrations.forEach(S=>{S.url===o&&s++})})}),c.handouts&&c.handouts.forEach(d=>{d.imageUrl===o&&s++}),c.scenes)for(let d=0;d<c.scenes.length;d++){const r=c.scenes[d];if(r.steps)for(let S=0;S<r.steps.length;S++){const l=r.steps[S];if(l.character?.avatarUrl===o&&(l.character.avatarUrl=e,n++,i&&i(n,s)),l.effects?.background===o&&(l.effects.background=e,n++,i&&i(n,s)),l.illustrations&&Array.isArray(l.illustrations))for(let w=0;w<l.illustrations.length;w++){const y=l.illustrations[w];y.url===o&&(y.url=e,n++,i&&i(n,s))}n%10===0&&await new Promise(w=>setTimeout(w,10))}}if(c.characters)for(const d in c.characters){const r=c.characters[d];r.avatarUrl===o&&(r.avatarUrl=e);for(const S of Object.keys(r.emotions||{}))r.emotions[S]===o&&(r.emotions[S]=e)}if(c.handouts)for(let d=0;d<c.handouts.length;d++){const r=c.handouts[d];r.imageUrl===o&&(r.imageUrl=e,n++,i&&i(n,s),n%10===0&&await new Promise(S=>setTimeout(S,10)))}for(const d of c.assetLibrary?.images||[])d.url===o&&(d.url=e);for(const d of c.assetLibrary?.characters||[])d.avatarUrl===o&&(d.avatarUrl=e);const m=await this.persistEdits();if(a){const d=m?n?`이미지 주소 ${n}개와 등록 자료를 바꿨어요`:"등록한 이미지를 바꿨어요":`이미지 주소 ${n}개를 바꿨지만 저장하지 못했어요. 저장 공간을 확인해 주세요`;await a({success:m,updatedCount:n,message:d})}},hasEffects(o){return o.effects&&(o.effects.sfx||o.effects.bgm||o.effects.background)},truncateText(o,e){return o?o.length>e?o.substring(0,e)+"...":o:""},scrollToTargetStep(){const o=sessionStorage.getItem("editor-target-step");if(o){const e=parseInt(o,10);if(e>=1&&e<=this.totalSteps){const i=e-1;this.$nextTick(()=>{this.selectStep(i);const a=document.querySelectorAll(".step-item");a[i]&&a[i].scrollIntoView({behavior:"smooth",block:"center"})})}sessionStorage.removeItem("editor-target-step")}}},async mounted(){window.addEventListener("keydown",this.handleHistoryKey);const o=()=>this.logStore.vnData?.scenes?.length>0;if(!o()&&(!await this.logStore.loadAutoSave()||!o())){this.$router.push("/");return}this.scrollToTargetStep()},beforeUnmount(){window.removeEventListener("keydown",this.handleHistoryKey)},watch:{activeTab(o,e){e==="css"&&o!=="css"&&(this.cssPreviewAutoPlay=!1)}}},Gc={class:"editor-view"},_c={class:"editor-container"},zc={class:"editor-header"},jc={class:"document-heading"},Jc={class:"header-actions"},Kc=["disabled","title"],qc=["disabled"],Xc=["aria-expanded"],Zc={key:0,class:"trash-panel","aria-label":"삭제한 대사"},Qc={class:"trash-heading"},$c={key:0},eu={key:1},tu=["disabled","onClick"],nu=["inert"],ou={class:"workspace-nav","aria-label":"작업실 메뉴"},su=["aria-pressed","onClick"],iu=["aria-expanded"],ru={class:"list-header"},au={key:0,class:"search-count"},lu={class:"list-body"},du=["aria-pressed","onClick","onKeydown"],cu={class:"step-number"},uu={class:"step-info"},hu={class:"step-character"},pu={key:0,class:"selection-label"},fu={class:"step-text"},mu={key:0,class:"step-effects-tags"},gu={key:0,class:"effect-tag sfx"},Tu={key:1,class:"effect-tag bgm"},Iu={key:2,class:"effect-tag bg"},Su={class:"editor-panel"},Eu={class:"tab-content"},bu={class:"tab-pane"},yu={class:"sub-tabs"},Ou=["aria-pressed"],Ru=["aria-pressed"],Nu={class:"tab-pane"},vu={class:"sub-tabs"},Au=["aria-pressed"],wu=["aria-pressed"],Cu=["aria-pressed"];function Lu(o,e,i,a,n,s){const c=R("AppIcon"),m=R("StepLivePreview"),d=R("StepInfoEditor"),r=R("StepEffectsEditor"),S=R("RoomAssetPanel"),l=R("AssetRegistration"),w=R("CharacterBulkEditor"),y=R("ImageBulkEditor"),k=R("ExportPanel");return u(),h("div",Gc,[t("div",_c,[t("header",zc,[t("div",jc,[e[18]||(e[18]=t("span",{class:"eyebrow"},"나의 로그 작업실",-1)),t("h2",null,f(a.logStore.vnData.title||"로그 편집기"),1),t("p",null,f(s.totalSteps)+"개의 대사 · 이 브라우저에 자동 보관",1)]),t("div",Jc,[t("button",{class:"history-button history-icon",disabled:!a.logStore.undoStack.length||a.logStore.editInProgress,title:"실행 취소"+(a.logStore.undoStack.at(-1)?.label?" · "+a.logStore.undoStack.at(-1).label:""),"aria-label":"실행 취소",onClick:e[0]||(e[0]=b=>s.travelHistory("undo"))},[p(c,{name:"undo",size:20})],8,Kc),t("button",{class:"history-button history-icon",disabled:!a.logStore.redoStack.length||a.logStore.editInProgress,title:"다시 실행","aria-label":"다시 실행",onClick:e[1]||(e[1]=b=>s.travelHistory("redo"))},[p(c,{name:"redo",size:20})],8,qc),t("button",{class:"history-button trash-button","aria-expanded":n.showTrash,onClick:e[2]||(e[2]=b=>n.showTrash=!n.showTrash)},"삭제함 "+f(a.logStore.vnData.deletedSteps?.length||0),9,Xc),t("button",{onClick:e[3]||(e[3]=(...b)=>s.saveAndPlay&&s.saveAndPlay(...b)),class:"save-button"},[p(c,{name:"play",size:18}),e[19]||(e[19]=I(" 재생하기 ",-1))])])]),n.showTrash?(u(),h("section",Zc,[t("div",Qc,[e[20]||(e[20]=t("h3",null,"삭제한 대사",-1)),t("button",{onClick:e[4]||(e[4]=b=>n.showTrash=!1)},"닫기")]),e[21]||(e[21]=t("p",null,"삭제한 대사는 작업 파일에 함께 보관돼요. 복구하면 원래 장면으로 돌아가요.",-1)),a.logStore.vnData.deletedSteps?.length?(u(),h("ul",eu,[(u(!0),h(O,null,N(a.logStore.vnData.deletedSteps,b=>(u(),h("li",{key:b.key},[t("span",null,f(b.step.character?.name||"시스템")+" · "+f(s.truncateText(b.step.text,80)),1),t("button",{disabled:a.logStore.editInProgress,onClick:D=>s.restoreDeleted(b.key)},"복구",8,tu)]))),128))])):(u(),h("p",$c,"삭제한 대사가 없어요."))])):g("",!0),t("div",{class:v(["editor-content",{"editing-step":n.activeTab==="step"}]),inert:a.logStore.editInProgress||void 0},[t("nav",ou,[(u(!0),h(O,null,N(n.workspaceTabs,b=>(u(),h("button",{key:b.id,class:v({active:n.activeTab===b.id}),"aria-pressed":n.activeTab===b.id,onClick:D=>n.activeTab=b.id},[p(c,{name:b.icon,size:20},null,8,["name"]),t("span",null,f(b.label),1)],10,su))),128))]),T(t("button",{class:"step-list-toggle","aria-expanded":n.showStepList,"aria-controls":"workspace-steps",onClick:e[5]||(e[5]=b=>n.showStepList=!n.showStepList)},[I("대사 목록 · "+f(n.selectedStepIndex===null?"선택하기":n.selectedStepIndex+1+"번 선택"),1),p(c,{name:"down",size:16})],8,iu),[[A,n.activeTab==="step"]]),T(t("div",{id:"workspace-steps",class:v(["steps-list",{"mobile-open":n.showStepList}])},[t("div",ru,[t("h3",null,[e[22]||(e[22]=I("대사 목록 ",-1)),t("span",null,f(s.totalSteps),1)]),e[23]||(e[23]=t("label",{class:"sr-only",for:"step-search"},"대사·인물 검색",-1)),T(t("input",{id:"step-search","onUpdate:modelValue":e[6]||(e[6]=b=>n.stepSearch=b),type:"search",placeholder:"대사나 인물 찾기"},null,512),[[E,n.stepSearch]]),n.stepSearch?(u(),h("p",au,f(s.filteredSteps.length)+"개를 찾았어요",1)):g("",!0)]),t("div",lu,[(u(!0),h(O,null,N(s.filteredSteps,({step:b,index:D})=>(u(),h("div",{key:b.id,class:v(["step-item",{"has-effects":s.hasEffects(b),selected:n.selectedStepIndex===D}]),role:"button",tabindex:"0","aria-pressed":n.selectedStepIndex===D,onClick:P=>s.selectStep(D),onKeydown:[B(M(P=>s.selectStep(D),["prevent"]),["enter"]),B(M(P=>s.selectStep(D),["prevent"]),["space"])]},[t("div",cu,f(D+1),1),t("div",uu,[t("div",hu,[I(f(b.character?.name||"시스템"),1),n.selectedStepIndex===D?(u(),h("span",pu,"선택")):g("",!0)]),t("div",fu,f(s.truncateText(b.text,50)),1),s.hasEffects(b)?(u(),h("div",mu,[b.effects.sfx?(u(),h("span",gu,[p(c,{name:"volume",size:12})])):g("",!0),b.effects.bgm?(u(),h("span",Tu,[p(c,{name:"music",size:12})])):g("",!0),b.effects.background?(u(),h("span",Iu,[p(c,{name:"photo",size:12})])):g("",!0)])):g("",!0)])],42,du))),128))])],2),[[A,n.activeTab==="step"]]),t("div",Su,[t("div",Eu,[T(t("div",bu,[n.activeTab==="step"?(u(),H(m,{key:0,step:s.previewStep,title:a.logStore.vnData.title,characters:a.logStore.vnData.characters,"base-theme":a.logStore.vnData.theme||{},"custom-c-s-s":a.logStore.vnData.customCSS||{}},null,8,["step","title","characters","base-theme","custom-c-s-s"])):g("",!0),t("div",yu,[t("button",{class:v(["sub-tab-button",{active:n.stepSubTab==="info"}]),"aria-pressed":n.stepSubTab==="info",onClick:e[7]||(e[7]=b=>n.stepSubTab="info")}," 대사와 인물 ",10,Ou),t("button",{class:v(["sub-tab-button",{active:n.stepSubTab==="effects"}]),"aria-pressed":n.stepSubTab==="effects",onClick:e[8]||(e[8]=b=>n.stepSubTab="effects")}," 배경과 소리 ",10,Ru)]),T(p(d,{"step-data":s.selectedStep,onPreview:e[9]||(e[9]=b=>n.infoPreview=b),onSave:s.handleSaveStepInfo,onDelete:s.handleDeleteStep,onDuplicate:s.handleDuplicateStep,onClose:e[10]||(e[10]=b=>n.stepSubTab="effects")},null,8,["step-data","onSave","onDelete","onDuplicate"]),[[A,n.stepSubTab==="info"]]),T(p(r,{"total-steps":s.totalSteps,onPreview:e[11]||(e[11]=b=>n.effectsPreview=b),"selected-step":n.selectedStepIndex!==null?n.selectedStepIndex+1:null,"current-effects":s.selectedStepEffects,"current-illustrations":s.selectedStep?.illustrations||[],onApply:s.handleApplyEffects,onRemove:s.handleRemoveEffects,onClose:e[12]||(e[12]=b=>n.stepSubTab="info")},null,8,["total-steps","selected-step","current-effects","current-illustrations","onApply","onRemove"]),[[A,n.stepSubTab==="effects"]])],512),[[A,n.activeTab==="step"]]),T(t("div",Nu,[t("div",vu,[t("button",{class:v(["sub-tab-button",{active:n.dataSubTab==="characters"}]),"aria-pressed":n.dataSubTab==="characters",onClick:e[13]||(e[13]=b=>n.dataSubTab="characters")},[p(c,{name:"users",size:14}),e[24]||(e[24]=I(" 캐릭터 ",-1))],10,Au),t("button",{class:v(["sub-tab-button",{active:n.dataSubTab==="images"}]),"aria-pressed":n.dataSubTab==="images",onClick:e[14]||(e[14]=b=>n.dataSubTab="images")},[p(c,{name:"photo",size:14}),e[25]||(e[25]=I(" 이미지 ",-1))],10,wu),t("button",{class:v(["sub-tab-button",{active:n.dataSubTab==="room"}]),"aria-pressed":n.dataSubTab==="room",onClick:e[15]||(e[15]=b=>n.dataSubTab="room")},[p(c,{name:"folder",size:14}),e[26]||(e[26]=I("룸 데이터 추가",-1))],10,Cu)]),n.dataSubTab==="room"?(u(),H(S,{key:0,source:a.logStore.vnData.assetLibrary?.roomSource,busy:a.logStore.editInProgress,onImport:s.handleImportRoom},null,8,["source","busy","onImport"])):g("",!0),n.dataSubTab!=="room"?(u(),H(l,{key:n.dataSubTab,kind:n.dataSubTab==="characters"?"character":"image",onRegister:s.handleRegisterAsset},null,8,["kind","onRegister"])):g("",!0),T(p(w,{"all-steps":s.allSteps,"registered-characters":a.logStore.vnData.assetLibrary?.characters||[],onBulkUpdate:s.handleBulkUpdateCharacter,onClose:e[16]||(e[16]=b=>n.dataSubTab="images")},null,8,["all-steps","registered-characters","onBulkUpdate"]),[[A,n.dataSubTab==="characters"]]),T(p(y,{"vn-data":a.logStore.vnData,onBulkUpdate:s.handleBulkUpdateImage,onClose:e[17]||(e[17]=b=>n.dataSubTab="characters")},null,8,["vn-data","onBulkUpdate"]),[[A,n.dataSubTab==="images"]])],512),[[A,n.activeTab==="data"]]),T(p(k,{"preview-step":s.selectedStep||a.logStore.currentStep,mode:n.activeTab==="appearance"?"appearance":"export",class:"tab-pane"},null,8,["preview-step","mode"]),[[A,n.activeTab==="appearance"||n.activeTab==="export"]])])])],10,nu)])])}const Wu=C(Yc,[["render",Lu],["__scopeId","data-v-d43036f3"]]);export{Wu as default};
