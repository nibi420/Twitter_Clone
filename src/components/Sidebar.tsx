import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="hidden xl:flex sm:flex flex-col items-center xl:items-start p-2 h-full ml-24">
      <div className="flex items center justify center hoverAnimation">
        <Image
          src="https://rb.gy/ogau5a"
          alt="twitter-logo"
          height={40}
          width={34}
        />
      </div>
      <div className="space-y-7 xl:space-y-2.5 mt-5 mb-2.5">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] rounded-full w-56 h-[52px] text-lg font-bold hover:bg-teal-400">
        Tweet
      </button>
      <div className="mt-10 flex flex-row items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5">
        <img
          src="muneeb_profile_pic.jpg"
          alt="muneeb-profile"
          className="rounded-full w-10 h-10 xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5 flex space-y-1">
          <h4>Muneeb Akmal</h4>
          <p className="text-[#6d6b6b99]">@muneebak2kx</p>
        </div>
        <DotsHorizontalIcon className="h-7 text-[#6d6b6b99] ml-2 hidden xl:inline" />
      </div>
    </div>
  );
}

export default Sidebar;
