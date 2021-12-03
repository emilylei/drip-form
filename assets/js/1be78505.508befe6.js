"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[9514,4608],{

/***/ 8827:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ theme_DocPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/renderRoutes.js
var renderRoutes = __webpack_require__(6291);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 22 modules
var Layout = __webpack_require__(6751);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(1994);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(3783);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconArrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconArrow=function IconArrow(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({width:"20",height:"20","aria-hidden":"true"},props),/*#__PURE__*/react.createElement("g",{fill:"#7a7a7a"},/*#__PURE__*/react.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/react.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));};/* harmony default export */ var theme_IconArrow = (IconArrow);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(3919);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js + 1 modules
var IconExternalLink = __webpack_require__(7090);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"menuLinkText":"menuLinkText_OKON"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebarItem/index.js
var _excluded=["items"],_excluded2=["item"],_excluded3=["item","onItemClick","activePath","level"],_excluded4=["item","onItemClick","activePath","level"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var isActiveSidebarItem=function isActiveSidebarItem(item,activePath){if(item.type==='link'){return (0,lib/* isSamePath */.Mg)(item.href,activePath);}if(item.type==='category'){return item.items.some(function(subItem){return isActiveSidebarItem(subItem,activePath);});}return false;};// Optimize sidebar at each "level"
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
var DocSidebarItems=/*#__PURE__*/(0,react.memo)(function DocSidebarItems(_ref){var items=_ref.items,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement(react.Fragment,null,items.map(function(item,index){return/*#__PURE__*/react.createElement(DocSidebarItem,(0,esm_extends/* default */.Z)({key:index// sidebar is static, the index does not change
,item:item},props));}));});function DocSidebarItem(_ref2){var item=_ref2.item,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded2);switch(item.type){case'category':if(item.items.length===0){return null;}return/*#__PURE__*/react.createElement(DocSidebarItemCategory,(0,esm_extends/* default */.Z)({item:item},props));case'link':default:return/*#__PURE__*/react.createElement(DocSidebarItemLink,(0,esm_extends/* default */.Z)({item:item},props));}}// If we navigate to a category and it becomes active, it should automatically expand itself
function useAutoExpandActiveCategory(_ref3){var isActive=_ref3.isActive,collapsed=_ref3.collapsed,setCollapsed=_ref3.setCollapsed;var wasActive=(0,lib/* usePrevious */.D9)(isActive);(0,react.useEffect)(function(){var justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){setCollapsed(false);}},[isActive,wasActive,collapsed,setCollapsed]);}function DocSidebarItemCategory(_ref4){var _clsx;var item=_ref4.item,onItemClick=_ref4.onItemClick,activePath=_ref4.activePath,level=_ref4.level,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref4,_excluded3);var items=item.items,label=item.label,collapsible=item.collapsible,className=item.className;var isActive=isActiveSidebarItem(item,activePath);var _useCollapsible=(0,lib/* useCollapsible */.uR)({// active categories are always initialized as expanded
// the default (item.collapsed) is only used for non-active categories
initialState:function initialState(){if(!collapsible){return false;}return isActive?false:item.collapsed;}}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed,toggleCollapsed=_useCollapsible.toggleCollapsed;useAutoExpandActiveCategory({isActive:isActive,collapsed:collapsed,setCollapsed:setCollapsed});return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemCategory */.kM.docs.docSidebarItemCategory,lib/* ThemeClassNames.docs.docSidebarItemCategoryLevel */.kM.docs.docSidebarItemCategoryLevel(level),'menu__list-item',{'menu__list-item--collapsed':collapsed},className)},/*#__PURE__*/react.createElement("a",(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',(_clsx={'menu__link--sublist':collapsible,'menu__link--active':collapsible&&isActive},_clsx[styles_module.menuLinkText]=!collapsible,_clsx)),onClick:collapsible?function(e){e.preventDefault();toggleCollapsed();}:undefined,href:collapsible?'#':undefined},props),label),/*#__PURE__*/react.createElement(lib/* Collapsible */.zF,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed},/*#__PURE__*/react.createElement(DocSidebarItems,{items:items,tabIndex:collapsed?-1:0,onItemClick:onItemClick,activePath:activePath,level:level+1})));}function DocSidebarItemLink(_ref5){var item=_ref5.item,onItemClick=_ref5.onItemClick,activePath=_ref5.activePath,level=_ref5.level,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref5,_excluded4);var href=item.href,label=item.label,className=item.className;var isActive=isActiveSidebarItem(item,activePath);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarItemLink */.kM.docs.docSidebarItemLink,lib/* ThemeClassNames.docs.docSidebarItemLinkLevel */.kM.docs.docSidebarItemLinkLevel(level),'menu__list-item',className),key:label},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',{'menu__link--active':isActive}),"aria-current":isActive?'page':undefined,to:href},(0,isInternalUrl/* default */.Z)(href)&&{onClick:onItemClick},props),(0,isInternalUrl/* default */.Z)(href)?label:/*#__PURE__*/react.createElement("span",null,label,/*#__PURE__*/react.createElement(IconExternalLink/* default */.Z,null))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocSidebar_styles_module = ({"sidebar":"sidebar_a3j0","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_VlPv","sidebarHidden":"sidebarHidden_OqfG","sidebarLogo":"sidebarLogo_hmkv","menu":"menu_cyFh","menuWithAnnouncementBar":"menuWithAnnouncementBar_+O1J","collapseSidebarButton":"collapseSidebarButton_eoK2","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_e+kA","sidebarMenuIcon":"sidebarMenuIcon_iZzd","sidebarMenuCloseIcon":"sidebarMenuCloseIcon_6kU2"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useShowAnnouncementBar(){var _useAnnouncementBar=(0,lib/* useAnnouncementBar */.nT)(),isActive=_useAnnouncementBar.isActive;var _useState=(0,react.useState)(isActive),showAnnouncementBar=_useState[0],setShowAnnouncementBar=_useState[1];(0,lib/* useScrollPosition */.RF)(function(_ref){var scrollY=_ref.scrollY;if(isActive){setShowAnnouncementBar(scrollY===0);}},[isActive]);return isActive&&showAnnouncementBar;}function HideableSidebarButton(_ref2){var onClick=_ref2.onClick;return/*#__PURE__*/react.createElement("button",{type:"button",title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:(0,clsx_m/* default */.Z)('button button--secondary button--outline',DocSidebar_styles_module.collapseSidebarButton),onClick:onClick},/*#__PURE__*/react.createElement(theme_IconArrow,{className:DocSidebar_styles_module.collapseSidebarButtonIcon}));}function DocSidebarDesktop(_ref3){var _clsx,_clsx2;var path=_ref3.path,sidebar=_ref3.sidebar,onCollapse=_ref3.onCollapse,isHidden=_ref3.isHidden;var showAnnouncementBar=useShowAnnouncementBar();var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll,hideableSidebar=_useThemeConfig.hideableSidebar;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(DocSidebar_styles_module.sidebar,(_clsx={},_clsx[DocSidebar_styles_module.sidebarWithHideableNavbar]=hideOnScroll,_clsx[DocSidebar_styles_module.sidebarHidden]=isHidden,_clsx))},hideOnScroll&&/*#__PURE__*/react.createElement(Logo/* default */.Z,{tabIndex:-1,className:DocSidebar_styles_module.sidebarLogo}),/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.Z)('menu thin-scrollbar',DocSidebar_styles_module.menu,(_clsx2={},_clsx2[DocSidebar_styles_module.menuWithAnnouncementBar]=showAnnouncementBar,_clsx2))},/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarMenu */.kM.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(DocSidebarItems,{items:sidebar,activePath:path,level:1}))),hideableSidebar&&/*#__PURE__*/react.createElement(HideableSidebarButton,{onClick:onCollapse}));}var DocSidebarMobileSecondaryMenu=function DocSidebarMobileSecondaryMenu(_ref4){var toggleSidebar=_ref4.toggleSidebar,sidebar=_ref4.sidebar,path=_ref4.path;return/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docSidebarMenu */.kM.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(DocSidebarItems,{items:sidebar,activePath:path,onItemClick:function onItemClick(){return toggleSidebar();},level:1}));};function DocSidebarMobile(props){return/*#__PURE__*/react.createElement(lib/* MobileSecondaryMenuFiller */.Cv,{component:DocSidebarMobileSecondaryMenu,props:props});}var DocSidebarDesktopMemo=/*#__PURE__*/react.memo(DocSidebarDesktop);var DocSidebarMobileMemo=/*#__PURE__*/react.memo(DocSidebarMobile);function DocSidebar(props){var windowSize=(0,useWindowSize/* default */.Z)();// Desktop sidebar visible on hydration: need SSR rendering
var shouldRenderSidebarDesktop=windowSize==='desktop'||windowSize==='ssr';// Mobile sidebar not visible on hydration: can avoid SSR rendering
var shouldRenderSidebarMobile=windowSize==='mobile';return/*#__PURE__*/react.createElement(react.Fragment,null,shouldRenderSidebarDesktop&&/*#__PURE__*/react.createElement(DocSidebarDesktopMemo,props),shouldRenderSidebarMobile&&/*#__PURE__*/react.createElement(DocSidebarMobileMemo,props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js + 9 modules
var MDXComponents = __webpack_require__(1923);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/NotFound.js
var NotFound = __webpack_require__(4608);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var BackToTopButton_styles_module = ({"backToTopButton":"backToTopButton_i9tI","backToTopButtonShow":"backToTopButtonShow_wCmF"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var threshold=300;// Not all have support for smooth scrolling (particularly Safari mobile iOS)
// TODO proper detection is currently unreliable!
// see https://github.com/wessberg/scroll-behavior-polyfill/issues/16
var SupportsNativeSmoothScrolling=false;// const SupportsNativeSmoothScrolling = ExecutionEnvironment.canUseDOM && 'scrollBehavior' in document.documentElement.style;
function smoothScrollTopNative(){window.scrollTo({top:0,behavior:'smooth'});return function(){// Nothing to cancel, it's natively cancelled if user tries to scroll down
};}function smoothScrollTopPolyfill(){var raf=null;function rafRecursion(){var currentScroll=document.documentElement.scrollTop;if(currentScroll>0){raf=requestAnimationFrame(rafRecursion);window.scrollTo(0,Math.floor(currentScroll*0.85));}}rafRecursion();// Break the recursion
// Prevents the user from "fighting" against that recursion producing a weird UX
return function(){return raf&&cancelAnimationFrame(raf);};}function useSmoothScrollToTop(){var lastCancelRef=(0,react.useRef)(null);function smoothScrollTop(){lastCancelRef.current=SupportsNativeSmoothScrolling?smoothScrollTopNative():smoothScrollTopPolyfill();}return{smoothScrollTop:smoothScrollTop,cancelScrollToTop:function cancelScrollToTop(){return lastCancelRef.current==null?void 0:lastCancelRef.current();}};}function BackToTopButton(){var _clsx;var _useState=(0,react.useState)(false),show=_useState[0],setShow=_useState[1];var isFocusedAnchor=(0,react.useRef)(false);var _useSmoothScrollToTop=useSmoothScrollToTop(),smoothScrollTop=_useSmoothScrollToTop.smoothScrollTop,cancelScrollToTop=_useSmoothScrollToTop.cancelScrollToTop;(0,lib/* useScrollPosition */.RF)(function(_ref,lastPosition){var scrollTop=_ref.scrollY;var lastScrollTop=lastPosition==null?void 0:lastPosition.scrollY;// No lastScrollTop means component is just being mounted.
// Not really a scroll event from the user, so we ignore it
if(!lastScrollTop){return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;return;}var isScrollingUp=scrollTop<lastScrollTop;if(!isScrollingUp){cancelScrollToTop();}if(scrollTop<threshold){setShow(false);return;}if(isScrollingUp){var documentHeight=document.documentElement.scrollHeight;var windowHeight=window.innerHeight;if(scrollTop+windowHeight<documentHeight){setShow(true);}}else{setShow(false);}});(0,lib/* useLocationChange */.SL)(function(locationChangeEvent){if(locationChangeEvent.location.hash){isFocusedAnchor.current=true;setShow(false);}});return/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.I)({id:'theme.BackToTopButton.buttonAriaLabel',message:'Scroll back to top',description:'The ARIA label for the back to top button'}),className:(0,clsx_m/* default */.Z)('clean-btn',lib/* ThemeClassNames.common.backToTopButton */.kM.common.backToTopButton,BackToTopButton_styles_module.backToTopButton,(_clsx={},_clsx[BackToTopButton_styles_module.backToTopButtonShow]=show,_clsx)),type:"button",onClick:function onClick(){return smoothScrollTop();}});}/* harmony default export */ var theme_BackToTopButton = (BackToTopButton);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(6775);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocPage_styles_module = ({"docPage":"docPage_lDyR","docMainContainer":"docMainContainer_r8cw","docSidebarContainer":"docSidebarContainer_0YBq","docMainContainerEnhanced":"docMainContainerEnhanced_SOUu","docSidebarContainerHidden":"docSidebarContainerHidden_Qlt2","collapsedDocSidebar":"collapsedDocSidebar_zZpm","expandSidebarButtonIcon":"expandSidebarButtonIcon_cxi8","docItemWrapperEnhanced":"docItemWrapperEnhanced_aT5H"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js + 1 modules
var Head = __webpack_require__(2859);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageContent(_ref){var _clsx,_clsx2,_clsx3;var currentDocRoute=_ref.currentDocRoute,versionMetadata=_ref.versionMetadata,children=_ref.children;var pluginId=versionMetadata.pluginId,version=versionMetadata.version;var sidebarName=currentDocRoute.sidebar;var sidebar=sidebarName?versionMetadata.docsSidebars[sidebarName]:undefined;var _useState=(0,react.useState)(false),hiddenSidebarContainer=_useState[0],setHiddenSidebarContainer=_useState[1];var _useState2=(0,react.useState)(false),hiddenSidebar=_useState2[0],setHiddenSidebar=_useState2[1];var toggleSidebar=(0,react.useCallback)(function(){if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(function(value){return!value;});},[hiddenSidebar]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{wrapperClassName:lib/* ThemeClassNames.wrapper.docsPages */.kM.wrapper.docsPages,pageClassName:lib/* ThemeClassNames.page.docsDocPage */.kM.page.docsDocPage,searchMetadatas:{version:version,tag:(0,lib/* docVersionSearchTag */.os)(pluginId,version)}},/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.docPage},/*#__PURE__*/react.createElement(theme_BackToTopButton,null),sidebar&&/*#__PURE__*/react.createElement("aside",{className:(0,clsx_m/* default */.Z)(DocPage_styles_module.docSidebarContainer,(_clsx={},_clsx[DocPage_styles_module.docSidebarContainerHidden]=hiddenSidebarContainer,_clsx)),onTransitionEnd:function onTransitionEnd(e){if(!e.currentTarget.classList.contains(DocPage_styles_module.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}}},/*#__PURE__*/react.createElement(DocSidebar,{key:// Reset sidebar state on sidebar changes
// See https://github.com/facebook/docusaurus/issues/3414
sidebarName,sidebar:sidebar,path:currentDocRoute.path,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.collapsedDocSidebar,title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react.createElement(theme_IconArrow,{className:DocPage_styles_module.expandSidebarButtonIcon}))),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)(DocPage_styles_module.docMainContainer,(_clsx2={},_clsx2[DocPage_styles_module.docMainContainerEnhanced]=hiddenSidebarContainer||!sidebar,_clsx2))},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('container padding-top--md padding-bottom--lg',DocPage_styles_module.docItemWrapper,(_clsx3={},_clsx3[DocPage_styles_module.docItemWrapperEnhanced]=hiddenSidebarContainer,_clsx3))},/*#__PURE__*/react.createElement(esm/* MDXProvider */.Zo,{components:MDXComponents/* default */.Z},children)))));}function DocPage(props){var docRoutes=props.route.routes,versionMetadata=props.versionMetadata,location=props.location;var currentDocRoute=docRoutes.find(function(docRoute){return (0,react_router/* matchPath */.LX)(location.pathname,docRoute);});if(!currentDocRoute){return/*#__PURE__*/react.createElement(NotFound["default"],null);}return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("html",{className:versionMetadata.className})),/*#__PURE__*/react.createElement(DocPageContent,{currentDocRoute:currentDocRoute,versionMetadata:versionMetadata},(0,renderRoutes/* default */.Z)(docRoutes,{versionMetadata:versionMetadata})));}/* harmony default export */ var theme_DocPage = (DocPage);

/***/ }),

/***/ 4608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6751);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5999);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFound(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{title:(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .I)({id:'theme.NotFound.title',message:'Page Not Found'})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{className:"container margin-vert--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col col--6 col--offset-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"hero__title"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))));}/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ })

}]);