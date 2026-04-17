import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Map from '../map';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state, handleSubmit] = useForm('xeojgdnk');
  console.log(state);
  return (
    <>
      <Helmet>
        <title>Contact Dr. Pratik Kumar - Book Your Appointment</title>
        <meta name="description" content="Get in touch with Dr. Pratik Kumar for expert psychiatric consultations. Contact via phone: +91 99340 35397 or email: docpratikkumar@gmail.com" />
        <meta name="keywords" content="contact Dr. Pratik Kumar, psychiatric appointment, mental health consultation, psychiatrist contact details" />
      </Helmet>
      <section className="bg-white py-12 mt-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <img src="/images/bg-circles-color.png" alt="background" />
              <div className="md:w-1/2 z-10 top-0">
                <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600">Get Therapy</h1>
                  <p className="text-xl md:text-2xl text-gray-700">Discover the new YOU</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <img src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fcontact-hero.png?alt=media&token=a87b326a-1b35-414f-b0ef-0faa14616da9" alt="therapy" />
            </div>
          </div>
        </div>
      </section>
      <div className='bg-gradient-to-l from-teal-800 to-teal-500 from text-center py-20 text-white font-bold text-2xl md:text-3xl lg:text-3xl'>
        <p>Contact Dr. Pratik Kumar</p>
      </div>
      <div className="container-contact mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row-reverse items-start">

          {/* Contact Information */}
          <section className="lg:w-1/3 w-full mb-12 lg:mb-0 lg:ml-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl text-center font-bold mb-6 text-zinc-900 md:text-3xl lg:text-3xl">Contact Information</h2>
              <div className="space-y-4 mb-6"> {/* Added mb-6 for spacing */}
                <div className="flex items-center">
                  <FaPhone className="text-blue-600 mr-4 text-xl" />
                  <span className="text-gray-700"> +91 99340 35397  </span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-4 text-xl" />
                  <span className="text-gray-700">docpratikkumar@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 mr-4 text-xl mt-1" />
                  <span className="text-gray-700"> Ever Bake Market, Shop No. F1, First Floor, BN Block, Local Shopping Centre, West Shalimar Bagh, New Delhi - 88</span>
                </div>
              </div>
              {/* Added image inside the contact information div */}
              <img
                src="/images/prateek-clinic.jpg"
                alt="Dr. Pratik Kumar's Clinic"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </section>

          {/* Contact Form */}
          <section id="contact-form" className="lg:w-2/3 w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center text-zinc-900 md:text-3xl lg:text-3xl">Schedule Your Appointment</h3>

              {state.succeeded ? (
                <h3 className="text-2xl font-bold mb-4 text-green-600">
                  Your Form has been sent successfully!
                </h3>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Type Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Type Phone Number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Type Email Address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="date" className="block text-gray-700 text-sm font-semibold mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                    <ValidationError prefix="Date" field="date" errors={state.errors} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Appointment Type</label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="appointmentType"
                          value="offline"
                         
                          className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                        />
                        <span className="ml-2 text-black">Offline Appointment</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="appointmentType"
                          value="online"
                          className="text-teal-600 focus:ring-teal-500 h-4 w-4"
                        />
                        <span className="ml-2 text-black">Online Appointment</span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="hours" className="block text-gray-700 text-sm font-semibold mb-2">Hours</label>
                    <input
                      type="hours"
                      name="hours"
                      id="hours"
                      required
                      placeholder="Hours"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                    <ValidationError prefix="Hours" field="hours" errors={state.errors} />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">How can I help?</label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Type Description"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-200 resize-vertical min-h-[100px]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-gray-600 font-semibold py-3 px-6 border border-solid border-teal-800  rounded-md hover:text-gray-900 transition duration-300 ease-in-out transform  hover:-translate-y-1 hover:shadow-lg"
                  >
                    Schedule Appointment
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>
      <section className="aspect-w-16 aspect-h-9">
        <Map />
      </section>
    </>
  );
};

export default Contact;