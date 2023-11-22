import React from 'react'

const App = () => {
  return (
    <div className='bg-secondary bg-opacity-25 p-4'>
      <div className='container p-2' style={{backgroundColor:"#ebf0f4"}}>
      <div className='ms-3 px-5 d-flex justify-content-between align-items-center'>
        <h3 className=''>Magnabox Private limited</h3>
        <div className='d-flex align-items-center'>
          <img src="https://leadgenapp.io/wp-content/uploads/2022/03/9749e543e98c69ca76d4798c83a6f057.png" width={40} alt="" />
          <span className='fs-3 fw-semibold'>3sigma</span>
        </div>
      </div>
      <div className='ms-3 px-5 mt-4 d-flex justify-content-between align-items-center mb-5'>
        <p className='fs-5 fw-semibold'>Add new lead form</p>
         <button className='border border-dark bg-transparent text-danger fw-bold p-1 px-4 rounded'>Cancel</button>
      </div>
      <div className='mt-2 px-5'>
        <label className='ms-3 fw-semibold'>Lead name :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 py-2'>
         <i style={{position:"absolute",left:"25px", zIndex:"999"}} class="ri-user-3-line  text-primary fw-bold fs-5"></i> <input style={{position:"absolute"}} className=' ms-3 col-10 ps-5 form-control  fw-semibold ' type="text" placeholder='Enter lead name' />
          </div>
      </div>
      <div className='mt-3 px-5'>
        <label className='ms-3 fw-semibold'>Email ID :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 py-2'>
         <i style={{position:"absolute",left:"25px", zIndex:"999"}} class="ri-mail-fill  text-primary fw-bold fs-5"></i> <input style={{position:"absolute"}} className=' ms-3 col-10 ps-5 form-control  fw-semibold ' type="text" placeholder='Example@anymail.com' />
          </div>
      </div>
      <div className='mt-3 px-5'>
        <label className='ms-3 fw-semibold'>Phone Number :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 py-2'>
         <i style={{position:"absolute",left:"25px", zIndex:"999"}} class="ri-phone-fill  text-primary fw-bold fs-5"></i> <input style={{position:"absolute"}} className=' ms-3 col-10 ps-5 form-control  fw-semibold ' type="text" placeholder='+911234567890' />
          </div>
      </div>
      <div className='mt-3 px-5'>
        <label className='ms-3 fw-semibold'>Address :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 py-2'>
         <i style={{position:"absolute",left:"25px", zIndex:"999"}} class="ri-global-line  text-primary fw-bold fs-5"></i> <input style={{position:"absolute"}} className=' ms-3 col-10 ps-5 form-control  fw-semibold ' type="text" placeholder='Gurugram, India' />
          </div>
      </div>
      <div className='d-flex justify-content-center'>
        <img className='rounded mt-4 ms-4 col-10' src="https://cache.careers360.mobi/media/colleges/staticmap/2023/5/17/7018.png"  height={200} alt="" />
      </div>
      <div className='mt-3 px-5 '>
        <label className='ms-3  fw-semibold'>Sale value :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 py-2'>
         <i style={{position:"absolute",left:"25px", zIndex:"999"}} class="ri-exchange-dollar-line  text-primary fw-bold fs-5 "></i> <input style={{position:"absolute"}} className='ms-3  col-10 ps-5 form-control  fw-semibold ' type="text" placeholder='50,00,000' />
          </div>
      </div>
      <div className='mt-3 px-5'>
        <label className='ms-3 fw-semibold'>Date :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 py-2'>
         <i style={{position:"absolute",left:"25px", zIndex:"999"}} class="ri-calendar-2-fill  text-primary fw-bold fs-5"></i> <input style={{position:"absolute"}} className=' ms-3 col-10 ps-5 form-control  fw-semibold ' type="text" placeholder='29 August 2023' />
          </div>
      </div>
      <div className='mt-3 px-5'>
        <label className='ms-3 fw-semibold'>Time :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 py-2'>
         <i style={{position:"absolute",left:"25px", zIndex:"999"}} class="ri-time-line  text-primary fw-bold fs-5"></i> <input style={{position:"absolute"}} className=' ms-3 col-10 ps-5 form-control  fw-semibold ' type="text" placeholder='20:21 pm' />
          </div>
      </div>
      <div className='mt-3 px-5'>
        <label className='ms-3 fw-semibold'>Option :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 '>
         <i style={{position:"absolute",left:"25px", zIndex:"999"}} class="ri-menu-line  text-primary fw-bold fs-5"></i> <select className=' ms-3 col-10 ps-5 form-control  fw-semibold '>
         <option disabled>Select Option</option>
          <option>India</option>
          <option>Australia</option>
          <option>America</option>
          <option>China</option>
          </select>
          </div>
      </div>
      <div className='mt-3 px-5'>
        <label className='ms-3 fw-semibold'>Products :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 '>
         <i style={{position:"absolute",left:"25px", zIndex:"999"}} class="ri-menu-line  text-primary fw-bold fs-5"></i> <select className=' ms-3 col-10 ps-5 form-control  fw-semibold '>
         
          <option>Coametic</option>
          <option>Home</option>
          <option>Electric</option>
          <option>Agriculture</option>
          </select>
          </div>
      </div>
      <div className='mt-3 px-5'>
        <label className='ms-3 fw-semibold'>Note :</label>
        <div style={{position:"relative"}} className='d-flex align-items-center mt-4 py-2'>
         <textarea rows={3} style={{position:"absolute"}} className=' ms-3 mt-5  col-10 ps-5 form-control  fw-semibold ' type="text" placeholder='Enter note' />
          </div>
      </div>
      <div className='d-flex justify-content-center'>
      <button className='border border-none bg-dark  bg-opacity-75 fw-semibold text-light col-11 ms-4 p-2 rounded' style={{marginTop:"10vmax"}}>Add lead</button>
      </div>
      </div>
    </div>
  )
}

export default App