import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed inset-0 z-[9999] bg-pure-white"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/curtains.svg"
          alt="Curtains"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute left-[613px] top-[437px] w-[286px] h-[52px]">
        <span className="font-archivo text-[48px] text-primary-dark leading-none">
          DRIFTLINE
        </span>
      </div>
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute left-[526px] top-[517px] w-[460px] h-[24px] bg-accent-lime rounded-full"
      />
    </motion.div>
  )
}
