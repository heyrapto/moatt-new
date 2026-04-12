import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";

export const CTASection = () => {
  return (
    <section
      id="cta-section"
      className="relative w-full py-24 md:py-32 lg:py-[10vw] bg-[#0a0a0a] overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[50vw]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta/bg.png"
          alt="CTA Background"
          fill
          priority
          className="object-cover opacity-90"
        />
        {/* Subtle overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-[5vw] flex flex-col items-center text-center relative">
        <div className="relative">
          <h2 className="font-[var(--font-nunito-sans)] font-black text-[clamp(28px,7vw,50px)] sm:text-[clamp(32px,6vw,60px)] lg:text-[4vw] text-white uppercase leading-[1.05] tracking-tight max-w-[1200px] lg:max-w-[75vw]">
            UNLOCK YOUR <span className="text-[#e8961e] relative">CREATIVITY</span> AND STREAMLINE YOUR DESIGN PROCESS WITH OUR 3D FASHION ILLUSTRATION SOFTWARE

          </h2>
          {/* Floating Cursor Icon */}
          <svg className="absolute -right-4 -bottom-3 sm:-right-6 sm:-bottom-4 scale-125 sm:scale-[1.8] transform transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-[2]" width="48" height="53" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.36806 32.3849L0.672352 7.39617C0.33378 5.88453 0.616551 4.29328 1.46143 2.95577C2.3063 1.61826 3.64773 0.63826 5.2047 0.221071C6.76167 -0.196118 8.41338 -0.0181294 9.81382 0.717752C11.2143 1.45363 12.2548 2.69031 12.7174 4.16872L17.7392 22.9103L29.5259 19.752C31.1422 19.3189 32.8247 19.196 34.4772 19.3903C36.1298 19.5846 37.7201 20.0922 39.1573 20.8843C40.5945 21.6764 41.8505 22.7373 42.8535 24.0066C43.8566 25.2759 44.5871 26.7286 45.0033 28.2819L47.5776 37.8894C47.9043 39.1086 47.7136 40.4128 47.0475 41.5153C46.3814 42.6178 45.2944 43.4281 44.0257 43.768L12.4111 52.2391C11.6361 52.4462 10.8243 52.4693 10.0456 52.3063C9.26692 52.1434 8.54465 51.7992 7.94091 51.3036L2.91904 47.1803C1.85228 46.3066 1.0339 45.1847 0.538367 43.9167C0.0428335 42.6486 -0.114128 41.2746 0.0817595 39.9198C0.277647 38.5649 0.820167 37.2721 1.65996 36.159C2.49976 35.0459 3.61018 34.1478 4.89021 33.5465L7.36204 32.3816L7.36806 32.3849Z" fill="#EA931D" />
          </svg>
        </div>

        <div
          className="flex items-center gap-2 lg:gap-[0.5vw] rounded-full border border-white/[0.08] bg-[#1a1a1a] pl-7 pr-2 py-2 lg:pl-[2vw] lg:pr-[0.5vw] lg:py-[0.5vw] mt-14 md:mt-20"
        >
          <a
            href="/login"
            className="font-[var(--font-heading)] font-semibold text-sm lg:text-[1vw] text-white px-4 py-2 lg:px-[1.5vw] lg:py-[0.8vw] transition-opacity duration-200 hover:opacity-80"
            id="navbar-login"
          >
            Log In
          </a>
          <a
            href="/register"
            className="font-[var(--font-heading)] font-bold text-sm lg:text-[1vw] text-white bg-[#e8961e] rounded-full px-7 py-3 lg:px-[2.4vw] lg:py-[1vw] transition-all duration-250 hover:bg-[#d4870f] hover:-translate-y-0.5"
            id="navbar-start-designing"
          >
            Start Designing
          </a>
        </div>
      </div>
    </section>
  );
};