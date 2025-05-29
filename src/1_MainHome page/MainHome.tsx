import { useState } from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

// Temporary Logo
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

const MainHome = () => {
  // Nav - Theme Change
  const [themeMode, setThemeMode] = useState("light");
  const handleThemeChange = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Page Title
  const navPage = [
    { menu: "Intro" },
    { menu: "핵심역량" },
    { menu: "보유기술" },
    { menu: "프로젝트" },
    { menu: "Link" },
    { menu: "Information" },
    { menu: "About Me" },
  ];
  // 2 page - Core competencies
  const competency = [
    {
      image: "image1",
      title: "Title01",
      text: "Lorem Possimus recusandae asperiores, illo ipsam dictacupiditate optio dolorum eos libero veniam.",
    },
    {
      image: "image1",
      title: "Title01",
      text: "Lorem Possimus recusandae asperiores, illo ipsam dictacupiditate optio dolorum eos libero veniam.",
    },
    {
      image: "image1",
      title: "Title01",
      text: "Lorem Possimus recusandae asperiores, illo ipsam dictacupiditate optio dolorum eos libero veniam.",
    },
  ];
  // 3 page - Skills
  const skills = [
    { title: "React", image: "image1" },
    { title: "HTML", image: "image2" },
    { title: "CSS", image: "image3" },
    { title: "JavaScript", image: "image4" },
    { title: "Tailwind", image: "image5" },
    { title: "Git", image: "image6" },
  ];
  // 4 page - Project
  const projectList = [
    {
      title: "프로젝트01",
      text: "Lorem Possimus recusandae asperiores, illo ipsam dictacupiditate optio dolorum eos libero veniam.",
      image: "image1",
    },
    {
      title: "프로젝트02",
      text: "Lorem Possimus recusandae asperiores, illo ipsam dictacupiditate optio dolorum eos libero veniam.",
      image: "image2",
    },
    {
      title: "프로젝트03",
      text: "Lorem Possimus recusandae asperiores, illo ipsam dictacupiditate optio dolorum eos libero veniam.",
      image: "image3",
    },
    {
      title: "프로젝트04",
      text: "Lorem Possimus recusandae asperiores, illo ipsam dictacupiditate optio dolorum eos libero veniam.",
      image: "image4",
    },
    {
      title: "프로젝트05",
      text: "Lorem Possimus recusandae asperiores, illo ipsam dictacupiditate optio dolorum eos libero veniam.",
      image: "image5",
    },
    {
      title: "프로젝트06",
      text: "Lorem Possimus recusandae asperiores, illo ipsam dictacupiditate optio dolorum eos libero veniam.",
      image: "image6",
    },
  ];
  // 5 page - Link
  const link = [
    {
      image: <InformationCircleIcon className="h-8 w-8 text-gray-500" />,
      title: "관련링크 01",
      url: "https://github.com/dashboard/ksy_portfolio",
    },
    {
      image: <InformationCircleIcon className="h-8 w-8 text-gray-500" />,
      title: "관련링크 02",
      url: "https://figma.com/design/portfolio-Website",
    },
    {
      image: <InformationCircleIcon className="h-8 w-8 text-gray-500" />,
      title: "관련링크 03",
      url: "https://youtube.com/video/ksy-portfolio",
    },
  ];

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
        <div className="flex space-x-8 text-md font-bold">
          {navPage.map((bar, i) => (
            <h3
              key={i}
              className="cursor-pointer hover:bg-gray-200 p-1 rounded-lg"
            >
              {bar.menu}
            </h3>
          ))}
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
              flex items-center justify-center text-xs font-semibold transition-colors duration-1000"
            >
              <SunIcon
                className={
                  themeMode === "light"
                    ? "h-5 w-5 m-0.5 text-white"
                    : "h-4 w-5 m-0.5 text-gray-700 hover:text-gray-300"
                }
              />
              <MoonIcon
                className={
                  themeMode === "light"
                    ? "h-4 w-5 m-0.5 text-blue-800 hover:text-blue-500"
                    : "h-4 w-5 m-0.5 text-white"
                }
              />
            </div>

            {/* Toggle Action */}
            {/* 토글 버튼 만들고 싶으면 bg-color-white 또는 border 하면 됨됨 */}
            <div className="absolute left-2.5 w-5 h-5 rounded-full peer-checked:translate-x-6 transform transition-transform duration-1000" />
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
        {/* 1 page - Thumnail */}
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

        {/* 2 page - Core competencies */}
        <div className="flex flex-col h-screen">
          <h1 className="relative top-16 m-12 text-2xl font-bold">
            {navPage[1].menu}
          </h1>
          <div className="flex-1 p-4 content-center">
            <div className="flex p-4 text-center">
              {competency.map((core, i) => (
                <div key={i} className="flex flex-col mx-auto p-4 w-full">
                  <div className="bg-gray-400 w-40 h-40 content-center rounded-lg mx-auto">
                    {core.image}
                  </div>
                  <div className="flex-col p-4">
                    <h1 className="font-bold pb-2">{core.title}</h1>
                    <p className="text-sm">{core.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 page - Skills */}
        <div className="flex flex-col h-screen">
          <h1 className="relative top-16 m-12 text-2xl font-bold">
            {navPage[2].menu}
          </h1>
          <div className="flex-1 p-4 content-center">
            <div className="grid grid-cols-3 gap-y-16 text-center max-w-4xl mx-auto">
              {skills.map((skill, i) => (
                <div key={i} className="flex flex-col mx-auto w-fit">
                  <div className="bg-gray-400 w-40 h-40 content-center rounded-lg">
                    {skill.image}
                  </div>
                  <h1 className="m-4 font-bold">{skill.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 page - Project */}
        <div className="flex flex-col h-screen">
          <h1 className="relative top-16 m-12 text-2xl font-bold">
            {navPage[3].menu}
          </h1>
          <div className="flex-1 p-4 content-center">
            <div className="grid grid-cols-3 gap-16 max-w-[calc(100vw-96px)] mx-auto">
              {projectList.map((project, i) => (
                <div
                  key={i}
                  className="flex my-auto p-4 gap-2 border-[1px] border-gray-300 rounded-lg"
                >
                  <div className="bg-gray-400 size-[120px] content-center text-center my-auto">
                    {project.image}
                  </div>
                  <div className="flex-col">
                    <h1 className="font-bold">{project.title}</h1>
                    <p className="max-w-52 text-sm py-2">{project.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 page - Link */}
        <div className="flex flex-col h-screen">
          <h1 className="relative top-16 m-12 text-2xl font-bold">
            {navPage[4].menu}
          </h1>
          <div className="flex-1 p-4 content-center">
            <div className="flex flex-col gap-4 p-4">
              {link.map((site, i) => (
                <div
                  key={i}
                  className="flex mx-auto p-4 w-full border border-gray-300 rounded-lg"
                >
                  <div className="h-fit mt-4">{site.image}</div>
                  <div className="flex-col p-4">
                    <h1 className="font-bold text-lg pb-2">{site.title}</h1>
                    <p className="text-md">{site.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 page - Information */}
        <div className="flex flex-col justify-center h-[calc(100vh-70px)] content-center text-center gap-y-16">
          <h1 className="text-6xl leading-tight tracking-[-0.1em]">
            저와 함께하고 싶거나,
            <br />
            더 궁금하신 점이 있다면
            <br />
            편하게 연락주세요
          </h1>
          <div className="flex flex-col mx-auto text-xl font-bold text-gray-500 gap-6">
            <div className="flex w-fit gap-4">
              <UserIcon className="h-6 w-6 text-gray-500 my-auto" />
              <h3>홍길동</h3>
            </div>
            <div className="flex w-fit gap-4">
              <EnvelopeIcon className="h-6 w-6 text-gray-500 my-auto" />
              <h3>sky1224@naver.com</h3>
            </div>
            <div className="flex w-fit gap-4">
              <PhoneIcon className="h-6 w-6 text-gray-500 my-auto" />
              <h3>010-1234-5678</h3>
            </div>
          </div>
        </div>

        {/* 7 page - About Me */}
      </div>

      {/* Footer */}
      {/* <div className="bg-gray-400 p-4">
        <div className="flex-col text-gray-100 text-sm">
          <p>footer</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            delectus tenetur atque iste quibusdam, harum officiis, autem
            deserunt, voluptate quaerat error nisi ducimus reprehenderit impedit
            dolorum nam dolores et quo!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            animi eveniet nisi velit dolorum laudantium non vitae, sapiente
            temporibus tenetur molestiae reiciendis expedita explicabo?
            Veritatis, non exercitationem! Fugit, quas harum.
          </p>
          <p>@copyright</p>
        </div>
      </div> */}
    </div>
  );
};

export default MainHome;
