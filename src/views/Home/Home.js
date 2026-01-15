import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import channel from "../../assets/images/channel.jpg"
import { connect } from "react-redux";
import "./Home.scss"


class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    render() {
        console.log('>>> check props redux: ', this.props.dataRedux);

        return (
            <>
                <div className="head">Hello from hompage with me!!</div>
                <div>RANDOM COLOR</div>
                <div>
                    <img src={channel} style={{ width: '800px', height: '450px', marginTop: '20px' }} alt="thumbnail" />
                </div>
            </>

        )
    }
}

// export default withRouter(Home);


const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }

}

export default connect(mapStateToProps)(Color(Home));