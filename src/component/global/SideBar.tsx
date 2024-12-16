"use client";
import Image from "next/image";
import React, { JSX, useState } from "react";
import { CiMap } from "react-icons/ci";
import { FaHome, FaQuestionCircle, FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import { MdBarChart, MdContacts, MdPieChart } from "react-icons/md";
import { PiInvoice } from "react-icons/pi";
import { RiLineChartLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

interface ItemObject {
  name: string;
  icon: JSX.Element;
}

type ItemType = ItemObject | ItemObject[];

interface ItemsProps {
  item: ItemType;
  id?: number;
  selected: string;
  setSelected: (name: string) => void;
  show: boolean;
}

interface SideLinkItem {
  name: string;
  icon: JSX.Element;
}

interface SideLink {
  dashboard: SideLinkItem;
  data: SideLinkItem[];
  pages: SideLinkItem[];
  charts: SideLinkItem[];
}

const Items: React.FC<ItemsProps> = ({
  item,
  id = null,
  selected,
  setSelected,
  show,
}) => {

  if (Array.isArray(item)) {
    return (
      <>
        {item.map((value, idx) => {
          const isActive = selected === value.name;
          return (
            <li
              key={idx}
              onClick={() => setSelected(value.name)}
              className={` mb-3 ${
                show ? "ms-5 flex items-center gap-10" : ""
              } hover:text-blueAccent-400 ${isActive ? "text-blueAccent-400" : ""}`}
            >
              <p className="cursor-pointer">{value.icon}</p>
              <p className={`cursor-pointer ${!show ? 'absolute -left-[9rem]' : 'relative'}`}>{value.name}</p>
            </li>
          );
        })}
      </>
    );
  }


  return (
    <li
        key={id}
        onClick={() => setSelected(item.name)}
        className={` mb-3 relative ${
          show ? "ms-5 flex items-center gap-10" : ""
        } hover:text-blueAccent-400 ${selected === item.name ? "text-blueAccent-400" : ""}`}
      >
        <p className="cursor-pointer">{item.icon}</p>
        <p className={`cursor-pointer ${!show ? 'absolute -left-[9rem]' : 'relative'}`}>{item.name}</p>
      </li>
  )


};

const SideBar = () => {
  const [selected, setSelected] = useState<string>("Dashboard");
  const [show, setShow] = useState<boolean>(true);

  const handleHamburger = () => {
    setShow(!show);
    console.log(show);
  };

  const SIDE_LINK: SideLink[] = [
    {
      dashboard: {
        name: "Dashboard",
        icon: <FaHome size={20}/>,
      },
      data: [
        {
          name: "Manage Team",
          icon: <FaUserGroup />,
        },
        {
          name: "Contact Information",
          icon: <MdContacts />,
        },
        {
          name: "Invoices Balances",
          icon: <PiInvoice />,
        },
      ],
      pages: [
        {
          name: "Profile Form",
          icon: <FaUser />,
        },
        {
          name: "Calendar",
          icon: <IoMdCalendar />,
        },
        {
          name: "FAQ Page",
          icon: <FaQuestionCircle />,
        },
      ],
      charts: [
        {
          name: "Bar Chart",
          icon: <MdBarChart />,
        },
        {
          name: "Pie Chart",
          icon: <MdPieChart />,
        },
        {
          name: "Line Chart",
          icon: <RiLineChartLine />,
        },
        {
          name: "Geography Chart",
          icon: <CiMap />,
        },
      ],
    },
  ];

  return (
    <div
      className={`${
        show ? "w-[30vw]" : "w-20"
      } ease-in duration-300 min-h-screen dark:bg-primary-400 bg-light-400`}
    >
      <div
        className={`${
          show ? "justify-between items-center px-10" : "justify-center "
        } flex  py-4`}
      >
        {show && <h2 className="text-3xl">Admin</h2>}
        <RxHamburgerMenu
          onClick={() => handleHamburger()}
          className="!cursor-pointer"
          size={20}
        />
      </div>

      {show && (
        <div className="flex flex-col items-center">
          <Image
            src="https://i.pravatar.cc/100?img=3"
            width={100}
            height={100}
            alt=""
            className="rounded-full mb-4"
          />
          <h2 className="text-3xl font-extrabold"> El Chupapi </h2>
          <p className="text-lg text-greenAccent-500">VP admin</p>
        </div>
      )}

      <ul className="flex justify-center px-10 mt-5">
        {SIDE_LINK.map((value, idx) => {
          return (
            <div key={idx}>
              <div className="mb-5">
                {show && (<p className="mb-2">Dashboard</p>)}
                {value.dashboard && (
                  <Items
                    show={show}
                    setSelected={setSelected}
                    selected={selected}
                    item={value.dashboard}
                  />
                )}
              </div>

              <div className="mb-5">
                {show && (<p className="mb-2">Data</p>)}
                  <Items
                    show={show}
                    setSelected={setSelected}
                    selected={selected}
                    item={value.data}
                  />
              </div>
              <div className="mb-5">
                {show && (<p className="mb-2">Pages</p>)}
                    <Items
                      show={show}
                      selected={selected}
                      setSelected={setSelected}
                      item={value.pages}
                    />
              </div>
              <>
                {show && (<p className="mb-2">Chart</p>)}
                <Items
                  show={show}
                  selected={selected}
                  setSelected={setSelected}
                  item={value.charts}
                />
              </>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
