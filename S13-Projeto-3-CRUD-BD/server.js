const app = require("./src/app.js");

const port = 8000;

app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
