import { useEffect } from "react";
import { useState } from "react";

const countdownTargetDate = new Date("2024-02-10T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = countdownTargetDate - new Date();
  const Days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const Hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const Minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const Seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { Days, Hours, Minutes, Seconds };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  //   console.log(timeLeft.days);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="mt-3 grid justify-center text-center">
        <h2 className="text-2xl text-rose-700">রেজিস্ট্রেশন ডেডলাইন</h2>
        <h2 className="text-3xl font-bold text-rose-800">February 10,2024</h2>
      </div>
      <div className="grid grid-flow-col  gap-4 text-center justify-center auto-cols-max mt-5 ">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div key={label}>
              <div className=" border-4 shadow-2xl bg-rose-800 rounded-box text-neutral-content ">
                <div className="font-mono p-2  md:p-4 flex flex-col  ">
                  <span className="text-3xl md:text-5xl"> {value}</span>
                  <span className="text-sm md:text-lg">{label}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
