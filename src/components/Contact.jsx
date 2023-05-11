import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Mail } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Thibault",
        from_email: form.email,
        to_email: "thib7777@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setLoading(false);
        alert('Merci, je vous recontacte aussi vite que possible !');

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, (error) => {
        setLoading(false)

        console.error(error);

        alert('Problème ! merci de réessayer..')
      }
      );
  };

  return (
    <div className=" xl:flex-row flex-col-reverse flex overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.heroSubText}>Me contacter</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <div className="relative flex flex-col justify-center items-center md:flex-row gap-6 bottom-6">
            <a className="flex items-center gap-1 hover:text-sky-600 bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" href="https://github.com/Thpham-v" target="_blank">Github <span className="material-symbols-outlined text-sky-600">link</span></a>
            <a className="flex items-center gap-1 hover:text-sky-600 bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" href="https://www.linkedin.com/in/thibault-pham-van-6363b6253/" target="_blank">Linkedin <span className="material-symbols-outlined text-sky-600">link</span></a>
            <a className="flex items-center gap-1 hover:text-sky-600 bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" href="public/CV Thibault Pham-Van.pdf" target="_blank">Curriculum <span className="material-symbols-outlined text-sky-600">link</span></a>
          </div>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Votre Nom / Prénom</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholdeer="Quel est votre nom / prénom ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Votre Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholdeer="Quel est votre email ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Votre Message</span>
            <textarea rows="6" name="message" value={form.message} onChange={handleChange} placeholdeer="Quel est votre message ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Envoi...' : 'Envoyer'}
          </button>

        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md-[550px] h-[350px]">
        <Mail />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")