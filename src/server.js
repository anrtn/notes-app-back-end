import Hapi from "@hapi/hapi";
const routes = require("./routes");
const { addNoteHandler, getAllNotesHandler } = require("./handler");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  // Daftarkan route
  server.route(routes);

  await server.start();
  console.log("Server berjalan pada %s", server.info.uri);
};

init();
