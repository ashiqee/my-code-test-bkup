import useAuth from "./../../../hooks/useAuth";
import { useState } from "react";
import { jersySizes, playerRoles } from "./data";
import bkash from "../../../assets/images/bkash.jpg";

const Registration = () => {
  const { user } = useAuth();

  const [step, setStep] = useState(1);

  const data = [
    {
      deptID: 1,
      Department_office: "Accident Research Institute",
      sort: "ARI",
    },
    {
      deptID: 2,
      Department_office: "Ahsan Ullah Hall",
      sort: "AUH",
    },
    {
      deptID: 3,
      Department_office: "Audit",
      sort: "AUDIT",
    },
  ];

  console.log(step);
  const handlePhoneReg = (e) => {
    e.preventDefault();
    const form = e.target;

    const phoneNumber = form.mobile.value;
    console.log(phoneNumber);
  };

  return (
    <div className="text-center pt-2 min-h-[calc(100vh-189px)] max-w-3xl mx-auto">
      <div className="flex shadow-xl p-4 rounded-xl md:justify-around gap-2 justify-center">
        <ul className="steps steps-vertical  lg:steps-horizontal">
          <li className="step pr-10 step-primary">Personal Info</li>
          <li
            className={
              step === 2 || step === 3 || step === 4
                ? "step step-primary"
                : "step "
            }
          >
            Player Role
          </li>
          <li
            className={step === 3 || step === 4 ? "step step-primary" : "step "}
          >
            Payment
          </li>
          <li className={step === 4 ? "step step-primary" : "step "}>
            Success
          </li>
        </ul>
      </div>

      <form className=" mt-2 mx-5 " onSubmit={handlePhoneReg}>
        {step === 1 && (
          <section>
            <div className="space-y-4">
              <div className="space-y-4 md:space-y-0 md:flex gap-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100"
                  placeholder="আপনার নাম"
                  required
                />
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100"
                  placeholder="পদবী"
                  required
                />
              </div>
              <div className="">
                <select
                  name="office"
                  className="border   bg-gray-50  text-gray-900 dark:text-white text-md 
                 focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100   p-2 rounded"
                >
                  <option disabled selected>
                    অফিস/ডিপার্টমেন্ট সিলেক্ট করুন
                  </option>
                  {data?.map((office, i) => (
                    <option key={i}>{office.Department_office}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-4 md:space-y-0 md:flex gap-2">
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100"
                  placeholder="মোবাইল নাম্বার"
                  required
                />
                <input
                  type="text"
                  name="profileImg"
                  id="profileImg"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100"
                  placeholder="প্রোফাইল  ইমেজ লিঙ্ক"
                  required
                />
              </div>
            </div>
          </section>
        )}

        {/* player info  */}

        {step === 2 && (
          <section>
            <div>
              <div className="space-y-4 md:space-y-0 md:flex gap-2">
                <select
                  name="office"
                  className="border   bg-gray-50  text-gray-900 dark:text-white text-md 
                 focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100   p-2 rounded"
                >
                  <option disabled selected>
                    খেলোয়াড় ক্যাটাগরি সিলেক্ট করুন
                  </option>
                  {playerRoles?.map((data, i) => (
                    <option key={i}>{data.playerRole}</option>
                  ))}
                </select>
                <select
                  name="office"
                  className="border   bg-gray-50  text-gray-900 dark:text-white text-md 
                 focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100   p-2 rounded"
                >
                  <option disabled selected>
                    জার্সি সাইজ সিলেক্ট করুন
                  </option>
                  {jersySizes?.map((data, i) => (
                    <option key={i}>{data.jersySizeName}</option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <div className="space-y-4 md:space-y-0 md:flex gap-2">
                  <input
                    type="text"
                    name="jersyName"
                    id="jersyName"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100"
                    placeholder="জার্সি নাম"
                    required
                  />
                  <input
                    type="text"
                    name="jersyNumber"
                    id="jersyNumber"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100"
                    placeholder="জার্সি নাম্বার"
                    required
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        {/* payment info  */}
        {step === 3 && (
          <section>
            <div>
              <div className="mt-0">
                <h2 className="text-2xl py-4">SEND NOW 500TK</h2>
                <div className="md:flex mb-5 w-full">
                  <div className="grid hover:shadow-2xl flex-grow card bg-base-300 rounded-box place-items-center">
                    <h2 className="text-xl py-5 md:text-2xl">
                      Bkash/Nagad Personal
                      <br />
                      01515625161
                    </h2>
                  </div>
                  <div className="divider  md:divider-horizontal">OR</div>
                  <div className="grid hover:shadow-2xl  flex-grow card bg-base-300 rounded-box place-items-center">
                    <img className="w-56 p-5 mx-auto" src={bkash} alt="" />
                  </div>
                </div>

                <div className="space-y-4 md:space-y-0 md:flex gap-2">
                  <input
                    type="text"
                    name="jersyName"
                    id="jersyName"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100"
                    placeholder=" বিকাশ মোবাইল নাম্বার"
                    required
                  />
                  <input
                    type="text"
                    name="jersyNumber"
                    id="jersyNumber"
                    className="bg-gray-50 border  border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100"
                    placeholder="TRANSACTION ID"
                    required
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {(step === 2 || step === 3 || step === 4) && (
          <button
            onClick={() => setStep(step - 1)}
            type="submit"
            className="btn mt-5 mr-5 btn-success"
          >
            Previous
          </button>
        )}
        <button
          onClick={() => setStep(step + 1)}
          type="submit"
          className="btn mt-5 btn-success"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Registration;
