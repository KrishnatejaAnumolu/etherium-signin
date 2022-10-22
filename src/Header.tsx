import styled from "styled-components";
import samudailogo from "./samudailogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const MainHeader = styled.div`
  left: 0;
  padding: 50px 0 25px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 0 25px;
  justify-content: space-between;
`;

const HeaderLogo = styled.img`
  align-items: center;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  max-width: 145px;
`;

const LinksList = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const CalendarLink = styled(Link)`
  cursor: pointer;
  display: inline-block;
  height: 48px;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  width: 48px;
  color: white;
`;

const StatsLink = styled(Link)`
  cursor: pointer;
  display: inline-block;
  height: 48px;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  width: 48px;
  margin-right: 20px;
  color: white;
`;
const FontAwesome = styled(FontAwesomeIcon)`
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0 0 2px #888;
  padding: 0.5em 0.6em;
`;

interface HeaderProps {
  isLoggedIn: boolean;
}
const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <MainHeader>
      <HeaderContainer>
        <Link to="/">
          <HeaderLogo src={samudailogo} alt="logo" />
        </Link>
        {isLoggedIn && (
          <LinksList>
            <StatsLink to="./stats">
              <FontAwesome icon={faUser} size="lg" />
            </StatsLink>
            <CalendarLink to="./dashboard">
              <FontAwesome icon={faCalendarPlus} size="lg" />
            </CalendarLink>
          </LinksList>
        )}
      </HeaderContainer>
    </MainHeader>
  );
};

export default Header;
