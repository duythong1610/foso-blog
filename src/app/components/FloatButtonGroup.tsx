import zaloIcon from "@/assets/images/zalo.png";
import facebookIcon from "@/assets/images/facebook.png";
import redditIcon from "@/assets/images/reddit.png";
import twitterIcon from "@/assets/images/twitter.png";
import linkedinIcon from "@/assets/images/linkedin.png";
import Image from "next/image";
const FloatButtonGroup = () => {
  return (
    <div className="fixed left-[90px] top-[250px] bg-white rounded-2xl px-1 py-3">
      <div className="flex flex-col gap-2 items-center">
        <label htmlFor="" className="text-base font-extrabold text-[#33404A]">
          Chia sẻ
        </label>
        {[zaloIcon, facebookIcon, twitterIcon, linkedinIcon, redditIcon].map(
          (icon, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Image src={icon} alt="icon" width={48} height={48} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FloatButtonGroup;
