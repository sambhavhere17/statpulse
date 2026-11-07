const toast = document.querySelector('.toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
document.querySelectorAll('.league-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelector('.league-tab.active')?.classList.remove('active');
    tab.classList.add('active');
    showToast(tab.dataset.league + ' dashboard selected');
  });
});
document.querySelectorAll('.star-button').forEach((button) => {
  button.addEventListener('click', () => {
    const followed = button.classList.toggle('followed');
    button.textContent = followed ? '★' : '☆';
    button.style.color = followed ? '#b8ef73' : '';
    showToast(followed ? 'Game added to your watchlist' : 'Game removed from your watchlist');
  });
});
document.querySelectorAll('.remind-button').forEach((button) => {
  button.addEventListener('click', () => {
    const active = button.classList.toggle('reminded');
    button.textContent = active ? '✓ Reminder set' : '＋ Remind me';
    showToast(active ? 'Game reminder set' : 'Reminder removed');
  });
});
document.querySelector('.customize-button').addEventListener('click', () => showToast('Dashboard customization is coming soon'));
document.querySelector('.add-league').addEventListener('click', () => showToast('League picker is coming soon'));
document.querySelector('.tab-add').addEventListener('click', () => showToast('League picker is coming soon'));
document.querySelectorAll('.nav-link, .league-link').forEach((link) => link.addEventListener('click', (event) => {
  const href = link.getAttribute('href');
  if (href?.startsWith('#') && !document.querySelector(href)) {
    event.preventDefault();
    showToast(link.textContent.trim() + ' view is coming soon');
  }
}));
