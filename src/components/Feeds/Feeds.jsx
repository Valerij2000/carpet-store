import React, { useState } from "react";
import { FaHeart, FaRegCommentDots, FaShare } from "react-icons/fa";

const feedData = [
  {
    id: 1,
    user: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=10",
    time: "1 hour ago",
    title: "Exploring the Mountains 🌄",
    description: "The air, the view, the peace. Nature truly heals.",
    image: "https://source.unsplash.com/random/600x300?nature,mountains",
    comments: [
      { id: 1, name: "Ella", text: "This looks amazing!" },
      { id: 2, name: "Chris", text: "Where is this place?" },
    ],
  },
  {
    id: 2,
    user: "Monica Reed",
    avatar: "https://i.pravatar.cc/150?img=17",
    time: "3 hours ago",
    title: "UI/UX Design Thoughts 🎨",
    description: "Minimalism in design isn't about less. It's about focus.",
    image: "https://source.unsplash.com/random/600x300?design,ux",
    comments: [
      { id: 1, name: "Leo", text: "Love this take!" },
      { id: 2, name: "Sophia", text: "100% agree 🙌" },
    ],
  },
];

export default function Feeds() {
  const [openComments, setOpenComments] = useState({});

  const toggleComments = (id) => {
    setOpenComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        📢 Community Feed
      </h2>
      <div className="space-y-8">
        {feedData.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-4 px-6 py-4">
              <img
                src={post.avatar}
                alt={post.user}
                className="w-12 h-12 rounded-full border-2 border-blue-500"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {post.user}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.time}
                </span>
              </div>
            </div>

            {/* Content */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {post.description}
              </p>
            </div>

            {/* Actions */}
            <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-gray-600 dark:text-gray-300">
              <button className="flex items-center gap-2 hover:text-red-500">
                <FaHeart />
                <span>Like</span>
              </button>
              <button
                onClick={() => toggleComments(post.id)}
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <FaRegCommentDots />
                <span>Comments</span>
              </button>
              <button className="flex items-center gap-2 hover:text-green-500">
                <FaShare />
                <span>Share</span>
              </button>
            </div>

            {/* Comments */}
            {openComments[post.id] && (
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 space-y-3">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">
                        {comment.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
