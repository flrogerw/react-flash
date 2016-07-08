module.exports = {
	reset: function(){
		// A normal action creator, returns a simple object describing the action.
		return {type: 'RESTART'};
	},
  updateQuestions: function(questions){
		return {type: 'UPDATE_QUESTIONS', questions: questions};
	},
	updateMeta: function(meta){
		return {type: 'UPDATE_META', meta: meta};
	},
	updateSearchResults: function(results){
		return {type: 'UPDATE_SEARCH_RESULTS', searchResults: results};
	},
	incrementCurrentIndex: function(){
		return {type: 'INCREMENT_CURRENT_COUNTER'};
	},
	decrementCurrentIndex: function(){
		return {type: 'DECREMENT_CURRENT_COUNTER'};
	},
	updateShowAnswer: function(show=false){
		return {type: 'UPDATE_SHOW_ANSWER', showAnswer:show};
	},
	resetTimerInterval: function(value=0){
		return {type: 'RESET_TIMER_INTERVAL', value:value};
	},
	clearAnswerTimeout: function(){
		return {type: 'CLEAR_TIMEOUT'};
	},
	updateShowTimer: function(show=true){
		return {type: 'UPDATE_SHOW_TIMER', show:show};
	},
	startTimerInterval: function(timer_duration){
		return function(dispatch,getState){
			dispatch({type:'UPDATE_SHOW_ANSWER',showAnswer:false});
			dispatch({type:'CLEAR_TIMER'});
			dispatch({type:'INSERT_TIMER',timer: setInterval(function () {
				dispatch({type: 'DECREMENT_TIMER_INTERVAL'});
			}, 1000)});
			dispatch({type:'SET_TIMEOUT',timeout:setTimeout(function(){
				 dispatch({type:'CLEAR_TIMER'});
				dispatch({type:'UPDATE_SHOW_ANSWER',showAnswer:true});
			},timer_duration*1000)});
	}
}
}
