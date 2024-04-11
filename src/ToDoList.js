import { Component } from "react";
import iconOne from './iconOne.png';

export class ToDoList extends Component {
    state = {
        userInput: "",
        tasks: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === "") {
            alert("Please add tasks")
        } else {

        let tasksArray = this.state.tasks;
        tasksArray.push(input);
        this.setState({tasks: tasksArray, userInput: ""})
    }}

    crossedTask(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let tasksArray = this.state.tasks;
        tasksArray = [ ];
        this.setState({tasks: tasksArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
            <div className="ListContainer">

                <input type="text" placeholder="Write a task..."
                onChange={(e) => {this.onChangeEvent (e.target.value)}}
                value={this.state.userInput}></input>
                <button className="btnAdd" onClick={() => this.addItem(this.state.userInput)}>Create Task</button>
                <ul>{this.state.tasks.map((item, index) => (
                    <li onClick={this.crossedTask} key={index}>
                        <img className="iconTask" src={iconOne} width='40px' alt='icon' />{item}</li>
                ))}
                </ul>
                
                <button onClick={() => this.deleteItem()} className="btnDelete">Delete List</button>
            </div>
            </form>
        )
    }

}