"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_3rqbpkb",    // 🔁 remplace
        "template_b80hhyj",  // 🔁 remplace
        form.current,
        "Fq0C83vhTf7s_2uB-"    // 🔁 remplace
      )
      .then(
        () => {
          setStatus("Message envoyé ✅");
          setLoading(false);
          form.current?.reset();
        },
        () => {
          setStatus("Erreur lors de l'envoi ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-6 bg-[#000f1f]"
    >
      {/* Glow */}
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {/* LEFT - Infos */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Contactez-moi
          </h2>

          <p className="text-gray-300 mb-6">
            Disponible pour des projets freelance, collaborations ou opportunités professionnelles.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📧 mbodji0412@gmail.com</p>
            <p>📞 +221 78 155 65 21</p>
            <p>📍 Dakar, Sénégal</p>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* RIGHT - Formulaire */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4"
        >
          <input
            type="text"
            name="name"   // ⚠️ important pour EmailJS
            placeholder="Votre nom"
            required
            className="w-full p-3 rounded-lg bg-white/10 text-white outline-none"
          />

          <input
            type="email"
            name="email"  // ⚠️ important
            placeholder="Votre email"
            required
            className="w-full p-3 rounded-lg bg-white/10 text-white outline-none"
          />

          <textarea
            name="message" // ⚠️ important
            placeholder="Votre message"
            rows={5}
            required
            className="w-full p-3 rounded-lg bg-white/10 text-white outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {/* Message */}
          {status && (
            <p className="text-center text-gray-300 text-sm">
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
