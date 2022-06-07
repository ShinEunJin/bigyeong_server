import Post from '@/models/Post.model';

const resolvers = {
  Query: {
    getAllPosts: async () => {
      return await Post.find();
    },
  },
};

export default resolvers;
