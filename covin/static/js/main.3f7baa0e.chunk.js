(this["webpackJsonpcowin-v"]=this["webpackJsonpcowin-v"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),a=n(24),r=n.n(a),c=(n(30),n(31),n(2)),o=n.n(c),l=n(5),p=n(14),u=n(10),h=n(11),b=n(6),d=n(13),j=n(12),O=n(3),v=n(21);var f=function e(t){function n(e,t){return e>>>t|e<<32-t}for(var s,i,a=Math.pow,r=a(2,32),c="",o=[],l=8*t.length,p=e.h=e.h||[],u=e.k=e.k||[],h=u.length,b={},d=2;h<64;d++)if(!b[d]){for(s=0;s<313;s+=d)b[s]=d;p[h]=a(d,.5)*r|0,u[h++]=a(d,1/3)*r|0}for(t+="\x80";t.length%64-56;)t+="\0";for(s=0;s<t.length;s++){if((i=t.charCodeAt(s))>>8)return;o[s>>2]|=i<<(3-s)%4*8}for(o[o.length]=l/r|0,o[o.length]=l,i=0;i<o.length;){var j=o.slice(i,i+=16),O=p;for(p=p.slice(0,8),s=0;s<64;s++){var v=j[s-15],f=j[s-2],m=p[0],g=p[4],x=p[7]+(n(g,6)^n(g,11)^n(g,25))+(g&p[5]^~g&p[6])+u[s]+(j[s]=s<16?j[s]:j[s-16]+(n(v,7)^n(v,18)^v>>>3)+j[s-7]+(n(f,17)^n(f,19)^f>>>10)|0);(p=[x+((n(m,2)^n(m,13)^n(m,22))+(m&p[1]^m&p[2]^p[1]&p[2]))|0].concat(p))[4]=p[4]+x|0}for(s=0;s<8;s++)p[s]=p[s]+O[s]|0}for(s=0;s<8;s++)for(i=3;i+1;i--){var k=p[s]>>8*i&255;c+=(k<16?0:"")+k.toString(16)}return c},m=(n(33),n(0));var g=function(e){var t=e.className;return Object(m.jsx)("div",{className:t,children:e.children})},x=(n(35),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(u.a)(this,n),(s=t.call(this,e)).benList=e.benList,s.list=[];for(var i=0;i<s.benList.length;i++){var a=(new Date).getFullYear()-s.benList[i].birth_year,r=s.benList[i].name,c=s.benList[i].beneficiary_reference_id,o=s.benList[i].vaccination_status,l="beneficiary";"Partially Vaccinated"===o?(l+=" partial",s.list.push(Object(m.jsxs)(g,{className:l,children:[Object(m.jsx)("input",{type:"radio",name:"benList",onClick:s.props.onClick,value:c})," ",r," (",a,") : ",o]}))):"Vaccinated"===o?(l+=" vaccinated",s.list.push(Object(m.jsxs)(g,{className:l,children:[Object(m.jsx)("input",{type:"radio",disabled:!0,name:"benList",onClick:s.props.onClick,value:c})," ",r," (",a,") : ",o]}))):(l+=" notVaccinated",s.list.push(Object(m.jsxs)(g,{className:l,children:[Object(m.jsx)("input",{type:"radio",name:"benList",onClick:s.props.onClick,value:c})," ",r," (",a,") : ",o]})))}return s}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"beneficiaries",children:this.list})}}]),n}(i.a.Component)),k=(n(36),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).txnId=null,console.log("constructor() called!!"),s.state={mobile:null,token:null,msg:"Send OTP"},s.loginHandler=s.loginHandler.bind(Object(b.a)(s)),s.generateOTP=s.generateOTP.bind(Object(b.a)(s)),s}return Object(h.a)(n,[{key:"reset",value:function(e){clearInterval(this.interval),this.setCookie("token",""),e?(console.log("Logging out!!"),this.setState({msg:"Send OTP",mobile:""})):(console.log("Resetting..."),this.setState({msg:"Send OTP"}))}},{key:"checkState",value:function(){this.getCookie("token")&&""===this.getCookie("token")&&"Send OTP"!==this.state.msg&&"Confirm OTP"!==this.state.msg&&(this.setState({msg:"Send OTP"}),this.reset())}},{key:"setCookie",value:function(e,t,n){var s=new Date;s.setTime(s.getTime()+60*n*1e3);var i="expires="+s.toUTCString();document.cookie=e+"="+t+";"+i+";path=/"}},{key:"getCookie",value:function(e){for(var t=e+"=",n=document.cookie.split(";"),s=0;s<n.length;s++){for(var i=n[s];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return""}},{key:"loginHandler",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Send OTP"!==this.state.msg){e.next=5;break}return e.next=3,this.generateOTP();case 3:e.next=13;break;case 5:if("Confirm OTP"!==this.state.msg){e.next=10;break}return e.next=8,this.confirmOTP();case 8:e.next=13;break;case 10:if("getBeneficiaries"!==this.state.msg){e.next=13;break}return e.next=13,this._getBeneficiaries();case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"generateOTP",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP",(n=this.state.mobile?this.state.mobile:document.getElementById("login").value).match(/^\d{10}$/g)){e.next=6;break}return alert(n?"Not a valid Mobile number!!":"Enter a mobile number!!"),e.abrupt("return");case 6:return s='{"mobile": "'+n+'","secret":"U2FsdGVkX19/McGZM4NEQd5p2SWF6Y0xW3qN7nRTdVMFVEWX7p/TBUziMOxvFx/WBPyJm16JTvVGx3IK29kEsw=="}',e.next=9,fetch(t,{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:s});case 9:return i=e.sent,e.next=12,i.json();case 12:return a=e.sent,this.txnId=a.txnId,null===this.state.mobile&&(this.setState({mobile:n,msg:"Confirm OTP"},this.myLogin),document.getElementById("login").value=""),e.abrupt("return",a);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"confirmOTP",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s,i,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp",n=document.getElementById("login").value){e.next=4;break}return e.abrupt("return",null);case 4:return s=f(n),i=this.txnId,a='{"otp": "'+s+'","txnId":"'+i+'"}',e.next=9,fetch(t,{method:"POST",headers:{Accept:"application/json","content-type":"application/json"},body:a});case 9:if((r=e.sent).ok){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,r.json();case 14:return c=e.sent,this.setState({token:c.token,msg:"getBeneficiaries"}),this.setCookie("token",c.token,15),e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBeneficiaries",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries",t=this.state.token?this.state.token:this.getCookie("token"),this.bearer="Bearer "+t,e.next=5,fetch("https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries",{method:"GET",headers:{Accept:"application/json","content-type":"application/json",authorization:this.bearer}});case 5:if((n=e.sent).ok){e.next=9;break}return this.reset(),e.abrupt("return",null);case 9:return e.abrupt("return",n.json());case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getBeneficiaries",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getBeneficiaries().then((function(e){return t=e.beneficiaries,n.setState({benList:t,msg:"Logged In"}),t}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"myLogin",value:function(){var e=this;if(console.log("myLogin() called!!"),"Send OTP"===this.state.msg){if(this.getCookie("token")&&""!==this.getCookie("token")&&"undefined"!==this.getCookie("token"))this.setState({msg:"getBeneficiaries",token:this.getCookie("token")});else if(this.state.mobile&&null!==this.state.mobile)return void this.loginHandler();return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"text",id:"login",autoFocus:!0,placeholder:"Enter Mobile",defaultValue:this.state.mobile}),Object(m.jsx)("button",{onClick:this.loginHandler,children:this.state.msg})]})}if("Confirm OTP"===this.state.msg)return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"text",id:"login",autoFocus:!0,placeholder:"Enter OTP"}),Object(m.jsx)("button",{onClick:this.loginHandler,children:this.state.msg})]});if("getBeneficiaries"===this.state.msg)this._getBeneficiaries();else if("Logged In"===this.state.msg)return this.interval=setInterval((function(){e.getBeneficiaries()}),3e5),this.props.onChange(this.state.benList,this.state.token),Object(m.jsxs)("div",{children:[Object(m.jsx)(x,{benList:this.state.benList,onClick:function(){return e.props.onChange(e.state.benList,e.state.token)}}),Object(m.jsx)("button",{onClick:function(){e.reset(!0)},children:"Logout"})]})}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"login",children:this.myLogin()})}}]),n}(i.a.Component)),y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={tracker:"Track",list:[]},s.pin="",s.getListByPin=s.getListByPin.bind(Object(b.a)(s)),s.clickHandler=s.clickHandler.bind(Object(b.a)(s)),s}return Object(h.a)(n,[{key:"getListByPin",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s,i,a,r,c,l,p,u,h,b=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear(),s="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+this.pin+"&date="+n,e.next=5,fetch(s,{method:"GET",headers:{Accept:"application/json","content-type":"application/json"}});case 5:return i=e.sent,e.next=8,i.json();case 8:a=e.sent,r=[],c="card ",l=[],p=this.props.inpObj.nameFilters.split(","),u=function(e){if(""!==b.props.inpObj.nameFilters&&!p.some((function(t){return a.centers[e].name.toUpperCase().includes(t.toUpperCase())})))return"continue";if("all"===b.props.inpObj.fee_type.toString()||a.centers[e].fee_type.toString()===b.props.inpObj.fee_type.toString()){r.push(Object(m.jsx)("br",{}));for(var t=0;t<a.centers[e].sessions.length;++t)c="card ",parseInt(a.centers[e].sessions[t].available_capacity_dose1)>0?parseInt(a.centers[e].sessions[t].available_capacity_dose2)>0?c+="available":c+="partial":parseInt(a.centers[e].sessions[t].available_capacity_dose2)>0?c+="partial":c+="booked",console.log(b.props.inpObj),"all"!==b.props.inpObj.vaccine&&a.centers[e].sessions[t].vaccine!==b.props.inpObj.vaccine||(a.centers[e].sessions[t].min_age_limit===b.props.inpObj.min_age_limit||a.centers[e].sessions[t].allow_all_age)&&(parseInt("dose1"===b.props.inpObj.dose?a.centers[e].sessions[t].available_capacity_dose1:a.centers[e].sessions[t].available_capacity_dose2)>0&&l.push(a.centers[e].sessions[t]),c+=" session",r.push(Object(m.jsxs)(g,{className:c,children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)("b",{children:a.centers[e].name})," - ",a.centers[e].fee_type]}),Object(m.jsx)("h3",{children:a.centers[e].sessions[t].date}),Object(m.jsxs)("h5",{children:["18"===a.centers[e].sessions[t].min_age_limit||a.centers[e].sessions[t].allow_all_age?"18 & above":"45+",Object(m.jsx)("br",{}),"Slots Available: ",a.centers[e].sessions[t].vaccine,Object(m.jsx)("br",{}),"Dose 1: ",a.centers[e].sessions[t].available_capacity_dose1,Object(m.jsx)("br",{}),"Dose 2: ",a.centers[e].sessions[t].available_capacity_dose2]})]})))}},h=0;case 13:if(!(h<a.centers.length)){e.next=20;break}if("continue"!==u(h)){e.next=17;break}return e.abrupt("continue",17);case 17:++h,e.next=13;break;case 20:return null===this.props.inpObj.appointment&&l.length>0&&this.props.clbk(l),this.setState({list:r}),e.abrupt("return",a);case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clickHandler",value:function(){var e=this;"Track"===this.state.tracker?(this.intId=setInterval((function(){e.getListByPin()}),8e3),this.setState({tracker:"Stop"})):(clearInterval(this.intId),this.setState({tracker:"Track"}))}},{key:"display",value:function(){var e=this,t=[];return t.push(Object(m.jsx)("input",{type:"number",maxLength:6,onChange:function(t){return e.pin=t.target.value}})),t.push(Object(m.jsx)("button",{onClick:this.clickHandler,children:this.state.tracker})),t.push(Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:["Filters:- Cost - ",this.props.inpObj.fee_type,", Age_limit - ",this.props.inpObj.min_age_limit,", Vaccine - ",this.props.inpObj.vaccine,", Dose - ",this.props.inpObj.dose]})})),t=[].concat(Object(p.a)(t),Object(p.a)(this.state.list))}},{key:"render",value:function(){return Object(m.jsx)("div",{children:this.display()})}}]),n}(i.a.Component),_=n(22);var C=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("select",Object(_.a)(Object(_.a)({},e),{},{children:e.options&&e.options.map((function(e){return Object(m.jsx)("option",{value:e.key,children:e.value},e.key)}))}))})},S=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state_id=1,s.state={states:"",dists:"",tracker:"Track",list:[]},s.getStates(),s.getDistricts(),s.getListByState=s.getListByState.bind(Object(b.a)(s)),s.clickHandler=s.clickHandler.bind(Object(b.a)(s)),s}return Object(h.a)(n,[{key:"getStates",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cdn-api.co-vin.in/api/v2/admin/location/states",e.next=3,fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states",{method:"GET",headers:{Accept:"application/json","content-type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:for(n=e.sent,this.stateList=[],s=0;s<n.states.length;s++)this.stateList.push({key:n.states[s].state_id,value:n.states[s].state_name});return this.setState({states:this.stateList}),e.abrupt("return",this.stateList);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDistricts",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+this.state_id,e.next=3,fetch(t,{method:"GET",headers:{Accept:"application/json","content-type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:for(s=e.sent,this.distList=[],i=0;i<s.districts.length;i++)this.distList.push({key:s.districts[i].district_id,value:s.districts[i].district_name});return this.setState({dists:this.distList}),this.dist=this.distList[0].key,console.log(this.dist),e.abrupt("return",this.distList);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getListByState",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s,i,a,r,c,l,p,u,h,b=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=new Date,s=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),i="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id="+this.dist+"&date="+s,e.next=6,fetch(i,{method:"GET",headers:{Accept:"application/json","content-type":"application/json"}});case 6:if((a=e.sent).ok){e.next=10;break}return t.push(Object(m.jsx)("div",{children:Object(m.jsx)("h5",{children:"Something Went wrong!!"})})),e.abrupt("return");case 10:return e.next=12,a.json();case 12:r=e.sent,l=[],p=this.props.inpObj.nameFilters.split(","),u=function(e){if(""!==b.props.inpObj.nameFilters&&!p.some((function(t){return r.centers[e].name.toUpperCase().includes(t.toUpperCase())})))return"continue";if("all"===b.props.inpObj.fee_type.toString()||r.centers[e].fee_type.toString()===b.props.inpObj.fee_type.toString()){t.push(Object(m.jsx)("br",{}));for(var n=0;n<r.centers[e].sessions.length;++n)c="card ",parseInt(r.centers[e].sessions[n].available_capacity_dose1)>0?parseInt(r.centers[e].sessions[n].available_capacity_dose2)>0?c+="available":c+="partial":parseInt(r.centers[e].sessions[n].available_capacity_dose2)>0?c+="partial":c+="booked",console.log(b.props.inpObj),"all"!==b.props.inpObj.vaccine&&r.centers[e].sessions[n].vaccine!==b.props.inpObj.vaccine||(r.centers[e].sessions[n].min_age_limit===b.props.inpObj.min_age_limit||r.centers[e].sessions[n].allow_all_age)&&(parseInt("dose1"===b.props.inpObj.dose?r.centers[e].sessions[n].available_capacity_dose1:r.centers[e].sessions[n].available_capacity_dose2)>0&&l.push(r.centers[e].sessions[n]),c+=" session",t.push(Object(m.jsxs)(g,{className:c,children:[Object(m.jsxs)("h3",{children:[Object(m.jsx)("b",{children:r.centers[e].name})," - ",r.centers[e].fee_type]}),Object(m.jsx)("h3",{children:r.centers[e].sessions[n].date}),Object(m.jsxs)("h5",{children:["18"===r.centers[e].sessions[n].min_age_limit||r.centers[e].sessions[n].allow_all_age?"18 & above":"45+",Object(m.jsx)("br",{}),"Slots Available: ",r.centers[e].sessions[n].vaccine,Object(m.jsx)("br",{}),"Dose 1: ",r.centers[e].sessions[n].available_capacity_dose1,Object(m.jsx)("br",{}),"Dose 2: ",r.centers[e].sessions[n].available_capacity_dose2]})]})))}},h=0;case 17:if(!(h<r.centers.length)){e.next=24;break}if("continue"!==u(h)){e.next=21;break}return e.abrupt("continue",21);case 21:++h,e.next=17;break;case 24:return null===this.props.inpObj.appointment&&l.length>0&&this.props.clbk(l),this.setState({list:t}),e.abrupt("return",r);case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clickHandler",value:function(){var e=this;"Track"===this.state.tracker?(console.log(this.dist),this.intId=setInterval((function(){e.getListByState()}),8e3),this.setState({tracker:"Stop"})):(clearInterval(this.intId),this.setState({tracker:"Track"}))}},{key:"display",value:function(){var e=this,t=[];return t.push(Object(m.jsx)(C,{onChange:function(t){e.state_id=t.target.value,e.getDistricts()},options:this.state.states})),t.push(Object(m.jsx)(C,{onChange:function(t){e.dist=t.target.value},options:this.state.dists})),t.push(Object(m.jsx)("button",{onClick:this.clickHandler,children:this.state.tracker})),t.push(Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:["Filters- Cost: ",this.props.inpObj.fee_type,", Age_limit: ",this.props.inpObj.min_age_limit,", Vaccine: ",this.props.inpObj.vaccine,", Dose: ",this.props.inpObj.dose]})})),t=[].concat(Object(p.a)(t),Object(p.a)(this.state.list))}},{key:"render",value:function(){return Object(m.jsx)("div",{children:this.display()})}}]),n}(s.Component),L=(n(37),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).loginResponse=function(t,n){for(var s=document.getElementsByName("benList"),i="",a=0;a<s.length;++a)if(!0===s[a].checked){i=s[a].value,console.log(i),e.inpObj.min_age_limit=(new Date).getFullYear()-t[a].birth_year>45?"45":"18",e.inpObj.dose="partially vaccinated"===t[a].vaccination_status?"dose2":"dose1",e.inpObj.vaccine="dose2"===e.inpObj.dose?t[a].vaccine:e.inpObj.vaccine;break}e.outObj.token=n,e.outObj.bid=i},e.state={appointment_id:null},e.outObj={token:"",bid:"",sesslist:[]},e.inpObj={fee_type:"Free",min_age_limit:"18",dose:"dose1",vaccine:"all",nameFilters:"",appointment:null},e.searchResponse=e.searchResponse.bind(Object(b.a)(e)),e.loginResponse=e.loginResponse.bind(Object(b.a)(e)),e}return Object(h.a)(n,[{key:"searchResponse",value:function(e){this.outObj.sesslist=e.length>0?Object(p.a)(e):[],console.log("searchResponse -- "+this.inpObj.appointment),null===this.inpObj.appointment&&""!==this.outObj.bid&&this.outObj.sesslist.length>0&&this.scheduleAppointment()}},{key:"_scheduleAppointment",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s,i,a,r,c,l,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.outObj.bid,s="dose1"===this.inpObj.dose?1:2,i=this.slots[0],a=this.inpObj.token,r="Bearer "+a,this.inpObj.appointment="booking",console.log("_schedulingAppointment -- "+this.inpObj.appointment),c='{"dose": "'+s+'", "session_id": "'+t+'", "slot": "'+i+'", "beneficiaries": ["'+n+'"]}',"https://cdn-api.co-vin.in/api/v2/appointment/schedule",e.next=11,fetch("https://cdn-api.co-vin.in/api/v2/appointment/schedule",{method:"POST",headers:{accept:"application/json",authorization:r,"content-type":"application/json"},body:c});case 11:if((l=e.sent).ok){e.next=15;break}return this.inpObj.appointment=null,e.abrupt("return");case 15:return e.next=17,l.json();case 17:return p=e.sent,this.inpObj.appointment="booked",console.log("_schedulingAppointment -- "+this.inpObj.appointment),this.setState({appointment_id:p.appointment_id}),e.abrupt("return",p);case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"scheduleAppointment",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.inpObj.appointment&&null===this.state.appointment_id){e.next=2;break}return e.abrupt("return");case 2:if(!(this.outObj.sesslist.length>0)){e.next=21;break}s=this.outObj.sesslist,i=0;case 5:if(!(i<s.length)){e.next=19;break}if(t=s[i].session_id,this.slots=s[i].slots,console.log("Trying to schedule Appointment..."),null!==this.inpObj.appointment){e.next=13;break}return e.next=12,this._scheduleAppointment(t);case 12:n=e.sent;case 13:if(console.log("scheduleAppointment -- "+this.inpObj.appointment),!n||!n.appointment_id){e.next=16;break}return e.abrupt("return",Object(m.jsx)("div",{children:"res.appointment_id"}));case 16:i++,e.next=5;break;case 19:e.next=23;break;case 21:if(!this.state.appointment_id){e.next=23;break}return e.abrupt("return",Object(m.jsx)("div",{children:this.state.appointment_id}));case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"display",value:function(){var e=this,t=[];return t.push(Object(m.jsx)("div",{children:Object(m.jsx)("table",{width:"100%",align:"center",children:Object(m.jsxs)("tbody",{children:[Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:"2",children:Object(m.jsx)(k,{onChange:this.loginResponse})})}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:"2",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Appointment: "}),null===this.state.appointment_id?"Not scheduled":this.state.appointment_id]})})}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:"2",children:Object(m.jsx)("div",{className:"filter",children:Object(m.jsxs)("div",{className:"tracker__controls",children:[Object(m.jsxs)("div",{className:"tracker__control",children:[Object(m.jsx)("label",{children:"Cost: "}),Object(m.jsxs)("select",{id:"fee_type",onChange:function(t){e.inpObj.fee_type=t.target.value},name:"fee_type",defaultValue:this.inpObj.fee_type,children:[Object(m.jsx)("option",{value:"all",children:"All"}),Object(m.jsx)("option",{value:"Free",children:"Free"}),Object(m.jsx)("option",{value:"Paid",children:"Paid"})]})]}),Object(m.jsxs)("div",{className:"tracker__control",children:[Object(m.jsx)("label",{children:"Age: "}),Object(m.jsxs)("select",{id:"min_age_limit",onChange:function(t){e.inpObj.min_age_limit=t.target.value},name:"min_age_limit",defaultValue:this.inpObj.min_age_limit,children:[Object(m.jsx)("option",{value:"18",children:"18+"}),Object(m.jsx)("option",{value:"45",children:"45+"})]})]}),Object(m.jsxs)("div",{className:"tracker__control",children:[Object(m.jsx)("label",{children:"Vaccine: "}),Object(m.jsxs)("select",{id:"vaccine",onChange:function(t){e.inpObj.vaccine=t.target.value},name:"vaccine",defaultValue:this.inpObj.vaccine,children:[Object(m.jsx)("option",{value:"all",children:"All"}),Object(m.jsx)("option",{value:"COVAXIN",children:"COVAXIN"}),Object(m.jsx)("option",{value:"COVISHIELD",children:"COVISHIELD"}),Object(m.jsx)("option",{value:"SPUTNIK V",children:"SPUTNIK V"})]})]}),Object(m.jsxs)("div",{className:"tracker__control",children:[Object(m.jsx)("label",{children:"Name Filter: "}),Object(m.jsx)("input",{type:"text",placeholder:"keyword to filter separated by comma(,)",onChange:function(t){e.inpObj.nameFilters=t.target.value}})]}),Object(m.jsx)("div",{className:"tracker__control",children:Object(m.jsxs)("select",{id:"dose",onChange:function(t){e.inpObj.dose=t.target.value},name:"dose",defaultValue:this.inpObj.dose,children:[Object(m.jsx)("option",{value:"dose1",children:"Dose 1"}),Object(m.jsx)("option",{value:"dose2",children:"Dose 2"})]})})]})})})}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:"2"})}),Object(m.jsxs)(O.a,{children:[Object(m.jsxs)("tr",{className:"tabs",children:[Object(m.jsx)("td",{children:Object(m.jsx)(v.a,{to:"/pin",className:"tab",children:"Search By Pincode"})}),Object(m.jsx)("td",{children:Object(m.jsx)(v.a,{to:"/dist",className:"tab",children:"Search By District"})})]}),Object(m.jsx)("tr",{children:Object(m.jsxs)("td",{colSpan:"2",className:"filter",children:[Object(m.jsx)(O.b,{path:"/pin",children:Object(m.jsx)(y,{inpObj:this.inpObj,clbk:this.searchResponse})}),Object(m.jsx)(O.b,{path:"/dist",children:Object(m.jsx)(S,{inpObj:this.inpObj,clbk:this.searchResponse})})]})})]})]})})})),t}},{key:"render",value:function(){return Object(m.jsx)("div",{children:this.display()})}}]),n}(i.a.Component));var T=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Cowin auto scheduling app"}),Object(m.jsx)("hr",{}),Object(m.jsx)(L,{}),Object(m.jsx)("hr",{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.3f7baa0e.chunk.js.map