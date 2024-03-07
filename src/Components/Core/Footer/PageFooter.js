import { Content, Footer, Column, Button, Icon } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faSoundcloud,
  faTiktok,
  faTwitch,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import "./PageFooter.css";

function PageFooter() {
  return (
    <div class="footer">
      <Footer>
        <Content textAlign="centered">
          <Column.Group multiline centered>
            <Column></Column>
            <Column>
              <div>
                <h1 class="footer-title" style={{ color: "white" }}>
                  FrozenShade
                </h1>
                <p class="footer-text">2024, all rights reserved.</p>
              </div>
            </Column>

            <Column>
              <div class="second-col">
                <p class="footer-text">
                  {" "}
                  <a href="#" class="footer-text">
                    Home
                  </a>{" "}
                </p>
                <p class="footer-text">
                  <a
                    href="https://www.beatstars.com/targinu/tracks"
                    class="footer-text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Beats
                  </a>
                </p>
              </div>
            </Column>
            <Column>
              <Button.Group>
                <Button rounded>
                  <a
                    href="https://www.youtube.com/channel/UCRWRFsuyHeex9TcwK3us49A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size="small">
                      <FontAwesomeIcon icon={faYoutube} />
                    </Icon>
                  </a>
                </Button>

                <Button rounded>
                  <a
                    href="https://www.instagram.com/targinu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size="small">
                      <FontAwesomeIcon icon={faInstagram} />
                    </Icon>
                  </a>
                </Button>

                <Button rounded>
                  <a
                    href="https://soundcloud.com/prodbyfrozenshade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size="small">
                      <FontAwesomeIcon icon={faSoundcloud} />
                    </Icon>
                  </a>
                </Button>

                <Button rounded>
                <a
                    href="https://open.spotify.com/intl-pt/artist/7vXe1N3OyRMflXjysagS2H"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <Icon size="small">
                    <FontAwesomeIcon icon={faSpotify} />
                  </Icon>
                  </a>
                </Button>

                <Button rounded>
                <a
                    href="https://www.tiktok.com/@targinu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <Icon size="small">
                    <FontAwesomeIcon icon={faTiktok} />
                  </Icon>
                  </a>
                </Button>

                <Button rounded>
                <a
                    href="https://www.twitch.tv/targinu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <Icon size="small">
                    <FontAwesomeIcon icon={faTwitch} />
                  </Icon>
                  </a>
                </Button>
              </Button.Group>
            </Column>

            <Column></Column>
          </Column.Group>
        </Content>
      </Footer>
    </div>
  );
}

export default PageFooter;
