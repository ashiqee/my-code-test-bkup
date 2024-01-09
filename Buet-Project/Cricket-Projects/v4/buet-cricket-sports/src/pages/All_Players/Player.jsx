import PropTypes from "prop-types";
("use client");

import { Card } from "flowbite-react";

const Player = ({ player }) => {
  const { নাম, office, id, play_role, jersy_name } = player;

  // console.log(player);
  return (
    <Card>
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt={নাম}
          className="mb-3 rounded-full shadow-lg"
          height="96"
          src="https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo="
          width="96"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {নাম}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {office}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {play_role}
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            href="#"
          >
            <p>More Info</p>
          </a>
          <a
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            href="#"
          >
            <p>Message</p>
          </a>
        </div>
      </div>
    </Card>
  );
};

Player.propTypes = {
  player: PropTypes.object,
};

export default Player;
