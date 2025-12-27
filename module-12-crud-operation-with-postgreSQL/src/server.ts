import config from "./config";
import app from "./app";


// Middleware
const port = config.port;

// server listen
app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
});
