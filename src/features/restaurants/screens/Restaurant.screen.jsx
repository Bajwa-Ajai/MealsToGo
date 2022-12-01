import React, { useContext, useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spaces.component";
import { SafeArea } from "../../../components/utility/SafeArea";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Restaurant = ({ navigation }) => {
  const restaurantContext = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const { restaurants, error, loading } = restaurantContext;
  const [isToggled, setIsToggled] = useState(false);
  // console.log(error);
  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <Loading animating={true} color={Colors.blue300} size={50} />
        </LoadingContainer>
      )}
      <>
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
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </TouchableOpacity>
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </>
    </SafeArea>
  );
};
