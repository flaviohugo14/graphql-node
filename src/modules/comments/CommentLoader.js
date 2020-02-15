import Comment from './CommentModel';

export async function saveComment(_, { input }) {
   const comment = await Comment.create(input);
   return comment;
}

export async function getComments(_, { input }) {
  const comment = await Comment.find();
  return comment;
}
