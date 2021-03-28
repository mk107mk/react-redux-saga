const initialState={
    isLoggedIN: false,
    info: null,
}

const Action= {
    Types: {
        UPDATE_STATE: '@@USER/UPDATE_STATE',
        GET_USERS: 'GET_USERS'
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        getUsers: () => ({
            type: Action.Types.GET_USERS
        })
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return{
                ...state,
                ...action.props
            }
        }

    }

}

export {reducer, Action}

//initialstate와 action을 정의한다
//reducer는 state와 action을 인자로 받는다
//action에는 type과 creators가 있다
//creators = 액션들을 만들어내는 함수
//store에 state,dispatch 있음 , dispatch의 인자로 action ->reducer로 쏴줌
//reducer는 현재 state와 쏴준 action을 콜백으로 받는다.

//Action.Creators.updateState();
//type의 종류가 들어잇는 object를 리턴한다
//{ type: '@@APP/UPDATE_STATE'}

