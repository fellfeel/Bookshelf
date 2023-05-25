const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => { //initialize async
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};
process.on('unhandledRejection', (err) => { // to make sure unhandled promises rejections properly handled
    console.log(err);
    process.exit(1);
  });

init();