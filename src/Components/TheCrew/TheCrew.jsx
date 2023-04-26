/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */

function TheCrew() {
  return (
    <div className="global-container">
      <div className="left-container">
        <h1 className="crew-title">The Crew.</h1>
        <span>
          The Catholic Community at Trinity participates in the sacramental life
          of church and serves actively as a partner in community building and
          interreligious dialogue to promote understanding and tolerance on
          campus.
        </span>
        <span>
          Roman Catholic Campus Ministry is sponsored by the Archdiocese of
          Hartford Campus Ministry Office and Trinity College's Office of
          Spiritual and Religious Life. It brings a vitally important dimension
          to life at Trinity College.{" "}
        </span>

        <button className="crew-button">Learn More</button>
      </div>
      <div className="right-container">
        // TODO importar las dos imagenes que se ven ahi y hacer transicion
      </div>
      //Cuadrito Overlay
      <div></div>
    </div>
  );
}

export default TheCrew;
