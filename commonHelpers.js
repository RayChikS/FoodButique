import{l as i,r as e,c as a,p as r,a as d,s as C}from"./assets/refs-85e6fdcc.js";const o=i(a.LOCAL_CART_KEY)??[],c=()=>{const t=o.length;console.log(`Item Count: ${t}`),e.productsCount.textContent=`(${t})`},L=t=>{const n=o.findIndex(({_id:s})=>s===t);console.log(n),o.splice(n,1),d(a.LOCAL_CART_KEY),C(a.LOCAL_CART_KEY,o),e.cartList.innerHTML=r(o),l(),c()},u=t=>{if(t.currentTarget===t.target)return;const n=t.target.closest(".js-card").dataset.id;console.log(t.target),t.target.classList.contains("js-close")&&L(n)},l=()=>{const t=o.reduce((n,s)=>n+s.price,0).toFixed(2);e.totalAmountDisplay.textContent=`$${t}`},g=()=>{localStorage.setItem("cart","[]"),location.reload()},m=()=>{o.length>3&&e.cartList.classList.add("scrollable"),e.cartList.innerHTML=r(o),e.cartList.addEventListener("click",u),l()};c();m();e.deleteAllButton.addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map
