import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { IdentityContext } from '../../../provider/IdentityProvider';
import useAxiosProtect from '../../../hooks/useAxiosProtect';

const AddingClass = () => {
  const { user } = useContext(IdentityContext);
  const {instance} = useAxiosProtect()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    data.instructorName = user?.displayName || '';
    data.instructorEmail = user?.email || '';

    const response = await instance.post('/classes', data).then(data => {console.log(data)})
    reset();
  };

  return (
    <div className="border w-2/3 p-10 border-green-300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="className" className="block font-medium mb-1">
            Class Name
          </label>
          <input
            type="text"
            id="className"
            {...register('className', { required: 'Class Name is required' })}
            className="border-gray-300 border-solid border px-4 py-2 w-full rounded-md"
          />
          {errors.className && <p className="text-red-500">{errors.className.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-1">
            Class Image
          </label>
          <input
            type="text"
            id="image"
            {...register('image', { required: 'Class Image is required' })}
            className="border-gray-300 border-solid border px-4 py-2 w-full rounded-md"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="instructorName" className="block font-medium mb-1">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            value={user?.displayName || ''}
            className="border-gray-300 border-solid border px-4 py-2 w-full rounded-md"
            readOnly
            {...register('instructorName')}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instructorEmail" className="block font-medium mb-1">
            Instructor Email
          </label>
          <input
            type="text"
            id="instructorEmail"
            value={user?.email || ''}
            className="border-gray-300 border-solid border px-4 py-2 w-full rounded-md"
            readOnly
            {...register('instructorEmail')}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableSeats" className="block font-medium mb-1">
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            {...register('availableSeats', { required: 'Available Seats is required' })}
            className="border-gray-300 border-solid border px-4 py-2 w-full rounded-md"
          />
          {errors.availableSeats && <p className="text-red-500">{errors.availableSeats.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register('price', { required: 'Price is required' })}
            className="border-gray-300 border-solid border px-4 py-2 w-full rounded-md"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddingClass;
