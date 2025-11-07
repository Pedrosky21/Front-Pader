import navImage from "../assets/nav.png";

const Nav: React.FC = () => {
  return (
    <div className="flex justify-between w-full">
      {/* <div className="flex"></div>
      <div></div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div> */}
      <img src={navImage} alt="nav" className="object-cover w-full h-20" />
    </div>
  );
};

export default Nav;
