export default function Solution(){
    return(
        <section id="Solution" className="relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
             <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                          The solution to your concerns —{" "}
             </span>
            <span className="text-purple-400 text-4xl">Cognera</span>
            </h2>
           <div className="flex flex-col md:flex-row gap-12 mt-12 items-start">
                 <div className="flex-[45] flex flex-col gap-4">
                <div className="flex items-start gap-3 bg-[#0F111A] mb-4 border border-purple-400/20 border-l-4 border-l-purple-500 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300">
                <span className="text-purple-400 text-lg mt-0.5">✔️</span>
                <p className="text-gray-300 text-lg leading-relaxed">Cross-application insights</p>
                </div>

                 <div className="flex items-start gap-3 bg-[#0F111A] mb-4 border border-purple-400/20 border-l-4 border-l-purple-500 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300">
                <span className="text-purple-400 text-lg mt-0.5">✔️</span>
                <p className="text-gray-300 text-lg leading-relaxed">Attention and distraction patterns</p>
                </div>

                 <div className="flex items-start gap-3 bg-[#0F111A] mb-4 border border-purple-400/20 border-l-4 border-l-purple-500 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300">
                <span className="text-purple-400 text-lg mt-0.5">✔️</span>
                <p className="text-gray-300 text-lg leading-relaxed">Category-based behavior tracking</p>
                </div>
                </div>

                <div className="flex-[55] flex flex-col justify-center gap-6">
                    <p className="text-purple-400 text-sm font-semibold">How it works</p>
                    <h3 className="text-white text-2xl font-bold leading-snug">
                       Intelligence without exposure
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                        Most analytics tools collect everything and ask questions later. Cognera flips that model — processing behavior locally, delivering insights without ever exposing raw user data.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        No third-party trackers. No data brokers. Just clean, private, 
              actionable analytics built for teams that can't afford to compromise.
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
}