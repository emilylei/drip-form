"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[7918],{

/***/ 9960:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ exports_Link; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(3919);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/LinksCollector.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var createStatefulLinksCollector=function createStatefulLinksCollector(){// Set to dedup, as it's not useful to collect multiple times the same link
var allLinks=new Set();return{collectLink:function collectLink(link){allLinks.add(link);},getCollectedLinks:function getCollectedLinks(){return[].concat(allLinks);}};};var Context=/*#__PURE__*/(0,react.createContext)({collectLink:function collectLink(){// noop by default for client
// we only use the broken links checker server-side
}});var useLinksCollector=function useLinksCollector(){return (0,react.useContext)(Context);};var ProvideLinksCollector=function ProvideLinksCollector(_ref){var children=_ref.children,linksCollector=_ref.linksCollector;return/*#__PURE__*/React.createElement(Context.Provider,{value:linksCollector},children);};
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(8780);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var _excluded=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
var shouldAddBaseUrlAutomatically=function shouldAddBaseUrlAutomatically(to){return to.startsWith('/');};function Link(_ref){var isNavLink=_ref.isNavLink,to=_ref.to,href=_ref.href,activeClassName=_ref.activeClassName,isActive=_ref.isActive,noBrokenLinkCheck=_ref['data-noBrokenLinkCheck'],_ref$autoAddBaseUrl=_ref.autoAddBaseUrl,autoAddBaseUrl=_ref$autoAddBaseUrl===void 0?true:_ref$autoAddBaseUrl,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);var _a;var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,trailingSlash=_useDocusaurusContext2.trailingSlash,baseUrl=_useDocusaurusContext2.baseUrl;var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var linksCollector=useLinksCollector();// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
var targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}var isInternal=(0,isInternalUrl/* default */.Z)(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
var targetLinkWithoutPathnameProtocol=targetLinkUnprefixed===null||targetLinkUnprefixed===void 0?void 0:targetLinkUnprefixed.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
var targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;if(targetLink&&isInternal){targetLink=(0,lib.applyTrailingSlash)(targetLink,{trailingSlash:trailingSlash,baseUrl:baseUrl});}var preloaded=(0,react.useRef)(false);var LinkComponent=isNavLink?react_router_dom/* NavLink */.OL:react_router_dom/* Link */.rU;var IOSupported=ExecutionEnvironment/* default.canUseIntersectionObserver */.Z.canUseIntersectionObserver;var ioRef=(0,react.useRef)();var handleIntersection=function handleIntersection(el,cb){ioRef.current=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){// If element is in viewport, stop listening/observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){ioRef.current.unobserve(el);ioRef.current.disconnect();cb();}}});});// Add element to the observer.
ioRef.current.observe(el);};var handleRef=function handleRef(ref){if(IOSupported&&ref&&isInternal){// If IO supported and element reference found, setup Observer functionality.
handleIntersection(ref,function(){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}});}};var onMouseEnter=function onMouseEnter(){if(!preloaded.current&&targetLink!=null){window.docusaurus.preload(targetLink);preloaded.current=true;}};(0,react.useEffect)(function(){// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}// When unmounting, stop intersection observer from watching.
return function(){if(IOSupported&&ioRef.current){ioRef.current.disconnect();}};},[ioRef,targetLink,IOSupported,isInternal]);var isAnchorLink=(_a=targetLink===null||targetLink===void 0?void 0:targetLink.startsWith('#'))!==null&&_a!==void 0?_a:false;var isRegularHtmlLink=!targetLink||!isInternal||isAnchorLink;if(targetLink&&isInternal&&!isAnchorLink&&!noBrokenLinkCheck){linksCollector.collectLink(targetLink);}return isRegularHtmlLink?/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
react.createElement("a",Object.assign({href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'},props)):/*#__PURE__*/react.createElement(LinkComponent,Object.assign({},props,{onMouseEnter:onMouseEnter,innerRef:handleRef,to:targetLink||''},isNavLink&&{isActive:isActive,activeClassName:activeClassName}));}/* harmony default export */ var exports_Link = (Link);

/***/ }),

/***/ 6909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DocItem; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(3783);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){var metadata=props.metadata;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.I)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages navigation',description:'The ARIA label for the docs pagination'})},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item"},metadata.previous&&/*#__PURE__*/react.createElement(Link/* default */.Z,{className:"pagination-nav__link",to:metadata.previous.permalink},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__sublabel"},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__label"},"\xAB ",metadata.previous.title))),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},metadata.next&&/*#__PURE__*/react.createElement(Link/* default */.Z,{className:"pagination-nav__link",to:metadata.next.permalink},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__sublabel"},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__label"},metadata.next.title," \xBB"))));}/* harmony default export */ var theme_DocPaginator = (DocPaginator);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(907);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(1994);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel(_ref){var siteTitle=_ref.siteTitle,versionMetadata=_ref.versionMetadata;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is unreleased documentation for {siteTitle} {versionLabel} version.');}function UnmaintainedVersionLabel(_ref2){var siteTitle=_ref2.siteTitle,versionMetadata=_ref2.versionMetadata;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');}var BannerLabelComponents={unreleased:UnreleasedVersionLabel,unmaintained:UnmaintainedVersionLabel};function BannerLabel(props){var BannerLabelComponent=BannerLabelComponents[props.versionMetadata.banner];return/*#__PURE__*/react.createElement(BannerLabelComponent,props);}function LatestVersionSuggestionLabel(_ref3){var versionLabel=_ref3.versionLabel,to=_ref3.to,onClick=_ref3.onClick;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:versionLabel,latestVersionLink:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:to,onClick:onClick},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');}function DocVersionBannerEnabled(_ref4){var versionMetadata=_ref4.versionMetadata;var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),siteTitle=_useDocusaurusContext.siteConfig.title;var _useActivePlugin=(0,useDocs/* useActivePlugin */.gA)({failfast:true}),pluginId=_useActivePlugin.pluginId;var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};var _useDocsPreferredVers=(0,lib/* useDocsPreferredVersion */.J)(pluginId),savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;var _useDocVersionSuggest=(0,useDocs/* useDocVersionSuggestions */.Jo)(pluginId),latestDocSuggestion=_useDocVersionSuggest.latestDocSuggestion,latestVersionSuggestion=_useDocVersionSuggest.latestVersionSuggestion;// try to link to same doc in latest version (not always possible)
// fallback to main doc of latest version
var latestVersionSuggestedDoc=latestDocSuggestion!=null?latestDocSuggestion:getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docVersionBanner */.kM.docs.docVersionBanner,'alert alert--warning margin-bottom--md'),role:"alert"},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(BannerLabel,{siteTitle:siteTitle,versionMetadata:versionMetadata})),/*#__PURE__*/react.createElement("div",{className:"margin-top--md"},/*#__PURE__*/react.createElement(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:function onClick(){return savePreferredVersionName(latestVersionSuggestion.name);}})));}function DocVersionBanner(_ref5){var versionMetadata=_ref5.versionMetadata;if(versionMetadata.banner){return/*#__PURE__*/react.createElement(DocVersionBannerEnabled,{versionMetadata:versionMetadata});}return/*#__PURE__*/react.createElement(react.Fragment,null);}/* harmony default export */ var theme_DocVersionBanner = (DocVersionBanner);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(1217);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate(_ref){var lastUpdatedAt=_ref.lastUpdatedAt,formattedLastUpdatedAt=_ref.formattedLastUpdatedAt;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString()},formattedLastUpdatedAt))}},' on {date}');}function LastUpdatedByUser(_ref2){var lastUpdatedBy=_ref2.lastUpdatedBy;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/react.createElement("b",null,lastUpdatedBy)}},' by {user}');}function LastUpdated(_ref3){var lastUpdatedAt=_ref3.lastUpdatedAt,formattedLastUpdatedAt=_ref3.formattedLastUpdatedAt,lastUpdatedBy=_ref3.lastUpdatedBy;return/*#__PURE__*/react.createElement("span",{className:lib/* ThemeClassNames.common.lastUpdated */.kM.common.lastUpdated},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt&&formattedLastUpdatedAt?/*#__PURE__*/react.createElement(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/react.createElement(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''}},'Last updated{atDate}{byUser}'), false&&/*#__PURE__*/0);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js + 2 modules
var EditThisPage = __webpack_require__(6645);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__(9261);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"lastUpdated":"lastUpdated_mt2f"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsRow(props){return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooterTagsRow */.kM.docs.docFooterTagsRow,'row margin-bottom--sm')},/*#__PURE__*/react.createElement("div",{className:"col"},/*#__PURE__*/react.createElement(TagsListInline/* default */.Z,props)));}function EditMetaRow(_ref){var editUrl=_ref.editUrl,lastUpdatedAt=_ref.lastUpdatedAt,lastUpdatedBy=_ref.lastUpdatedBy,formattedLastUpdatedAt=_ref.formattedLastUpdatedAt;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooterEditMetaRow */.kM.docs.docFooterEditMetaRow,'row')},/*#__PURE__*/react.createElement("div",{className:"col"},editUrl&&/*#__PURE__*/react.createElement(EditThisPage/* default */.Z,{editUrl:editUrl})),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',styles_module.lastUpdated)},(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react.createElement(LastUpdated,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt,lastUpdatedBy:lastUpdatedBy})));}function DocItemFooter(props){var DocContent=props.content;var metadata=DocContent.metadata;var editUrl=metadata.editUrl,lastUpdatedAt=metadata.lastUpdatedAt,formattedLastUpdatedAt=metadata.formattedLastUpdatedAt,lastUpdatedBy=metadata.lastUpdatedBy,tags=metadata.tags;var canDisplayTagsRow=tags.length>0;var canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);var canDisplayFooter=canDisplayTagsRow||canDisplayEditMetaRow;if(!canDisplayFooter){return/*#__PURE__*/react.createElement(react.Fragment,null);}return/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooter */.kM.docs.docFooter,'docusaurus-mt-lg')},canDisplayTagsRow&&/*#__PURE__*/react.createElement(TagsRow,{tags:tags}),canDisplayEditMetaRow&&/*#__PURE__*/react.createElement(EditMetaRow,{editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy,formattedLastUpdatedAt:formattedLastUpdatedAt}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(9819);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_aw-L","tocCollapsibleButton":"tocCollapsibleButton_zr6a","tocCollapsibleContent":"tocCollapsibleContent_0dom","tocCollapsibleExpanded":"tocCollapsibleExpanded_FSiv"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js
var TOCItems = __webpack_require__(5002);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsible(_ref){var _clsx;var toc=_ref.toc,className=_ref.className,minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;var _useCollapsible=(0,lib/* useCollapsible */.uR)({initialState:true}),collapsed=_useCollapsible.collapsed,toggleCollapsed=_useCollapsible.toggleCollapsed;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(TOCCollapsible_styles_module.tocCollapsible,(_clsx={},_clsx[TOCCollapsible_styles_module.tocCollapsibleExpanded]=!collapsed,_clsx),className)},/*#__PURE__*/react.createElement("button",{type:"button",className:(0,clsx_m/* default */.Z)('clean-btn',TOCCollapsible_styles_module.tocCollapsibleButton),onClick:toggleCollapsed},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),/*#__PURE__*/react.createElement(lib/* Collapsible */.zF,{lazy:true,className:TOCCollapsible_styles_module.tocCollapsibleContent,collapsed:collapsed},/*#__PURE__*/react.createElement(TOCItems/* default */.Z,{toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(8280);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocItem_styles_module = ({"docItemContainer":"docItemContainer_oiyr","docItemCol":"docItemCol_zHA2","tocMobile":"tocMobile_Tx6Y"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItem(props){var _clsx;var DocContent=props.content,versionMetadata=props.versionMetadata;var metadata=DocContent.metadata,frontMatter=DocContent.frontMatter;var image=frontMatter.image,keywords=frontMatter.keywords,hideTitle=frontMatter.hide_title,hideTableOfContents=frontMatter.hide_table_of_contents,tocMinHeadingLevel=frontMatter.toc_min_heading_level,tocMaxHeadingLevel=frontMatter.toc_max_heading_level;var description=metadata.description,title=metadata.title;// We only add a title if:
// - user asks to hide it with frontmatter
// - the markdown content does not already contain a top-level h1 heading
var shouldAddTitle=!hideTitle&&typeof DocContent.contentTitle==='undefined';var windowSize=(0,useWindowSize/* default */.Z)();var canRenderTOC=!hideTableOfContents&&DocContent.toc&&DocContent.toc.length>0;var renderTocDesktop=canRenderTOC&&(windowSize==='desktop'||windowSize==='ssr');return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Seo/* default */.Z,{title:title,description:description,keywords:keywords,image:image}),/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',(_clsx={},_clsx[DocItem_styles_module.docItemCol]=!hideTableOfContents,_clsx))},/*#__PURE__*/react.createElement(theme_DocVersionBanner,{versionMetadata:versionMetadata}),/*#__PURE__*/react.createElement("div",{className:DocItem_styles_module.docItemContainer},/*#__PURE__*/react.createElement("article",null,versionMetadata.badge&&/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docVersionBadge */.kM.docs.docVersionBadge,'badge badge--secondary')},"Version: ",versionMetadata.label),canRenderTOC&&/*#__PURE__*/react.createElement(TOCCollapsible,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docTocMobile */.kM.docs.docTocMobile,DocItem_styles_module.tocMobile)}),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docMarkdown */.kM.docs.docMarkdown,'markdown')},shouldAddTitle&&/*#__PURE__*/react.createElement(Heading/* MainHeading */.N,null,title),/*#__PURE__*/react.createElement(DocContent,null)),/*#__PURE__*/react.createElement(DocItemFooter,props)),/*#__PURE__*/react.createElement(theme_DocPaginator,{metadata:metadata}))),renderTocDesktop&&/*#__PURE__*/react.createElement("div",{className:"col col--3"},/*#__PURE__*/react.createElement(TOC/* default */.Z,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:lib/* ThemeClassNames.docs.docTocDesktop */.kM.docs.docTocDesktop}))));}

/***/ }),

/***/ 6645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ EditThisPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"iconEdit":"iconEdit_mS5F"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconEdit=function IconEdit(_ref){var className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.Z)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));};/* harmony default export */ var theme_IconEdit = (IconEdit);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(1994);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){var editUrl=_ref.editUrl;return/*#__PURE__*/react.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener",className:lib/* ThemeClassNames.common.editThisPage */.kM.common.editThisPage},/*#__PURE__*/react.createElement(theme_IconEdit,null),/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}

/***/ }),

