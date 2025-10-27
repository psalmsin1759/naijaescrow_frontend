"use client";

import { privacyPolicyData } from "../data/privacyPolicyData";

export default function PrivacyTableOfContents() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="bg-muted/30 dark:bg-gray-800 rounded-2xl p-6 shadow-lg sticky top-28 h-fit">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Table of Contents
      </h3>
      <ul className="space-y-3">
        {privacyPolicyData.map((section) => (
          <li
            key={section.id}
            className="text-gray-700 dark:text-gray-300 hover:text-primary cursor-pointer text-sm transition-colors"
            onClick={() => scrollToSection(section.id)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
