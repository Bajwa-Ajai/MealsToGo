import * as React from "react";

import {View, StyleSheet,Image} from "react-native";
import { Favourite } from "../../../components/favourites/favourite.component";
import {Spacer} from '../../../components/spacer/spaces.component'
import styled from "styled-components/native";
import {Card} from "react-native-paper";
import Star from '../../../../assets/star';
import IsOpen from '../../../../assets/isOpen';
import {SvgXml} from "react-native-svg";
import {Text} from "../../../components/typography/text.component";

import {
RestaurantCard,
RestaurantCardCover,
Rating,
Section,
SectionEnd,
Info,
Address,
Icon
} from "./restaurant-info.styles";

export const RestaurantInfoCard = ({
    restaurant = {}
}) => {
    const {
        name = "Fine in Dine ",
        icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-bur" +
                "gers-home-made-600x899.jpg"],
        address = "The Best Place New York",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily=true,
        placeId
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <View>
            <RestaurantCard elevation={5}>
                <Favourite restaurant={restaurant}/>
                <RestaurantCardCover
                    source={{
                    uri: photos[0]
                }}/>
                
                    <Info>
                        <Text variant="label">{name}</Text>
                        <Section>
                            <Rating>
                                {ratingArray.map((_,ind) => (<SvgXml key={`star-${placeId}-${ind}`} width={20} height={20} xml={Star}/>))}
                            </Rating>
                            <SectionEnd>
                                {
                                  isClosedTemporarily &&(<Text variant="error">Closed Temporarily</Text>)
                                }
                                <Spacer position={'left'} size={'large'}>
                                {isOpenNow && <SvgXml width={20} height={20} xml={IsOpen}/>}
                                </Spacer>
                                <Spacer position={'left'} size={'large'}>
                                <Icon source={{uri:icon}} />
                                </Spacer>
                            </SectionEnd>
                        </Section>
                        <Address>{address}</Address>
                    </Info>
                
            </RestaurantCard>
        </View>
    );
};

