import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Brain, ArrowRight, CheckCircle, Bot, TrendingUp, Star, Zap, FileText, Database, Target } from "lucide-react";
import PricingTable, { Plan } from '@/components/ui/modern-pricing-table';

// Sample pricing data
const samplePlans: Plan[] = [
  {
    title: "Starter",
    price: {
      monthly: 9,
      yearly: 96
    },
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 mock interviews",
      "5GB storage for recorded sessions",
      "Basic feedback metrics",
      "Standard analytics",
      "Question bank access"
    ],
    ctaText: "Get Started",
    ctaHref: "#",
    isFeatured: false
  },
  {
    title: "Professional",
    price: {
      monthly: 29,
      yearly: 312
    },
    description: "Ideal for serious candidates looking to crack big tech",
    features: [
      "Unlimited mock interviews",
      "50GB storage",
      "Advanced company-specific AI models",
      "Deep communication analysis",
      "Smart resume analyzer",
      "Personalized improvement path",
      "Priority email support",
    ],
    ctaText: "Start Free Trial",
    ctaHref: "#",
    isFeatured: true
  },
  {
    title: "Enterprise",
    price: {
      monthly: 99,
      yearly: 1068
    },
    description: "For bootcamps and educational organizations",
    features: [
      "Unlimited candidate accounts",
      "500GB storage",
      "24/7 dedicated support",
      "Custom interview models",
      "API access",
      "Team collaboration dashboard",
      "White-labeled platform",
      "SSO authentication",
    ],
    ctaText: "Contact Sales",
    ctaHref: "#",
    isFeatured: false
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-300/30 rounded-full blur-[80px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-violet-300/30 rounded-full blur-[80px]" />
      </div>

      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <Brain className="w-8 h-8 text-indigo-600" />
            <span>PrepAI</span>
          </a>
          <nav className="hidden md:flex gap-8 text-slate-500 font-medium">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Success Stories</a>
          </nav>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-indigo-600 font-medium hidden sm:block">Log In</a>
            <a href="#" className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-5 py-2.5 rounded-lg font-medium hover:-translate-y-0.5 transition-transform shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.4)]">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 min-h-[85vh] flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
              <span className="text-sm font-medium text-indigo-700">New: Google & Amazon role modules</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
              Master the Interview. <br />
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Land Your Dream Job.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto md:mx-0">
              Practice interviews through AI-powered mock sessions tailored to specific roles and companies. Get instant feedback, build confidence, and prepare smarter.
            </p>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <a href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-1 transition-all shadow-[0_4px_15px_rgba(99,102,241,0.3)]">
                Start Mock Interview <ArrowRight className="w-5 h-5" />
              </a>
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Free basic mock session.
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[500px] hidden md:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] bg-white/70 backdrop-blur-xl border border-slate-200 p-6 rounded-2xl z-20 shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 text-indigo-600">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">AI Interviewer (Google SWE)</h4>
                  <p className="text-xs text-slate-500">Analyzing responses...</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl rounded-bl-sm text-sm self-start max-w-[85%] text-slate-800 border border-indigo-100">
                  "Could you describe a time when you optimized a highly scaled system?"
                </div>
                <div className="bg-slate-100 p-3 rounded-xl rounded-br-sm text-sm self-end max-w-[85%] text-slate-600 flex items-center gap-1.5 opacity-80 border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-[pulse_1.4s_infinite_cubic-bezier(0.2,0.8,0.2,1)]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-[pulse_1.4s_infinite_cubic-bezier(0.2,0.8,0.2,1)] delay-200" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-[pulse_1.4s_infinite_cubic-bezier(0.2,0.8,0.2,1)] delay-300" />
                </div>
              </div>
            </div>

            <div className="absolute top-[10%] -right-[10%] bg-white/70 backdrop-blur-xl border border-slate-200 p-4 rounded-xl flex items-center gap-4 z-10 animate-[bounce_6s_ease-in-out_infinite] shadow-[0_20px_40px_rgba(0,0,0,0.05)] min-w-[250px]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-100 text-emerald-600 border border-emerald-200">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-sm text-slate-800 mb-1">Technical Accuracy</h5>
                <div className="w-full h-1 bg-slate-200 rounded-full mb-1">
                  <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                </div>
                <p className="text-xs text-slate-500">85% - Great technical depth</p>
              </div>
            </div>

            <div className="absolute bottom-[10%] -left-[10%] bg-white/70 backdrop-blur-xl border border-slate-200 p-4 rounded-xl flex items-center gap-4 z-30 animate-[bounce_6s_ease-in-out_infinite_reverse] shadow-[0_20px_40px_rgba(0,0,0,0.05)] min-w-[250px]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-100 text-amber-600 border border-amber-200">
                <Star className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-sm text-slate-800 mb-1">Confidence Level</h5>
                <div className="w-full h-1 bg-slate-200 rounded-full mb-1">
                  <div className="h-full bg-amber-500 rounded-full w-[92%]" />
                </div>
                <p className="text-xs text-slate-500">92% - Strong communication</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section id="features" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Everything you need to <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">crack the interview</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Comprehensive tools designed to diagnose your weaknesses and transform you into a top-tier candidate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Mock Sessions", desc: "Experience hyper-realistic interviews tailored to your target company.", icon: <Bot className="w-8 h-8" />, color: "text-violet-600", bg: "bg-violet-100" },
              { title: "Instant Deep Feedback", desc: "Get metrics on your communication style, confidence levels, and tech accuracy.", icon: <Zap className="w-8 h-8" />, color: "text-blue-600", bg: "bg-blue-100" },
              { title: "Smart Resume Analyzer", desc: "Immediate ATS scores, missing keyword suggestions, and formatting tips.", icon: <FileText className="w-8 h-8" />, color: "text-emerald-600", bg: "bg-emerald-100" },
              { title: "Vast Question Bank", desc: "Access thousands of behavioral and technical questions tailored by industry.", icon: <Database className="w-8 h-8" />, color: "text-amber-600", bg: "bg-amber-100" },
              { title: "Personalized Path", desc: "Stop practicing blindly with personalized curricula to overcome your weaknesses.", icon: <Target className="w-8 h-8" />, color: "text-pink-600", bg: "bg-pink-100" },
            ].map((i, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-xl border border-slate-200 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${i.bg} ${i.color}`}>{i.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{i.title}</h3>
                <p className="text-slate-500 leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative z-10 bg-slate-50 border-t border-slate-200">
        <PricingTable plans={samplePlans} />
      </section>

      {/* FOOTER USING THE BACKGROUND BOXES COMPONENT */}
      <footer className="relative w-full h-[600px] overflow-hidden bg-slate-900 flex flex-col border-t border-white/10 mt-20">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 flex-1 pointer-events-none">
          <h2 className={cn("md:text-5xl text-3xl font-bold text-white tracking-tight")}>
            Elevate Your Career with <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">PrepAI</span>
          </h2>
          <p className="text-center mt-4 text-neutral-300 text-lg max-w-xl">
            Join thousands of candidates who transformed their interview anxiety into confidence and high-paying offers.
          </p>
          <a href="#" className="mt-8 bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-xl pointer-events-auto">
            Start Preparing Now
          </a>
        </div>

        <div className="relative z-20 border-t border-white/10 w-full mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4 md:mb-0">
              <Brain className="text-indigo-500 w-6 h-6" /> PrepAI
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <p className="mt-4 md:mt-0">&copy; 2026 PrepAI Solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
