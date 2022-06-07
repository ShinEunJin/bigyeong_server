import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }
  type Query {
    getAllPosts: [Post]
  }
`;

export default typeDefs;
