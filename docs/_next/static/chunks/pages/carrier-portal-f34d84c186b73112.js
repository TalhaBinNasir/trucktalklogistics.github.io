(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{6565:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carrier-portal",function(){return l(6113)}])},6113:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return carrier_portal}});var a=l(5893),r=l(5379),i=l.n(r),n=l(2175),c=l(7294),s=l(7066),o=l(6310),u=l(2336),m=l(5850),p=l(7690),d=l(5670),f=l(4213),h={src:"/_next/static/media/cross-img.fe7b0e33.png",height:360,width:360,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAO0lEQVR42iXLsRHAQAgDweu/GQigFTrRJ2IYB958eT7pLDy9rjHXZFCHNiEs5IBccUUkfXjK22P09/cB+koxm/SC2oUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},y=l(5675),x=l.n(y),carrier_setup_input=e=>{let{name:t,label:l,type:r,touched:i,error:n,onChange:c,dropdownOptions:s,isMultiSelect:o,filename:u,onRemoveFile:m}=e;return(0,a.jsx)("div",{style:{paddingRight:"25px"},children:"file"===r?(0,a.jsxs)("div",{children:[(0,a.jsxs)(p.ZP,{auto:!0,flat:!0,color:n?"error":"primary",onPress:()=>{var e;return null===(e=document.getElementById(t))||void 0===e?void 0:e.click()},style:{zIndex:0},children:[l||"Upload File",(0,a.jsx)("input",{id:t,type:"file",name:t,style:{display:"none"},onChange:c?e=>c(e):void 0})]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center"},children:u?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:u}),(0,a.jsx)(p.ZP,{auto:!0,onPress:m,style:{backgroundColor:"white",zIndex:0},children:(0,a.jsx)(x(),{src:h,alt:"Remove",width:16,height:16})})]}):(0,a.jsx)("span",{children:"No file chosen"})})}),(0,a.jsx)("div",{})]}):"text"===r?(0,a.jsx)(d.ZP,{clearable:!0,bordered:!0,fullWidth:!0,color:"primary",size:"lg",labelPlaceholder:l,name:t,type:r,onChange:c?e=>c(e):void 0,helperText:i&&n?n:"",helperColor:i&&n?"error":"default",status:i&&n?"error":"default"}):(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[l,(0,a.jsx)(f.ZP,{options:s,isMulti:o,closeMenuOnSelect:!o,defaultValue:s&&s[0],placeholder:l,onChange:e=>{if(o){let t=e?e.map(e=>e.label):[];null==c||c(t)}else null==c||c(e?e.label:null)}}),(0,a.jsx)("span",{style:{color:"red"},children:n&&n})]})})};l(7967);var b=l(7227),g=l(2440),A=l(6501),carrier_setup=()=>{let[e,t]=(0,c.useState)(!1),l=[{name:"fullName",label:"Full Name",type:"text",required:!0},{name:"email",label:"Email",type:"text",required:!0},{name:"phone",label:"Phone",type:"text",required:!0},{name:"hometown",label:"Hometown",type:"text",required:!0},{name:"zip",label:"Zip Code",type:"text",required:!0},{name:"companyName",label:"Company Name",type:"text",required:!0},{name:"mcNumber",label:"MC Number",type:"text",required:!0},{name:"truckType",label:"Truck Type",type:"select",required:!0,options:[{value:"power_only",label:"Power Only"},{value:"dry_van",label:"Dry Van"},{value:"hot_shot",label:"Hot Shot"},{value:"reefer",label:"Reefer"},{value:"flatbed",label:"Flatbed"},{value:"step_deck",label:"Step Deck"},{value:"box_truck",label:"Box Truck"}]},{name:"truckAttachments",label:"Preferences and Truck Attachments",type:"select",required:!0,options:[{value:"pallet_jack",label:"Pallet Jack"},{value:"straps",label:"Straps"},{value:"dunnage",label:"Dunnage"},{value:"e_tracks",label:"E-tracks"},{value:"traps",label:"Traps"},{value:"chains",label:"Chains"},{value:"lift_gate",label:"Lift Gate"},{value:"ramps",label:"Ramps"}]},{name:"mcAuthority",label:"Copy of your MC Authority Certificate",type:"file",required:!0},{name:"w9form",label:"W9 Form",type:"file",required:!0},{name:"noticeOfAssignment",label:"Notice Of Assignment",type:"file",required:!0},{name:"certificateInsurance",label:"Copy of your Certificate of Insurance",type:"file",required:!0}],[r,d]=(0,c.useState)({mcAuthority:null,w9form:null,noticeOfAssignment:null,certificateInsurance:null}),f=[];for(let e=0;e<l.length;e+=3)f.push(l.slice(e,e+3));let h=o.Ry(l.reduce((e,t)=>("file"===t.type?e[t.name]=o.nK().required("".concat(t.label," is required")).test("fileSize","File size is too large",e=>e&&e.size<=1e7).test("fileFormat","Unsupported Format",e=>e&&["image/jpg","image/jpeg","image/gif","image/png","application/pdf"].includes(e.type)):"text"===t.type?"email"===t.name?e[t.name]=o.Z_().email("Invalid email format").required("".concat(t.label," is required")):"phone"===t.name?e[t.name]=o.Z_().matches(/^[+]?[0-9]{1,4}?[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/,"Phone number is not valid").required("".concat(t.label," is required")):e[t.name]=o.Z_().required("".concat(t.label," is required")):"select"===t.type&&("truckAttachments"===t.name?e[t.name]=o.IX().of(o.Z_().required()).min(1,"At least one is required"):e[t.name]=o.Z_().required("".concat(t.label," is required"))),e),{})),[y,x]=(0,c.useState)({mcNumber:"",companyName:"",email:"",phone:"",fullName:"",hometown:"",zip:"",truckType:"Power Only",truckAttachments:["Pallet Jack"],mcAuthority:null,w9form:null,noticeOfAssignment:null,certificateInsurance:null}),handleSubmit=async e=>{try{let t=new Set,checkDuplicateFile=e=>{let l=e.name;return!!t.has(l)||(t.add(l),!1)},l=[];if(e.mcAuthority){if(checkDuplicateFile(e.mcAuthority))throw Error("Duplicate file detected: ".concat(e.mcAuthority.name));l.push({file:e.mcAuthority,fieldName:"mcAuthority"})}if(e.w9form){if(checkDuplicateFile(e.w9form))throw Error("Duplicate file detected: ".concat(e.w9form.name));l.push({file:e.w9form,fieldName:"w9form"})}if(e.noticeOfAssignment){if(checkDuplicateFile(e.noticeOfAssignment))throw Error("Duplicate file detected: ".concat(e.noticeOfAssignment.name));l.push({file:e.noticeOfAssignment,fieldName:"noticeOfAssignment"})}if(e.certificateInsurance){if(checkDuplicateFile(e.certificateInsurance))throw Error("Duplicate file detected: ".concat(e.certificateInsurance.name));l.push({file:e.certificateInsurance,fieldName:"certificateInsurance"})}let uploadFile=async(t,l)=>{let a=new FormData;return a.append(l,t,"".concat(e.email,"_").concat(t.name)),s.Z.post("http://ttl-be.vercel.app/upload",a,{headers:{"Content-Type":"multipart/form-data"}})},a=l.map(e=>{let{file:t,fieldName:l}=e;return uploadFile(t,l)}),r=await Promise.all(a),i=r.every(e=>200===e.status);if(i){let t={mcNumber:e.mcNumber,companyName:e.companyName,email:e.email,phone:e.phone,fullName:e.fullName,hometown:e.hometown,zip:e.zip,truckType:e.truckType,truckAttachments:e.truckAttachments};await b.ZP.send("service_547r8pd","template_4kjmc28",t,"pt7ltnFd9N7prHXlJ"),A.ZP.success("Form submitted successfully!")}else A.ZP.error("Failed to submit the form.")}catch(e){A.ZP.error("An error occurred: ".concat(e.message)),console.error("Error submitting form:",e)}finally{setTimeout(()=>{t(!1)},1e3)}},resetFileInput=e=>{let t=document.getElementById(e);t&&(t.value="")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.J9,{initialValues:y,validationSchema:h,onSubmit:e=>{handleSubmit(e),t(!0)},children:t=>{let{setFieldValue:l,errors:s,touched:o}=t;return(0,a.jsxs)(n.l0,{children:[(0,a.jsx)(m.x,{style:{display:"flex",flexDirection:"column",width:"100%"},children:f.map((e,t)=>(0,a.jsx)(c.Fragment,{children:(0,a.jsxs)(u.k,{justify:"between",align:"center",css:{width:"100%",flexWrap:"wrap"},children:[e.filter(e=>"file"!==e.type&&"select"!==e.type).map(e=>(0,a.jsx)("div",{className:"jsx-754074cf2ae75027 input-container",children:(0,a.jsx)(carrier_setup_input,{label:e.label,name:e.name,type:e.type,onChange:t=>{l(e.name,t.target.value)},touched:o[e.name],error:s[e.name]})},e.name)),e.filter(e=>"select"===e.type).map(e=>(0,a.jsx)("div",{style:{width:"100%"},className:"jsx-754074cf2ae75027 input-container",children:(0,a.jsx)(carrier_setup_input,{label:e.label,name:e.name,type:e.type,isMultiSelect:"truckType"!==e.name,dropdownOptions:null==e?void 0:e.options,onChange:t=>{"truckType"===e.name?l("truckType",t):l("truckAttachments",t)},touched:"truckType"===e.name?o.truckType:o.truckAttachments,error:"truckType"===e.name?s.truckType:s.truckAttachments})},e.name)),e.filter(e=>"file"===e.type).map(e=>(0,a.jsx)("div",{style:{width:"100%"},className:"jsx-754074cf2ae75027 input-container",children:(0,a.jsx)(carrier_setup_input,{label:e.label,name:e.name,type:e.type,onChange:t=>{let a=t.currentTarget.files?t.currentTarget.files[0]:null;d(t=>({...t,[e.name]:a?a.name:null})),l(e.name,a)},touched:o[e.name],error:s[e.name],onRemoveFile:()=>{d(t=>({...t,[e.name]:null})),l(e.name,null),resetFileInput(e.name)},filename:r[e.name]})},e.name))]})},t))}),(0,a.jsx)(m.x,{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"20px"},children:e?(0,a.jsx)(g.NB,{visible:!0,height:"60",width:"60",ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}):(0,a.jsx)(p.ZP,{type:"submit",children:"Submit"})}),(0,a.jsx)(i(),{id:"754074cf2ae75027",children:".input-container.jsx-754074cf2ae75027{-webkit-box-flex:1;-webkit-flex:1 1 30%;-moz-box-flex:1;-ms-flex:1 1 30%;flex:1 1 30%;margin:0 10px;padding-top:50px}@media(max-width:768px){.input-container.jsx-754074cf2ae75027{-webkit-box-flex:1;-webkit-flex:1 1 100%;-moz-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;paddingtop:10px}}"})]})}}),(0,a.jsx)(A.x7,{})]})},j=l(3161),w=l(5759),k=l(5807),v=l(9167),carrier_portal=()=>(0,a.jsxs)(k.A,{children:[(0,a.jsx)(v.J,{}),(0,a.jsxs)(m.x,{as:"main",children:[(0,a.jsx)(w.V,{title:"Carrier Setup"}),(0,a.jsx)(carrier_setup,{}),(0,a.jsx)(j.$,{})]})]})}},function(e){e.O(0,[794,331,761,988,774,888,179],function(){return e(e.s=6565)}),_N_E=e.O()}]);