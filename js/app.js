const button = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('#modal--cont')
const closeBtn = document.querySelector('.close')

const notes = [ 
    {
        title: 'Spatulas',
        body: 'Yesterday I went to the store and got some much-needed'
    },
    {
        title: 'Cookie Monster Cupcakes',
        body: 'My favorite cartoon character is Cookie Monster'
    }
]

const notesSummary = () => {
    const notesContainer = document.querySelector('.notes-summary')
    notesContainer.innerHTML = ''
    const summary = document.createElement('h2')
    summary.textContent = `You have ${notes.length} notes`
    notesContainer.appendChild(summary)
}

notesSummary()

// render notes to screen
// step 1: create a new [article] element
// step 2: add textContent to the new element
document.createElement('article').classList.add('article')


button.addEventListener('click', () => {
    // const titleInput = prompt('Enter note title')
    // const bodyInput = prompt('Write your note', 'empty note')

    // if(titleInput.length > 0 && bodyInput.length > 0) {
    //     notes.push({
    //         title: prompt('Enter note title'),
    //         body: prompt('Write your note', 'empty note')
    //     })
    // }
    
    modal.style.display = "block"
    modalContent.classList.add('visible')
    console.log(notes)
    notesSummary()
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    e.target == modal ? modal.style.display = "none": null
})