import { useTheme } from "@emotion/react";
import styled from "@emotion/native";
import React from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utitlity/safe-area.component";

import { Spacer } from "../../../components/spacer/spacer.component";

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

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
