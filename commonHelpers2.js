import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a="feedback-form-state",r=document.querySelector(".feedback-form"),s=r.querySelector("textarea");r.addEventListener("submit",m);s.addEventListener("input",c);u();function m(e){e.preventDefault();const{email:t,message:n}=e.target.elements,l=t.value.trim(),o=n.value.trim();if(!l||!o){alert("Fill please all fields");return}console.log({email:l,message:o}),e.target.reset(),localStorage.removeItem(a)}function c(e){const t=e.target.value;localStorage.setItem(a,t)}function u(){const e=localStorage.getItem(a);e&&(s.value=e)}
//# sourceMappingURL=commonHelpers2.js.map
