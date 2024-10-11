import {
	useSensor,
	MouseSensor,
	TouchSensor,
	KeyboardSensor,
	useSensors,
} from "@dnd-kit/core";

export const useDndSensors = () => {
	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor),
	);

	return sensors;
};
