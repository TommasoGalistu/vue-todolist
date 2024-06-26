const {createApp} = Vue;

createApp({
    data(){
        return {
            newTextObj: {text: '', done: false},
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
        eliminate(index){
            this.toDo.splice(index, 1);
        },
        aggiungiToDo(){
            this.toDo.unshift(this.newTextObj);
        }
        
    },
    mounted(){

    }
}).mount('#app');