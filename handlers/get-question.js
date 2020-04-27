const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient;

function getQuestion(questionId) {
    if (typeof questionId === 'undefined' || questionId === '') {
        throw new Error('Question input incomplete');
    } else {
        return docClient.get({
            TableName: 'quiz-questions',
            Key: {
                questionId: questionId
            }
        }).promise()
            .then(result => result.Item);
    }
}

module.exports = getQuestion