/***/ 8280:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": function() { return /* binding */ MainHeading; },
  "Z": function() { return /* binding */ theme_Heading; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(1994);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_y2LR","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_3ly5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
var _excluded=["id"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MainHeading=function MainHeading(_ref){var props=Object.assign({},_ref);return/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("h1",(0,esm_extends/* default */.Z)({},props,{id:undefined// h1 headings do not need an id because they don't appear in the TOC
}),props.children));};var createAnchorHeading=function createAnchorHeading(Tag){return function TargetComponent(_ref2){var _clsx;var id=_ref2.id,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded);var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;if(!id){return/*#__PURE__*/react.createElement(Tag,props);}return/*#__PURE__*/react.createElement(Tag,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)('anchor',(_clsx={},_clsx[styles_module.anchorWithHideOnScrollNavbar]=hideOnScroll,_clsx[styles_module.anchorWithStickyNavbar]=!hideOnScroll,_clsx)),id:id}),props.children,/*#__PURE__*/react.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+id,title:(0,Translate/* translate */.I)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"\u200B"));};};var Heading=function Heading(headingType){return headingType==='h1'?MainHeading:createAnchorHeading(headingType);};/* harmony default export */ var theme_Heading = (Heading);

/***/ }),

/***/ 1217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Seo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2859);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1994);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4996);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Seo(_ref){var title=_ref.title,description=_ref.description,keywords=_ref.keywords,image=_ref.image,children=_ref.children;var pageTitle=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useTitleFormatter */ .pe)(title);var _useBaseUrlUtils=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .useBaseUrlUtils */ .C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var pageImage=image?withBaseUrl(image,{absolute:true}):undefined;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,title&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,pageTitle),title&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:pageTitle}),description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:description}),description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:description}),keywords&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"keywords",content:Array.isArray(keywords)?keywords.join(','):keywords}),pageImage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:image",content:pageImage}),pageImage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:image",content:pageImage}),children);}

