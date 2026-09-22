import '../App.css'
import { useState } from "react";

function Apply() {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    dateOfBirth: "",
    gender: "",
    className: "",
    previousSchool: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    guardianName: "",
    guardianPhone: "",
  });

  const [photo, setPhoto] = useState(null);
  const [documents, setDocuments] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Admission Data:", formData);
    console.log("Student Photo:", photo);
    console.log("Documents:", documents);

    alert("Admission application submitted successfully!");
  };

  return (
    <div className="apply-page">

      {/* Header */}
      <section className="apply-header">
        <h1>Student Admission Form</h1>

        <p>
          Please fill in the form carefully to apply for admission.
        </p>
      </section>

      {/* Form */}
      <div className="apply-container">

        <form onSubmit={handleSubmit}>

          {/* Student Information */}
          <section className="form-section">

            <h2>Student Information</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>Student Full Name</label>

                <input
                  type="text"
                  name="studentName"
                  placeholder="Enter student name"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Father's Name</label>

                <input
                  type="text"
                  name="fatherName"
                  placeholder="Enter father's name"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Date of Birth</label>

                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Gender</label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label>Applying For Class</label>

                <select
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Class</option>
                  <option value="Playgroup">Playgroup</option>
                  <option value="Nursery">Nursery</option>
                  <option value="KG">KG</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                </select>
              </div>

              <div className="form-group">
                <label>Previous School</label>

                <input
                  type="text"
                  name="previousSchool"
                  placeholder="Enter previous school"
                  value={formData.previousSchool}
                  onChange={handleChange}
                />
              </div>

            </div>

          </section>

          {/* Contact Information */}
          <section className="form-section">

            <h2>Contact Information</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Home Address</label>

                <textarea
                  name="address"
                  rows="3"
                  placeholder="Enter complete address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label>City</label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

          </section>

          {/* Guardian Information */}
          <section className="form-section">

            <h2>Parent / Guardian Information</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>Guardian Name</label>

                <input
                  type="text"
                  name="guardianName"
                  placeholder="Enter guardian name"
                  value={formData.guardianName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Guardian Phone</label>

                <input
                  type="tel"
                  name="guardianPhone"
                  placeholder="+92 300 1234567"
                  value={formData.guardianPhone}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

          </section>

          {/* Documents */}
          <section className="form-section">

            <h2>Required Documents</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>Student Photo</label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  required
                />
              </div>

              <div className="form-group">
                <label>Previous School Documents</label>

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setDocuments(e.target.files[0])}
                />
              </div>

            </div>

          </section>

          {/* Submit */}
          <div className="submit-section">

            <button type="submit">
              Submit Admission Application
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Apply;