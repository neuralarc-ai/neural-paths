"use client";

import Image from "next/image";

const services = [
  {
    image: "/images/ai-solutions/service-1.png",
    title: "Custom AI Micro-Apps Development",
    price: "$5,000–15,000",
    subtext: "(based on complexity and scope of the apps)",
    description:
      "Turn business challenges into smart solutions with custom AI microapps. Our expert built, lightweight tools solve specific problems, from document processing to predictive dashboards, with clean code and sleek design delivering enterprise results without the hefty price tag.",
    link: {
      text: "Ready to turn your business challenge into an AI opportunity? Contact us for a free discovery call →",
      href: "#contact-form",
    },
  },
  {
    image: "/images/ai-solutions/service-2.png",
    title: "AI Workflow Automation",
    price: "$3,500–12,000",
    subtext: "(based on number of integrations and complexity)",
    description:
      "Stop wasting human potential on repetitive work. Our AI workflow automation links your systems into smart, self-improving processes. We uncover opportunities, build the architecture, and design intuitive interfaces cutting errors, saving time, and freeing your team for what matters most.",
    link: {
      text: "Want to see where automation could transform your business? Book a workflow analysis session →",
      href: "#contact-form",
    },
  },
  {
    image: "/images/ai-solutions/service-3.png",
    title: "Intelligent UI/UX Enhancement",
    price: "$4,000–10,000",
    subtext: "(based on project scope and design complexity)",
    description:
      "Elevate your digital experience with AI-powered interfaces that adapt to user behavior. Our award-winning team blends elegant design with practical AI from personalized journeys to predictive features for applications that look great and grow smarter over time.",
    link: {
      text: "Ready for interfaces that work as intelligently as you do? Request our portfolio and inspiration guide →",
      href: "#contact-form",
    },
  },
];

export default function AiSolutionsServices() {
  return (
    <section className="w-full py-20 px-4 lg:px-20">
      <div className="max-w-[1720px] mx-auto">
        <h2 className="text-white text-3xl lg:text-6xl font-semibold text-center mb-4">
          AI Business Services for the Global Market
        </h2>
        <p className="text-white/80 text-lg lg:text-2xl text-center mb-16 max-w-6xl mx-auto font-light">
          We build AI that is not just smart, but purpose driven designed to meet the real challenges your business faces. From automating workflows to unlocking insights, each solution is crafted with impact in mind.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-start h-full xl:border-l xl:border-[#444] pl-8 first:border-0 first:pl-0"
            >
              <div className="w-full h-full mb-8 flex items-start justify-start">
                <Image
                  src={service.image}
                  alt={service.title + ' illustration'}
                  width={230}
                  height={200}
                  className="object-contain w-[230px] h-[200px]"
                />
              </div>
              <h3 className="text-white text-2xl lg:text-6xl font-semibold mb-4 leading-tight max-w-[60%]">
                {service.title}
              </h3>
              <div className="text-[#FFFFFF]/60 text-xl lg:text-3xl font-semibold">
                {service.price}
              </div>
              <div className="text-white/50 text-xl lg:text-3xl mb-6">
                {service.subtext}
              </div>
              <p className="text-white text-base lg:text-2xl mb-6">
                {service.description}
              </p>
              <a
                href={service.link.href}
                className="text-[#C6AEA3] text-base underline underline-offset-2 hover:text-[#E2D1C7] transition cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  const el = document.querySelector('#contact-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {service.link.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 