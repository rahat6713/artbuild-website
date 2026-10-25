export const company = {
  legalName: "ARTBUILT CONTRACTING L.L.C S.O.C",
  location: "Dubai, United Arab Emirates",
  licenseNumber: "1507864",
  commercialRegistrationNumber: "2608594",
  dubaiChamberMembershipNumber: "616869",
  businessActivities: [
    "Building Contracting",
    "Plaster Works",
    "Electricity Transmission & Control Equipment Installation Works",
    "Floor & Wall Tiling Works",
    "Painting Contracting",
    "Sanitary Installation & Pipes Repairing",
    "Decoration Design & Implementation",
    "False Ceiling & Light Partitions Installation",
    "Carpentry & Wood Flooring Works",
  ],
  phone: "+971 52 960 1604",
  phoneE164: "+971529601604",
  email: "298760024@QQ.COM",
  emailRequiresConfirmation: true,
  phoneRequiresConfirmation: true,
  address: "Street address pending confirmation before launch.",
  approvedRegulatoryRemark:
    "New projects subject to Dubai Municipality or another authority’s supervision must not start until the required criteria are met.",
  whatsappMessage: {
    en: "Hello ARTBUILT CONTRACTING, I would like to request a quotation for a project.",
    ar: "مرحباً ARTBUILT CONTRACTING، أود طلب عرض سعر لمشروع.",
  },
} as const;

export const companyContact = {
  mobile: company.phone,
  email: company.email,
  whatsapp: company.phoneE164,
  supportEmail: process.env.CONTACT_RECIPIENT_EMAIL || company.email,
};
