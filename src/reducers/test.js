import initialState from '../initialstate';

module.exports = function(state,action){
   var newstate = Object.assign({},state);
   switch(action.type){
      case('INCREMENT_CURRENT_COUNTER'):
           newstate.currentIndex = (state.currentIndex < (state.questions.length-1))?state.currentIndex+1:state.currentIndex;
           newstate.isComplete = (newstate.currentIndex == (state.questions.length-1))? true: false;
           return newstate;
      case('DECREMENT_CURRENT_COUNTER'):
           newstate.currentIndex = (state.currentIndex==0)?0:state.currentIndex-1;
          newstate.isComplete = (newstate.currentIndex < (state.questions.length-1))? false: true;
          return newstate;
      case('UPDATE_QUESTIONS'):
          newstate.questions = action.questions;
          return newstate;
      case('UPDATE_SHOW_TIMER'):
          newstate.showTimer = action.show;
          return newstate;
      case('UPDATE_SEARCH_RESULTS'):
          newstate.searchResults = action.searchResults;
          return newstate;
      case('UPDATE_SHOW_ANSWER'):
          newstate.showAnswer = action.showAnswer;
          return newstate;
      case('INSERT_TIMER'):
          newstate.timer = action.timer;
          return newstate;
      case('CLEAR_TIMER'):
          clearInterval(state.timer);
          newstate.timer = null;
      case('SET_TIMEOUT'):
          newstate.timeout = action.timeout;
          return newstate;
      case('CLEAR_TIMEOUT'):
          clearTimeout(state.timeout);
          newstate.timeout = null;
          return newstate;
      case('DECREMENT_TIMER_INTERVAL'):
          newstate.timerInterval = (state.timerInterval==0)?0:state.timerInterval-1;
          return newstate;
      case('RESET_TIMER_INTERVAL'):
          newstate.timerInterval = action.value;
          return newstate;
      case('UPDATE_META'):
          newstate.meta = action.meta;
          return newstate;
       case('RESTART'):
          return initialState().test;
       default:
          return state || initialState().test;
   }
};
