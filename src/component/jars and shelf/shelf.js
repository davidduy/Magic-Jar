import React from 'react';
import "./shelf.css"
import "./jar.css";

import Jar from "./jar"

function Shelf() {
    return (
        <div className='container'>
            <div className="text-center">
                <h1>Choose one to get knowledge from magic</h1>
            </div>
            <div className='py-5'>
                <div className='row row-cols-1 row-cols-md-3 pb-4'>
                    <div className='col d-flex justify-content-xxl-end justify-content-lg-center'>
                        <Jar />
                    </div>
                    <div className='col d-flex justify-content-xxl-center justify-content-lg-center'>
                        <Jar />
                    </div>
                    <div className='col d-flex justify-content-xxl-start justify-content-lg-center'>
                        <Jar />
                    </div>
                </div>
                <div className=" bookshelf mt-5 pt-5"></div>
            </div>
            <div className='py-5'>
                <div className='row row-cols-1 row-cols-md-3 pb-4'>
                    <div className='col d-flex justify-content-xxl-end justify-content-lg-center'>
                        <Jar />
                    </div>
                    <div className='col d-flex justify-content-xxl-center justify-content-lg-center'>
                        <Jar />
                    </div>
                    <div className='col d-flex justify-content-xxl-start justify-content-lg-center'>
                        <Jar />
                    </div>
                </div>
                <div className=" bookshelf mt-5 pt-5"></div>
            </div>
            <div className='py-5 pb-2'>
                <div className='row row-cols-1 row-cols-md-3 pb-4'>
                    <div className='col d-flex justify-content-xxl-end justify-content-lg-center'>
                        <Jar />
                    </div>
                    <div className='col d-flex justify-content-xxl-center justify-content-lg-center'>
                        <Jar />
                    </div>
                    <div className='col d-flex justify-content-xxl-start justify-content-lg-center'>
                        <Jar />
                    </div>
                </div>
                <div className=" bookshelf mt-5 pt-5"></div>
            </div>
        </div>
    );
}

export default Shelf;