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
                                <button type="submit" class="btn btn-success" placeholder="Start typing">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { userautocomplete } from '../helpers/autocomplete.js'

    export default {
        methods: {
            send () {
                console.log('send message')
            }
        },
        mounted () {
            userautocomplete('#users')
        }
    }
</script>
