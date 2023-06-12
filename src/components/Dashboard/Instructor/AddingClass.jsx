import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { IdentityContext } from '../../../provider/IdentityProvider';
import useAxiosProtect from '../../../hooks/useAxiosProtect';
import { toast } from 'react-hot-toast';

const AddingClass = () => {
  const { user } = useContext(IdentityContext);
  const {instance} = useAxiosProtect()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    data.instructorName = user?.displayName || '';
    data.instructorEmail = user?.email || '';
    data.availableSeats = parseInt(data.availableSeats);
    data.price = parseInt(data.price);


    const response = await instance.post('/classes', data).then(data => {console.log(data)})
    toast.success("Class Added Successfully")
    reset();
  };

  return (
    <div className="border-2 w-3/4 p-14 border-second rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="className" className="block font-medium mb-1">
            Class Name
          </label>
          <input
            type="text"
            id="className"
            {...register('className', { required: 'Class Name is required' })}
            className="input-field"
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
            className="input-field"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>
        <div className="grid grid-cols-2 gap-x-4 mt-10">
        <div className="">
          <label htmlFor="instructorName" className="block font-medium mb-1">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            value={user?.displayName || ''}
            className="input-field"
            readOnly
            {...register('instructorName')}
          />
        </div>
        <div className="">
          <label htmlFor="instructorEmail" className="block font-medium mb-1">
            Instructor Email
          </label>
          <input
            type="text"
            id="instructorEmail"
            value={user?.email || ''}
            className="input-field"
            readOnly
            {...register('instructorEmail')}
          />
        </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 mt-10">
        <div className="">
          <label htmlFor="availableSeats" className="block font-medium mb-1">
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            {...register('availableSeats', { required: 'Available Seats is required' })}
            className="input-field"
          />
          {errors.availableSeats && <p className="text-red-500">{errors.availableSeats.message}</p>}
        </div>
        <div className="">
          <label htmlFor="price" className="block font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register('price', { required: 'Price is required' })}
            className="input-field"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>
        </div>
        <div className="text-center mt-10">
          <button
            type="submit"
            className="px-20 py-3 btn-primary"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddingClass;
