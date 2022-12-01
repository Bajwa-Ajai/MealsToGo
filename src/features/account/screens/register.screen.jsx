import React, { useState, useContext, useEffect } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthInput,
  AuthButton,
  ErrorContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authenication.context";
import { Spacer } from "../../../components/spacer/spaces.component";
import { Text } from "../../../components/typography/text.component";
import { Title } from "../components/account.styles";
import { ActivityIndicator, Colors } from "react-native-paper";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, clearError, isLoading } = useContext(
    AuthenticationContext
  );

  useEffect(() => {
    clearError();
  }, []);
  // console.log(error);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>MealsToGo</Title>
      <AccountContainer>
        <AuthInput
          mode="outlined"
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            mode="outlined"
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            mode="outlined"
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
