module.exports = function(){

	return({
		create:{
					meta: {},
					duration:0,
					isPublic: true,
					questionText:null,
					answerText:null,
					questionType: 'text',
					questions:[]
		},
	   test:{
			 		showTimer: false,
          showAnswer:false, // Display the Answer
          currentIndex:0, // Current index of the question array
          timerInterval:0, // Current tick of count down timer to show answer, 0 will not implement timer
					isComplete:false, // have all questions been displayed
					timeout:null, // setTimeout for showAnswer
					timer: null, //setInterval for seconds timer
					questions:[], // Array of questions
					meta:{},  // Meta information for the test
					searchResults:[]  // Results of filtered test search
        }
	});
};
