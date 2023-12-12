import Image from "next/image";

const Logo = () => {
  return (
    <div className="-ml-[3px] flex items-center justify-center gap-[2px] font-bold uppercase text-primary">
      <Image
        src="/logo.png"
        alt="logo"
        width="36"
        height="36"
        className="-mt-2"
      />
      <p>Food Log</p>
    </div>
  );
};

export default Logo;
