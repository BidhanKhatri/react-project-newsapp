import { useContext, useEffect } from "react";
import { useState } from "react";
import { NewsContext } from "../App";
import LoadingSpinner from "../assets/news-loading.gif";
import SliderSection from "./SliderSection";

function DisplayNews() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { news } = useContext(NewsContext);

  async function fetchData() {
    setLoading(true);
    const result = await fetch(
      `https://newsapi.org/v2/everything?q=${news}&from=2024-09-16&to=2024-09-16&sortBy=popularity&apiKey=3e567e4944924feba5f3ab1459ada535`
    );

    const finalData = await result.json();

    setData(finalData.articles);
    console.log(finalData.articles);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [news]);

  return (
    <>
      {loading ? (
        <div className="bg-white h-screen flex justify-center items-center">
          {" "}
          <img src={LoadingSpinner} className="h-52" />{" "}
        </div>
      ) : (
        <>
          <SliderSection data={data} />
          <div className="bg-gray-200/80 px-10 py-4 flex justify-center items-center flex-wrap  gap-10 pt-4 ">
            {data.map((items, index) => {
              return (
                <>
                  <div className="flex flex-col ">
                    <div
                      key={index}
                      className="border border-gray-400/40 w-72 h-64 rounded-t-lg overflow-hidden shadow-xl "
                    >
                      <img
                        src={
                          items.urlToImage
                            ? items.urlToImage
                            : "https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149288316.jpg?t=st=1726553647~exp=1726557247~hmac=edd13024935b20179eada3fc512c7c1a95af4861c06e52299bb2637583a3268c&w=900"
                        }
                        alt="News-Image"
                        className="w-full h-full flex justify-center items-center"
                      />
                    </div>

                    <div className="bg-gray-300/80 p-4 max-w-72 border-x border-b border-gray-400 shadow-xl space-y-2">
                      <p className="text-md font-bold">
                        {items.title ? items.title.slice(0, 30) : "No Title"}...
                      </p>
                      <p>
                        {items.description
                          ? items.description.slice(0, 80)
                          : "No description for this News"}
                      </p>
                      <button className="bg-purple-500 text-white px-4 py-2 rounded-md w-full">
                        <a href={items.url} target="_blank">
                          Open News
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default DisplayNews;
