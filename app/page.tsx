import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w flex flex-col gap-8">
        <p>Bumby Sim or Whatever</p>
        <Image
          src="/bee.gif"
          width={500}
          height={500}
          className="w-full aspect-square"
          unoptimized
          alt="Bee twerking gif"
        />
        <Link href="/terrestrial-rage" className="underline">
          Terrestrial Rage Sim
        </Link>
      </div>
    </div>
  );
}
