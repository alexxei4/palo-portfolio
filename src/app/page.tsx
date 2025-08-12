"use client"

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Mail, Menu, X } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const slides = [
  {
    title: "We create innovative solutions",
    content: "We build fast, beautiful websites."
  },
  {
    title: "Here is how we can help",
    content: "Did you know that visitors form an opinion about your business in just 0.05 seconds? If your website looks outdated, loads slowly, or isn’t mobile-friendly, you could be losing customers before they even explore what you offer. We design stunning, high-performance websites that make a powerful first impression."
  },
  {
    title: "Security & Reliability",
    content: "Older websites are vulnerable to hacking, malware, and crashes. We use secure, up-to-date technologies to protect your site (and your customers’ data) while ensuring maximum uptime"
  },
  {
    title: "Trustworthi-ness",
    content: `A dated website makes your business look outdated. Our custom designs reflect professionalism, credibility, and brand identity—helping you stand out from competitors`
  },
  {
    title: "Better User Experience = More Sales",
    content: `Confusing navigation, broken links, and poor layouts drive customers away. We craft intuitive, user-friendly websites that guide visitors toward taking action—whether it’s buying, contacting you, or subscribing.`
  },
  {
    title: "Integration & Functionality",
    content: `Need booking systems, payment gateways, or CRM integrations? We don’t just design websites—we build powerful tools that streamline your business operations.`
  },
  {
    title: `We're Palomino. Let's fix it together.`,
    content: `Here are some satisfied customers`
  },
]

const projects = [
  { name: 'Doane Grant Thornton', url: 'https://www.doanegrantthornton.ca/', image: "/dgt.png" },
  { name: 'Banyan Community Services', url: 'https://banyancommunityservices.org/', image: "/banyan.png" },
  { name: 'Neighbourly Pharmacy', url: 'https://www.neighbourlypharmacy.ca/', image: "/nbly.png" },
  { name: 'Savaria', url: 'https://www.savaria.com/?lang=en', image: "/savaria.png" },
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".panel")
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
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const goToSection = (index: number) => {
    const panels = document.querySelectorAll<HTMLElement>(".panel")
    if (panels[index]) {
      panels[index].scrollIntoView({ behavior: "smooth" })
    }
    setSidebarOpen(false)
  }

  return (
    <div ref={containerRef} className="w-full relative">

      {/* Sidebar toggle button */}
      <button
        className="fixed top-4 left-4 z-50 bg-black/70 p-2 rounded-lg text-white md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-black/90 text-white z-40 w-64 p-6 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex items-center mb-8">
          <Image src="/webpal-palomino-logo.svg" alt="WebPal Palomino" width={150} height={50} />
        </div>
        <nav className="space-y-4">
          {slides.map((slide, i) => (
            <button
              key={i}
              className="block text-left w-full hover:text-[#d4693b] transition-colors"
              onClick={() => goToSection(i)}
            >
              {slide.title}
            </button>
          ))}
          <button
            onClick={() => goToSection(slides.length)}
            className="block text-left w-full hover:text-[#d4693b] transition-colors"
          >
            Sites We've Built
          </button>
          <button
            onClick={() => goToSection(slides.length + 1)}
            className="block text-left w-full hover:text-[#d4693b] transition-colors"
          >
            Get In Touch
          </button>
        </nav>
      </aside>

      {/* Slides */}
      {slides.map((slide, i) => (
        <section
          key={i}
          className="panel h-screen flex flex-col items-center justify-center px-4 text-center"
          style={{
            background: `linear-gradient(180deg, #d4693b, black)`,
            color: "white"
          }}
        >
          {/* Logo */}
          <div className="absolute top-6 right-6 opacity-80">
            <Image src="/webpal-palomino-logo.svg" alt="WebPal Palomino" width={120} height={40} />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-8">
            {slide.title}
          </h1>

          {slide.content && (
            <p
              className="max-w-4xl text-base md:text-lg leading-relaxed px-4"
              dangerouslySetInnerHTML={{ __html: slide.content }}
            />
          )}
        </section>
      ))}

      {/* Projects */}
      <section className="panel h-screen flex flex-col items-center justify-center px-4 text-center" style={{
        background: `linear-gradient(180deg, #d4693b, black)`,
        color: "white"
      }}>
        <div className="absolute top-6 right-6 opacity-80">
          <Image src="/webpal-palomino-logo.svg" alt="WebPal Palomino" width={120} height={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-8">
          Sites We&apos;ve Built
        </h1>
        <div className="max-w-4xl w-full mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-black/40 rounded-lg border border-white/20 hover:bg-black/60 transition-all duration-300"
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
                <h2 className="text-xl md:text-2xl font-bold">
                  {project.name}
                </h2>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="panel h-screen flex flex-col items-center justify-center px-4 text-center" style={{
        background: `linear-gradient(180deg, #d4693b, black)`,
        color: "white"
      }}>
        <div className="absolute top-6 right-6 opacity-80">
          <Image src="/webpal-palomino-logo.svg" alt="WebPal Palomino" width={120} height={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-8">
          Get In Touch
        </h1>
        <a
          href="https://cloud.webpal.net/contact.php"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-black/30 hover:bg-black/50 border border-white/30 rounded-lg text-white text-xl font-medium transition-all duration-300"
        >
          <Mail className="w-6 h-6 mr-2" />
          Contact Us
        </a>
      </section>
    </div>
  )
}
