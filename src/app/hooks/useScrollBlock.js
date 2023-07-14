// Cool little custom-hook to stop scrolling from https://gist.github.com/reecelucas/2f510e6b8504008deaaa52732202d2da

import { useRef } from "react";

const safeDocument = typeof document !== "undefined" ? document : {};

const useScrollBlock = () => {
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue("padding-right")
      ) || 0;

    html.style.position = "relative";
    html.style.overflow = "hidden";
    body.style.position = "relative";
    body.style.overflow = "hidden";
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};

export { useScrollBlock };
