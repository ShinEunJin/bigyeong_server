import Photo from '@/models/Photo.model';

const resolvers = {
  Query: {
    photos: () => {
      console.log('query');
    },
  },
  Mutation: {
    uploadPhoto: async (_: any, arg: any) => {
      console.log('mutation', arg);
    },
  },
};

export default resolvers;
