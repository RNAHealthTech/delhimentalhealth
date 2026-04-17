import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm, ValidationError } from '@formspree/react';
import ReactGA from 'react-ga'
import "./Appointment.css";

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        disorder: '',
        phone: '',
        email: '',
        appointmentType: 'offline',
        date: '',
        hours: '',
       
    });

    const [state, handleSubmit] = useForm("xeojgdnk");
  


    useEffect(() => {
        if (state.succeeded) {
            // Close the modal after 3 seconds (adjust as needed)
            const timer = setTimeout(() => {
                onClose();
                // Reset form data and step
                setFormData({
                    name: '',
                    age: '',
                    disorder: '',
                    phone: '',
                    email: '',
                    appointmentType: 'offline',
                    date: '',
                    hours: '',
                    
                });
                setStep(1);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [state.succeeded, onClose]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePrevStep = () => {
        setStep(1);
    };

    const handleFinalSubmit = (e: React.FormEvent) => {
        ReactGA.event({
            category: 'User Interaction',
            action: 'Button Click',
            label: 'Appointment Button',
        });
        e.preventDefault();
        handleSubmit(formData);
        sendWhatsAppMessage();
        
    };

    const sendWhatsAppMessage = () => {
        const message = `New Appointment Request:
        Name: ${formData.name}
        Age: ${formData.age}
        Disorder: ${formData.disorder}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Appointment: ${formData.appointmentType}
        Date: ${formData.date}
        Time: ${formData.hours}`;

        const whatsappNumber = '919934035397'; // Replace with your WhatsApp number
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md  md:max-w-lg lg:max-w-xl">
                <div className="p-8 flex flex-col max-h-[90vh] overflow-y-auto">
                    <h2 className="text-3xl font-bold text-teal-800 mb-6">Schedule an Appointment</h2>
                    {state.succeeded ? (
                        <p className="mt-4 text-green-600 text-lg">Thanks for your submission! This window will close shortly.</p>
                    ) : (
                        <>
                            {step === 1 ? (
                                <form onSubmit={handleNextStep} className="space-y-6 flex-1">
                                    <div className='form-group'>
                                        <label htmlFor="name" className="block text-sm font-medium text-teal-700 mb-2">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="age" className="block text-sm font-medium text-teal-700 mb-4">Age</label>
                                        <input
                                            id="age"
                                            type="number"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="disorder" className="block text-sm font-medium text-teal-700 mb-2">Disorder/Mental Health Concern</label>
                                        <input
                                            id="disorder"
                                            type="text"
                                            name="disorder"
                                            value={formData.disorder}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={handleFinalSubmit} className="space-y-6 flex-1">
                                    <div className='form-group'>
                                        <label htmlFor="phone" className="block text-sm font-medium text-teal-700 mb-2">Phone</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="email" className="block text-sm font-medium text-teal-700 mb-2">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-teal-700 mb-2">Appointment Type</label>
                                        <div className="flex space-x-4">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="appointmentType"
                                                    value="offline"
                                                    checked={formData.appointmentType === 'offline'}
                                                    onChange={handleChange}
                                                    className="form-radio text-teal-600 focus:ring-teal-500 h-4 w-4"
                                                />
                                                <span className="ml-2 text-teal-700">Offline Appointment</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="appointmentType"
                                                    value="online"
                                                    checked={formData.appointmentType === 'online'}
                                                    onChange={handleChange}
                                                    className="form-radio text-teal-600 focus:ring-teal-500 h-4 w-4"
                                                />
                                                <span className="ml-2 text-teal-700">Online Appointment</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="date" className="block text-sm font-medium text-teal-700 mb-2">Preferred Date</label>
                                        <input
                                            id="date"
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="hours" className="block text-sm font-medium text-teal-700 mb-2">Preferred Hours</label>
                                        <input
                                            id="hours"
                                            type="time"
                                            name="hours"
                                            value={formData.hours}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>


                                    <div className="flex flex-col-reverse sm:flex-row justify-end space-y-2 space-y-reverse sm:space-y-0 sm:space-x-2 mt-6 sm:mt-4">
                                        
                                        <button
                                            type="button"
                                            onClick={handlePrevStep}
                                            className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 mb-2 sm:mb-0"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={state.submitting}
                                            className="w-full sm:w-auto px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
                                        >
                                            {state.submitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>, document.body
    );
};

export default AppointmentModal;