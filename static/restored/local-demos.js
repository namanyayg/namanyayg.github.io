/* New local adapters for the recovered interfaces. No account or API requests. */
(function () {
  var items = Array.from(document.querySelectorAll('.karya-item'));
  if (items.length) {
    try {
      var saved = JSON.parse(localStorage.getItem('nmn-restored-karya') || '[]');
      items.forEach(function (item, i) { var value = saved[i] || {}; item.querySelector('input[type=text]').value = typeof value.text === 'string' ? value.text.slice(0, 200) : ''; item.querySelector('input[type=checkbox]').checked = value.done === true; });
    } catch (e) {}
    items.forEach(function (item) { item.querySelector('input[type=text]').maxLength = 200; item.addEventListener('input', function () {
      try { localStorage.setItem('nmn-restored-karya', JSON.stringify(items.map(function (el) { return {text:el.querySelector('input[type=text]').value,done:el.querySelector('input[type=checkbox]').checked}; }))); } catch (e) { var note = document.getElementById('storage-note'); if (!note) { note = document.createElement('p'); note.id = 'storage-note'; note.setAttribute('role', 'status'); note.textContent = 'Browser storage is unavailable. Your list will last until you leave this page.'; item.parentNode.appendChild(note); } }
    }); });
  }
  var value = document.querySelector('input.value'), from = document.querySelector('input.from'), to = document.querySelector('input.to');
  if (value && from && to) {
    var factors = {'degree':1,'arcminute':1/60,'arcsecond':1/3600,'radian':180/Math.PI,'full circle':360};
    function convert() { var a = from.value.trim().toLowerCase(), b = to.value.trim().toLowerCase(), n = Number(value.value); var result = document.querySelector('.ans'); result.textContent = value.value.trim() && Number.isFinite(n) && Object.prototype.hasOwnProperty.call(factors,a) && Object.prototype.hasOwnProperty.call(factors,b) ? String(Number((n*factors[a]/factors[b]).toPrecision(12))) : ''; }
    [value,from,to].forEach(function (el) { el.addEventListener('input',convert); });
  }
}());
