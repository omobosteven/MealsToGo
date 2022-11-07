import React from "react";
import { useTheme } from "@emotion/react";

export const withAttrs = (Component, fn) => (props) => {
	const theme = useTheme();
	const attrs = fn({ theme, props });

	return <Component {...props} {...attrs} />;
};
