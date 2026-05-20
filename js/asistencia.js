const estudiantes = [
  { id:'CC-10201', nombre:'Valeria',   apellido:'Suárez',   grupo:'IS-301 · Cálculo' },
  { id:'CC-10345', nombre:'Sebastián', apellido:'Ramos',    grupo:'IS-301 · Cálculo' },
  { id:'TI-55123', nombre:'Camila',    apellido:'Herrera',  grupo:'IS-401 · Prog Web' },
  { id:'CC-20111', nombre:'Jorge',     apellido:'Mejía',    grupo:'AD-201 · Gestión' },
  { id:'CC-30222', nombre:'Diana',     apellido:'Castillo', grupo:'EN-101 · Anatomía' },
];
const sensores = ['S-001','S-002','S-003'];
let liveCount = 2;

function simularDeteccion() {
  const est = estudiantes[Math.floor(Math.random() * estudiantes.length)];
  const sensor = sensores[Math.floor(Math.random() * sensores.length)];
  const now = new Date();
  const hora = now.toTimeString().slice(0,5);
  const estados = ['Presente','Presente','Presente','Tardanza'];
  const estado = estados[Math.floor(Math.random() * estados.length)];
  const badgeClass = estado === 'Presente' ? 'badge-green' : 'badge-gold';

  const tbody = document.getElementById('live-tbody');
  liveCount++;
  const tr = document.createElement('tr');
  tr.className = 'live-row-new';
  tr.innerHTML = `
    <td class="text-muted">${liveCount}</td>
    <td class="text-em">${est.id}</td>
    <td>${est.nombre}</td>
    <td>${est.apellido}</td>
    <td>${est.grupo}</td>
    <td>${sensor}</td>
    <td style="font-family:'Crimson Pro',serif;color:var(--emerald);">${hora}</td>
    <td><span class="badge ${badgeClass}">${estado}</span></td>
  `;
  tbody.insertBefore(tr, tbody.firstChild);
}

function registrarManual() {
  alert('Asistencia registrada manualmente.');
}

// Preset fecha y hora
const now = new Date();
document.getElementById('manual-fecha').value = now.toISOString().split('T')[0];
document.getElementById('manual-hora').value = now.toTimeString().slice(0,5);

// Auto-open manual form if URL param
if (new URLSearchParams(location.search).get('manual') === 'true') {
  document.getElementById('manual-form').scrollIntoView({ behavior:'smooth' });
}