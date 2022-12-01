import React from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spaces.component";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          loop
          autoPlay
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>MealsToGo</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
