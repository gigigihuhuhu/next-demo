import Link from "next/link";
import { Logo } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full h-[392px] max-md:h-[270px] p-10">
      <div className="grow flex flex-row justify-between">
        <div className="flex flex-col gap-8">
          <Link className="flex flex-row gap-2 " href="/">
            <Logo fontColor="white"></Logo>
          </Link>
          <div className="flex flex-row gap-8 font-medium text-white">
            <Link
              className="border-b border-solid border-transparent hover:border-white"
              href="/product/agree/terms"
            >
              이용약관
            </Link>
            <Link
              className="border-b border-solid border-transparent hover:border-white"
              href="/product/agree/privacy"
            >
              개인정보취급방침
            </Link>
            <Link
              className="border-b border-solid border-transparent hover:border-white"
              href="/product/agree/operate"
            >
              운영정책
            </Link>
            <Link
              className="border-b border-solid border-transparent hover:border-white"
              href="/product/customer-service/notice"
            >
              고객센터
            </Link>
          </div>
          <div className="flex flex-col gap-1 text-gray-400">
            <p>
              XXXXX &nbsp; 대표 : 박경수 &nbsp; 사업자 등록 번호 : 000-00-00000
            </p>
            <p>
              통신판매업신고 : 0000-XXXX0-0000 대표전화 : 070-0000-0000 이메일 :
              kyungsu77777@gmail.com
            </p>
            <p>경기도 성남시 분당구 대왕판교로 XXX길 XX로 XX동 XX빌딩 000호</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl text-white">고객센터</p>
          <p className="text-2xl text-white">070-0000-0000</p>
          <p className="text-sm text-gray-500">
            상담가능시간 평일 09:00 ~ 18:00 / 점심시간 12:30~13:30
          </p>
          <div className="flex flex-row gap-2 text-white">
            <Link href="/product/customer-service/notice">
              <button className="py-2 px-4 border border-solid border-gray-500 hover:bg-black rounded-lg">
                FAQ
              </button>
            </Link>
            <Link href="/product/customer-service/inquiry">
              <button className="py-2  px-4 border border-solid border-gray-500 hover:bg-black rounded-lg">
                1:1 고객상담
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}