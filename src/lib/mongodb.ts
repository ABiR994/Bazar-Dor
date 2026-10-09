import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL;

if (!url) {
  throw new Error("MONGODB_URL is not set. Add it to .env.local");
}

const globalForMongo = globalThis as unknown as { mongoClient?: MongoClient };

const client =
  globalForMongo.mongoClient ??
  new MongoClient(url, { serverSelectionTimeoutMS: 8000 });

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

export const db = client.db();
