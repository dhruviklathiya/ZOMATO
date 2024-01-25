const jwt = require("jsonwebtoken");
const jwt_secrect_key = "4y58d74569847598u7349e78u8797";
// Auth function for role authentication
const role_auth = (token, roles) => {
  jwt.verify(token, jwt_secrect_key, (err, decoded) => {
    if (err || !roles.find((ele) => ele === decoded.role)) {
      throw Error("Please authenticate || You're not allowed to access this data -!- ");
    }
  });
};

module.exports = {
    role_auth
};
