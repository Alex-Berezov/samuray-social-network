import {connect} from "react-redux";
import Timeline from "./Timeline";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const TimelineContainer = connect(mapStateToProps, mapDispatchToProps)(Timeline);

export default TimelineContainer;