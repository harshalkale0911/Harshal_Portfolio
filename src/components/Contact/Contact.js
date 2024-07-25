// import React, { useState } from 'react';
// import "../Contact/Contact.css";

// function Contact() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic, such as sending the data to a server
//     console.log('Form submitted:', { name, email, message });
//     setIsSubmitted(true);
//     // Clear the form fields after a short delay
//     setTimeout(() => {
//       setName('');
//       setEmail('');
//       setMessage('');
//       setIsSubmitted(false);
//     }, 2000); // 2-second delay for animation effect
//   };

//   return (
//     <>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//       <div className={`contact-form-container ${isSubmitted ? 'submitted' : ''}`}>
       
//        <h2 style={{color:"white"}}>Contact</h2>
//        <form onSubmit={handleSubmit} className="contact-form">
//          <div className="form-group">
//            <label htmlFor="name">Name:</label>
//            <input
//              type="text"
//              id="name"
//              value={name}
//              placeholder='Enter you name '
//              onChange={(e) => setName(e.target.value)}
//              className="form-input"
//            />
//          </div>
//          <div className="form-group">
//            <label htmlFor="email">Email:</label>
//            <input
//              type="email"
//              id="email"
//               placeholder='Enter you Email '
//              value={email}
//              onChange={(e) => setEmail(e.target.value)}
//              className="form-input"
//            />
//          </div>
//          <div className="form-group">
//            <label htmlFor="message">Message:</label>
//            <textarea
//              id="message"
//              value={message}
//               placeholder='Enter you message '
//              onChange={(e) => setMessage(e.target.value)}
//              className="form-textarea"
//            ></textarea>
//          </div>
//          <button type="submit" className="form-button">Send</button>
//        </form>
//      </div>
//     </>
  
//   );
// }

// export default Contact;
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../Contact/Contact.css";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // EmailJS send function
    emailjs.sendForm('service_p1n05u5', 'template_imtrxbc', event.target, 'kEGQse1OiHP4_rj-I')
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          // Clear the form fields after a short delay
          setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            setIsSubmitted(false);
          }, 2000); // 2-second delay for animation effect
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className={`contact-form-container ${isSubmitted ? 'submitted' : ''}`}>
        <h2 style={{color:"white"}}>Contact</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder='Enter your message'
              onChange={(e) => setMessage(e.target.value)}
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">Send</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
