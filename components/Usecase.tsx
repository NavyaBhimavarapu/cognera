export default function Usecase(){
    return(
        <section id="Usecase" className="relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl py-10 font-bold text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Use cases</h2>
                <h3 className="text-white text-center mb-6 text-2xl font-bold leading-snug">
                       One platform. Every industry. Zero compromises
                    </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#1E1F29] border border-purple-400/20 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
                     <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center mb-4 text-xl">
                    🏢
                     </div>
                     <h3 className="text-white font-semibold text-lg mb-2">Enterprise</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">Track how employees navigate tools and workflows. Identify bottlenecks, reduce context switching, and improve productivity without monitoring individuals.</p>
                    </div>

                    <div className="bg-[#1E1F29] border border-purple-400/20 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
                     <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center mb-4 text-xl">
                       🎓
                     </div>
                     <h3 className="text-white font-semibold text-lg mb-2">EduTech</h3>
                     <p className="text-gray-400 text-sm leading-relaxed"> Track lesson completion, time on content, and session patterns. Find drop-off points and improve course retention with engagement insights.</p>
                    </div>

                    <div className="bg-[#1E1F29] border border-purple-400/20 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
                     <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center mb-4 text-xl">
                       💻
                     </div>
                     <h3 className="text-white font-semibold text-lg mb-2">Digital platforms</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">See how users split time across features. Use behavior patterns to tune algorithms, reduce churn, and keep users engaged — without invasive data collection.</p>
                    </div>

                    <div className="bg-[#1E1F29] border border-purple-400/20 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
                     <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center mb-4 text-xl">
                       🏥
                     </div>
                     <h3 className="text-white font-semibold text-lg mb-2">Healthcare</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">Understand how clinicians interact with patient management systems. Reduce administrative friction and surface workflow inefficiencies without exposing sensitive data.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}