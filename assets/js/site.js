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
      status.innerHTML = 'Thanks. Your RFQ details are ready for sales review. For the fastest response, email <a href="mailto:sales@dermadream.com.cn">sales@dermadream.com.cn</a> or contact us on <a href="https://wa.me/8618998490241">WhatsApp</a>.';
      form.classList.add('is-submitted');
    }

    form.addEventListener('submit', handleSubmit);
    if (button) {
      button.addEventListener('click', handleSubmit);
    }
  });
}());
