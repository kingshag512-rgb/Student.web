import './Contact.css'
function Contact() {
  return (
    <div className="contact-page">

      {/* Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>

        <p>
          Have a question about admissions? We are here to help.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-section">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="contact-card">
            <h3>📍 School Address</h3>
            <p>
              Main Road, Rawalpindi, Pakistan
            </p>
          </div>

          <div className="contact-card">
            <h3>📞 Phone Number</h3>
            <p>
              +92 313-561191
            </p>
          </div>

          <div className="contact-card">
            <h3>📧 Email Address</h3>
            <p>
              kingshag512@gmail.com
            </p>
          </div>

          <div className="contact-card">
            <h3>🕒 Office Hours</h3>
            <p>
              Monday - thursday: 8:00 AM - 3:00 PM
              Friday: 8:00 AM - 12:00PM
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form>

            <div>
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label>Subject</label>

              <input
                type="text"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* FAQ / Help */}
      <section className="contact-help">

        <h2>Need Help With Admission?</h2>

        <p>
          If you have any questions about the admission process,
          required documents, eligibility, or application status,
          please contact our admission office.
        </p>

        <button>
          Apply for Admission
        </button>

      </section>

    </div>
  );
}

export default Contact;