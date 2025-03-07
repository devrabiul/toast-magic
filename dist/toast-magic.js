function closeToastMagicItem(t){t.classList.remove("show"),setTimeout((()=>{t.remove()}),500)}document.addEventListener("DOMContentLoaded",(function(){window.toastMagicConfig;document.querySelector(".toast-container")||document.body.insertAdjacentHTML("afterbegin",`<div><div class="toast-container ${toastMagicPosition}"></div></div>`);const t=new ToastMagic;document.body.addEventListener("click",(function(s){const o=s.target.closest("[data-toast-type]");if(!o)return;const n=o.getAttribute("data-toast-type"),e=o.getAttribute("data-toast-heading")||"Notification",i=o.getAttribute("data-toast-description")||"",a=o.hasAttribute("data-toast-close-btn"),c=o.getAttribute("data-toast-btn-text")||"",r=o.getAttribute("data-toast-btn-link")||"";t[n]?t[n](e,i,a,c,r):t.info(e,i,a,c,r)}))})),document.body.addEventListener("click",(function(t){const s=t.target.closest(".toast-close-btn");if(!s)return;const o=s.closest(".toast-item");o&&closeToastMagicItem(o)}));class ToastMagic{constructor(){const t=window.toastMagicConfig||{};this.toastMagicPosition=t.positionClass||"toast-top-end",this.toastMagicCloseButton=t.closeButton||!1,this.toastContainer=document.querySelector(".toast-container"),this.toastContainer||(this.toastContainer=document.createElement("div"),this.toastContainer.classList.add("toast-container"),document.body.appendChild(this.toastContainer)),this.toastContainer.classList.remove(...this.toastContainer.classList),this.toastContainer.classList.add("toast-container",this.toastMagicPosition)}show({type:t,heading:s,description:o="",showCloseBtn:n=this.toastMagicCloseButton,customBtnText:e="",customBtnLink:i=""}){let a,c;switch(t){case"success":a="toast-success",c="success";break;case"error":a="toast-danger",c="danger";break;case"warning":a="toast-warning",c="warning";break;default:a="toast-info",c="info"}const r=document.createElement("div");r.classList.add("toast-item",a),r.setAttribute("role","alert"),r.setAttribute("aria-live","assertive"),r.setAttribute("aria-atomic","true"),r.innerHTML=`\n            <div class="position-relative">\n                <div class="toast-item-content-center">\n                    <div class="toast-body">\n                        <span class="toast-body-icon-container toast-text-${c}">\n                            ${getToasterIcon(t)}\n                        </span>\n                        <div class="toast-body-container">\n                            ${s?`<div class="toast-body-title">\n                                    <h4>${s}</h4>\n                                </div>`:""}\n                            ${o?`<p class="fs-12">${o}</p>`:""}\n                        </div>\n                    </div>\n                    <div class="toast-body-end">\n                        ${n?`<button type="button" class="toast-close-btn">${getToasterIcon("close")}</button>`:""}\n                        ${e&&i?`<a href="${i}" class="toast-custom-btn toast-btn-bg-${c}">${e}</a>`:""}\n                    </div>\n                </div>\n            </div>\n        `;const d=(window.toastMagicConfig||{}).positionClass||"toast-top-end";"toast-bottom-end"==d||"toast-bottom-start"==d?this.toastContainer.append(r):this.toastContainer.prepend(r),setTimeout((()=>{r.classList.add("show")}),100),setTimeout((()=>{closeToastMagicItem(r)}),5e3)}success(t="Success!",s="",o=!1,n="",e=""){this.show({type:"success",heading:t,description:s,showCloseBtn:o,customBtnText:n,customBtnLink:e})}error(t="Error!",s="",o=!1,n="",e=""){this.show({type:"error",heading:t,description:s,showCloseBtn:o,customBtnText:n,customBtnLink:e})}warning(t="Warning!",s="",o=!1,n="",e=""){this.show({type:"warning",heading:t,description:s,showCloseBtn:o,customBtnText:n,customBtnLink:e})}info(t="Info!",s="",o=!1,n="",e=""){this.show({type:"info",heading:t,description:s,showCloseBtn:o,customBtnText:n,customBtnLink:e})}}function getToasterIcon(t=null){return"success"==t?'<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="28" height="28">\n<g><path fill="currentColor" d="M405.333,0H106.667C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.214,47.786,511.93,106.667,512h298.667   C464.214,511.93,511.93,464.214,512,405.333V106.667C511.93,47.786,464.214,0.071,405.333,0z M426.667,172.352L229.248,369.771   c-16.659,16.666-43.674,16.671-60.34,0.012c-0.004-0.004-0.008-0.008-0.012-0.012l-83.563-83.541   c-8.348-8.348-8.348-21.882,0-30.229s21.882-8.348,30.229,0l83.541,83.541l197.44-197.419c8.348-8.318,21.858-8.294,30.176,0.053   C435.038,150.524,435.014,164.034,426.667,172.352z"/></g></svg>\n':"error"==t?'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1.231,6.641l-4.466,5.359,4.466,5.359c.354.425.296,1.056-.128,1.409-.188.155-.414.231-.64.231-.287,0-.571-.122-.77-.359l-4.231-5.078-4.231,5.078c-.198.237-.482.359-.77.359-.226,0-.452-.076-.64-.231-.424-.354-.481-.984-.128-1.409l4.466-5.359-4.466-5.359c-.354-.425-.296-1.056.128-1.409.426-.353,1.056-.296,1.409.128l4.231,5.078,4.231-5.078c.354-.424.983-.48,1.409-.128.424.354.481.984.128,1.409Z"/></svg>':"close"==t?'<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 20 20" width="14" height="14"><path fill="currentColor" d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z"/></svg>':'<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-8,6c0-.553.447-1,1-1s1,.447,1,1v7.5c0,.553-.447,1-1,1s-1-.447-1-1v-7.5Zm1,13c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/></svg>'}const toastMagic=new ToastMagic;