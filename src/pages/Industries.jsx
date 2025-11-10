
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, UtensilsCrossed, ShoppingBag, Sparkles, PartyPopper, ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Industries() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Industries We Serve | SensEar Music Curation";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Specialized music solutions for hotels, restaurants, retail, wellness centers, and events. Tailored soundscapes for your industry. Explore our expertise.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/industries');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/industries';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'Industries We Serve | SensEar Music Curation' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9d2f2d966_a_warm_and_inviting_restaurant_with_soft_lighting_and_a_vibrant_but_not_o-dalle.jpg' },
    { property: 'og:url', content: 'https://sensear.music/industries' }];


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
    { name: 'twitter:title', content: 'Industries We Serve | SensEar Music Curation' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9d2f2d966_a_warm_and_inviting_restaurant_with_soft_lighting_and_a_vibrant_but_not_o-dalle.jpg' }];


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
        "name": "Industries",
        "item": "https://sensear.music/industries"
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

  return (
    <div className="bg-[#faebe3] font-sans">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-24 md:pt-0"
        role="img"
        aria-label="Modern business meeting space showcasing music curation for various industries">

        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Curated sonic experiences tailored to your industry
          </h1>
          <p className="text-xl text-white/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We craft industry‑specific soundscapes that put your visitors & employees in a perfectly tuned atmosphere.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
        { label: "Industries", path: createPageUrl("Industries") }]
        } />
      </div>

      {/* Industries Grid */}
      <section className="py-20 bg-[#faebe3]" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="industries-heading" className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
            Strategic Sound for Hospitality, Retail & Wellness
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {[
            {
              icon: Building2,
              title: "Hotels & Resorts",
              description: "Guide your guests through a day of sonic luxury, with music matched perfectly to every phase of the day, venue and mood, so each moment becomes a lasting memory.",
              link: createPageUrl("hotels-resorts"),
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png",
              alt: "Luxury hotel lobby with elegant music atmosphere and sound design"
            },
            {
              icon: UtensilsCrossed,
              title: "Restaurants & Bars",
              description: "Our bespoke playlists spice up every sip and bite, creating the perfect audio setting to lift the spirit, encourage longer stays & turn first time diners into regulars.",
              link: createPageUrl("restaurants-bars"),
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg",
              alt: "Upscale restaurant interior with curated background music ambiance"
            },
            {
              icon: ShoppingBag,
              title: "Retail Stores",
              description: "Our curated music strategy weaves your brand identity, inviting customers to stay longer, discover more, and become devoted clients.",
              link: createPageUrl("retail-stores"),
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg",
              alt: "Modern retail store showcasing music curation for enhanced shopping experience"
            },
            {
              icon: Sparkles,
              title: "Wellness Centers",
              description: "Surround your guests with harmonies designed to melt away tension and guide them in revitalizing peace, enhancing the impact of each session.",
              link: createPageUrl("wellness-centers"),
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3b2d2e497_Shade-by-Starpool-Design-Cristiano-Mino-.jpg",
              alt: "Serene wellness center spa with therapeutic ambient music soundscape"
            },
            {
              icon: PartyPopper,
              title: "Events & Experiences",
              description: "We create tailored audio journeys for events of all sizes, turning each toast and dance into a musical fabric of togetherness.",
              link: createPageUrl("events-experiences"),
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg",
              alt: "Professional event venue with immersive audio and music production setup"
            },
            {
              icon: Sparkles,
              title: "Art, Museums & Fashion",
              description: "From gallery openings to fashion show finales, we build living soundtracks that feel intentional, human, and precisely on-brand.",
              link: createPageUrl("art-museums-fashion"),
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg",
              alt: "Art museum and fashion exhibition with curated music atmosphere"
            }].
            map((industry, index) =>
            <article key={index} role="listitem">
                <Link to={industry.link} aria-label={`Learn more about ${industry.title} music curation services`}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                      src={industry.image}
                      srcSet={`${industry.image.replace('w=800', 'w=800')} 800w,
                                ${industry.image.replace('w=800', 'w=1200')} 1200w`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={industry.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
                      
                      <div className="absolute top-4 left-4">
                        <div className="bg-red-50 text-black opacity-80 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                          <industry.icon className="w-7 h-7 text-black" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-black/70 mb-4">
                        {industry.description}
                      </p>
                      <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                        <span>Explore Solutions</span>
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </article>
            )}
          </div>
          <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto text-lg mt-12">
            Every industry has unique soundscape needs. Discover how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">signature playlists</Link> and <Link to={createPageUrl("event-soundtracks")} className="underline hover:text-black font-semibold">event services</Link> can transform your space. Learn from our <Link to={createPageUrl("AboutUs")} className="underline hover:text-black font-semibold">experienced team</Link>.
          </p>
        </div>
      </section>

      {/* Playlists Demos Section */}
      <section className="py-20 bg-white" aria-labelledby="playlists-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="playlists-heading" className="text-4xl font-bold text-black mb-6">
            Experience Our Signature Sound
          </h2>
          <p className="text-xl text-black/70 mb-8">
            Listen to curated playlist demos tailored for different hospitality environments. Discover how our music curation transforms spaces with thoughtful pacing and brand-targeted storytelling.
          </p>
          <Link to={createPageUrl("PlaylistsDemos")}>
            <Button size="lg" className="bg-black hover:bg-black/80 text-white px-8 py-4 text-lg group">
              Listen to Playlist Demos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      
    </div>);
}
