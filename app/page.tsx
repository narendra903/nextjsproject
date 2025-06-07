"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { SignInButton, UserButton, useUser } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRightIcon, ChatBubbleBottomCenterTextIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function Home() {
  const { user } = useUser()
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-teal-50 dark:from-purple-950 dark:to-teal-950">
      {/* Glassmorphism Header */}
      <header className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 border-b border-purple-100 dark:border-purple-900 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="ZenFlow" width={120} height={32} className="h-8 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <button className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                  Start Free Trial
                </button>
              </SignInButton>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-500 mb-6">
                Your Personal AI Yoga Guide - Practice Smarter, Not Harder
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Experience personalized yoga guidance powered by Gemini 2.0 Flash AI. Transform your practice with real-time adjustments, custom routines, and expert insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SignInButton mode="modal">
                  <button className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity text-lg">
                    Start Your Journey
                  </button>
                </SignInButton>
                <button className="border border-purple-200 dark:border-purple-800 px-8 py-3 rounded-full font-medium hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-lg">
                  Watch Demo
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                  alt="Yoga Practice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent" />
              </div>
              {/* AI Chat Overlay */}
              <div className="absolute -right-4 -bottom-4 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-2">
                    <SparklesIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      "I noticed your downward dog needs slight adjustment. Try pressing your heels down more and lifting your hips higher."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ZenFlow?</h2>
            <p className="text-gray-600 dark:text-gray-300">Experience the perfect blend of ancient wisdom and modern AI technology</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How ZenFlow Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-teal-500" />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Path</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={cn(
                  "rounded-xl p-8 relative",
                  plan.popular
                    ? "bg-gradient-to-b from-purple-600 to-teal-500 text-white shadow-xl"
                    : "bg-white dark:bg-neutral-800 shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-sm opacity-80">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg
                        className={cn(
                          "w-5 h-5",
                          plan.popular ? "text-white" : "text-purple-600 dark:text-purple-400"
                        )}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <SignInButton mode="modal">
                  <button
                    className={cn(
                      "w-full py-3 rounded-full font-medium transition-opacity hover:opacity-90",
                      plan.popular
                        ? "bg-white text-purple-600"
                        : "bg-gradient-to-r from-purple-600 to-teal-500 text-white"
                    )}
                  >
                    Get Started
                  </button>
                </SignInButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ArrowRightIcon
                    className={cn(
                      "w-5 h-5 transition-transform",
                      activeFaq === index ? "rotate-90" : ""
                    )}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Yoga Practice?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of practitioners who have elevated their yoga journey with ZenFlow's AI guidance.
            </p>
            <SignInButton mode="modal">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity text-lg">
                Start Your Free Trial
              </button>
            </SignInButton>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Personalized Guidance",
    description: "Get real-time feedback and adjustments tailored to your unique practice style and goals.",
    icon: SparklesIcon,
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage Gemini 2.0 Flash AI for detailed pose analysis and improvement suggestions.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "Community Support",
    description: "Connect with fellow practitioners and share your progress in our supportive community.",
    icon: UserGroupIcon,
  },
]

const steps = [
  {
    title: "Sign Up",
    description: "Create your account and tell us about your yoga experience and goals.",
  },
  {
    title: "AI Assessment",
    description: "Our AI analyzes your practice style and current skill level.",
  },
  {
    title: "Personalized Plan",
    description: "Receive a custom practice plan tailored to your needs.",
  },
  {
    title: "Start Practice",
    description: "Begin your journey with real-time AI guidance and support.",
  },
]

const pricingPlans = [
  {
    name: "Basic",
    price: 0,
    features: [
      "Basic pose guidance",
      "5 AI-guided sessions/month",
      "Community access",
      "Basic progress tracking",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 19,
    features: [
      "Advanced pose guidance",
      "Unlimited AI-guided sessions",
      "Priority community support",
      "Detailed progress analytics",
      "Custom practice plans",
      "Live class access",
    ],
    popular: true,
  },
  {
    name: "Studio",
    price: 49,
    features: [
      "Everything in Pro",
      "Multiple user accounts",
      "Studio management tools",
      "Custom branding",
      "Priority support",
      "API access",
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: "How accurate is the AI pose detection?",
    answer: "Our Gemini 2.0 Flash AI achieves over 95% accuracy in pose detection and provides real-time feedback with millisecond latency.",
  },
  {
    question: "Do I need special equipment?",
    answer: "No special equipment needed! Just your device's camera and a yoga mat. Our AI works with any standard smartphone or laptop camera.",
  },
  {
    question: "Can beginners use ZenFlow?",
    answer: "Absolutely! ZenFlow adapts to all skill levels, providing appropriate guidance and modifications for beginners to advanced practitioners.",
  },
  {
    question: "How does the free trial work?",
    answer: "Start with a 14-day free trial of our Pro plan. No credit card required. Cancel anytime before the trial ends.",
  },
]
