import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authenication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);
  // console.log(user.uid);
  const saveFavourites = async (value, uid) => {
    try {
      // console.log(`@favourites-${uid}`);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      // saving error
      console.log("Error saving the value");
    }
  };
  const getFavourites = async (uid) => {
    try {
      // console.log(`@favourites-${uid}`);
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
      console.log("Couldnt read favourites");
    }
  };
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newList = favourites.filter((x) => {
      return x.placeId !== restaurant.placeId;
    });
    setFavourites(newList);
  };

  useEffect(() => {
    getFavourites(user.uid);
    // console.log(user.uid);
  }, [user]);
  useEffect(() => {
    saveFavourites(favourites, user.uid);
    // console.log(user.uid);
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
