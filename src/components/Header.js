import "./Header.scss";
import { FaTwitter } from "react-icons/fa";

import { HiOutlineDotsHorizontal } from "react-icons/hi";

import {
  HomeIcon,
  HashtagIcon,
  NotificationIcon,
  MessagesIcon,
  MarksIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/HeaderIcons";

const Banner = () => {
  const listItems = [
    {
      icon: <HomeIcon />,
      name: "Anasayfa",
      path: "/home",
    },
    {
      icon: <HashtagIcon/>,
      name: "Keşfet",
      path: "/explore",
    },
    {
      icon: (
        <NotificationIcon />
      ),
      name: "Bildirimler",
      path: "/notifications",
    },
    {
      icon: <MessagesIcon />,
      name: "Mesajlar",
      path: "/messages",
    },
    {
      icon: <MarksIcon />,
      name: "Yer İşaretleri",
      path: "/marks",
    },
    {
      icon: <ListIcon/>,
      name: "Listeler",
      path: "/lists",
    },
    {
      icon: <ProfileIcon/>,
      name: "Profil",
      path: "/profile",
    },
    {
      icon: <MoreIcon/>,
      name: "Daha Fazla",
      path: "/more",
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__navigation">
          <FaTwitter className="navbar__logo" size={30} color="#fff" />

          <ul className="navbar__items">
            {listItems.map(({icon, name, path}, key) => {
              return (
                <li className="navbar__item" key={key}>
                  <a href={path} className="navbar__item-link">
                    <div className="navbar__icon">{icon}</div>
                    <div className="navbar__span">{name}</div>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="navbar__tweet-button">
            <span className="navbar__tweet-button-inner">
              Tweetle
            </span>
          </div>
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



