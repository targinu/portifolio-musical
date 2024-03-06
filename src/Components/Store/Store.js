import "./Store.css";

function Store({beatStoreLink}) {
  return (
    <div class="store">
      <iframe
        title="FrozenShade Beat Store"
        src="https://player.beatstars.com/?storeId=100389"
        width="100%"
        height="800"
        style={{ maxWidth: "1600px" }}
      ></iframe>{" "}
    </div>
  );
}

export default Store;
