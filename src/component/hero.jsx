import React from 'react';
import '../App.css'
import '../styles/hero.css'
import UserImg from '../Asset/user.jpg';
import Sidebar from './Sidebar';

const Hero = () => {
    return ( 
        <div className="App">
        <Sidebar />
        <div className="main-content">
            <div className="header-wrapper">
                <div className="header-title">
                    <span>Primary</span>
                    <h2>Dashboard</h2>
                    </div>
                    <div className="user-info">
                        <div className="search-box">
                            <i className='fasolid fa-search'></i>
                            <input type="text" placeholder='Search here' />
                        </div>
                        <img src={UserImg} alt="" />
                    </div>
            </div>

            {/* *** CARD container **** */}
            <div className="card-container">
                <h3 className='main-title'> Todays data</h3>
                <div className="card-wrapper">

                    {/* card 1 */}
                    <div className="payment-card">
                        <div className="card-header">
                            <div className="amount">
                            <span className="title">
                                Payment Amount
                            </span>
                            <span className='amount-value'>
                                $500.00
                            </span>
                            </div>
                            <i className='fas-fa-dollar-sign icon'></i>
                        </div>
                        <span className='card-details'>
                        **** **** **** 3884
                    </span>
                    </div>

                        {/* card 2 */}
                        <div className="payment-card">
                        <div className="card-header">
                            <div className="amount">
                            <span className="title">
                                Payment Amount
                            </span>
                            <span className='amount-value'>
                                $200.00
                            </span>
                            </div>
                            <i className='fas-fa-dollar-sign icon'></i>
                        </div>
                        <span className='card-details'>
                        **** **** **** 3884
                    </span>
                    </div>

                    {/* card 3 */}
                    <div className="payment-card">
                        <div className="card-header">
                            <div className="amount">
                            <span className="title">
                                Payment Amount
                            </span>
                            <span className='amount-value'>
                                $600.00
                            </span>
                            </div>
                            <i className='fas-fa-dollar-sign icon'></i>
                        </div>
                        <span className='card-details'>
                        **** **** **** 3884
                    </span>
                    </div>

                    {/* card 4 */}

                    <div className="payment-card">
                        <div className="card-header">
                            <div className="amount">
                            <span className="title">
                                Payment Amount
                            </span>
                            <span className='amount-value'>
                                $900.00
                            </span>
                            </div>
                            <i className='fas-fa-dollar-sign icon'></i>
                        </div>
                        <span className='card-details'>
                        **** **** **** 3884
                    </span>
                    </div>



                </div>

            </div>
        </div>
        </div>
     );
}
 
export default Hero;