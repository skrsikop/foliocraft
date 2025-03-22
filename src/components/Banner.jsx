import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Banner = ({pageTitle}) => {
  return (
    <div className="text-center mt-10  flex flex-col mx-auto justify-center bg-gradient-to-l from-indigo-100  py-5 rounded-xl to-gray-100">
      <h1 className="text-2xl font-bold text-primary">{pageTitle}</h1>
      <div className="flex gap-4 mt-5 items-center justify-center mx-auto text-lg font-medium">
        <Link href="/" className="text-secondary  hover:text-primary ">Home</Link>
        <GoArrowRight />
        <h1>{pageTitle}</h1>
      </div>
    </div>
  );
};

export default Banner;
