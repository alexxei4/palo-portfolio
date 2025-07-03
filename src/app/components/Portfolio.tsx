'use client'
import { motion } from 'framer-motion'


const projects = [
  { name: 'Doane Grant Thornton', url: 'https://www.doanegrantthornton.ca/' },
  { name: 'Banyan Community Services', url: 'https://banyancommunityservices.org/' },
  { name: 'Neighbourly Pharmacy', url: 'https://www.neighbourlypharmacy.ca/' },
  { name: 'Savaria', url: 'https://www.savaria.com/?lang=en' },
]

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Sites We've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-orange-800">{project.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{project.url}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
