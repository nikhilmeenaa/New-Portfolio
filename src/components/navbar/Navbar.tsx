"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import NinjaAnimation from "../../lotte-animations/ninjaAnimation.json";
import "./navbar.css";
import useNavbar from "./useNavbar";

const navBarRoutesData = [
  {
    label: "Coding",
    urlKey: "/",
    isActive: false,
    url: "/",
  },
  // {
  //   label: "About",
  //   urlKey: "/about",
  //   isActive: false,
  //   url: "/about",
  // },
  // {
  //   label: "Blogs",
  //   urlKey: "/blogs",
  //   isActive: false,
  //   url: "/blogs",
  // },
];

const Navbar = () => {
  const { handleRouteClick, checkIfRouteIsActive } = useNavbar();
  return (
    <div className="navbarContainer">
      <div className="logoSection">
        <Player
          autoplay={true}
          src={NinjaAnimation}
          className="ninjaAnimation"
          loop={true}
        />
      </div>
      <div className="routesSection">
        {navBarRoutesData.map((data, index) => {
          return (
            <div
              className={
                checkIfRouteIsActive(data.urlKey)
                  ? "activeRoutesInstance"
                  : "routesInstance"
              }
              onClick={() => handleRouteClick(data.url)}
              key={"routesInstance" + index}
            >
              <span className="routesInstanceText">{data.label}</span>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
