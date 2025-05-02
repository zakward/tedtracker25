// src/pages/Education.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bgimage from '../assets/images/education-bg.png';

const Education = () => (
  <div
    className="relative flex flex-col items-center bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${bgimage})` }}
  >
  

      <Link
        to="/"
         className="relative top-10 z-10 mb-4 bg-[#F5E1B9] p-2 rounded border-4 border-[#264653] font-medium"
        style={{
          color: '#264653',
          fontFamily: "'Fredoka One', sans-serif",
        }}
      >
        &larr; Back to Categories
      </Link>
    {/* Content card */}
    <div
      className="
        relative z-10
        mt-[75px]
        bg-[#F5E1B9]
        border-4 border-[#264653]
        rounded-2xl shadow-2xl
        p-6
        w-11/12 max-w-prose
        max-h-[80vh]
        overflow-y-auto
        prose lg:prose-xl text-left
      "
    >

      <h1
        style={{
          fontFamily: "'Fredoka One', sans-serif",
          color: '#264653',
        }}
      >
        Medical Marijuana Education
      </h1>

      {/* Main content with highlighted headings & bullets */}
      <h2 className="border-l-4 border-[#2A9D8F] pl-3 mb-3">
        1. Overview of Benefits
      </h2>
      <p>
        Medical cannabis may help with pain management, including chronic pain,
        neuropathic pain, and migraine relief. It has shown promise in reducing
        muscle spasms for conditions like multiple sclerosis and alleviating
        chemotherapy-induced nausea and vomiting.
      </p>

      <h2 className="border-l-4 border-[#2A9D8F] pl-3 mb-3">
        2. Consumption Methods
      </h2>
      <ul className="list-disc list-inside space-y-2 marker:text-[#2A9D8F] marker:font-bold">
        <li>
          <strong>Inhalation:</strong> Smoking or vaping flower and concentrates
          offers rapid onset (minutes) but may irritate lungs.
        </li>
        <li>
          <strong>Edibles:</strong> Gummies, oils, and baked goods provide
          longer-lasting effects (4–8 hours) but delayed onset (~1–2 hours).
        </li>
        <li>
          <strong>Tinctures:</strong> Alcohol or oil-based drops under the tongue
          (sublingual) act within 15–45 minutes.
        </li>
        <li>
          <strong>Topicals:</strong> Creams, balms, and lotions applied to skin for
          localized relief without psychoactive effects.
        </li>
      </ul>

      <h2 className="border-l-4 border-[#2A9D8F] pl-3 mb-3">
        3. Understanding THC &amp; CBD
      </h2>
      <p>
        <strong>THC (Tetrahydrocannabinol)</strong> is the primary psychoactive
        compound. It binds to CB1 receptors in the brain, producing euphoria, pain
        relief, and appetite stimulation. Typical flower ranges from 15–25% THC,
        while concentrates can exceed 70%.
      </p>
      <p>
        <strong>CBD (Cannabidiol)</strong> is non-intoxicating and interacts with
        different receptors (e.g., serotonin). Known for reducing anxiety,
        inflammation, and seizures, CBD levels in products range from trace
        amounts up to 50mg+ per dose in edibles.
      </p>

      <h2 className="border-l-4 border-[#2A9D8F] pl-3 mb-3">
        4. Terpene Profiles
      </h2>
      <ul className="list-disc list-inside space-y-2 marker:text-[#2A9D8F] marker:font-bold">
        <li><strong>Myrcene:</strong> Earthy, musky aroma; may promote relaxation and sedation.</li>
        <li><strong>Limonene:</strong> Citrus scent; linked to elevated mood and stress relief.</li>
        <li><strong>Pinenes:</strong> Pine aroma; may support alertness and memory retention.</li>
        <li><strong>Caryophyllene:</strong> Spicy, peppery scent; can act on CB2 receptors for potential anti-inflammatory effects.</li>
      </ul>

      <h2 className="border-l-4 border-[#2A9D8F] pl-3 mb-3">
        5. Strain Categories
      </h2>
      <ul className="list-disc list-inside space-y-2 marker:text-[#2A9D8F] marker:font-bold">
        <li><strong>Indica:</strong> Often associated with body relaxation, pain relief, and sleep aid. Best for nighttime use.</li>
        <li><strong>Sativa:</strong> Tends to produce uplifting, energizing effects. Ideal for daytime activities and creativity.</li>
        <li><strong>Hybrid:</strong> Crossbreeds combining characteristics of both indica and sativa to balance effects.</li>
      </ul>

      <h2 className="border-l-4 border-[#2A9D8F] pl-3 mb-3">
        6. Dosing Guidelines
      </h2>
      <p>
        Start low and go slow:
      </p>
      <ul className="list-disc list-inside space-y-2 marker:text-[#2A9D8F] marker:font-bold mb-4">
        <li>Inhalation: 1–2 puffs, wait 15 minutes before increasing.</li>
        <li>Edibles: 2.5–5mg THC, wait 2 hours to assess effects.</li>
        <li>Tinctures: 2.5mg, increase by 2.5mg increments weekly.</li>
      </ul>

      <p>Always consult a healthcare professional for personalized medical advice.</p>
    </div>
  </div>
);

export default Education;
