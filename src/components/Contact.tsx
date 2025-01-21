import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles/style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
/* @ts-expect-error asa*/
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        `${import.meta.env.VITE_service_id}`,
        `${import.meta.env.VITE_template_id}`,
        {
          from_name: form.name,
          to_name: "Musa Riaz",
          from_email: form.email,
          to_email: "musariaz520@gmail.com",
          message: form.message,
        },
        `${import.meta.env.VITE_public_key}`
      )
      .then(
        () => {
          setLoading(false);
          alert("Message Sent Successfully");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message");
          console.log(error);
        }
      );
  };
  /* @ts-expect-error asa*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={`${styles.sectionSubText}`}>Get In Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact Me.</h3>

        <form
        /* @ts-expect-error asa*/
          ref={formRef}
          onSubmit={handleSubmit}
          onChange={handleChange}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What is your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outline-none
            border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What is your Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outline-none
            border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outline-none
            border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold
          shadow-md rounded-xl shadow-primary"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
