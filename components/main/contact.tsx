"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { AiOutlineEye } from "react-icons/ai";
import { LINKS } from "@/constants";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const EMAILJS_RECIPIENT_EMAIL = process.env.NEXT_PUBLIC_EMAILJS_RECIPIENT_EMAIL || "";

export const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Initialize EmailJS on component mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log("EmailJS initialized successfully");
      } catch (err) {
        console.error("EmailJS initialization failed:", err);
      }
    } else {
      console.warn("EMAILJS_PUBLIC_KEY is not set");
    }
  }, []);

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors = {
      user_name: "",
      user_email: "",
      message: "",
    };

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Validate environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("Missing EmailJS environment variables:", {
        EMAILJS_SERVICE_ID: EMAILJS_SERVICE_ID ? "✓" : "✗",
        EMAILJS_TEMPLATE_ID: EMAILJS_TEMPLATE_ID ? "✓" : "✗",
        EMAILJS_PUBLIC_KEY: EMAILJS_PUBLIC_KEY ? "✓" : "✗",
      });
      setSubmitStatus({
        type: "error",
        message: "✗ Configuration error. Please check environment variables.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send email to admin (notification)
      const templateParams = {
        from_name: formData.user_name,
        from_email: formData.user_email,
        message: formData.message,
      };

      const adminEmailResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("✓ Admin email sent successfully!", adminEmailResponse);

      // Now send auto-reply to user
      const replyParams = {
        to_email: formData.user_email,
        user_name: formData.user_name,
      };

      const userEmailResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_REPLY_TEMPLATE_ID,
        replyParams
      );

      console.log("✓ Auto-reply sent successfully!", userEmailResponse);

      // Both emails sent successfully
      setSubmitStatus({
        type: "success",
        message: "✓ Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ user_name: "", user_email: "", message: "" });
      setTimeout(
        () => setSubmitStatus({ type: null, message: "" }),
        5000
      );
    } catch (error: any) {
      console.error("❌ EmailJS Error Full:", error);
      console.error("Error stringify:", JSON.stringify(error));
      console.log("Error keys:", Object.keys(error));
      
      // Extract detailed error info
      const errorDetails = {
        status: error?.status,
        text: error?.text,
        message: error?.message,
        response: error?.response,
      };
      
      console.error("Error Details:", errorDetails);
      
      setSubmitStatus({
        type: "error",
        message: error?.text || error?.message || "✗ Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 md:px-10"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Get in Touch</h1>
      </motion.div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
        Contact Me
      </h2>

      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={slideInFromLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg p-4 sm:p-6 md:p-8 border border-[#7042f88b]/50"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${LINKS.email}`}
                    className="text-white hover:text-cyan-400 transition font-semibold break-all"
                  >
                    {LINKS.email}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">🔗</div>
                <div>
                  <p className="text-gray-400 text-sm mb-3">Social Links</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/dikshit13"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-cyan-400 transition"
                    >
                      <RxGithubLogo className="h-6 w-6" />
                    </a>
                    <a
                      href="https://linkedin.com/in/dikshit1"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-cyan-400 transition"
                    >
                      <RxLinkedinLogo className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">📄</div>
                <div>
                  <p className="text-gray-400 text-sm mb-3">Resume</p>
                  <div className="flex items-center border border-[#7042f88b] rounded-lg overflow-hidden">
                    <a
                      href={LINKS.resume}
                      download="resume.pdf"
                      className="py-2 px-3 text-white cursor-pointer hover:bg-[#7042f88b] hover:bg-opacity-20 transition text-sm"
                    >
                      Download CV
                    </a>
                    <a
                      href={LINKS.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-3 text-white hover:bg-[#7042f88b] hover:bg-opacity-20 transition border-l border-[#7042f88b]/30"
                      title="View Resume"
                    >
                      <AiOutlineEye className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={slideInFromRight(0.3)}
            initial="hidden"
            whileInView="visible"
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-lg p-4 sm:p-6 md:p-8 border border-[#7042f88b]/50 backdrop-blur-sm"
          >
            {/* Name Field */}
            <div className="mb-6">
              <label
                htmlFor="user_name"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your name"
                aria-label="Your name"
                aria-describedby={errors.user_name ? "name-error" : undefined}
                className={`w-full bg-gray-900/50 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 ${
                  errors.user_name
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#7042f88b]/40 focus:border-cyan-500"
                }`}
              />
              {errors.user_name && (
                <p id="name-error" className="text-red-400 text-xs mt-1">
                  {errors.user_name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="user_email"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                aria-label="Your email"
                aria-describedby={errors.user_email ? "email-error" : undefined}
                className={`w-full bg-gray-900/50 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 ${
                  errors.user_email
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#7042f88b]/40 focus:border-cyan-500"
                }`}
              />
              {errors.user_email && (
                <p id="email-error" className="text-red-400 text-xs mt-1">
                  {errors.user_email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                aria-label="Your message"
                aria-describedby={errors.message ? "message-error" : undefined}
                rows={5}
                className={`w-full bg-gray-900/50 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 resize-none ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-[#7042f88b]/40 focus:border-cyan-500"
                }`}
              />
              {errors.message && (
                <p id="message-error" className="text-red-400 text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status Message */}
            {submitStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 p-3 rounded-lg text-sm text-center border ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 border-green-500/50 text-green-400"
                    : "bg-red-500/20 border-red-500/50 text-red-400"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: !isSubmitting ? 1.02 : 1 }}
              whileTap={{ scale: !isSubmitting ? 0.98 : 1 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
