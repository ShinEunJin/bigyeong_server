const resolvers = {
  Query: {
    getAllPosts: () => [{ title: 'the test', author: 'shin' }],
  },
};

export default resolvers;
