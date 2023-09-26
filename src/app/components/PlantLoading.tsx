const Loading: React.FC = () => {
  return (
    <section className='pl-32 pt-32'>
      <div className='w-9/12 flex'>
        <div className='flex-column w-8/12'>
          <div className='rounded-l bg-gray-200 h-400 w-400' />
        </div>
        <div className='flex-column w-8/12 self-center'>
          <div className='shadow rounded-md p-4 max-w-sm w-full mx-auto'>
            <div className='animate-pulse flex space-x-4'>
              <div className='rounded-full bg-slate-200 h-10 w-10'></div>
              <div className='flex-1 space-y-6 py-1'>
                <div className='h-2 bg-slate-300 rounded'></div>
                <div className='space-y-3'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='h-2 bg-slate-300 rounded col-span-2'></div>
                    <div className='h-2 bg-slate-300 rounded col-span-1'></div>
                  </div>
                  <div className='h-2 bg-slate-300 rounded'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
