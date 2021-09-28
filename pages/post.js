//=====================
//==withRouter option==
//=====================

// import { withRouter } from "next/router";

// const Post = (props) => (
//   <h1>You are looking at post # {props.router.query.id}</h1>
// );

// export default withRouter(Post);

//===========================
//==getInitialProps options==
//===========================

const Post = ({id}) => {
  return <h1>You are looking at Post #{id}</h1>;
};
Post.getInitialProps = async ({ query }) => {
  return query;
};

export default Post;