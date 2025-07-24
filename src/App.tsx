import { useState } from "react";
import "./index.css";

function App() {
  const [isOn, SetIsOn] = useState<boolean>(false);
  const [inter, setInter] = useState<number>();
  const [timeNow, setTimeNow] = useState<number>(300000);

  const handleStart = () => {
    if (!isOn) {
      SetIsOn(true);
      const intervalId = setInterval(() => {
        setTimeNow((x) => x + 1000);
      }, 1000);
      setInter(intervalId);
    }
  };
  const handleStop = () => {
    if (isOn) {
      SetIsOn(false);

      clearInterval(inter);
    }
  };
  const handleReset = () => {
    console.log("deleting");
    setTimeNow(0);
  };

  const time = new Date(timeNow);
  const hours= String(time.getUTCHours()).padStart(2, "0");
  const min = String(time.getUTCMinutes()).padStart(2, "0");
  const sec = String(time.getUTCSeconds()).padStart(2, "0");

  return (
    <div className="bg-gray-200 h-screen flex justify-center  ">
      <div className="border  w-115 justify-self-center self-center grid content-end bg-white rounded-b-3xl">
        <span className="flex justify-center text-5xl font-semibold pt-2">
          Timer
        </span>
        <span className="flex justify-center border-y-1 text-5xl my-5 py-2 pb-3 ">
          {`${hours}:${min}:${sec}`}
        </span>
        <div className=" bottom-0 flex justify-evenly py-3 ">
          <button
            className="border border-black bg-green-500 text-white px-5 text-lg py-1 rounded-3xl cursor-pointer"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="border border-black bg-orange-500 text-white px-5 py-1 rounded-3xl cursor-pointer "
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="border border-black bg-red-500 text-white px-5 py-1 rounded-3xl cursor-pointer"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
