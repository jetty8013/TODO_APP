const initState = {
  yy: new Date().getFullYear(),
  mm: new Date().getMonth()+1,
  dd: new Date().getDate(),
  22:['당근마켓 거래하기','프로젝트 진행하기','피카츄 잡아오기'],
  9:['롤 한판 하기','피카츄 잡아오기']
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
      case 'CREATE_TODO':
        return state.dd
      case 'DELETE_TODO':
        return state.dd  
      case 'UPDATE_TODO':
        return state.dd
      case 'READ_TODO':
        return {...state}
      case 'UPDATE_DAY':
        return {...state, dd: action.payload}
      default:
          return state;
  }
}

export default reducer