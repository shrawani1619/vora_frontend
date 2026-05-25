import { CONTACT } from "./content";

export const CHATBOT_QUICK_REPLIES = [
  { id: "site_visit", label: "Book Site Visit" },
  { id: "floor_plans", label: "Floor Plans & Pricing" },
  { id: "location", label: "Location" },
  { id: "amenities", label: "Amenities" },
  { id: "possession", label: "Possession" },
  { id: "payment", label: "Payment Plans" },
  { id: "rera", label: "RERA & Legal" },
  { id: "contact", label: "Contact Us" },
];

export const CHATBOT_RESPONSES = {
  greeting:
    "Welcome to Vora Signature Residences. I'm your virtual concierge — ask me about floor plans, pricing, amenities, location, possession, or booking a private site visit.",

  site_visit:
    "We host private site visits daily from 10:00 AM to 7:00 PM. A relationship manager will walk you through the model apartment, amenities, and sample homes. Use the enquiry form on this page or share your preferred date here and we'll follow up.",

  floor_plans:
    "Premium residences at Vora Signature:\n\n• 2 BHK — 1,285–1,420 sq.ft. | from ₹1.85 Cr onwards\n• 3 BHK — 1,850–2,100 sq.ft. | from ₹2.75 Cr onwards\n• 4 BHK — 2,650–3,200 sq.ft. | from ₹4.20 Cr onwards\n\nAll homes feature expansive decks and three-side openness. Scroll to Floor Plans for layouts.",

  location:
    "Vora Signature is in Hyderabad's Financial District (Gachibowli):\n\n• 6 min to Metro\n• 10 min to major IT parks\n• 2.5 km to international schools\n• 35 min to RGIA Airport\n\nA low-density 8.5-acre enclave with curated landscaping.",

  amenities:
    "World-class amenities include:\n\n• Infinity pool & temperature-controlled leisure pool\n• 15,000 sq.ft. clubhouse with gym & spa\n• Mini theatre, tennis court & sky lounge\n• Co-working lounge & landscaped gardens\n• 24/7 security with CCTV & access control",

  possession:
    "Target possession is December 2026. Construction is progressing as per RERA timelines. Our team shares monthly progress updates with booked customers.",

  payment:
    "Flexible payment options are available:\n\n• Construction-linked plan (CLP)\n• Down payment schemes with milestone-based releases\n• Home loan assistance with leading banks\n\nExact schedules are shared during your site visit based on the unit you select.",

  rera:
    `The project is RERA registered (${CONTACT.rera}). All approvals are in place. Sale agreements, building plans, and escrow compliance follow Telangana RERA guidelines. Our team can share the registration certificate during your visit.`,

  parking:
    "Each residence includes dedicated car parking (typically 1 slot for 2 BHK, 2 for 3 & 4 BHK — confirm per unit at booking). Visitor parking is available at the clubhouse and tower podiums.",

  project:
    "Vora Signature spans 8.5 acres with 4 towers, 32 floors, 420+ luxury homes, and 72% open green space. Designed by award-winning architects with imported finishes and earthquake-resistant structure.",

  loan:
    "We assist with home loans from HDFC, ICICI, SBI, Axis, and other partners. Pre-approved eligibility checks can be arranged during your site visit.",

  brochure:
    "You can download the project brochure from the hero section, or our team will email the latest kit after you submit the enquiry form with your details.",

  contact: `Connect with Vora Realtors:\n\n• Phone: ${CONTACT.phone}\n• Email: ${CONTACT.email}\n• Address: ${CONTACT.address}\n\nWe respond within 2 business hours.`,

  default:
    "Thank you for your question. For detailed assistance, book a site visit or call our sales desk. You can also browse Floor Plans, Amenities, and Location sections on this page.",
};

export function getChatbotReply(input) {
  const text = input.toLowerCase().trim();

  if (/site|visit|book|tour|schedule|appointment/.test(text)) return CHATBOT_RESPONSES.site_visit;
  if (/floor|plan|bhk|price|cost|cr|bedroom|sq\.?ft|pricing/.test(text)) return CHATBOT_RESPONSES.floor_plans;
  if (/location|where|metro|airport|address|map|gachibowli|financial/.test(text)) return CHATBOT_RESPONSES.location;
  if (/amenit|pool|gym|club|facilit|theatre|tennis/.test(text)) return CHATBOT_RESPONSES.amenities;
  if (/possess|handover|ready|completion|2026|timeline/.test(text)) return CHATBOT_RESPONSES.possession;
  if (/payment|emi|installment|clp|down payment|loan|finance|bank/.test(text)) return CHATBOT_RESPONSES.payment;
  if (/rera|legal|approval|register|agreement/.test(text)) return CHATBOT_RESPONSES.rera;
  if (/park|car|vehicle/.test(text)) return CHATBOT_RESPONSES.parking;
  if (/tower|acre|project|overview|how many|unit/.test(text)) return CHATBOT_RESPONSES.project;
  if (/brochure|download|pdf/.test(text)) return CHATBOT_RESPONSES.brochure;
  if (/contact|call|phone|email|reach|number|whatsapp/.test(text)) return CHATBOT_RESPONSES.contact;
  if (/hi|hello|hey|good morning|good evening|namaste/.test(text)) return CHATBOT_RESPONSES.greeting;

  return CHATBOT_RESPONSES.default;
}
