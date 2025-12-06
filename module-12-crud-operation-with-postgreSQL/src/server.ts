import app from "./app";
import config from "./config";


// Middleware
const port = config.port;

// server listen
app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
});