/***/ }),

/***/ 9819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_TOC; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js
var TOCItems = __webpack_require__(5002);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tableOfContents":"tableOfContents_vrFS","docItemContainer":"docItemContainer_VKW9"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOC highlighting to highlight TOCInline/TOCCollapsible by mistake
var LINK_CLASS_NAME='table-of-contents__link toc-highlight';var LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){var className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.tableOfContents,'thin-scrollbar',className)},/*#__PURE__*/react.createElement(TOCItems/* default */.Z,(0,esm_extends/* default */.Z)({},props,{linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})));}/* harmony default export */ var theme_TOC = (TOC);

/***/ }),

/***/ 5002:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TOCItems; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1994);
var _excluded=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
/* eslint-disable jsx-a11y/control-has-associated-label */function TOCItemList(_ref){var toc=_ref.toc,className=_ref.className,linkClassName=_ref.linkClassName,isChild=_ref.isChild;if(!toc.length){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:isChild?undefined:className},toc.map(function(heading){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:heading.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"+heading.id,className:linkClassName!=null?linkClassName:undefined// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TOCItemList,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName}));}));}function TOCItems(_ref2){var toc=_ref2.toc,_ref2$className=_ref2.className,className=_ref2$className===void 0?'table-of-contents table-of-contents__left-border':_ref2$className,_ref2$linkClassName=_ref2.linkClassName,linkClassName=_ref2$linkClassName===void 0?'table-of-contents__link':_ref2$linkClassName,_ref2$linkActiveClass=_ref2.linkActiveClassName,linkActiveClassName=_ref2$linkActiveClass===void 0?undefined:_ref2$linkActiveClass,minHeadingLevelOption=_ref2.minHeadingLevel,maxHeadingLevelOption=_ref2.maxHeadingLevel,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref2,_excluded);var themeConfig=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useThemeConfig */ .LU)();var minHeadingLevel=minHeadingLevelOption!=null?minHeadingLevelOption:themeConfig.tableOfContents.minHeadingLevel;var maxHeadingLevel=maxHeadingLevelOption!=null?maxHeadingLevelOption:themeConfig.tableOfContents.maxHeadingLevel;var tocFiltered=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useTOCFilter */ .DA)({toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});var tocHighlightConfig=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){if(linkClassName&&linkActiveClassName){return{linkClassName:linkClassName,linkActiveClassName:linkActiveClassName,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useTOCHighlight */ .Si)(tocHighlightConfig);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TOCItemList,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({toc:tocFiltered,className:className,linkClassName:linkClassName},props));}

/***/ }),

/***/ 1854:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_Tag; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tag":"tag_WK-t","tagRegular":"tagRegular_LXbV","tagWithCount":"tagWithCount_S5Zl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(props){var _clsx;var permalink=props.permalink,name=props.name,count=props.count;return/*#__PURE__*/react.createElement(Link/* default */.Z,{href:permalink,className:(0,clsx_m/* default */.Z)(styles_module.tag,(_clsx={},_clsx[styles_module.tagRegular]=!count,_clsx[styles_module.tagWithCount]=count,_clsx))},name,count&&/*#__PURE__*/react.createElement("span",null,count));}/* harmony default export */ var theme_Tag = (Tag);

/***/ }),

