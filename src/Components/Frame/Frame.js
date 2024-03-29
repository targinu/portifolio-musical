import { Content, Box, Media, Image } from "rbx";
import "./Frame.css";

function Frame({ title, listenLink, imageUrl }) {
  return (
    <Content>
      <a href={listenLink} target="_blank" rel="noopener noreferrer">
        <Box>
          <Media class="titulo-container">
            <Media.Item align="left">
              <Image.Container size={128}>
                <Image alt="Image" src={imageUrl} />
              </Image.Container>
            </Media.Item>
            <Media.Item>
              <Content>
                <p class="titulo">
                  <strong class="titulo">
                    <a
                      href={listenLink}
                      class="titulo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {title}
                    </a>
                  </strong>
                </p>
              </Content>
            </Media.Item>
          </Media>
        </Box>
      </a>
    </Content>
  );
}

export default Frame;
