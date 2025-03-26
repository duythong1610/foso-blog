"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

// 🚀 Fetch function (Không cần API key)
const fetchPosts = async ({ pageParam = 1 }): Promise<Post[]> => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
  );
  return response.data;
};

const InfinitePostList: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    getNextPageParam: (_lastPage, pages) =>
      pages.length < 10 ? pages.length + 1 : undefined,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>🔄 Đang tải...</p>;
  if (status === "error") return <p>❌ Có lỗi xảy ra</p>;

  console.log(data);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📝 Danh sách bài viết</h2>
      <ul className="space-y-4">
        {data &&
          data.pages.map((page) =>
            page.map((post) => (
              <li key={post.id} className="p-4 border rounded-md shadow-sm">
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))
          )}
      </ul>

      <div className="text-center mt-4">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            {isFetchingNextPage ? "🔄 Đang tải thêm..." : "📥 Tải thêm"}
          </button>
        )}
      </div>
    </div>
  );
};

export default InfinitePostList;
