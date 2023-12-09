const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /[0-9a-z]@gmail.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'valid mail'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'wrong mail'
        gmailResult.style.color = 'red'
    }
}

//2

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let position = 0
const moveChildBlock = () => {
    setTimeout(() => {

        position += 1
        childBlock.style.left = `${position}px`
        if(position < 449) {
            moveChildBlock()
    }

    },10)
}
moveChildBlock()


