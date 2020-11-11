import React, { useState } from 'react';
import styled from 'styled-components';
import AddTag from './AddTag';

function ExpandView(props) {

    const [setExpand, setExpandState] = useState("fas fa-plus");
    const [setDropdown, showDropdownState] = useState("none");

    const toggleExpand = () => {
        setExpandState(setExpand === "fas fa-plus" ? "fas fa-minus" : "fas fa-plus");
        showDropdownState(setExpand === "fas fa-minus" ? "none" : "block")
    }

    const toggleBtn = (
        <div>
            <div className="btn-container">
                <button className={`expand-btn ${setExpand}`} onClick={toggleExpand}></button>
            </div>
            <div className="toggled-items" style = {{ display:`${setDropdown}`, transition: "all 0.5s ease"}}>
                <p>{props.grades.map((grade, index) => <li className="test-score" key = {index}>Test {index}: {grade}%</li>)}</p>
                
                <AddTag 
                    addTag = {props.addTag}
                    studentId = {props.studentId}
                    tagArray = {props.tagArray}
                />
            </div>
        </div>
    );

    return (
        <Wrapper>
            {toggleBtn}      
        </Wrapper>
    );
}
 
export default ExpandView;

const Wrapper = styled.section`
    .btn-container {
        top: 0px;
        right: 0px;
        position: absolute;
        
    }

    .expand-btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        max-width: 100%;
        height: auto;
        margin: 5px;
    }

    .active{
        transform: rotate(180deg);
        transition: all 0.3s ease
    }

    .expand-btn:focus {
        outline: none
    }

    .toggled-items {
        transition: all 0.4s ease;
    }

    

    
`