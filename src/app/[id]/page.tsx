'use client';
import { useSearchParams } from 'next/navigation'
import SingleProduct from '../components/SingleProduct';

const SingleProductPage: React.FC = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id');
  console.log('id:', id);

    // Check if id is undefined or null, and handle it accordingly
    if (!id) {
        // Handle the case when the id is not provided in the URL
        return <div>Plant not found!!!!!!!!!</div>;
      }

  return <SingleProduct id={id} />;
};

export default SingleProductPage;