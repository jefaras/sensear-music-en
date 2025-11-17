import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function HotelsResorts() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music Curation for Hotels & Resorts | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Elevate guest experiences with bespoke hotel music curation. Custom playlists that enhance ambiance and boost satisfaction scores.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/hotels-resorts');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/hotels-resorts';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Music Curation for Hotels & Resorts | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/hotels-resorts' },
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

    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Music Curation for Hotels & Resorts | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80' }];

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
      "name": "Hotel & Resort Music Curation",
      "description": "Hand-picked playlists that flow effortlessly from sunrise to sunset, crafted exclusively to elevate each hour of the day for hotels and resorts.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Hospitality Music Curation",
      "audience": {
        "@type": "Audience",
        "audienceType": "Hotels and Resorts"
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
        "name": "Hotels & Resorts",
        "item": "https://sensear.music/hotels-resorts"
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

      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Hotels & Resorts section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Music for hotels & resorts that lifts guest satisfaction and repeat visits
            </h1>
          </div>
        </div>

        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Luxury hotel resort lobby with curated music ambiance and elegant hospitality design"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Luxury hotel resort lobby with curated music ambiance and elegant hospitality design"
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
      <section className="bg-black py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
            Your hotel's sound is often the first thing guests feel. 
            The right hotel background music impacts how long they stay, their ratings, and if they will visit again. SensEar designs evolving soundscapes for every space and hour, so music becomes a quiet source of reviews, revenue and reputation.
          </p>
        </div>
      </section>

      {/* Who is hotel music for */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Who is hotel music for</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-xl text-black/80 mb-6">Hotels and resorts that want music to work as part of the guest experience:</p>
              <ul className="space-y-4 text-lg text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Boutique hotels that live on word of mouth and atmosphere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Luxury resorts that need coherent sound from lobby to pool, spa and suites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Business hotels that switch from focused daytime to social evenings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Branded groups that want a consistent audio identity across locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Properties that host weddings, retreats or conferences and need special soundscapes</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/38fbe55aa_3ee69fa2c5ac47509c6d1d927c51b21c.jpg"
                alt="Luxury hotel terrace with elegant atmosphere"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
        { label: "Industries", path: createPageUrl("Industries") },
        { label: "Hotels & Resorts", path: createPageUrl("hotels-resorts") }]
        } />
      </div> */}

      {/* Industry Specific Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Industry specific challenges</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d8d6391d9_3830d5bbb709e891ec72b2509c0455db.jpg"
                alt="Modern hotel bar interior with ambient lighting"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The morning to midnight challenge</h3>
                <p className="text-lg text-black/70">Breakfast, check in, sunset drinks and late nights all need different energy. One static playlist that works at 7:00 feels wrong by lunchtime or cocktail hour. Guests feel the mismatch even if they cannot name it.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The multi zone confusion</h3>
                <p className="text-lg text-black/70">Lobby, restaurant, bar, spa and pool often run their own playlists with no shared logic. The hotel starts to feel like several brands stitched together, not one continuous experience.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The brand disconnect</h3>
                <p className="text-lg text-black/70">You invest in interiors and service, but generic background music or staff phones on shuffle tell a different story. Guests feel "any hotel" instead of your hotel.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The manual playlist headache</h3>
                <p className="text-lg text-black/70">Staff keep changing tracks from consumer apps that are not licensed for public spaces. Songs repeat, volume jumps, and no one is really accountable for the result.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Acoustically dead or noisy areas</h3>
                <p className="text-lg text-black/70">Some corners feel flat and dull, others are harsh and tiring. Layout, materials and crowd noise create pockets where the music either disappears or becomes tiring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How SensEar Solves This */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">How SensEar solves this</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">24 hour journey mapping</h3>
                <p className="text-lg text-black/70">We design music journeys that follow the natural rhythm of your property. Morning sets welcome gently, daytime supports flow, and evening playlists add warmth and intimacy without feeling repetitive.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Zone specific curation with one identity</h3>
                <p className="text-lg text-black/70">Our curators build distinct soundscapes for lobby, bar, restaurant, spa and pool, all tied together by a shared sonic identity. Guests feel smooth changes in mood as they move through your spaces, not jarring jumps.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Signature playlists that fit your brand</h3>
                <p className="text-lg text-black/70">We translate your brand values into sound and build private, hotel only playlists instead of generic mixes. Your lobby and lounge music sound as custom as your interiors.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Central control instead of staff DJing</h3>
                <p className="text-lg text-black/70">Scheduling, updates and volume rules are managed centrally, across one or several locations. Staff are freed from playlist duty and your music stays compliant with commercial licensing.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Sound tuned to your spaces</h3>
                <p className="text-lg text-black/70">We take acoustics into account when we design playlists and system settings, so the lobby feels warm rather than echoey and quiet corners stay intimate rather than silent.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Strategy for groups and new openings</h3>
                <p className="text-lg text-black/70">For hotel brands and resort groups, we develop a clear sonic strategy that defines how your properties should sound, then roll it out across locations and new openings with local nuances built in.</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0dd5f695_13e97d3def8d47a1efe25c37e0f29eb2.jpg"
                alt="Luxury hotel pool terrace overlooking the ocean"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Key benefits</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/95c488ed9_silver-ear-ear-ring.jpg"
                alt="Silver ear sculpture representing listening and sonic branding"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Higher guest satisfaction</h3>
                <p className="text-lg text-white/80">Music becomes one of the reasons guests describe your hotel as relaxing, lively or atmospheric, supporting higher ambience and overall satisfaction scores.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">More time spent in your spaces</h3>
                <p className="text-lg text-white/80">Guests settle into the lobby, bar and restaurant because the atmosphere feels right at every moment, which supports F&B revenue and secondary spend. Field research shows brand aligned music can increase sales in hospitality venues by around 9.1%.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Consistent brand experience across zones and locations</h3>
                <p className="text-lg text-white/80">Lobby, spa, pool and bar all tell the same story as your interiors and service standards, from one property to the next.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Less operational hassle and legal peace of mind</h3>
                <p className="text-lg text-white/80">Staff no longer juggle playlists or worry about volume, and you rely on properly licensed music instead of consumer apps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed">
            Beach House Antiparos used SensEar to give its beach, dining and retail areas their own sound while keeping one coherent story. The multi zone music now adapts to every moment and locale, creating memorable stays guests talk about long after they leave.
          </p>
        </div>
      </section>

      {/* Hear this industry in action */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Hear this industry in action</h2>
          <p className="text-xl text-black/70 mb-8">Listen to a curated demo playlist for hotels and resorts</p>
          <Link to={createPageUrl("PlaylistsDemos")}>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white">
              Explore Demo Playlists
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your hotel's atmosphere with better music?</h2>
          <p className="text-xl text-white/80 mb-8">
            We will review your current music setup, map your guest journey and propose a tailored sound approach for your property or group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg">
                Book a music consultation
              </Button>
            </Link>
          </div>
          <p className="text-white/70 mt-8">
            Explore how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-white font-semibold">Signature Playlists</Link> and <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-white font-semibold">Sonic Strategy</Link> work for hotels & resorts.
          </p>
        </div>
      </section>
    </div>
  );
}