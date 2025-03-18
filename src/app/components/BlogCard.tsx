import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../types/blogPost";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";

interface PropTypes {
  post: BlogPost;
}

export default function BlogCard({ post }: PropTypes) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
        <Image
          src={post.thumbnail}
          alt={""}
          width={505}
          height={475}
          className="object-contain"
        />
        <div className="flex flex-col gap-4 mt-6">
          <div className="bg-[#E2F0FE] rounded-[8px] py-1 px-2 w-fit text-[#0F4F9E]">
            {post.category.name}
          </div>
          <h2 className="font-extrabold text-2xl text-[#33404A]">
            {post.title}
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <CalendarOutlined />
              <span>{post.createdAt}</span>
            </div>{" "}
            |{" "}
            <div className="flex items-center gap-2">
              <ClockCircleOutlined />
              <span>{post.readingTime} phút đọc</span>
            </div>
          </div>
          <p className="text-gray-600">Khám phá thêm →</p>
        </div>
      </div>
    </Link>
  );
}
