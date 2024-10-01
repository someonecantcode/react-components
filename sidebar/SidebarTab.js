import { Link } from "react-router-dom";

const SidebarTab = ({ text, path, onClick }) => {
  return (
    <Link
      className="font-productsans text-xl rounded-[5px]  hover:text-gray-500 duration-200"
      to={path}
      onClick={onClick}
    >
      {text}
      <hr className="w-[50%] m-auto "></hr>
    </Link>
  );
};

export default SidebarTab;
