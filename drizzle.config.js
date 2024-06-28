/**  @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:7cQKFeuwmT2O@ep-soft-forest-a1kpdgok.ap-southeast-1.aws.neon.tech/Venky-Ai-Generator?sslmode=require',
    }
};