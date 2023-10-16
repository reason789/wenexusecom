import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import HangedButton from "../HangedButton";
import { PiDotsNineBold } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import IconButton from "../IconButton";
import GeneralButton from "../GeneralButton";

const Navbar = () => {
  return (
    <nav>
      <div className="Navbar_container">
        <Link to="/">
          <div className="Navbar_logo">
            <img src={logo} height="33px" width="33px" />
            <p>
              Eco<span>Sell</span>
            </p>
          </div>
        </Link>
        <div className="Navbar_middleLayout">
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
        </div>
        <div className="Navbar_lastlayout">
          <HangedButton />
          <div className="Navbar_popupRelative">
            <IconButton Icon={PiDotsNineBold} />
            <div className="Navbar_popup">
              <div>
                <div class="Navbar_flex">
                  <GeneralButton
                    name="Login"
                    bgColor="#dbecff"
                    color="#40a0f4"
                  />
                  <GeneralButton
                    name="Signup"
                    bgColor="#ffebd4"
                    color="#ffa64b"
                  />
                </div>
                <div className="Navbar_googleFlex">
                  <FcGoogle size="30px" />
                  <p>Sign in with google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
