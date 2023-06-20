import { Button } from "@chakra-ui/react";

import Personal from "./Personal";
import Stepform from "./Stepform";
import Plan from "./Plan";
import Addons from "./Addons";
import Thanks from "./Thanks";

export default function MultistepForm() {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="h-[20vh] bg-sidebar-mobile bg-no-repeat w-[100%] bg-cover bg-center">
        <Stepform />
      </div>
      <div className="h-[70vh] bg-gray-200"></div>
      <div className="overlay-div flex items-center justify-center ">
        <div className="bg-white w-[100%] h-[100%]">
          {/* <Personal /> */}
          {/* <Plan /> */}
          {/* <Addons /> */}
          <Thanks />
        </div>
      </div>
      <div className="h-[10vh] bg-white-200 flex justify-between p-[1.5em]">
        <Button color={"#a8b2b9"} variant="link">
          Go Back
        </Button>
        <Button color={"white"} bg={"#00477d"} variant="solid">
          Next Step
        </Button>
      </div>
    </div>
  );
}
