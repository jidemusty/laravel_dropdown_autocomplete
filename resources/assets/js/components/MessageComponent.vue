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

            autocomplete('#users', {}, {
                source: autocomplete.sources.hits(index, { hitsPerPage: 10 }),
                templates: {
                    suggestion (suggestion) {
                        return `<span>${suggestion.name}</span>`
                    },
                    displayKey: 'name',
                    empty: `<div class="aa-empty">No People Found</div>`
                }
            })

        }
    }
</script>
