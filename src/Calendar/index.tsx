import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInButton from "../Home/SignInButton";
import EventsWidget from "./EventsWidget";

const Calendar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem("googleAccessToken")
  );

  const handleCal = () => {
    const tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id:
        "948682088817-c3hu7nq9fm2bg9df5tj57un73vc2qm7n.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/calendar.events",
      callback: (token: any) => {
        if (!!token.access_token) {
          sessionStorage.setItem("googleAccessToken", token.access_token);
          setIsLoggedIn(true);
        } else {
          window.alert("Something went wrong");
        }
      },
    });
    tokenClient.requestAccessToken();
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("publicAddress")) navigate("/");
  }, [navigate]);
  return (
    <>
      {!isLoggedIn ? (
        <SignInButton
          id="hellogoogle"
          text="Login with Google"
          handleLogin={handleCal}
        />
      ) : (
        <EventsWidget />
      )}
    </>
  );
};

export default Calendar;
