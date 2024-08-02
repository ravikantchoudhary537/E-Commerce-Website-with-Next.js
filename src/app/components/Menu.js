import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];
const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <li className="hidden md:flex items-center gap-8 font-medium text-black">
      {/* {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li className="cursor-pointer list-none flex items-center gap-2 relative">
                {item.name}
                <BsChevroDown size={14} />
                {showCatMenu && (
                    <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-lg">
                        {subMenuData.map((subMenu) => {
                            return(
                                <Link key={subMenu.id} href="/">
                                    <li className="h-12 flex justify-between items-center hover:bg-black/[0.03] px-3 rounded-md">{subMenu.name}</li>
                                    <span className="text-sm opacity-50">78</span>
                                </Link>
                            )
                        })}
                    </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer list-none">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })} */}

      {/* {data.map((item) => (
        <React.Fragment key={item.id}>
          {!!item?.subMenu ? (
            <li className="cursor-pointer list-none flex items-center gap-2 relative">
              {item.name}
              <BsChevronDown size={14} />
              {showCatMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-lg">
                  {subMenuData.map((subMenu) => (
                    <li
                      key={subMenu.id}
                      className="h-12 flex justify-between items-center hover:bg-black/[0.03] px-3 rounded-md"
                    >
                      <Link href="/">
                        <a className="flex justify-between items-center w-full">
                          {" "}
                         
                          {subMenu.name}
                          <span className="text-sm opacity-50">78</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer list-none">
              <Link href={item?.url}>
                <a>{item.name}</a> 
              </Link>
            </li>
          )}
        </React.Fragment>
      ))} */}
       {data.map((item) => (
        <React.Fragment key={item.id}>
          {!!item?.subMenu ? (
            <li className="cursor-pointer list-none flex items-center gap-2 relative"
            onMouseEnter={() => setShowCatMenu(true)}
            onMouseLeave={()=>setShowCatMenu(false)}
            >
              {item.name}
              <BsChevronDown size={14} />
              {showCatMenu && (
                <ul className="bg-white absolute top-6 -left-4 min-w-[250px] px-4 py-1 text-black shadow-lg">
                  {subMenuData.map((subMenu) => (
                    <li key={subMenu.id} className="h-12 flex justify-between items-center hover:bg-black/[0.03] px-3 rounded-md" 
                    onClick={() => setShowCatMenu(false)}
                    >
                      <Link href="/" className="flex justify-between items-center w-full" >
                        
                          {subMenu.name}
                          <span className="text-sm opacity-50">78</span>
                       
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer list-none">
              <Link href={item?.url}>
                {item.name}
              </Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </li>
  );
};

export default Menu;
