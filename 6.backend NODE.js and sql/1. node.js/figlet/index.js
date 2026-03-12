const figlet = require("figlet");// when require package we donnot need to write  " ./ "

figlet("lokajay bhadra", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });