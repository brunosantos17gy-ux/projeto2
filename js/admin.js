const STORE='fortsilv_demo_lessons_v1';
function getLessons(){try{return JSON.parse(localStorage.getItem(STORE)||'[]')}catch{return []}}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function toast(msg){const el=document.getElementById('toast');if(!el)return;el.textContent=msg;el.classList.remove('hidden');setTimeout(()=>el.classList.add('hidden'),2800)}

function render(){const a=getLessons(),mods=new Set(a.map(x=>x.module));document.getElementById('count').textContent=String(a.length).padStart(2,'0');document.getElementById('modules').textContent=String(mods.size).padStart(2,'0');document.getElementById('list').innerHTML=a.map(x=>`<div class="adminrow"><div><b>${escapeHtml(x.title)}</b><small>${escapeHtml(x.module)} · ${escapeHtml(x.file||'sem arquivo enviado')}</small></div><button class="ghost" onclick="removeLesson(${x.id})">Excluir</button></div>`).join('')||'<div class="empty">Nenhuma aula cadastrada.</div>'}
function addLesson(){const title=document.getElementById('title').value.trim(),module=document.getElementById('module').value.trim(),desc=document.getElementById('desc').value.trim(),file=document.getElementById('video').files[0];if(!title||!module){toast('Preencha o nome da aula e o módulo.');return}const a=getLessons();a.push({id:Date.now(),title,module,desc,file:file?file.name:''});localStorage.setItem(STORE,JSON.stringify(a));['title','module','desc','video'].forEach(id=>document.getElementById(id).value='');render();toast('Aula de teste cadastrada neste navegador.')}
function removeLesson(id){if(!confirm('Excluir este cadastro de teste?'))return;localStorage.setItem(STORE,JSON.stringify(getLessons().filter(x=>x.id!==id)));render();toast('Cadastro excluído.')}
render();
