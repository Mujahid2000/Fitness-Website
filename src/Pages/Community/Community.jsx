import { useState, useEffect } from "react";
import PostList from "./PostList";
import axios from "axios";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [reFetch, setRefetch] = useState(false);
  console.log(posts);

  useEffect(() => {
    axios
      .get("http://localhost:5050/forum")
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
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Post List</h1>
        <PostList posts={posts} reFetch={reFetch} setRefetch={setRefetch} />
      </div>
    </div>
  );
};

export default Community;
