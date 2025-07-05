import React from "react";

interface SidebarItem {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SidebarProps {
    sidebarItems: SidebarItem[];
    activeSidebarItem: string;
    setActiveSidebarItem: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    sidebarItems,
    activeSidebarItem,
    setActiveSidebarItem,
}) => {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:fixed lg:z-20 lg:bg-[#020618] lg:w-56 lg:h-full lg:top-16 lg:left-0 lg:flex lg:flex-col lg:py-8 lg:px-4">
                <div className="flex items-center mb-4 px-3">
                    <div className="w-12 h-12 bg-white rounded-full" />
                    <h2 className="text-white ml-5 font-bold">League</h2>
                </div>
                <div className="border-b border-gray-600 mx-4 mb-4" />
                <nav className="flex flex-col gap-2 w-full">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveSidebarItem(item.name)}
                            className={`flex flex-row items-center gap-3 px-4 py-3 text-base font-medium transition-all duration-200 text-white ${
                                activeSidebarItem === item.name
                                    ? "bg-[#FF6900] rounded-xl"
                                    : ""
                            }`}
                        >
                            <item.icon className="w-7 h-7" />
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>
            </aside>
            {/* Mobile Bottom Bar */}
            <aside className="fixed z-20 bg-[#020618] w-full h-16 bottom-0 left-0 right-0 flex flex-row items-center px-2 py-0 lg:hidden">
                <nav className="flex flex-1 flex-row justify-between w-full">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveSidebarItem(item.name)}
                            className={`flex flex-col items-center justify-center flex-1 py-2 text-white ${
                                activeSidebarItem === item.name
                                    ? "bg-[#FF6900] rounded-xl"
                                    : ""
                            }`}
                        >
                            <item.icon className="w-7 h-7" />
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
