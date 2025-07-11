import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

  const faqs = [
    {
    id: "faq-1",
      question: "How long does it take to see results from digital marketing?",
    answer:
      "Results vary by service type. SEO typically shows initial improvements in 3-6 months, while PPC and social media campaigns can show results within days to weeks. We provide detailed timelines for each service during our consultation.",
    },
    {
    id: "faq-2",
      question: "What makes Pulse Marketing different from other agencies?",
    answer:
      "We combine data-driven strategies with creative excellence, offer complete transparency through detailed reporting, provide dedicated account management, and maintain a 95% success rate with measurable ROI improvements for our clients.",
    },
    {
    id: "faq-3",
      question: "Do you work with small businesses or just large corporations?",
    answer:
      "We work with businesses of all sizes, from startups to Fortune 500 companies. Our strategies are customized based on your budget, goals, and market position to ensure maximum impact regardless of company size.",
    },
    {
    id: "faq-4",
      question: "How do you measure success and ROI?",
    answer:
      "We use comprehensive analytics and reporting tools to track key performance indicators specific to your goals – whether it's website traffic, lead generation, conversion rates, or revenue growth. You'll receive detailed monthly reports with clear ROI analysis.",
    },
    {
    id: "faq-5",
      question: "What's included in your digital marketing services?",
    answer:
      "Our services include SEO optimization, social media marketing, content creation, PPC advertising, email marketing, and web development. We also provide strategy consulting, monthly reviews, and 24/7 support as part of our comprehensive packages.",
    },
    {
    id: "faq-6",
      question: "Can I choose specific services or do I need a complete package?",
    answer:
      "You can choose individual services based on your needs, or opt for our comprehensive packages for better integration and results. We'll recommend the best approach during our initial consultation based on your goals and budget.",
    },
    {
    id: "faq-7",
      question: "How involved will I need to be in the process?",
    answer:
      "We handle the heavy lifting, but we value your input. You'll have regular check-ins with your dedicated account manager, approve major strategies, and provide feedback. The level of involvement is flexible based on your preferences.",
    },
    {
    id: "faq-8",
      question: "What if I'm not satisfied with the results?",
    answer:
      "Client satisfaction is our priority. We offer regular strategy reviews and adjustments to ensure we're meeting your goals. Our transparent reporting means you'll always know how campaigns are performing, and we're committed to making necessary changes to achieve success.",
  },
  ];

const Faq3 = ({
  heading = "Frequently Asked Questions",
  description = "Everything you need to know about working with Pulse Marketing.",
  items = faqs,
  supportHeading = "Still have questions?",
  supportDescription = "Contact us at hello@pulsemarketing.com or call (123) 456-7890.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "mailto:hello@pulsemarketing.com",
}) => {
  return (
    <section className="py-2">
      <div className="container space-y-16 px-2 md:px-40">
        <div className="mx-auto flex w-full flex-col text-left md:text-center">
          <h2
            className="mb-3 text-[60px] leading-[1.1] font-bold md:mb-4 lg:mb-6"
            style={{ color: '#F4F3F0' }}
          >
              Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
            </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 text-[30px] w-full whitespace-nowrap text-left">
                  {item.question}
          </div>
                </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      </div>
    </section>
  );
};

export default Faq3;