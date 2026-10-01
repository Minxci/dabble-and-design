import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata = { title: "Terms & Conditions | Dabble & Design Co." };

const sections: LegalSection[] = [
  {
    title: "Orders & Payment",
    body: [
      "Payment is required before an order is started unless Dabble & Design Co. has made a separate arrangement with the customer.",
      "An order is not considered confirmed until required payment has been received.",
      "For custom orders, production begins after the necessary order information, sizing, design details, and payment have been received.",
    ],
  },
  {
    title: "Custom Orders",
    body: [
      "Customers are responsible for reviewing names, dates, spelling, colors, sizes, placement, and other requested details before approving a custom order or design.",
      "Once a custom design has been approved and production has begun, changes may not be possible.",
      "Because colors appear differently across phones, monitors, printers, fabrics, and printing methods, slight differences between digital previews and finished products may occur.",
    ],
  },
  {
    title: "Customer-Provided Artwork",
    body: [
      "Customers who provide photographs, logos, graphics, phrases, or other materials represent that they have permission to use those materials for the requested purpose.",
      "Dabble & Design Co. reserves the right to decline an order or artwork request that we cannot reasonably or legally produce.",
    ],
  },
  {
    title: "Handmade & Made-to-Order Products",
    body: [
      "Many Dabble & Design Co. products are individually produced or decorated. Minor variations in print placement, color, sizing, or appearance may occur and are not necessarily considered defects.",
    ],
  },
  {
    title: "Product Sizing",
    body: [
      "Customers are responsible for selecting the correct size when ordering. When available, customers should review the product's size chart before purchasing.",
      "Different garment brands or styles may fit differently.",
    ],
  },
  {
    title: "Cancellations",
    body: [
      "Contact us as soon as possible if you need to cancel an order.",
      "Orders that have not entered production may be eligible for cancellation. Once materials have been ordered specifically for an order, artwork has been produced, or production has begun, cancellation or a full refund may not be available.",
    ],
  },
  // ADDED: returns pointer
  {
    title: "Returns & Refunds",
    body: [
      "Please see our Shipping & Returns policy for information about returns, exchanges, and damaged or incorrect items.",
    ],
  },
  {
    title: "Pricing",
    body: [
      "Prices are subject to change without notice. The price applicable to an order is the price agreed upon or displayed when the order is placed, except in cases of an obvious pricing or technical error.",
      // ADDED: quotes
      "Pricing for custom, bulk, and Business Partner orders may vary based on garment and material costs, size, color, transfer costs, personalization, specialty garments, design size, and other order requirements. A final quote will be provided before production begins.",
      "Applicable taxes and shipping charges may be added where required.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Original Dabble & Design Co. branding, photographs, graphics, website content, and original artwork may not be copied, reproduced, sold, or commercially used without permission.",
      "Purchase of a finished product does not automatically transfer ownership or reproduction rights to the underlying artwork.",
    ],
  },
  {
    title: "Website Availability",
    body: [
      "We make reasonable efforts to keep website information accurate and available but cannot guarantee uninterrupted access or that every item, size, color, or material will remain available.",
    ],
  },
  // ADDED: liability
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Dabble & Design Co. is not liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our total liability for any claim related to an order will not exceed the amount paid for that order.",
    ],
  },
  // ADDED: governing law
  {
    title: "Governing Law",
    body: ["These Terms & Conditions are governed by the laws of the State of Illinois."],
  },
  // ADDED: changes
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms & Conditions from time to time. Changes will be posted on this page with an updated date and apply to orders placed after the update.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about an order or these Terms & Conditions may be submitted through the contact information provided on our website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="September 30, 2026"
      intro="By using the Dabble & Design Co. website, placing an order, or requesting a custom product, you agree to the following terms."
      sections={sections}
    />
  );
}