import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/native";
import { View, FlatList } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utitlity/safe-area.component";

import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

const withAttrs = (Component, fn) => (props) => {
	const theme = useTheme();
	const attrs = fn({ theme, props });

	return <Component {...props} {...attrs} />;
};

const RestaurantList = withAttrs(styled(FlatList)``, ({ props, theme }) => ({
	contentContainerStyle: {
		padding: 16,
	},
}));

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;
const LoadingContainer = styled(View)`
	position: absolute;
	top: 50%;
	left: 50%;
`;

export const RestaurantsScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={Colors.blue300} />
				</LoadingContainer>
			)}
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => (
					<Spacer position="bottom" size="large">
						<RestaurantInfoCard restaurant={item} />
					</Spacer>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
