(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{2181:function(e,a,t){"use strict";t.r(a);var r=t(40),l=t(41),n=t(44),o=t(42),s=t(43),c=t(0),i=t.n(c),m=t(1688),u=t(496),p=t(29),g=t(1657),d=t(106),f=t(1676),E=m.a.Item,h=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(t=Object(n.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){console.log("values",a)})},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return i.a.createElement("div",{className:"gx-login-container"},i.a.createElement("div",{className:"gx-login-content"},i.a.createElement("div",{className:"gx-login-header gx-text-center"},i.a.createElement("h1",{className:"gx-login-title"},"Sign In")),i.a.createElement(m.a,{onSubmit:this.handleSubmit,className:"gx-login-form gx-form-row0"},i.a.createElement(E,null,e("email",{rules:[{required:!0,message:"Please input your email!"}]})(i.a.createElement(u.a,{prefix:i.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),i.a.createElement(E,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(i.a.createElement(u.a,{prefix:i.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),i.a.createElement(E,null,e("remember",{valuePropName:"checked",initialValue:!0})(i.a.createElement(g.a,null,"Remember me")),i.a.createElement(f.a,{className:"gx-login-form-forgot",to:"/custom-views/user-auth/forgot-password"},"Forgot password")),i.a.createElement(E,{className:"gx-text-center"},i.a.createElement(d.a,{type:"primary",htmlType:"submit"},"Log in")))))}}]),a}(c.Component),b=m.a.create()(h);a.default=b}}]);
//# sourceMappingURL=156.99472d92.chunk.js.map