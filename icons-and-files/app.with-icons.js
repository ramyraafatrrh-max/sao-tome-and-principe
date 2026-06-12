// Add this to your existing app.js
function ensureIconDock(){
  const existing = document.getElementById('iconDock');
  if (existing) return;
  const dock = document.createElement('div');
  dock.id = 'iconDock';
  dock.className = 'iconDock';
  dock.innerHTML = `
    <img src='assets/icons/icon-1.png' alt='Icon 1'/>
    <img src='assets/icons/icon-2.png' alt='Icon 2'/>
    <img src='assets/icons/icon-3.png' alt='Icon 3'/>
  `;
  document.body.appendChild(dock);
}
