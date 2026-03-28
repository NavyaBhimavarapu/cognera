export default function Footer(){
    return(
        <footer id="Contact" className="bg-[#0D0F18] border-t border-purple-400/20 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                    <img src="/cognera_log_bg_removed.png" alt="logo" className="h-8 w-auto"/>
                    <span className="text-white font-bold text-lg">Cognera</span>
                </div>
                <p className="text-gray-400 text-sm">privacy-first behavior</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider">Founder and Managing Director</p>
                <p className="text-white text-sm">Dr. S. Ravi Kumar</p>
            </div>

            <a
             href="mailto:dr.srk@cogneradatalabs.com"
             className="text-purple-400 underline underline-offset-4 hover:text-purple-300 transition-colors">
                Email
             </a>
            </div>

            <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-purple-400/10">
              <p className="text-gray-600 text-xs text-center">
                @cognera 2026. All rights reserved.
              </p>
            </div>
        </footer>
    );
}