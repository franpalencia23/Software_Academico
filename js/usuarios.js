function switchTab(id, el) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  el.classList.add('active');
}

// Auto-activar tab por query param
const params = new URLSearchParams(location.search);
const tab = params.get('tab');
if (tab) {
  const btn = [...document.querySelectorAll('.tab-btn')].find(b => b.getAttribute('onclick').includes(tab));
  if (btn) btn.click();
}

  function toggleUserMenu() {
    document.getElementById('sidebarUser').classList.toggle('open');
  }
  document.addEventListener('click', function(e) {
    const su = document.getElementById('sidebarUser');
    if (su && !su.contains(e.target)) su.classList.remove('open');
  });