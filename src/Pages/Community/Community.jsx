import { useState, useEffect } from "react";
import PostList from "./PostList";
import axios from "axios";
import { Helmet } from "react-helmet";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [reFetch, setRefetch] = useState(false);
  console.log(posts);

  useEffect(() => {
    axios
      .get("https://gym-server-orpin.vercel.app/updateVotes/forum")
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
      .catch((error) => console.error("Error fetching data:", error));
  }, [reFetch]);

  return (
    <div>
      <Helmet>
        <title>Fitness Website || Community</title>
      </Helmet>
      <div className=" bg-black mx-auto px-5 py-10 pt-20">
        <h1 className="text-3xl text-white poppins-semibold font-bold mb-4">Post List</h1>
        <PostList posts={posts} reFetch={reFetch} setRefetch={setRefetch} />
      </div>
    </div>
  );
};

export default Community;
