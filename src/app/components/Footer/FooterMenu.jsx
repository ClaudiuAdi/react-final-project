import React from "react";
import styles from "./FooterMenu.module.css";
import { Circle } from "@phosphor-icons/react";
import Icon from "../Icon";

const footerMenuLinks = [
  {
    title: "About us",
    link: "https://www.youtube.com/watch?v=QNJL6nfu__Q&ab_channel=michaeljacksonVEVO",
  },
  {
    title: "Gallery",
    link: "https://www.youtube.com/watch?v=4uvI2DSCgU0&ab_channel=Gallery-Topic",
  },
  {
    title: "Support",
    link: "https://www.youtube.com/watch?v=T9baU4o-qVw&ab_channel=CevaM%C4%83runt",
  },
  {
    title: "Terms & Conditions",
    link: "https://www.youtube.com/watch?v=PzLJ3a3-kBs&ab_channel=Mahalia",
  },
  {
    title: "Privacy Policy",
    link: "https://www.youtube.com/watch?v=aqd0_nnLRWo&ab_channel=DJMag",
  },
];

function FooterMenu(props) {
  return (
    <div className={props.className}>
      <span className={styles["footer-bar"]}></span>
      <div className={styles["footer-menu"]}>
        {footerMenuLinks.map((link, index) => {
          return (
            <>
              <a key={index} href={link.link} target="_blank">
                {link.title}
              </a>
              {link.title !== "Privacy Policy" && (
                <Icon
                  icon={Circle}
                  weight="fill"
                  className={styles["footer-menu-container-circle"]}
                />
              )}
            </>
          );
        })}
      </div>
      <span className={styles["footer-bar"]}></span>
    </div>
  );
}

export default FooterMenu;
