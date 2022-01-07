const mongoose = require("mongoose");

function Conn() {
  mongoose.connect(
      `mongodb+srv://dbAdmin:vFG8FuJa67dIFFHn@cluster0.rmlnu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        // mongoose.connect(`${banco}://${uri}:${portDB}/${nameBanco}`, {
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
