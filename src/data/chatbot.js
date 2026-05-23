export const CHATBOT_QUICK_REPLIES = [
  { id: "site_visit", label: "Book Site Visit" },
  { id: "floor_plans", label: "Floor Plans & Pricing" },
  { id: "location", label: "Location" },
  { id: "amenities", label: "Amenities" },
  { id: "contact", label: "Contact Details" },
];

export const CHATBOT_RESPONSES = {
  greeting:
    "Welcome to Vora Realtors. I'm your virtual concierge — here to help you explore Vora Signature Residences. How may I assist you today?",
  site_visit:
    "We'd be delighted to host your private site visit. Our sales gallery is open 10:00 AM – 7:00 PM, all days. Shall I guide you to our enquiry form to schedule your tour?",
  floor_plans:
    "We offer premium 2, 3 & 4 BHK residences:\n\n• 2 BHK — 1,285–1,420 sq.ft. from ₹1.85 Cr\n• 3 BHK — 1,850–2,100 sq.ft. from ₹2.75 Cr\n• 4 BHK — 2,650–3,200 sq.ft. from ₹4.20 Cr\n\nWould you like to download a floor plan or book a visit?",
  location:
    "Vora Signature Residences is in Hyderabad's Financial District, Gachibowli — just 6 min from Metro, 10 min from IT parks, and 35 min from the international airport.",
  amenities:
    "Residents enjoy a temperature-controlled pool, luxury clubhouse (15,000 sq.ft.), gym, mini theatre, tennis court, sky deck, co-working lounge, landscaped gardens, and 24/7 security.",
  contact:
    "Reach our team at +91 98765 43210 or hello@vorarealtors.com. You can also fill the enquiry form on this page — we respond within 2 hours.",
  default:
    "Thank you for your message. A Vora relationship manager will assist you shortly. For immediate help, use the call button or book a site visit below.",
};

export function getChatbotReply(input) {
  const text = input.toLowerCase().trim();

  if (/site|visit|book|tour|schedule/.test(text)) return CHATBOT_RESPONSES.site_visit;
  if (/floor|plan|bhk|price|cost|cr|bedroom/.test(text)) return CHATBOT_RESPONSES.floor_plans;
  if (/location|where|metro|airport|address|map/.test(text)) return CHATBOT_RESPONSES.location;
  if (/amenit|pool|gym|club|facilit/.test(text)) return CHATBOT_RESPONSES.amenities;
  if (/contact|call|phone|email|reach/.test(text)) return CHATBOT_RESPONSES.contact;
  if (/hi|hello|hey|good/.test(text)) return CHATBOT_RESPONSES.greeting;

  return CHATBOT_RESPONSES.default;
}
