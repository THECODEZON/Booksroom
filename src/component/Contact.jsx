import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-teal-400 rounded-2xl transition duration-300 hover:shadow-lg ">
      <div className="rounded-none transition duration-200 hover:scale-98 hover:rounded-xl ">
        <form className="flex flex-col items-center font-inherit gap-2 p-8 bg-gray-900 rounded-2xl" onSubmit={handleSubmit}>
          <p className="text-center my-8 text-teal-400 text-xl bg-transparent">Get In Touch</p>

          <div className="flex items-center justify-center gap-2 rounded-lg p-2 bg-gray-900 shadow-inner">
            <input
              required
              placeholder="Name"
              className="bg-none border-none outline-none w-full text-blue-300 px-4"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg p-2 bg-gray-900 shadow-inner">
            <input
              required
              placeholder="Email"
              className="bg-none border-none outline-none w-full text-blue-300 px-4"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg p-2 bg-gray-900 shadow-inner">
            <input
              required
              placeholder="Subject"
              className="bg-none border-none outline-none w-full text-blue-300 px-4"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg p-2 bg-gray-900 shadow-inner">
            <textarea
              required
              placeholder="Message"
              cols="30"
              rows="3"
              className="bg-none border-none outline-none w-full text-blue-300 px-4"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="cursor-pointer mb-12 p-4 rounded-lg border-none outline-none bg-transparent text-teal-400 font-bold transition-all duration-300 outline-1 outline-teal-400 hover:bg-teal-400 hover:text-black hover:shadow-inner" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
