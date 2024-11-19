import React, { ReactElement } from "react";

interface Props {
  gpTitle: string;
  titleEndIcon?: ReactElement | null;
  menus?: {
    caption: string;
    icon: ReactElement;
  }[];
}

const SidebarMenuGp: React.FC<Props> = ({ titleEndIcon, gpTitle, menus }) => {

  return (
    <div className="w-full mt-5">
      <div className="flex items-center justify-between">
        <p className="uppercase text-gray-dark opacity-70 text-sm">{gpTitle}</p>
        {titleEndIcon && titleEndIcon}
      </div>
      {menus &&
        menus.length > 0 &&
        menus.map((menu, index) => (
          <div key={index} className="flex items-center gap-3 py-3">
            {menu.icon}
            <p className={`text-gray-darker text-sm ${menu.caption.toLowerCase() === "home" && "font-bold"}`}>{menu.caption}</p>
          </div>
        ))}
    </div>
  );
};

export default SidebarMenuGp;
