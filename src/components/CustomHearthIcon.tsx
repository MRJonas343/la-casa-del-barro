import { FaHeart } from "react-icons/fa";

export const CustomHeartIcon = ({ ...props }) => {
	const { isSelected, isIndeterminate, disableAnimation, ...rest } = props;
	return <FaHeart {...rest} />;
};
