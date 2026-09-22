import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">
        <div className="hero-overlay">
          <span className="hero-tag">WELCOME TO OUR SCHOOL</span>

          <h1>About Our School</h1>

          <p>
            Discover our mission, vision, values, and commitment to
            providing students with quality education and a brighter future.
          </p>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="about-intro">
        <div className="intro-content">
          <span className="section-tag">WHO WE ARE</span>

          <h2>Welcome to Our School</h2>

          <p>
            Our school is dedicated to providing quality education in a
            safe, friendly, and supportive environment. We believe that
            every student has the ability to learn, grow, and achieve
            their goals.
          </p>

          <p>
            Our experienced teachers use modern teaching methods to help
            students develop strong academic knowledge, confidence,
            creativity, and good character.
          </p>

          <div className="intro-highlights">
            <div>
              <strong>100%</strong>
              <span>Student Focused</span>
            </div>

            <div>
              <strong>Expert</strong>
              <span>Teachers</span>
            </div>

            <div>
              <strong>Modern</strong>
              <span>Education</span>
            </div>
          </div>
        </div>

        <div className="intro-box">
          <div className="intro-icon">🎓</div>
          <h3>Learning Today</h3>
          <p>
            Building confident, creative, and responsible students
            for tomorrow.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mission-section">
        <div className="section-heading">
          <span className="section-tag">OUR PURPOSE</span>
          <h2>Mission & Vision</h2>
          <p>
            We work every day to create a better learning experience
            for every student.
          </p>
        </div>

        <div className="mission-vision">

          <div className="info-card mission-card">
            <div className="card-icon">🎯</div>

            <h3>Our Mission</h3>

            <p>
              Our mission is to provide students with high-quality
              education and help them become responsible, confident,
              and successful members of society.
            </p>

            <div className="card-line"></div>
          </div>

          <div className="info-card vision-card">
            <div className="card-icon">🌟</div>

            <h3>Our Vision</h3>

            <p>
              Our vision is to create a modern learning environment
              where every student can discover their talents and
              reach their full potential.
            </p>

            <div className="card-line"></div>
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="values-section">

        <div className="section-heading">
          <span className="section-tag">WHAT WE BELIEVE</span>

          <h2>Our Core Values</h2>

          <p>
            These values guide our students and teachers every day.
          </p>
        </div>

        <div className="value-container">

          <div className="value-card">
            <div className="value-icon">📚</div>
            <h3>Excellence</h3>
            <p>
              We encourage students to always give their best and
              strive for excellence.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Respect</h3>
            <p>
              We promote respect, kindness, teamwork, and cooperation
              among everyone.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Creativity</h3>
            <p>
              We encourage students to think creatively and
              independently.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Responsibility</h3>
            <p>
              We teach students to take responsibility for their
              actions and decisions.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FACILITIES ================= */}
      <section className="facilities-section">

        <div className="section-heading">
          <span className="section-tag">CAMPUS</span>

          <h2>Our Facilities</h2>

          <p>
            We provide students with a comfortable and modern
            environment for learning and growth.
          </p>
        </div>

        <div className="facilities-grid">

          <div className="facility-card">
            <span>🏫</span>
            <h3>Modern Classrooms</h3>
            <p>
              Comfortable classrooms designed for effective learning.
            </p>
          </div>

          <div className="facility-card">
            <span>💻</span>
            <h3>Computer Labs</h3>
            <p>
              Modern computer facilities for practical learning.
            </p>
          </div>

          <div className="facility-card">
            <span>🔬</span>
            <h3>Science Labs</h3>
            <p>
              Well-equipped laboratories for scientific experiments.
            </p>
          </div>

          <div className="facility-card">
            <span>📖</span>
            <h3>Library</h3>
            <p>
              A peaceful environment with useful learning resources.
            </p>
          </div>

          <div className="facility-card">
            <span>⚽</span>
            <h3>Sports Facilities</h3>
            <p>
              Facilities that encourage students to stay active and healthy.
            </p>
          </div>

          <div className="facility-card">
            <span>👨‍🏫</span>
            <h3>Experienced Teachers</h3>
            <p>
              Qualified teachers dedicated to student success.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <h2>Ready to Join Our School?</h2>

        <p>
          Give your child the opportunity to learn, grow, and build
          a successful future.
        </p>

        <button>Apply for Admission</button>
      </section>

    </div>
  );
}

export default About;