import { GoBell } from "react-icons/go";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { Navbar } from "./components/Navbar";
import { useTheme } from "../../Contexts/ThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";

export const MainLayout = ({ children }) => {
  const { setTheme, theme } = useTheme();
  return (
    <main className="flex w-full text-base h-screen dark:text-white">
      <aside className="bg-surface dark:bg-surface-dark w-[300px] p-3">
        <div className="flex items-center gap-1 font-bold text-3xl px-3 mb-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Ambito_financ_logo.png" />
        </div>
        <Navbar />
      </aside>
      <div className="w-full">
        <header className="bg-surface dark:bg-surface-dark p-3 flex items-center justify-between">
          <h4 className="text-xl font-bold">Customer</h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 py-2 px-3 rounded-full bg-background dark:bg-background-dark">
              <HiOutlineMagnifyingGlass className="text-[20px]" />
              <input
                type="text"
                className="focus:outline-none bg-transparent placeholder:opacity-90"
                placeholder="Search"
              />
            </div>
            {theme === "light" ? (
              <MdOutlineWbSunny
                onClick={() => setTheme("dark")}
                className="hover:opacity-70 cursor-pointer text-[20px]"
              />
            ) : (
              <IoMoonOutline
                onClick={() => setTheme("light")}
                className="hover:opacity-70 cursor-pointer text-[20px]"
              />
            )}

            <GoBell className="hover:opacity-70 cursor-pointer text-[20px]" />
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/production-hostgator-brasil-v1-0-8/958/301958/ejqVH04K/ed9331fe80e14c86a1701f63d0238e27"
              />
            </div>
          </div>
        </header>
        <div className="bg-background dark:bg-background-dark h-full p-3">
          {children}
        </div>
      </div>
    </main>
  );
};
