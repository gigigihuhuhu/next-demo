import Link from "next/link";
import { Logo, GiftIcon, ProfileIcon, SearchIcon, MessageIcon, AlarmIcon, HamburgerIcon } from "@/components/Icons";

export default function Header() {
  return (
    <header className="bg-white w-full fixed h-12 py-8 z-10 flex items-center border-b border-solid border-slate-200">
      <div className="grow flex flex-row justify-between mx-6 max-lg:mx-3 items-center">
        <div className="max-md:hidden">
          <Link href="/">
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
          <Link href="/product/search">
            <SearchIcon></SearchIcon>
          </Link>
          <Link href="/product/alarm">
            <AlarmIcon></AlarmIcon>
          </Link>
          <Link className="max-md:hidden" href="/product/message">
            <MessageIcon></MessageIcon>
          </Link>
          <Link className="max-md:hidden" href="/product/gift">
            <GiftIcon></GiftIcon>
          </Link>
          <Link className="max-md:hidden" href="/product/profile">
            <ProfileIcon></ProfileIcon>
          </Link>
          <Link className="hidden max-md:block" href="/product/menu">
            <HamburgerIcon></HamburgerIcon>
          </Link>
        </div>
      </div>
    </header>
  );
}
