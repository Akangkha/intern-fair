import Image from "next/image";
const Card = () => {
  return (
    <div className="border-[#DCDCE7] tbPortrait:w-[35vw] mbMedium:w-[45vw] mbSmall:w-[70vw] max-w-[36vw]: mbMini:w-full border-2 rounded-lg p-6 flex flex-col items-start justify-start gap-6">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-Gilroy-Medium text-2xl mbMedium:text-xl mbMini:text-[1rem]">
          Web Development
        </h1>
        <button className="p-1 mbXSmall:px-5 rounded-lg bg-[#4543B5] text-white mbMini:px-3">
          New
        </button>
      </div>
      <p className="tbPortrait:w-[70%] mbMedium:w-[75%] mbSmall:w-[80%] mbMini:w-full text-[#A4A4A4] text-md">
        Unlock a treasure trove of curated web development resources organized
        for every stage ...
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="font-Gilroy-Medium ">
          <h2 className="text-[#1B1B1B] mbMini:text-[0.9rem] ">Duration</h2>
          <p className="text-[#A4A4A4] mbMini:text-[0.75rem]">
            14-15 hours course
          </p>
        </div>
        <div className="self-end">
          <button className=" flex items-center justify-center gap-2 font-Gilroy-Medium rounded-2xl p-2 mbMini:px-4 mbXSmall:px-6  border-2 border-black  mbMini:text-xs  mbXSmall:text-base ">
            Explore
            <span>
              <Image
                src="/icons/Vector.png"
                alt="Description of your image"
                width={15}
                height={20}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;