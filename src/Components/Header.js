import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames"

function Header() {
  // const history = useHistory();
  const pathname = window.location.pathname;

  // const [tagbutton , setTagbutton] = React.useState(null);
  // const handleOnclicked = React.useCallback((id) => {
  //     const tag = id.target.id;
  //     setTagbutton(tag);
  //     history.push(`/${tag}`);
  //     console.log(tag);
  // },[history])

  return (
    <div>
     
          <div className="nav">
            <li className={cn({ active: pathname === '/' })}>
              <Link to="/" style={{textDecoration: "none"}}>
                <i className="i-home"></i>
                <span style={{ color: pathname === "/" ? "#d4af37" : "black"}}>หน้าหลัก</span>
              </Link>
            </li>

            <li className={cn({ active: pathname === '/Check' })}>
              <Link to="/Check" style={{textDecoration: "none"}}>
                <i className="i-check"></i>
                <span style={{ color: pathname === "/Check" ? "#d4af37" : "black"}}>ตรวจลอตเตอรี่</span>
              </Link>
            </li>

            <li className={cn({ active: pathname === '/Contact' })}>
              <Link to="/Contact" style={{textDecoration: "none"}}>
                <i className="i-contact"></i>
                <span style={{ color: pathname === "/Contact" ? "#d4af37" : "black"}}>ติดต่อเรา</span>
              </Link>
            </li>
          </div>
      
      <div className="head">
        <Link to="/">
          <img
            src="https://xn--12car4jyaq2b.com/img/logo.svg"
            width="180"
            height="22"
            alt="โลโก้ กองสลาก"
            id="logo"
          ></img>
        </Link>
        <a href="https://www.trustmarkthai.com/callbackData/popup.php?data=0-15-5-c117cb9f4eaae166184ddabee068a5db2964b09be5a2&markID=firstmar">
          <img
            src="https://xn--12car4jyaq2b.com/img/dbd.png"
            width="77"
            height="30"
            alt="dbd"
            id="DBD"
          ></img>
        </a>
        <a href="https://www.facebook.com/kongsalakofficial">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="fb"
          >
            <path
              d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.791-4.668 4.533-4.668 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z"
              fill="#0A7CFF"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Header;
