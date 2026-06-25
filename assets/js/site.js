(function () {
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
      if (event.key === 'Escape') {
        setMenu(false);
      }
    });

    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) {
        setMenu(false);
      }
    });
  }

  document.querySelectorAll('.image-slot img').forEach(function (img) {
    var slot = img.closest('.image-slot');
    if (!slot) return;

    function markMissing() {
      slot.classList.add('missing');
    }

    img.addEventListener('error', markMissing);
    if (img.complete && img.naturalWidth === 0) {
      markMissing();
    }
  });

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

      if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
        status.textContent = 'Please complete the required contact fields before sending your RFQ.';
        status.classList.add('is-error');
        return;
      }

      status.classList.remove('is-error');
      status.textContent = 'Sending...';

      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        if (response.ok) {
          status.innerHTML = 'Thank you! Your inquiry has been received. We will respond within 1 business day. For urgent requests, contact us on <a href="https://wa.me/8618998490241">WhatsApp</a>.';
          form.classList.add('is-submitted');
          form.reset();
        } else {
          status.classList.add('is-error');
          status.textContent = 'Something went wrong. Please email us directly at info@dermadreamglobal.com';
        }
      })
      .catch(function () {
        status.classList.add('is-error');
        status.textContent = 'Network error. Please email us directly at info@dermadreamglobal.com';
      });
    }

    form.addEventListener('submit', handleSubmit);
  });
}());
