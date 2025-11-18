import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function EventsExperiences() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music for Events & Experiences Audio | SensEar Music Solutions";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Custom event soundtracks and AV production. Professional DJ programming and immersive audio experiences for unforgettable events.";
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
    const pageUrl = 'https://sensear.music/music-for-events-experiences';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', pageUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = pageUrl;
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogImage = 'https://images.unsplash.com/photo-1549449339-01069c9a7217?w=1600&q=80';
    const ogTitle = 'Music for Events & Experiences Audio | SensEar Music Solutions';
    const ogTags = [
    { property: 'og:title', content: ogTitle },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:url', content: pageUrl },
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
    { name: 'twitter:title', content: ogTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage }];


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
      "name": "Music for Events & Experiences",
      "description": "Your all-in-one music enabler for your event's music and AV production needs.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Music for Events & Experiences",
      "audience": {
        "@type": "Audience",
        "audienceType": "Music for Events and Experiences"
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
        "name": "Music for Events & Experiences",
        "item": "https://sensear.music/music-for-events-experiences"
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

      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Events & Experiences section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Music for events & experiences<br />
              that guests feel & remember
            </h1>
            
            <div className="mb-8 max-w-4xl slide-up-2">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                At events, sound is the glue between moments. SensEar designs custom event soundtracks, conference music & wedding playlists so every phase feels intentional, from doors open to last track.
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Large-scale event production with professional AV and music curation services"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Large-scale event production with professional AV and music curation services"
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
        { label: "Industries", path: createPageUrl("Industries") },
        { label: "Music for Events & Experiences", path: createPageUrl("events-experiences") }]
        } />
      </div> */}

      {/* Who is this for */}
      <section className="py-20 bg-black" aria-labelledby="who-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="who-heading" className="text-3xl font-bold text-center mb-6 text-white leading-[1.25]">Who this is for</h2>
          <p className="text-center text-white/70 mb-8 max-w-3xl mx-auto">
            Events & experiences where sound should feel as designed as everything else:
          </p>
          <ul className="space-y-4 max-w-3xl mx-auto" role="list">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Hotels, resorts & restaurants that host live events or ambient experiences</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Event organisers & creative agencies designing immersive activations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Private chefs, curators & professionals offering personalised or ceremonial dining</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Cultural venues, fashion shows, galleries & concept spaces seeking a sonic identity</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Brands or individuals who know sound defines the experience</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Industry-specific challenges */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="challenges-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="challenges-heading" className="text-4xl font-bold text-center mb-6 leading-[1.25]">Industry-specific challenges</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/72affbd7e_a4f32fd29f6b2f75dae0c99d5942d2c8.jpg" 
                alt="Event atmosphere challenge" 
                className="w-full h-auto rounded-2xl shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">The copy-paste playlist problem</h3>
              <p className="text-black/70 leading-relaxed">
                Generic playlists make your event feel like any other night. The soundtrack never quite fits the concept, the crowd or the moment you're trying to create.
              </p>
            </div>

            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/604e3a452_2eb02f6aa00cbdc92f835b115166f9fb.jpg" 
                alt="Event technical challenge" 
                className="w-full h-auto rounded-2xl shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-3">The soundcheck anxiety</h3>
              <p className="text-black/70 leading-relaxed">
                You worry about volume jumps, feedback, dead zones or tracks cutting out right when things get emotional. Instead of being present, you're listening for problems.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">The vendor tangle</h3>
              <p className="text-black/70 leading-relaxed">
                DJ, AV, venue & live acts all manage a piece of the puzzle. You spend time chasing updates & solving clashes instead of shaping the experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">The flat in-between moments</h3>
              <p className="text-black/70 leading-relaxed">
                Energy dips between talks, courses or segments. Guests scroll their phones instead of feeling carried through the story you planned.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">The one-size-fits-all soundtrack</h3>
              <p className="text-black/70 leading-relaxed">
                Pre-made playlists don't respect pacing, timing or key moments. The same mood runs through welcome drinks, main stage & closing, so nothing really lands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How SensEar solves this */}
      <section className="py-24 bg-white" aria-labelledby="solutions-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="solutions-heading" className="text-4xl font-bold text-center mb-12 leading-[1.25]">How SensEar solves this</h2>
          
          <div className="space-y-12">
            <article>
              <h3 className="text-2xl font-bold mb-3">Run-of-show sound design</h3>
              <p className="text-black/70 leading-relaxed">
                We design custom, multi-chapter soundtracks mapped to your run-of-show, from arrival & welcome to peak moments & final track. Each segment gets its own arc, whether it's conference music, a launch, or a wedding dinner.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-bold mb-3">Story-driven event soundtracks</h3>
              <p className="text-black/70 leading-relaxed">
                Our curators craft dynamic, story-driven musical journeys that fit your theme, brand & guests. Music evolves as the night progresses so people feel guided, not just entertained.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-bold mb-3">Technical reliability & AV supervision</h3>
              <p className="text-black/70 leading-relaxed">
                Our engineers hand-pick equipment, tune levels & manage playback with optimised arrays & time alignment, so there are no dead zones, sudden jumps or surprises. What guests hear stays clear, even & present.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-bold mb-3">One point of contact for sound & AV</h3>
              <p className="text-black/70 leading-relaxed">
                We coordinate music curation & AV production, working directly with your venue, DJ, bands & producers. You talk to one team that understands both creative vision & technical detail.
              </p>
            </article>

            <article>
              <h3 className="text-2xl font-bold mb-3">Pre, during & post-event support</h3>
              <p className="text-black/70 leading-relaxed">
                From advance planning & soundchecks to live supervision & final fade-out, we stay with you. We prepare backups & contingency plans so last-minute changes or extra speeches stay smooth.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="benefits-heading" className="text-4xl font-bold text-center mb-12 leading-[1.25]">Key benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Events that feel like experiences, not schedules</h3>
              <p className="text-black/70 leading-relaxed">
                Guests feel guided from welcome to finale, with music that frames each moment instead of just filling silence.
              </p>
            </article>

            <article className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Stronger engagement & reactions</h3>
              <p className="text-black/70 leading-relaxed">
                Carefully timed shifts in energy help people listen, connect, share & remember, making your event more photogenic, "postable" & talk-worthy.
              </p>
            </article>

            <article className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Less stress for organisers & hosts</h3>
              <p className="text-black/70 leading-relaxed">
                You have one partner for music & AV, clear decisions & fewer moving parts to manage on the day.
              </p>
            </article>

            <article className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">A repeatable sonic blueprint</h3>
              <p className="text-black/70 leading-relaxed">
                Once we design what works, you can adapt the same sonic framework for future editions, cities or client events.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-24 bg-white" aria-labelledby="social-proof-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="social-proof-heading" className="text-4xl font-bold text-center mb-12 leading-[1.25]">Social proof</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed">
                Brands, venues & creators trust SensEar to make sound a core part of their experiences. From intimate island dinners to city launches, our event soundtracks have turned carefully planned gatherings into nights guests still talk about long after they end.
              </p>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f202eaf0e_410494315_375848528274698_8398961206007741661_ncropped.jpg"
                alt="SensEar event experience social proof"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hear this industry in action */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="demo-heading">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 id="demo-heading" className="text-4xl font-bold mb-6 leading-[1.25]">Hear this industry in action</h2>
          <p className="text-xl text-black/70 mb-8">
            Listen to a curated demo playlist for events & experiences
          </p>
          <Link to={createPageUrl("PlaylistsDemos")}>
            <Button size="lg" className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg font-semibold" aria-label="Explore demo playlists">
              Explore Demo Playlists
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-white mb-6 leading-[1.25]">
            Ready to plan the sound for your next event or experience?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            We review your concept, venue & run-of-show, then propose a tailored event soundtrack & AV approach that keeps guests immersed from first arrival to final goodbye.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-semibold" aria-label="Book a music consultation">
                Book a Music Consultation
              </Button>
            </Link>
          </div>
          <p className="text-white/60 mt-8">
            <span>Explore how our </span><Link to={createPageUrl("event-soundtracks")} className="underline hover:text-white font-semibold">Event Soundtracks</Link><span> & </span><Link to={createPageUrl("signature-playlists")} className="underline hover:text-white font-semibold">Signature Playlists</Link><span> support events & experiences</span>
          </p>
        </div>
      </section>
    </div>);
}