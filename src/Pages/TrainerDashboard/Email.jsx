
import { Button } from 'flowbite-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import 'tailwindcss/tailwind.css';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i8os6nk',
        'template_8ib34lr',
        form.current,
        'gHWnxtvLiDPx_zHI-' 
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md w-full bg-white p-6 rounded-md shadow-md"
      >
        <label className="block mb-2" htmlFor="from_name">
          Your Name:
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label className="block mb-2" htmlFor="from_email">
          Your Email:
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label className="block mb-2" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <Button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Send Email
        </Button>
      </form>
    </div>
  );
};

export default Email;
