import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata = { title: "Shipping, Returns & Refunds | Dabble & Design Co." };

const sections: LegalSection[] = [
  {
    title: "Processing & Shipping",
    body: [
      "Many Dabble & Design Co. products are made to order. Processing time may vary depending on the product, order size, customization, availability of materials, and current order volume.",
      "Processing time is separate from the time required for a shipping carrier to deliver your package.",
      "When tracking is available, customers will receive or have access to tracking information after the order ships.",
    ],
  },
  {
    title: "Shipping Addresses",
    body: [
      "Customers are responsible for providing a complete and accurate shipping address.",
      "Please contact us immediately if you discover an error. Once an order has been shipped, we may not be able to change its destination.",
      "Additional shipping charges resulting from an incorrect customer-provided address or a returned package may be the customer's responsibility.",
    ],
  },
  {
    title: "Carrier Delays",
    body: [
      "Once an order has been transferred to the shipping carrier, delivery times may be affected by circumstances outside Dabble & Design Co.'s control, including weather, carrier delays, holidays, or other disruptions.",
      "If you experience a delivery problem, please contact us so we can help determine the appropriate next step.",
    ],
  },
  {
    title: "Damaged or Incorrect Orders",
    body: [
      "We want you to receive what you ordered.",
      "If an item arrives damaged, defective, or substantially different from what you ordered, please contact Dabble & Design Co. within 7 days of delivery.",
      "Please include your order information and clear photographs showing the problem when applicable.",
      "After reviewing the issue, we will determine the appropriate resolution, which may include replacement, correction, or refund depending on the circumstances.",
    ],
  },
  {
    title: "Custom & Personalized Products",
    body: [
      "Because custom and personalized products are created specifically for an individual customer, they generally cannot be returned or exchanged because of a change of mind, incorrect size selection, or an error in information that the customer supplied or approved.",
      "If Dabble & Design Co. makes an error in producing your custom item, please contact us so we can make it right.",
    ],
  },
  {
    title: "Non-Custom Products",
    body: [
      "Eligibility for returns or exchanges of non-custom merchandise may depend on the condition of the product and the circumstances of the request.",
      "Items being considered for return should generally be unworn, unused, and in their original condition.",
      "Please contact us before returning an item. Products returned without prior authorization may not be accepted.",
    ],
  },
  {
    title: "Refunds",
    body: [
      "Approved refunds will be issued through the applicable payment method or sales platform whenever possible.",
      "Processing times after a refund is issued may depend on the payment provider or financial institution.",
      "Original shipping charges may be non-refundable unless the return results from an error by Dabble & Design Co. or otherwise required by applicable law or marketplace rules.",
    ],
  },
  {
    title: "Marketplace Orders",
    body: [
      "Orders placed through third-party marketplaces, including TikTok Shop or Etsy, may also be subject to that platform's applicable shipping, cancellation, return, and refund requirements. Where marketplace rules apply to an order, those requirements will be followed.",
    ],
  },
  {
    title: "Local Orders",
    body: [
      "Local pickup or delivery may be available for qualifying orders when arranged with Dabble & Design Co. Availability and arrangements may vary by order.",
    ],
  },
  {
    title: "Questions or Problems With an Order",
    body: [
      "Please contact us through the website contact form or the communication method associated with your order. Include your name and order information so we can assist you as quickly as possible.",
    ],
  },
];

export default function ShippingPage() {
  return (
    <LegalPage
      title="Shipping, Returns & Refunds"
      updated="September 30, 2026"
      intro="Here's what to expect once you place an order with Dabble & Design Co., and what to do if something isn't right."
      sections={sections}
    />
  );
}