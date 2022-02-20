import React, { useContext } from "react";
import { FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spaces.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  // console.log(error);
  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No Favourites Yet</Text>
    </NoFavouritesArea>
  );
};
