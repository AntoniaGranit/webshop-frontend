'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { apiUrl } from '../../utils/api';
import Image from 'next/image';
import Loading from '../components/Loading';
import { Plant } from '../../interfaces/Plant';

const ProductList: React.FC = () => {
    const [plantList, setPlantList] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`${apiUrl}/plants`)
        .then((response) => response.json())
        .then((data) => {
          setPlantList((data.body));
          console.log(setPlantList);
          setLoading(false)
        })
    }, []);

    if (loading) return <Loading />

    return (
    <div className="p-10 grid grid-cols-5 gap-x-8 gap-y-4 cursor-pointer">
      {plantList.map((singlePlant) => (
      <Link key={singlePlant._id} href='/plant/[id]' as={`/plant/${singlePlant._id}`}>
        <div>
            <Image className="rounded-full"
                width={200}
                height={400}
                src={singlePlant.img}
                alt={singlePlant.latinname} />
          <p className={`text-2xl font-bold`}> {singlePlant.latinname}</p><br />
          €{singlePlant.price}.00<br />
          {singlePlant.size}<br />
          {singlePlant.description}
        </div>
        </Link>
      ))}
    </div>
    )
}

export default ProductList