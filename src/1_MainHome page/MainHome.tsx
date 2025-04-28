const MainHome = () => {
  return (
    /* Main Home page */
    <div>
      {/* Nav Bar */}
      <div className="flex justify-between items-center top-0 w-full h-[70px] px-12 bg-gray-100 shadow-md backdrop-blur-sm fixed z-50">
        <p className="text-2xl font-bold">LOGO</p>
        <div className="flex space-x-8 text-l font-bold">
          <p>Home</p>
          <p>About Me</p>
          <p>Project</p>
        </div>
      </div>

      {/* Contents */}
      <div className="flex-col mt-[70px] min-h-screen p-4 bg-gray-500">
        {/* Thumnail - sample : 소개글 */}
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
      </div>

      {/* Footer */}
      <div className="flex-col items-center w-full px-12 py-4 bg-gray-300 text-gray-500 text-sm">
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
