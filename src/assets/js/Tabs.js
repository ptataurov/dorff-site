class Tabs {
  constructor({
    parentClass,
    $tabs,
    tabs,
    activeClass,
    targetClass,
    targetActiveClass
  }) {
    this.$parent = $(`.${parentClass}`)
    this.$tabs = $tabs ? $tabs : $(`.${tabs}`, this.$parent)
    this.$target = $(`.${targetClass}`, this.$parent)
    this.activeClass = activeClass ? activeClass : `${tabs}--active`
    this.showClass = `${targetClass}--show`
    this.$targetActiveClass = targetActiveClass
      ? $(`.${targetActiveClass}`, this.$parent)
      : this.$tabs
  }

  init() {
    const { $tabs, $target, activeClass, showClass, $targetActiveClass } = this

    $tabs.click(function() {
      const $self = $(this)
      const target = $self.data('target')

      if (!$self.hasClass(activeClass)) {
        $targetActiveClass.filter(`.${activeClass}`).removeClass(activeClass)

        $targetActiveClass
          .filter(`[data-target="${target}"]`)
          .addClass(activeClass)

        $target.filter(`.${showClass}`).removeClass(showClass)

        $target.filter(`[data-target="${target}"]`).addClass(showClass)
      }
    })
  }
}

export default Tabs
