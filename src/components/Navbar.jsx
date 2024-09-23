import { useContext } from "react";
import { NewsContext } from "../App";

function Navbar() {
  const { setNews } = useContext(NewsContext);

  const handleTeslaNews = () => {
    setNews("tesla");
  };
  const handleAppleNews = () => {
    setNews("apple");
  };

  const handleBitCoinNews = () => {
    setNews("bitcoin");
  };
  return (
    <>
      <nav className="bg-purple-500 text-white flex justify-between px-20 py-3 drop-shadow-md fixed w-full z-50">
        {/* left side div */}
        <div>
          <h1 className="text-xl font-bold cursor-pointer">NEWS APP</h1>
        </div>

        {/* right side div */}
        <div>
          <ul className="flex space-x-8 font-bold">
            <li className="cursor-pointer" onClick={() => location.reload()}>
              Home
            </li>
            <li className="cursor-pointer" onClick={handleBitCoinNews}>
              Bitcoin News
            </li>
            <li className="cursor-pointer" onClick={handleAppleNews}>
              Apples News
            </li>
            <li className="cursor-pointer" onClick={handleTeslaNews}>
              Tesla News
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
