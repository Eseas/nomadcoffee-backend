require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";

const PORT = process.env.PORT;
const server = new ApolloServer({
  schema
});

const app = express();
server.start().then(res => {
  server.applyMiddleware({ app, path: '/' });

  app.listen({ port : PORT }, () => 
    console.log(`🚀Server is running on http://localhost:${PORT} ✅`)
  );  
});