import autocomplete from 'autocomplete.js'
import algolia from 'algoliasearch'

var index = new algolia('BDP6CLWVMX', 'f87c24b944977c405c0dfc60dbc8bfc4')

export const userautocomplete = (selector) => {
    index = index.initIndex('users')

    autocomplete(selector, {
        hint: true
    }, {
        source: autocomplete.sources.hits(index, { hitsPerPage: 10 }),
        displayKey: 'name',
        templates: {
            suggestion (suggestion) {
                console.log(suggestion)
                return `<span>${suggestion._highlightResult.name.value}</span>`
            },
            empty: `<div class="aa-empty">No People Found</div>`
        }
    })
}