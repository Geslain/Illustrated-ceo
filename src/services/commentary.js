function getCurrentDateTime() { return `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`}

// Mocked data
let commentaries= [
    {
        id: 1,
        author: "le_de_",
        text: "Great job",
        date: getCurrentDateTime()
    },
    {
        id: 2,
        author: "Louis R",
        text: "Do you guys speak French ?",
        date: "01/01/1970 00:00:00"
    },
    {
        id: 3,
        author: "Logan",
        text: "Anagrams are the best!",
        date: getCurrentDateTime()
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
            commentary.date = getCurrentDateTime()
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
