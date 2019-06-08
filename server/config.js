require("dotenv").config();

var obj = "";

if (process.env.NODE_ENV == "production") {
  obj = {
    jwtPrivateKey: "nurseportalPVTKEY",
    port: parseInt(process.env.APP_PORT),
    host: process.env.APP_HOST,
    portDB: parseInt(process.env.DB_PORT),
    db: process.env.DB_NAME,
    requiresAuth: true
  };
} else {
  obj = {
    port: parseInt(process.env.DEV_APP_PORT) || 5000,
    host: process.env.DEV_APP_HOST || "127.0.0.1",
    portDB: parseInt(process.env.DEV_DB_PORT) || 27017,
    db: process.env.DEV_DB_NAME || "nurse-portal",
    jwtPrivateKey: "nurseportalPVTKEY",
    requiresAuth: true
  };
}

console.log(obj);

module.exports = obj;
