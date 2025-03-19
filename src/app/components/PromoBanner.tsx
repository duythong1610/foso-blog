import promoBg from "@/assets/images/promo-bg.png";
import promo1 from "@/assets/images/promo1.png";
import promo2 from "@/assets/images/promo2.png";
import promo3 from "@/assets/images/promo3.png";
import promoTag from "@/assets/images/promo-tag.png";
import Image from "next/image";
import ButtonTransparent from "./ButtonTransparent";
interface PropTypes {
  type?: "default" | "tag";
}
export default function PromoBanner({ type = "default" }: PropTypes) {
  return (
    <>
      {type == "tag" ? (
        <div className="relative rounded-[24px] overflow-hidden max-w-[366px]">
          <Image src={promoBg} alt={""}></Image>
          <div className="absolute top-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-8 ">
              <div className="">
                <Image src={promo2} alt={""}></Image>
              </div>
              <div className="px-6 flex items-center relative">
                <Image src={promo1} alt={""} width={136} height={136}></Image>
                <div className="absolute top-1/2 -translate-y-1/2">
                  <Image
                    src={promoTag}
                    alt={""}
                    width={318}
                    height={136}
                  ></Image>
                </div>
              </div>
              <div className="px-6">
                <ButtonTransparent block title="Trải nghiệm ngay" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative rounded-[24px] overflow-hidden max-w-[366px]">
          <Image src={promoBg} alt={""}></Image>
          <div className="absolute top-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-8 ">
              <div className="">
                <Image src={promo3} alt={""} height={400}></Image>
              </div>

              <p className="text-white text-xl leading-[150%] px-6">
                Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát
                triển!
              </p>
              <div className="px-6">
                <ButtonTransparent block title="Trải nghiệm ngay" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
