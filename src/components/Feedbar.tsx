import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";

function Feedbar() {
  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-2xl">
      <div className="flex items-center sm:justify-between px-3 text-[#d9d9d9] sticky top-0 z-50 border-b border-gray-700">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation">
          <SparklesIcon className="h-8" />
        </div>
      </div>
      <Input />
    </div>
  );
}

export default Feedbar;
