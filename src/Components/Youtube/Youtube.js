import { Content, Button, Icon } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./Youtube.css";

function Youtube() {
  return (
    <Content>
      <div class="yt-body">
        <div class="yt-col1">
          <img
            class="yt-pfp"
            alt="youtube profile"
            src="https://yt3.googleusercontent.com/Lii1WTzxXINEDJVlYOkZCBrqe76cXTpmHdxN8vDkH8mhIzqMJNLJ3HBvrpuleNsiBslURVnQ=s176-c-k-c0x00ffffff-no-rj"
          ></img>
          <div class="yt-col1-texts">
            <h1 style={{ color: "white" }}>FrozenShade</h1>
            <Button>
              <Icon>
                <FontAwesomeIcon icon={faYoutube} />
              </Icon>
              <span>
                <a
                  style={{color: "black"}}
                  href="https://www.youtube.com/channel/UCRWRFsuyHeex9TcwK3us49A?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SUBSCRIBE
                </a>
              </span>
            </Button>
          </div>
        </div>
        <div class="yt-col2">
          <iframe
            width="50%"
            height="100%"
            src="https://www.youtube.com/embed/vTzDkKCzRUY?si=TZNw2jzrF-RbOK0-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Content>
  );
}

export default Youtube;
