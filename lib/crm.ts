export type CRMLeadPayload = {
  id?: string;
  name: string;
  email: string;
  telephone: string;
  preferredContactMethod: string;
  requestedService: string;
  projectDescription: string;
  projectLocation?: string;
  websiteLanguage: string;
  sourcePage: string;
  consent: boolean;
  submittedAt?: string;
};

export async function createLead(payload: CRMLeadPayload) {
  return {
    ok: true,
    leadId: `lead_${Date.now()}`,
    payload,
  };
}

export async function syncLeadToCRM(payload: CRMLeadPayload) {
  void payload;
  return { ok: true, synced: false, status: "provider-not-configured" };
}

export async function sendLeadNotification(payload: CRMLeadPayload) {
  void payload;
  return { ok: true, delivered: false, status: "not-configured" };
}
