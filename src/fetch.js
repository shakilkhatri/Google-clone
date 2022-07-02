function fetch(Term, done) {
  let res;

  const fetchData = async () => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBEeXTwsAodRDhnjLH8W3e9ByVb7rOg_w0&cx=6bf49df60729432e3&q=ai`
    )
      .then((response) => response.json())
      .then((result) => {
        // setdata(result);
        console.log(result);
        res = result;
        console.log(res.items);
        done = true;
      });
  };
  if (!done) {
    fetchData();
  }

  return { res };
}

export default fetch;
