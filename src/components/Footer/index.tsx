import Link from "next/link";

export default function Footer() {
  return (
    // 1. Removed overflow-hidden so the light can bleed upwards into your page!
    <div className="relative w-full mt-20">
      {/* 2. The background orb (Pushed it slightly higher so the glow is more visible) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00F0FF]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* 3. THE BLEND: Changed background to a gradient that fades to transparent at the top */}
      <footer className="relative z-10 w-full pt-16 pb-8 px-6 bg-gradient-to-t from-violet-950/60 to-transparent backdrop-blur-md border-t border-violet-500/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-mystic text-2xl font-bold text-violet-200 mb-1">
              Varsha Rana
            </div>
            <div className="text-violet-400/60 text-lg tracking-wide font-mystic">
              Architected with precision and a touch of magic. ©{" "}
              {new Date().getFullYear()}
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <Link
              href="https://github.com/"
              target="_blank"
              className="text-violet-300/80 hover:text-[#00F0FF] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 font-medium font-mystic"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="text-violet-300/80 hover:text-[#00F0FF] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 font-medium font-mystic"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:your.email@example.com"
              className="px-4 py-2 rounded-full border border-violet-400/20 text-violet-300 hover:bg-violet-500/10 hover:border-[#00F0FF]/50 hover:text-[#00F0FF] transition-all duration-300 text-lg font-mystic"
            >
              Say Hello ✨
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
