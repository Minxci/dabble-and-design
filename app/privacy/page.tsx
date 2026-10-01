export const metadata = { title: "Privacy Policy | Dabble & Design Co." };

type Section = { title: string; body: string[]; list?: string[]; after?: string[] };

const sections: Section[] = [
  {
    title: "Information We Collect",
    body: [
      "We may collect information you voluntarily provide, including your name, email address, phone number, shipping and billing information, order details, product preferences, sizing information, custom design requests, and messages or files you submit to us.",
      "We may also receive limited technical information related to your use of our website, such as browser or device information, when necessary for website functionality and security.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: ["Information collected may be used to:"],
    list: [
      "Process and fulfill orders",
      "Create and complete custom products",
      "Communicate with you regarding an order or inquiry",
      "Arrange shipping or delivery",
      "Provide customer service",
      "Maintain order and business records",
      "Improve our products, services, and website",
      "Prevent fraudulent transactions or misuse of our services",
      "Comply with applicable legal, tax, and accounting requirements",
    ],
  },
  // ADDED: newsletter
  {
    title: "Email Newsletter",
    body: [
      "If you sign up for our newsletter, we will use your email address to send you news about new collections, seasonal designs, releases and other Dabble & Design Co. updates. You can unsubscribe at any time using the link in any of our emails or by contacting us.",
    ],
  },
  {
    title: "Payment Information",
    body: [
      // ADJUSTED: stronger wording since Stripe Checkout handles all card data
      "Payments are processed securely by our third-party payment provider, Stripe. Your full credit or debit card information is entered directly with Stripe and is never stored on our website or by Dabble & Design Co.",
    ],
  },
  {
    title: "Custom Artwork and Uploaded Files",
    body: [
      "If you submit photographs, logos, artwork, names, or other files for a custom order, we use those materials to communicate with you and produce your requested product.",
      "Please only submit materials that you have permission or legal authority to use.",
    ],
  },
  {
    title: "Business Partner Customers",
    body: [
      "Customers participating in the Dabble & Design Co. Business Partner Program may choose to have information such as approved artwork, garment preferences, employee sizes, and previous order information retained to make future reorders easier.",
    ],
  },
  {
    title: "Sharing Information",
    body: [
      "Dabble & Design Co. does not sell customers' personal information.",
      "Information may be shared with service providers when reasonably necessary to operate our business, such as payment processors, shipping carriers, website providers, or other vendors involved in fulfilling an order.",
      "Information may also be disclosed when required by law or when reasonably necessary to protect Dabble & Design Co., our customers, or others.",
    ],
  },
  // ADDED: cookies
  {
    title: "Cookies",
    body: [
      "Our website uses cookies and similar technologies that are necessary for it to work, such as keeping items in your cart and completing checkout. Our payment provider may also use cookies to help prevent fraud.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable measures to protect customer information. However, no online transmission or electronic storage system can be guaranteed to be completely secure.",
    ],
  },
  // ADDED: data requests
  {
    title: "Your Choices",
    body: [
      "You may contact us at any time to ask what personal information we have about you, to correct it, or to request that we delete it. Some information may need to be kept for legal, tax, or accounting purposes.",
    ],
  },
  // ADDED: children
  {
    title: "Children's Privacy",
    body: [
      "Our website is not directed to children under 13, and we do not knowingly collect personal information from children under 13.",
    ],
  },
  // ADDED: changes
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "Questions regarding this Privacy Policy may be submitted through the contact form on our website or by using the contact information provided on our website.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="site-x py-12">
      <article className="mx-auto max-w-3xl">
        <h1 className="font-script text-5xl text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink">Last Updated: September 30, 2026</p>

        <p className="mt-6 text-ink">
          Dabble &amp; Design Co. respects your privacy and is committed to protecting the personal
          information you provide when visiting our website, placing an order, requesting a custom
          design, or contacting us.
        </p>

        {sections.map((s) => (
          <section key={s.title} className="mt-8">
            <h2 className="font-script text-3xl text-coral">{s.title}</h2>
            {s.body.map((p) => (
              <p key={p} className="mt-3 text-ink">{p}</p>
            ))}
            {s.list && (
              <ul className="mt-3 list-disc space-y-1 pl-6 text-ink">
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <p className="mt-10 font-semibold text-navy">
          Dabble &amp; Design Co.
          <br />
          Moline, Illinois
        </p>
      </article>
    </main>
  );
}