(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{8514:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return lt}});var i=n(7294),o=n(4418),r=n(1418),l=n(4012),s=n(7379),a=s.ZP.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1ms31r5-0"})(["display:flex;flex-direction:column;justify-content:flex-start;margin:0 auto;max-width:",";padding-top:25vh;position:relative;width:100%;width:100%;@media ","{padding-top:0;}"],(function(t){return t.theme.maxWidth}),(function(t){return t.theme.device.belowLaptop})),u=s.ZP.div.withConfig({displayName:"styles__HeaderWrapper",componentId:"sc-1ms31r5-1"})(["margin:0 auto;width:100%;max-width:",";display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;"],(function(t){return t.theme.maxWidth})),c=s.ZP.h1.withConfig({displayName:"styles__Title",componentId:"sc-1ms31r5-2"})(["color:",";font-size:",";letter-spacing:1.93px;text-transform:uppercase;position:relative;background:url('https://images.pexels.com/photos/3316968/pexels-photo-3316968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');background-size:cover;background-position:center;-webkit-text-fill-color:transparent;-webkit-background-clip:text;padding:0;z-index:1;width:max-content;font-size:220px;margin-right:auto;@media ","{font-size:",";position:inherit;}"],(function(t){return t.theme.secondaryColor}),(function(t){return t.theme.landingTitle}),(function(t){return t.theme.device.belowLaptop}),(function(t){return t.theme.mainTitleFS})),d=s.ZP.div.withConfig({displayName:"styles__About",componentId:"sc-1ms31r5-3"})(["align-items:center;color:",";display:flex;font-family:",";font-weight:300;height:400px;display:flex;align-items:center;justify-content:center;max-width:45vw;background:white;padding-right:16px;position:relative;z-index:2;span{text-align:left;font-size:",";position:relative;display:block;}@media ","{height:auto;max-width:100vw;padding:0px;margin-top:",";}"],(function(t){return t.theme.black}),(function(t){return t.theme.primaryFF}),(function(t){return t.theme.fourthFS}),(function(t){return t.theme.device.belowLaptop}),(function(t){return t.theme.mainTitleFS})),f=s.ZP.div.withConfig({displayName:"styles__Illustration",componentId:"sc-1ms31r5-4"})(["background:url('/images/riverBottleCropped.jpg');background-position:center;background-size:cover;background-repeat:no-repeat;position:absolute;height:320px;width:830px;position:absolute;bottom:0px;right:-320px;z-index:1;@media ","{display:none;}"],(function(t){return t.theme.device.belowLaptop})),p=n(5893),h=function(){return(0,p.jsxs)(a,{children:[(0,p.jsxs)(u,{children:[(0,p.jsx)(c,{children:"Solutions"}),(0,p.jsx)(d,{id:"about",children:(0,p.jsx)("span",{children:(0,p.jsx)(l.Z,{id:"solution_intro_1"})})})]}),(0,p.jsx)(f,{})]})},m=n(1852),g=s.ZP.div.withConfig({displayName:"styles__SolutionsWrapper",componentId:"sc-165efp3-0"})(["width:100%;min-height:400px;display:flex;flex-direction:row;overflow:hidden;@media ","{flex-direction:column;}"],(function(t){return t.theme.device.belowLaptop})),x=s.ZP.ul.withConfig({displayName:"styles__ListWrapper",componentId:"sc-165efp3-1"})(["margin:0;flex-basis:200px;height:100%;padding:0;max-height:80vh;overflow:scroll;position:relative;padding-left:6px;@media ","{flex-basis:100%;margin-bottom:10vh;}"],(function(t){return t.theme.device.belowLaptop})),_=s.ZP.div.withConfig({displayName:"styles__ListSelectBar",componentId:"sc-165efp3-2"})(["height:","px;width:4px;position:absolute;background:",";top:","px;left:4px;content:'';transition:0.4s;transition-timing-function:ease-out;"],(function(t){return t.height}),(function(t){return t.theme.secondaryColor}),(function(t){var e=t.offsetTop;return e||0})),v=s.ZP.li.withConfig({displayName:"styles__ListTitle",componentId:"sc-165efp3-3"})(["color:",";font-size:",";padding:calc("," / 2) 0;cursor:pointer;font-family:",";opacity:",";padding-left:",";transition:0.4s;&:hover{opacity:1;}@media ","{font-size:",";}"],(function(t){return t.theme.surfRiderBlue}),(function(t){return t.theme.biggerFS}),(function(t){return t.theme.biggerFS}),(function(t){return t.theme.defaultFF}),(function(t){return t.isSelected?"1":".7"}),(function(t){return t.isSelected?"4px":"0"}),(function(t){return t.theme.device.belowLaptop}),(function(t){return t.theme.fourthFS})),y=s.ZP.div.withConfig({displayName:"styles__SolutionCardWrapper",componentId:"sc-165efp3-4"})(["flex-basis:100%;height:100%;overflow:scroll;"]),w=n(1383),b=n(29),j=n(7794),k=n.n(j),Z=n(5306),C=n(3820),I=n(5613),z=new C.f({uri:"https://plastic-origins-cms.herokuapp.com/graphql",cache:new I.h});var P=function(t){return t?t[0].toUpperCase()+t.slice(1).toLowerCase():null};var L,S,F=function(t){var e;try{e=new URL(t)}catch(n){return null}if("http:"===e.protocol||"https:"===e.protocol)return t};function N(){return(N=(0,b.Z)(k().mark((function t(){var e,n,i;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.query({query:(0,Z.ZP)(L||(L=(0,w.Z)(["\n      query Solutions {\n        solutionCards {\n          id\n          title_fr\n          title_en\n        }\n      }\n    "])))});case 2:return e=t.sent,n=e.data,i=n.solutionCards.map((function(t){var e=t.id,n=t.title_fr;return{en:{title:t.title_en},fr:{title:n},id:e,isFullyLoaded:!1}})),t.abrupt("return",Object.fromEntries(i.map((function(t){return[t.id,t]}))));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return(T=(0,b.Z)(k().mark((function t(e){var n,i,o,r,l,s,a,u,c,d,f,p,h,m,g,x,_,v,y,b,j;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.query({query:(0,Z.ZP)(S||(S=(0,w.Z)(["\n      query SolutionCardById($selectedId: ID!) {\n        solutionCard(id: $selectedId) {\n          id\n          created_at\n          updated_at\n          title_fr\n          title_en\n          intro_fr\n          intro_en\n          description_fr\n          description_en\n          sanitation_label\n          illegal_dumping_label\n          other_label\n          food_packaging_label\n          cigarette_butts_label\n          agricultural_label\n          published_at\n          pdf_link_fr\n          pdf_link_en\n          what_you_will_find_fr\n          what_you_will_find_en\n        }\n      }\n    "]))),variables:{selectedId:e}});case 2:return n=t.sent,i=n.data,(o=n.error)&&console.log(o),r=i.solutionCard,l=r.agricultural_label,s=r.cigarette_butts_label,a=r.description_en,u=r.description_fr,c=r.food_packaging_label,d=r.id,f=r.intro_en,p=r.intro_fr,h=r.other_label,m=r.what_you_will_find_en,g=r.what_you_will_find_fr,x=r.sanitation_label,_=r.title_en,v=r.title_fr,y=r.illegal_dumping_label,b=r.pdf_link_fr,j=r.pdf_link_en,t.abrupt("return",{id:d,fr:{title:P(v),intro:P(p),description:u,pdfLink:F(b),whatYouWillFind:g},en:{title:P(_),intro:P(f),description:a,pdfLink:F(j),whatYouWillFind:m},label:{sanitation:x,illegalDumping:y,else:h,foodPackaging:c,cigaretteButts:s,agricultural:l},isFullyLoaded:!0});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var W=n(182),B=n(7472),E=function(){(function(){return N.apply(this,arguments)})().then((function(t){B.Z.dispatch((0,W.U4)(t)),B.Z.dispatch((0,W.mC)(!1))}))},q=function(t){(function(t){return T.apply(this,arguments)})(t).then((function(e){B.Z.dispatch((0,W.ac)({solutionId:t,solutionDetails:e}))}))},R=n(4492),D=s.ZP.div.withConfig({displayName:"styles__SolutionCardWrapper",componentId:"sc-1sdvkz-0"})(["align-items:flex-start;background:",";display:flex;flex-direction:column;height:100%;justify-content:flex-start;overflow:scroll;padding-left:",";@media ","{padding-left:0;","{font-size:",";line-height:",";}}"],(function(t){return t.theme.white}),(function(t){return t.theme.spacing(1)}),(function(t){return t.theme.device.belowLaptop}),R.w,(function(t){return t.theme.thirdFS}),(function(t){return t.theme.thirdFS})),O=s.ZP.span.withConfig({displayName:"styles__Text",componentId:"sc-1sdvkz-1"})(["font-size:",";margin-bottom:",";color:",";"],(function(t){return t.theme.fourthFS}),(function(t){return t.theme.spacing(1)}),(function(t){var e=t.isIntro,n=t.theme;return e?n.surfRiderBlue:n.black})),$=(0,s.ZP)(O).withConfig({displayName:"styles__PreConclusion",componentId:"sc-1sdvkz-2"})(["color:",";font-size:",";text-transform:uppercase;font-weight:bold;margin-top:",";"],(function(t){return t.theme.surfRiderBlue}),(function(t){return t.theme.biggerFS}),(function(t){return t.theme.spacing(2)})),U=s.ZP.div.withConfig({displayName:"styles__LoaderWrapper",componentId:"sc-1sdvkz-3"})(["align-items:center;display:flex;height:100%;justify-content:center;min-height:400px;width:100%;"]),Y=n(3516),G=n(3767),H=n(1228),X=s.ZP.div.withConfig({displayName:"styles__LoaderGif",componentId:"sc-34zq6f-0"})(["background:url('/gifs/Rolling.gif');height:","px;width:","px;background-position:center;background-size:cover;"],(function(t){return t.size}),(function(t){return t.size})),A=function(t){var e=t.size;return(0,p.jsx)(X,{size:e})};A.defaultProps={size:100};var M=A,Q=function(t){var e=t.description,n=t.intro,i=t.title,o=t.conclusion,r=t.isLoading,s=t.pdfLink;return(0,p.jsx)(D,{children:r?(0,p.jsx)(U,{children:(0,p.jsx)(M,{})}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Y.Z,{color:G.Z.surfRiderBlue,children:i}),n&&(0,p.jsx)(O,{isIntro:!0,children:n}),e&&(0,p.jsx)(O,{children:e}),o&&(0,p.jsx)($,{children:(0,p.jsx)(l.Z,{id:"what_you_learn"})}),o&&(0,p.jsx)(O,{children:o}),s&&(0,p.jsx)("a",{target:"_blank",href:s,rel:"noreferrer",children:(0,p.jsx)(H.Z,{label:"download_solution"})})]})})},V=n(2628),J=function(t){var e=t.selectedSolutionId,n=t.lang,o=(0,V.v9)((function(t){return function(t,e){return null===t||void 0===t?void 0:t.solutions.allSolutions[e]}(t,e)})),r=o.isFullyLoaded;(0,i.useEffect)((function(){if(!r)return q(e)}),[e]);var l=o[n],s=l.title,a=l.intro,u=l.pdfLink,c=o[n].description||"",d=o[n].whatYouWillFind||"";return(0,p.jsx)(Q,{title:s,intro:a,description:c,conclusion:d,isLoading:!r,pdfLink:u})},K=function(t){var e=t.solutionsList,n=t.lang,o=(0,i.useState)({}),r=o[0],l=o[1],s=(0,i.useState)([null]),a=s[0],u=s[1],c=(0,i.useRef)([]),d=(0,i.useRef)(null),f=(0,m.useMediaQuery)({query:"(max-width: ".concat(G.Z.size.laptop,")")}),h=function(t,e){l({id:t,index:e}),f&&function(){var t;null===(t=d.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}()};return(0,i.useEffect)((function(){c.current&&u(c.current[r.index])}),[r]),(0,i.useEffect)((function(){var t;l({id:null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id,index:0})}),[e.length]),(0,p.jsxs)(g,{children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(_,{offsetTop:null===a||void 0===a?void 0:a.offsetTop,height:null===a||void 0===a?void 0:a.scrollHeight}),e.map((function(t,e){var i=t[n].title,o=t.id;return(0,p.jsx)(v,{isSelected:r.id===o,ref:function(t){return c.current[e]=t},onClick:function(){return h(o,e)},children:i},o)}))]}),(0,p.jsx)(y,{ref:d,children:r.id&&(0,p.jsx)(J,{lang:n,selectedSolutionId:r.id})})]})};K.defaultProps={lang:"fr"};var tt=K,et=n(250),nt=function(){var t=Object.values((0,V.v9)((function(t){return function(t){return null===t||void 0===t?void 0:t.solutions.allSolutions}(t)}))),e=(0,V.v9)((function(t){return function(t){return null===t||void 0===t?void 0:t.solutions.isLoading}(t)})),n=(0,V.v9)((function(t){return(0,et.o)(t)}));return(0,p.jsx)(tt,{isLoading:e,solutionsList:t,lang:n})},it=n(8728),ot=(s.ZP.div.withConfig({displayName:"styles__Schema",componentId:"sc-1ghxow3-0"})(["width:100%;height:100%;min-height:75vh;background:url('/images/polutionsSchemaFr.png');background-size:contain;background-position:center;background-repeat:no-repeat;@media ","{min-height:34vh;}"],(function(t){return t.theme.device.belowLaptop})),s.ZP.div.withConfig({displayName:"styles__GetInTouchWrapper",componentId:"sc-1ghxow3-1"})(["display:flex;flex-direction:row;align-items:center;justify-content:center;color:",";font-family:",";font-size:",";padding-bottom:124px;a{color:inherit;}span{position:relative;&:last-of-type{margin-left:",";}&:last-of-type:after{z-index:-1;top:6px;left:-5px;width:104%;position:absolute;height:20px;background-color:",";content:'';transform:rotate(1deg);}}"],(function(t){return t.theme.black}),(function(t){return t.theme.secondaryFF}),(function(t){return t.theme.fourthFS}),(function(t){return t.theme.spacing(.25)}),(function(t){return t.theme.secondaryColor}))),rt=function(){return(0,i.useEffect)((function(){E()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(it.im,{children:(0,p.jsx)(h,{})}),(0,p.jsx)(it.im,{children:(0,p.jsx)(nt,{})}),(0,p.jsx)(it.im,{children:(0,p.jsxs)(ot,{children:[(0,p.jsx)("span",{children:(0,p.jsx)(l.Z,{id:"solution_get_in_touch"})}),(0,p.jsx)("span",{children:(0,p.jsx)("a",{href:"mailto:jpoumey@surfrider.eu?subject=Plastic origins",target:"_top",children:"email"})})]})})]})},lt=(0,o.Z)((function(){return(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)(rt,{}),(0,p.jsx)(r.Z,{})]})}))},3516:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});n(7294);var i=n(4492),o=n(7379).ZP.div.withConfig({displayName:"styles__BreakerWrapper",componentId:"sc-8hx5oz-0"})(["margin:24px 0 40px;height:","px;width:85px;background-color:",";"],(function(t){return t.bold?"10":"6"}),(function(t){return t.color?t.color:t.theme.white})),r=n(5893),l=function(t){var e=t.color,n=t.bold;return(0,r.jsx)(o,{color:e,bold:n})};l.defaultProps={color:null,bold:!1};var s=l,a=function(t){var e=t.children,n=t.color,o=t.isBreakerDisplayed;return(0,r.jsxs)(i.$,{children:[(0,r.jsx)(i.w,{color:n,children:e}),o&&(0,r.jsx)(s,{color:n,bold:!0})]})};a.defaultProps={children:null,isBreakerDisplayed:!0};var u=a},4492:function(t,e,n){"use strict";n.d(e,{$:function(){return o},w:function(){return r}});var i=n(7379),o=i.ZP.div.withConfig({displayName:"styles__TitleWrapper",componentId:"sc-1vcjsga-0"})(["display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;margin-right:",";@media (max-width:900px){margin-right:auto;}"],(function(t){return t.theme.spacing(7)})),r=i.ZP.h1.withConfig({displayName:"styles__TextTitle",componentId:"sc-1vcjsga-1"})(["font-family:'Bebas Neue';font-size:",";letter-spacing:2.28px;line-height:90px;margin-bottom:0;color:",";"],(function(t){return t.theme.mainTitleFS}),(function(t){var e=t.theme,n=t.color;return n||e.black}))},7459:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions",function(){return n(8514)}])}},function(t){t.O(0,[211,691,286,774,888,179],(function(){return e=7459,t(t.s=e);var e}));var e=t.O();_N_E=e}]);