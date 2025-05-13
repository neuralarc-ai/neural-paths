import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Image from 'next/image';

export default function ResponsibleAIPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mx-auto w-full lg:px-10 px-4">
        {/* Banner */}
        <section className="w-full max-w-[1858px] mx-auto flex justify-center items-center lg:h-[518px] relative rounded-3xl overflow-hidden">
          <Image
            src="/images/responsible-ai-banner.png"
            alt="Banner BG"
            fill
            className="object-cover object-center pointer-events-none select-none"
            priority
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full py-12">
            <h1 className="text-[#232323] text-4xl md:text-6xl font-semibold text-center mb-4">Responsible AI</h1>
            <p className="text-[#232323]/80 text-lg md:text-xl text-center font-light">Effective Date: April, 2025</p>
          </div>
        </section>
        {/* Responsible AI Content */}
        <section className="w-full flex justify-center px-2 py-12 max-w-[1858px] mx-auto">
          <div className="w-full bg-[#232323] rounded-3xl shadow-xl px-6 md:px-12 py-10 text-white text-base md:text-lg">
            <ol className="list-decimal list-inside space-y-6">
              <li>
                <b>Guiding Principles</b>
                <p className="mt-2 text-white/90">
                  Our AI systems are governed by the following principles:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li><b>Transparency:</b> We strive to provide clear, accessible explanations of how our AI functions and is trained.</li>
                    <li><b>Fairness and Non-Discrimination:</b> We actively mitigate bias in data and models to ensure equitable outcomes.</li>
                    <li><b>Accountability:</b> We take responsibility for our models&apos; behavior and allow for oversight and redress mechanisms.</li>
                  </ul>
                </p>
              </li>
              <li>
                <b>Data Ethics</b>
                <p className="mt-2 text-white/90">
                  We collect and use data in a lawful, transparent, and fair manner.<br />
                  We respect user privacy and avoid the use of sensitive or personally identifiable data unless explicitly consented to.<br />
                  Datasets are evaluated for representativeness, accuracy, and bias mitigation.
                </p>
              </li>
              <li>
                <b>Human Oversight</b>
                <p className="mt-2 text-white/90">
                  AI-generated outputs are reviewed by human moderators, particularly in high-impact domains. Final responsibility for decision-making remains with human users.
                </p>
              </li>
              <li>
                <b>Security and Safety</b>
                <p className="mt-2 text-white/90">
                  We employ rigorous security protocols to prevent misuse, manipulation, or unintended consequences of our AI systems.
                </p>
              </li>
              <li>
                <b>Continuous Monitoring and Improvement</b>
                <p className="mt-2 text-white/90">
                  We audit our AI systems periodically for performance, compliance, and alignment with ethical norms. User feedback is actively incorporated to refine outputs and eliminate harm.
                </p>
              </li>
              <li>
                <b>User Responsibilities</b>
                <p className="mt-2 text-white/90">
                  Users of our platform are required to:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Use AI outputs responsibly and with appropriate human supervision;</li>
                    <li>Avoid using AI to generate deceptive, malicious, or unlawful content;</li>
                    <li>Report any concerning behavior or outputs immediately.</li>
                  </ul>
                </p>
              </li>
              <li>
                <b>Governance and Compliance</b>
                <p className="mt-2 text-white/90">
                  We stay aligned with global AI regulatory frameworks, including the EU AI Act, India&apos;s Digital Personal Data Protection Act, and emerging best practices from industry consortiums.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 