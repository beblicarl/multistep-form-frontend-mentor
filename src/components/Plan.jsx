import {
  Button,
  Switch,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import archade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

export default function Plan() {
  return (
    <div className="p-[2em]">
      <h1 className="text-MarineBlue font-bold text-2xl">Select your plan</h1>
      <p className="mt-2 text-CoolGray font-semibold text-xl">
        You have the option of monthly or yearly billing
      </p>
      <FormControl className="flex flex-col mt-[0.6em]">
        <Button mt={4} padding={8}>
          <div className="flex gap-[1em] mr-[4em] ">
            <img src={archade} alt="archade" />
            <div>
              <h3>Archade</h3>
              <span className="mr-[1em]">$9/mo</span>
            </div>
          </div>
        </Button>
        <Button mt={4} padding={8}>
          <div className="flex gap-[1em] mr-[3em]">
            <img src={advanced} alt="advanced" />
            <div>
              <h3>Advanced</h3>
              <span className="mr-[1em]">$12/mo</span>
            </div>
          </div>
        </Button>
        <Button mt={4} padding={8}>
          <div className="flex gap-[1em] mr-[3em]">
            <img src={pro} alt="pro" />
            <div>
              <h3 className="mr-[2.7em]">Pro</h3>
              <span className="mr-[1em]">$15/mo</span>
            </div>
          </div>
        </Button>
        <div className="flex justify-center mt-[1.6em] bg-Alabaster rounded p-[0.3em]">
          <FormLabel>Monthly</FormLabel>
          <Switch size="md" />
          <FormLabel className="pl-[1em]">Yearly</FormLabel>
        </div>
      </FormControl>
    </div>
  );
}
