let state = {
    profilePage: {
        tabsNav: [
            {tabName: 'timeline', navItemName: 'Timeline'},
            {tabName: 'about', navItemName: 'About'},
            {tabName: 'friends', navItemName: 'Friends'},
            {tabName: 'photos', navItemName: 'Photos'}
        ],
        profile: [
            {
                SinglePostContent: [
                    {
                        id: 1,
                        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
                            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n' +
                            'when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n' +
                            'It has survived not only five centuries.'
                    },
                ],
                SinglePostInfo: [
                    {likesCount: 21, commentsCount: 14, shareCount: 5},
                ]
            }
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Chewbacca'},
            {id: 2, name: 'Han Solo'},
            {id: 3, name: 'Princes Leia'}
        ],
        message: [
            {message: 'Some Chewbacca messages'},
            {message: 'Some Han Solo message'},
            {message: 'Some Princes Leia message'}
        ]
    },
    RightSidebarPart: {
        friendOnline: [
            {image: "img/Chewbacca.jpg", name: 'Chewbacca', role: 'Friend'},
            {image: "img/Solo.jpg", name: 'Han Solo', role: 'Friend'},
            {image: "img/Leia.jpg", name: 'Princes Leia', role: 'Friend'}
        ]
    }
};

export default state;