/***/ 9261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TagsListInline; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(1854);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tags":"tags_NBRY","tag":"tag_F03v"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){var tags=_ref.tags;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(styles_module.tags,'padding--none','margin-left--sm')},tags.map(function(_ref2){var label=_ref2.label,tagPermalink=_ref2.permalink;return/*#__PURE__*/react.createElement("li",{key:tagPermalink,className:styles_module.tag},/*#__PURE__*/react.createElement(Tag/* default */.Z,{name:label,permalink:tagPermalink}));})));}

/***/ }),

/***/ 3783:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var windowSizes={desktop:'desktop',mobile:'mobile',// This "ssr" value is very important to handle hydration FOUC / layout shifts
// You have to handle server-rendering explicitly on the call-site
// On the server, you may need to render BOTH the mobile/desktop elements (and hide one of them with mediaquery)
// We don't return "undefined" on purpose, to make it more explicit
ssr:'ssr'};var DesktopThresholdWidth=996;function getWindowSize(){if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM){return windowSizes.ssr;}return window.innerWidth>DesktopThresholdWidth?windowSizes.desktop:windowSizes.mobile;}// Simulate the SSR window size in dev, so that potential hydration FOUC/layout shift problems can be seen in dev too!
var DevSimulateSSR= false&&0;// This hook returns an enum value on purpose!
// We don't want it to return the actual width value, for resize perf reasons
// We only want to re-render once a breakpoint is crossed
function useWindowSize(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){if(DevSimulateSSR){return'ssr';}return getWindowSize();}),windowSize=_useState[0],setWindowSize=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){function updateWindowSize(){setWindowSize(getWindowSize());}var timeout=DevSimulateSSR?window.setTimeout(updateWindowSize,1000):undefined;window.addEventListener('resize',updateWindowSize);return function(){window.removeEventListener('resize',updateWindowSize);clearTimeout(timeout);};},[]);return windowSize;}/* harmony default export */ __webpack_exports__["Z"] = (useWindowSize);

