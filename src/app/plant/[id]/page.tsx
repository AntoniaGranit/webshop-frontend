'use client';
import SingleProduct from '../../components/SingleProduct';

interface pageProps {
  params: {id: string}
}

const SingleProductPage: React.FC<pageProps> = ({params}) => {
  const id = params.id;

    if (!id) {
        return <div>Plant not found</div>;
      }

  return <SingleProduct id={id} />;
};

export default SingleProductPage;