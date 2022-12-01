import React,{useState,createContext,useEffect,useContext,useMemo} from "react";
import {restaurantsTransform,restaurantRequest} from "./restaurantsService";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext=createContext();

export const RestaurantsContextProvider=({children})=>{
    const [restaurants,setRestaurants]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const {location}=useContext(LocationContext);

    const retreiveRestaurants=(loc)=>{
        setLoading(true);
        setRestaurants([]);
        setTimeout(()=>{
            restaurantRequest(loc)
            .then(restaurantsTransform)
            .then((results)=>{
                setLoading(false);
                setRestaurants(results);
            }).catch((err)=>{
                setLoading(false);
                setError(err);
            });
        },2000);
    }

    useEffect(()=>{
        if(location){
            const locationString=`${location.lat},${location.lng}`;
            retreiveRestaurants(locationString);
        }
    },[location])
    return(
        <RestaurantsContext.Provider
        value={{
            restaurants:restaurants,
            loading:loading,
            error:error
        }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
}