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
		id: "education",
		icon: <LuFileSpreadsheet />,
	},
	{
		id: "technology",
		icon: <GrTechnology />,
	},

	{
		id: "enviroment",
		icon: <FaEnvira />,
	},
	{
		id: "science",
		icon: <MdOutlineScience />,
	},
	{
		id: "literature",
		icon: <FaBook />,
	},
	{
		id: "health",
		icon: <FaBriefcaseMedical />,
	},
	{
		id: "business",
		icon: <MdAttachMoney />,
	},
	{
		id: "finance",
		icon: <FaMoneyBillTrendUp />,
	},
	{
		id: "maths",
		icon: <TbMath />,
	},
	{
		id: "history",
		icon: <RiFilePaperFill />,
	},
	{
		id: "animals",
		icon: <SiAnimalplanet />,
	},
	{
		id: "sports",
		icon: <MdSportsVolleyball />,
	},
];
