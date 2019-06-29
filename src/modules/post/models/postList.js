const postList = posts => {
    return posts.map(post => {
        return {
            id: post.id,
            title: post.title,
            body: post.body
        }
    })
}

export default postList;