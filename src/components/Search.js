import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
    
    filterUpdate(event){
        event.preventDefault();
        const val = this.nameInput.value;
        this.props.updateSearchResults(val)
    }

    filterTags = (event) => {
        event.preventDefault();
        const val = this.tagInput.value;
        this.props.updateTagResults(val)
    }

    render() { 
        return ( 
            <Wrapper>
                <form className = "">
                    <input 
                        className = "search-input"
                        type = "search"
                        id = "name-input" 
                        ref = {(value) => this.nameInput = value}
                        placeholder = "Search by name" 
                        onChange = {this.filterUpdate.bind(this)}
                    />
                </form>

                <form onSubmit={this.filterTags}>
                    <input 
                        className = "search-input"
                        type = "search"
                        id = "tag-input" 
                        ref = {(value) => this.tagInput = value}
                        placeholder = "Search by tag" 
                        onChange={this.filterTags}
                    />
                </form> 
            </Wrapper>
         );
    }
}
 
export default Search;

const Wrapper = styled.section`
    .search-input {
        font-family: "Montserrat";
        font-size: 20px;
        height: 50px;
        width: 100%;
        border: none;
        border-bottom: 1px solid lightGray;
        padding-left: 10px;
        position: relative;
    }

    .search-input:focus {
        outline: none;
        border-bottom: 1px solid black;
    }

    .form-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`