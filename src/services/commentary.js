// Mocked data
let commentaries= [
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
    },
    {
        id: 3,
        author: "Logan",
        text: "Anagrams are the best!",
        date: new Date().toDateString()
    }
]

/**
 * Commentary service, faking rest api calls
 *
 * @type {{addCommentary(*=): (*|undefined), getCommentaryList(): *}}
 */
const commentaryService = {
    getCommentaryList() {
        // As we use a variable as memory, it's important to return a new object(to simulate api response)
        // So there's no risk variable reference is stored
        return [...commentaries]
    },
    addCommentary(commentary) {
        try {
            commentary.id = commentaries.length + 1
            commentaries.push(commentary)
            return new Promise((res) =>{
                res(commentary)
            })
        } catch (e) {
            throw e
        }
    }
}

export default commentaryService
