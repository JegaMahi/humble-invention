import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {IoMdHelp} from "react-icons/io";
import {BiTrendingUp} from "react-icons/bi";
import {BsFillBagCheckFill} from "react-icons/bs";
import {MdProductionQuantityLimits} from "react-icons/md";

export const SidebarData = [
{
	title: "Home",
	path: "/home",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	
},
{
	title: "Trending",
	path: "/trending",
	icon: <BiTrendingUp/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Categories",
	path: "/categories",
	icon: <BsFillBagCheckFill/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
	subNav: [
		{
			title: "Electronics",
			path: "/categories/electroincs",
			icon: <MdProductionQuantityLimits />,
			
		},
		{
			title: "Fashion",
			path: "/categories/fashion",
			icon: <MdProductionQuantityLimits />,
			
		},
		
		{
			title: "Kitchen Applience",
			path: "/categories/kitchen Applience",
			icon: <MdProductionQuantityLimits />,
			
		},
		{
			title: "Cosmetics",
			path: "/categories/cosmetics",
			icon: <MdProductionQuantityLimits />,
			
		},
		{
			title: "Gift",
			path: "/categories/gift",
			icon: <MdProductionQuantityLimits />,
			
		},
		{
			title: "Toys",
			path: "/categories/toys",
			icon: <MdProductionQuantityLimits />,
			
		},
		
		],
},
{
	title: "About Us",
	path: "/About Us",
	icon: <IoMdHelp/>,

	
},

];
