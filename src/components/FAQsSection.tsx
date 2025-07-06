import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQsSection = () => {
  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results vary by service type. SEO typically shows initial improvements in 3-6 months, while PPC and social media campaigns can show results within days to weeks. We provide detailed timelines for each service during our consultation."
    },
    {
      question: "What makes Pulse Marketing different from other agencies?",
      answer: "We combine data-driven strategies with creative excellence, offer complete transparency through detailed reporting, provide dedicated account management, and maintain a 95% success rate with measurable ROI improvements for our clients."
    },
    {
      question: "Do you work with small businesses or just large corporations?",
      answer: "We work with businesses of all sizes, from startups to Fortune 500 companies. Our strategies are customized based on your budget, goals, and market position to ensure maximum impact regardless of company size."
    },
    {
      question: "How do you measure success and ROI?",
      answer: "We use comprehensive analytics and reporting tools to track key performance indicators specific to your goals – whether it's website traffic, lead generation, conversion rates, or revenue growth. You'll receive detailed monthly reports with clear ROI analysis."
    },
    {
      question: "What's included in your digital marketing services?",
      answer: "Our services include SEO optimization, social media marketing, content creation, PPC advertising, email marketing, and web development. We also provide strategy consulting, monthly reviews, and 24/7 support as part of our comprehensive packages."
    },
    {
      question: "Can I choose specific services or do I need a complete package?",
      answer: "You can choose individual services based on your needs, or opt for our comprehensive packages for better integration and results. We'll recommend the best approach during our initial consultation based on your goals and budget."
    },
    {
      question: "How involved will I need to be in the process?",
      answer: "We handle the heavy lifting, but we value your input. You'll have regular check-ins with your dedicated account manager, approve major strategies, and provide feedback. The level of involvement is flexible based on your preferences."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "Client satisfaction is our priority. We offer regular strategy reviews and adjustments to ensure we're meeting your goals. Our transparent reporting means you'll always know how campaigns are performing, and we're committed to making necessary changes to achieve success."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Got Questions? We Have Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about working with Pulse Marketing
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <p className="text-sm">
              Contact us at{" "}
              <a href="mailto:hello@pulsemarketing.com" className="text-primary hover:underline">
                hello@pulsemarketing.com
              </a>{" "}
              or call{" "}
              <a href="tel:+1234567890" className="text-primary hover:underline">
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;