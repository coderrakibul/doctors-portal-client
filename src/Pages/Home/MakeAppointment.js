import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
import { Link } from 'react-router-dom';




const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>

            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id doloremque asperiores quia numquam autem debitis nam esse a earum cupiditate, quibusdam, repudiandae eum dolorum facilis voluptatibus, et iure incidunt natus corrupti! Enim incidunt fuga repudiandae ipsa, omnis delectus mollitia commodi?</p>
                <PrimaryButton><Link to="/appointment">Get Started</Link></PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;