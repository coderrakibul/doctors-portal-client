import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <div className='mb-24 py-20' style={{ background: `url(${appointment})` }}>
            <div>
                <h3 className='text-xl text-center text-primary p-2'>Contact Us</h3>
                <h2 className='text-3xl text-white text-center mb-3'>Stay connected with Us</h2>
            </div>
            <div className='flex flex-col content-center flex-wrap'>
                <input className='mb-2 p-1 rounded' type="text" placeholder="Your Email" class="input input-bordered input-sm w-full max-w-md" />
                <input className='mb-2 p-1 rounded' type="text" placeholder="Subject" class="input input-bordered input-sm w-full max-w-md" />
                <textarea class="textarea" placeholder="Message"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;