import { heroImage } from "../../assets";
import BaseSearchInput from "../shared/BaseSearchInput";

const Header = () => {
  return (
    <header>
      <div className="mx-auto flex items-center justify-between w-90 max-w-custom">
        <div className="relative">
          <img src={heroImage} alt="" className="rounded-[4px]" />
          <div className="flex flex-col gap-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-5xl font-extrabold ">
              Find a home in a neighborhood you love.
            </h1>
            <div className="">
              <BaseSearchInput placeholder="Search for a neighborhood near you" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
