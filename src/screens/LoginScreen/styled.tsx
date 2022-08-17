import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/system";

export const LoginScreenWrapper = styled("div")`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const ImageWrapper = styled("div")`
  background-color: #d43939;
  width: 50%;

  @media (max-width: 752px) {
    display: none;
  }
`;

export const FormContainer = styled("div")`
  width: 50%;

  @media (max-width: 752px) {
    width: 100%;
  }
`;

export const FormWrapper = styled("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
`;

export const SalutationWrapper = styled("div")`
  font-size: 36px;
  margin-bottom: 8px;
`;

export const SalutationSubTextWrapper = styled("div")`
  font-size: 16px;
  margin-bottom: 18px;
  color: #969696;
`;

export const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const OptionContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const SignInButton = styled(Button)`
  color: white;
  background-color: #d43939;
  margin-bottom: 12px;
  width: 100%;
  &:hover {
    background-color: #E11616;
  }
`;

export const SignInWithGoogleButton = styled(Button)`
  background-color: white;
  color: #5a5a5a;
  margin-bottom: 12px;
  width: 100%;
  &:hover {
    background-color: #D9D9D9
  }
`;

export const RememberMeControlLabel = styled(FormControlLabel)`
  width: 55%;
  font-size: 10px;
  text-align: left;
`;

export const ForgotPasswordLink = styled("a")`
  text-decoration: none;
  color: #d43939;
  font-weight: 500;
  width: 45%;
  font-size: 14px;
  text-align: right;
`;

export const SignUpContainer = styled("span")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpLink = styled("a")`
  text-decoration: none;
  color: #d43939;
  font-weight: 500;
`;
