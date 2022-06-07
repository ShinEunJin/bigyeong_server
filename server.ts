import 'module-alias/register';
import express, { Express, Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import typeDefs from './src/graphql/typeDefs';
import resolvers from './src/graphql/resolvers';

dotenv.config();

declare const process: {
  env: {
    PORT: number;
    MONGO_URL: string;
  };
};

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const startApolloServer = async () => {
  const app: Express = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log('✅ MongoDB is connected'))
    .catch((err) => console.log(`❌ ${err}`));

  app.use((req: Request, res: Response) => res.send('apollo test'));

  app.listen(PORT, () => console.log(`✅ server is connected to ${PORT}`));
};

startApolloServer();
