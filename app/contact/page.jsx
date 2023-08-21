'use client'

import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export default function Page() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: process.env.TO_NAME,
          from_email: form.email,
          to_email: process.env.TO_EMAIL,
          message: form.message,
        },
        process.env.PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will getback to you as soon as possible");
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong!");
          }
        );
      });
  };
  return (
    <div>
        <div>
            <h2
            className="font-bold text-[44px] mt-[150px]"
            >Get In Touch</h2>
            <p>
                Let's chat if you have a comment or question on any posts, or you just want to say h.
            </p>
        </div>
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 w-[45%]"
        >
        <label
            className="flex flex-col">
            <span
             className="font-medium mb-4">Your Name</span>
            <input 
                className="h-[45px] rounded-md bg-slate-700 py-4 px-6 outline-none border-none font-medium"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
        </label>
        <label
            className="flex flex-col">
            <span
             className="font-medium mb-4">Your Email</span>
            <input 
                className="h-[45px] rounded-md bg-slate-700 py-4 px-6 outline-none border-none font-medium"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />
        </label>
        <label
            className="flex flex-col">
            <span
             className="font-medium mb-4">Your Message</span>
            <textarea
                className="rounded-md bg-slate-700 p-4 outline-none border-none font-medium"
                rows='7'
                name="message"
                value={form.message}
                onChange={handleChange}
            />
        </label>
        <button
            type="submit"
            className="py-3 px-8 outline-none text-white 
            font-bold shadow-md shadow-primary rounded-xl bg-slate-500 w-full"  
          >
            { loading? 'Sending ...' : "Send"} 
          </button>
        </form>
    </div>
  );
}
