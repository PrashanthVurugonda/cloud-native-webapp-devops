const app = require("./app");
const { testConnection } = require("./db");
const { loadEnv } = require("./config/env");

const env = loadEnv();

async function bootstrap() {
  await testConnection();

  app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
  });
}

bootstrap().catch((error) => {
  console.error("Application failed to start", error);
  process.exit(1);
});
