import React, { Component } from 'react';
import styled from 'styled-components';
import ExpandView from './ExpandView';
import Search from './Search';


class GetUsers extends Component {
    
    render() {
        if(this.props.loading){
            return <div className = "loading">getting students...</div>
        }

        const filterText = this.props.filterText;
        const filterTag = this.props.filterTags;

        const studentList = this.props.users
            .filter(student => {
                return student.firstName.toLowerCase().indexOf(filterText.toLowerCase().trim()) !== -1 
                    || student.lastName.toLowerCase().indexOf(filterText.toLowerCase().trim()) !== -1
            })
            .filter(student =>
                !filterTag && true || student.userTags && student.userTags.filter(tag => tag.newTag.indexOf(filterTag) > -1).length > 0)
            .map((student, index) => {
                const studentId = student.id
                const parseGrades = student.grades.map(grade => parseInt(grade));
                const gradeAverage = parseGrades.reduce((a, b) => a + b, 0) / student.grades.length;
                const roundGradeAverage = gradeAverage.toFixed(2)
                return <div className="student-li" key={student.id}>
                    <div className="student-profile">
                        <div className="profile-picture">
                            <img src={student.pic} alt="pfp"></img>
                        </div>
                        <div className = "content">
                            <h1 className="student-name">{student.firstName} {student.lastName}</h1>
                            <p>Email: {student.email}</p>
                            <p>Company: {student.company}</p>
                            <p>Skill: {student.skill}</p>
                            <p>Average: {roundGradeAverage}%</p>
                            <ExpandView 
                            grades = {student.grades} 
                            addTag = {this.props.addTag}
                            studentId = {studentId}
                            tagArray = {student.userTags}
                            ></ExpandView>
                        </div>
                    </div>
                </div>
            })
        

        return (
            <Wrapper>
                <div className = "container">
                    <Search
                    
                    filterText = {this.props.filterText}
                    updateSearchResults = {this.props.updateSearchResults}
                    updateTagResults = {this.props.updateTagResults}
                    />
                    {studentList}
                </div>
            </Wrapper>

        );
    }
}
 
export default GetUsers;


const Wrapper = styled.section`

    .loading{
        color: green;
    }

    .container{
        width: 800px;
        height: 600px;
        overflow: hidden;
        overflow-y: scroll;
        background-color: white;
        border-radius: 20px;
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        
    }

    .student-li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .student-profile {
        background-color: white;
        width: 100%;
        
        padding: 20px;
        border: none;
        border-bottom: 1px solid lightGray;
        
        display: flex;
        
        position: relative;
    }

    .profile-picture {
        margin: 10px;
        border: 1px solid lightGray;
        display: flex;
        overflow: hidden;
        justify-content: center;
        height: 130px;
        width: 130px;
        -moz-border-radius: 50%;
        border-radius: 50%
        

    }

    .profile-picture img {
        height: 100%;
        width: 100%;
    }

    .student-name {
        margin: 5px 10px;
        font-family: "Montserrat";
    }

    .student-profile div p{
        margin: 5px 10px;
        font-family: "Montserrat";
    }

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
        transition: all 0.3s ease
        
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

    .test-score{
        margin: 2px;
    }
`



