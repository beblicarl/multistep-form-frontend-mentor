import thankYou from "../assets/icon-thank-you.svg";

export default function Thanks() {
  return (
    <div className="text-center flex flex-col justify-center p-[1em] gap-y-4">
      <img
        className="w-[3em] h-[5em] left-[25%] relative"
        src={thankYou}
        alt="thank-you"
      />
      <h1 className="text-MarineBlue font-bold text-2xl">Thank you!</h1>
      <p className="text-CoolGray font-semibold">
        Thanks for confirming your subscription! We hope you have fun using our
        platfomr. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
