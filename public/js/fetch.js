const fetchUrl = (method, url, body) => {
  const config = {
    method: method,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
  };

  if(body)
    config.body = JSON.stringify(body);

  return  fetch(url, config)
  .then(data => data.json())
}