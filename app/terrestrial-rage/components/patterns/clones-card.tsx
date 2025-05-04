import Image from "next/image";
export default function CardinalClones() {
  return (
    <div className="absolute z-5 inset-0 opacity-75">
      <Image
        src="/howling.png"
        width={200}
        height={200}
        className="absolute left-1/2 -translate-x-1/2 top-20"
        alt="Howling Blade Clone Image"
      />
      <Image
        src="/howling.png"
        width={200}
        height={200}
        className="absolute left-3/5 bottom-30 rotate-135"
        alt="Howling Blade Clone Image"
      />
      <Image
        src="/howling.png"
        width={200}
        height={200}
        className="absolute left-3/5 rotate-60 top-40"
        alt="Howling Blade Clone Image"
      />

      <Image
        src="/howling.png"
        width={200}
        height={200}
        className="absolute right-3/5 -rotate-60 top-50"
        alt="Howling Blade Clone Image"
      />
      <Image
        src="/howling.png"
        width={200}
        height={200}
        className="absolute right-5/9 bottom-25 -rotate-135"
        alt="Howling Blade Clone Image"
      />
    </div>
  );
}
