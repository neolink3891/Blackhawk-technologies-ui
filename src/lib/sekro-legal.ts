// Shared facts for the Sekro Privacy Policy and Terms of Service (English and Spanish pages).
// Change a value here and every page picks it up.

export const SEKRO_LEGAL = {
  company: "BlackHawk Technologies Ltd",
  companyNumber: "16154196",
  registeredOffice: "3rd Floor, 86-90 Paul Street, London EC2A 4NE, United Kingdom",
  supportEmail: "support.sekro@bhtapp.com",
  // Update both when either document changes.
  lastUpdated: { en: "8 November 2026", es: "8 de noviembre de 2026" },
};

// TODO(legal): fill in these retention periods (both languages), then remove the brackets.
// DEPLOY.md suggests a lifecycle rule on the S3 `moderation/` prefix (e.g. 180 days); reports in MongoDB
// have no automatic expiry yet. Security logs are the API's CloudWatch logs.
export const SEKRO_RETENTION = {
  reports: { en: "[PLACEHOLDER: retention period for reports]", es: "[PENDIENTE: plazo de conservación de denuncias]" },
  securityLogs: {
    en: "[PLACEHOLDER: retention period for security logs]",
    es: "[PENDIENTE: plazo de conservación de los registros de seguridad]",
  },
};

export const SEKRO_PATHS = {
  privacy: { en: "/sekro/privacy", es: "/es/sekro/privacy" },
  terms: { en: "/sekro/terms", es: "/es/sekro/terms" },
} as const;
