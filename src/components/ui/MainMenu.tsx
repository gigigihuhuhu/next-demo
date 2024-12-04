import Link from "next/link";
import {
  EventIcon,
  PreferIcon,
  PromotionIcon,
  CoinIcon,
  ReviewIcon,
  QuestIcon,
} from "@/components/Icons";

export default function MainMenu() {
  return (
    <div className="flex flex-row gap-12 items-center justify-center">
      <Link href="/product/event">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="w-[76px] h-[76px] ml-[-26px]">
            <EventIcon></EventIcon>
          </div>
          <span className="text-black">이벤트</span>
        </div>
      </Link>
      <div className="flex flex-row gap-8 items-center justify-center *:flex *:flex-col *:items-center *:gap-2">
        <Link href="/product/preference">
          <div className="w-[76px] h-[76px] rounded-full transition-colors duration-200 bg-gray-100 hover:bg-gray-300 flex items-center justify-center">
            <PreferIcon></PreferIcon>
          </div>
          <span className="text-black">선호작</span>
        </Link>
        <Link href="/product/promotion">
          <div className="w-[76px] h-[76px] rounded-full transition-colors duration-200 bg-gray-100 hover:bg-gray-300 flex items-center justify-center">
            <PromotionIcon></PromotionIcon>
          </div>
          <span className="text-black">프로모션</span>
        </Link>
        <Link href="/product/mypage/cash">
          <div className="w-[76px] h-[76px] rounded-full transition-colors duration-200 bg-gray-100 hover:bg-gray-300 flex items-center justify-center">
            <CoinIcon></CoinIcon>
          </div>
          <span className="text-black">코인충전</span>
        </Link>
        <Link href="/product/review">
          <div className="w-[76px] h-[76px] rounded-full transition-colors duration-200 bg-gray-100 hover:bg-gray-300 flex items-center justify-center">
            <ReviewIcon></ReviewIcon>
          </div>
          <span className="text-black">작품리뷰</span>
        </Link>
        <Link href="/product/quest">
          <div className="w-[76px] h-[76px] rounded-full transition-colors duration-200 bg-gray-100 hover:bg-gray-300 flex items-center justify-center">
            <QuestIcon></QuestIcon>
          </div>
          <span className="text-black">퀘스트</span>
        </Link>
      </div>
    </div>
  );
}
