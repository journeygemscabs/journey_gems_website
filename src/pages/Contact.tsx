import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import strings from "../strings.json";

interface FormData {
  name: string;
  phoneNumber: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const { hero, form } = strings.contact;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const templateParams = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID!
      );
      setStatus("success");
      setFormData({ name: "", phoneNumber: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center"
        style={{
          minHeight: "50vh",
          background: `url('${hero.background}') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">{hero.title}</h1>
          <p className="lead">{hero.subtitle}</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card shadow border-0 rounded-3">
                <div className="card-body p-4">
                  <h3 className="text-center mb-4">{form.heading}</h3>

                  {status === "success" && (
                    <div className="alert alert-success text-center">
                      Your enquiry has been sent successfully!
                    </div>
                  )}
                  {status === "error" && (
                    <div className="alert alert-danger text-center">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">{form.fields.name}</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={form.fields.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">{form.fields.message}</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows={5}
                        placeholder={form.fields.messagePlaceholder}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-warning fw-bold"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          form.submitButton
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
