document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('._header')
  const btnToggle = header.querySelector('._btn-toggle')
  const btnSearch = header.querySelector('._btn-search')
  const searchPanel = header.querySelector('._search-panel')
  const searchForm = searchPanel.querySelector('._search-form')
  const searchInput = searchPanel.querySelector('._search-input')

  btnToggle.addEventListener('click', () => {
    searchPanel.classList.remove('search-panel-show')

    header.classList.toggle('mobile-menu-show')
  })

  btnSearch.addEventListener('click', () => {
    header.classList.remove('mobile-menu-show')

    searchPanel.classList.toggle('search-panel-show')

    searchPanel.classList.contains('search-panel-show') && searchInput.focus()
  })

  searchInput.addEventListener('input', () => {
    if (searchInput.value) {
      searchForm.classList.add('active')
    } else {
      searchForm.classList.remove('active')
    }
  })
})
