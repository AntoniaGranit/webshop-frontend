import { useRouter } from 'next/router';
import SingleProduct from '../components/SingleProduct';

const SingleProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; 

    // Check if id is undefined or null, and handle it accordingly
    if (!id) {
        // Handle the case when the id is not provided in the URL
        return <div>Plant not found.</div>;
      }

  return <SingleProduct id={id} />;
};

export default SingleProductPage;