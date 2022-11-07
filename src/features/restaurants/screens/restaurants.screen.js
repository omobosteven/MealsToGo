import React, { useContext, useState } from "react";
import styled from "@emotion/native";
import { View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { FadeInView } from "../../../components/animations/fade.animation";
import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantList } from "../components/restaurant-list.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;
const LoadingContainer = styled(View)`
	position: absolute;
	top: 50%;
	left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
	const [isToggled, setIsToggled] = useState(false);
	const { isLoading, restaurants } = useContext(RestaurantsContext);
	const { favourites } = useContext(FavouritesContext);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating={true} color={Colors.blue300} />
				</LoadingContainer>
			)}
			<Search
				isFavouritesToggled={isToggled}
				onFavouritesToggle={() => setIsToggled(!isToggled)}
			/>
			{isToggled && (
				<FavouritesBar
					favourites={favourites}
					onNavigate={navigation.navigate}
				/>
			)}
			<RestaurantList
				data={restaurants}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("RestaurantDetail", { restaurant: item })
						}
					>
						<Spacer position="bottom" size="large">
							<FadeInView>
								<RestaurantInfoCard restaurant={item} />
							</FadeInView>
						</Spacer>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	);
};
