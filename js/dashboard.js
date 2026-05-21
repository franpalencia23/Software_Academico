  const d = new Date();
  document.getElementById('fecha-hoy').textContent =
    d.toLocaleDateString('es-CO', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  function toggleUserMenu() {
    document.getElementById('sidebarUser').classList.toggle('open');
  }
  document.addEventListener('click', function(e) {
    const su = document.getElementById('sidebarUser');
    if (su && !su.contains(e.target)) su.classList.remove('open');
  });