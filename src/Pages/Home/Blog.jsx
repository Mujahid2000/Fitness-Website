"use client";
import { Card } from "keep-react";
import { useEffect, useState } from "react";

const Blog = () => {

    const [expandedIndex, setExpandedIndex] = useState(-1);
  const [blog, setBlog] = useState([]);

  const toggleShowMore = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  useEffect(() => {
    fetch('/Blog.json')
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, []);

    return (
        <div>
            <h3 className="text-4xl font-medium text-center mb-6 mt-4 uppercase">Blog Post</h3>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-7xl gap-6 mx-auto mt-5">
            {
                blog.map((blogs, index) =>
                    <Card key={blogs.id} className="md:p-6 p-5 max-w-lg">
                    <Card.Title>{blogs.title}</Card.Title>
                    <Card.Description>
                    <p className="text-gray-700 text-justify">
                {expandedIndex === index
                  ? blogs.description
                  : `${blogs.description.slice(0, 20)}...`}
              </p>
              {blogs.description.length > 20 && (
                <button
                  className="text-blue-500 hover:underline mt-2"
                  onClick={() => toggleShowMore(index)}
                >
                  {expandedIndex === index ? 'Show Less' : 'Show More'}
                </button>
              )}
                    </Card.Description>
                    </Card>
                    )
            }
        </div>
        </div>
    );
};

export default Blog;