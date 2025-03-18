import { recentPosts } from "@/data/blogPost";
import { BlogPost } from "../types/blogPost";
import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-2">
        {recentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
