import server from "./server";

const apiPort = process.env.API_PORT;
const port = apiPort || 8080;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
