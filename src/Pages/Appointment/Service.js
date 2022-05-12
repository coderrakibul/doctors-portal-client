import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try Another Date</span>
                }</p>
                <p>  {slots.length} {slots.lenght > 1 ? "spaces" : "space"} available</p>
                <div class="card-actions justify-center">
                    <label for="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} class="btn btn-sm bg-gradient-to-r from-secondary to-primary text-white uppercase border-0">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;