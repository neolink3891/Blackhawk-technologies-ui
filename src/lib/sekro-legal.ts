// Shared facts for the Sekro Privacy Policy and Terms of Service (English and Spanish pages).
// Change a value here and every page picks it up.

export const SEKRO_LEGAL = {
  company: "BlackHawk Technologies Ltd",
  companyNumber: "16154196",
  registeredOffice: "3rd Floor, 86-90 Paul Street, London EC2A 4NE, United Kingdom",
  supportEmail: "support.sekro@bhtapp.com",
  // Child safety contact (Google Play Child Safety Standards).
  safetyEmail: "safety.sekro@bhtapp.com",
  // Update both when either document changes.
  lastUpdated: { en: "11 November 2026", es: "11 de noviembre de 2026" },
  // The account deletion page (Google Play's "delete account" URL) has its own date.
  deleteAccountUpdated: { en: "11 November 2026", es: "11 de noviembre de 2026" },
  childSafetyUpdated: { en: "11 November 2026", es: "11 de noviembre de 2026" },
  // How long an emailed deletion request (no app) can take: UK GDPR's "without undue delay, within one month".
  emailDeletionDeadline: { en: "within one month", es: "en el plazo de un mes" },
};

// Verified against sekro-api (Nov 2026). Change these if the API or deploy config changes.
export const SEKRO_FIGURES = {
  // REPORT_RETENTION_DAYS (app/core/config.py, app/jobs/purge_reports.py): resolved reports are purged this long after
  // resolution; open reports are never purged.
  reportRetentionDays: 365,
  // deploy/s3-lifecycle.json: `moderation/` objects expire this long after upload (a backstop to the purge job).
  moderationFileDays: 365,
  // DEPLOY.md › Logs: CloudWatch retention on /ecs/sekro-api.
  serverLogDays: 90,
  // JWT_REFRESH_IDLE_DAYS: revoked session records expire within this.
  sessionRecordDays: 90,
  // MESSAGE_TOMBSTONE_DAYS: "it was deleted" records (no content).
  tombstoneDays: 120,
};

export const SEKRO_PATHS = {
  privacy: { en: "/sekro/privacy", es: "/es/sekro/privacy" },
  terms: { en: "/sekro/terms", es: "/es/sekro/terms" },
  deleteAccount: { en: "/sekro/delete-account", es: "/es/sekro/delete-account" },
  childSafety: { en: "/sekro/child-safety", es: "/es/sekro/child-safety" },
} as const;
