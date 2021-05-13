import "./WidgetsNav.scss";

const WidgetsNav = () => {
  const navbarItems = [
    {
      text: "Hizmet Şartları",
      link: "https://twitter.com/en/tos",
    },
    {
      text: "Gizlilik Şartları",
      link: "https://twitter.com/en/privacy",
    },
    {
      text: "Çerez Politikası",
      link: "https://help.twitter.com/tr/rules-and-policies/twitter-cookies",
    },
    {
      text: "Reklam Bilgisi",
      link:
        "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html",
    },
    {
      text: "Daha Fazla...",
      link: "/",
    },
  ];
  return (
    <div className="widgets-nav">
      <ul className="widgets-nav__list">
        {navbarItems.map((item) => {
          return (
            <li className="widgets-nav__list-item">
              <a className="widgets-nav__list-item-link" href={item.link}>
                {item.text}
              </a>
            </li>
          );
        })}
        <li className="widgets-nav__list-item">
          <span className="widgets-nav__list-item-link  widgets-nav__list-item-link--copyright" href="#">© 2021 Twitter, Inc.</span>
        </li>
      </ul>
    </div>
  );
};

export default WidgetsNav;
