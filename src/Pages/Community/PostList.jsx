import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const PostList = ({ posts, reFetch, setRefetch }) => {
    const {user} = useContext(AuthContext);
    
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = Array.isArray(posts) ? posts.slice(indexOfFirstPost, indexOfLastPost) : [];

    const [postVotes, setPostVotes] = useState(
    Array.isArray(posts)
    ? posts.reduce((acc, post) => {
        acc[post.title] = typeof post.votes === 'number' ? post.votes : 0;
        return acc;
        }, {})
    : {}
    );


    const handleVote = (postId, action) => {
        const data = {
          forumId: postId,
         userId: user.uid,
          status: action === "up" ? "upVote" : "downVote"
        };
        axios
          .post("http://localhost:5050/updateVotes", data)
          .then((response) => {
            setRefetch(!reFetch)
            console.log("Votes updated successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error updating votes:", error);
          });
      };

      


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
    <div>
        {currentPosts.map((post) => (
        <div
            key={post.title}
            className="post my-8 p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
            <div className="flex items-center mt-4">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleVote(post._id, "up")}
            >
            Upvote
            </button>

            <span className="text-xl font-bold">{post.vote}</span>
            <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => handleVote(post._id, "down")}>
              Downvote
            </button>
          </div>
        </div>
      ))}

      <div className="pagination mt-4">
        {Array.from(
          { length: Math.ceil(posts.length / postsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 bg-gray-300 rounded ${
                currentPage === index + 1
                  ? "bg-gray-500 text-white"
                  : "hover:bg-gray-400"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default PostList;
