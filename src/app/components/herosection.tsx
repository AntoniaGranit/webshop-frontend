const Hero: React.FC = () => {
  return (
    <main className="bg-[url('/hero-image.jpg')] bg-cover flex min-h-screen flex-col items-center justify-between p-24">
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
          Bringing Nature Home
        </h1>
        <p className='mt-6 text-lg leading-8 text-white'>
          Discover a world of lush greenery and vibrant life! Elevate your space with our curated
          selection of high quality houseplants, designed to breathe new life into your home.
          Explore our collection today and cultivate your indoor oasis.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a
            href='/productlist'
            className='group rounded-md bg-emerald-100/90 px-5 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm hover:bg-emerald-300/90 leading-6'
          >
            <h3 className={`text-l font-semibold`}>
              Browse our plants{' '}
              <span className='h-5 w-5 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                -&gt;
              </span>
            </h3>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
