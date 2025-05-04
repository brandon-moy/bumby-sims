import Image from "next/image";
import LaserPatterns from "./laser-patterns";
import ClonePatterns from "./clone-patterns";
import LocationButtons from "./location-buttons";

export default function Arena() {
  return (
    <div className="relative">
      <LocationButtons />
      <div className="relative">
        <div id="error-alert" className="hide-error"></div>
        <Image
          src="/howling.png"
          width={250}
          height={250}
          className="absolute left-1/2 -translate-5/9 top-1/2 z-10"
          alt="Howling Blade Boss image"
        />
        <LaserPatterns />
        <ClonePatterns />
        <Image
          src="/m8snoCmarker.png"
          width={500}
          height={500}
          className="w-full aspect-square rounded-3xl"
          alt="M8S Arena"
        />
      </div>
    </div>
  );
}
