import "./Header.scss";
import { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { AiOutlineNumber } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { BiEnvelope } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import { FiBookmark } from "react-icons/fi";

const Banner = () => {
  const listItems = [
    {
      icon: <RiHome7Fill className="navbar__icon-comp" size={30} />,
      name: "Anasayfa",
      path: "/",
    },
    {
      icon: <AiOutlineNumber className="navbar__icon-comp" size={30} />,
      name: "Keşfet",
      path: "/",
    },
    {
      icon: (
        <IoMdNotificationsOutline className="navbar__icon-comp" size={30} />
      ),
      name: "Bildirimler",
      path: "/",
    },
    {
      icon: <BiEnvelope className="navbar__icon-comp" size={30} />,
      name: "Mesajlar",
      path: "/",
    },
    {
      icon: <FiBookmark className="navbar__icon-comp" size={30} />,
      name: "Yer İşaretleri",
      path: "/",
    },
    {
      icon: <RiFileListLine className="navbar__icon-comp" size={30} />,
      name: "Listeler",
      path: "/",
    },
    {
      icon: <HiOutlineUser className="navbar__icon-comp" size={30} />,
      name: "Profil",
      path: "/",
    },
    {
      icon: <CgMoreO className="navbar__icon-comp" size={30} />,
      name: "Daha Fazla",
      path: "/",
    },
  ];
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <div className="banner__navigation">
          <FaTwitter className="banner__logo" size={30} color="#fff" />
          
          <ul className="navbar__items">
            {listItems.map((item) => {
              return (
                <li className="navbar__item">
                  <a href={item.path} className="navbar__item-link">
                    <div className="navbar__icon">{item.icon}</div>
                    <div className="navbar__span">{item.name}</div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar__profile">
          <div className="navbar__profile-wrapper">
            <div className="navbar__profile-left">
              <img
                className="navbar__profile-pic"
                src="../../assets/pp2.png"
                alt="pic"
              />

              <div className="navbar__profile-username">
                <span className="navbar__profile-username-l1">HeyMrHope</span>
                <span className="navbar__profile-username-l2">@UmmutPal</span>
              </div>
            </div>

            <div className="navbar__profile-right">
              <HiOutlineDotsHorizontal
                className="nav__profile-dots"
                color={"#fff"}
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
