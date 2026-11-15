export default function Navbar() {
  return (
    <nav className="absolute left-[64px] top-[36px] w-[1384px] flex items-center justify-between">
      <div className="font-archivo text-[24px] text-primary-dark leading-none">
        DRIFTLINE
      </div>
      <div className="hidden md:flex items-end gap-[96px]">
        <a href="/" className="text-[18px] text-primary-dark/80 font-medium hover:text-primary-dark transition-colors">
          Home
        </a>
        <a href="#features" className="text-[18px] text-primary-dark/80 font-medium hover:text-primary-dark transition-colors">
          Features
        </a>
        <a href="#about" className="text-[18px] text-primary-dark/80 font-medium hover:text-primary-dark transition-colors">
          About
        </a>
        <a href="#contact" className="text-[18px] text-primary-dark/80 font-medium hover:text-primary-dark transition-colors">
          Contact
        </a>
      </div>
    </nav>
  )
}
