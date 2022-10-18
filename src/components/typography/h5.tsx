import * as React from "react";
import { joinTxts } from "../../utils/text.util";

type H5Props = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const H5 = ({ children, className = "", ...props }: H5Props) => {
	return (
		<h5 className={joinTxts("font-body font-semibold text-lg", className)} {...props}>
			{children}
		</h5>
	);
};

export default H5;