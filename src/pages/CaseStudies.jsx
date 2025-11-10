
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card"; // CardContent is not directly used after redesign, but Card is.
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // ArrowLeft is removed with the "Return to overview" button
import Breadcrumbs from "../components/Breadcrumbs";

export default function CaseStudies() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Case Studies | SensEar Music Curation Success Stories";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Real success stories from Blue Bamboo, Klouvi Bar, Beach House, and Pelicanos. See how music curation transformed these venues.";
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

    // Add robots meta tag - PRIMARY PAGE: index, follow
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
      canonicalLink.setAttribute('href', 'https://sensear.music/case-studies');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/case-studies';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'Case Studies | SensEar Music Curation Success Stories' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/case-studies' },
    { property: 'og:type', content: 'website' }];


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
    { name: 'twitter:title', content: 'Case Studies | SensEar Music Curation Success Stories' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600&q=80' }];


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
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"]

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

    // Add scroll tracking for parallax effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const caseStudies = [
  {
    title: "Blue Bamboo – Thai Bar Restaurant, Athens",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg",
    heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png",
    challenge: "Blue Bamboo wanted a soundtrack as dynamic as its Thai‑fusion concept—one that transitions naturally with every mood and moment.",
    solution: "We introduced custom, time‑mapped playlists alongside precision acoustic adjustments, ensuring the music perfectly mirrors each phase of the evening.",
    effect: "Atmosphere and engagement soared in harmony, with guests drawn in by the round‑the‑clock soundtrack that feels uniquely Blue Bamboo.",
    link: createPageUrl("blue-bamboo"),
    alt: "Blue Bamboo Thai restaurant with curated music atmosphere"
  },
  {
    title: "Klouvi Bar – Defining a Sonic Identity, Athens",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg",
    heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/525fca5be_klouvi-photo-collage.png",
    challenge: "Klouvi Bar needed a unified sonic identity to guide its atmosphere through every service period, without the unexpected shifts in energy.",
    solution: "We introduced custom, day‑mapped playlists with smooth cross-fades, tuned to the venue's natural ebb and flow.",
    effect: "The bar's atmosphere found its signature sound, drawing patrons into a smooth experience that keeps them engaged from first sip to last call.",
    link: createPageUrl("klouvi-bar"),
    alt: "Klouvi Bar Athens with signature music curation"
  },
  {
    title: "Beach House – Antiparos Luxury Sonic Experience",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg",
    heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png",
    challenge: "Beach House's diverse spaces required individual soundtracks but without feeling disconnected, as guests moved through beach, dining, and retail.",
    solution: "We designed a multi‑zone setup and curated premium playlists for each setting, seamlessly blending transitions, so the music adapts to every moment and locale.",
    effect: "The property's audio narrative now captivating guests at every turn, creating memorable moments that resonate long after they've left.",
    link: createPageUrl("beach-house-antiparos"),
    alt: "Beach House Antiparos with multi-zone music curation"
  },
  {
    title: "Pelicanos – Sifnos Modern Mediterranean Restaurant",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg",
    heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1665d6381_pelicanos-photo-collage.png",
    challenge: "With its newly reimagined menu, Pelicanos needed a signature sound to underscore its modern Mediterranean identity, balancing Sifnos' timeless charm and contemporary flair, with freshly discovered hidden gem tracks.",
    solution: "We crafted bespoke playlists that evolve and flow with the island's mood, blending sunny lounge grooves, spirited dining beats, and breezy melodies to suit every moment.",
    effect: "Guests settled into longer, more memorable meals, and word‑of‑mouth buzz about the restaurant's captivating atmosphere increased.",
    link: createPageUrl("pelicanos-sifnos-restaurant"),
    alt: "Pelicanos Sifnos restaurant with curated Mediterranean music"
  }];


  return (
    <div className="bg-[#faebe3] font-sans">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden pt-32 md:pt-0"
        role="img"
        aria-label="Professional music curation success stories and case study showcase">

        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: "url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/73ec5d36a_pxbee_2025-10-16_20-23-07.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up lg:text-6xl">
            Listen to our clients' brand stories unfold through sound
          </h1>
          <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Dive into the world of SensEar, where curated music redefined experiences, enhanced performance and turned moments into unforgettable customer journeys. Learn how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-white">signature playlists</Link> and <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-white">sonic strategy services</Link> have transformed venues across Greece.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
        { label: "Case Studies", path: createPageUrl("CaseStudies") }]
        } />
      </div>

      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="case-studies-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="case-studies-heading" className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            From Vision to Reality: SensEar in Action
          </h2>
          <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto text-lg">
            Each project showcases our approach to <Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">music curation excellence</Link>. From <Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black font-semibold">restaurants and bars</Link> to <Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black font-semibold">luxury resorts</Link>, see how we create unforgettable sonic experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8" role="list">
            {caseStudies.map((study, index) =>
            <article key={index}>
                <Link to={study.link} aria-label={`Read full story about ${study.title}`}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                      src={study.heroImage}
                      alt={study.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" aria-hidden="true" />
                      
                      <div className="absolute top-4 left-4">
                        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg" aria-hidden="true">
                          <img
                          src={study.logo}
                          alt={`${study.title} logo`}
                          className="w-14 h-14 rounded-full object-cover" />

                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-black/80 transition-colors">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-4 text-black/80 text-sm">
                        <div>
                          <h4 className="font-bold text-black mb-1">The Challenge</h4>
                          <p>{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">The Solution</h4>
                          <p>{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">The SensEar Effect</h4>
                          <p>{study.effect}</p>
                        </div>
                      </div>

                      <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform mt-6">
                        <span>Read Full Story</span>
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </article>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <div className="bg-black text-white p-12 rounded-xl" aria-labelledby="cta-heading">
              <div className="text-center">
                <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-6">Interested in similar results?</h2>
                <p className="text-lg sm:text-xl text-white/80 mb-8 px-4">
                  Explore our <Link to={createPageUrl("Industries")} className="underline hover:text-white font-semibold">industry-specific solutions</Link> or <Link to={createPageUrl("ContactUs")} className="underline hover:text-white font-semibold">schedule a consultation</Link> to discuss your project.
                </p>
                <Link to={createPageUrl("ContactUs")}>
                  <Button size="lg" className="bg-zinc-50 text-black px-6 py-6 text-sm font-medium leading-tight rounded-md inline-flex items-center justify-center gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 hover:bg-[#f0dfd5] w-full sm:w-auto sm:px-8 sm:text-base md:text-lg whitespace-normal" aria-label="Schedule a consultation">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}