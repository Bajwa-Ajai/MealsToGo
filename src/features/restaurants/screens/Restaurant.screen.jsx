import React, { useContext } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spaces.component";
import { SafeArea } from "../../../components/utility/SafeArea";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";
import { Search } from "../components/search.component";

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
  const { restaurants, error, loading } = restaurantContext;
  // console.log(error);
  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <Loading animating={true} color={Colors.blue300} size={50} />
        </LoadingContainer>
      )}
      <>
        <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <TouchableOpacity
                  onPress={() => navigation.navigate("RestaurantDetails")}
                >
                  <RestaurantInfoCard restaurant={item} />
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
