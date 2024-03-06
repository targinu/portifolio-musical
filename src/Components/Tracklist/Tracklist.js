import Frame from "../Frame/Frame";
import { Column, Title } from "rbx";
import "./Tracklist.css";

function Tracklist() {
  return (
    <div class="body">
      <Column.Group centered>
        <Column size="half">
          <h1 class="track-list" style={{ color: "white" }}>
            Track List
          </h1>
        </Column>
      </Column.Group>

      <div class="cards">
        <Column.Group multiline centered>
          {[
            <Frame
              class="titulo"
              title="Asian Rock x Pluggnb Type Beat"
              listenLink="https://player.beatstars.com/?storeId=146325"
              imageUrl="https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzE3Nzc4OTc3LzY1ZTRkOWZiNTliYzAxM2UzMDMxYWRmMjQ0NjU4MGEyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0=?t=1708447915593"
            />,
            <Frame
              class="titulo"
              title="Dark Plug x Evil Plug Type Beat"
              listenLink="https://player.beatstars.com/?storeId=146326"
              imageUrl="https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzE3ODM4NTkxL2NhcGFiZWF0c3RhcnMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH0sInRvRm9ybWF0Ijoid2VicCJ9fQ==?t=1708907225339"
            />,
            <Frame
              class="titulo"
              title="Glo Type Beat"
              listenLink="https://player.beatstars.com/?storeId=146327"
              imageUrl="https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzE3ODI0NDQwL2NhcGEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH0sInRvRm9ybWF0Ijoid2VicCJ9fQ==?t=1708825177340"
            />,
            <Frame
              class="titulo"
              title="Hyperpop Type Beat"
              listenLink="https://player.beatstars.com/?storeId=146328"
              imageUrl="https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzg3OTUzMDAvMDFlZWQzMTVkYjY1OTYzYzFlMDAzZjQ5Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoyNDAsImhlaWdodCI6MjQwfSwidG9Gb3JtYXQiOiJ3ZWJwIn19?t=1636105960488"
            />,
            <Frame
              class="titulo"
              title="New Jazz Type Beat"
              listenLink="https://player.beatstars.com/?storeId=146329"
              imageUrl="https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzE3ODU5MjY1LzZjODc4ZjA3YzhlMWU4NGYyMTU4MDZjYWQ3ZTVhOGE0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0=?t=1709077233853"
            />,
            <Frame
              class="titulo"
              title="Supertrap x Rage Type Beat"
              listenLink="https://player.beatstars.com/?storeId=146330"
              imageUrl="https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzE3ODQ5NjUzL2IxNzBkYmZkOTVlMjAyODEzMTYyOGFiOTk4MjJjYmM1LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0=?t=1708998078003"
            />,
          ].map((i) => (
            <Column key={i} size="one-third">
              {i}
            </Column>
          ))}
        </Column.Group>
      </div>
    </div>
  );
}

export default Tracklist;
