import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios"
import HTMLFlipBook from "react-pageflip";
import "./book.css"
function HowToCook() {

    const [Guide, setGuide] = useState({});
    const [Instruction, setInstruction] = useState([]);
    const [recipe, setrecipe] = useState([]);
    const location = useLocation();
    const dishId = location.state;

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
            params: { id: dishId },
            headers: {
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
                'X-RapidAPI-Key': '71d8ac9db8msh765b6e2b1b48a92p1961f6jsn6b2d3bb049ed'
            }
        };

        async function fecthData() {
            await axios.request(options).then(response => {
                setGuide(response.data);
                setInstruction(response.data.instructions)
                setrecipe(response.data.sections[0].components)
            })
        }
        fecthData();

    }, []);

    const Page = React.forwardRef((props, ref) => {
        return (
            <div className="page" ref={ref}>
                <div className="page-content">
                    <h2 className="page-header">Page header - {props.position}</h2>
                    <div className="page-text">{props.children}</div>
                    <div className="page-footer">{props.position + 1}</div>
                </div>
            </div>
        );
    });
    const listStep = Instruction.map((step, i) => {
        //console.log(step.display_text);
        <div className="page" key={i}>
            <div className="page-content">
                <h2 className="page-header">STEP - {step.position}</h2>
                {/* <div className="page-image"></div> */}
                <div className="page-text">{Instruction[step.position - 1].display_text}</div>
                <div className="page-footer">{step.position + 1}</div>
            </div>
        </div>
    })


    return (
        <div className="container">
            <HTMLFlipBook
                width={550}
                height={700}
                minWidth={315}
                maxWidth={1000}
                minHeight={420}
                maxHeight={1350}
                className="demo-book"
            >
                <div className="page page-cover" data-density="hard">
                    <div className="page-content">
                        <div className='py-5'>
                            <h2>{Guide.name}</h2>
                        </div>
                        <div>
                            <img className='img-fluid' src={Guide.thumbnail_url} alt='test' />
                        </div>
                    </div>
                </div>

                {
                    Instruction.map((step) => {
                        //console.log(step.display_text);
                        <div className="page" key={step.position}>
                            <div className="page-content">
                                <h2 className="page-header">STEP - {step.position}</h2>
                                {/* <div className="page-image"></div> */}
                                <div className="page-text">{Instruction[step.position - 1].display_text}</div>
                                <div className="page-footer">{step.position + 1}</div>
                            </div>
                        </div>
                    })
                    // Instruction.forEach(step => (
                    //     <Page position= {step.position}>{Instruction[step.position-1].display_text}</Page>
                    // ))
                }

                <div className="page page-cover" data-density="hard">
                    <div className="page-content">
                        <h2>THE END</h2>
                    </div>
                </div>
            </HTMLFlipBook>
        </div>
    )
}

export default HowToCook;
