import React from "react";
const [resp, setResp] = useState("resp");

const Abc = () => {
  const fetchData = async () => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBEeXTwsAodRDhnjLH8W3e9ByVb7rOg_w0&cx=6bf49df60729432e3&q=ai`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setResp(result);
      })
      .catch((error) => console.error(error));
  };
  fetchData();
  return <div>{JSON.stringify(resp)}</div>;
};

export default Abc;
