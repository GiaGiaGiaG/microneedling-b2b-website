/**
 * ============================================
 * SITE CONFIGURATION — EDIT THIS FILE ONLY
 * ============================================
 * All business contact info, form endpoints, and domain settings
 * are centralized here. main.js reads this and injects values
 * into every page at runtime.
 *
 * Replace the placeholder values below with your real information.
 * Save this file and all pages will update automatically.
 * ============================================
 */

const SITE_CONFIG = {

    // ── Company Identity ──────────────────────────────────
    COMPANY_NAME: '[REPLACE_WITH_COMPANY_NAME]',      // Legal entity name, e.g. "Guangzhou Beauty Tech Co., Ltd."
    BRAND_NAME:   '[BRAND_NAME]',                      // Marketing brand shown in header/logo, e.g. "AuraTech"

    // ── Contact Information ───────────────────────────────
    BUSINESS_EMAIL:    '[REPLACE_WITH_EMAIL]',          // e.g. "sales@yourcompany.com"
    WHATSAPP_NUMBER:   '[REPLACE_WITH_WHATSAPP_NUMBER]',// Digits only, no +, spaces, or dashes. e.g. "8613800000000"
    FACTORY_ADDRESS:   '[REPLACE_WITH_FACTORY_ADDRESS]',// e.g. "Building 5, Industrial Zone, Guangzhou, China"

    // ── Domain ────────────────────────────────────────────
    DOMAIN: 'https://yourdomain.com',                   // Your live domain, e.g. "https://www.yourcompany.com"

    // ── Social Links ──────────────────────────────────────
    LINKEDIN_URL: 'https://linkedin.com/company/[REPLACE_WITH_LINKEDIN]',
    FACEBOOK_URL: 'https://facebook.com/[REPLACE_WITH_FACEBOOK]',

    // ── RFQ Form (Formspree) ─────────────────────────────
    // Sign up at https://formspree.io, create a form, copy the endpoint ID.
    // Format: "https://formspree.io/f/xBbCcC"
    FORMSPREE_ENDPOINT: '',  // <-- Paste your Formspree endpoint here

    // ── WhatsApp Pre-filled Message ──────────────────────
    WHATSAPP_MESSAGE: 'Hello, I am interested in your OEM/ODM microneedling tools. Please send me more information.'
};
