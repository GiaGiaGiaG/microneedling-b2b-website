/* Dermadream — floating WhatsApp button (self-contained; safe on every page). */
(function () {
  if (document.getElementById('dd-whatsapp')) return;

  var PHONE = '8618998490241';
  var HREF = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent('Hello Dermadream, I would like to request an OEM/ODM quote.');

  var css = ''
    + '#dd-whatsapp{position:fixed;right:20px;bottom:116px;z-index:2147483000;display:flex;align-items:center;gap:10px;text-decoration:none;font-family:inherit}'
    + '#dd-whatsapp .dd-wa-label{background:#0b1f3a;color:#fff;font-size:13px;font-weight:600;line-height:1;padding:9px 12px;border-radius:999px;box-shadow:0 6px 18px rgba(11,31,58,.22);white-space:nowrap;opacity:0;transform:translateX(6px);transition:opacity .2s ease,transform .2s ease;pointer-events:none}'
    + '#dd-whatsapp:hover .dd-wa-label,#dd-whatsapp:focus-visible .dd-wa-label{opacity:1;transform:translateX(0)}'
    + '#dd-whatsapp .dd-wa-btn{width:56px;height:56px;border-radius:50%;background:#25d366;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(37,211,102,.38);transition:transform .2s ease,box-shadow .2s ease}'
    + '#dd-whatsapp:hover .dd-wa-btn{transform:scale(1.06);box-shadow:0 10px 28px rgba(37,211,102,.5)}'
    + '#dd-whatsapp .dd-wa-btn svg{width:30px;height:30px;display:block}'
    + '@media (max-width:720px){#dd-whatsapp{right:14px;bottom:104px}#dd-whatsapp .dd-wa-label{display:none}#dd-whatsapp .dd-wa-btn{width:52px;height:52px}#dd-whatsapp .dd-wa-btn svg{width:28px;height:28px}}'
    + '@media print{#dd-whatsapp{display:none}}';

  var style = document.createElement('style');
  style.setAttribute('data-dd-whatsapp', '');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  var a = document.createElement('a');
  a.id = 'dd-whatsapp';
  a.href = HREF;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', 'Chat with Dermadream sales on WhatsApp');
  a.innerHTML = ''
    + '<span class="dd-wa-label">Chat with Sales on WhatsApp</span>'
    + '<span class="dd-wa-btn" aria-hidden="true">'
    + '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">'
    + '<path fill="#fff" d="M16.04 3C9.02 3 3.3 8.71 3.3 15.73c0 2.44.69 4.8 2 6.83L3 29l6.64-2.2a12.7 12.7 0 0 0 6.4 1.7c7.02 0 12.74-5.71 12.74-12.73S23.06 3 16.04 3zm0 23.3c-2.06 0-4.06-.57-5.8-1.65l-.42-.26-3.94 1.31 1.29-3.8-.28-.44a10.42 10.42 0 0 1-1.63-5.73c0-5.79 4.72-10.5 10.52-10.5 5.79 0 10.5 4.71 10.5 10.5 0 5.8-4.71 10.57-10.24 10.57zm5.77-7.86c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37z"/>'
    + '</svg></span>';

  function mount() { document.body.appendChild(a); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
