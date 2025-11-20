import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function SonicStrategy() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Sonic Strategy & Audio Branding | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Develop your brand's sonic identity. Strategic audio branding and sound design that defines how your brand should feel and be remembered.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/sonic-strategy');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/sonic-strategy';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Sonic Strategy & Audio Branding | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg' },
    { property: 'og:url', content: 'https://sensear.music/sonic-strategy' }];

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
    { name: 'twitter:title', content: 'Sonic Strategy & Audio Branding | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg' }];

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
      "@type": "Service",
      "name": "Sonic Strategy",
      "description": "Strategic audio branding and sonic identity development that defines how your brand should sound and be remembered.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Audio Branding Strategy"
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Sonic Strategy",
        "item": "https://sensear.music/sonic-strategy"
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Sonic Strategy section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Sonic strategy that defines<br />how your brand should sound
            </h1>
          </div>
        </div>

        {/* Hero Image with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg"
                alt="Sonic strategy and audio branding for brands"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg"
                alt="Sonic strategy and audio branding for brands"
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

      {/* Intro Section - Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="lg:order-2 lg:min-w-[280px]">
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-8 lg:mb-0">
                What is it
              </h2>
            </div>
            
            <div className="lg:order-1 lg:mt-[116px]">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Sonic Strategy is your sound blueprint for how your brand should feel and be remembered through music.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                We translate your brand vision into a clear, practical audio identity you can roll out across spaces, channels and locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">Who this is for</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-black/80 mb-6">Sonic Strategy is ideal when you want your sound to feel as considered as your design and service:</p>
              <ul className="space-y-6 text-lg text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Hotels and resort groups that need one recognisable sound across properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Restaurant, bar and retail brands that are growing, rebranding or opening new sites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Wellness, cultural and fashion spaces that want a defined sonic personality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Teams with a strong brand vision but no in house sound expertise or time to shape it in music</span>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <div className="w-[85%] mx-auto">
                <img
                  src="PLACEHOLDER_IMAGE_1"
                  alt="Brand sonic identity development"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-right">What you get</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <img
                src="PLACEHOLDER_IMAGE_2"
                alt="Sonic DNA workshop and brand audio strategy"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Sonic DNA workshop</h3>
                <p className="text-lg text-black/70">A guided session with your team where we explore brand values, guest profiles and emotional targets, using mood boards and reference tracks to outline your sonic personality.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Space and journey sound map</h3>
                <p className="text-lg text-black/70">A plan for how each space and daypart should sound, including how music supports arrivals, service flow and key guest touchpoints.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Sonic rebranding roadmap</h3>
                <p className="text-lg text-black/70">A clear path to shift from your current sound to the new one, aligned with your brand calendar and marketing goals, whether you are launching or reinventing a venue.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Guidelines for teams and partners</h3>
                <p className="text-lg text-black/70">Concise sonic guidelines that make it easy for internal teams, agencies and curators to keep music choices on brand over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">How it works</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Listen and map</h3>
                <p className="text-lg text-black/70">We meet your team, review your brand, spaces and plans, then map where sound matters most in your guest and customer journeys.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Design and test</h3>
                <p className="text-lg text-black/70">We develop your sonic concept, mood boards and audio demos so you can hear how the strategy feels in real scenarios before you commit.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Document and support</h3>
                <p className="text-lg text-black/70">We deliver your sonic strategy, guidelines and roadmap, then support implementation through playlists, events or audio upgrades when needed.</p>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="PLACEHOLDER_IMAGE_3"
                alt="Sonic strategy implementation process"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why this helps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-right">Why this helps</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <img
                src="PLACEHOLDER_IMAGE_4"
                alt="Brand audio identity benefits"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Flat or forgettable atmosphere gains depth</h3>
                <p className="text-lg text-black/70">Spaces that felt visually strong but sonically weak get a sound layer that adds emotion, texture and memory.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Locations sound coherent without losing character</h3>
                <p className="text-lg text-black/70">Multi site brands stop sounding random from one venue to the next. You get a shared backbone with room for local details where it matters.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Music starts to reflect who you are</h3>
                <p className="text-lg text-black/70">Generic playlists and ad based radio give way to a sonic language that speaks your brand clearly at every touchpoint.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Teams have structure instead of improvising</h3>
                <p className="text-lg text-black/70">Instead of many hands on the playlist, you have a simple framework that guides choices, briefs partners and keeps decisions aligned.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof in practice */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">How others use it</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed mb-6">
                Hotel groups, restaurant brands, retailers and cultural spaces use Sonic Strategy as the master plan behind their playlists, events and audio upgrades.
              </p>
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed">
                It helps them keep new openings, campaigns and everyday service sounding like one story, no matter where guests meet the brand.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="w-[85%] mx-auto">
                <img
                  src="PLACEHOLDER_IMAGE_5"
                  alt="Multi-location brand sonic consistency"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to define your brand's sonic identity?</h2>
          <p className="text-xl text-black/70 mb-8">
            Let us translate your brand vision into a clear, practical audio strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg">
                Start your sonic strategy
              </Button>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Signature Playlists</Link> & <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Audio Upgrades</Link> bring your strategy to life.
          </p>
        </div>
      </section>
    </div>
  );
}