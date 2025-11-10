import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function RetailStores() {
  useEffect(() => {
    document.title = "Retail Store Music Solutions | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Strategic retail music curation that increases customer engagement and sales. Create memorable shopping experiences with sonic branding.";
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

    // Add robots meta tag - INDUSTRY PAGE: index, follow
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
      canonicalLink.setAttribute('href', 'https://sensear.music/retail-stores');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/retail-stores';
      document.head.appendChild(canonicalLink);
    }

    // New image URL for Open Graph and Twitter
    const newImageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg';

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'Retail Store Music Solutions | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: newImageUrl },
    { property: 'og:url', content: 'https://sensear.music/retail-stores' },
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
    { name: 'twitter:title', content: 'Retail Store Music Solutions | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: newImageUrl }];


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
      "@type": "Service",
      "name": "Retail Store Music Curation",
      "description": "Attract, engage and elevate the atmosphere of your retail store with the right sound atmospherics that influence shopping decision-making.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Retail Music Curation",
      "audience": {
        "@type": "Audience",
        "audienceType": "Retail Stores"
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
        "name": "Industries",
        "item": "https://sensear.music/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Retail Stores",
        "item": "https://sensear.music/retail-stores"
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
  { title: "Low Customer Engagement", description: "We create welcoming auditory experiences that draw people in." },
  { title: "Lack of Purchase Motivation", description: "Our curated tracks inspire the right mood to drive buying decisions." },
  { title: "Weak Brand Recall", description: "We craft signature sounds that make your brand memorable." }];

  return (
    <div className="bg-[#faebe3]">
      <section
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center text-white pt-24 md:pt-0"
        style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg')" }}
        role="img"
        aria-label="Modern retail store with strategic music curation influencing shopping behavior">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 animate-fade-in-up leading-tight">Attract, engage &amp; elevate the atmosphere of your retail store</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/80 px-4 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>Transform shopping experiences with the right sound atmospherics that influences shopping decision-making.</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
        { label: "Industries", path: createPageUrl("Industries") },
        { label: "Retail Stores", path: createPageUrl("retail-stores") }]
        } />
      </div>

      <section className="py-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="problems-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="problems-heading" className="text-2xl sm:text-3xl font-bold text-black text-center mb-6">Problems We Solve</h2>
            <p className="text-center text-black/70 mb-10 max-w-3xl mx-auto px-4">
              Studies show that the right background music increases customer dwell time and boosts sales. SensEar designs music solutions that enhance the shopping experience and create emotional connections between customers and brands.
            </p>
            <div className="grid md:grid-cols-2 gap-8" role="list">
              {problems.map((p) =>
            <article key={p.title} role="listitem" className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{p.title}</h3>
                      <p className="text-sm sm:text-base text-black/70">{p.description}</p>
                    </div>
                  </div>
                </article>
            )}
            </div>
            <div className="text-center mt-16">
              <p className="text-black/70 mb-6 px-4">
                See solutions for other <Link to={createPageUrl("Industries")} className="underline hover:text-black font-semibold">industries we serve</Link> or explore our <Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">full service range</Link>.
              </p>
              <Link to={createPageUrl("ContactUs")}>
                <Button size="lg" className="bg-black text-white hover:bg-black/80 w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg whitespace-normal" aria-label="Schedule a retail store sound consultation">Schedule a Retail Store Sound Consultation</Button>
              </Link>
            </div>
        </div>
      </section>
    </div>);

}