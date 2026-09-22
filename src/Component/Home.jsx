import Navbar from "./Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      <Navbar />

      <section className="home-hero">

        <div className="home-content">

          <div className="welcome-badge">
            🎓 Welcome to Our School
          </div>

          <h1>
            Student Admission
            <span> Portal</span>
          </h1>

          <p>
            Start your educational journey with us.
            Apply for school admission online quickly,
            easily, and securely.
          </p>

          <div className="home-buttons">
            <a href="/apply" className="apply-btn">
              Apply Now →
            </a>

            <a href="/about" className="learn-btn">
              Learn More
            </a>
          </div>

        </div>

        <div className="home-image">

          <div className="circle-bg"></div>

          <div className="school-card">
            <div className="school-icon">
              🎓
            </div>

            <h3>Quality Education</h3>

            <p>
              Learn • Grow • Succeed
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;