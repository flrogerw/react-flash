import initialState from '../initialstate';

module.exports = function(state,action){
   var newstate = Object.assign({},state);
   switch(action.type){
      case('UPDATE_DURATION'):
        newstate.duration = action.value;
        return newstate;
      case('UPDATE_IS_PUBLIC'):
        newstate.isPublic = action.value;
        return newstate;
      case('UPDATE_QUESTION_TYPE'):
        newstate.questionType = action.value;
        return newstate;
      case('UPDATE_QUESTION_TEXT'):
        newstate.questionText = action.text;
        return newstate;
      case('UPDATE_ANSWER_TEXT'):
        newstate.answerText = action.text;
        return newstate;
       default:
        return state || initialState().create;
   }
};
