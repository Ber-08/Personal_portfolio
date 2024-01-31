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
              <img src="img/ecom.jpg" alt="img" />
              <div className="layer">
                <h3>E-Commerce</h3>
                <a href="https://phlox.pages.dev/">
                  Demo <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="box">
              <img src="img/blogpost1.jpg" alt="img" />
              <div className="layer">
                <h3>Blog-App</h3>
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
