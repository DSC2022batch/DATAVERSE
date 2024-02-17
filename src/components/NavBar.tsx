import Motion from "../utils/Motion"


const NavBar = () => {
  return (
    <div className="">

      {/* For Desktops */}
      <header className="text-white h-12 text-lg font-Syne select-none fixed w-full bg-[#090909] z-[999999]">
        <div className="flex justify-between items-center h-full px-10">
          <div>
            <div>
              <a href="">
                <h1 className="font-bold">Data Science Club</h1>
              </a>
            </div>
          </div>
          <div className="bg-rose-900 uppercase text-base px-10 font-Audiowide font-bold h-full flex items-center saturate-200 cursor-pointer  navigation__title">
            <div>
              <h1>- welcome to dataverse -</h1>
            </div>
          </div>
          <div>
            <div>
              <nav>
                <ul className="flex gap-6 text-base">
                  <li><a href="">About</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <Motion/>
    </div>
  )
}

export default NavBar