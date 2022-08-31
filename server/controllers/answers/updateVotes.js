const { updateVotesQuery } = require('../../database/queries');
// const joi = require('');

const updateVotes = (req, res, next) => {
  const { votes } = req.body;

  const { answerId } = req.params;
  console.log('here is add user controller', answerId, votes);
  updateVotesQuery({
    answerId, votes,
  })
    .then((data) => res.status(200).json({ message: 'Answer votes is updated successfully', data: data.rows[0] }))
    .catch((err) => next(err));
};

module.exports = updateVotes;
