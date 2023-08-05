export default function About() {
  return (
    <div>
      <section id="about">
        <div className="about-heading">
          <h3>About me</h3>
        </div>
        <div className="about-container">
          <img src="img/home.png" alt="about-img" />

          <div className="about-content">
            <div className="about-box">
              <div className="box">
                <i class="fa-solid fa-award"></i>
                <h5>Experience</h5>
                <p>fresher</p>
              </div>
              <div className="box">
                <i class="fa-solid fa-briefcase"></i>
                <h5>Completed</h5>
                <p>3 projects</p>
              </div>
              <div className="box">
                <i class="fa-solid fa-headphones"></i>
                <h5>Support</h5>
                <p>Online 24/7</p>
              </div>
            </div>
            <p className="about-text">
              Full stack web developer, As a fresher in the industry, I am excited to embark on a journey to create
              intuitive and dynamic web applications that make a positive impact on users' lives. My goal is to work in
              a collaborative and dynamic environment that fosters growth and encourages innovation.
            </p>
            <a href="2" className="hire-btn">
              Hire me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
