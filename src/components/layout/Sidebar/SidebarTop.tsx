import { X } from 'lucide-react';
import Logo from '../../../assets/air.svg';
import { ThemeToggle } from '../../ui/ThemeToggle';

interface SidebarProps {
    isMobile: boolean;
    onClose: () => void;
  }
function SidebarTop({ isMobile, onClose } : SidebarProps) {
    return (
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src={Logo} alt="Logo" />
                </div>
                <span className="text-xl font-bold text-secondary dark:text-white">Sales</span>
            </div>
            <div>
                <ThemeToggle />
            </div>
            {isMobile && (
                <button
                    onClick={onClose}
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    <X size={20} />
                </button>
            )}
        </div>
    )
}

export default SidebarTop