"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlogPost } from "../types/blogPost";
import BlogCard from "./BlogCard";

const RelatedPosts = ({ post }: { post: BlogPost[] }) => {
  return (
    <div className="w-full mx-auto pb-[60px]">
      <h2 className="text-2xl font-bold mb-4">Bài viết liên quan</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {post.map((post) => (
          <SwiperSlide key={post.id}>
            <BlogCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedPosts;
