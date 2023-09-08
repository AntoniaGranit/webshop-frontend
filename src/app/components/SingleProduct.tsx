'use client';
import { useState, useEffect } from 'react';
import { apiUrl } from '../../utils/api';
import Image from 'next/image';
import Loading from '../components/Loading';
import { Plant } from '../../interfaces/Plant';

interface SingleProductProps {
    id: string | string[];
  }

const SingleProduct: React.FC<SingleProductProps> = ({ id }) => {
    const [plant, setPlant] = useState<Plant | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`${apiUrl}/plants/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPlant((data.body));
          setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
          });
    }, [id]);

    if (loading) return <Loading />

    if (!plant) {
        // Handle the case where the plant is not found
        return <div><p>Plant not found.</p></div>;
      }
    

    return (
    <div className="p-10 grid grid-cols-5 gap-x-8 gap-y-4 cursor-pointer">
            <Image className="rounded-full"
                width={200}
                height={400}
                src={plant.img}
                alt={plant.latinname} />
          <p className={`text-2xl font-bold`}> {plant.latinname}</p><br />
          €{plant.price}.00<br />
          {plant.size}<br />
          {plant.description}
        </div>
    )
}

export default SingleProduct