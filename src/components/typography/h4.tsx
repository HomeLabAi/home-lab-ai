import * as React from "react";
import { joinTxts } from "../../utils/text.util";

type H4Props = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const H4 = ({ children, className = "", ...props }: H4Props) => {
	return (
		<h4 className={joinTxts("font-body font-semibold text-xl", className)} {...props}>
			{children}
		</h4>
	);
};

export default H4;