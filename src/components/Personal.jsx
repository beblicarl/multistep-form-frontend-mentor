import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function Personal() {
  return (
    <div className="p-[2em]">
      <h1 className="text-MarineBlue font-bold text-2xl">Personal info</h1>
      <p className="mt-4 text-CoolGray font-semibold text-xl">
        Please provide your name, email address, and phone number.
      </p>
      <FormControl>
        <FormLabel mt={4} color={"#00477d"}>
          Name
        </FormLabel>
        <Input type="text" placeholder="e.g. Stephen King" />
        <FormLabel mt={4} color={"#00477d"}>
          Email
        </FormLabel>
        <Input type="email" placeholder="e.g. stephenking@lorem.com" />
        <FormLabel mt={4} color={"#00477d"}>
          Phone Number
        </FormLabel>
        <Input type="text" placeholder="e.g. +1 234 567 890" />
      </FormControl>
    </div>
  );
}
