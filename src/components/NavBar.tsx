import Motion from "../utils/Motion"


const NavBar = () => {
  return (
    <div className="">

      {/* For Desktops */}
      <header className="text-white h-12 text-lg font-Syne select-none fixed w-full bg-[#090909] z-[999999] hidden lg:block">
        <div className="flex items-center h-full px-10">
          <div>
            <div>
              <a href="">
                <h1 className="font-bold float-left ">Data Science Club</h1>
              </a>
            </div>
          </div>
          <div className="bg-rose-900 absolute left-1/2 -translate-x-1/2 uppercase text-base px-10 font-Audiowide font-bold h-full flex items-center saturate-200 cursor-pointer  navigation__title">
            <div>
              <h1>- welcome to dataverse -</h1>
            </div>
          </div>
          {/* <div>
            <div>
              <nav>
                <ul className="flex gap-6 font-bold text-base">
                  <li><a href="">About</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div> */}
        </div>
      </header>

      {/* For Mobile and Tabs */}
      <header className="lg:hidden select-none  z-[999999] fixed w-full text-zinc-300 bg-[#090909] h-12 font-Inter font-bold flex items-center px-5">
        <div>
          <h1>DSC</h1>
        </div>
        <div className="md:hidden"></div>
        <div className="navigation__title bg-rose-900 text-center flex justify-center items-center absolute left-1/2 -translate-x-1/2 saturate-200 text-sm px-8 h-full">
          <h1>Welcome to <br /> Dataverse</h1>
        </div>
      </header>
      <Motion />
    </div>
  )
}

export default NavBar