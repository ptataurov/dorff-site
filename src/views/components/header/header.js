$(() => {
  const $header = $('._header')
  const $menu = $('._menu', $header)
  const $btnToggle = $('._btn-toggle', $header)

  const $searchPanel = $('._search-panel', $header)

  const $searchInput = $('._search-input', $header)

  const $btnSearch = $('._btn-search', $header)

  $btnToggle.click(() => {
    $searchPanel.removeClass('search-panel-show')

    $header.toggleClass('mobile-menu-show')
  })

  $btnSearch.click(() => {
    $header.removeClass('mobile-menu-show')

    $searchPanel.toggleClass('search-panel-show')

    $searchPanel.hasClass('search-panel-show') && $searchInput.focus()
  })
})
