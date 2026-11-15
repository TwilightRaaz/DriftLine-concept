export default function AboutSection() {
  return (
    <section id="about" className="relative w-full h-[481px] bg-primary-dark mt-[1893px]">
      <img
        src="/assets/about-bg.svg"
        alt="About background"
        className="w-full h-full object-cover"
      />
      <div className="absolute left-[58px] top-[96px] w-[839.46px] h-[288.46px] flex flex-col gap-[10px] items-center justify-center">
        <h2 className="font-archivo text-[40.29px] text-off-white tracking-[0.08em] leading-none text-center">
          Not A
        </h2>
        <h2 className="font-archivo text-[132.50px] text-accent-lime tracking-[0.08em] leading-none text-center">
          Club.
        </h2>
        <h2 className="font-archivo text-[115.45px] text-off-white tracking-[0.08em] leading-none text-center">
          A Standard.
        </h2>
      </div>
      <div className="absolute right-[52px] top-[301px] w-[488px] h-[261px] text-right">
        <p className="font-inter text-[24px] text-pure-white/80 tracking-[0.08em] leading-relaxed">
          No matching jerseys. No performative wellness branding. Just riders who treat the streets with the same seriousness as the machine beneath them.
          <br />
          <br />
          This isn&apos;t about making cycling accessible. It&apos;s about making it mean something again.
        </p>
      </div>
    </section>
  )
}
