export default function Project() {
  return (
    <div>
      <section id="project">
        <div className="project-container">
          <div className="project-head">
            <h1>Projects</h1>
            <p>Most recent work</p>
          </div>
          <div className="project-content">
            <div className="box">
              <img src="img/webDesign.png" alt="img" />
              <div className="layer">
                <h3>User authentication</h3>
                <a href="2">
                  Demo <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="box">
              <img src="img/travelApp.jpg" alt="img" />
              <div className="layer">
                <h3>Travel App</h3>
                <a href="2">
                  Demo <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
