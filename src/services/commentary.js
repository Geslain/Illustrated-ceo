const commentaries= [
    {
        id: 1,
        author: "Ben",
        text: "Great job",
        date: new Date().toDateString()
    },
    {
        id: 2,
        author: "Glen",
        text: "Omg nice !",
        date: new Date().toDateString()
    }
]

const commentaryService = {
    getCommentaryList() {
        return commentaries
    }
}

export default commentaryService
