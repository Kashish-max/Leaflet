const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb+srv://mihir:qwerty123@cluster0.0kdev.mongodb.net/abc?retryWrites=true&w=majority");
mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
});