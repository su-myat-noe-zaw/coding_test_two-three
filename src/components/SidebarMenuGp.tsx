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
          <div key={index} className="group flex cursor-pointer items-center gap-3 py-3">
            {React.cloneElement(menu.icon, {
              className: `h-4 w-4 text-gray-darker group-hover:text-black`,
            })}
            <p className={`text-gray-darker group-hover:font-bold text-sm ${menu.caption.toLowerCase() === "home" && "font-bold"}`}>{menu.caption}</p>
          </div>
        ))}
    </div>
  );
};

export default SidebarMenuGp;
