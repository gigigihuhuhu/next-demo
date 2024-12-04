import { FooterPart1, FooterPart2 } from "@/components/ui/footer-elements";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full h-[392px] max-md:h-[270px] p-10 overflow-hidden">
      <div className="flex flex-row max-md:flex-col justify-between">
        <FooterPart1></FooterPart1>
        <FooterPart2></FooterPart2>
      </div>
    </footer>
  );
}
