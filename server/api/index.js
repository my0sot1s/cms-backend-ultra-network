export default [
  {
    Stories: require('./Stories').default,
    method: [{ method: "stories", verb: "get" }]
  },
  {
    StoryContent: require('./StoryContent').default,
    method: [{ method: "storycontent", verb: "get" }]
  },
  {
    Posts: require('./Posts').default,
    method: [{ method: "post/{postId}", verb: "get" }]
  },
  {
    Center: require('./Center').default,
    method: [{ method: "center", verb: "get" }]
  },
  {
    Foods: require('./Foods').default,
    method: [{ method: "foods", verb: "get" }]
  },
  {
    Blog: require('./Blog').default,
    method: [
      { method: "blog", verb: "get" },
      { method: "blog", verb: "post" }
    ]
  },
  {
    User: require('./User').default,
    method: [
      { method: "register", verb: "post" },
      { method: "login", verb: "post" },
    ]
  },
]