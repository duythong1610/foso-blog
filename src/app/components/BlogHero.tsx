import calendarIcon from "@/assets/images/calendar_icon.png";
import handWritingIcon from "@/assets/images/hand_writing.png";
import { Breadcrumb } from "antd";
import Image from "next/image";

export default function BlogHero() {
  const breadcrumbItems = [
    { title: "Trang chủ", href: "/" },
    { title: "Tài nguyên", href: "/blog" },
    { title: "Blog" }, // Không có `href` => item cuối
  ];
  return (
    <section className="text-center mt-8 mb-[96px]">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={calendarIcon}
            alt={""}
            width={195}
            className="object-contain"
          />
        </div>
        <div>
          <div className="inline-block mb-[72px]">
            <Breadcrumb
              className="text-center"
              separator=">"
              items={breadcrumbItems.map((item, index) => ({
                ...item,
                className:
                  index === breadcrumbItems.length - 1
                    ? "font-bold text-gray-800"
                    : "text-gray-500",
              }))}
            />
          </div>
          <h1 className="text-[64px] text-gray-900">
            Blog{" "}
            <span className="font-black bg-gradient-to-r from-[#53B086FC] to-[#53B086FC] bg-clip-text text-transparent">
              FOSO
            </span>{" "}
            <span>-</span>
            <p>
              Cập Nhật Tin Tức{" "}
              <div className="inline-block relative">
                <div className="bg-[#85EEB3B5] h-8 absolute bottom-[20px] rounded-[20px] left-0 right-0 -z-10"></div>
                <span className="font-black">Mới Nhất</span>
              </div>
            </p>
          </h1>
          <p className="text-[#33404A] font-medium mt-3">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
        </div>
        <div>
          <Image
            src={handWritingIcon}
            alt={""}
            width={195}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
