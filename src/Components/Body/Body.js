import { Content } from "rbx";
import Store from "../Store/Store";
import Tracklist from "../Tracklist/Tracklist";
import Youtube from "../Youtube/Youtube";

function Body() {
  return (
    <Content>
      <Store></Store>
      <Tracklist></Tracklist>
      <Youtube></Youtube>
    </Content>
  );
}

export default Body;
