import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience.jsx";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_ID
      );
      console.log("EmailJS Sucess:"); // Optional: show toast

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          {/* Form Section */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          {/* <div className="xl:col-span-7 min-h-96">
                        <div className="bg-[#000000] w-full xl:h-[75vh] hover:cursor-grab rounded-2xl overflow-hidden">
                     <img src="/images/hero.jpg" alt="hero"       className="w-full h-full object-contain md:object-cover"  />

                        </div>
                    </div> */}
          {/* Experience Section */}
          <div className="xl:col-span-7 flex flex-col">
            <div className="bg-gray-900 rounded-xl overflow-hidden xl:h-[76vh] flex flex-col">
              <div className="relative h-3/1 overflow-hidden">
                <img
                  src="/images/hero.jpg"
                  alt="Contact visual"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>

              <div className="p-8 bg-black/50 backdrop-blur-md rounded-2xl text-white flex-grow">
                <div className="max-w-lg">
                  <h3 className="text-2xl font-bold mb-4">
                    Let's create something amazing together
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Feel free to reach out if you have a question or want to
                    connect. I'm currently available for freelance work.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 text-gray-200">Email</h4>
                      <a
                        href="mailto:contact@yourname.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {import.meta.env.VITE_APP_PERSONAL_MAIL}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-gray-200">Phone</h4>
                      <a
                        href={`tel:${import.meta.env.VITE_APP_PERSONAL_PHONE}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {import.meta.env.VITE_APP_PERSONAL_PHONE}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
