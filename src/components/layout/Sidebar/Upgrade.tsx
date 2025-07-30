import upgrade from "../../../assets/upgrade.svg"

function Upgrade() {
    return (
        <div className="p-2 m-4 bg-white dark:bg-gray-800 dark:to-gray-700 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                    <img src={upgrade} alt="" />
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