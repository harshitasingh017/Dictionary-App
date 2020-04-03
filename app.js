const getMeaning = () => {
  document.querySelector('.defs').innerHTML = ''
  document.querySelector('.means').style.display = 'block'
  let word = document.querySelector('#myword').value
  fetch('https://definitionapi.cf/').then(res => res.json()).then(data => {
    let word = document.querySelector('.word')
    let type = document.querySelector('.type')
    let defs = document.querySelector('.defs')
    if(data.word == undefined && data.type == undefined) {
      word.innerHTML = data.error
      type.innerHTML = 'Contact us at '+data.contact_us
    } else {
      word.innerHTML = data.word
      type.innerHTML = data.type
      data.definitions.forEach(def => {
      defs.innerHTML += `<li>${def}</li>`
    })
    }
  })
}