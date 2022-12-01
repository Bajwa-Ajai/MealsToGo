import React,{useContext,useEffect,useState} from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";


const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;


export const Search=({isFavouritesToggled,onFavouritesToggle})=>{
    const {keyword,search}=useContext(LocationContext);
    const [searchKeyword,setSearchKeyword]=useState(keyword);
    // console.log(locationContext);
    useEffect(()=>{
      setSearchKeyword(keyword);
    },[keyword]);
    return (
        <SearchBarContainer>
          <Searchbar 
          icon={isFavouritesToggled?"heart":"heart-outline"}
          onIconPress={onFavouritesToggle}
          placeholder="Search for locations"
          value={searchKeyword}
          onSubmitEditing={()=>{
              search(searchKeyword);
          }}
          onChangeText={(text)=>{
              setSearchKeyword(text);
          }}
          />
        </SearchBarContainer>
    );
}
        