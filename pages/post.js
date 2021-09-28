const Post = ({id}) => {
  return <h1>You are looking at Post #{id}</h1>;
};
Post.getInitialProps = async ({ query }) => {
  return query;
};

export default Post;
