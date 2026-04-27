function loadEnv() {
  const dotenv = require("dotenv");
  dotenv.config();

  return {
    nodeEnv: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT || 3000),
    databaseUrl:
      process.env.DATABASE_URL ||
      "postgresql://app_user:app_password@localhost:5432/app_db",
    rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 900000),
    rateLimitMaxRequests: Number(process.env.RATE_LIMIT_MAX_REQUESTS || 100),
  };
}

module.exports = { loadEnv };
