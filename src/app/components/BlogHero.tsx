import calendarIcon from "@/assets/images/calendar_icon.png";
import handWritingIcon from "@/assets/images/hand_writing.png";
import { Breadcrumb } from "antd";
import Image from "next/image";

export default function BlogHero() {
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
          <div className="flex justify-between">
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
              ]}
            />
          </div>
          <h1 className="text-[64px] text-gray-900">
            Blog{" "}
            <span className="font-black text-transparent bg-gradient-to-r from-[rgba(84,171,177,99)] via-[rgba(84,171,177,0.4)] to-[rgba(133,238,179,0.71)] bg-clip-text">
              FOSO
            </span>{" "}
            <span>-</span>
            <p>
              Cập Nhật Tin Tức <span className="font-black">Mới Nhất</span>
            </p>
          </h1>
          <p className="text-gray-600">
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
