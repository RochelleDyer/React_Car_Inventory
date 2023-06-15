import Background from '../assets/Beetle.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-50 text-orange-800 text-xl rounded'>Punch Buggy Blue, No Punch Back (Gotcha!)</h3>
        </div>
    </div>
  )
}

export default Home