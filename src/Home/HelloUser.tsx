import styled from "styled-components";

const Container = styled.div`
  font-family: Plus Jakarta Sans, sans-serif;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
`;

const Banner = styled.h1`
  align-self: center;
  top: 40%;
  position: absolute;
`;

const HelloUser = () => {
  return (
    <Container>
      <Banner>Hello {sessionStorage.getItem("publicAddress")} !</Banner>
    </Container>
  );
};

export default HelloUser;
