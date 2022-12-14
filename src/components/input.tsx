import React, { HTMLAttributes } from "react";
import { joinTxts } from "../utils/text.util";
import Stack from "./layout/stack";
import Text from "./typography/text";

type InputProps = {
	error?: string;
	after?: JSX.Element;
	refInput?: any;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({
	type = "text",
	placeholder = "",
	value,
	onChange,
	error,
	after,
	className = "",
	refInput,
	accept,
}: InputProps) => {
	return (
		<Stack className={joinTxts("gap-2 items-center", className)}>
			<Stack column className="gap-1 flex-grow">
				<input
					ref={refInput}
					className="font-body font-medium text-base flex-grow w-full px-2 py-1"
					value={value}
					onChange={onChange}
					type={type}
					placeholder={placeholder}
					accept={accept}
				/>
				{error && <Text className="text-red-500">{error}</Text>}
			</Stack>
			{after}
		</Stack>
	);
};

export default Input;
