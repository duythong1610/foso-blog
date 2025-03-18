"use client";

import PostReactions from "@/app/components/PostReactions";
import { useHeadsObserver } from "@/app/hooks/useHeadsObserver";
import { recentPosts } from "@/data/blogPost";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Collapse, CollapseProps } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import caretDownIcon from "@/assets/icons/CaretDown.svg";

export default function BlogDetail() {
  const params = useParams();
  const { slug } = params;
  const contentRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const { activeId, handleScroll } = useHeadsObserver(
    headings.map(({ id }) => id)
  );

  console.log(activeId);
  const [processedContent, setProcessedContent] = useState<string>("");

  // Tìm bài viết theo slug
  const blog = recentPosts.find((post) => post.slug === slug);

  // Nếu không tìm thấy, hiển thị thông báo
  if (!blog) {
    return (
      <div className="text-center text-red-500">Bài viết không tồn tại.</div>
    );
  }

  useEffect(() => {
    if (!blog.content) return;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = blog.content;
    const elements = Array.from(tempDiv.querySelectorAll("h2, h3"));

    const newHeadings = elements.map((el, index) => {
      const id = `heading-${index}`;
      el.id = id; // Thêm ID vào thẻ
      return {
        id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 1 : 2,
      };
    });

    setHeadings(newHeadings);
    setProcessedContent(tempDiv.innerHTML); // Gán nội dung đã xử lý lại
  }, [blog.content]);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          <label htmlFor="" className="text-2xl font-bold ">
            Nội dung bài viết
          </label>
        </div>
      ),
      children: (
        <ul className="space-y-2">
          {headings.map(({ id, text, level }) => (
            <li key={id} style={{ paddingLeft: level === 2 ? 20 : 0 }}>
              <a
                href={`#${id}`}
                className="hover:underline hover:!text-[#15AA7A] text-lg font-medium"
                style={{ color: activeId == id ? "#15AA7A" : "#33404A" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(id);
                }}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-[1440px] m-auto">
      <div className="flex items-center justify-between text-center mt-[32px] mb-[48px]">
        <Breadcrumb
          className="text-center"
          separator=">"
          items={[
            {
              title: "Trang chủ",
            },
            {
              title: "Tài nguyên",
              href: "",
            },
            {
              title: "Blog",
              href: "",
            },
            {
              title: "Quản lý sản xuất",
              href: "",
            },
          ]}
        />
      </div>
      <div className="flex gap-6">
        {/* Blog Content */}
        <div className="flex-1 pr-6">
          <div className="flex flex-col gap-4">
            <div className="bg-[#E2F0FE] rounded-[8px] py-1 px-2 w-fit text-[#0F4F9E]">
              {blog.category.name}
            </div>
            <h1 className="text-[36px] font-extrabold">{blog.title}</h1>

            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    className="object-cover"
                    src={blog.author.avatar}
                    alt={"author_avatar"}
                    width={64}
                    height={64}
                  />
                  <div>
                    <span>Tác giả</span>
                    <p className="text-[#33404A] font-bold">
                      {blog.author.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <CalendarOutlined />
                  <span>Cập nhật lúc: {blog.updatedAt}</span>
                </div>{" "}
                |{" "}
                <div className="flex items-center gap-2">
                  <ClockCircleOutlined />
                  <span>{blog.readingTime} phút đọc</span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={contentRef}
            className="mt-6 prose
          "
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          <PostReactions />
        </div>

        {/* Sidebar Table of Contents */}
        <div className="sticky top-[88px] h-max p-4">
          <Collapse
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <Image
                src={caretDownIcon}
                alt={""}
                width={24}
                height={24}
                style={{ rotate: isActive ? "180deg" : "0deg" }}
              />
            )}
            defaultActiveKey={["1"]}
            className="w-[500px]"
            bordered={false}
            items={items}
          ></Collapse>
        </div>
      </div>
    </div>
  );
}
