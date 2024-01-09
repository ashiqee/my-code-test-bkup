const Teams = () => {
  return (
    <div className=" mt-12 md:flex mb-12">
      {/*    <div className=" md:w-2/3 mx-auto ">
          <div class="carousel w-full rounded-3xl md:h-[650px] ">
            <div id="item1" class="carousel-item w-full">
              <img
                src="https://i.ibb.co/Q6Fdrt7/Tigers.jpg
              "
                class="w-full"
              />
            </div>
            <div id="item2" class="carousel-item w-full">
              <img
                src="https://i.ibb.co/9HNfjg8/Gradios.jpg
              "
                class="w-full"
              />
            </div>
            <div id="item3" class="carousel-item w-full">
              <img
                src="https://i.ibb.co/7C6KRsZ/thunder.jpg
              "
                class="w-full"
              />
            </div>
            <div id="item4" class="carousel-item w-full">
              <img
                src="https://i.ibb.co/VB3G2qk/prize.jpg
              "
                class="w-full"
              />
            </div>
          </div>
          <div class="flex justify-center w-full py-2 gap-2">
            <a href="#item1" class="btn btn-xs">
              1
            </a>
            <a href="#item2" class="btn btn-xs">
              2
            </a>
            <a href="#item3" class="btn btn-xs">
              3
            </a>
            <a href="#item4" class="btn btn-xs">
              4
            </a>
          </div>
        </div> */}

      <div className="mt-10  mx-auto">
        <ul className="  grid-cols-4   grid md:grid-cols-7 gap-5 md:gap-20">
          <li>
            <img
              className="w-28 rounded-full shadow-xl"
              src="https://i.ibb.co/XtffcZs/Tigers.jpg
  "
              alt=""
            />
          </li>
          <li>
            <img
              className="w-28 rounded-full shadow-xl"
              src="https://i.ibb.co/0h1WC6j/Gladiators.jpg
  
  "
              alt=""
            />
          </li>
          <li>
            <img
              className="w-28 rounded-full shadow-xl"
              src="https://i.ibb.co/qrY7Yvx/King.jpg
  
  "
              alt=""
            />
          </li>
          <li>
            <img
              className="w-28 rounded-full shadow-xl"
              src="https://i.ibb.co/kSQ4fQs/Knight-riders.jpg
  
  "
              alt=""
            />
          </li>
          <li>
            <img
              className="w-28 rounded-full shadow-xl"
              src="https://i.ibb.co/rx57JsN/lions.jpg
  
  "
              alt=""
            />
          </li>
          <li>
            <img
              className="w-28 rounded-full shadow-xl"
              src="https://i.ibb.co/C17vspt/Strikers.jpg
  
  "
              alt=""
            />
          </li>

          <li>
            <img
              className="w-28 rounded-full shadow-xl"
              src="https://i.ibb.co/ZYvKKzY/Thunders.jpg
  
  "
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Teams;
