import StoryContent from '../../../../models/StoryContent'


export const getStoryContent = async (root, { id }, context) => {
  return await StoryContent.findById(id).exec()
}

export const getStoryContents = async () => {
  return await StoryContent.find().exec()
}

export default { getStoryContent, getStoryContents }