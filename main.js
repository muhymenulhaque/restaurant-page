!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),window.onload=function(){!function(){let e=document.createElement("span");e.id="logo",e.innerHTML="Abdul<br>Restora";let t=document.createElement("h1");t.align="center",t.id="name",t.innerText="Abdul Restora";let n=document.createElement("div");n.id="container";let r=document.createElement("div");r.id="border";let i=document.createElement("div");i.id="tabs";let o=document.createElement("span");o.id="home",o.innerText="Home";let a=document.createElement("span");a.id="menu",a.innerText="Menu";let l=document.createElement("span");l.id="contact",l.innerText="Contact",i.appendChild(o),i.appendChild(a),i.appendChild(l);let d=document.createElement("h3");d.id="quote";let c=document.createElement("i");c.innerText="Eat healthy, live healthy.",d.appendChild(c);let u=document.createElement("p");u.id="story",u.innerText="We are the most reliable local restaurant you can find. We work with honesty, work diligently to serve your food of the desire. Our chefs are well trained to perform their job and have never failed the customers. Our Ingredients are brought from the farmers directly so, we serve as much natural non-processed food as possible. See some reviews of our customers.";let s=document.createElement("p");s.id="review1",s.innerText='"I just love this place. The waiters and workers here do their job just perfectly. If I were to recommend a place, it would definitely be this, The Abdul Restora"',s.innerHTML+="<br><br>";let m=document.createElement("span");m.id="reviewer",m.innerText="- A local customer",s.appendChild(m),r.appendChild(i),r.appendChild(n),n.appendChild(d),n.appendChild(u),n.appendChild(s);let p=document.querySelector("#content");p.appendChild(e),p.appendChild(t),p.appendChild(r)}();let e=document.querySelector("#home"),t=document.querySelector("#menu"),n=document.querySelector("#contact");e.onclick=function(){e.classList.add("tabSelected"),t.classList.remove("tabSelected"),n.classList.remove("tabSelected"),function(){let e=document.createElement("h3");e.id="quote";let t=document.createElement("i");t.innerText="Eat healthy, live healthy.",e.appendChild(t);let n=document.createElement("p");n.id="story",n.innerText="We are the most reliable local restaurant you can find. We work with honesty, work diligently to serve your food of the desire. Our chefs are well trained to perform their job and have never failed the customers. Our Ingredients are brought from the farmers directly so, we serve as much natural non-processed food as possible. See some reviews of our customers.";let r=document.createElement("p");r.id="review1",r.innerText='"I just love this place. The waiters and workers here do their job just perfectly. If I were to recommend a place, it would definitely be this, The Abdul Restora"',r.innerHTML+="<br><br>";let i=document.createElement("span");i.id="reviewer",i.innerText="- A local customer",r.appendChild(i);let o=document.querySelector("#container");o.innerHTML="",o.appendChild(e),o.appendChild(n),o.appendChild(r)}()},t.onclick=function(){t.classList.add("tabSelected"),e.classList.remove("tabSelected"),n.classList.remove("tabSelected"),function(){let e=document.querySelector("#container");e.innerHTML="";let t=document.createElement("div");function n(e,t,n){let r=document.createElement("div");r.classList.add("menuItem");let i=document.createElement("p");i.classList.add("itemName"),i.innerText=e;let o=document.createElement("p");o.classList.add("itemAmount"),o.innerHTML=t;let a=document.createElement("p");return a.classList.add("itemPrice"),a.innerText=n,r.appendChild(i),r.appendChild(o),r.appendChild(a),r}t.id="menuContainer",t.appendChild(n("Sheek Kebab","2 Sheek Kababs with 2 pieces of nun","80 ৳ ")),t.appendChild(n("Kacchi Buryani","Special Biryani made with meat of goat.","200 ৳ ")),t.appendChild(n("Chicken biryani","Special Biryani with chicken and egg.","190 ৳ ")),t.appendChild(n("Lunch Set 1","A bowl of rice, Chicken Cury, Dal.","150 ৳ ")),t.appendChild(n("Lunch Set 2","A bowl of rice, Fish cury, Dal","180 ৳")),e.appendChild(t)}()},n.onclick=function(){n.classList.add("tabSelected"),t.classList.remove("tabSelected"),e.classList.remove("tabSelected"),function(){let e=document.querySelector("#container");e.innerHTML="";let t=document.createElement("p");t.id="contactContainer",t.innerHTML="We offer home deliver in less than 30 minutes. Call us now at +880123456789.<br><br>Come visit us at our restaurant.<br>Address: Dhaka, Bangladesh.<br>Phone: +8801777789898<br>E-main: support@me.co",e.appendChild(t)}()},e.click()}}]);