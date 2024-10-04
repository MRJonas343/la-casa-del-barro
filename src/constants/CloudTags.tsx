import { FaEnvira, FaBook, FaBriefcaseMedical } from "react-icons/fa";
import { MdOutlineScience, MdSportsVolleyball } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";
import { RiFilePaperFill } from "react-icons/ri";
import { SiAnimalplanet } from "react-icons/si";
import { MdAttachMoney } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { TbMath } from "react-icons/tb";

export const tabs = [
	{
		id: "/education",
		label: "Education",
		icon: <LuFileSpreadsheet />,
	},
	{
		id: "/technology",
		label: "Technology",
		icon: <GrTechnology />,
	},

	{
		id: "/enviroment",
		label: "Enviroment",
		icon: <FaEnvira />,
	},
	{
		id: "/science",
		label: "Science",
		icon: <MdOutlineScience />,
	},
	{
		id: "/literature",
		label: "Literature",
		icon: <FaBook />,
	},
	{
		id: "/health",
		label: "Health",
		icon: <FaBriefcaseMedical />,
	},
	{
		id: "/business",
		label: "Business",
		icon: <MdAttachMoney />,
	},
	{
		id: "/finance",
		label: "Finance",
		icon: <FaMoneyBillTrendUp />,
	},
	{
		id: "/maths",
		label: "Maths",
		icon: <TbMath />,
	},
	{
		id: "/History",
		label: "History",
		icon: <RiFilePaperFill />,
	},
	{
		id: "/animals",
		label: "Animals",
		icon: <SiAnimalplanet />,
	},
	{
		id: "/sports",
		label: "Sports",
		icon: <MdSportsVolleyball />,
	},
];
