import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/SafeArea";
import { AuthenticationContext } from "../../../services/authentication/authenication.context";
import { Spacer } from "../../../components/spacer/spaces.component";
import { Text } from "../../../components/typography/text.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <>
      <SafeArea>
        <AvatarContainer>
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingsItem
            title="SignOut"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={() => onLogout()}
          />
        </List.Section>
      </SafeArea>
    </>
  );
};
