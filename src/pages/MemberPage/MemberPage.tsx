import "./MemberPage.styles.css";
import planets from "../../../data/planets/planets.json";

function MemberPage() {
  const path = window.location.pathname;
  const num = path.split("/");
  const id = parseInt(num[2]);
  return (
    <div className="card-m">
      <div className="card col-12 col-md-8">
        <h5 className="card-header">{planets[id].name}</h5>
        <div className="d-flex">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div>
            <div className="card crd m-3">
              <img
                src={planets[id].image}
                className="card-img-top"
                alt={planets[id].name}
              />
              <div className="card-body">
                <h5 className="card-title">Demographic</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Full Name: {planets[id].fullName}
                  </li>
                  <li className="list-group-item">
                    Population: {planets[id].population}
                  </li>
                  <li className="list-group-item">
                    Density: {planets[id].density || "N/A"} /km²
                  </li>
                  <li className="list-group-item">
                    {planets[id].type}: {planets[id].researchStates}
                  </li>
                  <li className="list-group-item">
                    Space Stations: {planets[id].spaceStations || "none"}
                  </li>
                  <li className="list-group-item">
                    HQ: {planets[id].HQ || "N/A"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberPage;
