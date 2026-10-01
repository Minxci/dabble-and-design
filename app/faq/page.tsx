export const metadata = { title: "FAQ | Dabble & Design Co." };

type Faq = { q: string; a: string };

const sections: { title: string; items: Faq[] }[] = [
    {
      title: "Ordering",
      items: [
        {
          q: "How do I place an order?",
          a: "Ready-made shirts can be ordered right here in the Shop. For custom shirts, team orders or anything personalized, head to the Custom page or send us a message and we'll help you bring your idea to life.",
        },
        {
          q: "Do I need an account to order?",
          a: "Nope! You can check out as a guest. All you need is your email so we can send your order confirmation and updates.",
        },
        {
          q: "How long does it take to make my order?",
          a: "Ready-made designs are usually ready in 3 to 5 business days before shipping or local pickup. Custom orders usually take 5 to 7 business days after your design is approved and payment is received. Larger and bulk orders may take longer, and we'll give you an estimated turnaround when your order is confirmed.",
        },
        {
          q: "Can I change or cancel my order?",
          a: "Changes and cancellations are allowed until production begins. Since many items are made to order, once special materials have been ordered, the transfer has been printed or ordered, or your item is being made, changes or cancellations may not be possible. Reach out as soon as you can and we'll do our best to help.",
        },
      ],
    },
    {
      title: "Custom Orders",
      items: [
        {
          q: "Can I get a shirt with my own design or idea?",
          a: "Absolutely, that's our favorite kind of order! Send us your idea, photo, logo or inspiration and we'll work with you to create something you love.",
        },
        {
          q: "Will I see my design before it's made?",
          a: "Yes. For custom orders we'll send you a proof to approve before anything goes into production.",
        },
        {
          q: "How much do custom orders cost?",
          a: "Pricing depends on the garment, size, colors, design size and quantity. We'll send you a final quote before production begins, so there are never any surprises. All prices are before applicable sales tax.",
        },
        {
          q: "Is there a minimum order?",
          a: "No minimum! One shirt is absolutely okay, and bulk orders are always welcome too.",
        },
      ],
    },
    {
      title: "Teams & Businesses",
      items: [
        {
          q: "What is the Business Partner Program?",
          a: "It's our free program for qualifying local businesses. We keep your logos, designs, preferred garments and employee sizes on file, so reorders, new-hire shirts and seasonal apparel are quick and easy. Qualifying orders also get bulk pricing.",
        },
        {
          q: "Does the Business Partner Program cost anything?",
          a: "No. There are no membership fees for qualifying local businesses. You only pay for the apparel you order.",
        },
        {
          q: "What products do you offer?",
          a: "T-shirts, sweatshirts, hoodies, long-sleeve shirts, jackets, youth shirts, dog shirts, buttons and magnets. Other apparel or custom items may be available by request depending on the product and materials, and more products will be added as we grow!",
        },
      ],
    },
    {
      title: "Sizing & Care",
      items: [
        {
          q: "What sizes do you carry?",
          a: "Adult shirts are generally available in S to 3XL, with 4XL and 5XL available on certain styles and colors depending on supplier availability. Youth sizes are available too. Need a size that isn't listed? Contact us and we'll check availability.",
        },
        {
          q: "How do your shirts fit?",
          a: "Most standard T-shirts are a unisex fit and generally fit true to size. Since fit can vary by garment style and brand, please check the size chart for the specific product before ordering.",
        },
        {
          q: "How should I wash my shirt?",
          a: "To keep your design looking its best, turn your shirt inside out, wash in cold water on a gentle cycle, and tumble dry low or hang to dry. Avoid bleach and fabric softener, and don't iron directly on the design.",
        },
      ],
    },
    {
      title: "Shipping & Pickup",
      items: [
        {
          q: "Where do you ship?",
          a: "We ship throughout the United States. International shipping isn't available at this time.",
        },
        {
          q: "Do you offer local pickup?",
          a: "Yes! Local pickup in Moline, IL is available by arrangement. Once your order is ready, we'll send you the pickup details directly.",
        },
        {
          q: "How will I know when my order ships?",
          a: "You'll get an email with tracking information as soon as your order is on its way.",
        },
      ],
    },
    {
      title: "Returns & Issues",
      items: [
        {
          q: "Can I return or exchange my order?",
          a: "Because custom and personalized products are made just for you, we can't accept returns or exchanges for change of mind, incorrect size selection, or errors in information or designs you approved. Non-custom items are handled according to the return policy of the website or marketplace where they were purchased. See our Shipping, Returns & Refunds page for full details.",
        },
        {
          q: "What if there's a problem with my order?",
          a: "If we made an error or your item arrives damaged or defective, contact us within 7 days of delivery with photos and we'll make it right.",
        },
      ],
    },
    {
      title: "Other Questions",
      items: [
        {
          q: "Where are you located?",
          a: "Dabble & Design Co. is a small business based in Moline, IL.",
        },
        {
          q: "Can I buy your products anywhere else?",
          a: "Yes! You can also find us on Facebook and Etsy, but this website is always the best place to see our newest designs.",
        },
        {
          q: "How do I contact you?",
          a: "Use our Contact page or send us a message on Facebook. We normally respond within 24 to 48 hours.",
        },
      ],
    },
  ];

export default function FaqPage() {
  return (
    <main className="site-x py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-script text-5xl text-navy">Frequently Asked Questions</h1>
        <p className="mt-2 text-ink">
          Can't find what you're looking for? Reach out on our Contact page and we'll be happy to help.
        </p>

        {sections.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="font-script text-3xl text-coral">{section.title}</h2>

            <div className="mt-4 space-y-3">
              {section.items.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-navy/10 bg-paper px-5 py-4 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                    {item.q}
                    <span className="text-xl text-teal transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-ink">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}