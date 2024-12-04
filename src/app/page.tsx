import Slider from "@/components/ui/Slider";
import MainMenu from "@/components/ui/MainMenu";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Slider></Slider>
        <MainMenu></MainMenu>
      </div>
    </>
  );
}
