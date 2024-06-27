import axios from "axios";
import  { useContext, useEffect, useState } from "react";
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
          .post("https://gym-server-orpin.vercel.app/updateVotes", data)
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
      <div className="">
        <div>
        {currentPosts.map((post) => (
        <div
            key={post.title}
            className="post my-8 p-4 bg-gray-800 shadow-md rounded-md">
            <h2 className="text-xl text-white font-bold mb-2">{post.title}</h2>
            <p className="text-white">{post.content}</p>
            <div className="flex items-center mt-4">
            <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleVote(post._id, "up")}
            >
            Upvote
            </button>

            <span className="text-xl text-white font-bold">{post.vote}</span>
            <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
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
              className={`px-4 py-2 mx-1 bg-white rounded hover:bg-slate-300 hover:text-white ${
                currentPage === index + 1
                  ? "bg-gray-500 text-black"
                  : "hover:bg-gray-400"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
      </div>
    
  );
};

export default PostList;
