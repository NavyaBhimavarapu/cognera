"use client"
export default function Hero(){
  return(
    <section id="Hero" className="relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto mt-6 px-6 py-28 md:py-36 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-[55] text-center md:text-left">
          <p className="text-sm text-purple-400 mb-4 font-semibold">
            Understand behaviour. Respect privacy.
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#F9FAFB]">
            Privacy-First Behavioral Intelligence
          </h1>
          <p className=" text-2xl mt-6 text-gray-400 text-lg">
           Enabling organizations to understand engagement without compromising user privacy. Analytics built on trust.
          </p>
         <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium rounded-lg hover:scale-105 transition transform">
           Request Pilot →
         </button>
        </div>
        <div className="flex-[45]">
           <div className="w-full rounded-lg p-4 border border-purple-400/20">
          <div className="bg-white/5 rounded-lg p-4 border border-purple-400/30">
          <p className="text-gray-400 text-xs mb-3">User sessions</p>
          <div className="h-2 w-3/4 bg-purple-400/70 rounded-full"/>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-purple-400/30">
          <p className="text-gray-400 text-xs mb-3">Privacy Score</p>
          <div className="h-2 w-5/6 bg-purple-500/80 rounded-full"/>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-purple-400/30">
          <p className="text-gray-400 text-xs mb-3">Data Encrypted</p>
          <div className="h-2 w-full bg-purple-300/60 rounded-full"/>
          </div>
        </div>
        </div>
      </div>
     
    </section>
  );
}