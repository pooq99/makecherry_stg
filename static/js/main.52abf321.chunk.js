(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(92)},44:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(9),r=a.n(o),i=a(1),c=a(2),l=a(4),m=a(3),u=a(5),d=a(10),p=(a(44),a(17)),h=a.n(p),_={NAVER_LOGIN_CALLBACK_URL:encodeURI("https://api.smartconsumer.kr/auth/callback&state="+window.location.href),KAKAO_LOGIN_CALLBACK_URL:encodeURI(Object({NODE_ENV:"production",PUBLIC_URL:"https://stg.makecherry.com",REACT_APP_CACHE_BUST:"201906221225",REACT_APP_LANGUAGE:"ko-KR",REACT_APP_NAME:"\uc2a4\ub9c8\ud2b8\ucee8\uc288\uba38",REACT_APP_TITLE:"\uc2a4\ub9c8\ud2b8\ucee8\uc288\uba38 - \uc778\uacf5\uc9c0\ub2a5 \ucd5c\uc800\uac00 \uc1fc\ud551",REACT_APP_DESCRIPTION:"\uc778\uacf5\uc9c0\ub2a5 \ucd5c\uc800\uac00 \uc1fc\ud551",REACT_APP_AUTHOR_EMAIL:"pooq99@smartconsumer.kr",REACT_APP_KEYWORDS:"\uc624\ud508\ub9c8\ucf13, \uc18c\uc15c\ucee4\uba38\uc2a4, \ud648\uc1fc\ud551, \ubc31\ud654\uc810, \uc138\uc77c, \ud2b9\uac00, \ucfe0\ud321, \uc704\uba54\ud504, \ud2f0\ubaac, \uc704\uba54\uc774\ud06c\ud504\ub77c\uc774\uc2a4, \ud2f0\ucf13\ubaac\uc2a4\ud130, \uc9c0\ub9c8\ucf13, G\ub9c8\ucf13, auction, \uc625\uc158, interpark, \uc778\ud130\ud30c\ud06c, 11\ubc88\uac00, 11st, \ucfe0\ud3f0, \ud2f0\ucf13, \ubc18\uac12, \uc1fc\ud551\ubab0, \uc9c0\uc2dd\uc1fc\ud551, \ud22c\ub370\uc774\uc138\uc77c, todaysale, \ucfe0\ud3f0\ubaa8\uc544, \ucfe0\ud3f0\ucc28\ud2b8, \ud558\ub8e8\ud558\ub098, \ud558\ub8e8\uc138\uc77c, \ubc18\uac12\ud560\uc778, \ubc18\uac12\ucfe0\ud3f0, \ubc18\uac12\ud2f0\ucf13, \ud560\uc778\ucfe0\ud3f0, \uc18c\uc15c\ucee4\uba38\uc2a4 \uc0ac\uc774\ud2b8 \uc21c\uc704",REACT_APP_EVENT_BANNER_PC:"true",REACT_APP_EVENT_BANNER_MOBILE:"true",REACT_APP_MENU_BUTTON:"true",REACT_APP_LOGIN_BUTTON:"true",REACT_APP_MENUS:"\ubca0\uc2a4\ud2b8:best;\uc5ec\uc131\uc758\ub958:women_fashion;\ub0a8\uc131\uc758\ub958:men_fashion;\uc720\uc544\ub3d9:baby;\uc2dd\ud488:food;\ubdf0\ud2f0:beauty;\uc2e0\ubc1c/\uc7a1\ud654:accessories;\uc0dd\ud65c/\ud648:home;\uac00\uc804/\ub514\uc9c0\ud138:digital;\uc2a4\ud3ec\uce20/\uc790\ub3d9\ucc28:sports;e\ucfe0\ud3f0/\ud2f0\ucf13:ticket",REACT_APP_NAVER_CLIENTID:"tY3NmTo6I13PbdT6MXAQ",REACT_APP_NAVER_CALLBACKURL:"https://api.smartconsumer.kr/auth/callback",REACT_APP_COOKIE_DOMAIN:".smartconsumer.kr",REACT_APP_PRODUCT_NAME:"www"}).REACT_APP_KAKAO_CALLBACKURL),SET_OF_LINKS:[{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38\ub4e4\uc758 \ud2b9\uac00 \uc0c1\ud488 \uc18c\uac1c",image:"https://cafe.pstatic.net/img/sns/cafe_ogtag_270x270_160618.png",link:"https://cafe.naver.com/smartconsumershop"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ud2b8\uc704\ud130",image:"https://abs.twimg.com/favicons/favicon.ico",link:"https://twitter.com/SmartConsumer9"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \uce74\uce74\uc624\uc2a4\ud1a0\ub9ac",image:"https://story-web-0.kakaocdn.net/public/web/story_icon_256x256.png",link:"https://story.kakao.com/smartconsumer9"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ube14\ub85c\uadf8",image:"https://stg.makecherry.com/images/favicon-32x32.png",link:"http://smartconsumer.kr"},{name:"\uc2a4\ub9c8\ud2b8 \ucee8\uc288\uba38 \ub124\uc774\ubc84 \ube14\ub85c\uadf8",image:"https://blogimgs.pstatic.net/nblog/mylog/post/og_default_image_160610.png",link:"https://pooq102.blog.me"}]},E=a(18),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e)))._isLogin=!1,a.handleInstall=function(e){var t=window.deferredPrompt;t&&(t.prompt(),t.userChoice.then(function(e){window.deferredPrompt=null,a.refs.btnInstall.setAttribute("hidden",!0)}))},a.handleRefresh=function(e){a.props.onRefresh(!0),window.scroll(0,0)},a.handleLogout=function(e){a.props.cookies.remove("sc_t",{path:"/",domain:".smartconsumer.kr"}),a._isLogin=!1},a.handleMenu=function(e){alert("menu")},window.addEventListener("beforeinstallprompt",function(e){window.deferredPrompt=e,a.refs.btnInstall.removeAttribute("hidden")}),window.addEventListener("appinstalled",function(e){console.log("https://stg.makecherry.com App was installed.",e)}),a._isLogin=a.props.cookies.get("sc_t"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=_.SET_OF_LINKS.map(function(e,t){return s.a.createElement("div",{key:t,className:"icon_item"},s.a.createElement("a",{href:e.link,className:"sc_anchor"},s.a.createElement("img",{className:"icon",src:e.image,alt:e.name}),s.a.createElement("span",{className:"desc"},e.name)))});return s.a.createElement("header",{className:"sc_header"},s.a.createElement(E.a,{trigger:s.a.createElement("button",{id:"btnMenu",className:"headerButton","aria-label":"\uba54\ub274"}),position:"right top",contentStyle:{width:"270px"},className:"icon_list_popup"},s.a.createElement("div",{className:"icon_list"},e)),s.a.createElement("div",{className:"sc_logo"},s.a.createElement("a",{href:"https://stg.makecherry.com/"},s.a.createElement("img",{src:"https://stg.makecherry.com/logo.png",alt:"\ub85c\uace0"}))),!this._isLogin&&s.a.createElement(E.a,{trigger:s.a.createElement("button",{id:"btnLogin",className:"headerButton","aria-label":"\ub85c\uadf8\uc778"}),position:"left top",onClose:this.handleLogout,contentStyle:{width:"195px"},className:"icon_list_popup"},s.a.createElement("div",{className:"menu"},s.a.createElement("div",{className:"menuItem"},s.a.createElement("a",{href:"https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=tY3NmTo6I13PbdT6MXAQ&redirect_uri="+_.NAVER_LOGIN_CALLBACK_URL},s.a.createElement("img",{className:"icon_only",src:"https://stg.makecherry.com/assets/images/naverlogin.png",alt:"\ub124\uc774\ubc84 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778"}))),s.a.createElement("div",{className:"menuItem"},s.a.createElement("a",{href:"https://kauth.kakao.com/oauth/authorize?client_id="+Object({NODE_ENV:"production",PUBLIC_URL:"https://stg.makecherry.com",REACT_APP_CACHE_BUST:"201906221225",REACT_APP_LANGUAGE:"ko-KR",REACT_APP_NAME:"\uc2a4\ub9c8\ud2b8\ucee8\uc288\uba38",REACT_APP_TITLE:"\uc2a4\ub9c8\ud2b8\ucee8\uc288\uba38 - \uc778\uacf5\uc9c0\ub2a5 \ucd5c\uc800\uac00 \uc1fc\ud551",REACT_APP_DESCRIPTION:"\uc778\uacf5\uc9c0\ub2a5 \ucd5c\uc800\uac00 \uc1fc\ud551",REACT_APP_AUTHOR_EMAIL:"pooq99@smartconsumer.kr",REACT_APP_KEYWORDS:"\uc624\ud508\ub9c8\ucf13, \uc18c\uc15c\ucee4\uba38\uc2a4, \ud648\uc1fc\ud551, \ubc31\ud654\uc810, \uc138\uc77c, \ud2b9\uac00, \ucfe0\ud321, \uc704\uba54\ud504, \ud2f0\ubaac, \uc704\uba54\uc774\ud06c\ud504\ub77c\uc774\uc2a4, \ud2f0\ucf13\ubaac\uc2a4\ud130, \uc9c0\ub9c8\ucf13, G\ub9c8\ucf13, auction, \uc625\uc158, interpark, \uc778\ud130\ud30c\ud06c, 11\ubc88\uac00, 11st, \ucfe0\ud3f0, \ud2f0\ucf13, \ubc18\uac12, \uc1fc\ud551\ubab0, \uc9c0\uc2dd\uc1fc\ud551, \ud22c\ub370\uc774\uc138\uc77c, todaysale, \ucfe0\ud3f0\ubaa8\uc544, \ucfe0\ud3f0\ucc28\ud2b8, \ud558\ub8e8\ud558\ub098, \ud558\ub8e8\uc138\uc77c, \ubc18\uac12\ud560\uc778, \ubc18\uac12\ucfe0\ud3f0, \ubc18\uac12\ud2f0\ucf13, \ud560\uc778\ucfe0\ud3f0, \uc18c\uc15c\ucee4\uba38\uc2a4 \uc0ac\uc774\ud2b8 \uc21c\uc704",REACT_APP_EVENT_BANNER_PC:"true",REACT_APP_EVENT_BANNER_MOBILE:"true",REACT_APP_MENU_BUTTON:"true",REACT_APP_LOGIN_BUTTON:"true",REACT_APP_MENUS:"\ubca0\uc2a4\ud2b8:best;\uc5ec\uc131\uc758\ub958:women_fashion;\ub0a8\uc131\uc758\ub958:men_fashion;\uc720\uc544\ub3d9:baby;\uc2dd\ud488:food;\ubdf0\ud2f0:beauty;\uc2e0\ubc1c/\uc7a1\ud654:accessories;\uc0dd\ud65c/\ud648:home;\uac00\uc804/\ub514\uc9c0\ud138:digital;\uc2a4\ud3ec\uce20/\uc790\ub3d9\ucc28:sports;e\ucfe0\ud3f0/\ud2f0\ucf13:ticket",REACT_APP_NAVER_CLIENTID:"tY3NmTo6I13PbdT6MXAQ",REACT_APP_NAVER_CALLBACKURL:"https://api.smartconsumer.kr/auth/callback",REACT_APP_COOKIE_DOMAIN:".smartconsumer.kr",REACT_APP_PRODUCT_NAME:"www"}).REACT_APP_KAKAO_APPKEY+"&redirect_uri="+_.KAKAO_LOGIN_CALLBACK_URL+"&response_type=code"},s.a.createElement("img",{className:"icon_only",src:"https://stg.makecherry.com/assets/images/kakaologin.png",alt:"\uce74\uce74\uc624 \ub85c\uadf8\uc778"}))))),this._isLogin&&s.a.createElement(E.a,{trigger:s.a.createElement("button",{id:"btnProfile",className:"headerButton","aria-label":"\ub0b4\uc815\ubcf4"}),position:"left top",contentStyle:{width:"130px"},className:"icon_list_popup"},s.a.createElement("img",{className:"icon_only",onClick:this.handleLogout,src:"https://stg.makecherry.com/assets/images/naverlogout.png",alt:"\ub124\uc774\ubc84 \uc544\uc774\ub514 \ub85c\uadf8\uc544\uc6c3"})),s.a.createElement("button",{id:"btnInstall",className:"headerButton",ref:"btnInstall",onClick:this.handleInstall,"aria-label":"\uc124\uce58",hidden:!0}),s.a.createElement("button",{id:"btnRefresh",className:"headerButton",onClick:this.handleRefresh,"aria-label":"\uc0c8\ub85c\uace0\uce68"}))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).handleShare=function(e){alert("share")},a.handleClickItem=function(e,t){window.location.href=e.link},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.item!==this.props.item}},{key:"render",value:function(){var e=this.props.item;return s.a.createElement("li",{className:"sc_item"},s.a.createElement("a",{href:e.link,className:"sc_anchor",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("div",{className:"sc_image"},s.a.createElement("div",{className:"sc_thumbnail"},s.a.createElement("img",{alt:e.title,src:e.image})),s.a.createElement("div",{className:"sc_sticker"},s.a.createElement("div",{className:"sc_mall",mall:e.mallName}))),s.a.createElement("div",{className:"sc_desc"},s.a.createElement("p",{className:"sc_title"},e.title),s.a.createElement("div",{className:"sc_price_area"},s.a.createElement("strong",{className:"sc_price_desc"},e.discount),s.a.createElement("span",{className:"sc_original_price"},s.a.createElement("i",{className:"sc_num"},e.orgPrice)),s.a.createElement("span",{className:"sc_price"},s.a.createElement("i",{className:"sc_num"},e.price))))))}}]),t}(s.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data.map(function(e,t){return s.a.createElement(f,{key:t,item:e})});return s.a.createElement("div",{className:"list_area"},s.a.createElement("ul",{className:"deals"},e))}}]),t}(n.Component);v.defaultProps={data:[]};var A=v,b=a(36),k=a.n(b),N=(a(79),a(37)),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s))))._isMounted=!1,a.state={responsive:!0},a.updateWindowDimensions=function(){var e=a.state.responsive;a._isMounted&&(e&&window.innerWidth>640?a.setState({responsive:!1}):!e&&window.innerWidth<=640&&a.setState({responsive:!0}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"clickBanner",value:function(e){var t=this.props.data;window.open(t[e].link,"_blank")}},{key:"render",value:function(){var e,t,a=this,n=this.props.data,o=this.state.responsive,r=!1;return this._isMounted&&(!o&&o||(r=!0)),r?o?(t={autoPlay:!0,infiniteLoop:!0,showThumbs:!1,dynamicHeight:!0,swipeable:!1},e=s.a.createElement(N.Carousel,Object.assign({},t,{onClickItem:function(e){a.clickBanner(e)}}),n.map(function(e,t){return s.a.createElement("div",{className:"carousel",key:t},s.a.createElement("img",{key:t,className:"image",src:e.image,alt:e.mallName}),s.a.createElement("div",{className:"sticker_evt"},s.a.createElement("div",{className:"mall",mall:e.mallName})))}))):(t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,centerMode:!0,adaptiveHeight:!0,variableWidth:!0,autoplay:!0,autoplaySpeed:3e3,pauseOnHover:!0,focusOnSelect:!1,centerPadding:"100px",className:"scSlide"},e=s.a.createElement(k.a,t,n.map(function(e,t){return s.a.createElement("a",{href:e.link,key:t,className:"anchor",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("div",{className:"carousel"},s.a.createElement("img",{className:"image",src:e.image,alt:e.link}),s.a.createElement("div",{className:"sticker_evt"},s.a.createElement("div",{className:"mall",mall:e.mallName}))))}))):e=s.a.createElement("div",null),e}}]),t}(n.Component);P.defaultProps={data:[]};var w=P,C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={intervalId:0},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"scrollStep",value:function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)}},{key:"scrollToTop",value:function(e){var t=setInterval(this.scrollStep.bind(this),this.props.delayInMs);this.setState({intervalId:t})}},{key:"render",value:function(){var e=this;return s.a.createElement("button",{title:"Back to top",className:"scroll",onClick:function(){e.scrollToTop(e)}})}}]),t}(s.a.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).handleClick=function(){return a.props.onClick(a.props.index,a.props.query)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{type:"button",className:this.props.isActive?"sc_menu_button selected":"sc_menu_button",onClick:this.handleClick},s.a.createElement("span",null,this.props.name))}}]),t}(s.a.Component),O=20,T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s))))._isLoading=!1,a.state={productList:[],events:null,activeIndex:0,menus:null,loading:!1},a.handleScroll=function(){var e=window.innerHeight;document.body.scrollHeight-e-(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)<100&&a.getProducts(!1)},a.getEvents=function(){h.a.get("https://api.smartconsumer.kr/api/getEvents?&size="+O).then(function(e){var t=e.data;a.setState({events:t})})},a.getProducts=function(e,t){if(!a._isLoading){a._isLoading=!0;var n=a.state,s=n.productList,o=n.activeIndex,r=n.menus,i=o;"undefined"!==t&&t>=0&&(i=t);var c=r[i].queryName,l=1;a.setState({loading:!0,activeIndex:i}),e||!s[i]?(console.log("type:"+c+" page:"+l),h.a.get("https://api.smartconsumer.kr/api/getProducts?page="+l+"&size="+O+"&name="+c).then(function(e){var t=e.data;s[i]={products:t,lastPage:l,noMoreProducts:!1},a.setState({productList:s})})):s[i].noMoreProducts||(l=s[i].lastPage+1,console.log("type:"+c+" page:"+l),h.a.get("https://api.smartconsumer.kr/api/getProducts?page="+l+"&size="+O+"&name="+c).then(function(e){var t=e.data;t.products.length>0?(t.products.map(function(e){return s[i].products.products.push(e)}),s[i].lastPage=l):s[i].noMoreProducts=!0}),a.setState({productList:s})),a.setState({loading:!1}),a._isLoading=!1}},a.handleMenuClick=function(e){a.getProducts(!1,e)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=String("\ubca0\uc2a4\ud2b8:best;\uc5ec\uc131\uc758\ub958:women_fashion;\ub0a8\uc131\uc758\ub958:men_fashion;\uc720\uc544\ub3d9:baby;\uc2dd\ud488:food;\ubdf0\ud2f0:beauty;\uc2e0\ubc1c/\uc7a1\ud654:accessories;\uc0dd\ud65c/\ud648:home;\uac00\uc804/\ub514\uc9c0\ud138:digital;\uc2a4\ud3ec\uce20/\uc790\ub3d9\ucc28:sports;e\ucfe0\ud3f0/\ud2f0\ucf13:ticket").split(";"),a=[],n=0,s=this.props.match.params.menu;t.forEach(function(e,t){var o=String(e).split(":"),r=a.push({displayName:o[0],queryName:o[1]})-1;o[1]===s&&(n=r)}),this.getEvents(),window.addEventListener("scroll",this.handleScroll),this.setState({menus:a},function(){return e.getProducts(!0,n)})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.productList,n=t.activeIndex,o=t.events,r=t.loading,i=t.menus,c=null;a[n]&&a[n].products&&(c=a[n].products);var l=null;return null!=i&&(l=i.map(function(t,a){return s.a.createElement(y,{key:t.queryName,index:a,isActive:e.state.activeIndex===a,onClick:e.handleMenuClick,name:t.displayName})})),s.a.createElement("div",null,s.a.createElement(g,{onRefresh:this.getProducts,cookies:this.props.cookies}),s.a.createElement("main",null,s.a.createElement("div",{className:"home"},o&&s.a.createElement(w,{data:o.products}),s.a.createElement("div",{align:"center"},l),null!==c&&s.a.createElement(A,{data:c.products}),s.a.createElement("h1",{align:"center",hidden:!r},"\uc0c1\ud488\uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4...")),s.a.createElement(C,{scrollStepInPx:"200",delayInMs:"0"})))}}]),t}(n.Component),R=a(16),L=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"TopApp"},s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"/:menu",render:function(t){return s.a.createElement(T,Object.assign({},t,{cookies:e.props.cookies}))}}),s.a.createElement(d.a,{path:"/",render:function(t){return s.a.createElement(T,Object.assign({},t,{cookies:e.props.cookies}))}})))}}]),t}(n.Component),I=Object(R.b)(L),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var M=a(22);r.a.render(s.a.createElement(R.a,null,s.a.createElement(M.a,null,s.a.createElement(I,null))),document.getElementById("wrap")),function(e){if("serviceWorker"in navigator){if(new URL("https://stg.makecherry.com",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("https://stg.makecherry.com","/service-worker.js");j?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(t,e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.52abf321.chunk.js.map