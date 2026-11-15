export default function Footer() {
  return (
    <footer id="contact" className="relative w-[1528px] h-[944px] bg-off-white mt-[4949px] overflow-hidden">
      <div className="absolute inset-0 w-full h-[871px] bg-off-white" />
      <div className="absolute left-[28px] top-[18px] w-[1456px] h-[825px] bg-primary-dark rounded-[30px]" />

      <div className="absolute left-[0px] top-[565px] w-[1528px] h-[379px] flex items-center justify-center">
        <h1 className="font-archivo text-[348px] text-off-white/10 leading-none select-none">
          Driftline
        </h1>
      </div>

      <div className="absolute left-[600px] top-[514px] w-[336px] h-[54px] opacity-90">
        <p className="font-inter text-[20px] text-pure-white/50 text-center leading-none">
          Copyright Driftline. All rights reserved.
        </p>
      </div>

      <div className="absolute left-[123px] top-[90px] w-[616.37px] h-[170px] flex flex-col gap-[10px]">
        <div className="flex items-center gap-[16px]">
          <span className="font-jetbrains text-[48px] text-off-white tracking-[0.02em]">
            hello@driftline.in
          </span>
          <img src="/assets/footer-arrow.svg" alt="Arrow" className="w-[52.37px] h-[52.37px]" />
        </div>
        <p className="font-inter text-[18px] text-pure-white tracking-[0.04em]">
          Contact for more information
        </p>
      </div>

      <div className="absolute left-[908px] top-[90px] w-[134px] h-[150px] flex flex-col gap-[10px]">
        <div className="font-inter text-[18px] text-pure-white font-medium">Navigation</div>
        <div className="font-inter text-[18px] text-pure-white/70">Home</div>
        <div className="font-inter text-[18px] text-pure-white/70">Features</div>
        <div className="font-inter text-[18px] text-pure-white/70">About</div>
        <div className="font-inter text-[18px] text-pure-white/70">Contact</div>
      </div>

      <div className="absolute left-[1190px] top-[90px] w-[156px] h-[104px] flex flex-col gap-[10px]">
        <div className="font-inter text-[18px] text-pure-white font-medium">Legal</div>
        <div className="font-inter text-[18px] text-pure-white/70">Privacy</div>
        <div className="font-inter text-[18px] text-pure-white/70">Terms</div>
      </div>

      <div className="absolute left-[602px] top-[338px] w-[345.73px] h-[97.79px] flex items-center justify-center gap-[18px] flex-col">
        <img src="/assets/social-icons.svg" alt="Socials" className="w-[345.73px] h-[50.79px]" />
      </div>
    </footer>
  )
}
