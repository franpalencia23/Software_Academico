  const d = new Date();
  document.getElementById('fecha-hoy').textContent =
    d.toLocaleDateString('es-CO', { weekday:'long', year:'numeric', month:'long', day:'numeric' });