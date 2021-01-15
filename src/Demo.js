import React from 'react';
import Sidebar from './Sidebar';
import './Demo.css';
import BodyDemo from './BodyDemo';

function Demo() {
    return (
        <div className='demo'>
            <div className='demo__body'>
                <Sidebar />
                <BodyDemo />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Demo
