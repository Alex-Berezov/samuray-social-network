import {connect} from "react-redux";
import RightSidebar from "./RightSidebar";


const mapStateToProps = (state) => {
    return {
        friendOnline: state.RightSidebarPart.friendOnline
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const RightSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(RightSidebar)

export default RightSidebarContainer;