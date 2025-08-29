import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_e32bau7",
        "template_2vynqn7",
        formRef.current,
        "2a1j2VWhT_MX0Tndc"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 3000); // auto-hide after 3s
        },
        () => {
          setError(true);
          setTimeout(() => setError(false), 3000);
        }
      );
  };

  // Animation variants
  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const inputClass =
    "p-3 md:p-4 bg-transparent border border-gray-500 rounded text-white outline-none focus:border-orange-500 transition";

  return (
    <motion.div name="Contact"
      className="flex flex-col md:flex-row items-center justify-center bg-[#0c0c1d] w-full h-full p-10 gap-12 md:gap-20 mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Text Section */}
      <motion.div
        className="flex-1 flex flex-col text-gray-300 gap-10 md:gap-20 text-center md:text-left"
        variants={fadeUp}
      >
        <h1 className="text-5xl md:text-[90px] font-light leading-tight">
          Let&apos;s work together
        </h1>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">Email</h2>
          <span>noorjahan786.niet@gmail.com</span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">Phone</h2>
          <span>
            <span className="text-orange-500">+91 </span>
            8207815295
          </span>
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex-1 flex flex-col gap-5 w-full max-w-lg"
        variants={fadeUp}
      >
        <input type="text" name="name" placeholder="Name" required className={inputClass} />
        <input type="email" name="email" placeholder="Email" required className={inputClass} />
        <textarea rows="8" name="message" placeholder="Message" required className={inputClass} />

        <button
          type="submit"
          className="bg-orange-500 p-3 md:p-5 font-medium rounded cursor-pointer hover:bg-orange-600 transition"
        >
          Submit
        </button>

        {error && <span className="text-red-500 text-sm">Error sending message</span>}
        {success && <span className="text-green-500 text-sm">Message sent successfully!</span>}
      </motion.form>
    </motion.div>
  );
}

export default Contact;
