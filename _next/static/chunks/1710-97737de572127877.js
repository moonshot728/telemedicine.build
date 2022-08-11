(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1710],{6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,s={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?s.loader=function(){return e}:"function"===typeof e?s.loader=e:"object"===typeof e&&(s=o({},s,e));if((s=o({},s,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");s.loadableGenerated&&delete(s=o({},s,s.loadableGenerated)).loadableGenerated;if("boolean"===typeof s.ssr&&!s.suspense){if(!s.ssr)return delete s.ssr,u(n,s);delete s.ssr}return n(s)},t.noSSR=u;s(n(7294));var a=s(n(4302));function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=n(7294))&&o.__esModule?o:{default:o},u=n(6319);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var l=n(1688).useSyncExternalStore,c=[],d=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!o){var t=new b(e,a);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=function(){n();var e=s.default.useContext(u.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=s.default.lazy(a.loader));var o=null;if(!f){var c=a.webpack?a.webpack():a.modules;c&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,s=c[Symbol.iterator]();!(t=(o=s.next()).done);t=!0){var u=o.value;if(-1!==e.indexOf(u))return n()}}catch(i){r=!0,a=i}finally{try{t||null==s.return||s.return()}finally{if(r)throw a}}}))}var p=a.suspense?function(e,t){return r(),s.default.createElement(a.lazy,i({},e,{ref:t}))}:function(e,t){r();var n=l(o.subscribe,o.getCurrentValue,o.getCurrentValue);return s.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),s.default.useMemo((function(){return n.loading||n.error?s.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:o.retry}):n.loaded?s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(n.loaded),e):null}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",s.default.forwardRef(p)}(p,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){y(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};y(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var v=h;t.default=v},5152:function(e,t,n){e.exports=n(638)},8369:function(e,t,n){"use strict";n.r(t),n.d(t,{Tab:function(){return F},TabList:function(){return k},TabPanel:function(){return K},Tabs:function(){return N},resetIdCounter:function(){return b}});var r=n(7294);function a(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var o=a("Tab"),s=a("TabList"),u=a("TabPanel");function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return o(e)||s(e)||u(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,r.cloneElement)(e,i({},e.props,{children:l(e.props.children,t)})):e}))}function c(e,t){return r.Children.forEach(e,(function(e){null!==e&&(o(e)||u(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(s(e)&&t(e),c(e.props.children,t)))}))}var d=n(6010),f=0;function p(){return"react-tabs-"+f++}function b(){f=0}function h(e){var t=0;return c(e,(function(e){o(e)&&t++})),t}var y,v=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function g(e){return e&&"getAttribute"in e}function T(e){return g(e)&&e.getAttribute("data-rttab")}function C(e){return g(e)&&"true"===e.getAttribute("aria-disabled")}var O=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props,r=n.direction,a=n.disableUpDownKeys;if(t.isTabFromContainer(e.target)){var o=t.props.selectedIndex,s=!1,u=!1;32!==e.keyCode&&13!==e.keyCode||(s=!0,u=!1,t.handleClick(e)),37===e.keyCode||!a&&38===e.keyCode?(o="rtl"===r?t.getNextTab(o):t.getPrevTab(o),s=!0,u=!0):39===e.keyCode||!a&&40===e.keyCode?(o="rtl"===r?t.getPrevTab(o):t.getNextTab(o),s=!0,u=!0):35===e.keyCode?(o=t.getLastTab(),s=!0,u=!0):36===e.keyCode&&(o=t.getFirstTab(),s=!0,u=!0),s&&e.preventDefault(),u&&t.setSelected(o,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(C(n))return;var r=[].slice.call(n.parentNode.children).filter(T).indexOf(n);return void t.setSelected(r,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,_(t,n);var i=a.prototype;return i.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},i.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!C(this.getTab(n)))return n;for(var r=0;r<e;r++)if(!C(this.getTab(r)))return r;return e},i.getPrevTab=function(e){for(var t=e;t--;)if(!C(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!C(this.getTab(t)))return t;return e},i.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!C(this.getTab(t)))return t;return null},i.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!C(this.getTab(e)))return e;return null},i.getTabsCount=function(){return h(this.props.children)},i.getPanelsCount=function(){return function(e){var t=0;return c(e,(function(e){u(e)&&t++})),t}(this.props.children)},i.getTab=function(e){return this.tabNodes["tabs-"+e]},i.getChildren=function(){var e=this,t=0,n=this.props,a=n.children,i=n.disabledTabClassName,c=n.focus,d=n.forceRenderTabPanel,f=n.selectedIndex,b=n.selectedTabClassName,h=n.selectedTabPanelClassName,v=n.environment;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var m=this.tabIds.length-this.getTabsCount();m++<0;)this.tabIds.push(p()),this.panelIds.push(p());return l(a,(function(n){var a=n;if(s(n)){var p=0,m=!1;null==y&&function(e){var t=e||("undefined"!==typeof window?window:void 0);try{y=!("undefined"===typeof t||!t.document||!t.document.activeElement)}catch(n){y=!1}}(v),y&&(m=r.Children.toArray(n.props.children).filter(o).some((function(t,n){var r=v||("undefined"!==typeof window?window:void 0);return r&&r.document.activeElement===e.getTab(n)}))),a=(0,r.cloneElement)(n,{children:l(n.props.children,(function(t){var n="tabs-"+p,a=f===p,o={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[p],panelId:e.panelIds[p],selected:a,focus:a&&(c||m)};return b&&(o.selectedClassName=b),i&&(o.disabledClassName=i),p++,(0,r.cloneElement)(t,o)}))})}else if(u(n)){var _={id:e.panelIds[t],tabId:e.tabIds[t],selected:f===t};d&&(_.forceRender=d),h&&(_.selectedClassName=h),t++,a=(0,r.cloneElement)(n,_)}return a}))},i.isTabFromContainer=function(e){if(!T(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1},i.render=function(){var e=this,t=this.props,n=(t.children,t.className),a=(t.disabledTabClassName,t.domRef),o=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,t.environment,t.disableUpDownKeys,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,v));return r.createElement("div",m({},o,{className:(0,d.Z)(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,a&&a(t)},"data-rttabs":!0}),this.getChildren())},a}(r.Component);O.defaultProps={className:"react-tabs",focus:!1},O.propTypes={};var w=["children","defaultIndex","defaultFocus"];function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}var N=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,r){var a=n.props.onSelect,o=n.state.mode;if("function"!==typeof a||!1!==a(e,t,r)){var s={focus:"keydown"===r.type};1===o&&(s.selectedIndex=e),n.setState(s)}},n.state=a.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,P(t,n),a.getDerivedStateFromProps=function(e,t){return a.copyPropsToState(e,t)},a.getModeFromProps=function(e){return null===e.selectedIndex?1:0},a.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var r={focus:n,mode:a.getModeFromProps(e)};if(1===r.mode){var o=Math.max(0,h(e.children)-1),s=null;s=null!=t.selectedIndex?Math.min(t.selectedIndex,o):e.defaultIndex||0,r.selectedIndex=s}return r},a.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,w)),a=this.state,o=a.focus,s=a.selectedIndex;return n.focus=o,n.onSelect=this.handleSelected,null!=s&&(n.selectedIndex=s),r.createElement(O,n,t)},a}(r.Component);N.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},N.propTypes={},N.tabsRole="Tabs";var x=["children","className"];function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}var k=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,I(t,n),a.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,x);return r.createElement("ul",j({},a,{className:(0,d.Z)(n),role:"tablist"}),t)},a}(r.Component);k.defaultProps={className:"react-tabs__tab-list"},k.propTypes={},k.tabsRole="TabList";var E=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}var D="react-tabs__tab",F=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,R(t,n);var o=a.prototype;return o.componentDidMount=function(){this.checkFocus()},o.componentDidUpdate=function(){this.checkFocus()},o.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},o.render=function(){var e,t=this,n=this.props,a=n.children,o=n.className,s=n.disabled,u=n.disabledClassName,i=(n.focus,n.id),l=n.panelId,c=n.selected,f=n.selectedClassName,p=n.tabIndex,b=n.tabRef,h=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,E);return r.createElement("li",S({},h,{className:(0,d.Z)(o,(e={},e[f]=c,e[u]=s,e)),ref:function(e){t.node=e,b&&b(e)},role:"tab",id:i,"aria-selected":c?"true":"false","aria-disabled":s?"true":"false","aria-controls":l,tabIndex:p||(c?"0":null),"data-rttab":!0}),a)},a}(r.Component);F.defaultProps={className:D,disabledClassName:D+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:D+"--selected"},F.propTypes={},F.tabsRole="Tab";var M=["children","className","forceRender","id","selected","selectedClassName","tabId"];function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}var Z="react-tabs__tab-panel",K=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,L(t,n),a.prototype.render=function(){var e,t=this.props,n=t.children,a=t.className,o=t.forceRender,s=t.id,u=t.selected,i=t.selectedClassName,l=t.tabId,c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,M);return r.createElement("div",A({},c,{className:(0,d.Z)(a,(e={},e[i]=u,e)),role:"tabpanel",id:s,"aria-labelledby":l}),o||u?n:null)},a}(r.Component);K.defaultProps={className:Z,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},K.propTypes={},K.tabsRole="TabPanel"},3250:function(e,t,n){"use strict";var r=n(7294);var a="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=r.useState,s=r.useEffect,u=r.useLayoutEffect,i=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(r){return!0}}var c="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),a=r[0].inst,c=r[1];return u((function(){a.value=n,a.getSnapshot=t,l(a)&&c({inst:a})}),[e,n,t]),s((function(){return l(a)&&c({inst:a}),e((function(){l(a)&&c({inst:a})}))}),[e]),i(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},1688:function(e,t,n){"use strict";e.exports=n(3250)},7568:function(e,t,n){"use strict";function r(e,t,n,r,a,o,s){try{var u=e[o](s),i=u.value}catch(l){return void n(l)}u.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var s=e.apply(t,n);function u(e){r(s,a,o,u,i,"next",e)}function i(e){r(s,a,o,u,i,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);