import { Chain } from './zeus';

const chain = Chain('http://localhost:3000/graphql');

async function run() {
  const allPosts = await chain.query({ posts: { title: true } });
  const createdPost = chain.mutation({
    createPost: [{ createPostInput: { title: 'first post' } }, { title: true }],
  });

  const onePost = await chain.query({
    post: [{ id: 1 }, { title: true }],
    posts: { title: true },
  });
}

run();
