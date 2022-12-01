import React,{useContext,useEffect,useState} from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";


const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position:absolute;
  z-index:999;
  top:30px;
  width:100%;
`;


export const Search=()=>{
    const {keyword,search}=useContext(LocationContext);
    const [searchKeyword,setSearchKeyword]=useState(keyword);
    // console.log(locationContext);
    useEffect(()=>{
        setSearchKeyword(keyword);
    },[keyword]);
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
        