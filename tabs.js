document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path


        document.querySelectorAll('.tabs-content').forEach(function(tabscontent) {
          tabscontent.classList.remove('tabs-content-active')
        })

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content-active')
      })

    }) 


})