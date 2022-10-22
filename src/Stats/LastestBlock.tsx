import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Web3 from "web3";
import styled from "styled-components";

let web3: Web3 | undefined = undefined;

const Container = styled.div`
  top: calc(100vh - 150px);
  right: 40px;
  position: absolute;
  box-sizing: border-box;
`;

const columns = [
  {
    name: "Block Number",
    selector: (row: any) => row.latestBlockNumber,
  },
];

const LatestBlock = () => {
  const [latestBlockNumber, setLatesBlockNumber] = useState("loading...");

  const getLatestBlock = async () => {
    if (!web3) {
      try {
        await window.ethereum.enable();
        web3 = new Web3(window.ethereum);
      } catch (error) {
        return;
      }
    }
    const blockNumber = await web3.eth.getBlockNumber();
    setLatesBlockNumber(blockNumber.toString());
    const subscription = web3?.eth.subscribe(
      "newBlockHeaders",
      (error, result) => {
        if (error) {
          console.error(error);
        } else {
          setLatesBlockNumber(result.number.toString());
        }
      }
    );

    // unsubscribes the subscription
    subscription?.unsubscribe(function (error, success) {
      if (success) {
        console.log("Successfully unsubscribed!");
      }
    });
  };

  useEffect(() => {
    getLatestBlock();
  }, []);

  return (
    <Container>
      <DataTable
        theme="dark"
        customStyles={{
          table: { style: { width: "400px" } },
          header: { style: { width: "400px" } },
          progress: { style: { width: "400px" } },
        }}
        title="Latest Block number(Auto fetched)"
        columns={columns}
        data={[{ latestBlockNumber }]}
      />
    </Container>
  );
};
export default LatestBlock;
