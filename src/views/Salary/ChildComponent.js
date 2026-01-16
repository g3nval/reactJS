import React from 'react';


// This component demonstrates how to handle form input in React.
class ChildComponent extends React.Component {


    state = {
        showpeople: false,
    }
    handleChangefirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }


    handleChangelastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log('>>>call handleSubmit: ', this.state);
        // Here you can handle the form submission, e.g., send data to a server
        event.preventDefault(); // Prevent the default form submission behavior
    }
    handleshowhide = () => {
        this.setState({
            showpeople: !this.state.showpeople
        })
    }

    handleDelete = (id) => {
        console.log('>>>check delete id: ', id);
        this.props.deletePerson(id);
    }

    render() {

        let { arraypeople } = this.props;
        let { showpeople } = this.state;

        return (
            <>
                <div className='salary-list-container'>
                    {showpeople === false ?
                        <div>
                            <button className='btn-show'
                                onClick={() => this.handleshowhide()}>
                                Show
                            </button>
                        </div>
                        :
                        <>
                            <div className='people-table'>
                                {
                                    arraypeople.map((item, index) => {
                                        if (item.salary >= 1000) {
                                            return (

                                                <div className='table-row' key={item.id}>
                                                    <span className="col-name">{item.name}</span> -
                                                    <span className="col-salary">{item.salary}$</span>
                                                    <button className="btn-delete" onClick={() => this.handleDelete(item)}>Delete</button>
                                                </div>
                                            )

                                        } else {
                                            return (
                                                <div></div> // This will render nothing if salary is less than 1000
                                            )
                                        }

                                    })
                                }
                            </div>
                            <div>
                                <button className='btn-show-hide' onClick={() => this.handleshowhide()}>Hide</button>
                            </div>
                        </>
                    }
                </div>
            </>
        );

    }
}



export default ChildComponent;
