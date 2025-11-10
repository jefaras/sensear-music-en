
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ArrowRight, MessageSquare, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumbs from "../components/Breadcrumbs";

export default function BlueBamboo() {
  useEffect(() => {
    document.title = "Blue Bamboo Mykonos Case Study | SensEar Music Curation";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "How SensEar crafted an elevated beach club atmosphere at Blue Bamboo through custom music curation and sonic branding.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add locale and language meta tags
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

    // Add robots meta tag - CASE STUDY: index, follow
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robotsMeta);
    }

    // Add googlebot specific tag
    let googlebotMeta = document.querySelector('meta[name="googlebot"]');
    if (googlebotMeta) {
      googlebotMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.name = 'googlebot';
      googlebotMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(googlebotMeta);
    }

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/blue-bamboo');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/blue-bamboo';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'Blue Bamboo Case Study | SensEar Music Curation' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png' },
    { property: 'og:url', content: 'https://sensear.music/blue-bamboo' },
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

    // Twitter Card tags
    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blue Bamboo Case Study | SensEar Music Curation' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png' }];


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

    // Add structured data
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
      "headline": "Blue Bamboo Case Study | SensEar Music Curation",
      "description": "How SensEar transformed Blue Bamboo Athens with curated music, optimized audio, and strategic sonic branding.",
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
      "datePublished": "2025-01-15",
      "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
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
        "name": "Blue Bamboo",
        "item": "https://sensear.music/blue-bamboo"
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
  }, []);

  const problems = [
  "Background noise was making it difficult for guests to have conversations, leading to a less enjoyable dining experience.",
  "The music didn't align with the natural shifts in energy throughout the day, causing inconsistency in the atmosphere.",
  "Repetitive playlists were leaving staff disengaged and contributing to a flat, predictable mood in the space."];


  const solutions = [
  "Conducted an on-site sound check and optimized speaker positioning to reduce noise interference and improve conversational clarity.",
  "Designed a time-sensitive playlist architecture, with distinct energy shifts mapped to key service phases—from lunch flow to evening peak.",
  "Set up a monthly refresh cycle to keep sound aligned with seasonal menus, mood changes, and staff energy."];


  const results = [
  "A smoother, more intentional soundscape led to longer guest dwell times.",
  "Staff engagement improved, thanks to dynamic playlists that match the pace of service.",
  "The new atmosphere has sparked stronger word-of-mouth and exuberant reviews."];


  return (
    <div className="bg-[#faebe3]">
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white pt-24 md:pt-0"
        style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png')" }}
        role="img"
        aria-label="Elegant Thai restaurant interior with ambient music and sophisticated atmosphere">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up leading-tight">Fine-tuning and harmonizing a Thai dining experience.</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>Discover how we enhanced the atmosphere at Blue Bamboo through expert music curation and soundproofing.</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
        { label: "Case Studies", path: createPageUrl("CaseStudies") },
        { label: "Blue Bamboo", path: createPageUrl("blue-bamboo") }]
        } />
      </div>

      {/* Main Content Section */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Meet Blue Bamboo */}
          <div className="flex items-center gap-4 mb-6 justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg"
              alt="Blue Bamboo logo"
              className="w-20 h-20 rounded-lg object-cover border-2 border-black/10" />
            <h2 className="text-4xl font-bold">Meet Blue Bamboo</h2>
          </div>
          <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            Blue Bamboo is a well-known Thai bar-restaurant in Athens, offering authentic flavors in a lively, modern setting. While its culinary identity was strong, its sonic identity needed refinement to balance energy and comfort.
          </p>
          <div className="max-w-4xl mx-auto px-6 text-center">      
                <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-6">
                  "Our goal was simple: to create an atmosphere where guests could relax, connect, and feel encouraged to stay longer, with music that evolved naturally throughout the day and kept our team energized." – Blue Bamboo Owner
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
                  {problems.map((item, index) =>
                  <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                      <p className="text-black/80">{item}</p>
                    </li>
                  )}
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
                  {solutions.map((item, index) =>
                  <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                      <p className="text-black/80">{item}</p>
                    </li>
                  )}
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
                  {results.map((item, index) =>
                  <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                      <p className="text-black/80">{item}</p>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center">      
                <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-6">
                  "Now, the sound is seamless, the vibe is spot on, and the space finally feels complete." – Blue Bamboo Owner
                </blockquote>
          </div>
          <div className="mt-12 p-6 bg-gray-50 rounded-lg max-w-4xl mx-auto">
            <p className="text-black/80 text-center">
              Blue Bamboo's transformation showcases our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">signature playlists service</Link> combined with <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">professional audio upgrades</Link>. Read more about <Link to={createPageUrl("brand-music-increase-sales")} className="underline hover:text-black font-semibold">how music increases sales</Link> in hospitality.
            </p>
          </div>
        </div>
      </section>

            {/* CTA Section */}
      <section className="py-20 bg-black text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
         <h2 id="cta-footer-heading" className="text-3xl sm:text-4xl font-bold mb-6">Ready to transform your restaurant's atmosphere?</h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8 px-4">
            Discover solutions for <Link to={createPageUrl("hotels-resorts")} className="underline hover:text-white font-semibold">hotels</Link> or other <Link to={createPageUrl("Industries")} className="underline hover:text-white font-semibold">industries we serve</Link>.
          </p>
          <Link to={createPageUrl("ContactUs")}>
            <Button size="lg" className="bg-zinc-50 text-black px-6 py-6 text-sm font-medium leading-tight rounded-md inline-flex items-center justify-center gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 hover:bg-[#f0dfd5] w-full sm:w-auto sm:px-8 sm:text-base md:text-lg whitespace-normal" aria-label="Schedule a restaurant or bar sound consultation">
              Schedule a Restaurant/Bar Sound Consultation
            </Button>
          </Link>
        </div>
      </section>

      <nav className="text-center py-8 bg-[#faebe3]" aria-label="Case studies navigation">
        <Link to={createPageUrl("CaseStudies")}>
          <Button variant="outline" className="bg-transparent text-black mt-2 mb-5 px-4 py-2 text-sm font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border h-10 border-black hover:bg-black hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Return to Case Studies Overview
          </Button>
        </Link>
      </nav>
    </div>);

}