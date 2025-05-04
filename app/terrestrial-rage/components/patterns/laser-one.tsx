import Image from "next/image";

export default function LaserOne() {
  return (
    <div
      id="laser-pattern-1"
      className="absolute flex justify-evenly w-4/5 rotate-135 top-60 left-15"
    >
      <Image
        src="/zap.png"
        height={100}
        width={250}
        className="w-15 h-40"
        alt="Blasters On 1"
      />
      <Image
        src="/nozap.png"
        height={250}
        width={250}
        className="w-15 h-40"
        alt="Blasters Off 1"
      />
      <Image
        src="/zap.png"
        height={250}
        width={250}
        className="w-15 h-40"
        alt="Blasters On 1"
      />
      <Image
        src="/nozap.png"
        height={250}
        width={250}
        className="w-15 h-40"
        alt="Blasters Off 1"
      />
    </div>
  );
}
