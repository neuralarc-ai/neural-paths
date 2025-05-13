import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mx-auto w-full lg:px-10 px-4">
        {/* Banner */}
        <section className="w-full max-w-[1858px] mx-auto flex justify-center items-center lg:h-[518px] relative rounded-3xl overflow-hidden">
          <Image
            src="/images/privacy-banner.png"
            alt="Banner BG"
            fill
            className="object-cover object-center pointer-events-none select-none"
            priority
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full py-12">
            <h1 className="text-[#232323] text-4xl md:text-6xl font-semibold text-center mb-4">Privacy Policy</h1>
            <p className="text-[#232323]/80 text-lg md:text-xl text-center font-light">Effective Date: April, 2025</p>
          </div>
        </section>
        {/* Privacy Policy Content */}
        <section className="w-full flex justify-center px-2 py-12 max-w-[1858px] mx-auto">
          <div className="w-full bg-[#232323] rounded-3xl shadow-xl px-6 md:px-12 py-10 text-white text-base md:text-lg">
            <ol className="list-decimal list-inside space-y-6">
              <li>
                <b>Information We Collect</b>
                <p className="mt-2 text-white/90">
                  <b>Personal Data:</b> Name, email, company, contact details.<br />
                  <b>Technical Data:</b> IP address, browser type, device identifiers, usage logs.<br />
                  <b>Cookies:</b> We use cookies for analytics and personalization.
                </p>
              </li>
              <li>
                <b>Use of Information</b>
                <p className="mt-2 text-white/90">
                  We use the information to:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Provide, maintain, and improve our Services;</li>
                    <li>Process transactions and communicate with you;</li>
                    <li>Monitor usage trends and enhance security;</li>
                    <li>Comply with legal obligations.</li>
                  </ul>
                </p>
              </li>
              <li>
                <b>Legal Basis for Processing</b>
                <p className="mt-2 text-white/90">
                  Where applicable, we process your data on the basis of your consent, our contractual obligations, compliance with legal obligations, or legitimate interests.
                </p>
              </li>
              <li>
                <b>Data Sharing</b>
                <p className="mt-2 text-white/90">
                  We do not sell or rent your data. We may share it with:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Authorized service providers (under strict confidentiality);</li>
                    <li>Legal or regulatory authorities, when required;</li>
                    <li>Affiliates and successors in interest, in the event of a business transfer.</li>
                  </ul>
                </p>
              </li>
              <li>
                <b>Data Retention</b>
                <p className="mt-2 text-white/90">
                  We retain your data only as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law.
                </p>
              </li>
              <li>
                <b>Security</b>
                <p className="mt-2 text-white/90">
                  We implement appropriate administrative, technical, and physical safeguards to protect your information against unauthorized access or disclosure.
                </p>
              </li>
              <li>
                <b>Your Rights</b>
                <p className="mt-2 text-white/90">
                  Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the processing of your data. Please contact us at support@neuralarc.ai.
                </p>
              </li>
              <li>
                <b>International Transfers</b>
                <p className="mt-2 text-white/90">
                  If your data is transferred outside of India, we ensure appropriate safeguards are in place, including data processing agreements and, where applicable, standard contractual clauses.
                </p>
              </li>
              <li>
                <b>Changes</b>
                <p className="mt-2 text-white/90">
                  We may update this Privacy Policy periodically. We encourage you to review this page regularly.
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