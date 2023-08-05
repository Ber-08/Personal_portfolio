export default function Home() {
  function handleMouseMove(e) {
    const btn = e.currentTarget;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  }

  return (
    <div>
      <section id="home">
        <div className="home-content">
          <h3>Hello, I am</h3>
          <h1>BERYL TRYPHENA</h1>
          <p>I am a Full Stack Developer adept in working in both front-end and back-end development processes. </p>
          <div className="socialmedia">
            <a href="#linkedin">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#github">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="/CV/BERYl-TRYPHENA.pdf" className="btn" onMouseMoveCapture={handleMouseMove} download>
            <span> Download CV</span>
          </a>
        </div>
        <div className="home-image">
          <img src="img/home.png" alt="home-img" />
        </div>
      </section>
    </div>
  );
}
