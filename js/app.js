const button = document.querySelector('.btn')

const notes = [ 
    {
        title: 'Spatulas',
        body: 'Yesterday I went to the store and got some much-needed <a href="https://www.youtube.com/watch?v=2XbCWmY0eqY">spatulas!</a> (What better way to say I love myself than to buy myself a spatula?)'
    },
    {
        title: 'Cookie Monster Cupcakes',
        body: 'My favorite cartoon character is Cookie Monster, and my favorite dessert is cupcakes, so Cookie Monster cupcakes are the best of both worlds.'
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
    const titleInput = prompt('Enter note title')
    const bodyInput = prompt('Write your note', 'empty note')

    if(titleInput.length > 0 && bodyInput.length > 0) {
        notes.push({
            title: prompt('Enter note title'),
            body: prompt('Write your note', 'empty note')
        })
    }
    
    console.log(notes)
    notesSummary()
})