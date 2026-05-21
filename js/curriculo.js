function switchTab(id, el) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  el.classList.add('active');
}

function selectMateria(val) {
  const box = document.getElementById('selected-box');
  const nameEl = document.getElementById('subj-name');
  const metaEl = document.getElementById('subj-meta');
  if (!val) { box.style.display='none'; return; }
  const map = {
    calc: ['Cálculo Diferencial', 'MAT-101 · 3 créditos · Ing. de Sistemas · Semestre I'],
    prog: ['Programación I', 'MAT-201 · 4 créditos · Ing. de Sistemas · Semestre II'],
    web:  ['Programación Web', 'MAT-305 · 3 créditos · Ing. de Sistemas · Semestre IV'],
    gest: ['Gestión Empresarial', 'MAT-210 · 3 créditos · Administración · Semestre III'],
  };
  nameEl.textContent = map[val][0];
  metaEl.textContent = map[val][1];
  box.style.display = 'flex';
}

function updateTotal() {
  const p1 = +document.getElementById('pct1').value || 0;
  const p2 = +document.getElementById('pct2').value || 0;
  const p3 = +document.getElementById('pct3').value || 0;
  document.getElementById('pct1-display').textContent = p1 + '%';
  document.getElementById('pct2-display').textContent = p2 + '%';
  document.getElementById('pct3-display').textContent = p3 + '%';
  const total = p1 + p2 + p3;
  const el = document.getElementById('pct-total');
  el.textContent = total + '%';
  el.style.color = total === 100 ? 'var(--emerald)' : 'var(--rose)';
}

function addObj() {
  const list = document.getElementById('obj-list');
  const n = list.children.length + 1;
  const row = document.createElement('div');
  row.className = 'flex gap-8';
  row.innerHTML = `<input type="text" placeholder="Objetivo específico ${n}..." style="flex:1;"><button class="btn-icon" onclick="removeObj(this)"><i class='bx bx-x'></i></button>`;
  list.appendChild(row);
}

function removeObj(btn) { btn.parentElement.remove(); }

function addCompetencia() {
  const list = document.getElementById('comp-list');
  const row = document.createElement('div');
  row.className = 'competencia-row';
  row.innerHTML = `<input type="text" placeholder="Unidad Temática"><input type="text" placeholder="Resultado de Aprendizaje"><button class="btn-icon btn-sm" onclick="this.closest('.competencia-row').remove()"><i class='bx bx-trash'></i></button>`;
  list.appendChild(row);
}

function addEvalRow(tbodyId) {
  const tbody = document.getElementById(tbodyId);
  const tr = document.createElement('tr');
  tr.innerHTML = `<td><input type="text" placeholder="Actividad" style="width:100%;"></td><td><input type="number" placeholder="%" style="width:60px;"></td><td><input type="date"></td><td><button class="btn-icon btn-sm" onclick="this.closest('tr').remove()"><i class='bx bx-trash'></i></button></td>`;
  tbody.appendChild(tr);
}

function guardarCurriculo() {
  alert('Microcurrículo guardado exitosamente.');
}

function toggleUserMenu() {
    document.getElementById('sidebarUser').classList.toggle('open');
  }
  document.addEventListener('click', function(e) {
    const su = document.getElementById('sidebarUser');
    if (su && !su.contains(e.target)) su.classList.remove('open');
  });