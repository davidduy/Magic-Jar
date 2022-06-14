import React, { useEffect, useState, forwardRef } from 'react';
import HTMLFlipBook from "react-pageflip";
import "./book.css"

// const PageCover = React.forwardRef((props, ref) => {
//     return (
//         <div className="page page-cover" ref={ref} data-density="hard">
//             <div className="page-content">
//                 <h2>{props.children}</h2>
//             </div>
//         </div>
//     );
// });

// const Page = React.forwardRef((props, ref) => {
//     return (
//         <div className="page" ref={ref}>
//             <div className="page-content">
//                 <h2 className="page-header">STEP - {props.number}</h2>
//                 <div className="page-image"></div>
//                 <div className="page-text">{props.children}</div>
//                 <div className="page-footer">{props.number + 1}</div>
//             </div>
//         </div>
//     );
// });

function Book(GuideData, Instructions, recipes) {

    console.log(GuideData.name)
    return (
        <div className='container'>
            <HTMLFlipBook
                width={550}
                height={700}
                minWidth={315}
                maxWidth={1000}
                minHeight={420}
                maxHeight={1350}
                maxShadowOpacity={0.5}
                showCover={true}
                className="demo-book"
            >
                <div className="page page-cover" data-density="hard">
                    <div className="page-content">
                        <div className='py-5'>
                            <h2>{GuideData.name}</h2>
                        </div>
                        <div>
                            <img className='img-fluid' src={GuideData.thumbnail_url} alt='test' />
                        </div>
                    </div>
                </div>

                {
                    <div className="page">
                        <div className="page-content">
                            <h2 className="page-header">STEP - </h2>
                            <div className="page-image"></div>
                            <div className="page-text"></div>
                            <div className="page-footer"></div>
                        </div>
                    </div>

                }

                <div className="page page-cover" data-density="hard">
                    <div className="page-content">
                        <h2>THE END</h2>
                    </div>
                </div>
            </HTMLFlipBook>
        </div>
    );

}
export default Book;