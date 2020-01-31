import React, { useEffect, useState, Fragment } from "react";
import { withRouter } from "react-router-dom";

import * as classes from "./PostPage.module.scss";

const PostPageWrap = props => {
  const [post, setPost] = useState(null);

  //ComponentDidMount(){}
  useEffect(() => {
    if (props.match.params.postId) {
      const id = props.match.params.postId;
      fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res => res.json())
        .then(post => setPost(post));
    }
    // eslint-disabled-next-line
  }, []);

  const renderLoading = <div>Loading...</div>;

  const renderComponent = () => {
    if (!post) return;

    const { id, body, title, userId } = post;

    return (
      <Fragment>
        <div className={classes.id}>id: {id}</div>
        <div className={classes.title}>Title: {title}</div>
        <div className={classes.body}>Body: {body}</div>
        <div className={classes.userId}>Автор: {userId}</div>
      </Fragment>
    );
  };

  return (
    <div className={classes.PostPage}>
      {post ? renderComponent() : renderLoading}
    </div>
  );
};

export const PostPage = withRouter(PostPageWrap);
