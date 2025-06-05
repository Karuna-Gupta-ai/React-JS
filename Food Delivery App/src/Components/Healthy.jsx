import React from 'react'
import HProduct from './HProduct'
import Turnip from '../assets/Images/turnip.png'
import Celery from '../assets/Images/Celery.png'
import A_Patti  from '../assets/Images/A_Patti.png'
import Veg1  from '../assets/Images/veg1.jpg'
import Veg2  from '../assets/Images/veg2.jpg'
import Veg3  from '../assets/Images/veg3.jpg'

const Healthy = () => {
  return (
    <div className="container-fluid px-4 py-5 healthy">
        <h2 className='text-center display-4 mt-4 fw-bold'>
            It's Healthy Eating Made Easy
        </h2>
        <div classNam='container mt-5'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <HProduct 
                Image = {Veg1}
                Image2 = {Turnip}
                Title = "Delicious!!!"
                Description = "Let food be the medicine and medicine be the food."
            />
            <HProduct 
                Image = {Veg2}
                Image2 = {A_Patti}
                Title = "Delicious!!!"
                Description = "To eat is a necessity, but to eat intelligently is an art."
            />
            <HProduct 
                Image = {Veg3}
                Image2 = {Celery}
                Title = "Delicious!!!"
                Description = "Every time you eat is an opportunity to nourish your body."
            />
        </div>
        </div>
    </div>
  )
}

export default Healthy