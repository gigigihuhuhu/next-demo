import Link from "next/link";
import { Logo, GiftIcon, ProfileIcon, SearchIcon, MessageIcon, AlarmIcon } from "@/components/Icons";

export default function Header() {
  return (
    <header className="bg-white w-full fixed h-12 py-8 z-10 flex items-center border-b border-solid border-slate-200">
      <div className="grow flex flex-row justify-between mx-6 max-lg:mx-3 items-center">
        <div>
          <Link className="flex flex-row gap-2 " href="/">
            <Logo></Logo>
          </Link>
        </div>
        <div className="flex flex-row gap-8 text-xl font-bold">
          <Link href="/product/top50/free-top">TOP50</Link>
          <Link href="/product/free">무료</Link>
          <Link href="/product/paid">유료</Link>
          <Link href="/product/preference">선호작</Link>
        </div>
        <div className="flex flex-row gap-4 text-xl font-bold">
          <Link href="/product/free"><SearchIcon></SearchIcon></Link>
          <Link href="/product/top50/free-top"><AlarmIcon></AlarmIcon></Link>
          <Link href="/product/paid"><MessageIcon></MessageIcon></Link>
          <Link href="/product/preference"><GiftIcon></GiftIcon></Link>
          <Link href="/product/preference"><ProfileIcon></ProfileIcon></Link>
        </div>
      </div>
    </header>
  );
}
