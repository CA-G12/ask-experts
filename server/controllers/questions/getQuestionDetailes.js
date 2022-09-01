const { join } = require('path');
const { getByIdQuery,getQuestionAnswersQuery } = require('../../database/queries');

const questionsDetailes = (req, res) => {
  const id = req.params.questionId;
 // console.log('*****',id);
  
 getByIdQuery(id).then((data) => {
   // console.log(question.rows[0]);
    getQuestionAnswersQuery(id).then((_data)=>{
      //console.log(answers.rows)
      res.json({
        namee:'sami',
      })
      console.log('success')
    }).catch(()=>{console.log('database errrorrr')})

  })
    .catch((err) => {
      console.log(err);
    });
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'detailes.html'));
};

module.exports = questionsDetailes;
