// import API_KEY from "./keys";
// import { useState, useEffect } from "react";

// const CONTEXT_KEY = "6bf49df60729432e3";
// let result = [];

// const useGoogleSearch = (Term) => {
//   // const [data, setData] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       fetch(
//         `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${Term}`
//       )
//         .then((response) => response.json())
//         .then((result) => {
//           setData(result);
//         });
//       console.log(data);
//     };

//     fetchData();
//   }, [Term]);

//   return { data };
// };

// export default useGoogleSearch;
