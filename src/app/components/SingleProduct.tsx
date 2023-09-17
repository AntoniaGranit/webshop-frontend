'use client';
import { useState, useEffect } from 'react';
import { apiUrl } from '../../utils/api';
import Image from 'next/image';
import PlantLoading from '../components/PlantLoading';
import { Plant } from '../../interfaces/Plant';

interface SingleProductProps {
  id: string;
}

const SingleProduct: React.FC<SingleProductProps> = ({ id }) => {
  const [plant, setPlant] = useState<Plant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiUrl}/plants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlant(data.body);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <PlantLoading />;

  if (!plant) {
    // If the plant is not found:
    return (
      <div>
        <p>Plant not found.</p>
      </div>
    );
  }

  return (
    <section className='pl-32 pt-32'>
      <div className='w-9/12 flex'>
        <div className='flex-column w-8/12'>
          <Image
            className='rounded-l'
            width={400}
            height={400}
            src={plant.img}
            alt={plant.latinname}
          />
        </div>
        <div className='flex-column w-8/12 self-center'>
          <div className='flex-column pb-4'>
            <p className={`text-2xl font-semibold pb-1`}> {plant.latinname}</p>
            <div className='flex-column border-t border-gray-200 pb-3' />
            <p>€{plant.price}.00</p>
            <p>Size: {plant.size}</p>
          </div>
          <div className='pb-4'>
            <p>{plant.description}</p>
          </div>
          <div className='pb-3'>
            <p>Amount:</p>
            <select
              id='amount'
              name='amount'
              className='block w-3/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:max-w-xs sm:text-sm sm:leading-6'
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <button className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl'>
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
