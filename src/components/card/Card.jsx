import { HeartIcon } from "../../assets";
import PropTypes from "prop-types";

const Card = (props) => {
  const { image, title, location, price } = props.data;
  return (
    <div className="border border-[#d1d5db] rounded-lg w-[244px]">
      <div className="relative">
        <img src={image} alt="" />
        <div className="absolute right-3 top-3 rounded-full w-[35px] h-[35px] bg-white border border-[#d1d5db] text-[#76777FFF] font-bold flex items-center justify-center">
          <HeartIcon />
        </div>
      </div>
      <div className="px-2 pt-4 pb-4 flex flex-col gap-2">
        <h3 className="text-[#111928] font-bold text-sm leading-[22px]">
          {title}
        </h3>
        <p className="text-sm leading-[17px] text-[#6b7280]">{location}</p>
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

Card.propTypes = {
  data: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
