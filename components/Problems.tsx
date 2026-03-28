export default function Problems() {
    return(
      <section id="Problems" className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
            <p className="text-red-400 text-2xl font-semibold mb-3"><span>⚠️</span> The actual Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
             <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                         Why privacy matters 
             </span>
            </h2>
                <p className="text-white-400 text-base text-center my-2">Today’s analytics tools measure clicks and events. They do not understand behavioural transitions — when attention drops, when users mentally disengage, or why they switch contexts.</p>
            <div className="flex flex-col md:flex-row gap-6 mt-8">
                {/* card 1 */}
              <div className="flex-1 bg-[#1E1F29] border border-purple-400/20 border-t-2 border-t-purple-500 rounded-xl p-6 hover:border-purple-400/60 hover:-translate-y-2 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center mb-4">
                 <span className="text-purple-400 font-bold">01</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">SSR</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Frequent Stay – Switch – Return (SSR) behavior across applications is difficult to understand.
                </p>
            </div>
            {/* card 2 */}
                 <div className="flex-1 bg-[#1E1F29] border border-purple-400/20 border-t-2 border-t-purple-500 rounded-xl p-6 hover:border-purple-400/60 hover:-translate-y-2 transition-all duration-300">
                 <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center mb-4">
                 <span className="text-purple-400 font-bold">02</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Visibility</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Organizations lack visibility into real digital behavior.
                </p>
                </div>
                 <div className="flex-1 bg-[#1E1F29] border border-purple-400/20 border-t-2 border-t-purple-500 rounded-xl p-6 hover:border-purple-400/60 hover:-translate-y-2 transition-all duration-300">
                 <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center mb-4">
                 <span className="text-purple-400 font-bold">03</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">In-App Activity</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Most analytics tools only track in-app activity, missing cross-application behavior.
                </p>
            </div>
        </div>
        </div>
      </section>
    );
}