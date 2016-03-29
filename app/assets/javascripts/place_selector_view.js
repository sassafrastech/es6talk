class PlaceSelectorView {
  constructor(options) {
    this.options = options

    this.$('a').on('click', (...a) => this.show(...a))
    this.initSelect2()
  }

  $(...a) {
    return this.options.el.find(...a)
  }

  show(e) {
    this.$('a').hide()
    this.$('#search, .select2-choice').show()
  }

  initSelect2() {
    this.$('input').select2({
      ajax: {
        url: 'https://maps.googleapis.com/maps/api/geocode/json',
        data: (term) => {
          return { address: term }
        },
        results: (data) => {
          return {
            results: data.results.map((r, i) => {
              return { id: i, text: r.formatted_address }
            })
          }
        }
      }
    })
  }
}

export default PlaceSelectorView