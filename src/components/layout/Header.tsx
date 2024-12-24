import RedCard from "@/components/feature/cards/RedCard";
import GreenCard from "@/components/feature/cards/GreenCard";
import BlueCard from "@/components/feature/cards/BlueCard";
import YellowCard from "@/components/feature/cards/YellowCard";

export default async function Header() {
  return (
    <>
      <div className="relative md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap">
            <GreenCard />
            <BlueCard />
            <YellowCard />
            <RedCard />
          </div>
        </div>
      </div>
    </>
  );
}
