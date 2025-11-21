import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Music, Sparkles, SlidersHorizontal, ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music Curation Services | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Discover SensEar's music curation services: Sonic Strategy, Signature Playlists, Event Soundtracks, and Audio Upgrades. Transform your venue's atmosphere.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    const languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'en');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'en';
      document.head.appendChild(meta);
    }

    document.documentElement.lang = 'en';

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robotsMeta);
    }

    let googlebotMeta = document.querySelector('meta[name="googlebot"]');
    if (googlebotMeta) {
      googlebotMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.name = 'googlebot';
      googlebotMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(googlebotMeta);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/services');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/services';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Music Curation Services | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/services' }];

    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Music Curation Services | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80' }];

    twitterTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SensEar",
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfciynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Music Curation and Sonic Branding",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Music Curation Services",
        "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sonic Strategy",
            "description": "Ultra-specialized music consultancy and audio branding guidelines"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Signature Playlists",
            "description": "Bespoke, brand-exclusive playlists sourced from rare archives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Soundtracks",
            "description": "Artfully selected, custom-curated soundtracks and seamless AV production that elevate events into immersive, unforgettable moments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audio Upgrades",
            "description": "Professional on-site sound checks and audio calibration"
          }
        }]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sensear.music/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sensear.music/services"
      }]
    }];

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#faebe3]">
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animated-gradient {
          background: linear-gradient(135deg, #f5d4c1 0%, #e8c3b0 15%, #d4c4b0 30%, #c0c0c0 45%, #d3d3d3 60%, #f0d5d0 75%, #e8c3b0 90%, #f5d4c1 100%);
          background-size: 400% 400%;
          animation: gradient-shift 7s ease infinite;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .slide-up-1 { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .slide-up-2 { animation: slideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .slide-up-3 { animation: slideUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .slide-up-4 { animation: slideUp 0.8s ease-out 0.6s forwards; opacity: 0; }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Services section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Which music service<br />
              do you need?
            </h1>
            
            <div className="mb-8 max-w-4xl slide-up-2">
              <h2 className="text-2xl font-bold text-black mb-4">How our music services work for your venue</h2>
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed mb-6">
                SensEar offers 4 connected & customised music services for hospitality business.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed mb-6">
                We do so much more than fill silence with music. We transform your atmosphere & support your goals.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Start with the one that matches where you are today, then add the others as your spaces & needs evolve.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music equipment and sound system setup for venue curation"
                className="absolute w-full h-full object-cover md:hidden" />

              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music equipment and sound system setup for venue curation"
                className="absolute w-full h-full object-cover hidden md:block"
                style={{
                  top: '-15%',
                  height: '130%',
                  transform: `translateY(${scrollY * 0.15}px)`,
                  transformOrigin: 'center top'
                }} />
            </div>
          </div>
        </div>
      </section>

      {/* Is this for you? Section */}
      <section className="py-20 bg-white" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="services-list-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Is this for you?</h2>
            <p className="text-xl text-black/70">Use this guide to see which service fits you.</p>
          </div>
          
          {/* First row: Signature Playlists and Event Soundtracks */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8" role="list">
            {/* Service 1: Signature Playlists */}
            <article role="listitem">
              <Link to={createPageUrl("signature-playlists")} aria-label="Signature Playlists">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-[#faebe3]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg"
                      alt="Signature Playlists"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-black mb-4 group-hover:underline decoration-2 underline-offset-4">
                      Signature Playlists
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="font-bold text-black text-lg block mb-1">Best for:</span>
                        <p className="text-black/80 text-lg">Venues that want daily, branded background music.</p>
                      </div>
                      <div>
                        <span className="font-bold text-black text-lg block mb-1">You get:</span>
                        <p className="text-black/80 text-lg">Curated playlists per space and time of day, central control & regular updates.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Service 2: Event Soundtracks */}
            <article role="listitem">
              <Link to={createPageUrl("event-soundtracks")} aria-label="Event Soundtracks">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-[#faebe3]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg"
                      alt="Event Soundtracks"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-black mb-4 group-hover:underline decoration-2 underline-offset-4">
                      Event Soundtracks
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="font-bold text-black text-lg block mb-1">Best for:</span>
                        <p className="text-black/80 text-lg">One-off events (launches, conferences, weddings, shows, etc).</p>
                      </div>
                      <div>
                        <span className="font-bold text-black text-lg block mb-1">You get:</span>
                        <p className="text-black/80 text-lg">Complete soundtrack/live DJ set synced to all key moments (optional AV support).</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </article>
          </div>

          {/* Second row: Sonic Strategy and Audio Upgrades - Smaller fonts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch" role="list">
            {/* Spacer */}
            <div className="hidden lg:block"></div>

            {/* Service 3: Sonic Strategy */}
            <article role="listitem">
              <Link to={createPageUrl("sonic-strategy")} aria-label="Sonic Strategy">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white border border-black/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg"
                      alt="Sonic Strategy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:underline decoration-2 underline-offset-4">
                      Sonic Strategy
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-bold text-black block mb-1">Best for:</span>
                        <p className="text-black/70">Multi-location or channel brands that want a clear sonic identity.</p>
                      </div>
                      <div>
                        <span className="font-bold text-black block mb-1">You get:</span>
                        <p className="text-black/70">Practical sonic guidelines for venues, content and rolling out a consistent sound.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Service 4: Audio Upgrades */}
            <article role="listitem">
              <Link to={createPageUrl("audio-upgrades")} aria-label="Audio Upgrades">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white border border-black/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg"
                      alt="Audio Upgrades"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:underline decoration-2 underline-offset-4">
                      Audio Upgrades
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-bold text-black block mb-1">Best for:</span>
                        <p className="text-black/70">Venues with harsh or weak sound, even if playlists are right.</p>
                      </div>
                      <div>
                        <span className="font-bold text-black block mb-1">You get:</span>
                        <p className="text-black/70">On-site sound audit and an upgrade plan with trusted partners, for a balanced mix.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Spacer */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* If this is you, start here */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-center">If this is you, start here</h2>
          
          <div className="space-y-8 text-lg md:text-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors">
              <span className="text-center md:text-left">Your venue's music feels generic or off brand</span>
              <Link to={createPageUrl("signature-playlists")} className="flex items-center gap-2 text-peach font-bold hover:underline underline-offset-4 whitespace-nowrap">
                Signature Playlists <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors">
              <span className="text-center md:text-left">Planning a launch, show, conference or special dinner</span>
              <Link to={createPageUrl("event-soundtracks")} className="flex items-center gap-2 text-peach font-bold hover:underline underline-offset-4 whitespace-nowrap">
                Event Soundtracks <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors">
              <span className="text-center md:text-left">Rebranding, expanding or want one clear sound across locations and channels</span>
              <Link to={createPageUrl("sonic-strategy")} className="flex items-center gap-2 text-peach font-bold hover:underline underline-offset-4 whitespace-nowrap">
                Sonic Strategy <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors">
              <span className="text-center md:text-left">Guests or staff complain about loudness, echo or "cannot hear each other"</span>
              <Link to={createPageUrl("audio-upgrades")} className="flex items-center gap-2 text-peach font-bold hover:underline underline-offset-4 whitespace-nowrap">
                Audio Upgrades <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How services work together */}
      <section className="py-20 animated-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-8">How services work together</h2>
          <div className="text-xl md:text-2xl text-black/80 leading-relaxed space-y-6">
            <p>
              Many clients define their everyday sound first with <Link to={createPageUrl("signature-playlists")} className="underline font-bold hover:text-black">Signature Playlists</Link>, then add <Link to={createPageUrl("sonic-strategy")} className="underline font-bold hover:text-black">Sonic Strategy</Link> as they grow.
            </p>
            <p>
              <Link to={createPageUrl("event-soundtracks")} className="underline font-bold hover:text-black">Event Soundtracks</Link> covers their key moments, while <Link to={createPageUrl("audio-upgrades")} className="underline font-bold hover:text-black">Audio Upgrades</Link> ensures that systems in each venue can deliver the music with clarity and comfort.
            </p>
            <p>
              Over time this gives you a consistent, long term approach to music for business instead of a series of one-off tweaks.
            </p>
          </div>
        </div>
      </section>

      {/* Further reading */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-8">Further reading</h2>
          <p className="text-xl text-black/70 mb-12">If you want to explore the thinking behind this approach, you can read:</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link to={createPageUrl("how-top-hospitality-brands-design-sound")} className="block group">
              <Card className="p-8 h-full hover:shadow-xl transition-shadow border-black/10 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-bold text-black mb-4 group-hover:underline decoration-2 underline-offset-4">
                  How Top Hospitality Brands Design Their Sound On Purpose
                </h3>
                <p className="text-black/70">
                  On designing music as part of the guest journey.
                </p>
              </Card>
            </Link>

            <Link to={createPageUrl("music-curation-cycle-venues")} className="block group">
              <Card className="p-8 h-full hover:shadow-xl transition-shadow border-black/10 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-bold text-black mb-4 group-hover:underline decoration-2 underline-offset-4">
                  The Music Curation Cycle for Venues: Analyze, Optimize & Evolve Your Sonic Identity
                </h3>
                <p className="text-black/70">
                  On keeping your sonic identity aligned with changing needs.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}