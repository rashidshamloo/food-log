const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-[clamp(28px,18px_+_2vw,36px)] font-bold">{children}</h2>
  );
};

export default Title;
