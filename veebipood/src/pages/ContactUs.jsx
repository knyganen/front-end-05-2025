import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cjns4np', 'template_oga8gjy', form.current, {
        publicKey: 'tRpV_FO7k8-ImU0n7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          //toast.success("Email edukalt saadetud!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />   
      <label>Message</label> <br />
      <textarea name="message" /> <br />
      <input type="submit" value="Send" /> <br />
    </form>
  );
};