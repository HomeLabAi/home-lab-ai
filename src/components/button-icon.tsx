import * as React from "react";
import { navigate } from "@reach/router";
import { joinTxts } from "../utils/text.util";

export type ButtonType = "fill" | "outline" | "ghost" | "disabled";

const buttonClass: Record<ButtonType, string> = {
	fill: "bg-blue-700 fill-gray-50 hover:bg-blue-600 active:bg-blue-800",
	outline: "border-blue-700 border-2 fill-blue-700 hover:bg-gray-200 active:bg-gray-300",
	ghost: "fill-blue-700 hover:bg-gray-200 active:bg-gray-300",
	disabled: "fill-gray-500 cursor-not-allowed",
};

type ButtonIconProps = {
	Icon: React.FC<React.HTMLAttributes<HTMLOrSVGElement>>;
	disabled?: boolean;
	type?: ButtonType;
	link?: string;
} & React.HTMLAttributes<HTMLElement>;

const ButtonIcon = ({
	Icon,
	disabled = false,
	type = "ghost",
	link,
	className = "",
	onClick,
	...props
}: ButtonIconProps) => {
	const handleClicked = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (disabled) return;

		if (link) {
			navigate(link);
			return;
		}

		if (onClick) onClick!(event);
	};

	return (
		<Icon
			className={joinTxts("rounded-full p-2 cursor-pointer", buttonClass[disabled ? "disabled" : type], className)}
			onClick={handleClicked}
			{...props}
		/>
	);
};

export default ButtonIcon;
