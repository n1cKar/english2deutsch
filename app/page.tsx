'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <Header />
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 text-center bg-gradient-to-r from-orange-600 to-orange-400 text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Start Learning German Today!</h1>
        <p className="text-lg mb-8">Interactive lessons to build your German vocabulary, grammar, and confidence.</p>
        <Link href="/lessons">
          <span className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Start Now
          </span>
        </Link>
      </section>

      {/* Description */}
      <section className="py-12 bg-white dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Learn German the Smart Way
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            English2Deutsch helps beginners and intermediate learners master German quickly. No fluff, no distractions – just structured, engaging lessons that work.
          </p>
        </div>
      </section>

      {/* Features with Scroll Animation */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">Why English2Deutsch?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Bite-Sized Lessons',
                desc: 'Learn at your own pace with short, focused lessons for vocabulary, grammar, and conversation.',
                icon: 'ri-book-open-line',
                color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
              },
              {
                title: 'Completely Free',
                desc: '100% free and open-source. No ads, no paywall, just pure learning.',
                icon: 'ri-check-double-line',
                color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 text-center"
              >
                <div className={`w-16 h-16 flex items-center justify-center ${feature.color} rounded-full mx-auto mb-6`}>
                  <i className={`${feature.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-3">
              <h3 className="text-2xl font-['Pacifico'] text-amber-500 mb-4">English2Deutsch</h3>
              <p className="text-gray-300 leading-relaxed">
                Learn the German language through intuitive lessons and real-world examples. Designed for learners who want a fun, fast, and effective experience.
              </p>
            </div>
            <div className="col-span-1 text-right">
              <h4 className="font-semibold mb-4">Highlights</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Quick Lessons</li>
                <li>Native Pronunciation</li>
                <li>Vocabulary Builder</li>
                <li>Free & Open Source</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 English2Deutsch. Created by Nimash Mendis.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
