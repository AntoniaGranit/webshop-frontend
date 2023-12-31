import Image from 'next/image';

const About: React.FC = () => {
  return (
    <main className='pt-32 lg:pl-32 text-slate-800'>
      <div className='w-11/12'>
        <Image
          className='float-right m-4'
          src='/florist.jpg'
          width={500}
          height={700}
          alt='Florist'
        />
        <h1 className='col-span-4 text-4xl font-bold text-slate-800 pb-6'>About Us</h1>
        <p className='pb-8'>
          At LeafLife, we&apos;re passionate about bringing the beauty and joy of houseplants into
          your life. Whether you&apos;re a seasoned plant enthusiast or just starting your green
          journey, we&apos;re here to make your indoor gardening experience a breeze!
        </p>
        <h2 className='text-xl font-bold pb-2'>Our Story</h2>
        <p className='pb-8'>
          LeafLife sprouted from a shared love for plants among a group of friends who believed that
          everyone should have access to lush, vibrant greenery in their homes. Inspired by our own
          experiences with houseplants and the positive impact they&apos;ve had on our lives, we set
          out to create a place where plant lovers can find everything they need.
        </p>
        <h2 className='text-xl font-bold pb-3'>Our Mission</h2>
        <p className='pb-8'>
          Our mission is simple: to help you create a greener, more vibrant space that you can call
          home. We&apos;re committed to providing you with the finest selection of houseplants,
          expert care tips, and the tools you need to nurture your indoor garden.
        </p>
        <h2 className='text-xl font-bold pb-3'>What Sets Us Apart</h2>
        <ul className='list-disc'>
          <li>
            <b>Quality Assurance:</b> We handpick each plant to ensure it meets our rigorous quality
            standards, so you can trust that you&apos;re getting the best.
          </li>
          <li>
            <b>Expert Advice:</b> Our team of plant enthusiasts and horticultural experts is here to
            answer your questions and provide guidance every step of the way.
          </li>
          <li>
            <b>Sustainability:</b> We care about the environment and strive to be eco-conscious in
            all our practices, from packaging to sourcing.
          </li>
          <li>
            <b>Community:</b> Join our growing community of plant lovers on social media and share
            your LeafLife journey with us.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default About;
