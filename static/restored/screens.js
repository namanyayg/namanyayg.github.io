/* Archive-only screen navigation. No original application code or network calls. */
(function () {
  var mobile = document.querySelector('main.mobile');
  if (mobile) {
    var nav = document.createElement('nav'); nav.className = 'archive-screen-nav'; nav.setAttribute('aria-label', 'Prototype screens');
    ['Overview', 'Add expenditure', 'History'].forEach(function (label, i) { var b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.dataset.screen = String(i + 1); nav.appendChild(b); });
    document.querySelector('.try__demo').prepend(nav);
    function show(n) { [1, 2, 3].forEach(function (i) { var el = document.querySelector('.mobile--' + i); el.style.display = i === n ? 'block' : 'none'; el.style.top = '36px'; el.style.opacity = '1'; }); nav.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(Number(b.dataset.screen) === n)); }); }
    document.querySelectorAll('[data-screen]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); show(Number(b.dataset.screen)); }); }); show(1);
  }
  var digital = document.querySelector('.page--cont');
  if (digital) {
    digital.style.marginLeft = '0'; digital.style.display = 'block'; digital.style.transform = 'none'; digital.style.width = '100%';
    function screen(n) { document.querySelectorAll('.page--cont > .page').forEach(function (el, i) { el.style.display = i === n ? 'block' : 'none'; el.style.position = 'relative'; el.style.left = '0'; el.style.width = '100%'; }); document.querySelectorAll('[data-digital-screen]').forEach(function (a) { a.classList.toggle('selected', Number(a.dataset.digitalScreen) === n); }); }
    document.querySelectorAll('[data-digital-screen]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); screen(Number(a.dataset.digitalScreen)); }); }); screen(1);
  }
}());
