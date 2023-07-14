import React, { Fragment } from "react";
import styles from "./FooterMenu.module.css";
import { Circle } from "@phosphor-icons/react";
import Icon from "../Icon";

const footerMenuLinks = [
  {
    title: "About us",
    link: "https://chesscoders.com/",
  },
  {
    title: "Gallery",
    link: "https://chesscoders.com/",
  },
  {
    title: "Support",
    link: "https://chesscoders.com/",
  },
  {
    title: "Terms & Conditions",
    link: "https://chesscoders.com/",
  },
  {
    title: "Privacy Policy",
    link: "https://chesscoders.com/",
  },
];

function FooterMenu(props) {
  return (
    <div className={props.className}>
      <span className={styles["footer-bar"]}></span>
      <div className={styles["footer-menu"]}>
        {footerMenuLinks.map((link, index) => {
          return (
            <Fragment key={index}>
              <a href={link.link} target="_blank">
                {link.title}
              </a>
              {link.title !== "Privacy Policy" && (
                <Icon
                  icon={Circle}
                  weight="fill"
                  className={styles["footer-menu-container-circle"]}
                />
              )}
            </Fragment>
          );
        })}
      </div>
      <span className={styles["footer-bar"]}></span>
    </div>
  );
}

export default FooterMenu;
