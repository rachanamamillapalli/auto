(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=d.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,l.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),d=n(a("mXGw")),l=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),d=n(a("mXGw")),l=n(a("9fEB")),c=a("GDok"),o=a("nZpd"),i=a("AFBu"),u=a("0oBi");t.default=function(){return function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=d.default.useState(!1);d.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var m=(0,u.useDarkMode)();return d.default.createElement(o.MobileMenuContext.Provider,{value:a.menuState||n},d.default.createElement(l.default,null,d.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,i.formatPath)(m?"favicon-dark.png":"favicon.png")})),d.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},d.default.createElement(c.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))}}},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))};var r=n(a("R8iU"))},BjlI:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a("Fcif"),r=a("dV/x"),d=a("mXGw"),l=a.n(d),c=a("/FXl"),o=a("pu0P"),i=a.n(o);for(var u in o)["default","default"].indexOf(u)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(u);l.a.createElement;var m={},s=i()({title:"`next`",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/generated/next.mdx",__scans:{}});function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.mdx)(s,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,'Make a release for your "prerelease" release line. This is ran automatically from "shipit".'),Object(c.mdx)("ol",null,Object(c.mdx)("li",{parentName:"ol"},"Creates a prerelease on package management platform"),Object(c.mdx)("li",{parentName:"ol"},'Creates a "Pre Release" on GitHub releases page.')),Object(c.mdx)("p",null,"Calling the ",Object(c.mdx)("inlineCode",{parentName:"p"},"next")," command from a prerelease branch will publish a prerelease, otherwise it will publish to the default prerelease branch."),Object(c.mdx)("h2",{id:"options"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#options"}),"Options")),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Flag"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--dry-run"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-d")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Report what command will do but do not actually do anything")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--message"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-m")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"The message used when attaching the prerelease version to a PR")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--quiet"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-q")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print ",Object(c.mdx)("strong",{parentName:"td"},"only")," the result of the command")))),Object(c.mdx)("h2",{id:"examples"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#examples"}),"Examples")),Object(c.mdx)("pre",{className:"language-bash"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"auto next\n")),Object(c.mdx)("h2",{id:"configurable-options"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#configurable-options"}),"Configurable Options")),Object(c.mdx)("p",null,"You can configure some of the options for the ",Object(c.mdx)("inlineCode",{parentName:"p"},"next")," command in the ",Object(c.mdx)("inlineCode",{parentName:"p"},".autorc"),"."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"message"))),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Example ",Object(c.mdx)("inlineCode",{parentName:"strong"},".autorc"),":")),Object(c.mdx)("pre",{className:"language-json"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"next"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"message"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"string"'),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(c.mdx)("h3",{id:"setting-up-protected-branches"},Object(c.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#setting-up-protected-branches"}),"Setting up Protected Branches")),Object(c.mdx)("p",null,"You should make your pre-release branches protected on GitHub. This will prevent a bunch of unwanted behavior from happening."),Object(c.mdx)("ol",null,Object(c.mdx)("li",{parentName:"ol"},"Go to you project's setting on ",Object(c.mdx)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"GitHub")),Object(c.mdx)("li",{parentName:"ol"},"Click ",Object(c.mdx)("inlineCode",{parentName:"li"},"Branches")),Object(c.mdx)("li",{parentName:"ol"},"Click ",Object(c.mdx)("inlineCode",{parentName:"li"},"Add Rule")),Object(c.mdx)("li",{parentName:"ol"},"Enter the name of your prerelease branch (ex: ",Object(c.mdx)("inlineCode",{parentName:"li"},"next"),")"),Object(c.mdx)("li",{parentName:"ol"},"Configure extra branch protection settings"),Object(c.mdx)("li",{parentName:"ol"},"(Optional) Set the base branch in GitHub to your prerelease branch (this ensure new PRs go to this branch)")))}p.isMDXComponent=!0},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),d=n(a("RiSW")),l=n(a("nxTg")),c=n(a("mXGw")),o=n(a("5dyF")),i=n(a("9fEB")),u=n(a("R8iU")),m=n(a("PDtE")),s=a("/FXl"),p=a("bBV7"),f=a("nZpd"),b=a("AFBu");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=c.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=h;var O=function(e){var t=e.href,a=e.children,n=c.default.useContext(h),r=(0,s.useMDXComponents)().SidebarLink,d=u.default.join("/auto",n.sidebarFileLocation,t),l=t;return n.sidebarFileLocation&&((l=d).endsWith("/index")&&(l=l.replace("/index","")),l.endsWith("/")&&(l=l.slice(0,-1))),c.default.createElement(o.default,{passHref:!0,href:l},c.default.createElement(r,{isActive:n.pathname.replace("/index","")===l},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,o=c.default.useContext(f.MobileMenuContext),x=(0,l.default)(o,1)[0],j="/".concat(r),v=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(j),N=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?u.default.relative("/auto",a.pathname):u.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,b.formatPath)(r.__resourcePath)}}(n),E=(0,s.useMDXComponents)(),w=E.SidebarItemWrapper,y=(E.SidebarLink,E.SidebarTitle),k=E.SidebarDivider,P=E.SidebarList,_=E.Sidebar,C=(0,d.default)(E,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return c.default.createElement(h.Provider,{value:g({},N,{sidebarFileLocation:v?j:""})},c.default.createElement(s.MDXProvider,{components:g({},C,{li:w,ul:P,a:O,p:y,hr:k})},c.default.createElement(i.default,null,c.default.createElement("title",null,N.title.replace(/\\`/g,"`"))),c.default.createElement(_,{className:(0,m.default)(!x&&"hidden","lg:block")},v?c.default.createElement(v,null):c.default.createElement(P,null,n.map((function(e){return c.default.createElement(w,{key:e.__resourcePath},c.default.createElement(O,{href:(0,b.formatPath)(e.__resourcePath)},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),d=n(a("8VmE")),l=n(a("RiSW")),c=n(a("mXGw")),o=n(a("5dyF")),i=a("V5Fo"),u=a("/FXl"),m=n(a("PDtE")),s=a("AFBu"),p=a("nZpd"),f=function(e){var t=e.className,a=(0,l.default)(e,["className"]);return c.default.createElement("svg",(0,d.default)({className:(0,m.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),c.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},b=function(){var e=(0,u.useMDXComponents)().SearchInput;return c.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},c.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=c.default.useContext(p.MobileMenuContext),d=(0,r.default)(n,2),l=d[0],m=d[1],x=(0,u.useMDXComponents)(),g=x.Logo,h=x.NavBarWrapper,O=x.NavBar,j=x.NavBarItem,v=x.MobileMenuButton;return c.default.createElement(c.default.Fragment,null,c.default.createElement(h,null,c.default.createElement(O,null,a?c.default.createElement(o.default,{passHref:!0,href:"/"},c.default.createElement(g,null)):c.default.createElement(g,null),c.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},c.default.createElement(b,null),c.default.createElement(v,{open:l,setOpen:m,className:"lg:hidden"}),c.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return c.default.createElement(o.default,{passHref:!0,key:e,href:(0,s.formatPath)("/".concat(e))},c.default.createElement(j,null,(0,i.titleCase)(e)))})),c.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},c.default.createElement(f,null)))))),l&&c.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return c.default.createElement(o.default,{passHref:!0,key:e,href:(0,s.formatPath)("/".concat(e))},c.default.createElement(j,null,(0,i.titleCase)(e)))})),c.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank"},c.default.createElement(f,{className:"mr-2"}),"Open on GitHub")))}},RHBZ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/next",function(){return a("BjlI")}])},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),d=n(a("mXGw")),l=n(a("R8iU")),c=a("/FXl"),o=n(a("PDtE")),i=a("C3pV"),u=n(a("6f/q")),m=n(a("x3GE")),s=(0,u.default)(),p=/([^`]*)`([^`]*)`(.*)/m;t.default=function(e){return function(t){var a=t.children,n=d.default.useState(!1),u=(0,r.default)(n,2),f=u[0],b=u[1],x=(0,c.useMDXComponents)(),g=e.__resourcePath.split("/")[0],h=(0,m.default)(),O=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return l.default.relative("./",e)})).filter((function(e){return e.startsWith(g)})).map((function(e){return h.find((function(t){return t.__resourcePath===e}))}));return d.default.createElement(s,{menuState:[f,b]},d.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},d.default.createElement(i.Sidebar,{links:O,folder:g}),d.default.createElement("main",{className:(0,o.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",f&&"hidden")},d.default.createElement(x.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");p.test(n);){var l=n.match(p),c=(0,r.default)(l,4),o=c[1],i=c[2],u=c[3];a.push(o),a.push(d.default.createElement(e.inlineCode,null,i)),n=u}return a.push(n),d.default.createElement("div",null,a)}}(x,e.title)),a)))}}},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1");t.default=function(){try{return n.keys().map(n)}catch(e){return[]}}}},[["RHBZ",0,1,2,3,4]]]);