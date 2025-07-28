import { Menu } from 'lucide-react'

function HeaderLeftContent({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <div className="flex items-center gap-4">
            <button
                onClick={onMenuClick}
                className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors md:hidden"
            >
                <Menu size={20} />
            </button>
            <div>
                <h1 className="text-xl md:text-2xl font-medium text-secondary dark:text-white">Sales Overview</h1>
                <p className="text-[10px] md:text-sm text-secondary dark:text-gray-300">Monitor all your content activity</p>
            </div>
        </div>
    )
}

export default HeaderLeftContent