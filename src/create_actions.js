module.exports = {
	reset: function(){
		// A normal action creator, returns a simple object describing the action.
		return {type: 'RESTART'};
	},
  onDurationSliderChange: function(value){
		return {type: 'UPDATE_DURATION', value:value};
	},
  updateIsPublic: function(value){
		return {type: 'UPDATE_IS_PUBLIC', value:value};
	},
  updateQuestionType: function(type){
		return {type: 'UPDATE_QUESTION_TYPE', value:type};
	},
  updateQuestionText: function(text){
		return {type: 'UPDATE_QUESTION_TEXT', text:text};
	},
  updateAnswerText: function(text){
		return {type: 'UPDATE_ANSWER_TEXT', text:text};
	},

}
