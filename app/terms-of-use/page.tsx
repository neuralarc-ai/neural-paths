import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Image from 'next/image';

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mx-auto w-full lg:px-10 px-4">
        {/* Banner */}
        <section className="w-full max-w-[1858px] mx-auto flex justify-center items-center lg:h-[518px] relative rounded-3xl overflow-hidden">
          <Image
            src="/images/term-banner.png"
            alt="Banner BG"
            fill
            className="object-cover object-center pointer-events-none select-none"
            priority
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full py-12">
            <h1 className="text-[#232323] text-4xl md:text-6xl font-semibold text-center mb-4">Terms of Use</h1>
            <p className="text-[#232323]/80 text-lg md:text-xl text-center font-light">Effective Date: April, 2025</p>
          </div>
        </section>
        {/* Terms Content */}
        <section className="w-full flex justify-center px-2 py-12 max-w-[1858px] mx-auto">
          <div className="w-full bg-[#232323] rounded-3xl shadow-xl px-6 md:px-12 py-10 text-white text-base md:text-lg">
            <ol className="list-decimal list-inside space-y-6">
              <li>
                <b>Eligibility and Account Responsibility</b>
                <p className="mt-2 text-white/90">
                  You must be at least 18 years of age and capable of entering into a legally binding contract to access or use the Services. You are responsible for maintaining the confidentiality of your account credentials and for all activities occurring under your account.
                </p>
              </li>
              <li>
                <b>License to Use Services</b>
                <p className="mt-2 text-white/90">
                  Subject to your compliance with these Terms, NeuralPaths grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for your internal business purposes. You shall not use the Services to develop competing products or reverse engineer any aspect of the platform.
                </p>
              </li>
              <li>
                <b>Prohibited Conduct</b>
                <p className="mt-2 text-white/90">
                  You shall not:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Use the Services in any manner that infringes any intellectual property or proprietary rights of any party;</li>
                    <li>Use or access the Services to violate any applicable law or regulation;</li>
                    <li>Introduce malware or harmful code, scrape data, or interfere with service functionality;</li>
                    <li>Misrepresent your identity or affiliation.</li>
                  </ul>
                </p>
              </li>
              <li>
                <b>Ownership and Intellectual Property</b>
                <p className="mt-2 text-white/90">
                  All content, trademarks, and software associated with the Services are the exclusive property of NeuralArc or its licensors. No rights are granted except as explicitly set forth herein.
                </p>
              </li>
              <li>
                <b>Third-Party Integrations</b>
                <p className="mt-2 text-white/90">
                  The Services may contain links or integrations with third-party platforms. NeuralArc is not responsible for the content, functionality, or privacy practices of such third parties.
                </p>
              </li>
              <li>
                <b>Disclaimers</b>
                <p className="mt-2 text-white/90">
                  The Services are provided &quot;as is&quot; and &quot;as available.&quot; NeuralArc makes no warranties or representations, express or implied, regarding the Services, including but not limited to merchantability, fitness for a particular purpose, accuracy, or non-infringement.
                </p>
              </li>
              <li>
                <b>Limitation of Liability</b>
                <p className="mt-2 text-white/90">
                  To the maximum extent permitted by applicable law, NeuralArc shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits or revenue, arising from or related to your use of the Services.
                </p>
              </li>
              <li>
                <b>Indemnification</b>
                <p className="mt-2 text-white/90">
                  You agree to indemnify, defend, and hold harmless NeuralArc, its officers, directors, employees, and affiliates from any claim, demand, liability, or expense arising out of your breach of these Terms or violation of applicable law.
                </p>
              </li>
              <li>
                <b>Governing Law and Jurisdiction</b>
                <p className="mt-2 text-white/90">
                  These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
                </p>
              </li>
              <li>
                <b>Changes</b>
                <p className="mt-2 text-white/90">
                  We reserve the right to modify these Terms at any time. Continued use after changes constitutes acceptance of the updated Terms.
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