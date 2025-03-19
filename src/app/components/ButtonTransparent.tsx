import arrowUpRightIcon from "@/assets/icons/ArrowUpRight.svg";
import Image from "next/image";

const ButtonTransparent = ({
  title,
  block,
}: {
  title: string;
  block?: boolean;
}) => {
  return (
    <button
      style={{ width: block ? "100%" : "" }}
      className="text-white border border-white rounded-[40px] py-2 px-6 font-bold cursor-pointer
    transition-all duration-300 hover:border-[#85EEB3] hover:text-[#85EEB3] hover:scale-105 hover:bg-white/10"
    >
      <div className="flex items-center gap-8 justify-between">
        <span>{title}</span>
        <Image src={arrowUpRightIcon} width={18} height={18} alt="icon" />
      </div>
    </button>
  );
};

export default ButtonTransparent;
