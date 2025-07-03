"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Mail } from 'lucide-react'
import Image from 'next/image'


gsap.registerPlugin(ScrollTrigger)

const slides = [
  {
    title: "We build fast, beautiful websites.",
    content: null
  },
  {
    title: "Here is how we can help and some things we have noticed",
    content: null
  },
  {
    title: "Colour Palette",
    content: "The turquoise, while vibrant, can be somewhat harsh on the eyes, especially against the dark blue/navy background. <br> This contrast may reduce readability and create visual fatigue over time. I recommend replacing the turquoise with a softer, more complementary color such as Light Gray-Blue (#A7C7E7) or Muted Teal (#5F9EA0)",
    image: "/colourrecommendations.png"
  },
  {
    title: "Typography",
    content: `To further refine  professionalism and readability, I recommend streamlining the typography and spacing for a cleaner, more cohesive layout. Currently, the formatting varies in font sizes, spacing, and hierarchy, which can distract from the content&apos;s clarity.
<br>
Proposed Adjustments:<br>
<li> Limit Text Styles to Three Levels </li> 
<li>  Consistent Spacing </li> 
<li>  Hierarchy Fixes </li>  `,
  },
  {
    title: "Navigation",
    content: `Problem: <br>
<li> The "Flow-Through LPs" list dominates the dropdown </li>
<li> Other key products get visually buried</li><br>

Solution: Nested Grouping<br>
<li>Collapse repetitive listings under expandable categories</li>
<li>Benefits: Shorter dropdown, clearer hierarchy, mobile-friendly</li>`,
  },
  {
    title: "Documents Div",
    content: `Current Problem:<br>
<li> 1/3-width layout leaves empty space </li>
<li> Duplicate content</li><br>

Proposed Fix:<br>
<li>Switch to 1/2-width layout </li>
<li> Remove empty sections </li>
<li> Reorganize document structure</li>`,
    image: "/importantdocuments.png"
  },
  {
    title: `We&apos;re Palomino. Let&apos;s fix it together.`,
    content: null
  },
]

const projects = [
  { name: 'Doane Grant Thornton', url: 'https://www.doanegrantthornton.ca/', image: "/Dgt.png" },
  { name: 'Banyan Community Services', url: 'https://banyancommunityservices.org/', image: "/banyan.png" },
  { name: 'Neighbourly Pharmacy', url: 'https://www.neighbourlypharmacy.ca/', image: "/nbly.png" },
  { name: 'Savaria', url: 'https://www.savaria.com/?lang=en', image: "/Savaria.png" },
]

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".panel");

    sections.forEach((panel) => {
      gsap.fromTo(panel,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">

      {slides.map((slide, i) => (
        <section
          key={i}
          className="panel h-screen flex flex-col items-center justify-center px-4 bg-black"
          style={{ willChange: 'transform' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center text-stone-100 max-w-4xl leading-tight mb-8">
            {slide.title}
          </h1>
          
          {slide.content && (
            <div className="max-w-4xl w-full mx-auto mt-8 p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl">
              {slide.image && (
                <div className="mb-6">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={800}
                    height={450}
                    className="w-full h-auto rounded-lg object-contain max-h-[300px]"
                  />
                </div>
              )}
              <p 
                className="text-stone-200 text-base md:text-lg leading-relaxed [&>span]:font-serif [&>span]:italic"
                dangerouslySetInnerHTML={{ __html: slide.content }}
              />
            </div>
          )}
        </section>
      ))}


      <section className="panel h-screen flex flex-col items-center justify-center px-4 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-stone-100 max-w-4xl leading-tight mb-8">
          Sites We&apos;ve Built
        </h1>
        <div className="max-w-4xl w-full mx-auto mt-8 p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <a
                key={`project-${i}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                {project.image && (
                  <div className="mb-4">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg object-contain max-h-[150px]"
                    />
                  </div>
                )}
                <h2 className="text-xl md:text-2xl font-bold text-stone-100">
                  {project.name}
                </h2>
              </a>
            ))}
          </div>
        </div>
      </section>

      
      <section className="panel h-screen flex flex-col items-center justify-center px-4 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-stone-100 max-w-4xl leading-tight mb-8">
          Get In Touch
        </h1>
        <div className="max-w-4xl w-full mx-auto mt-8 p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl text-center">
          <a
            href="https://cloud.webpal.net/contact.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-stone-100 text-xl font-medium transition-all duration-300"
          >
            <Mail className="w-6 h-6 mr-2" />
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}