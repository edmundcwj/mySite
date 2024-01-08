//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/ed.png"}
        width={433} // change width and height based on resolution of picture
        height={577}
        alt=""
        className="translate-z-0 object-none w-full h-full rounded-full"
      />
    </div>
  );
};

export default Avatar;
