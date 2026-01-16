import React from "react";
import { toast } from 'react-toastify';
import "./AddTodo.scss";


class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickAddTodo = () => {
        if (!this.state.title) {
            toast.error('Missing title!')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,


        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (


            <div className='add-todo'>
                <div className='input-wrapper'>
                    <input type='text'
                        placeholder="Enter a new Todo"
                        value={title}
                        onChange={(event) => this.handleOnChangeTitle(event)}
                        onKeyDown={(e) => e.key === 'Enter' && this.handleClickAddTodo()}
                    />
                </div>
                <button className='add'
                    onClick={() => this.handleClickAddTodo()}
                >Add</button>
            </div>

        )


    }


}

export default AddTodo;