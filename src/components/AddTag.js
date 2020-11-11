import React, { Component } from 'react';
import styled from 'styled-components';

class AddTag extends Component {
    constructor(props){
        super(props)
    }

    pushTagToArray(e){
    e.preventDefault();

    let newTag = this.tagInput.value;
    this.props.addTag(newTag, this.props.studentId)
    this.tagInput.value = "";
    }

    render() {
        const { tagArray } = this.props;
        const tagList = tagArray && tagArray.filter(tag => tag.id === this.props.studentId) || [];

        return ( 
            <Wrapper>
                <ul className = "added-tag-container">
                    {tagList.map((tag, id) => {
                        return <li key = {id} className="added-tag">{tag.newTag}</li>
                    })}
                </ul>

                <form onSubmit={this.pushTagToArray.bind(this)}>
                   <input
                        className = "add-tag-input"
                        ref = {(value) => this.tagInput = value}
                        placeholder = "Enter tag..."
                    /> 
                </form>
            </Wrapper>
        );
    }
}
 
export default AddTag;

const Wrapper = styled.section`
    

    .add-tag-input {
        margin: 10px;
        font-family: "Montserrat";
        padding: 5px;
        border: none;
        border-bottom: 1px solid black;
        position: relative;
        
    }

    .add-tag-input:focus{
        outline: none;
    }

    .added-tag{
        background-color: lightblue;
        
        
        float: left;
        padding: 10px 20px;
        color: white;
        margin: 10px;
        display: flex;
        border-radius: 10px;
        
    }

    .add-tag-btn{
        font-family: "Montserrat";
        padding: 10px;
        border: none;
        border-radius: 10px;
        font-variant: small-caps;
        cursor: pointer;
        font-size: 16px;
        background-color: lightBlue;
        color: black;
        
    }

    .add-tag-btn:focus{
        outline: none;
    }
`
