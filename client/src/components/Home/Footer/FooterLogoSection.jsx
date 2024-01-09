import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../../../assets/logo.svg";
import Playstore from "../../../assets/playstore.png";
import Appstore from "../../../assets/appstore.png";

function FooterLogoSection() {
  return (
    <div className="flex flex-col gap-4">
      <img src={Logo} className="w-[200px]" />
      <div>
        <p className="text-sm py-1">Connect with us</p>
        <ul className="flex gap-1">
          <Icon icon="la:facebook" fontSize={20} />
          <Icon icon="la:twitter" fontSize={20} />
          <Icon icon="la:linkedin" fontSize={20} />
          <Icon icon="la:github" fontSize={20} />
        </ul>
      </div>
      <div>
        <p className="text-sm py-2">Download StreamVid mobile application</p>
        <div className="flex gap-4">
          <a href="#">
            <img src={Appstore} className="rounded-md inline-block w-[120px]" />
          </a>
          <a href="#">
            <img
              src={Playstore}
              className="rounded-md inline-block w-[120px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterLogoSection;
