"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";

const steps = [
  {
    title: "Let's Build Together",
    subtitle: "Have an AI idea? Let's bring it to life",
    placeholder: "Your Name",
    type: "text",
    schema: z.string().min(2, "Name is too short"),
  },
  {
    title: "Where Can We Reach You?",
    subtitle: "Drop your work email, and we will reach out right away.",
    placeholder: "Your Work Email",
    type: "email",
    schema: z.string().email("Please enter a valid email address"),
  },
  {
    title: "What Brings You Here?",
    subtitle: "We are all ears let us know how we can assist you.",
    placeholder: "Tell us why you're reaching out...|",
    type: "text",
    schema: z.string().min(10, "Please provide more details"),
  },
];

export default function AiSolutionsContactForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<string[]>(["", "", ""]);
  const [errors, setErrors] = useState<string[]>(["", "", ""]);
  const [touched, setTouched] = useState<boolean[]>([false, false, false]);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = [...values];
    newValues[step] = e.target.value;
    setValues(newValues);
    // Validate on change if already touched
    if (touched[step]) {
      validateStep(newValues[step]);
    }
  };

  const handleBlur = () => {
    const newTouched = [...touched];
    newTouched[step] = true;
    setTouched(newTouched);
    validateStep(values[step]);
  };

  const validateStep = (value: string) => {
    const schema = steps[step].schema;
    const result = schema.safeParse(value);
    const newErrors = [...errors];
    newErrors[step] = result.success ? "" : result.error.errors[0].message;
    setErrors(newErrors);
    return result.success;
  };

  const handleNext = async () => {
    setTouched((prev) => {
      const updated = [...prev];
      updated[step] = true;
      return updated;
    });
    if (validateStep(values[step])) {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        // Submit logic here
        setSubmitError("");
        try {
          const res = await fetch("/api/send-contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: values[0],
              email: values[1],
              message: values[2],
            }),
          });
          if (res.ok) {
            setSubmitted(true);
          } else {
            const data = await res.json();
            setSubmitError(data.error || "Failed to send. Please try again.");
          }
        } catch {
          setSubmitError("Failed to send. Please try again.");
        }
      }
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <section className="w-full flex justify-center items-center py-12 lg:px-20" id="contact-form">
      <div className="w-full max-w-[1720px] rounded-3xl bg-[url('/images/ai-solutions/contact-form.png')] bg-cover bg-center min-h-[600px] lg:h-[990px] flex flex-col justify-between shadow-xl px-10 lg:px-20 lg:py-16 py-8 relative overflow-hidden">
        {submitted ? (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <h2 className="text-black text-4xl lg:text-7xl font-semibold text-center mb-6 mt-20">Thank you!</h2>
            <p className="text-black/80 text-2xl lg:text-3xl text-center font-light max-w-2xl mb-20">We have received your message and will be in touch soon. We look forward to building something amazing together.</p>
          </div>
        ) : (
        <>
        {/* Top: Title & Subtitle */}
        <div className="w-full flex flex-col items-center mt-4 mb-8">
          <h2 className="text-black text-3xl lg:text-7xl font-semibold text-center tracking-tight mb-4">
            {steps[step].title}
          </h2>
          <p className="text-black/80 text-xl lg:text-[40px] text-center font-semibold tracking-tight">
            {steps[step].subtitle}
          </p>
        </div>
        {/* Center: Input */}
        <div className="h-full flex flex-col justify-center items-center w-full relative">
          <div className="w-full relative">
            <input
              type={steps[step].type}
              placeholder={
                errors[step] && touched[step]
                  ? errors[step]
                  : steps[step].placeholder
              }
              className={`w-full text-center text-3xl lg:text-5xl font-semibold bg-transparent border-0 border-b border-[#232323] focus:ring-0 focus:outline-none text-[#232323] py-4 mb-8 transition-colors duration-200
                ${errors[step] && touched[step] ? "border-[#E25C5C] placeholder:text-[#E25C5C]" : "placeholder:text-[#232323]/40"}
              `}
              value={values[step]}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleNext();
                }
              }}
            />
            {submitError && (
              <div className="text-[#E25C5C] text-center text-lg mt-2">{submitError}</div>
            )}
          </div>
          {/* Stepper below input, right-aligned */}
          <div className="flex flex-row gap-2 items-end justify-end self-end">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`lg:w-7 lg:h-7 w-4 h-4 rounded-full border border-[#232323] flex items-center justify-center transition-all duration-200
                  ${i < step ? "bg-[#4A4A4A]" : i === step ? "bg-[#4A4A4A]" : "bg-transparent"}
                `}
              >
                {i < step && (
                  <span className="lg:w-3 lg:h-3 w-2 h-2 rounded-full" style={{ background: "#B3B09F" }} />
                )}
              </span>
            ))}
          </div>
        </div>
        {/* Bottom: Next/Back buttons */}
        <div className="flex flex-row items-center justify-center w-full mt-auto mb-2 gap-4">
          {/* Back button with animation */}
          <div
            className={`transition-all duration-300 ${
              step === 0
                ? "opacity-0 -translate-x-8 pointer-events-none"
                : "opacity-100 translate-x-0"
            }`}
          >
            {step > 0 && (
              <button
                className="bg-[#ECECEC] cursor-pointer text-[#2F2C28] text-xl font-semibold rounded-full px-8 py-4 flex items-center gap-2 shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] border border-[#E6E6E6] transition-all duration-200"
                onClick={handleBack}
              >
                <ArrowLeft className="w-6 h-6" /> Back
              </button>
            )}
          </div>
          <AnimatePresence mode="wait">
            <motion.button
              key={step + "-next-btn"}
              className="bg-[#2F2C28] cursor-pointer text-white text-xl font-semibold rounded-full px-12 py-4 flex items-center gap-3 shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] transition-all duration-200"
              onClick={handleNext}
              disabled={!values[step]}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
            >
              {step < steps.length - 1 ? "Next" : "Submit"} <ArrowRight className="w-6 h-6" />
            </motion.button>
          </AnimatePresence>
        </div>
        </>
        )}
      </div>
    </section>
  );
}
