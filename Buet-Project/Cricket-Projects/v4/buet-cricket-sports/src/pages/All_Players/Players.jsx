import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import Player from "./Player";

const Players = () => {
  const Players = useLoaderData();

  // console.log(Players);

  const [totalPlayers, setTotalPlayers] = useState([]);
  const [displayPlay, setDisplay] = useState([]);

  const handlePlayerFilter = (filter) => {
    if (filter === "All") {
      setDisplay(totalPlayers);
    } else if (filter === "Batsman") {
      const allBatsman = totalPlayers.filter(
        (batsman) => batsman.role === "Batsman"
      );
      setDisplay(allBatsman);
    } else if (filter === "Bowl") {
      const allBowler = totalPlayers.filter((b) => b.role === "Bowl");

      setDisplay(allBowler);
    } else if (filter === "AllRounder") {
      const allAllRounder = totalPlayers.filter(
        (allRounder) => allRounder.role === "AllRounder"
      );
      setDisplay(allAllRounder);
      console.log(allAllRounder);
    } else if (filter === "Legend") {
      const allLegend = totalPlayers.filter(
        (legend) => legend.role === "Legend"
      );
      setDisplay(allLegend);
    }
  };
  useEffect(() => {
    setTotalPlayers(Players);
    setDisplay(Players);
  }, [Players]);

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      {/*  <h2>All Player: {Players.length}</h2> */}

      {/* Player search and filter here  */}
      <form>
        <div className=" mt-10 justify-center items-baseline">
          {/* ------------  */}

          <div className=" flex relative  w-full">
            <details className="dropdown">
              <summary className="text-sm relative top-0 left-0 btn border-2 border-rose-400">
                filter
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 opacity-40 rounded-box w-52">
                <li onClick={() => handlePlayerFilter("All")}>
                  <a>All Player</a>
                </li>
                <li onClick={() => handlePlayerFilter("Batsman")}>
                  <a>Batsman</a>
                </li>
                <li onClick={() => handlePlayerFilter("Bowl")}>
                  <a>Bowler</a>
                </li>
                <li onClick={() => handlePlayerFilter("AllRounder")}>
                  <a>AllRounder</a>
                </li>
                <li onClick={() => handlePlayerFilter("Legend")}>
                  <a>Legend</a>
                </li>
              </ul>
            </details>

            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-80 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="name, batsman, bowler, all-rounder..."
              required
            />
            <button
              type="submit"
              className="relative top-0 right-1 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      {/* all Player Data Load here */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 justify-center mx-auto">
        {displayPlay.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Players;
