import "./SuggestionProfile.scss";

const SuggestionProfile = (props) => {

  const { userName, displayName, url } = props.profile;

  
  return (
    <div className="suggestion-profile">
      <div className="suggestion-profile__wrapper">
        <div className="suggestion-profile__infos">
          <div className="suggestion-profile__img">
              <img className="suggestion-profile__img-content" src={url} alt="" />
          </div>

          <div className="suggestion-profile__names">
            <div className="suggestion-profile__display-name">
              <span className="suggestion-profile__display-name-text">{displayName}</span>
            </div>

            <div className="suggestion-profile__user-name">
              <span className="suggestion-profile__user-name-text">@{userName}</span>
            </div>
          </div>
        </div>

        <div className="suggestion-profile__follow-button">
          <span className="suggestion-profile__follow-button-span">
            Takip et
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionProfile;
