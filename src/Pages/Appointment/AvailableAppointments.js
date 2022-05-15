import { format } from 'date-fns';
import id from 'date-fns/esm/locale/id/index.js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Service from '../Appointment/Service';
import BookingModal from './BookingModal';
import Loading from '../Shared/Loading'

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://fast-caverns-33581.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // here used react query to reload and cash data and update
    // useEffect(() => {
    //     fetch(`https://fast-caverns-33581.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));

    // }, [formattedDate])

    return (
        <div>
            <h4 className='text-xl text-secondary text-center'> Available Appointment on {format(date, 'PP')} </h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;