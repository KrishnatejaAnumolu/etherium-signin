import TransactionsWidget from "./TransactionsWidget";
import styled from "styled-components";
import LatestBlock from "./LastestBlock";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding-top: 120px;
  padding-left: 40px;
`;
const Stats = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("publicAddress")) navigate("/");
  }, [navigate]);

  return (
    <Container>
      <TransactionsWidget />
      <LatestBlock />
    </Container>
  );
};

export default Stats;
