'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { apiUrl } from '../../utils/api';
import Image from 'next/image';
import Loading from '../components/Loading';
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

  if (loading) return <Loading />;

  return (
    <div className='p-32 grid grid-cols-4 gap-x-8 gap-y-12 cursor-pointer text-emerald-900'>
      {plantList.map((singlePlant) => (
        <Link key={singlePlant._id} href='/plant/[id]' as={`/plant/${singlePlant._id}`}>
          <div className='flex-column justify-between'>
            <Image
              className='rounded-xl pb-2'
              width={200}
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
  );
};

export default ProductList;
