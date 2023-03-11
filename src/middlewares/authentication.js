const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    let token = header && header.replace("Bearer ", "");
    if (!token) {
      return res.send({
        code : 400,
        status: "Failed",
        message: "Access Denied",
      });
    }
    const secretKey = process.env.SECRET_KEY;
    const verified =  jwt.verify(token, secretKey);
    req.id = verified.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: error.message,
    });
  }
};