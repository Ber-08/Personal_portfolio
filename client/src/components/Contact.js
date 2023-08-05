import { InputFields } from "./inputFields";

export default function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-head">
            <h1>Contact</h1>
            <p>Get in touch</p>
          </div>
          <div className="contact-content">
            <div className="side-content">
              <div className="box">
                <i class="fa-solid fa-envelope"></i>
                <h3>Email</h3>
                <p>bezytryphena@gmail.com</p>
                <a href="#2">
                  Write me <i class="fa-solid fa-arrow-right "></i>
                </a>
              </div>
              <div className="box">
                <i class="fa-brands fa-whatsapp"></i>
                <h3>Whatsapp</h3>
                <p>8526819192</p>
                <a href="#2">
                  Write me <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="box">
                <i class="fa-solid fa-location-dot"></i>
                <h3>Address</h3>
                <p>Coimbatore</p>
                <a href="#2">
                  Write me <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <form className="form-container">
              <InputFields
                name="Name"
                className="input_container"
                type="text"
                placholder="Enter name"
              />
              <InputFields
                name="E-mail"
                className="input_container"
                type="email"
                placholder="Enter email"
              />
              <InputFields
                name="comments"
                className="input_container"
                type="text"
                placholder="Enter text"
                field="textarea"
              />

              <input type="submit" value="Submit" className="submit_btn" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
