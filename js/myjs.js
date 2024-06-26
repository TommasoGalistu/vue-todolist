const {createApp} = Vue;

createApp({
    data(){
        return {
            newTextObj: {text: '', done: false},
            error: false,
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
            ],
            done: [

            ],
        }
    },
    methods: {
        eliminate(index){
            this.toDo.splice(index, 1);
        },
        aggiungiToDo(){
            if(this.newTextObj.text.length > 4){
                this.toDo.unshift(this.newTextObj);
                this.error = false;
            }else{
                this.newTextObj.text = '';
                this.error = true;
            }
        },
        cambiaStato(index){
            
            if(this.toDo[index].done === false){
                this.toDo[index].done = true;
            }else{
                this.toDo[index].done = false;
            }
        }
        
    },
    mounted(){

    }
}).mount('#app');