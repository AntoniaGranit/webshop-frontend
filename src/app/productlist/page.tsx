'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { apiUrl } from '../../utils/api';
import Image from 'next/image';
import ListLoading from '../components/ListLoading';
import { Plant } from '../../interfaces/Plant';

const ProductList: React.FC = () => {
  const [plantList, setPlantList] = useState<Plant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${apiUrl}/plants`)
      .then((response) => response.json())
      .then((data) => {
        setPlantList(data.body);
        setLoading(false);
      });
  }, []);

  if (loading) return <ListLoading />;

  return (
    <section className='pt-32 pl-8 pr-8 lg:pl-32 lg:pr-32 '>
      <div className='w-8/12 pb-12'>
        <h1 className='col-span-4 text-4xl font-bold text-slate-800 pb-3'>Our Products</h1>
        <p>
          Welcome to our houseplant catalog! We&apos;ve carefully sourced and curated a diverse
          collection of 20 unique plants from all over the world to enhance your living space.
          Scroll through the list below, get inspired, and bring home your favorite green companions
          today.
        </p>
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-x-8 sm:gap-x-4 gap-y-12 cursor-pointer justify-items-center'>
        {plantList.reverse().map((singlePlant) => (
          <Link key={singlePlant._id} href='/plant/[id]' as={`/plant/${singlePlant._id}`}>
            <div className='flex-column justify-between'>
              <Image
                className='rounded-xl pb-2'
                width={300}
                height={400}
                src={singlePlant.img}
                alt={singlePlant.latinname}
              />
              <p className={`pb-2 text-slate-800`}> {singlePlant.latinname}</p>
              <p className={'text-sm font-bold text-slate-800'}>€{singlePlant.price}.00</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
