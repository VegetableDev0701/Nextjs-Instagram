import React from "react";
import Box from "./box";
import FeedItemHeader from "./feed-item-header";
import FeedItemButtons from "./feed-item-buttons";
import FeedItemComment from "./feed-item-comment";
import AddComment from "./add_comment";
import FeedItemPhotos from "./feed-item-photos";
import Router from "next/router";

export default function FeedItem({ data }) {
  return (
    <Box className="feed-item-container flex flex-col">
      <FeedItemHeader image={data.user.image} username={data.user.username} />
      <FeedItemPhotos photos={data.photos} />
      <FeedItemButtons className="feed-item-buttons-container w-full h-10 pl-2 pr-2 mt-2 flex items-center" />
      <a href="#" className="feed-item-text text-14-bold mr-1 ml-4">
        {data?.likeCount || "0"} likes
      </a>
      <FeedItemComment
        data={{ username: data.user.username, description: data.description }}
      />
      <a
        className="overflow-hidden mx-4 text-14-light cursor-pointer"
        style={{ color: "#9a9a9a", display: "flex" }}
        onClick={() =>
          Router.push("/post/[pid]", `/post/${data?.pid || "post-test"}`)
        }
      >
        Wiew all {data?.commentCount || "0"} comment
      </a>
      {data.popularComments.map((item) => {
        return (
          <FeedItemComment
            data={{ username: item.username, description: item.description }}
          />
        );
      })}

      <a
        className="feed-item-date-text cursor-pointer uppercase"
        onClick={() =>
          Router.push("/post/[pid]", `/post/${data?.pid || "post-test"}`)
        }
      >
        {data.time}
      </a>
      <AddComment />
    </Box>
  );
}
