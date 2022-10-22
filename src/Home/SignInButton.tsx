import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const SignButton = styled.button`
  background-color: #fff;
  border-radius: 164px;
  cursor: pointer;
  font-family: Plus Jakarta Sans, sans-serif;
  font-size: 20px;
  top: 40%;
  position: absolute;
  padding: 17px 38px 20px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonborder;
  border-image: initial;
`;

const MainContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const FontAwesome = styled(FontAwesomeIcon)`
  display: inline;
  padding-left: 10px;
`;

interface SignInButtonProps {
  handleLogin: () => void;
  text?: string;
  id?: string;
}

const SignInButton = ({ id, handleLogin, text }: SignInButtonProps) => {
  return (
    <MainContainer>
      <SignButton id={id} onClick={handleLogin}>
        {text}
        <FontAwesome icon={faArrowRightLong} size="1x" />
      </SignButton>
    </MainContainer>
  );
};
export default SignInButton;
// "You have created a new client application that uses libraries for user authentication or authorization that will soon be deprecated. New clients must use the new libraries instead; existing clients must also migrate before these libraries are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
