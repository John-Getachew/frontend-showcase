import "./style.css";
const Planets = () => {
  return (
    <div className="wrapper">
      <div className="planet planetEarth">
        <h2>Earth</h2>
        <div className="container">
          <div className="loader">
            <span></span>
          </div>
          <div className="earth"></div>
        </div>
      </div>

      <div className="planet planetMars">
        <h2>Mars</h2>
        <div className="container">
          <div className="loader">
            <span></span>
          </div>
          <div className="mars"></div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
