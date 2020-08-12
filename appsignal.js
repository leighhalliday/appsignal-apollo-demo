const { Appsignal } = require("@appsignal/nodejs");

// key is coming from ENV var APPSIGNAL_PUSH_API_KEY
const appsignal = new Appsignal({
  active: true,
  name: "appsignal-apollo-demo",
});

exports.appsignal = appsignal;
