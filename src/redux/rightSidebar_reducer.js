import Chewbacca from '../assets/img/Chewbacca.jpg';
import Solo from '../assets/img/Solo.jpg';
import Leia from '../assets/img/Leia.jpg';

let initialState = {
    friendOnline: [
        {image: Chewbacca, name: 'Chewbacca', role: 'Friend'},
        {image: Solo, name: 'Han Solo', role: 'Friend'},
        {image: Leia, name: 'Princes Leia', role: 'Friend'}
    ]
};

const rightSidebarReducer = (state = initialState, action) => {

    return state;
};

export default rightSidebarReducer;