/***/ }),

/***/ 8802:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));// Trailing slash handling depends in some site configuration options
function applyTrailingSlash(path,options){var trailingSlash=options.trailingSlash,baseUrl=options.baseUrl;if(path.startsWith('#')){// Never apply trailing slash to an anchor link
return path;}// TODO deduplicate: also present in @docusaurus/utils
function addTrailingSlash(str){return str.endsWith('/')?str:str+"/";}function removeTrailingSlash(str){return str.endsWith('/')?str.slice(0,-1):str;}function handleTrailingSlash(str,trailing){return trailing?addTrailingSlash(str):removeTrailingSlash(str);}// undefined = legacy retrocompatible behavior
if(typeof trailingSlash==='undefined'){return path;}// The trailing slash should be handled before the ?search#hash !
var _path$split=path.split(/[#?]/),pathname=_path$split[0];// Never transform '/' to ''
// Never remove the baseUrl trailing slash!
// If baseUrl = /myBase/, we want to emit /myBase/index.html and not /myBase.html !
// See https://github.com/facebook/docusaurus/issues/5077
var shouldNotApply=pathname==='/'||pathname===baseUrl;var newPathname=shouldNotApply?pathname:handleTrailingSlash(pathname,trailingSlash);return path.replace(pathname,newPathname);}exports["default"]=applyTrailingSlash;

/***/ }),

/***/ 8780:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports, "__esModule", ({value:true}));exports.uniq=exports.applyTrailingSlash=void 0;var applyTrailingSlash_1=__webpack_require__(8802);Object.defineProperty(exports, "applyTrailingSlash", ({enumerable:true,get:function get(){return __importDefault(applyTrailingSlash_1).default;}}));var uniq_1=__webpack_require__(9964);Object.defineProperty(exports, "uniq", ({enumerable:true,get:function get(){return __importDefault(uniq_1).default;}}));

/***/ }),

/***/ 9964:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));// Remove duplicate array items (similar to _.uniq)
function uniq(array){// Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
return Array.from(new Set(array));}exports["default"]=uniq;

/***/ })

}]);