


    window.addEventListener('DOMContentLoaded', function(){
      document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('.burger-list').style.display = 'block'
        document.querySelector('.burger-list').classList.toggle('burger-active')
      })
    })