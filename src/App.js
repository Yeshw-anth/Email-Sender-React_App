import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9tpfbmr', 'template_4k8if4q', form.current, {
        publicKey: 'YWR8JKk-N4Yem2paq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <center>
    <h1>ReactJS with EmailJS</h1>
    <form ref={form} onSubmit={sendEmail}
    style={{display:"flex",flexDirection:"column",
    width:"450px",marginTop:"-2%",padding:"5%"}}>

      <label><strong>Name</strong></label>
      <input type="text" name="user_name" /><br/>
      <label><strong>sender's Name</strong></label>
      <input type="text" name="sender_name" /><br/>
      <label><strong>Reciever Email</strong></label>
      <input type="email" name="user_email" /><br/>
      <label><strong>Phone number</strong></label>
      <input type="text" name="user_number" /><br/>
      <label><strong>Message</strong></label>
      <textarea name="message" /><br/><br/>
      <input type="submit" value="Send" data-mdb-button-init data-mdb-ripple-init class="btn btn-warning"/>
    </form>
    </center>
  );
};
