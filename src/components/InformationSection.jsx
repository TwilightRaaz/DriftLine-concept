export default function InformationSection() {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Apply',
      body: 'Submit your details and tell us how you ride. Your pace, your experience, the kind of routes you want. No résumé, no racing history required - just honest answers.',
      pos: { x: 866, y: 350, w: 381, h: 255 },
      contentPos: { x: 199, y: 466, w: 470, h: 113 },
    },
    {
      id: 2,
      number: '02',
      title: 'Get Approved',
      body: 'Every application is reviewed by a real person. We keep numbers small on purpose, so each rider added fits the standard already on the road. You&apos;ll hear back within 48 hours.',
      pos: { x: 182, y: 635, w: 420, h: 280 },
      contentPos: { x: 768, y: 744, w: 530, h: 113 },
    },
    {
      id: 3,
      number: '03',
      title: 'Pick Your Ride',
      body: 'Choose from the routes on the calendar. Road, gravel, mixed. Every route is rideable, every route is real.',
      pos: { x: 876, y: 946, w: 422, h: 273 },
      contentPos: { x: 141, y: 1052, w: 530, h: 113 },
    },
    {
      id: 4,
      number: '04',
      title: 'Ride',
      body: 'Show up. Roadworthy bike. Respect for the group. No racing background needed. Just intent.',
      pos: { x: 157, y: 1238, w: 414, h: 276 },
      contentPos: { x: 768, y: 1366, w: 530, h: 113 },
    },
  ]

  const markers = [
    { x: 779, y: 499 },
    { x: 613, y: 760 },
    { x: 779, y: 1062 },
    { x: 602, y: 1354 },
  ]

  return (
    <section id="information" className="relative w-full h-[1582px] bg-off-white mt-[3367px] overflow-hidden">
      <div className="absolute left-[318px] top-[132px] w-[876px] h-[167px] flex flex-col items-center justify-center gap-[10px]">
        <h2 className="font-archivo text-[64px] text-primary-dark leading-none text-center">
          How to Join
        </h2>
        <h2 className="font-archivo text-[102px] text-primary-dark leading-none text-center">
          The Community
        </h2>
      </div>

      <div className="absolute left-[625.95px] top-[523px] w-[177.55px] h-[854.5px]">
        <img src="/assets/path-line.svg" alt="Winding path" className="w-full h-full object-contain" />
      </div>

      {markers.map((m, i) => (
        <img
          key={i}
          src="/assets/marker.svg"
          alt={`Marker ${i + 1}`}
          className="absolute w-[47px] h-[47px]"
          style={{ left: m.x, top: m.y }}
        />
      ))}

      {steps.map((step) => (
        <div key={step.id} className="absolute" style={{ left: step.pos.x, top: step.pos.y, width: step.pos.w, height: step.pos.h }}>
          <div className="p-[10px]">
            <span className="font-inter text-[350px] text-primary-dark font-extralight leading-none select-none">
              {step.number}
            </span>
          </div>
          <div className="absolute" style={{ left: step.contentPos.x, top: step.contentPos.y, width: step.contentPos.w, height: step.contentPos.h }}>
            <h3 className="font-inter text-[40px] text-primary-dark font-semibold leading-none">
              {step.title}
            </h3>
            <p className="font-inter text-[16px] text-primary-dark tracking-[0.04em] text-center mt-[10px]">
              {step.body}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
