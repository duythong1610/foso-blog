import React, { useState } from "react";
import hushedFaceIcon from "@/assets/icons/hushed face.svg";
import starStruckIcon from "@/assets/icons/star-struck.svg";
import thumbsUpIcon from "@/assets/icons/thumbs up.svg";
import yawningFaceIcon from "@/assets/icons/yawning face.svg";
import poutingFaceIcon from "@/assets/icons/pouting face.svg";
import greenHeartIcon from "@/assets/icons/green heart.svg";
import Image from "next/image";

type ReactionCounts = { [key: number]: number };

const reactions = [
  { id: 1, emoji: thumbsUpIcon, label: "Hữu ích" },
  { id: 2, emoji: greenHeartIcon, label: "Yêu thích" },
  { id: 3, emoji: starStruckIcon, label: "Thú vị" },
  { id: 4, emoji: hushedFaceIcon, label: "Bất ngờ" },
  { id: 5, emoji: yawningFaceIcon, label: "Nhàm chán" },
  { id: 6, emoji: poutingFaceIcon, label: "Tức giận" },
];

const PostReactions = () => {
  const [counts, setCounts] = useState<ReactionCounts>({
    1: 1,
    2: 2,
    3: 0,
    4: 1,
    5: 0,
    6: 0,
  });
  const [selected, setSelected] = useState<number>();

  const handleReactionClick = (id: number) => {
    setSelected(id);
  };

  return (
    <div className="p-4 rounded-xl text-center my-[48px] shadow-2xl">
      <h3 className="text-[#33404A] font-extrabold text-xl">
        Bạn thấy bài viết như thế nào?
      </h3>
      <p className="text-[#33404A] text-base mt-1 mb-6">4 phản hồi</p>
      <div className="grid grid-cols-6 gap-8 rounded-lg">
        {reactions.map((reaction) => (
          <button
            key={reaction.id}
            className={`flex flex-col items-center p-2 rounded-lg cursor-pointer border ${
              selected === reaction.id
                ? "border-[#10805B]"
                : "border-transparent"
            }`}
            onClick={() => handleReactionClick(reaction.id)}
          >
            <Image alt="icon" src={reaction.emoji} width={48} height={48}>
              {}
            </Image>
            <span className="font-semibold">{counts[reaction.id]}</span>
            <span className="text-xs text-gray-500">{reaction.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostReactions;
