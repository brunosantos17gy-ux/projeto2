const STORE='fortsilv_demo_lessons_v1';
function getLessons(){try{return JSON.parse(localStorage.getItem(STORE)||'[]')}catch{return []}}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function toast(msg){const el=document.getElementById('toast');if(!el)return;el.textContent=msg;el.classList.remove('hidden');setTimeout(()=>el.classList.add('hidden'),2800)}
