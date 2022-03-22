const jwt = require("jsonwebtoken");

const secret = "uOS311q9gXJaqBQhaGWAcEfOIBKcK0bq";

const token = jwt.sign(
  {
    id: "paoloc",
    isAdmin: false,
  },
  secret,
  { expiresIn: 2 }
);

console.log(token);

jwt.verify(token, secret, (error, decoded) => {
  console.log("ERROR:", error);
  console.log("DECODED:", decoded);
});

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log("============================================================");
    console.log("====================== AFTER 3 SECOND ======================");
    console.log("============================================================");
    console.log("ERROR:", error);
    console.log("DECODED:", decoded);
  });
}, 3000);
