
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import Breadcrumbs from "../components/Breadcrumbs";
import { Home, Briefcase, Building2, FileText, Users, Mail, BookOpen, HelpCircle } from "lucide-react";

export default function Sitemap() {
  useEffect(() => {
    document.title = "Sitemap | SensEar";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Complete sitemap of SensEar's website. Find all our services, industries, case studies, blog posts, and company pages.";
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

    // Add robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow';
      document.head.appendChild(robotsMeta);
    }

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/sitemap');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/sitemap';
      document.head.appendChild(canonicalLink);
    }
  }, []);

  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Home,
      pages: [
        { name: "Home", path: createPageUrl("Home") },
        { name: "Services", path: createPageUrl("Services") },
        { name: "Industries", path: createPageUrl("Industries") },
        { name: "Case Studies", path: createPageUrl("CaseStudies") },
        { name: "About Us", path: createPageUrl("AboutUs") },
        { name: "Contact Us", path: createPageUrl("ContactUs") },
        { name: "Blog", path: createPageUrl("Blog") },
        { name: "FAQ", path: createPageUrl("FAQ") }
      ]
    },
    {
      title: "Services",
      icon: Briefcase,
      pages: [
        { name: "All Services", path: createPageUrl("Services") },
        { name: "Signature Playlists", path: createPageUrl("signature-playlists") },
        { name: "Event Soundtracks", path: createPageUrl("event-soundtracks") },
        { name: "Sonic Strategy", path: createPageUrl("sonic-strategy") },
        { name: "Audio Upgrades", path: createPageUrl("audio-upgrades") }
      ]
    },
    {
      title: "Industries",
      icon: Building2,
      pages: [
        { name: "All Industries", path: createPageUrl("Industries") },
        { name: "Hotels & Resorts", path: createPageUrl("hotels-resorts") },
        { name: "Restaurants & Bars", path: createPageUrl("restaurants-bars") },
        { name: "Retail Stores", path: createPageUrl("retail-stores") },
        { name: "Wellness Centers", path: createPageUrl("wellness-centers") },
        { name: "Events & Experiences", path: createPageUrl("events-experiences") },
        { name: "Art, Museums & Fashion", path: createPageUrl("art-museums-fashion") },
        { name: "Playlists Demos", path: createPageUrl("PlaylistsDemos") }
      ]
    },
    {
      title: "Case Studies",
      icon: FileText,
      pages: [
        { name: "All Case Studies", path: createPageUrl("CaseStudies") },
        { name: "Blue Bamboo", path: createPageUrl("blue-bamboo") },
        { name: "Klouvi", path: createPageUrl("klouvi-bar") }, // Updated name
        { name: "Beach House", path: createPageUrl("beach-house-antiparos") },
        { name: "Pelicanos", path: createPageUrl("pelicanos-sifnos-restaurant") } // Updated name
      ]
    },
    {
      title: "Blog Posts",
      icon: BookOpen,
      pages: [
        { name: "How Top Hospitality Brands Design Their Sound", path: createPageUrl("how-top-hospitality-brands-design-sound") },
        { name: "Three Reasons Music Matters in Hospitality", path: createPageUrl("three-reasons-music-hospitality") },
        { name: "How Brand Music Increases Sales", path: createPageUrl("brand-music-increase-sales") },
        { name: "What Does a Music Curator Do?", path: createPageUrl("what-music-curator-does") },
        { name: "Analyze and Optimize Music Curation", path: createPageUrl("analyze-optimize-music-curation") },
        { name: "Building Your Brand Through Sound", path: createPageUrl("building-managing-brand") },
        { name: "Music Influence on Consumer Behavior", path: createPageUrl("music-influence-consumer-behavior") },
        { name: "Waiting Time Perception & Music", path: createPageUrl("service-environment-waiting-time") }
      ]
    }
  ];

  return (
    <div className="bg-[#faebe3] min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
          { label: "Sitemap", path: createPageUrl("Sitemap") }
        ]} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">Sitemap</h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Explore all pages and resources on SensEar.Music website. Find everything from our <Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">music curation services</Link> to <Link to={createPageUrl("Blog")} className="underline hover:text-black font-semibold">industry insights</Link>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sitemapSections.map((section, index) => (
            <Card key={index} className="p-8 bg-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-black">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.pages.map((page, pageIndex) => (
                  <li key={pageIndex}>
                    <Link 
                      to={page.path}
                      className="text-black/70 hover:text-black hover:translate-x-2 transition-all inline-block"
                    >
                      → {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-black/70 mb-6">
            Can't find what you are looking for? <Link to={createPageUrl("ContactUs")} className="underline hover:text-black font-semibold">Contact us</Link> or check our <Link to={createPageUrl("FAQ")} className="underline hover:text-black font-semibold">FAQ page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
