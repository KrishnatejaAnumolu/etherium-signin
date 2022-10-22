import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

const Container = styled.div`
  padding: 150px 20px 0px 20px;
`;

const columns = [
  {
    name: "Created Time",
    selector: (row: any) =>
      new Date(row.created).toLocaleTimeString() +
      " " +
      new Date(row.created).toDateString(),
  },
  {
    name: "Description",
    selector: (row: any) => row.summary,
  },
  {
    name: "Location",
    selector: (row: any) => row.location,
  },
];

const EventsWidget = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getEvents = async () => {
    try {
      const { data } = await axios.get(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          params: { timeMin: "2022-01-01T00:12:00.000Z" },
          headers: {
            authorization: `Bearer ${sessionStorage.getItem(
              "googleAccessToken"
            )}`,
          },
        }
      );
      setEvents(data?.items?.reverse());
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <Container>
      <DataTable
        theme="dark"
        customStyles={{
          table: { style: { width: "100vw" } },
          progress: { style: { width: "100vw" } },
        }}
        title="Your events since January 1st, 2022"
        columns={columns}
        data={events}
        progressPending={isLoading}
      />
    </Container>
  );
};

export default EventsWidget;
