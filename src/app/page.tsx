'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl sm:text-8xl md:text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            bluebox
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Experience the future of healthcare with AI-powered medical guidance
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/chat"
              className="group inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get Started
              <IconArrowRight 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              />
            </Link>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "24/7 Availability",
              description: "Access medical guidance anytime, anywhere"
            },
            {
              title: "AI-Powered Analysis",
              description: "Advanced symptom analysis and health insights"
            },
            {
              title: "Secure & Private",
              description: "Your health data is protected with military-grade encryption"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 px-4 bg-neutral-800/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "99%", label: "Accuracy Rate" },
            { number: "24/7", label: "Availability" },
            { number: "10k+", label: "Users" },
            { number: "<1s", label: "Response Time" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Bluebox AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}