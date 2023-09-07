"use client";
import { useState, useEffect } from 'react';
import { apiUrl } from '../../utils/api';
import Loading from '../components/Loading';
import { Plant } from '../../interfaces/Plant';

const AllPlants: React.FC = () => {
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
    <div>
      {plantList.map((singlePlant) => (
        <div key={singlePlant._id}>
            <img src={singlePlant.img} alt={singlePlant.latinname} />
          {singlePlant.latinname}
        </div>
      ))}
    </div>
    )
}

export default AllPlants