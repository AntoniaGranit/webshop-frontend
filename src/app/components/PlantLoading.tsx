const Loading: React.FC = () => {
  return (
    <section className='pl-32 pt-32'>
      <div className='w-9/12 flex'>
        <div className='flex-column w-8/12'>
          <div className='rounded-l bg-gray-200 h-400 w-400' />
        </div>
        <div className='flex-column w-8/12 self-center'>
          <div className='flex-column pb-4'>
            <p className={`text-2xl font-semibold pb-1`}>blablabla</p>
            <div className='flex-column border-t border-gray-200 pb-3' />
            <p>blablabla</p>
            <p>blablabla</p>
          </div>
          <div className='pb-4'>
            <p></p>
          </div>
          <div className='pb-3'>
            <p>Amount:</p>
            <div className='block w-3/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset'></div>
          </div>
          <div className='bg-gray-200 text-gray-200 font-bold py-2 px-4 rounded-xl'>
            Add to cart
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
