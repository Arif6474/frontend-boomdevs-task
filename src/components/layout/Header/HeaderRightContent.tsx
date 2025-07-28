import { Search, ChevronDown, } from "lucide-react";
import searchIcon from '../../../assets/searchIcon.svg';
import notificationIcon from '../../../assets/notificationIcon.svg';
import filterIcon from '../../../assets/filterIcon.svg';

function HeaderRightContent({ isSearchVisible, toggleSearchVisibility }: { isSearchVisible: boolean, toggleSearchVisibility: () => void }) {
    return (
        <div className="flex items-center gap-3">
            {isSearchVisible && (
                <div className="relative hidden md:block transition-all duration-300 ease-in-out">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>
            )}
            <div
                onClick={toggleSearchVisibility}
                className='cursor-pointer'
            >
                <img src={searchIcon} alt="" />
            </div>

            <div className='cursor-pointer'>
                <img src={notificationIcon} alt="" />
            </div>
            <div className='cursor-pointer'>
                <img src={filterIcon} alt="" />
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <div className=" w-[2px] h-6 bg-gray-300 rounded-full flex items-center justify-center" />
                <div className=" md:hidden w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">AM</span>
                </div>
                <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Amirul Mu'</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">amirul@gmail.example</p>
                </div>
                <ChevronDown className="text-gray-600 dark:text-gray-300 w-4 h-4" />
            </div>
        </div>
    )
}

export default HeaderRightContent