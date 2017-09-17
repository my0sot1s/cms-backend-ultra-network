import Stories from '../../../../models/Stories'


export const getStory = async (root, { id }, context) => {
  return await Stories.findById(id).exec()
}

export const getStories = async () => {
  return await Stories.find().exec()
}

export default { getStories, getStory }