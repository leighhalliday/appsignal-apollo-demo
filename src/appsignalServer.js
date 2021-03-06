const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: "appsignal-apollo-demo-two",
  apiKey: process.env.APPSIGNAL_PUSH_API_KEY,
  revision: process.env.HEROKU_SLUG_COMMIT,
});

exports.appsignal = appsignal;
