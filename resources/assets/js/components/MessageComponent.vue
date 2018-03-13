<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Message</div>

                    <div class="card-body">
                        <form action="" @submit.prevent="send">
                            <div class="form-group">
                                <label for="users">Choose users</label>
                                <input type="text" name="users" id="users" class="form-control">
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-success">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import autocomplete from 'autocomplete.js'
    import algolia from 'algoliasearch'

    export default {
        methods: {
            send () {
                console.log('send message')
            }
        },
        mounted () {

            const index = new algolia('BDP6CLWVMX', 'f87c24b944977c405c0dfc60dbc8bfc4').initIndex('users')

            autocomplete('#users', {
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
    }
</script>
