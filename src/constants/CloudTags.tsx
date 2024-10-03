import { LuFileSpreadsheet } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { FaEnvira } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";

export const tabs = [
	{
		id: "education",
		label: "Education",
		icon: <LuFileSpreadsheet />,
	},
	{
		id: "technology",
		label: "Technology",
		icon: <GrTechnology />,
	},

	{
		id: "enviroment",
		label: "Enviroment",
		icon: <FaEnvira />,
	},
	{
		id: "science",
		label: "Science",
		icon: <MdOutlineScience />,
	},
	{
		id: "literature",
		label: "Literature",
		icon: <FaBook />,
	},
	{
		id: "health",
		label: "Health",
		icon: <FaBriefcaseMedical />,
	},
];
