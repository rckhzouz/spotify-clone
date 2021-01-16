import React from 'react';
import Sidebar from './Sidebar';
import './Demo.css';
import BodyDemo from './BodyDemo';
import FooterDemo from './FooterDemo';

function Demo() {
    return (
        <div className='demo'>
            <div className='demo__body'>
                <Sidebar />
                <BodyDemo />
            </div>
            <FooterDemo />
        </div>
    )
}

export default Demo
