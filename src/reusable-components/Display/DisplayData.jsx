import React from 'react';

const DisplayData = ({city_doc}) => {
    const {city, famous_for, id} = city_doc;

    // function to delete an item from fireStore
    const handleSubmitDelete = (id) =>{
        
    }

    return (
        <div className='mt-10 border-dashed p-8 border-2 flex flex-col gap-4 rounded-md'>
            <p>{city}</p>
            <p>{famous_for}</p>

            <div className='flex gap-4 items-center'>
                <button
                    onClick={()=>handleSubmitDelete(id)}
                    className="bg-red-600 p-4 cursor-pointer rounded-md text-white">DEL</button>
                <button className="bg-green-600 p-4 rounded-md cursor-pointer text-white">UPD</button>
            </div>
        </div>
    );
};

export default DisplayData;