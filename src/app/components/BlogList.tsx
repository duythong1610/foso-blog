import { recentPosts } from "@/data/blogPost";
import BlogCard from "./BlogCard";
import Image from "next/image";
import featuredPostBg from "@/assets/images/featured-post-bg.png";
import featuredPostBg1 from "@/assets/images/featured-post-bg1.png";
import ButtonTransparent from "./ButtonTransparent";

export default function BlogList() {
  return (
    <div className="flex-1">
      <h1 className="font-extrabold text-[36px] text-[#050505] leading-[72px] mb-6">
        Tất cả bài viết
      </h1>
      <div className="relative rounded-4xl overflow-hidden mb-[48px]">
        <div className="absolute top-1/2 -translate-y-1/2 left-[60px]">
          <div className="max-w-[370px] mb-8">
            <h2 className="text-[36px] text-white font-bold">
              Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
            </h2>
          </div>
          <ButtonTransparent title="Tham gia ngay" />
        </div>
        <Image src={featuredPostBg} alt={""} />
        <div className="absolute right-6 bottom-0">
          <Image
            src={featuredPostBg1}
            alt={""}
            height={400}
            width={470}
            className="object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-[48px]">
        {recentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
