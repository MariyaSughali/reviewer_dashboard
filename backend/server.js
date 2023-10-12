const app = require("./controller");
const PORT = 3030;

app.listen(PORT, function () {
  "use strict";
  console.log(`Server running on port ${PORT}`);
});
