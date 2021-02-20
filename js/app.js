const button = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('#modal--cont')
const closeBtn = document.querySelector('.close')
const form = document.querySelector('.modal__form')
const noteTitle = document.querySelector('.input__title')
const noteBody = document.querySelector('.textarea')
const submitBtn = document.querySelector('.btn__submit')

const notes = []

const notesSummary = () => {
    const notesContainer = document.querySelector('.notes-summary')
    notesContainer.innerHTML = ''
    const summary = document.createElement('h2')
    summary.textContent = `You have ${notes.length + 2} notes`
    notesContainer.appendChild(summary)
}

notesSummary()


button.addEventListener('click', () => {
    modal.style.display = "block"
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    post()     
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    e.target == modal ? modal.style.display = "none": null
})

function post() {
    let postTitle = noteTitle.value
    let postBody = noteBody.value 
    if(!postTitle) {
        return noteTitle.style.border = '1px solid red'
    } else if(!postBody) {
        return noteBody.style.border = '1px solid red'
    } else {
        notes.push({
            title: postTitle,
            body: postBody
        })
    
        notesSummary()
        modal.style.display = 'none'
    
        const date = new Date();
        const articleContainer = document.querySelector('.article__container')
        const article = document.createElement('article')
        article.classList.add('article')
        articleContainer.appendChild(article)
    // note title
        const titleText = document.createElement('h2')
        titleText.textContent = `${date.toLocaleDateString("en-GB")}: ${postTitle}`
        article.appendChild(titleText)
    
    // note body
        const articleBody = document.createElement('div')
        articleBody.classList.add('article__content')
        article.appendChild(articleBody)
        const bodyText = document.createElement('p')
        bodyText.textContent = postBody
        articleBody.appendChild(bodyText)
        
        noteTitle.value = ''
        noteBody.value = ''
    }
}
