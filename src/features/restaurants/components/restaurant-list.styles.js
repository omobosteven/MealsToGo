import styled from "@emotion/native";
import { FlatList } from "react-native";
import { withAttrs } from "../../../utilities/withAttrs";

export const RestaurantList = withAttrs(
	styled(FlatList)``,
	({ props, theme }) => ({
		contentContainerStyle: {
			padding: 16,
		},
	})
);
