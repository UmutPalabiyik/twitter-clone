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
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <div className="banner__navigation">
          <FaTwitter className="banner__logo" size={30} color="#fff" />
          <ul className="navbar__items">
            <li className="navbar__item">
              <a href="/" className="navbar__item-link">
                <div className="navbar__icon">
                  <RiHome7Fill className="navbar__icon-comp" size={30} />
                </div>
                <div className="navbar__span">Anasayfa</div>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__item-link">
                <div className="navbar__icon">
                  <AiOutlineNumber className="navbar__icon-comp" size={30} />
                </div>
                <div className="navbar__span">Keşfet</div>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__item-link">
                <div className="navbar__icon">
                  <IoMdNotificationsOutline
                    className="navbar__icon-comp"
                    size={30}
                  />
                </div>
                <div className="navbar__span">Bildirimler</div>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__item-link">
                <div className="navbar__icon">
                  <BiEnvelope className="navbar__icon-comp" size={30} />
                </div>
                <div className="navbar__span">Mesajlar</div>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__item-link">
                <div className="navbar__icon">
                  <FiBookmark className="navbar__icon-comp" size={30} />
                </div>
                <div className="navbar__span">Yer İşaretleri</div>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__item-link">
                <div className="navbar__icon">
                  <RiFileListLine className="navbar__icon-comp" size={30} />
                </div>
                <div className="navbar__span">Listeler</div>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__item-link">
                <div className="navbar__icon">
                  <HiOutlineUser className="navbar__icon-comp" size={30} />
                </div>
                <div className="navbar__span">Profil</div>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__item-link">
                <div className="navbar__icon">
                  <CgMoreO className="navbar__icon-comp" size={30} />
                </div>
                <div className="navbar__span">Daha Fazla</div>
              </a>
            </li>
            <li className="navbar__item navbar__button">
              <a href="/" className="navbar__tweet-button">
                Tweetle
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar__profile">
          <div className="navbar__profile-wrapper">
            <div className="navbar__profile-left">
              <img
                className="navbar__profile-pic"
                src="../../assets/profile-pic.jpg"
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
