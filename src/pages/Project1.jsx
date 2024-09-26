import React from 'react'

function Project() {
  return (
    <div className='flex flex-col px-14  md:flex-row pt-40 pb-16 content-centre justify-evenly' id='project'>
      <div className="mb-6 md:card card-compact bg-base-100 w-96 shadow-xl ">
  <figure>
    <img
      src="https://is5-ssl.mzstatic.com/image/thumb/Purple71/v4/f4/0b/cd/f40bcd3b-e5ea-8e99-1b55-9e86b10d72db/mzl.jytiqsix.png/1200x630wa.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Dino Game</h2>
    <p className="pb-5">It is the Dino game by using JavaScript</p>
    <div className="card-actions justify-center">
     
    <a className="btn btn-primary hover:bg-neutral-900 text-slate-100"  target='blank' href="https://github.com/Keshavprasath8/Offline-Dino">Github</a>
    <a className="btn btn-primary hover:bg-neutral-900 text-slate-100"  target='blank' href="https://stellar-cranachan-9cbf34.netlify.app/">Netlify</a>
    </div>
  </div>
</div>
{/* second div */}
 <div className="mb-6 md:card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img className='h-48 w-94'
      src="https://th.bing.com/th/id/OIP.MAWqNp_xCxMuaiWZDg113AHaE8?w=540&h=360&rs=1&pid=ImgDetMain"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Rice store</h2>
    <p>By using HTML/CSS to created the rice store</p>
    <div className="card-actions justify-center">
    <a className="btn btn-primary hover:bg-neutral-900 text-slate-100"  target='blank' href="https://github.com/Keshavprasath8/Rice-store">Github</a>
    <a className="btn btn-primary hover:bg-neutral-900 text-slate-100"  target='blank' href="https://marvelous-moonbeam-557c58.netlify.app">Netlify</a>
    </div>
  </div>
</div>
{/* third */}
 <div className="mb-6 md:card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img className='h-48'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5E0uZ_tyG5RLftK-kNv-3K2LUa9W4OLFHg&s"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Portfolio</h2>
    <p>This portfolio site is made by HTML/CSS/javaScript</p>
    <div className="card-actions justify-center">
    <a className="btn btn-primary hover:bg-neutral-900 text-slate-100"  target='blank' href="https://github.com/Keshavprasath8/Portfolio">Github</a>
    <a className="btn btn-primary hover:bg-neutral-900 text-slate-100" target='blank' href="https://tourmaline-profiterole-1d57f9.netlify.app">Netlify</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Project ;