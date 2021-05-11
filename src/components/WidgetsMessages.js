import "./WidgetsMessages.scss";
import { useState } from "react";
import MessageRow from "./MessageRow";

const WidgetsMessages = () => {
  const [toggleVisible, setToggleVisible] = useState(false);

  /* when the open icon is clicked message box expands */
  const stretchBox = () => {
    setToggleVisible(!toggleVisible);
  };

  
  const [arrowPosition, setArrowPosition] = useState({
    svg: (
      <svg
        viewBox="0 0 24 24"
        class="widgets-message__open-icon"
        fill="#1da1f2"
      >
        <g>
          <path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path>
          <path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path>
        </g>
      </svg>
    ),
    situation: false,
  });

  /* when the up arrow icon is clicked it will turn into a down arrow icon*/
  const toggleSvg = () => {
    if (arrowPosition.situation) {
      setArrowPosition({
        svg: (
          <svg
            viewBox="0 0 24 24"
            class="widgets-message__open-icon"
            fill="#1da1f2"
          >
            <g>
              <path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path>
              <path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path>
            </g>
          </svg>
        ),
        situation: false,
      });
    } else {
      setArrowPosition({
        svg: (
          <svg
            viewBox="0 0 24 24"
            class="widgets-message__open-icon"
            fill="#1da1f2"
          >
            <g>
              <path d="M12 19.344l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 19.344z"></path>
              <path d="M12 11.535l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 11.535z"></path>
            </g>
          </svg>
        ),
        situation: true,
      });
    }
  };

  const persons = [
    {
      profilePic: "../../assets/hans-zimmer-pic.jpg",
      displayName: "Hans Zimmer",
      userName: "HansZimmer",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      profilePic: "../../assets/rihanna-pic.jpg",
      displayName: "Rihanna",
      userName: "rihanna",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      profilePic: "../../assets/michael-pic.jpeg",
      displayName: "Michael Jackson",
      userName: "michaeljackson",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      profilePic: "../../assets/trump-pic.jpg",
      displayName: "Donald Trump",
      userName: "donaldtrump",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      profilePic: "../../assets/tim-cook-pic.jpg",
      displayName: "Tim Cook",
      userName: "tim_cook",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      profilePic: "../../assets/lebron-king-pic.jpg",
      displayName: "LeBron James",
      userName: "KingJames",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  return (
    <div className="widgets-message">
      <div className="widgets-message__wrapper">
        <div className="widgets-message__header">
          <div className="widgets-message__header-text">Mesajlar</div>
          <div className="widgets-message__header-icons">
            <div className="widgets-message__message-icon-wrapper">
              <svg
                fill="#1da1f2"
                viewBox="0 0 24 24"
                class="widgets-message__message-icon"
              >
                <g>
                  <path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"></path>
                </g>
              </svg>
            </div>

            <div
              className="widgets-message__open-icon-wrapper"
              onClick={() => {
                stretchBox();
                toggleSvg();
              }}
            >
              {arrowPosition.svg}
            </div>
          </div>
        </div>

        <div
          className={`widgets-message__body ${
            toggleVisible ? "widgets-message__body--visible" : ""
          }`}
        >
          <div className="widgets-message__body-request">
            <div className="widgets-message__body-request-inner">
              <span className="widgets-message__body-request-text">
                Mesaj İstekleri
              </span>
              <svg
                viewBox="0 0 24 24"
                class="widgets-message__body-request-icon"
                fill="#8899A6"
              >
                <g>
                  <path d="M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"></path>
                </g>
              </svg>
            </div>
          </div>

          <div className="widgets-message__messages">
            {persons.map((person, key) => {
              return <MessageRow person={person} key={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetsMessages;
