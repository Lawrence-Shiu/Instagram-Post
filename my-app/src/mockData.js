export const mockPosts = [
  {
    id: 1,
    name: 'Sam',
    location: 'Tokyo, Japan',
    caption: 'Fall is coming 🍁🍁🍁',
    postLiked: true,
    numberOfLikes: 43,
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    img:
      'https://images.unsplash.com/photo-1539946309076-4daf2ea73899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&w=1000&q=80',
    comments: [
      {
        id: 1,
        avatar:
          'https://vignette.wikia.nocookie.net/thegamesrp/images/2/26/Aang.jpg/revision/latest?cb=20141124183149',
        author: 'Lawrence',
        likes: 3,
        description: "wow, that's beautiful! ❤️",
        replies: [],
        liked: false,
        lastReplyId: 0,
        timeElapsed: '10h',
      },
      {
        id: 2,
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        author: 'Tony',
        likes: 1,
        description: 'Killing it with these photos 👌🔥',
        replies: [
          {
            id: 1,
            avatar:
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            author: 'Sam',
            likes: 1,
            description: 'thanks!',
            liked: false,
            timeElapsed: 'now',
          },
        ],
        lastReplyId: 1,
        liked: false,
        timeElapsed: '8h',
      },
      {
        id: 3,
        avatar:
          'https://photographymag.tn/wp-content/uploads/2017/07/portrait-photography-inspiration-r.jpg',
        author: 'Kim',
        likes: 0,
        description: 'where is this?',
        replies: [],
        liked: false,
        lastReplyId: 0,
        timeElapsed: '4h',
      },
    ],
  },
];
