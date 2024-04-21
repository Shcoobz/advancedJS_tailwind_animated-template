/**
 * TryingNewThings component that encourages innovation and experimentation.
 * It includes motivational text and visually appealing elements to inspire visitors.
 * @returns {React.Component} - A visually engaging section that encourages visitors to explore new ideas and innovations.
 */
function TryingNewThings() {
  return (
    <section className='bg-gray-300 py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='md:w-5/12 px-4 mr-auto ml-auto'>
            <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100'>
              <i className='fas fa-star text-xl'></i>
            </div>
            <h3 className='text-3xl mb-2 font-semibold leading-normal'>
              Trying New Things is Great!
            </h3>
            <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolores?
              Saepe aspernatur necessitatibus explicabo.
            </p>
            <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At repellat
              obcaecati tenetur officia distinctio! A voluptates numquam, neque libero
              molestiae natus facere temporibus!
            </p>
            <a href='https://www.example.com' className='font-bold text-gray-800 mt-8'>
              Check out more!
            </a>
          </div>
          <div className='md:w-4/12 px-4 mr-auto ml-auto'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-orange-500'>
              <img
                alt='...'
                src='https://images.unsplash.com/photo-1682686580950-960d1d513532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA'
                className='w-full align-middle rounded-t-lg'
              />
              <blockquote className='relative p-8 mb-4'>
                <svg
                  preserveAspectRatio='none'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 583 95'
                  className='absolute left-0 w-full block'
                  style={{ height: '95px', top: '-94px' }}>
                  <polygon
                    points='-30,95 583,95 583,65'
                    className='text-orange-500 fill-current'></polygon>
                </svg>
                <h4 className='text-xl font-bold text-white'>More Than Meets The Eye</h4>
                <p className='text-md font-light mt-2 text-white'>
                  I feel like I've mentioned before that I'm a robot and that continues to
                  be true, even to this day.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TryingNewThings;
