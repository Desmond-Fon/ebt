import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-cover min-h-screen flex items-center justify-center relative">
      {/* <img src={card} alt="card" className="absolute top-0 left-0 w-full h-full" /> */}
      <div className="container mx-auto px-2 lg:px-4 -mt-40 lg:-mt-10">
        <nav className="flex justify-center gap-[64px] lg:gap-[320px] items-center font-editors-note lg:text-[32px] font-medium">
          <div className="flex gap-[22px] items-center">
            <Link to="https://dexscreener.com">Dexscreener</Link>
            <Link to="https://dexscreener.com">X</Link>
            <Link to="https://dexscreener.com">Telegram</Link>
          </div>

          <button className="text-[#8A0000]">Buy EBT</button>
        </nav>
        <div className="lg:flex justify-center items-center mt-[78px] hidden">
          <div className="flex w-fit items-center justify-center">
            <div className="flex flex-col items-center  justify-center  w-fit">
              <h1 className="text-[#6E6E6E] text-[270px] font-eroded leading-[190px]">
                Everyone Broke
              </h1>
              <div className="flex pl-[15%] justify-center items-start gap-[22px]">
                <h2 className="text-[#6E6E6E] text-[270px] font-eroded leading-[270px]">
                  TRYING
                </h2>
                <div className="flex flex-col items-start justify-center gap-[22px] w-[35%]">
                  <h2 className="text-[32px] font-medium leading-[32px] tracking-[0px] font-editors-note">
                    SNAP benefits won't go <br /> out Nov. 1. 'The well has{" "}
                    <br /> run dry,' USDA says.
                  </h2>
                  <div className="flex justify-start gap-3">
                    <h3 className="font-inter font-medium leading-[16px] text-[16px]">
                      Come this Saturday, <br /> SNAP recipients will <br /> not
                      see their <br /> November benefits due to the federal government{" "}
                      <br /> shutdown.
                    </h3>
                    <p className="font-editors-note font-medium text-[26px] leading-[32px]">
                      Degens Benefit would go out Nov.1. “Everyone broke
                      trying’....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center mt-[40px] lg:hidden">
          <div className="relative">
            <h1 className="text-[#6E6E6E] text-[140px] font-eroded leading-[120px] text-center pr-3">
              Everyone Broke trying
            </h1>

            <div className="absolute top-[30%] flex flex-col gap-[10px] right-0 w-[24%] pl-2 text-[15px]">
              <p className="font-medium font-editors-note">
                SNAP benefits won't go out Nov. 1. 'The well has run dry,' USDA
                says.
              </p>
              <p className="font-editors-note pr-5 leading-[20px] font-medium">Degens Benefit would go out Nov.1.</p>
            </div>
          </div>
          <p className="w-[55%] pl-3 text-sm font-medium font-intr">
            Come this Saturday, SNAP recipients will not see their November
            benefits due to the federal government shutdown.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
