import PropTypes from "prop-types";
import ButtonLoader from "./BaseLoader";

const BaseButton = ({ children, className, isLoading, ...props }) => {
  return (
    <button
      type="submit"
      className={`w-full bg-[var(--black)] rounded-[4px] text-white text-xs ${className}`}
      {...props}
    >
      {isLoading ? <ButtonLoader /> : <>{children}</>}
    </button>
  );
};

BaseButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default BaseButton;
