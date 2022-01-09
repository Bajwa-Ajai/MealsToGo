import * as React from "react";
import {
  FlatList,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spaces.component";
import { SafeArea } from "../../../components/utility/SafeArea";

const SearchBarContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList=styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16
  }
})``;

export const Restaurant = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
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
        ]}
        renderItem={() => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
