import React,{createContext,useState} from "react";


export const FavouritesContext=createContext();

export const FavouritesContextProvider=({children})=>{
    const [favourites,setFavourites]=useState([]);

    const add=(restaurant)=>{
        setFavourites([...favourites,restaurant]);
    }
    const remove=(restaurant)=>{
        const newList=favourites.filter((x)=>{
            return x.placeId !==restaurant.placeId;
        });
        setFavourites(newList);
    }
    
    return (
        <FavouritesContext.Provider
        value={{
            favourites,
            addToFavourites:add,
            removeFromFavourites:remove
        }}>
            {children}
        </FavouritesContext.Provider>
    );
} 