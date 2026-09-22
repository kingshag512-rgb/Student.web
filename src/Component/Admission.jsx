
import './Admission.css'
function Admission() {
  return (
    <div className="admission-page">

      {/* Header */}
      <section className="admission-header">
        <h1>Student Admissions</h1>

        <p>
          Start your educational journey with us.
          Apply for admission today.
        </p>

        <button>Apply Now</button>
      </section>

      {/* Admission Information */}
      <section className="admission-info">
        <h2>Admission Information</h2>

        <p>
          Admissions are open for the new academic session.
          We welcome students who are ready to learn, grow, and
          achieve their goals.
        </p>

        <div className="admission-cards">

          <div className="admission-card">
            <h3>📅 Admission Session</h3>
            <p>2026 - 2027</p>
          </div>

          <div className="admission-card">
            <h3>🎓 Classes</h3>
            <p>Playgroup to Grade 10</p>
          </div>

          <div className="admission-card">
            <h3>📝 Application</h3>
            <p>Online Admission Available</p>
          </div>

        </div>
      </section>

      {/* Eligibility */}
      <section className="eligibility">
        <h2>Eligibility Criteria</h2>

        <ul>
          <li>Student must meet the required age criteria.</li>
          <li>Previous academic record should be submitted.</li>
          <li>Student must complete the admission application.</li>
          <li>Required documents must be provided.</li>
          <li>Admission test/interview may be required.</li>
        </ul>
      </section>

      {/* Required Documents */}
      <section className="documents">
        <h2>Required Documents</h2>

        <div className="document-list">

          <div className="document-card">
            <h3>📄 Birth Certificate</h3>
            <p>Copy of student's birth certificate.</p>
          </div>

          <div className="document-card">
            <h3>📷 Passport Size Photos</h3>
            <p>Recent passport-size photographs.</p>
          </div>

          <div className="document-card">
            <h3>📚 Previous School Record</h3>
            <p>Previous school report card or certificate.</p>
          </div>

          <div className="document-card">
            <h3>🪪 Parent/Guardian ID</h3>
            <p>Copy of parent or guardian identification.</p>
          </div>

        </div>
      </section>

      {/* Admission Process */}
      <section className="admission-process">
        <h2>Admission Process</h2>

        <div className="process-container">

          <div className="process-card">
            <span>01</span>
            <h3>Apply Online</h3>
            <p>
              Fill out the online admission application form.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Submit Documents</h3>
            <p>
              Upload all required student documents.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Assessment</h3>
            <p>
              Student may be invited for a test or interview.
            </p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Admission Confirmation</h3>
            <p>
              Successful applicants will receive confirmation.
            </p>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="apply-section">
        <h2>Ready to Apply?</h2>

        <p>
          Take the first step towards a brighter future.
        </p>

        <button>Start Your Application</button>
      </section>

    </div>
  );
}

export default Admission;
