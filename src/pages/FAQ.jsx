
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | SensEar Music Curation Questions Answered";
  }, []);

  const faqs = [
    {
      question: "Is it legal to play music from Spotify, YouTube, or Apple Music in my restaurant/bar/hotel?",
      answer: "Typically, consumer streaming platforms (like Spotify Free/Premium, YouTube, Apple Music, etc.) are licensed only for personal use, meaning they do not cover public performance rights in a commercial setting. You'll need a business license or properly licensed service to legally play music for your patrons."
    },
    {
      question: "Why can't I just use my personal Spotify or Apple Music subscription?",
      answer: "Personal subscriptions don't include public performance or commercial use rights. Using them in a public venue can violate copyright law and may lead to fines or legal complications. Commercial music services, by contrast, include the necessary licenses for public playback."
    },
    {
      question: "What is a public performance license, and why do I need it?",
      answer: "A Public Performance License is an agreement that compensates artists, songwriters, and music publishers when their work is played in a public venue. You must utilize it to legally broadcast or perform music in restaurants, bars, hotels, retail stores, etc. SensEar can help you navigate or secure these licenses for peace of mind."
    },
    {
      question: "Does SensEar provide fully licensed music?",
      answer: "Yes. All our tracks are properly licensed for commercial settings, so you don't have to worry about legal pitfalls. We handle licensing, compliance, and usage reporting where required."
    },
    {
      question: "How long does it take to create a custom playlist?",
      answer: "It varies. For a single venue with a clear music profile, it may take just a few days. For larger or multi-location clients, it can take a week or more to finalize the whole process."
    },
    {
      question: "Is your music fully licensed?",
      answer: "Yes. All tracks are properly licensed so you can focus on running your business without any legal concerns."
    },
    {
      question: "Can I update the music playlists myself?",
      answer: "Absolutely. Our user-friendly platform allows you to make quick changes, adjust settings, or schedule different playlists for specific times."
    },
    {
      question: "Do I need special equipment for playing your music playlists?",
      answer: "Basic sound systems work just fine, but if you want specialized audio-visual solutions, we can provide design, purchase, and installation services. For more info see our AV Design & Integration section."
    },
    {
      question: "Do you offer support after setup?",
      answer: "Yes. We are available for ongoing support, updates, and any adjustments you need along the way. Just send us a message and we will talk about it."
    },
    {
      question: "What is the difference between background music and bespoke curation?",
      answer: "Background Music offers pre-curated, automated playlists for a seamless ambiance, ideal for general business needs. Bespoke Curation is a fully customized music strategy, crafted to reflect a brand's identity and create a unique, immersive experience. It is ideal for luxury venues, boutique spaces, and businesses seeking a signature sound experience."
    }
  ];

  return (
    <div className="bg-[#faebe3]">
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Your questions about music curation, licensing, and our services, answered. Find the information you need to make an informed decision.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
          { label: "FAQ", path: createPageUrl("FAQ") }
        ]} />
      </div>

      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="faq-section-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="faq-section-heading" className="text-4xl font-bold text-center text-black mb-12">
            Your Questions, Answered
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 bg-white/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Have more questions? Want to meet?</h3>
            <p className="text-black/80 mb-6">Let's talk about how we can elevate your brand's sound.</p>
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 group">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
