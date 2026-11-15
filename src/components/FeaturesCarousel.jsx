import React, { useState } from 'react'
import { motion } from 'framer-motion'

const featureCards = [
  {
    id: 1,
    image: '/assets/card1-426609.png',
    title: 'All-Weather Grip',
    body: 'Tread engineered for wet, dry, and everything in between. No slip, no compromise.',
  },
  {
    id: 2,
    image: '/assets/card2.png',
    title: 'Smooth Shift Drivetrain',
    body: 'Precision gearing that responds to your legs, not the other way around.',
  },
  {
    id: 3,
    image: '/assets/card3.png',
    title: 'Disc Brake System',
    body: 'Stopping power you can trust, in every condition, every descent.',
  },
  {
    id: 4,
    image: '/assets/card4.png',
    title: 'Ergonomic Saddle',
    body: 'Built for long miles. Support where it matters, comfort that lasts.',
  },
  {
    id: 5,
    image: '/assets/card5.png',
    title: 'Reinforced Rims',
    body: 'Strong enough for the roughest routes, light enough to climb.',
  },
]

export default function FeaturesCarousel() {
  const [expandedId, setExpandedId] = useState(1)

  return (
    <section id="features" className="relative w-[1582px] h-[1005px] bg-off-white -left-[35px] mt-[888px] overflow-hidden">
      <div className="absolute left-[93px] top-[24px] w-[1390px] h-[111px]">
        <h2 className="font-archivo text-[102px] text-primary-dark leading-none">
          Ride
          <br />
          Ready
        </h2>
      </div>

      <div className="absolute left-[342px] top-[159px] w-[898px] h-[22px]">
        <p className="text-[18px] text-primary-dark/60 tracking-[0.08em] text-center">
          Every ride starts with the right machine. Here&apos;s what makes Driftline bikes non-negotiable.
        </p>
      </div>

      <div className="relative w-full h-full flex items-center justify-center px-[35px]">
        {featureCards.map((card) => {
          const isExpanded = expandedId === card.id
          return (
            <motion.div
              key={card.id}
              initial={{ width: 88, opacity: 0 }}
              animate={{
                width: isExpanded ? 750 : 88,
                opacity: 1,
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="feature-card cursor-pointer relative transition-all duration-400 hover:shadow-[0_0_134px_-40px_rgba(247,247,245,0.4)]"
              onClick={() => setExpandedId(isExpanded ? 0 : card.id)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[742px] object-cover rounded-[30px]"
              />
              {isExpanded && (
                <div className="absolute inset-[398px] w-full h-[344px] flex items-center justify-center p-[10px]">
                  <div className="w-[621px] h-[188px] flex flex-col gap-[10px]">
                    <div className="w-[396px] h-[58px]">
                      <h3 className="font-archivo text-[49.407px] text-primary-dark tracking-[0.08em] leading-none font-bebas">
                        {card.title}
                      </h3>
                    </div>
                    <div className="w-[621px] h-[112px]">
                      <p className="text-[24px] text-primary-dark tracking-[0.02em] leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <img
        src="/assets/arrow-cta.svg"
        alt="Left arrow"
        className="absolute left-[93px] top-[563px] w-[29px] h-[59px] cursor-pointer rotate-180"
        style={{ transform: 'rotate(180deg)' }}
      />
      <img
        src="/assets/arrow-cta.svg"
        alt="Right arrow"
        className="absolute right-[52px] top-[563px] w-[29px] h-[59px] cursor-pointer"
      />
    </section>
  )
}
