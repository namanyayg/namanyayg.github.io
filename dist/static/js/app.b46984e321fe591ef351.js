webpackJsonp([1],{"+5qc":function(t,e){},"/0ZP":function(t,e){},AlKl:function(t,e){},FLwA:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a=s("Xxa5"),n=s.n(a),r=s("exGp"),o=s.n(r),l=s("Dd8w"),c=s.n(l),h=s("NYxO"),m=s("lPMi"),d={name:"Logo",props:{stroke:{type:String,default:"#333"}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("svg",{attrs:{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"30",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 406 405.47"}},[e("path",{staticClass:"cls-1",attrs:{stroke:this.stroke,d:"M265 264.47v-122C265 74.91 210.27 20 142.71 20S20 74.77 20 142.32v243.15"}}),this._v(" "),e("path",{staticClass:"cls-1",attrs:{stroke:this.stroke,d:"M141 142.47v121c0 67.56 55.71 122 123.26 122S386 331.66 386 264.1V20.47"}})])])},staticRenderFns:[]};var v=s("VU/8")(d,u,!1,function(t){s("FLwA")},null,null).exports,f={name:"Colophon",components:{Logo:v},methods:{beginAnimating:function(){var t=this;this.$el.classList.remove("scene--set");var e;m.c.from((e=".logo-container",t.$el.querySelector(e)),.5,{y:40,opacity:0,ease:m.b.easeOut,delay:.25})}},mounted:function(){this.$el.addEventListener("enliven",this.beginAnimating)}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"colophon page scene"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9 col-2"},[e("div",{staticClass:"logo-container"},[e("Logo",{staticClass:"logo",attrs:{stroke:"#193071"}})],1)]),this._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-3 col-10 list self"},[e("p",[e("strong",[this._v("With love by Namanyay ⚡")])])])}]};var p={name:"App",components:{Colophon:s("VU/8")(f,g,!1,function(t){s("nGzS")},"data-v-f20f3236",null).exports},methods:c()({},Object(h.b)(["fetchViewTypeFromRoute"]),{fetchViewType:function(){var t=this;return o()(n.a.mark(function e(){var s,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.$route,e.next=3,t.fetchViewTypeFromRoute(s);case 3:i=e.sent,t.$router.replace(s.fullPath.replace(i,""));case 5:case"end":return e.stop()}},e,t)}))()}}),created:function(){this.fetchViewType()}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("Colophon")],1)},staticRenderFns:[]};var w=s("VU/8")(p,_,!1,function(t){s("+5qc")},null,null).exports,y=s("mtWM"),b=s.n(y),C=s("aLYK"),A=s("/ocq"),k={name:"HeroBg",data:function(){return{stars:[],dimensions:{}}},computed:{$canvas:function(){return this.$el},ctx:function(){return this.$canvas.getContext("2d")}},methods:{setDimensions:function(){var t=this.$canvas,e=document.querySelector(".hero").getBoundingClientRect(),s=e.height,i=e.width,a=2*Math.floor(Math.sqrt(Math.pow(s,2)+Math.pow(i,2)));this.dimensions={height:a,width:a},t.style.marginTop=-(a/2-s/2)+"px",t.style.marginLeft=-(a/2-i/3)+"px",t.height=this.dimensions.height,t.width=this.dimensions.width},init:function(){var t,e,s=this;this.stars=(e=this.dimensions,t=e.width>2e3?256:128,Array(t).fill(null).map(function(t,e){var i={x:Math.floor(Math.random()*s.dimensions.width),y:Math.floor(Math.random()*s.dimensions.height)};return{x:i.x,y:i.y,delta:.005+Math.floor(20*Math.random())/1e3,brightness:Math.floor(10*Math.random())/10,type:Math.floor(6*Math.random()),min:Math.floor(3*Math.random())/10+.1}}))},render:function(){var t=this.ctx;this.stars.map(function(e){var s=e.x,i=e.y,a="rgba(255, 255, 255, "+e.brightness+")";t.fillStyle=a,t.beginPath(),t.rect(s,i,2,2),t.closePath(),t.fill()})},update:function(){this.stars=this.stars.map(function(t){var e=t;return e=function(t){var e=t.brightness,s=t.delta,i=t.min;return t.brightness=e+s,(t.brightness>=1||t.brightness<=i)&&(t.delta*=-1),t.brightness>1&&(t.brightness=1),t.brightness<i&&(t.brightness=i),t}(e)})},clear:function(){var t=this.ctx,e=this.dimensions;t.clearRect(0,0,e.width,e.height)},draw:function(){this.clear(),this.update(),this.render(),requestAnimationFrame(this.draw)}},created:function(){var t=this;setTimeout(function(){t.setDimensions(),t.init(),requestAnimationFrame(t.draw)},42)}},$={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{staticClass:"nightsky"})},staticRenderFns:[]};var x=s("VU/8")(k,$,!1,function(t){s("bp89")},"data-v-158cd956",null).exports,E=s("295d"),I=s.n(E);i.a.use(I.a);var S={v:null,smooth:null,scroll:null},M={name:"Masthead",data:function(){return c()({},S)},components:{Logo:v},props:{back:{type:String,default:"light"}},computed:{strokeColor:function(){return"dark"===this.back?"#fff":"#222"}},methods:{beginAnimate:function(){var t=this;this.$el.classList.remove("scene--set");var e=function(e){return t.$el.querySelector(e)};m.c.from(e(".logo"),1,{y:-60,ease:m.a.easeOut.config(1.25,.9),delay:.75}),[1,2].map(function(t){m.c.from(e(".menu--item:nth-child("+t+") span"),1,{y:-60,ease:m.a.easeOut.config(1,.9),delay:.25*t+.75})})}},mounted:function(){this.$el.addEventListener("enliven",this.beginAnimate)}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"masthead scene"},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"logo"},[s("Logo",{attrs:{stroke:t.strokeColor}})],1),s("nav",{staticClass:"menu"},[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.v-t.smooth-t.scroll,expression:"v-smooth-scroll"}],staticClass:"menu--item",attrs:{href:"#about"}},[s("span",[t._v("About")])]),t._m(0),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:t.v-t.smooth-t.scroll,expression:"v-smooth-scroll"}],staticClass:"menu--item",attrs:{href:"#contact"}},[s("span",[t._v("Contact")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"menu--item",attrs:{href:"https://nmn.gl/blog"}},[e("span",[this._v("Blog")])])}]};var L={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"scroller",class:this.color},[this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pill"},[e("p",{staticClass:"text"},[this._v("Scroll")]),e("div",{staticClass:"bead"})])}]};var T={name:"Hero",components:{Masthead:s("VU/8")(M,F,!1,function(t){s("AlKl")},"data-v-a1ed0b74",null).exports,Scroller:s("VU/8")({name:"Scroller",props:["color"]},L,!1,function(t){s("/0ZP")},"data-v-27a8f111",null).exports,Bg:x},computed:c()({},Object(h.c)(["viewType"]),{expYears:function(){return(new Date).getFullYear()-2012}}),methods:{beginAnimation:function(){var t=this;this.$el.classList.remove("scene--set");var e=function(e){return t.$el.querySelector(e)},s=function(e){return t.$el.querySelectorAll(e)};[1,2,3].map(function(t){m.c.from(s(".title > span")[t-1],1,{y:25,opacity:0,ease:m.b.easeOut,rotationY:10,delay:.25*t})}),[1,2].map(function(t){var e=s(".highlight")[t-1];e&&m.c.from(e,2,{scaleX:0,ease:m.b.easeOut,delay:1+.5*(t-1)})}),m.c.from(e(".subtitle"),2,{delay:.75,ease:m.b.easeOut,opacity:0,y:10}),m.c.from(e(".hero__bottom"),1,{delay:1.5,y:50,opacity:0,ease:m.b.easeOut})}},mounted:function(){this.$el.addEventListener("enliven",this.beginAnimation)}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero-container scene"},[s("div",{staticClass:"hero"},[s("Masthead",{staticClass:"masthead",attrs:{back:"dark"}}),s("Bg"),s("div",{staticClass:"wrap"},[t._m(0),s("h2",{staticClass:"subtitle"},[t._v("Hey, I’m "),s("strong",{staticClass:"highlight"},[t._v("Namanyay Goel")]),t._v(". Using over "+t._s(t.expYears)+" years of development experience; I work with my team to craft "),s("em",[t._v("exemplary")]),t._v(" products for the "),s("em",[t._v("worldwide web")])])]),s("div",{staticClass:"wrap hero__bottom"},[s("Scroller",{staticClass:"scroller",attrs:{color:"light"}})],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"title"},[s("span",[s("span",[t._v("Crafting ")]),s("span",[s("strong",[t._v("delightful experiences")]),s("span",{staticClass:"highlight"})]),s("span",[t._v(" ")])]),s("br"),s("span",[s("span",[t._v("used by ")]),s("span",[s("strong",[t._v("millions")]),s("span",{staticClass:"highlight"}),s("span",[t._v(" ")])]),s("span",[t._v("of people, ")]),s("span",[t._v("worldwide.")])])])}]};var V=s("VU/8")(T,j,!1,function(t){s("WPvS")},"data-v-697b1bb9",null).exports,U={name:"About",computed:{yearsFriends:function(){return(new Date).getFullYear()-2011}},mounted:function(){console.log(this.$refs["about-intro"].style.height),this.$refs["about-history"].style.height=this.$refs["about-intro"].clientHeight+"px"},methods:{}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about",attrs:{id:"about"}},[t._m(0),s("div",{staticClass:"about"},[s("div",{staticClass:"wrap"},[s("div",{ref:"about-intro",staticClass:"about__intro"},[t._m(1),s("p",[t._v("It was a blessing for me to discover and chase my passion from a young age, even if it meant coding until midnight in high school or giving up a US university to explore my many startup ideas.")]),t._m(2)]),s("div",{ref:"about-history",staticClass:"about__history"},[s("ol",[s("p",[t._v("Take a peek into my life’s journey by scrolling through some moments that define me:")]),t._m(3),t._m(4),t._m(5),t._m(6),s("li",[t._m(7),t._v("Got invited to join my school’s top computer club, my dojo where I forged long friendships and honed my skills. Met Aditya and Tanay, my best friends and co-founders. We are still working together, "+t._s(t.yearsFriends)+" years later.")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-intro"},[e("div",{staticClass:"content"},[e("div",{staticClass:"wrap"},[e("header",{staticClass:"header"},[e("h1",{staticClass:"title"},[this._v("About")]),e("div",{staticClass:"subtitle"},[this._v("My origins & where I am now")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("From the earliest time I can recall, the most deep and meaningful feeling I have had is the "),e("strong",{staticClass:"joy"},[this._v("joy of creation")]),this._v(" — which emerged with art, music, and animation — and attained its ultimate direction of product development when I approached andolesence")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After years of leading my agency "),e("a",{staticClass:"dyeus",attrs:{href:"http://dyeus.co/"}},[this._v("Dyeus")]),this._v(", I’m now working on "),e("span",{staticClass:"metric"},[this._v("Metric")]),this._v(", a new way to take the effort out of accounting, with two of my most brilliant friends I got to know 12 years ago.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 6 "),e("em",[this._v("(2005)")])]),this._v("My mum gave me a white beige mouse and placed me before a beige screen and showed me how to point. She had no idea then, but she had sown a lasting love.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 12 "),e("em",[this._v("(2010)")])]),this._v("Stumbled upon Newgrounds. Started learning how to create games & stick animations using Macromedia Flash and Actionscript.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 12 "),e("em",[this._v("(2011)")])]),this._v("Joined guitar lessons with my trusty acoustic guitar, sparking my love for playing & creating music. I played only for 1.5 years, deciding to protect my wrist to be able to focus more on software.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 13 "),e("em",[this._v("(2011)")])]),this._v("Began learning web design, graphic design, and web development. Began producing my own remixes on Audacity.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",{staticClass:"time"},[this._v("Age 13 "),e("em",[this._v("(2011)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("strong",{staticClass:"time"},[t._v("Age 13 "),s("em",[t._v("(2012)")])]),t._v("Realized that I could use my "),s("em",[t._v("skills")]),t._v(" to earn "),s("em",[t._v("money")]),t._v(". "),s("a",{attrs:{href:"https://forums.digitalpoint.com/threads/quick-job-add-glow-to-a-logo-quick-5.2412839/#post-17379469",rel:"nofollow"}},[t._v("I earned $5 for my first digital job")]),t._v(". I still remember the thrill of getting paid for working with computers, which I’d do for free anyway. I still feed proud.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 13 "),e("em",[this._v("(2012)")])]),this._v("Throughout my journey, I kept writing my blog to structure my thoughts and teach others what I’d learnt, like this "),e("a",{attrs:{href:"https://nmn.gl/blog/how-to-learn-javascript-my-story"}},[this._v("article on learning JavaScript")]),this._v(" that I used to share with friends who wanted to learn web development.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 14 "),e("em",[this._v("(2013)")])]),this._v("Applied to a remote job as a web developer on of the technology blogs I used to frequent, on Aditya’s insistence. As luck would have it, "),e("a",{attrs:{href:"https://archive.is/KzVZw"}},[this._v("they all loved my portfolio website from back then")]),this._v('. And fortunately, they weren’t a fan of video calls, so my age continued to remain secret. I aced all the interview rounds and joined MakeUseOf as a frontend web developer, where I worked for 1.5 years after reaching home from high school. Till date, this has been my only long-term official "job", I became a pure entrepreneur after this.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 15 "),e("em",[this._v("(2014)")])]),this._v("Participated in Google Code-In, a global competition for high school students, which I discovered while randomly surfing online. Contributed to "),e("a",{attrs:{href:"https://gci14.fossasia.org/"}},[this._v("FOSSASIA")]),this._v(" with 40+ open issues and tasks completed. My mentors, Mario Behling and Aruna Herath, "),e("a",{attrs:{href:"https://opensource.googleblog.com/2015/04/google-code-in-2014-wrap-up-with.html"}},[this._v("chose me as the grand prize winner")]),this._v(". One of the prizes was an all expenses paid trip to Google San Francisco with one parent. Using the money earned with my freelancing, I brought my other parent and sister along as well. I learnt a lot with Google, got a lot more goodies, and my whole family toured throughout SF, the Bay Area, Nevada, and more for a month.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 16 "),e("em",[this._v("(2014)")])]),this._v("Got elected as the Vice President of the computer club Code Warriors.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 16 "),e("em",[this._v("(2014)")])]),this._v("Chose and led a team of 12 peers and created a fictional orbital space settlement as part of "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/International_Space_Settlement_Design_Competition"}},[this._v("SSDC’s initial round")]),this._v(". We won and moved to the Asian round, where we partnered with a team from China and secured rank #1 in all of Asia upon making a lunar settlement over a red bull driven all nighter.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 17 "),e("em",[this._v("(2015)")])]),this._v("Got invited to the US for winning the Asian round of SSDC, to spend time at the Kennedy Space Center and work with Boeing employees to create a Martian space settlement. "),e("a",{attrs:{href:"https://spaceset.org/who-we-are/"}},[this._v("Jack Gafford")]),this._v(" chose me to receive the Dick Edwards Award for Excellent Leadership during my time there.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 17 "),e("em",[this._v("(2015)")])]),this._v("Got elected as the President of the computer club Code Warriors.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("strong",{staticClass:"time"},[t._v("Age 17 "),s("em",[t._v("(2016)")])]),t._v("In 11"),s("sup",[t._v("th")]),t._v(" grade, I realized that the computer science books were difficult to understand and could do with a major overhaul. I published a free e-book called "),s("a",{attrs:{href:"https://leanpub.com/lessconfusingcpp"}},[t._v("Less Confusing C++")]),t._v(" to teach 11"),s("sup",[t._v("th")]),t._v(" grade programming around the time when I was finishing the year myself. It got to around 500+ readers quickly, and was praised by many of my juniors and teachers IRL.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 17 "),e("em",[this._v("(2016)")])]),this._v("Joined University of Washington at Seattle. Chose it because of Microsoft, Amazon, and because, well, it’s Seattle. Was invited to start in the Honors program.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 18 "),e("em",[this._v("(2016)")])]),this._v('Created my first web product with Tanay called "Unexpend". It was a marketplace aggregator to find you the best prices for any product. We earned a little via affiliate links, before shutting it down.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 18 "),e("em",[this._v("(2016)")])]),this._v("After my first quarter, scoring a 4.0 GPA and making the Dean's List, I decided to drop out. I felt that the pace of education was too slow and the costs too high. I decided to remain debt-free, come back home, and start my business with Tanay.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 18 "),e("em",[this._v("(2016)")])]),this._v('Started and incorporated my startup "Nataco" with Tanay. Founded two e-commerce companies called "Flairlift" and "Untitle" selling t-shirts. Made beautiful websites, did our first photoshoots, and learnt about Facebook marketing, warehousing, and B2B sales. Our CPCs becmae too high and we quit after selling out our last batches in 2 years.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 20 "),e("em",[this._v("(2018)")])]),this._v("Started "),e("a",{staticClass:"dyeus",attrs:{href:"https://dyeus.co/"}},[this._v("Dyeus")]),this._v(", a design and development agency, and worked on a "),e("em",[this._v("lot")]),this._v(" of web and mobile app client projects with Tanay and a small team.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 22 "),e("em",[this._v("(2020)")])]),this._v("Pivoted to working on the blockchain. Started with a small project on the MATIC chain. It went viral and had around $10m locked value at one point.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 22 "),e("em",[this._v("(2020)")])]),this._v("After many on and offs since 2016, decided to get set up a home gym with some new and some second hand equipment and started a serious weightlifting journey following "),e("a",{attrs:{href:"https://i.stack.imgur.com/OUcEY.png"}},[this._v("Phrakture's Greyskull LP")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 24 "),e("em",[this._v("(2022)")])]),this._v("After working on "),e("em",[this._v("many")]),this._v(" crypto projects, growing to a team of 25, and delivering many successes totalling a TVL of $100m+, we decided to take a break and ideate our own product. Spent a few months travelling throughout South East Asia and visited Japan, Thailand, Hong Kong, Dubai, and more.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 25 "),e("em",[this._v("(2023)")])]),this._v("Tanay and Aditya gifted me an electric guitar, resuming my love of music. Also, after lifting for over 3 years, started learning Mixed Martial Arts to increase my speed and skill.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",{staticClass:"time"},[this._v("Age 25 "),e("em",[this._v("(2023)")])]),this._v("Started "),e("span",{staticClass:"metric"},[this._v("Metric")]),this._v(", a generative AI stealth project, with my two best friends and co-founders, with my cumilative experience of working professionally online for over 10 years.")])}]};var P=s("VU/8")(U,R,!1,function(t){s("lj/P")},null,null).exports,q={name:"GithubIcon",props:{currentColor:{type:String,default:"#fff"}}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:this.currentColor,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"}})])},staticRenderFns:[]},B=s("VU/8")(q,G,!1,null,null,null).exports,O={name:"LinkedinIcon",props:{currentColor:{type:String,default:"#fff"}}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:this.currentColor,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}})])},staticRenderFns:[]},D={name:"Contact",components:{LinkedinIcon:s("VU/8")(O,z,!1,null,null,null).exports,GithubIcon:B}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page scene",attrs:{id:"contact"}},[e("div",{staticClass:"contact"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"persp"},[e("div",{staticClass:"title"},[this._v("Contact")]),e("div",{staticClass:"content"},[e("p",[this._v("Write to me at  "),e("a",{attrs:{href:"mailto:hi@nmn.gl"}},[this._v("hi@nmn.gl")]),this._v(" or find me on"),e("a",{staticClass:"icon",attrs:{href:"https://www.linkedin.com/in/namanyayg/"}},[e("LinkedinIcon")],1),e("a",{staticClass:"icon",attrs:{href:"https://github.com/namanyayg/"}},[e("GithubIcon")],1)])])])])])])},staticRenderFns:[]};var H={name:"Landing",components:{Hero:V,About:P,Contact:s("VU/8")(D,W,!1,function(t){s("aDxc")},"data-v-3c555aaf",null).exports}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Hero"),e("About"),e("Contact"),e("ScrollAnimator")],1)},staticRenderFns:[]},Y=s("VU/8")(H,N,!1,null,null,null).exports;i.a.use(A.a);var J=new A.a({routes:[{path:"/",component:Y}],mode:"history",scrollBehavior:function(t,e,s){return s||(t.hash?{selector:t.hash}:{x:0,y:0})}}),K={state:{viewType:null},getters:{viewType:function(t){return t.viewType}},mutations:{setViewType:function(t,e){t.viewType=e}},actions:{fetchViewTypeFromRoute:function(t,e){var s=t.commit,i=e.hash;return/#i-[a-z]+/.test(i)?(s("setViewType",i.replace("#i-","")),i):null}}};i.a.use(h.a);var Z=new h.a.Store({modules:{viewType:K},strict:!1});i.a.config.productionTip=!1,i.a.use(C.a,b.a);var X="//serve.nmn.gl";i.a.axios.defaults.baseURL=X,new i.a({el:"#app",store:Z,router:J,components:{App:w},template:"<App/>"})},WPvS:function(t,e){},aDxc:function(t,e){},bp89:function(t,e){},"lj/P":function(t,e){},nGzS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b46984e321fe591ef351.js.map