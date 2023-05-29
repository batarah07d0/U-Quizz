import icon from "../assets/icon/android-chrome-512x512.png";

export function Footer(props) {
  return (
    <div className={`flex flex-col scale-100 ${props.className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5E60CE"
          fill-opacity="1"
          d="M0,96L26.7,96C53.3,96,107,96,160,101.3C213.3,107,267,117,320,144C373.3,171,427,213,480,229.3C533.3,245,587,235,640,240C693.3,245,747,267,800,261.3C853.3,256,907,224,960,208C1013.3,192,1067,192,1120,202.7C1173.3,213,1227,235,1280,234.7C1333.3,235,1387,213,1413,202.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#5E60CE] text-white">
        <footer class="m-4">
          <hr className="border-white" />
          <div class="w-full max-w-screen-xl mx-auto p-4 ">
            <div className="flex flex-row justify-between">
              <div className="flex">
                <img src={icon} class="h-8 mr-3" alt="UQuizz Icon" />
                <span class="self-center text-md lg:text-2xl font-semibold whitespace-nowrap">
                  UQuizz
                </span>
              </div>
              <div>
                <span class="hidden lg:inline text-md lg:text-2xl font-semibold ">
                  © 2023 Kelompok 2™. All Rights Reserved.
                </span>
                <span class="inline lg:hidden text-md lg:text-2xl font-semibold ">
                  © 2023 Kelompok 2™
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
