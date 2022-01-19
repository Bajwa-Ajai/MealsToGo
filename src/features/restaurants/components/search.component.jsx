import React,{useContext,useEffect,useState} from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";


const SearchBarContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;


export const Search=()=>{
    const {keyword,search}=useContext(LocationContext);
    const [searchKeyword,setSearchKeyword]=useState(keyword);
    // console.log(locationContext);
    return (
        <SearchBarContainer>
          <Searchbar 
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
        