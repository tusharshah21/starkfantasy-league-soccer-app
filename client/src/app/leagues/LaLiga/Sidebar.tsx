import React from "react";

interface SidebarItem {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SidebarProps {
    activeSidebarItem: string;
    setActiveSidebarItem: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:fixed lg:z-20 lg:bg-[#020618] lg:w-56 lg:h-full lg:top-16 lg:left-0 lg:flex lg:flex-col lg:py-8 lg:px-4">
                
            </aside>
           
        </>
    );
};

export default Sidebar;
