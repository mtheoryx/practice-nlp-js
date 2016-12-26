var natural = require('natural');
var fs = require('fs');
var classifier = new natural.BayesClassifier();

fs.readFile('training_data.json', 'utf-8', function(err, data){
    if (err){
        console.log(err);
    } else {
        var trainingData = JSON.parse(data);
        train(trainingData);
    }
});

function train(trainingData){
    console.log("Training");
    trainingData.forEach(function(item){
        classifier.addDocument(item.text, item.label);
    });
    var startTime = new Date();
    classifier.train();
    var endTime = new Date();
    var trainingTime = (endTime-startTime)/1000.0;
    console.log("Training time:", trainingTime, "seconds");
    loadTestData();
}

function loadTestData(){
    console.log("Loading test data");
    fs.readFile('test_data.json', 'utf-8', function(err, data){
        if (err){
            console.log(err);
        } else {
            var testData = JSON.parse(data);
            testClassifier(testData);
        }
    });
}

function testClassifier(testData){
    console.log("Testing classifier");
    var numCorrect = 0;
    testData.forEach(function(item){
        var labelGuess = classifier.classify(item.text);
        if (labelGuess === item.label){
            numCorrect++;
        }
    });
    console.log("Correct %:", numCorrect/testData.length);
}

/*
Training
Training time: 16.083 seconds
Loading test data
Testing classifier
Correct %: 0.8863636363636364
* */

