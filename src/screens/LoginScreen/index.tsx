import { Checkbox } from "@mui/material";
import TextInput from "../../components/TextInput";
import {
  OptionContainer,
  SalutationWrapper,
  SalutationSubTextWrapper,
  RememberMeControlLabel,
  ForgotPasswordLink,
  SignInButton,
  SignUpContainer,
  SignUpLink,
  SignInWithGoogleButton,
  LoginScreenWrapper,
  FormWrapper,
  FormContainer,
  ImageWrapper,
  InputContainer,
} from "./styled";

const LoginScreen = () => {
  return (
    <LoginScreenWrapper>
      <FormContainer>
        <FormWrapper>
          <SalutationWrapper>Welcome Back</SalutationWrapper>
          <SalutationSubTextWrapper>
            Please enter your details
          </SalutationSubTextWrapper>
          <InputContainer>
            <TextInput
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              placeholder="Enter your email"
            />
            <TextInput
              id="password"
              label="Password"
              name="password"
              variant="outlined"
              placeholder="Enter your password"
            />
          </InputContainer>
          <OptionContainer>
            <RememberMeControlLabel
              label="Remember me"
              control={<Checkbox />}
              style={{
                fontSize: 10,
              }}
            />
            <ForgotPasswordLink href="#">Forgot Password</ForgotPasswordLink>
          </OptionContainer>
          <SignInButton variant="contained">Sign in</SignInButton>
          <SignInWithGoogleButton variant="contained">
            Sign in with Google
          </SignInWithGoogleButton>
          <SignUpContainer>
            Don't have an account? &nbsp;
            <SignUpLink href="#">Sign up</SignUpLink>
          </SignUpContainer>
        </FormWrapper>
      </FormContainer>
      <ImageWrapper />
    </LoginScreenWrapper>
  );
};

export default LoginScreen;
