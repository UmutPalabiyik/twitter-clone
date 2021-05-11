import "./MessageRow.scss";

const MessageRow = (props) => {
  const { profilePic, displayName, userName, message } = props.person;

  console.log(profilePic)
  return (
    <div className="message-row">
      <div className="message-row__inner">

        <div className="message-row__img">
            <img className="message-row__img-content" src={profilePic} alt="" />
        </div>

        <div className="message-row__infos-wrapper">
          <div className="message-row__names">
            <span className="message-row__display-name">{displayName}</span>
            <span className="message-row__user-name">@{userName}</span>
          </div>
          <div className="message-row__message-self">{message}</div>
        </div>

      </div>
    </div>
  );
};

export default MessageRow;
