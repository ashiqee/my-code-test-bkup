import { Link } from "react-router-dom";
import useGoogleAuth from "./../../hooks/useGoogleAuth";

const Banner = () => {
  const { handleGoogleLogin } = useGoogleAuth();

  return (
    <div className="hero min-h-[600px] bg-base-100">
      <div className="flex items-center   drop-shadow-2xl gap-20 flex-col lg:flex-row-reverse">
        <div className=" mask mask-squircle border-4 ">
          <img
            src="https://i.ibb.co/Q6Fdrt7/Tigers.jpg
"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold ">
            <span className="text-rose-700">বুয়েট</span> <br />{" "}
            <span className="text-lg">
              আন্তঃ সম্মানিত শিক্ষক, কর্মকর্তা ও কর্মচারী প্রীতি ক্রিকেট
              টুর্নামেন্ট -২০২৪
            </span>
            <br />
            <br />{" "}
            <span className="text-center pt-10 drop-shadow-2xl">সিজন-৩</span>
          </h1>
          <img
            className=" my-auto w-28 mx-auto"
            src="https://media4.giphy.com/media/FeBamTuuPUTnFrqfx0/giphy.gif?cid=6c09b952djjkt4561ci63tffwnza5oomjujkkxuegg10cmyc&ep=v1_stickers_related&rid=giphy.gif&ct=s"
            alt=""
          />
          <p className="py-6"></p>
          <Link>
            <button
              onClick={handleGoogleLogin}
              className="btn hover:bg-blue-800 bg-rose-800 text-white drop-shadow-2xl"
            >
              রেজিস্ট্রেশন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
