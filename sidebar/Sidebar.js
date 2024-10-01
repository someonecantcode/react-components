import { useState } from "react";


import SidebarTab from "./SidebarTab";
import { INTERNAL_LINKS } from "../../utils/links";

const Sidebar = () => {
    const [open, setOpen] = useState(false);


    function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay));
     }

    async function toggleMenu() {
        await timeout(10);
        setOpen(!open);
        console.log(open);
    }


    return( 

    <div className={`${open ? "w-[10%]" : "animate-fadeOUT w-[3%]"} items-center text-center  fixed h-full  min-w-[10px] overflow-x-hidden bg-sidebar-bg text-accent-text-color  transition-[width] duration-[0.3s] ease-[ease] left-0 top-0 `}>
          <button className="bg-sidebar-accent w-full cursor-pointer text-2xl flex justify-center p-2.5 border-[none]" onClick={toggleMenu}>
              ☰ <span className="hidden ml-2.5 ">Menu</span>
          </button>
          <nav className={`${open ? "block bg-opacity-40 animate-fadeIN" : "hidden"} text-center flex-col p-2.5 duration-200`} id="menu">
            <SidebarTab text="Home" to={INTERNAL_LINKS.HOME} onClick={toggleMenu} />
            <SidebarTab text="About" to={INTERNAL_LINKS.HOME} onClick={toggleMenu} />
            <SidebarTab text="Credits" to={INTERNAL_LINKS.HOME} onClick={toggleMenu} />
            <SidebarTab text="Lessons" to={INTERNAL_LINKS.HOME} onClick={toggleMenu} />

              <a href="#">Practice</a>
          </nav>
      </div>
    );
};
/*
 <div class="items-center ">
        <a href="#" class="hover:text-default-text-color text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
        <button type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
    */

export default Sidebar
