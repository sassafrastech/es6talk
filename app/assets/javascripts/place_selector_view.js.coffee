class PlaceSelectorView
  initialize: (options) ->
    @options = options

    @$('a').on 'click', (a...) => @show(a...)
    @initSelect2()

  $: (a...) ->
    @options.el.find(a...)

  show: (e) ->
    @$('a').hide()
    @$('#search, .select2-choice').show()

  initSelect2: ->
    @$('input').select2
      ajax:
        url: 'https://maps.googleapis.com/maps/api/geocode/json',
        data: (term) => { address: term },
        results: (data) =>
          results: data.results.map (r, i) => { id: i, text: r.formatted_address }

export default PlaceSelectorView