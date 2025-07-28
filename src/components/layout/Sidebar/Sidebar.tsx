import Upgrade from './Upgrade';
import SidebarTop from './SidebarTop';
import SidebarMenuWrapper from './SidebarMenuWrapper';

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, isMobile, onClose }: SidebarProps) {
  return (
    <>
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose} />
      )}

      <div
        className={`
          fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#F9F9F9] dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
          flex flex-col
        `}
      >
        <SidebarTop isMobile={isMobile} onClose={onClose} />
        <SidebarMenuWrapper isMobile={isMobile} onClose={onClose} />
        <Upgrade />
      </div>
    </>
  );
}
