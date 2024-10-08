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
	{ id: "animals", icon: <SiAnimalplanet /> },
	{ id: "business", icon: <MdAttachMoney /> },
	{ id: "education", icon: <LuFileSpreadsheet /> },
	{ id: "enviroment", icon: <FaEnvira /> },
	{ id: "finance", icon: <FaMoneyBillTrendUp /> },
	{ id: "health", icon: <FaBriefcaseMedical /> },
	{ id: "history", icon: <RiFilePaperFill /> },
	{ id: "literature", icon: <FaBook /> },
	{ id: "maths", icon: <TbMath /> },
	{ id: "science", icon: <MdOutlineScience /> },
	{ id: "sports", icon: <MdSportsVolleyball /> },
	{ id: "technology", icon: <GrTechnology /> },
];
