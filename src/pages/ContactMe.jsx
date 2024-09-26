import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fz27ems",    
        "template_jw0tpau",   
        e.target,
        "EuPNuu0p0GXP8125Z"        
      )
      .then(
        (result) => {
          setMessageStatus("Message sent successfully!");
        },
        (error) => {
          setMessageStatus("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact section py-16" id="contact">
      <div className="container mx-auto">
        <h3 className="section__subtitle text-3xl font-semibold text-center mb-4">
          Get In <span className="text-indigo-500">Touch</span>
        </h3>
        <h2 className="section__title text-4xl font-bold text-center mb-8">
          Contact Me
        </h2>

        <div className="contact__container grid place-items-center">
          <form
            className="contact__form w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
            id="contact-form"
            onSubmit={sendEmail}
          >
            {/* Input Group */}
            <div className="contact__group grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="contact__input py-2 px-4 border border-gray-300 rounded-md w-full"
                id="contact-name"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="contact__input py-2 px-4 border border-gray-300 rounded-md w-full"
                id="contact-email"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              name="user_project"
              required
              placeholder="Enter your message"
              className="contact__input py-2 px-4 border border-gray-300 rounded-md w-full mb-6"
              id="contact-project"
            ></textarea>

            {/* Status Message */}
            <p className="contact__message text-center text-lg text-green-500 mb-4">
              {messageStatus}
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="button  bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault(); // Prevent default form submission

//     emailjs.sendForm('', '', form.current, '')
//       .then((result) => {
//           console.log(result.text);
//           alert('Message sent successfully!');
//       }, (error) => {
//           console.log(error.text);
//           alert('Error sending message. Please try again.');
//       });
      
//     e.target.reset(); // Reset the form after submission
//   };

//   return (
//     <section className="contact section py-16" id="contact">
//     <h3 className="section__subtitle text-3xl font-semibold text-center">
//       Get In <span className="text-indigo-500">Touch</span>
//     </h3>

//     <h2 className="section__title text-4xl font-bold text-center mt-4 mb-8">
//       Contact Me
//     </h2>

//     <div className="contact__container container mx-auto grid grid-cols-1 md:grid-cols-1">
//       <form onSubmit={handleSubmit} className="contact__form w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
//         <div className="contact__group grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//           <input
//             type="text"
//             name="user_name"
//             required
//             placeholder="Enter your name"
//             className="contact__input border border-gray-300 rounded-md p-2 w-full"
//             id="contact-name"
//             value={formData.user_name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="user_email"
//             required
//             placeholder="Enter your email"
//             className="contact__input border border-gray-300 rounded-md p-2 w-full"
//             id="contact-email"
//             value={formData.user_email}
//             onChange={handleChange}
//           />
//         </div>

//         <textarea
//           name="user_project"
//           required
//           placeholder="Enter your message"
//           className="contact__input border border-gray-300 rounded-md p-2 w-full mb-4"
//           id="contact-project"
//           value={formData.user_project}
//           onChange={handleChange}
//         ></textarea>

//         {message && <p className="contact__message text-green-500 mb-4">{message}</p>}

//         <button
//           type="submit"
//           className="button contact__button bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   </section>
// );
// };
//     // <div className='flex justify-center h-screen' id='contact'>
//     // <section className="w-4/5 md:w-fit grid justify-items-center" id="contact">
//     //   <span className="btn ">Contact Me</span>
      

//     //   <div className="contact__container bd-grid">
//     //     <form ref={form} onSubmit={sendEmail} className="contact__form grid justify-items-center">
//     //       <div className="contact__inputs grid grid-cols-1 md:grid-cols-2 gap-4">
//     //         <input 
//     //           type="text" 
//     //           name="user_name" // Name of the input field
//     //           placeholder="Name" 
//     //           className="mt-5 contact__input p-1 border-1 border-gray-400 rounded-lg" 
//     //           required
//     //         />
//     //         <input 
//     //           type="email" 
//     //           name="user_email" // Name of the input field
//     //           placeholder="Email" 
//     //           className="contact__input p-2 border-1 border-gray-400 rounded-lg" 
//     //           required
//     //         />
//     //       </div>


//     //       <textarea 
//     //         name="message" // Name of the input field
//     //         placeholder="Message" 
//     //         className=" p-2 border-1 border-gray-400 rounded-lg w-full mt-4 mb-6" 
//     //         rows="10" 
//     //         required
//     //       />

//     //       <input 
//     //         type="submit" 
//     //         value="Send Message" 
//     //         className="button contact__button mb-5 mt-4btn btn-primary bg-black py-2 px-4 rounded hover:bg-blue-600 " 
//     //       />
//     //     </form>
//     //   </div>
//     // </section>
//     // </div>
// //   );
// // }

// export default Contact;
