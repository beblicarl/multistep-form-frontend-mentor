import { Checkbox, FormControl } from "@chakra-ui/react";

export default function Addons() {
  return (
    <div className="p-[2em]">
      <h1 className="text-MarineBlue font-bold text-2xl">Pick add-ons</h1>
      <p className="mt-2 text-CoolGray font-semibold text-xl">
        Add-ons help enhance your gaming experience.
      </p>
      <FormControl>
        <Checkbox
          mt={4}
          spacing="1rem"
          className="border-2 border-CoolGray rounded-md p-[0.5em] w-[100%]"
        >
          <div className="flex justify-between w-[100%] gap-x-5">
            <div>
              <h3 className="text-sm text-MarineBlue font-semibold">
                Online service
              </h3>
              <p className="text-xs">Access to multiplayer games</p>
            </div>
            <div>
              <span className="text-xs text-PurplishBlue font-normal">
                +$1/mo
              </span>
            </div>
          </div>
        </Checkbox>
        <Checkbox
          mt={4}
          spacing="1rem"
          className="border-2 border-CoolGray rounded-md p-[0.5em] w-[100%]"
        >
          <div className="flex justify-between w-[100%] gap-x-11">
            <div>
              <h3 className="text-sm text-MarineBlue font-semibold">
                Larger storage
              </h3>
              <p className="text-xs">Extra 1TB on cloud save</p>
            </div>
            <div>
              <span className="text-xs text-PurplishBlue font-normal">
                +$2/mo
              </span>
            </div>
          </div>
        </Checkbox>
        <Checkbox
          mt={4}
          spacing="1rem"
          className="border-2 border-CoolGray rounded-md p-[0.5em] w-[100%]"
        >
          <div className="flex justify-between w-[100%] gap-x-2">
            <div>
              <h3 className="text-sm text-MarineBlue font-semibold">
                Customizable profile
              </h3>
              <p className="text-xs">Custom theme on your profile</p>
            </div>
            <div>
              <span className="text-xs text-PurplishBlue font-normal">
                +$2/mo
              </span>
            </div>
          </div>
        </Checkbox>
      </FormControl>
    </div>
  );
}
