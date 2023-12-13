function config() {
  return {
    DATABASE_URL: process.env.DATABASE_URL || "",
  };
}

export default config;
