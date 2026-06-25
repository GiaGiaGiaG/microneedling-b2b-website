(function () {
  // ── Mobile navigation ──────────────────────────────────────────
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');

  if (nav && toggle) {
    var links = nav.querySelectorAll('.nav-links a, .nav-actions a');

    function setMenu(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    }

    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { setMenu(false); }
    });

    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) { setMenu(false); }
    });
  }

  // ── Image slot fallback ────────────────────────────────────────
  document.querySelectorAll('.image-slot img').forEach(function (img) {
    var slot = img.closest('.image-slot');
    if (!slot) return;
    function markMissing() { slot.classList.add('missing'); }
    img.addEventListener('error', markMissing);
    if (img.complete && img.naturalWidth === 0) { markMissing(); }
  });

  // ── RFQ Form — real Formspree submission via fetch ─────────────
  document.querySelectorAll('form[id="rfqForm"]').forEach(function (form) {
    var button = form.querySelector('button[type="submit"], .submit');
    var status = document.createElement('p');
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    if (button) {
      button.insertAdjacentElement('afterend', status);
    } else {
      form.appendChild(status);
    }

    function handleSubmit(event) {
      event.preventDefault();

      // Required field validation: name, company, email, phone
      var required = ['name', 'company', 'email', 'phone'];
      var missing = false;
      required.forEach(function (fieldName) {
        var el = form.querySelector('[name="' + fieldName + '"]');
        if (el) {
          if (!el.value.trim()) {
            missing = true;
            el.style.outline = '2px solid #e53e3e';
          } else {
            el.style.outline = '';
          }
        }
      });

      if (missing) {
        status.className = 'form-status is-error';
        status.textContent = 'Please fill in all required fields: Name, Company, Email, and WhatsApp / Phone.';
        return;
      }

      // Email format check
      var emailEl = form.querySelector('[name="email"]');
      if (emailEl && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
        emailEl.style.outline = '2px solid #e53e3e';
        status.className = 'form-status is-error';
        status.textContent = 'Please enter a valid email address.';
        return;
      }

      status.className = 'form-status';
      status.textContent = 'Sending\u2026';
      button.disabled = true;

      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        button.disabled = false;
        if (response.ok) {
          status.className = 'form-status is-success';
          status.innerHTML = 'Thank you! Your inquiry has been received. We will respond within 1 business day. For urgent requests, email <a href="mailto:hello@dermadreamglobal.com">hello@dermadreamglobal.com</a> or contact us on <a href="https://wa.me/8618998490241">WhatsApp</a>.';
          form.classList.add('is-submitted');
          form.reset();
        } else {
          status.className = 'form-status is-error';
          status.textContent = 'Something went wrong. Please email us directly at hello@dermadreamglobal.com';
        }
      })
      .catch(function () {
        button.disabled = false;
        status.className = 'form-status is-error';
        status.textContent = 'Network error. Please email us at hello@dermadreamglobal.com or contact us on WhatsApp.';
      });
    }

    form.addEventListener('submit', handleSubmit);
  });
}());
