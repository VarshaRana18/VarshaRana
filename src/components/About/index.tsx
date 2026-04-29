"use client";

export default function AboutSection() {
  return (
    <>
      <div className="relative w-full my-15 py-10 px-4">
        {/* The Layout Container */}
        {/* flex-col on phones, md:flex-row on tablets/desktops */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-30">
          {/* LEFT BLOCK: Name, Title & The Orb */}
          {/* Added 'relative' here so the orb anchors to this specific block */}
          <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
            {/* The Glowing Orb - Now perfectly centered behind the text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-[#00F0FF]/20 rounded-full blur-[80px] animate-pulse pointer-events-none"></div>

            {/* Added 'relative z-10' to text so it floats above the orb */}
            <h1 className="relative z-10 text-5xl md:text-7xl font-mystic text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] mb-2">
              Varsha Rana
            </h1>
            <h2 className="relative z-10 text-xl md:text-2xl text-violet-200 tracking-widest font-light uppercase">
              Software Developer
            </h2>
          </div>

          {/* RIGHT BLOCK: The Paragraph */}
          <div className="relative z-10 flex items-center max-w-xs md:mt-4 text-center md:text-left">
            <p className="text-violet-300 text-sm md:text-2xl leading-relaxed font-mystic">
              Architecting digital spaces with logic, precision, and a touch of
              magic.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
