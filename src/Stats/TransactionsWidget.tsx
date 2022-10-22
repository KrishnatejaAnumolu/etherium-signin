import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    name: "Block Number",
    selector: (row: any) => row.blockNumber,
  },
  {
    name: "Hash",
    selector: (row: any) => row.hash,
  },
  {
    name: "Time Stamp",
    selector: (row: any) => new Date(row.timeStamp * 1000).toDateString(),
  },
];

const TransactionsWidget = () => {
  const navigate = useNavigate();

  const getTransactions = async () => {
    try {
      const { data } = await axios.get("https://api.etherscan.io/api", {
        params: {
          module: "account",
          action: "txlist",
          address: sessionStorage.getItem("publicAddress"),
          startblock: 0,
          endblock: 99999999,
          sort: "desc",
          apikey: "YourApiKeyToken",
        },
      });
      if (typeof data?.result === "object")
        setTransactions(data?.result?.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("publicAddress")) navigate("/");
    getTransactions();
  }, [navigate]);

  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  return (
    <DataTable
      theme="dark"
      customStyles={{
        table: { style: { width: "500px" } },
        header: { style: { width: "500px" } },
        progress: { style: { width: "500px" } },
      }}
      title="Your recent five transcations"
      columns={columns}
      data={transactions || []}
      progressPending={isLoading}
    />
  );
};

export default TransactionsWidget;
