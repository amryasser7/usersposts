import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import Loading from "../loadingComponent/LoadingComponet";
import Error from "../errorComponent/ErrorComponent";
import Accordion from "../accordion/Accordion";

import "./Posts.scss";

const Posts = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const getPosts = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    return res.data;
  };

  const { data, status, isRefetching } = useQuery("posts", getPosts);

  const displayPosts = () => {
    const posts = data.map((post, index) => {
      return <Accordion post={post} key={index} />;
    });
    if (posts?.lenght !== 0) return posts;
    else return <h1>No Posts Found</h1>;
  };

  return (
    <div className="posts-page">
      <h1>
        {typeof state?.name === "string" ? `${state.name}'s Posts` : "Posts"}
      </h1>
      {status === "loading" || isRefetching ? (
        <Loading />
      ) : status === "error" ? (
        <Error description={"Can not get posts, please refresh the page"} />
      ) : (
        <div className="list-container">{displayPosts()}</div>
      )}
    </div>
  );
};

export default React.memo(Posts);
