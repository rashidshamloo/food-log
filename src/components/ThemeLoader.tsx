const ThemeLoader = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `try {
  let theme = localStorage.getItem("theme") ?? "system";
  if (theme === "system")
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
} catch (e) {
  console.error(e);
}`,
      }}
    />
  );
};

export default ThemeLoader;
