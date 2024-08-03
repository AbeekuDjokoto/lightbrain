import PropTypes from "prop-types";
import { HeartIcon } from "../../assets";

const DetailedListingCard = (props) => {
  const { image, title, location, price, amenities } = props.data;

  return (
    <div className="border border-[#d1d5db] rounded-lg max-w-[736px] w-full flex">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="h-full max-w-[317px] w-full"
          loading="lazy"
        />
        <div className="absolute right-3 top-3 rounded-full w-[35px] h-[35px] bg-white border border-[#d1d5db] text-[#76777FFF] font-bold flex items-center justify-center">
          <HeartIcon />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 max-w-[416px] w-full">
        <h3 className="text-[#111928] font-bold text-sm leading-[22px]">
          {title}
        </h3>
        <p className="text-sm leading-[17px] text-[#6b7280]">{location}</p>
        <div className="flex gap-2 flex-wrap">
          {amenities.map((amenities, index) => {
            return (
              <div className="py-1 px-2 bg-[#f3f4f6]" key={index}>
                <p className="text-sm text-black">{amenities}</p>
              </div>
            );
          })}
        </div>
        <p className="text-sm leading-[18px] text-[#111928]">
          From{" "}
          <span className="text-[16px] leading-5 font-extrabold">
            ${price}/
          </span>{" "}
          week{" "}
        </p>
      </div>
    </div>
  );
};

DetailedListingCard.propTypes = {
  data: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
};

export default DetailedListingCard;
