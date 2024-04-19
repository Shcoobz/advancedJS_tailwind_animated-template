function SplashPage() {
  return (
    <div
      className='relative pt-16 pb-32 flex content-center items-center justify-center'
      style={{ minHeight: '75vh' }}>
      <div
        className='absolute top-0 w-full h-full bg-center bg-cover'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1706864318540-dd0d085ccba5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA)',
        }}>
        <span
          id='blackOverlay'
          className='w-full h-full absolute opacity-75 bg-black'></span>
      </div>
      <div className='container relative mx-auto'>
        <div className='items-center flex flex-wrap'>
          <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
            <div className='pr-12'>
              <h1 className='text-white font-semibold text-5xl'>
                Welcome your epiphany.
              </h1>
              <p className='mt-4 text-lg text-gray-300'>
                Lorem ipsum dolor sit. Eum totam aspernatur aliquam praesentium aperiam
                magni, dignissimos, atque incidunt fuga nulla distinctio eligendi enim
                placeat nesciunt, soluta maxime nihil ipsa minus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
