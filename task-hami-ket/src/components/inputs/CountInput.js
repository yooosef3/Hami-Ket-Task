import React from 'react';

const CountInput = () => {
    return (
        <div className="relative md:w-[30%]">
            <label className='text-gray-500 font-bold ml-3'>تعداد نمایش در هر صفحه</label>
            <select className='rounded-md border text-gray-500 font-bold h-9 pr-5 focus:border-blue-500 outline-none'>
                <option defaultValue='5' value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
            </select>
        </div>
    );
};

export default CountInput;