import React from "react";
import AvatarImg from "../assets/imgs/avatar_img.jpg";
import SidebarMenuGp from "./SidebarMenuGp";
import {
  ChevronDownIcon,
  MusicalNoteIcon,
  QueueListIcon,
  StarIcon,
  FireIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import {
    HomeIcon,
  } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
  const sidebarMenuGps = [
    {
      title: "Browse",
      menus: [
        {
          caption: "Home",
          icon: <HomeIcon className="h-4 w-4 text-gray-darker" />,
        },
        {
          caption: "Songs",
          icon: <MusicalNoteIcon className="h-4 w-4 text-gray-darker" />,
        },
        {
          caption: "Playlists",
          icon: <QueueListIcon className="h-4 w-4 text-gray-darker" />,
        },
        {
          caption: "Just For You",
          icon: <StarIcon className="h-4 w-4 text-gray-darker" />,
        },
        {
          caption: "Top Charts",
          icon: <FireIcon className="h-4 w-4 text-gray-darker" />,
        },
      ],
    },
    {
      title: "your playlists",
      titleEndIcon: <PlusCircleIcon className="h-5 w-5" />,
      menus: [
        {
          caption: "Workout Mix",
          icon: <ListBulletIcon className="h-4 w-4 text-gray-darker" />,
        },
        {
          caption: "Chillin' at Home",
          icon: <ListBulletIcon className="h-4 w-4 text-gray-darker" />,
        },
        {
          caption: "Booping at Adobe",
          icon: <ListBulletIcon className="h-4 w-4 text-gray-darker" />,
        },
        {
          caption: "XD 4 Life",
          icon: <ListBulletIcon className="h-4 w-4 text-gray-darker" />,
        },
      ],
    },
  ];

  return (
    <div className="w-[300px] px-8 pb-5 overflow-x-hidden overflow-y-auto bg-gray-bg rounded-b-[40px]">
      {/* Sidebar Header */}
      <div className="w-full flex items-center gap-3 my-6">
        <div
          className="w-10 h-10 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${AvatarImg})`,
          }}
        ></div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm">Joshua</p>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex justify-center items-center border w-fit px-1 border-1 rounded-sm border-gray-light">
            <p className="font-semibold text-[8px] text-center text-gray-light uppercase mb-0">
              Premium
            </p>
          </div>
        </div>
      </div>

      {sidebarMenuGps.map((group, index) => (
        <SidebarMenuGp
          titleEndIcon={group.titleEndIcon}
          key={index}
          gpTitle={group.title}
          menus={group.menus}
        />
      ))}
    </div>
  );
};

export default Sidebar;
