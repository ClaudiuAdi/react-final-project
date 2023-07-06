import React from "react";
import Icon from "../Icon";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const socialIcons = [
  { logo: FacebookLogo, link: "https://www.facebook.com/chesscoders" },
  {
    logo: InstagramLogo,
    link: "https://instagram.com/chesscoders?igshid=MTIzZWMxMTBkOA==",
  },
  {
    logo: LinkedinLogo,
    link: "https://www.linkedin.com/company/chesscoders/",
  },
];

function FooterSocials(props) {
  return (
    <div className={props.className}>
      {socialIcons.map((social, index) => (
        <a href={social.link} key={index} target="_blank">
          <Icon icon={social.logo} weight="thin" />
        </a>
      ))}
    </div>
  );
}

export default FooterSocials;
