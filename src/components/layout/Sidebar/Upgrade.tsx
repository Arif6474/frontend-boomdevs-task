import { Zap } from 'lucide-react'

function Upgrade() {
    return (
        <div className="p-4 m-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-100 dark:border-gray-600">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#414FF4] rounded-lg flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Activate Super</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Unlock All features on Gilsanium</p>
                </div>
            </div>
            <button className="w-full py-2 px-4 bg-[#414FF4] hover:bg-[#3542E8] text-white text-sm font-medium rounded-lg transition-colors">
                Upgrade
            </button>
        </div>
    )
}

export default Upgrade