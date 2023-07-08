import { useEffect, useContext } from "react";
import { axiosInstance as axios } from "../lib/axiosConfig";
import { UserContext } from "../../context/UserContext";

export function Auth() {
  const { login } = useContext(UserContext);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/auth/@me");
        login({ key: res.data.key.key, time: res.data.key.time });
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, []);

  return <></>;
}
