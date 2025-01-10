import { useState, useEffect } from "react";
import PostList from "./PostList";
import axios from "axios";
import { Helmet } from "react-helmet";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [reFetch, setRefetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://gym-server-orpin.vercel.app/forum")
      .then((res) => {
        const { forum: result, voteList: countVote } = res.data;
        let newData = [];
        result.forEach((forum) => {
          let found = false;
          countVote.forEach((vote) => {
            if (forum._id === vote._id) {
              newData.push({ ...forum, vote: vote.count });
              found = true;
            }
          });
          if (!found) {
            newData.push({ ...forum, vote: 0 });
          }
        });
        setPosts(newData);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setIsLoading(false));
  }, [reFetch]);

  return (
    <div>
      <Helmet>
        <title>Fitness Website || Community</title>
      </Helmet>
      <div className="bg-black mx-auto px-5 py-10 pt-20">
        <h1 className="text-3xl text-white poppins-semibold font-bold mb-4">Post List</h1>
        {isLoading ? (
          <div className="skeleton">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="skeleton-post my-8 p-4 bg-gray-300 shadow-md rounded-md animate-pulse">
                <div className="h-6 bg-gray-400 rounded mb-2"></div>
                <div className="h-4 bg-gray-400 rounded mb-2"></div>
                <div className="flex space-x-2">
                  <div className="h-8 w-16 bg-gray-400 rounded"></div>
                  <div className="h-8 w-16 bg-gray-400 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <PostList posts={posts} reFetch={reFetch} setRefetch={setRefetch} />
        )}
      </div>
    </div>
  );
};

export default Community;
