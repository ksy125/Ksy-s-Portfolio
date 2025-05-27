import { useState } from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

// 임시 로고
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const MainHome = () => {
  const [themeMode, setThemeMode] = useState("light");

  const handleThemeChange = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    /* Main Home page */
    <div>
      {/* Nav Bar */}
      <div className="flex justify-between items-center top-0 w-full h-[70px] px-8 shadow-md backdrop-blur-sm fixed z-50 bg-white bg-opacity-90">
        {/* LOGO */}
        <p
          className="text-2xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AcademicCapIcon className="h-8 w-8 text-black" />
        </p>
        {/* Nav - contents */}
        <div className="flex space-x-8 text-l font-normal">
          <p>Intro</p>
          <p>핵심역량</p>
          <p>보유기술</p>
          <p>프로젝트</p>
          <p>Link</p>
          <p>Information</p>
          <p>About Me</p>
        </div>
        {/* Theme Mode Change Button */}
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer w-16 h-7">
            <input
              type="checkbox"
              checked={themeMode === "dark"}
              onChange={handleThemeChange}
              className="sr-only peer"
            />
            {/* Theme Switch Bar */}

            {/* Toggle_One */}
            {/* <div className="w-10 h-full rounded-full flex items-center justify-center text-xs font-bold bg-blue-600 peer-checked:bg-gray-500 transition-colors duration-500">
              {themeMode === "light" ? (
                <SunIcon
                  className={
                    themeMode === "light"
                      ? "h-5 w-5 m-0.5 text-white"
                      : "h-4 w-5 m-0.5 text-black"
                  }
                />
              ) : (
                <MoonIcon
                  className={
                    themeMode === "light"
                      ? "h-4 w-5 m-0.5 text-black"
                      : "h-5 w-5 m-0.5 text-white"
                  }
                />
              )}
            </div> */}

            {/* Toggle_Both - light | dark */}
            <div
              className="w-full h-full bg-blue-600 peer-checked:bg-gray-500 rounded-full 
              flex items-center justify-center text-xs font-semibold transition-colors duration-500"
            >
              <SunIcon
                className={
                  themeMode === "light"
                    ? "h-5 w-5 m-0.5 text-white"
                    : "h-4 w-5 m-0.5 text-gray-700"
                }
              />
              <MoonIcon
                className={
                  themeMode === "light"
                    ? "h-4 w-5 m-0.5 text-blue-800"
                    : "h-4 w-5 m-0.5 text-white"
                }
              />
            </div>

            {/* Toggle Action */}
            {/* 토글 버튼 만들고 싶으면 bg-color-white 또는 border 하면 됨됨 */}
            <div className="absolute left-2.5 w-5 h-5 rounded-full peer-checked:translate-x-6 transform transition-transform duration-500" />
          </label>
        </div>
      </div>

      {/* Page - Contents */}
      {/* <div className="flex-col mt-[70px] min-h-screen p-4 bg-gray-300">
        Thumnail - sample : 소개글
        <div className="w-[500px] bg-opacity-80 bg-gray-100 p-4 shadow-[0px_10px_20px_rgba(0,0,0,0.5)]">
          <span className="text-xl font-bold">포트폴리오 프로젝트</span>
          <p className="mt-2 text-gray-500 text-sm">
            이 페이지에 방문해주셔서 감사합니다. <br /> 이 곳은 제가
            포트폴리오를 제작하기 위해 만든 공간으로, 저에 대한 소개와 지금까지
            만들어 온 프로젝트들을 볼 수 있습니다. 프로젝트를 진행하면서 사용한
            기술과 내용을 보시고 마음에 드신다면 메일을 통해 채용 연락을 주시면
            감사하겠습니다. <br />
            e-mail : todus1225@gmail.com
          </p>
        </div>
      </div> */}

      {/* Page - Container */}
      <div className="flex flex-col mt-[70px] h-full bg-gray-100 gap-y-[70px]">
        {/* 1 page */}
        <div className="flex flex-col justify-center h-[calc(100vh-70px)] content-center text-center gap-y-2">
          <h1 className="text-7xl font-bold leading-tight tracking-[-0.1em]">
            안녕하세요,
            <br />
            프론트엔드 개발자
            <br />
            권새연입니다.
          </h1>
          <h3 className="text-2xl text-gray-500">
            회사와 함께 성장하고 협력하는
            <br />
            개발자가 되고 싶습니다.
          </h3>
        </div>
        {/* 2 page*/}
        <div className="bg-blue-300 h-screen content-center">
          <div className="flex-col p-3 bg-gray-300">
            <div className="bg-gray-400 w-fit">Image</div>
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis
              hic voluptatum. Possimus recusandae asperiores, iure, dolores
              neque sint voluptatibus accusamus, illo ipsam dicta cupiditate
              optio dolorum eos libero veniam.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-col items-center w-full px-12 py-4 bg-gray-400 text-gray-500 text-sm">
        <p>footer</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          delectus tenetur atque iste quibusdam, harum officiis, autem deserunt,
          voluptate quaerat error nisi ducimus reprehenderit impedit dolorum nam
          dolores et quo!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          animi eveniet nisi velit dolorum laudantium non vitae, sapiente
          temporibus tenetur molestiae reiciendis expedita explicabo? Veritatis,
          non exercitationem! Fugit, quas harum.
        </p>
        <p>@copyright</p>
      </div>
    </div>
  );
};

export default MainHome;
