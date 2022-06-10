import Post from '@/models/Post.model';

const resolvers = {
  Query: {
    getAllPosts: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    createPost: async (
      _parent: any,
      args: { post: { title: string; description: string } },
      _context: any,
      _info: any
    ) => {
      const { title, description } = args.post;
      const post = new Post({ title, description });
      await post.save();
      return post;
    },
  },
};

export default resolvers;
