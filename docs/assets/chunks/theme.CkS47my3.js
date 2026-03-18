import{d as m,u as h,c as O,a as l,o as r,F as b,b as v,t as f,_,r as T,w as N,e as w,f as e,v as A,g as R,T as D,h as E,i as $,j as p,k as d,l as S,m as k,n as x,p as C}from"./framework.DYNaguLt.js";const L={key:0},P=["href"],H=m({__name:"Breadcrumb",setup(u){const{page:o}=h(),n={on:"on",topics:"topics",projects:"projects","the-raven":"projects"},i=O(()=>{const s=o.value.relativePath.replace(".md","").split("/")[0];return n[s.valueOf()]});return(s,a)=>(r(),l(b,null,[i.value!==void 0?(r(),l("span",L,"| ")):v("",!0),i.value!==void 0?(r(),l("a",{key:1,href:`/${i.value}`,class:"breadcrumb"},f(i.value),9,P)):v("",!0)],64))}}),F=_(H,[["__scopeId","data-v-06536831"]]),U={class:"switch"},B=m({__name:"Mode",setup(u){const{isDark:o}=h(),n=T(o.value);return N(n,async i=>{o.value=i}),(i,s)=>(r(),l("label",U,[w(e("input",{type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=a=>n.value=a)},null,512),[[A,n.value]]),s[1]||(s[1]=e("span",{class:"slider round"},null,-1))]))}}),M=_(B,[["__scopeId","data-v-38b5e3e0"]]),z={class:"dialog-container",role:"dialog","aria-modal":"true"},W={class:"dialog"},G={class:"dialog-content"},Y={class:"settings"},j={style:{"font-family":"monospace","font-size":"14px"}},V=m({__name:"Dialog",setup(u){const o=T(!1),n=document.documentElement.classList,i=(a=!1)=>{o.value=a,a?n.add("dialog"):n.remove("dialog")},s=a=>{const t=a.target,c=t.nextElementSibling,y=window.getComputedStyle(c).display==="block";t.setAttribute("data-content",y?"▿":"▵"),c.style.display=y?"none":"block"};return(a,t)=>(r(),l(b,null,[e("a",{class:"readme-link",href:"#",onClick:t[0]||(t[0]=c=>i(!0))},t[2]||(t[2]=[e("span",null,"README",-1)])),(r(),R(D,{to:"body"},[w(e("div",z,[e("div",W,[e("a",{href:"#","aria-label":"close",class:"btn close-btn",onClick:t[1]||(t[1]=c=>i(!1)),style:{"margin-right":".3rem","margin-left":"auto","text-decoration":"none"}},t[3]||(t[3]=[e("span",{style:{"font-size":"14px"}},"close",-1)])),e("div",G,[e("main",null,[e("section",{class:"about"},[e("label",{onClick:s,"data-content":"▵"},"About"),t[4]||(t[4]=e("div",null," This is a blog about software. ",-1))]),e("section",Y,[e("label",{onClick:s,"data-content":"▿"},"Settings"),e("div",j,[t[5]||(t[5]=$(" Switch theme: ",-1)),p(M)])]),e("section",{class:"disclaimer"},[e("label",{onClick:s,"data-content":"▿"},"Disclaimer"),t[6]||(t[6]=e("div",{class:"smallprint"},' This blog and its content are provided "as is" without any warranties of any kind, either express or implied. The author disclaims all responsibility and liability for any consequences arising from the use of information or content found herein. The views expressed in this blog are solely those of the author and do not reflect the views or opinions of any affiliated organizations, companies, or employers. The author does not guarantee the accuracy, completeness, or usefulness of any information presented and is not responsible for any actions taken based on the content available on this blog. ',-1))]),e("section",{class:"privacy"},[e("label",{onClick:s,"data-content":"▿"},"Privacy"),t[7]||(t[7]=e("div",{class:"smallprint"},' This Privacy Policy describes how we collect, use, disclose, and retain personal data for the blog (the "Site") operated from the European Union. The Site does not set cookies. The Site collects only website traffic data under legitimate interests (Article 6(1)(f) GDPR), such as page visits and referring URLs. This Policy explains what data we collect, why, and how long we keep it. Automatically collected traffic data (no cookies): page visits/pages viewed, timestamps, referring URLs, aggregate page view counts, and basic technical details necessary to deliver content (e.g., browser type, operating system, and anonymized IP-derived region). We do not collect or store full IP addresses; where IPs are processed, they are anonymized/pseudonymized on collection. Legitimate interests (Article 6(1)(f) GDPR): to operate and improve the Site, analyze and understand usage patterns, maintain security, prevent abuse, and measure content performance. The Site does not set client-side cookies, does not use local storage for tracking, and does not load third-party tracking scripts that create persistent identifiers. Any analytics are performed on server-side aggregated or anonymized data collection only. We collect the minimum data necessary for the stated purposes. Where possible, data is aggregated or anonymized so it no longer constitutes personal data under GDPR (for example, removing or truncating IP address information promptly). Raw identifying details are not retained. By using the Site you acknowledge that you have read and understood this Policy. ',-1))]),e("section",{class:"licence"},[e("label",{onClick:s,"data-content":"▿"},"Licence"),t[8]||(t[8]=e("div",{class:"smallprint"},' MIT No Attribution Copyright 2025 robn.baye.ly Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. ',-1))])]),t[9]||(t[9]=e("footer",{class:"dialog-footer"},null,-1))])])],512),[[E,o.value]])]))],64))}}),Z=_(V,[["__scopeId","data-v-e658682a"]]),J=m({__name:"Readme",setup(u){return(o,n)=>(r(),R(Z))}}),q={href:"/"},Q=m({__name:"Header",setup(u){const{site:o}=h();return(n,i)=>{const s=S("ClientOnly");return r(),l("header",null,[e("nav",null,[e("span",null,[e("a",q,f(d(o).title),1),p(F)]),p(s,null,{default:k(()=>[p(J)]),_:1})])])}}}),X=_(Q,[["__scopeId","data-v-8b9c9cda"]]),K=`




                                                --:                             
                                         %%%%@%%%%%%%@%*%                       
                                      %%%@@@@@@@@@@@@@%%.%%#.                   
                                   .%@@@@@@@@@@@@@@@@@@@@%%:%*-                 
                                  %@@@@@@@@@%%-      +%%%+%%%+%+                
                                .@@@@@@@@@*              #%=%%%*%:              
                               .@@@@@@@@=                  -%:%%.%.             
                               %@@@@@@%                      %.%%:*             
                              %@@@@@@@                        % %%%%            
                              @@@@@@@.                         %#+-#            
                             %@@@@@@@                          % @%%+           
                             %@@@@@@%                           *%%%#           
                             %@@@@@@%                           *%%%#           
                             #@@@@@@@:                         - %%%            
                              @@@@@@@@                         % + :            
                              %@@@@@@@%                       . %%%-            
                               %@@@@@@@@-                     :%#%%             
                                %@@@@@@@@%                  - %#%%              
                                 %@@@@@@@@@.               # %%%+               
                                  %@@@@@@@@@               %%#+                 
                                    %@@@@@@%            #**%*                   
                                            =      =%+* %-.                     
                                                 .  *+      
                                                 
`,ee=`
                      
                                                                                  /
                                                                            x^")i~+
                                                                      ~I+""I_l!i:
                                                                 ;::",>>~,<ph    xi>)
                                                             i{,~1!:!ftf]WUj[li!i|Y
                                                       l""'"<}~~!I!!(UU/U?&_-w
                                                   ":""":;l:|>lI;;l!i<>~_?>+l;:!-+I
                                                 ,"^>;IlII_(]r::IIi<>}||vi+_]<Q
                                               _'^;':"";:;Jl])l![Ya#hqqd)<]iill
                                               ^,,"":;"!l!i!l~!-rmJYx~;n-f?(m
                                             "",""^"";:,"I;_i;!iz_!<XQj}([[-_
                                .,",~_     1"^,^""^^';,,Iz"t,;/!,l;l+|-!>!;|
                              ."  ;!<>!!~;;:::::,"""^I":,-+~t"+"-)~^,t~"I|
                             ;I^;''iI<I!~I:^:"""'.^^";:,^i>"<i!">"";>I'_
                                 .'""";!"^"",;:!;^""''""^"'il,l;l^"..
                                    ''.^^""^"":"",.."'."'''l:I:"";
                                     ...'"^^""^:::,"^",^^,:'::":
                                      '''^''"""""::I  "'^,,"^.+
                                       _'""'"^^^,",I    ^'^"^
                                         :I"'"""^":!I
                                    -   'r': """^^,:,:
                                 J^x.:    ".,..'"""."":
                                          .. Q  '^....^"
                                                 .  .' "^
                                                     ...'"
                                                    < .   ^
                                                      ...  _
                                                       .''...
                                                       . .^" '
                                                        . .'" .
                                                            '^I
                      
                      
`,te=`
                                                                                
                                                                                
                                                                                
                                                   .+                           
                                          -. -.---....                          
                                        -.---+..----.-.--...-                   
                                    -...-- -+++++--+-.++-..-.  -+               
                                   -.--.-.--++++++.+-++--.++.-.+                
                                  .--+ ++++-++++-+++++ . +++.+-+                
                                 -+--+++-+++++- +++.-.+-+#++.+--                
                               ---+.--+++#-.-. -++.--++++#+-.+.-                
                                 -+++.-+++++-.. .+-++++++++-.-.--               
                                ---+++#+- -+++---++++++.-+.++++                 
                                  -.-++----+++++-.. .---++-++                   
                                  --- ..-+++- .+++#+##+++#+                     
                                   -+#+++++++++++++#++++++                      
                                  +-+++++++--+++---++++                         
                                   +++++++++++++++++--++++                      
                                          +    +++++++   .                      
                                               ++  +++                          
                                              +.    ++-                         
                                                    ++                          
                                                    ++     -+--+-               
                                                    -+   .---+-+-++++++-..      
                                                     ++ -+-------------.        
                                                     -+----+++-+++--            
                                                      ++----..-+++-             
                                                      ++-+--+ --                
                                                      -                         
                                                      .                         
                                                       ++                       
                                                       +-                       
                                                     + ++                       
                                                       -                        
                                                       .+                       
                                                        +                       
                                                                                
                                                                                
                                                                                
`,ne={key:0},oe=m({__name:"Illustration",setup(u){const{frontmatter:o}=h(),n={"the-raven":ee,rose:te,enso:K};return(i,s)=>(r(),l("figure",null,[d(o).illustration&&n[d(o).illustration]?(r(),l("pre",ne,"      "+f(n[d(o).illustration])+`                                                                                
    `,1)):v("",!0)]))}}),ae=_(oe,[["__scopeId","data-v-94442bf7"]]),se={key:0},ie={class:"date date-long"},re={class:"date date-short"},le=m({__name:"Main",setup(u){const{frontmatter:o}=h(),n=a=>{const c=+String(a).slice(-2);if(c>3&&c<21)return"th";switch(c%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},i=a=>{const t="en-GB",c=a.toLocaleDateString(t,{weekday:"long"}),g=a.toLocaleDateString(t,{day:"2-digit"}),y=a.toLocaleDateString(t,{month:"long"}),I=a.toLocaleDateString(t,{year:"numeric"});return`${c} ${g}${n(g)} ${y} ${I}`},s=a=>{const t="en-GB",c=a.toLocaleDateString(t,{weekday:"short"}),g=a.toLocaleDateString(t,{day:"2-digit"}),y=a.toLocaleDateString(t,{month:"short"}),I=a.toLocaleDateString(t,{year:"numeric"});return`${c} ${g}${n(g)} ${y} ${I}`};return(a,t)=>{const c=S("Content");return r(),l("main",null,[e("article",null,[!d(o).index&&d(o).subtitle?(r(),l("section",se,[p(ae),e("h1",null,f(d(o).title),1),e("h2",null,f(d(o).subtitle),1),t[0]||(t[0]=e("hr",null,null,-1)),e("span",ie,f(i(new Date(d(o).date)))+" | "+f(d(o).readingTime),1),e("span",re,f(s(new Date(d(o).date)))+" | "+f(d(o).readingTime),1)])):v("",!0),p(c)])])}}}),ce=_(le,[["__scopeId","data-v-2b089061"]]),de=m({__name:"Footer",setup(u){const{page:o,site:n,frontmatter:i}=h();return(s,a)=>(r(),l("footer",null,a[0]||(a[0]=[e("section",null,[e("span",null,[e("span",null,"Copyright © 2025 robn.baye.ly")]),e("span",null,[e("a",{href:"/about/"},"about"),e("a",{href:"/privacy/"},"privacy"),e("a",{href:"/licence/"},"licence"),e("a",{href:"/disclaimer/"},"disclaimer")])],-1)])))}}),ue=_(de,[["__scopeId","data-v-31bfb3b7"]]),pe={key:0,class:"scroll-nav"},me=m({__name:"ScrollNav",setup(u){const{frontmatter:o}=h(),n=T(!1),i=()=>{window.scrollTo({top:0,behavior:"smooth"})};let s=0;return window.addEventListener("scroll",a=>{let t=window.pageYOffset||document.documentElement.scrollTop;t<s&&t>0?n.value=!0:n.value=!1,s=t}),(a,t)=>d(o).index?v("",!0):w((r(),l("nav",pe,[e("section",null,[e("span",null,[x(a.$slots,"default",{},void 0)]),e("span",null,[e("a",{href:"#",onClick:i},"scroll to top")])])],512)),[[E,n.value]])}}),fe=_(me,[["__scopeId","data-v-798a387b"]]),_e=m({__name:"Layout",setup(u){return(o,n)=>{const i=S("ClientOnly");return r(),l(b,null,[p(X),p(ce),p(ue),p(i,null,{default:k(()=>[p(fe)]),_:1})],64)}}}),he=JSON.parse('[{"frontmatter":{"title":"Zen","subtitle":"and the art of software maintenance","illustration":"enso","list":{"title":"Zen and the art of software maintenance"},"description":"A contemplation on the impermanence of mountains.","topics":["flow"],"date":"2026-02-14T00:00:00.000Z","head":[["meta",{"name":"description","content":"A contemplation on the impermanence of mountains."}],["meta",{"name":"keywords","content":"software zen"}]]},"url":"/on/zen-and-the-art-of-software-maintenance/"},{"frontmatter":{"title":"The Raven","subtitle":"a full-stack computer vision training and inference application","illustration":"the-raven","excerpt":null,"date":"2026-01-18T00:00:00.000Z","topics":["java","machine learning","artificial intelligence","image classification"],"head":[["meta",{"name":"description","content":"a full-stack computer vision training and inference application"}],["meta",{"name":"keywords","content":"ai ml java spring docker"}]]},"url":"/the-raven/"},{"frontmatter":{"title":"The name of the rose","subtitle":"and the big ball of mud","illustration":"rose","description":"The power of words, the nature of identity and the essence of being.","topics":["domain driven design"],"date":"2025-11-23T00:00:00.000Z","head":[["meta",{"name":"description","content":"The power of words, the nature of identity and the essence of being."}],["meta",{"name":"keywords","content":"software domain driven design"}]]},"url":"/on/the-name-of-the-rose/"}]'),ge=["href"],ye=m({__name:"Topics",setup(u){const o=()=>[...new Set(he.map(n=>n.frontmatter.topics).flat().filter(n=>n!==void 0))];return(n,i)=>(r(),l("ul",null,[(r(!0),l(b,null,C(o(),s=>(r(),l("li",null,[e("a",{href:`/topics/${s}`},f(s),9,ge)]))),256))]))}}),ve=_(ye,[["__scopeId","data-v-244c2e15"]]),be=m({__name:"NotFound",setup(u){return(o,n)=>(r(),l(b,null,[n[0]||(n[0]=e("h1",null,"404 Not Found",-1)),n[1]||(n[1]=e("hr",null,null,-1)),n[2]||(n[2]=e("br",null,null,-1)),p(ve),n[3]||(n[3]=e("br",null,null,-1))],64))}}),Te={Layout:_e,NotFound:be,enhanceApp({app:u,router:o,siteData:n}){}};export{Te as R,ve as T,he as d};
