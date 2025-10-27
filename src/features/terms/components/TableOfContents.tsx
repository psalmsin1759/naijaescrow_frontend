"use client";

import React from "react";

export default function TableOfContents({ items }: { items: { id: string; title: string }[] }) {
  return (
    <aside className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm sticky top-24 h-fit">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
