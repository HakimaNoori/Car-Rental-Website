import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const NavLinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "CARS",
    link: "/#cars",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/#booking",
  },
];

const Navbar = ({theme, setTheme}) => {
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold font-serif">Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul
              className="flex items-center gap-8
              "
            >
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl "
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
