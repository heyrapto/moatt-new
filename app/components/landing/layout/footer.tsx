import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer
      id="footer-section"
      className="relative w-full bg-[#0a0a0a] pt-32 pb-10 lg:pt-[10vw] lg:pb-[2vw] overflow-hidden"
    >
      {/* Grid Background using the provided line assets */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0 bg-repeat bg-center"
          style={{
            backgroundImage: "url('/images/footer/vertical-line-bg.png'), url('/images/footer/horizontal-line-bg.png')",
            backgroundSize: "80px auto, auto 80px"
          }}
        />
        {/* Simple additive gradient to fade out the top of the footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent h-40" />
      </div>

      <div className="relative z-10 mx-auto w-full px-5 sm:px-10 lg:px-[5vw]">
        {/* Massive "CONTACT US" heading */}
        <div className="flex justify-center mb-16 md:mb-28 lg:mb-[8vw]">
          <h2 className="font-[var(--font-nunito-sans)] font-black text-[clamp(50px,18vw,160px)] sm:text-[clamp(70px,16vw,200px)] lg:text-[14vw] text-white uppercase leading-[0.75] tracking-tighter text-center">
            CONTACT US
          </h2>
        </div>

        {/* Newsletter/Contact Form Section */}
        <div className="flex flex-col items-center mb-24 md:mb-36 lg:mb-[8vw]">
          <p className="text-white font-medium text-xs sm:text-sm md:text-base lg:text-[1.1vw] tracking-[0.2em] mb-10 lg:mb-[2.5vw] text-center">
            Get the latest <span className="text-[#e8961e]">hyper</span> update here
          </p>

          <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-[1vw] w-full max-w-[650px] lg:max-w-[40vw]">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Email address here.."
                className="w-full bg-[#cbcbcb] text-black px-8 py-4.5 sm:py-5 lg:px-[2vw] lg:py-[1.2vw] rounded-full text-sm md:text-base lg:text-[1vw] font-semibold focus:outline-none focus:ring-2 focus:ring-[#e8961e]/50 transition-all placeholder:text-black/40"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e8961e] text-white font-black px-12 py-4.5 sm:py-5 lg:px-[3vw] lg:py-[1.2vw] rounded-full text-sm md:text-base lg:text-[1vw] uppercase tracking-widest hover:bg-[#d18619] transition-all duration-300 shadow-[0_10px_30px_rgba(232,150,30,0.3)] whitespace-nowrap"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-[4vw] mb-28 md:mb-40 lg:mb-[10vw]">
          <a href="#" className="text-white hover:text-[#e8961e] transition-all duration-300 text-2xl md:text-3xl lg:text-[2.2vw] hover:scale-110" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-[#e8961e] transition-all duration-300 text-2xl md:text-3xl lg:text-[2.2vw] hover:scale-110" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-[#e8961e] transition-all duration-300 text-2xl md:text-3xl lg:text-[2.2vw] hover:scale-110" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-white hover:text-[#e8961e] transition-all duration-300 text-2xl md:text-3xl lg:text-[2.2vw] hover:scale-110" aria-label="X">
            <FaXTwitter />
          </a>
        </div>

        {/* Bottom Bar: Copyright and Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6 lg:pt-[2vw]">
          <p className="text-white/40 text-[11px] md:text-[13px] lg:text-[0.9vw] font-bold uppercase tracking-[0.25em]">
            @Moatt. 2024
          </p>
          <a
            href="#"
            className="text-white/40 hover:text-white transition-colors text-[11px] md:text-[13px] lg:text-[0.9vw] font-bold uppercase tracking-[0.25em]"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
