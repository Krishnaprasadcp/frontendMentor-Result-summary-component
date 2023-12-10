import Results from "./Results";
import React from "react";
import icon1 from "../assets/images/icon-reaction.svg";
import icon2 from "../assets/images/icon-memory.svg";
import icon3 from "../assets/images/icon-verbal.svg";
import icon4 from "../assets/images/icon-visual.svg";

const Homepage = () => {
  const HomepageData =[
      {
        "category": "Reaction",
        "score": 80,
        "icon": icon1,
        "color":"red"
      },
      {
        "category": "Memory",
        "score": 92,
        "icon": icon2,
        "color":"yellow"
  
      },
      {
        "category": "Verbal",
        "score": 61,
        "icon": icon3,
        "color":"green"
  
      },
      {
        "category": "Visual",
        "score": 72,
        "icon": icon4,
        "color":"blue"
  
      }
    
  ];

  return (
    <React.Fragment>
      <div className="sm:flex flex-row w-full mt-20">
        <div className="topdiv sm:grid place-items-center sm:w-full ">
          <p className="text-gray-300 mt-4 text-lg">Your Result</p>
          <div className="roundedcirclediv">
            <div className="text-5xl  text-white mt-2">76</div>
            <p className="text-gray-400">of 100</p>
          </div>
          <p className="text-gray-100 mt-8 text-3xl">Great</p> 
          <p className="mt-3 text-lg mx-36  mb-16 text-gray-50 sm:w-4/6">You scored higher than 65% of the people who have taken these tests.</p>
          
        </div>
        <div className="sm:w-full">
          <p className="ml-12 mt-8 mb-7 text-lg font-bold">Summary</p>
            {HomepageData.map((item)=>(
              
              <div  key={item.category} >
                <Results props={item} />
              </div>
            ))}
            <div className="bg-blue-950 text-lg rounded-full mx-16 mt-7 h-16 flex justify-center hover:bg-blue-600">
            <button className=" text-gray-100">Continue</button>
            </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};
export default Homepage;
