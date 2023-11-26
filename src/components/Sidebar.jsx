import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";

import { userStateContext } from "../contexts/ContextProvider";

function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = userStateContext();

  const handleCloseSidebar = ()=>{
    if(activeMenu && screenSize <=900){
      setActiveMenu(false);
  }else{
    setActiveMenu((prev)=> !prev)
  }
}

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 ";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              to={"/"}
              onClick={() => {
               handleCloseSidebar()
              }}
            >
              <SiShopware /> All In One
            </Link>

            <TooltipComponent content={"Menu"} position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  handleCloseSidebar()
                }}
                className="text-xl rounded-full p-3 hover:bg-light-gray
        mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item, index) => (
              <div key={index}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link, index) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    style={({isActive})=>( { backgroundColor: isActive ? currentColor : ''})}
                    onClick={() => {handleCloseSidebar()}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
