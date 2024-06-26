const {createApp} = Vue;

createApp({
    data(){
        return {
            toDo: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
            ]
        }
    },
    methods: {

    },
    mounted(){

    }
}).mount('#app');