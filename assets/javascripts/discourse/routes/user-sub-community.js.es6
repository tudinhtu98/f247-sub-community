import DiscourseRoute from 'discourse/routes/discourse';


export default DiscourseRoute.extend({
  model() {
    const listCommunity = [
        {
            id: 1,
            name: "Cộng Đồng Nokia",
            thumbnail: "https://www.w3schools.com/howto/img_forest.jpg",
            members: 200,
            topics: 123
        },
        {
            id: 2,
            name: "Cộng Đồng Nokia",
            thumbnail: "https://www.w3schools.com/howto/img_forest.jpg",
            members: 200,
            topics: 123
        },
        {
            id: 3,
            name: "Cộng Đồng Nokia",
            thumbnail: "https://www.w3schools.com/howto/img_forest.jpg",
            members: 200,
            topics: 123
        },
        {
            id: 4,
            name: "Cộng Đồng Nokia",
            thumbnail: "https://www.w3schools.com/howto/img_forest.jpg",
            members: 200,
            topics: 123
        },
        {
            id: 5,
            name: "Cộng Đồng Nokia",
            thumbnail: "https://www.w3schools.com/howto/img_forest.jpg",
            members: 200,
            topics: 123
        },
    ];
    return {
        listCommunity
    }
  }
});