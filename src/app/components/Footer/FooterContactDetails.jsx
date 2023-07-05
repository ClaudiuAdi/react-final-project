import React from "react";

function FooterContactDetails(props) {
  return (
    <div className={props.className}>
      <a href="https://chesscoders.com/" target="_blank">
        chesscoders.com
      </a>
      <a href="mailto: office@chesscoders.com">office@chesscoders.com</a>
      <a href="tel:+(40)742-049-501">+(40)742-049-501</a>
    </div>
  );
}

export default FooterContactDetails;
