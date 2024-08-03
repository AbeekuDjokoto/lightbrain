import React from "react";
import { heroImage } from "../../assets";
import BaseSearchInput from "../shared/BaseSearchInput";
import { ROUTES } from "../../utils/routes-contants";
import { useNavigate } from "react-router";

const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`${ROUTES.SEARCH_RESULTS}?query=${searchQuery}`);
  };

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
              <BaseSearchInput
                placeholder="Search for a neighborhood near you"
                onChange={(e) => setSearchQuery(e.target.value)}
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
