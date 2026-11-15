import React, { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    id: 1,
    q: 'Q1.',
    question: 'Who can join Driftline?',
    answer: 'Any rider who shows up with intent. No racing background needed. Just a roadworthy bike and respect for the group.',
    open: true,
  },
  {
    id: 2,
    q: 'Q2.',
    question: 'What kind of rides do you do?',
    answer: 'Group rides on real routes. Road, gravel, and mixed terrain. Pace is set by the group, not a stopwatch.',
    open: false,
  },
  {
    id: 3,
    q: 'Q3.',
    question: 'Do I need a racing license?',
    answer: 'No. Driftline is not a race. It&apos;s a standard. Show up, ride safe, respect the group.',
    open: false,
  },
  {
    id: 4,
    q: 'Q4.',
    question: 'How do I apply?',
    answer: 'Submit your details through the application form. Every application is reviewed by a real person. You&apos;ll hear back within 48 hours.',
    open: false,
  },
]

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(1)

  return (
    <section id="faq" className="relative w-full h-[993px] bg-off-white mt-[2374px] overflow-hidden">
      <div className="absolute left-[330px] top-[80px] w-[853px] h-[111px]">
        <h2 className="font-archivo text-[102px] text-primary-dark leading-none">
          Before You Ask
        </h2>
      </div>

      <div className="absolute left-[182px] top-[255px] flex flex-col gap-[10px]">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id
          return (
            <motion.div
              key={faq.id}
              initial={{ height: 136, opacity: 0 }}
              animate={{
                height: isOpen ? 248 : 136,
                opacity: 1,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="faq-card w-[1150px] relative cursor-pointer overflow-hidden border border-primary-dark/10"
              onClick={() => setOpenId(isOpen ? 0 : faq.id)}
            >
              <div className="absolute inset-0 w-full h-[248px]">
                <img
                  src="/assets/card1-426609.png"
                  alt="FAQ bg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-[64px] top-[32px] w-[1004px] h-[162px] flex flex-col gap-[10px] z-10">
                <div className="flex items-start gap-[16px]">
                  <span className="font-inter text-[64px] text-off-white/80 tracking-[0.02em] leading-none">
                    {faq.q}
                  </span>
                  <h3 className="font-inter text-[42px] text-off-white tracking-[0.02em] font-semibold leading-none">
                    {faq.question}
                  </h3>
                </div>
                {isOpen && (
                  <p className="font-inter text-[24px] text-off-white tracking-[0.02em] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
              <img
                src="/assets/plus-icon.svg"
                alt="Toggle"
                className="absolute right-[37px] top-[37px] w-[68px] h-[68px] z-10 rotate-0 transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
