import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    photos: [Photo]
  }

  type Mutation {
    uploadPhoto(photo: Upload!): Boolean
  }

  type Photo {
    id: ID
    title: String
    description: String
  }

  input Upload {
    uri: String
  }
`;

export default typeDefs;
