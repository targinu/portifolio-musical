import { Content, Navbar, Button, Image } from "rbx";
import "./Header.css";


function Header() {
  return (
    <Content>
      <Navbar color={"black"} transparent>
        <Navbar.Brand>
          <Navbar.Item href="#">
            <image
              class="logo"
              alt="Logo"
              role="presentation"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item>Home</Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Navbar.Item>
              <Button.Group>
                <Button color="primary">
                  <strong> <a class="link" href="https://www.beatstars.com/targinu">Check my profile</a></strong>
                </Button>
                <Button color="danger">
                <strong> <a class="link" href="https://player.beatstars.com/?storeId=100389">General Beat Store</a></strong>
                  </Button>
              </Button.Group>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </Content>
  );
}

export default Header;
