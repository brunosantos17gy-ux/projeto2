const STORE='fortsilv_demo_lessons_v1';
function getLessons(){try{return JSON.parse(localStorage.getItem(STORE)||'[]')}catch{return []}}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function toast(msg){const el=document.getElementById('toast');if(!el)return;el.textContent=msg;el.classList.remove('hidden');setTimeout(()=>el.classList.add('hidden'),2800)}

function showView(id){document.querySelectorAll('.view').forEach(x=>x.classList.add('hidden'));document.getElementById(id).classList.remove('hidden');document.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('active',x.dataset.view===id));document.getElementById('crumb').textContent=({inicio:'Início',biblioteca:'Minha biblioteca',materiais:'Materiais'})[id]}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
function renderLessons(){const data=getLessons(),groups={};data.forEach(x=>(groups[x.module]??=[]).push(x));let html='';Object.entries(groups).forEach(([name,items])=>{html+=`<div class="modtitle">${escapeHtml(name)}</div>`;items.forEach(x=>html+=`<button class="lesson" onclick="selectLesson(${x.id})">▶ ${escapeHtml(x.title)}<small>Videoaula</small></button>`)});document.getElementById('lessons').innerHTML=html||'<div class="empty">Nenhuma aula publicada ainda.</div>'}
function selectLesson(id){const x=getLessons().find(a=>a.id===id);if(!x)return;document.getElementById('videoTitle').textContent=x.title;document.getElementById('videoDesc').textContent=x.desc||x.module;document.getElementById('videoArea').innerHTML='<div><div style="font-size:42px;color:var(--gold2)">▶</div><small>VÍDEO NÃO DISPONÍVEL NESTA VERSÃO</small><small>O serviço de hospedagem será conectado na próxima etapa.</small></div>'}
renderLessons();
