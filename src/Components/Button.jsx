/* eslint-disable react/prop-types */

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-semibold text-[18px] text-black bg-emerald-300 rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
