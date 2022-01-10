const mongoose = require("mongoose");

function Conn(url, user, pass, banco) {
  mongoose.connect(
      `${url}/${banco}`,
      {
        // mongoose.connect(`${banco}://${uri}:${portDB}/${nameBanco}`, {
          user: user,
          pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.error(err);
    });
}
module.exports = Conn;
