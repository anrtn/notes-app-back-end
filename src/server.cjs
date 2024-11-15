const Hapi = require("@hapi/hapi");
const routes = require("./routes.cjs");

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

  // Register routes
  server.route(routes);

  await server.start();
  console.log("Server berjalan pada %s", server.info.uri);
};

init();
