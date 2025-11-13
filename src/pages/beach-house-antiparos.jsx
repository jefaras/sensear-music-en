import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ArrowRight, MessageSquare, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumbs from "../components/Breadcrumbs";

export default function BeachHouseAntiparos() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Beach House Antiparos Case Study | SensEar Music";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "How SensEar created a multi-zone soundscape for Beach House Antiparos with curated playlists for beach, dining, and retail areas.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/beach-house-antiparos');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/beach-house-antiparos';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Beach House Antiparos Case Study | SensEar Music' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png' },
    { property: 'og:url', content: 'https://sensear.music/beach-house-antiparos' },
    { property: 'og:type', content: 'article' }];

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
    { name: 'twitter:title', content: 'Beach House Antiparos Case Study | SensEar Music' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png' }];

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
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Beach House Antiparos Case Study | Multi-Zone Soundscape",
      "description": description,
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png",
      "author": {
        "@type": "Organization",
        "name": "SensEar"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SensEar",
        "logo": {
          "@type": "ImageObject",
          "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"
        }
      },
      "datePublished": "2025-01-15"
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
        "name": "Case Studies",
        "item": "https://sensear.music/case-studies"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Beach House Antiparos",
        "item": "https://sensear.music/beach-house-antiparos"
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

  const problems = [
  "Guests moved through multiple zones (beach, dining, retail), each requiring a unique soundscape.",
  "Generic playlists felt disconnected from the venue's luxury positioning and island identity.",
  "Audio quality varied across spaces, with no central control or cohesion."];

  const solutions = [
  "Designed distinct playlists for each zone—chillout beach vibes, elevated dining soundtracks, and boutique retail music.",
  "Established seamless transitions as guests moved from one area to another, maintaining a unified brand feel.",
  "Optimized the entire audio system for clarity and balance, with centralized control for consistency."];

  const results = [
  "Enhanced guest satisfaction scores, with specific praise for the 'perfect soundtrack.'",
  "Extended dwell time in each zone, contributing to increased food, beverage, and retail revenue.",
  "Beach House is now known for its immersive, multi-sensory guest experience."];

  return (
    <div className="bg-[#faebe3]">
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-up-1 {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .slide-up-2 {
          animation: slideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .slide-up-3 {
          animation: slideUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Beach House Antiparos Case Study section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Multi-zone soundscapes for<br />
              Beach House Antiparos
            </h1>
            
            <div className="mb-8 max-w-4xl slide-up-2">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                How SensEar crafted a cohesive audio journey across beach, dining, and retail spaces
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Beach House Antiparos with multi-zone music curation"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Beach House Antiparos with multi-zone music curation"
                className="absolute w-full h-full object-cover hidden md:block"
                style={{ 
                  top: '-15%',
                  height: '130%',
                  transform: `translateY(${scrollY * 0.15}px)`,
                  transformOrigin: 'center top'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
        { label: "Case Studies", path: createPageUrl("CaseStudies") },
        { label: "Beach House Antiparos", path: createPageUrl("beach-house-antiparos") }]
        } />
      </div> */}

      {/* Main Content Section */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Meet Beach House */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg"
              alt="Beach House logo"
              className="w-20 h-20 rounded-lg object-cover border-2 border-black/10" />

            <h2 className="text-3xl sm:text-4xl font-bold">Meet Beach House</h2>
          </div>
          <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            Beach House is a luxury beachfront destination in Antiparos that fuses laid-back island charm with high-end hospitality. From sunrise yoga to sunset cocktails, it's a full-spectrum experience. But its diverse spaces needed a unified sonic identity.
          </p>
		      <div className="max-w-4xl mx-auto px-6 text-center">      
                <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-6">
                  "We needed music that would connect each part of our guest journey—beach, dining, boutique—while respecting the distinct character of each space." – Beach House Owner
                </blockquote>
          </div>
          {/* Three Process Cards with Arrows */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* Card 1: Why They Called Us */}
            <Card className="flex-1 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" aria-hidden="true" />
                  Why They Called Us
                </h3>

                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Guests moved through multiple zones (beach, dining, retail), each requiring a unique soundscape.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Generic playlists felt disconnected from the venue's luxury positioning and island identity.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Audio quality varied across spaces, with no central control or cohesion.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <ArrowRight className="w-8 h-8 text-black/40" aria-hidden="true" />
            </div>

            {/* Card 2: How We Responded */}
            <Card className="flex-1 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6" aria-hidden="true" />
                  How We Responded
                </h3>
                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Designed distinct playlists for each zone—chillout beach vibes, elevated dining soundtracks, and boutique retail music.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Established seamless transitions as guests moved from one area to another, maintaining a unified brand feel.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Optimized the entire audio system for clarity and balance, with centralized control for consistency.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <ArrowRight className="w-8 h-8 text-black/40" aria-hidden="true" />
            </div>

            {/* Card 3: What They Got */}
            <Card className="flex-1 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" aria-hidden="true" />
                  What They Got
                </h3>

                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Enhanced guest satisfaction scores, with specific praise for the 'perfect soundtrack.'</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Extended dwell time in each zone, contributing to increased food, beverage, and retail revenue.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Beach House is now known for its immersive, multi-sensory guest experience.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          		<div className="max-w-4xl mx-auto px-6 text-center">
                <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-6">
                  "SensEar gave us something we didn't know we needed—a soundtrack that flows as naturally as the sea breeze through our property." – Beach House Owner
                </blockquote>
              </div>
          </div>
      </section>
        
      {/* CTA Section */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-black mb-6 leading-[1.25]">
            Create Your Multi-Zone Experience
          </h2>
          <p className="text-xl text-black/70 mb-8">
            <span>Transform your property like Beach House. Explore our </span><Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black font-semibold">hospitality solutions</Link><span> or view more </span><Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">success stories</Link><span>.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black hover:bg-black/80 text-white" aria-label="Get Similar Results">
                Get Similar Results
              </Button>
            </Link>
            <Link to={createPageUrl("CaseStudies")}>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white" aria-label="See More Success Stories">
                See More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <nav className="text-center py-8 bg-[#faebe3]" aria-label="Case studies navigation">
        <Link to={createPageUrl("CaseStudies")}>
          <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Return to Case Studies Overview
          </Button>
        </Link>
      </nav>
    </div>);
}