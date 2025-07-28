import SidebarMenu from './SidebarMenu';
import SidebarAccount from './SidebarAccount';

interface SidebarProps {
    isMobile: boolean;
    onClose: () => void;
}

function SidebarMenuWrapper({ isMobile, onClose } : SidebarProps) {
    return (
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <SidebarMenu isMobile={isMobile} onClose={onClose} />
            <SidebarAccount isMobile={isMobile} onClose={onClose} />
        </nav>
    )
}

export default SidebarMenuWrapper