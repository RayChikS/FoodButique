import{l as d,s as a,c,a as E,b as A,o as y,r,p as m,e as f,d as T}from"./assets/modalMarkups-fe83d41b.js";import"./assets/vendor-85c19974.js";const i=d(c.LOCAL_CART_KEY)??[];i.forEach(t=>{t.amount=1});a(c.ORDER,i);console.log(i);async function k(){const t=document.getElementById("user-email").value,e=d(c.LOCAL_CART_KEY)??[];e.forEach(n=>{n.amount=1}),a(c.ORDER,e),console.log(e);const o=e.map(n=>({productId:n._id,amount:n.amount}));try{const n=await E(t,o);console.log("Відповідь на замовлення:",n),console.log(t,o);const l=A(e);y(L,l),setTimeout(()=>{a(c.LOCAL_CART_KEY,[]),a(c.ORDER,[]),location.reload()},5e3),console.log("Відповідь на замовлення:",n)}catch(n){console.error("Помилка при замовленні:",n)}}document.getElementById("checkoutButton");const L=document.getElementById("checkoutButton");L.addEventListener("click",function(t){t.preventDefault(),k()});const s=d(c.LOCAL_CART_KEY)??[],p=document.querySelector(".order-container"),C=()=>{const t=s.length;r.productsCount.textContent=`(${t})`,r.productsCountHeader.textContent=`(${t})`},_=t=>{const e=s.findIndex(({_id:o})=>o===t);s.splice(e,1),T(c.LOCAL_CART_KEY),a(c.LOCAL_CART_KEY,s),r.cartList.innerHTML=m(s),g(),C()},h=t=>{if(!t.target.closest(".js-close"))return;const o=t.target.closest(".js-card").dataset.id;console.log(t.target),t.target.classList.contains("js-close")&&(_(o),p.innerHTML="",r.deleteAllButton.innerHTML="")},g=()=>{const t=s.reduce((e,o)=>e+o.price,0).toFixed(2);r.totalAmountDisplay.textContent=`$${t}`},B=()=>{localStorage.setItem("cart","[]"),location.reload()},O=()=>{r.cartList.innerHTML=`<li><img class="basket-img" src="${f}" alt="Yellow empty basket">
  <div class="basket-text">
      <p class="empty-text"> Your basket is <span>empty...</span></p>
      <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
  </div></li>`,p.innerHTML="",r.deleteAllButton.innerHTML=""},R=()=>{if(s.length>3&&r.cartList.classList.add("scrollable"),!s.length){O();return}r.cartList.innerHTML=m(s),r.cartList.addEventListener("click",h),g()};C();R();const v=document.querySelectorAll(".counter-pr");v.forEach(t=>{const e=t.querySelector("#value");let o=0;const n=t.querySelector('[data-action="decrement"]'),l=t.querySelector('[data-action="increment"]');n.addEventListener("click",()=>{o>0&&(o-=1,u(e,o))}),l.addEventListener("click",()=>{o+=1,u(e,o)})});const u=(t,e)=>{t.textContent=e};r.deleteAllButton.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map
