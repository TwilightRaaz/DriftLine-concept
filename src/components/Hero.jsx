export default function Hero() {
  return (
    <section className="relative w-full h-[992px] bg-cover bg-center" style={{ backgroundImage: 'url("/assets/hero-bg.png")' }}>
      <Navbar />

      <div className="absolute left-[54px] top-[180px] w-[601px] h-[87px]">
        <h1 className="font-archivo text-[112px] text-primary-dark leading-[96px] tracking-[-0.04em]">
          Own{' '}
          <br />
          The Road
        </h1>
      </div>

      <div className="absolute left-[60px] top-[396px] w-[618px] h-[58px]">
        <p className="text-[24px] text-primary-dark/80 tracking-[0.02em] leading-relaxed">
          Driftline isn&apos;t a cycling club. It&apos;s a standard.{' '}
          <br />
          Group rides, real routes, riders who show up.
        </p>
      </div>

      <button className="absolute left-[68px] top-[496px] cta-button">
        Explore Rides
        <img src="/assets/arrow-cta.svg" alt="Arrow" className="w-[16px] h-[16px]" />
      </button>

      <div className="absolute left-[652px] top-[904px]">
        <p className="font-inter text-[32px] text-off-white tracking-[0.08em] font-medium">
          Scroll Down
        </p>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/hero-bike-688c8d.png"
          alt="Bike cutout"
          className="w-[848px] h-[800px] absolute left-[0px] top-[0px] object-cover"
          style={{
            left: 0,
            top: 0,
            width: 848,
            height: 800,
          }}
        />
        <div className="absolute" style={{ left: 493.67, top: 715.74, width: 144.14, height: 65.26, background: '#14191F', opacity: 0.5, filter: 'blur(17px)', borderRadius: '50%' }}></div>
        <div className="absolute" style={{ left: 424, top: 703, width: 264.28, height: 115.35, background: '#14191F', opacity: 0.5, filter: 'blur(22px)', borderRadius: '50%' }}></div>
        <div className="absolute" style={{ left: 132.8, top: 672.06, width: 106.91, height: 47.25, background: '#14191F', opacity: 0.5, filter: 'blur(17px)', borderRadius: '50%' }}></div>
        <div className="absolute" style={{ left: 65, top: 653, width: 241.59, height: 100.62, background: '#14191F', opacity: 0.5, filter: 'blur(22px)', borderRadius: '50%' }}></div>
      </div>
    </section>
  )
}
