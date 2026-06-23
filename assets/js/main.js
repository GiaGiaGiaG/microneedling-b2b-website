/**
 * Main JS for B2B Microneedling Tool Manufacturer
 * Reads SITE_CONFIG from config.js and injects values into all pages.
 * Handles RFQ form submission via Formspree.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. INJECT SITE-WIDE VALUES FROM CONFIG ──────────────────

    if (typeof SITE_CONFIG === 'undefined') {
        console.error('config.js not loaded. SITE_CONFIG is undefined.');
        return;
    }

    const C = SITE_CONFIG;

    // 1a. Inject brand name into all logo links and footer brand headings
    document.querySelectorAll('.logo a').forEach(el => {
        el.textContent = C.BRAND_NAME;
    });
    document.querySelectorAll('.footer-brand h2').forEach(el => {
        el.textContent = C.BRAND_NAME;
    });

    // 1b. Inject company name into all footer copyright lines
    document.querySelectorAll('.footer-bottom').forEach(el => {
        el.innerHTML = el.innerHTML.replace('[REPLACE_WITH_COMPANY_NAME]', C.COMPANY_NAME);
    });

    // 1c. Build WhatsApp URL once
    const waMessage = encodeURIComponent(C.WHATSAPP_MESSAGE);
    const waUrl = 'https://wa.me/' + C.WHATSAPP_NUMBER + '?text=' + waMessage;

    // 1d. Inject WhatsApp href into all WhatsApp buttons
    document.querySelectorAll('.whatsapp-btn, .whatsapp-icon').forEach(el => {
        el.href = waUrl;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
    });

    // 1e. Inject email into mailto links
    document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
        el.href = 'mailto:' + C.BUSINESS_EMAIL;
    });

    // 1f. Inject contact info on contact.html
    const contactEmailEl = document.querySelector('[data-config="email"]');
    if (contactEmailEl) contactEmailEl.textContent = C.BUSINESS_EMAIL;

    const contactWhatsAppEl = document.querySelector('[data-config="whatsapp"]');
    if (contactWhatsAppEl) contactWhatsAppEl.textContent = '+' + C.WHATSAPP_NUMBER.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');

    const contactAddressEl = document.querySelector('[data-config="address"]');
    if (contactAddressEl) contactAddressEl.textContent = C.FACTORY_ADDRESS;

    // ── 2. MOBILE NAVIGATION TOGGLE ──────────────────────

    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            mobileToggle.classList.toggle('active');
        });
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // ── 3. RFQ FORM SUBMISSION (Formspree) ────────────────

    const rfqForms = document.querySelectorAll('#rfqForm');
    rfqForms.forEach(rfqForm => {
        rfqForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = rfqForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            const statusEl = document.createElement('div');
            statusEl.className = 'form-status';
            statusEl.style.cssText = 'padding:1rem;border-radius:0.375rem;margin-top:1rem;font-weight:600;text-align:center;';

            // ── Check if Formspree endpoint is configured ──
            if (!C.FORMSPREE_ENDPOINT) {
                // Fallback: collect data and show instructions
                const formData = new FormData(rfqForm);
                const data = Object.fromEntries(formData.entries());
                console.log('RFQ Data (Formspree not configured):', data);

                statusEl.style.background = '#fef3c7';
                statusEl.style.color = '#92400e';
                statusEl.textContent = 'Form endpoint not configured. Please email us directly at ' + C.BUSINESS_EMAIL + ' or contact us on WhatsApp.';
                rfqForm.appendChild(statusEl);
                return;
            }

            // ── Submit to Formspree ──
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                const formData = new FormData(rfqForm);
                const response = await fetch(C.FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    statusEl.style.background = '#d1fae5';
                    statusEl.style.color = '#065f46';
                    statusEl.textContent = 'Thank you! Your inquiry has been sent. Our sales team will contact you within 24 hours.';
                    rfqForm.reset();
                } else {
                    const errorData = await response.json().catch(() => null);
                    statusEl.style.background = '#fee2e2';
                    statusEl.style.color = '#991b1b';
                    statusEl.textContent = 'Something went wrong. Please try again or email us at ' + C.BUSINESS_EMAIL;
                    console.error('Formspree error:', errorData);
                }
            } catch (error) {
                statusEl.style.background = '#fee2e2';
                statusEl.style.color = '#991b1b';
                statusEl.textContent = 'Network error. Please try again or contact us on WhatsApp.';
                console.error('Form submission error:', error);
            }

            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            rfqForm.appendChild(statusEl);

            // Auto-hide status after 10 seconds
            setTimeout(() => { statusEl.remove(); }, 10000);
        });
    });

    // ── 4. WHATSAPP CONVERSION TRACKING ──────────────────

    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Engagement',
                    'event_label': 'WhatsApp Contact'
                });
            }
        });
    });

    // ── 5. SMOOTH SCROLL FOR ANCHOR LINKS ────────────────

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
