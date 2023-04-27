import "./TheCrew.css";

function TheCrew() {
  return (
    <div className="crew-container">
      <div className="global-container">
        <div className="left-container">
          <h1 className="crew-title">
            <span className="the ">The</span>
            <span className=" crew"> crew.</span>
          </h1>
          <span className="crew-description">
            The Catholic Community at Trinity participates in the sacramental
            life of church and serves actively as a partner in community
            building and interreligious dialogue to promote understanding and
            tolerance on campus.
          </span>
          <span className="crew-description">
            Roman Catholic Campus Ministry is sponsored by the Archdiocese of
            Hartford Campus Ministry Office and Trinity College's Office of
            Spiritual and Religious Life. It brings a vitally important
            dimension to life at Trinity College.{" "}
          </span>

          <button className="crew-button">Learn More</button>
        </div>
        <div className="image-container">
          <img
            src="/src/assetssrc/eventpic1.jpg"
            alt="pic1"
            className="pic-class"
          />
          <img
            src="/src/assetssrc/eventpic2.jpg"
            alt="pic2"
            className="pic-class"
          />
        </div>

        <div className="box-container">
          <div className="box1">
            <img src="assets/smileface.svg" alt="smileface" />
            <span className="number-box">165</span>
            <span className="box-description">Happy freshman members</span>
          </div>

          <div className="box2">
            <img src="assets/duo.svg" alt="duo" />
            <span className="number-box">13</span>
            <span className="box-description">Wise Senior members</span>
          </div>

          <div className="box3">
            <img src="assets/group.svg" alt="group" />
            <span className="number-box">173</span>
            <span className="box-description">The whole crew</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheCrew;
