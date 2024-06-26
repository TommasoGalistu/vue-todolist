const {createApp} = Vue;

createApp({
    data(){
        return {
            newTextObj: {text: '', done: false},
            error: false,
            toDo: [
                {
                    text: 'lavare la macchina',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'cucinare',
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
                this.toDo.unshift({...this.newTextObj});
                this.error = false;
                this.newTextObj.text = '';
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
        },
        eliminateText(){

        }
        
    },
    mounted(){

    }
}).mount('#app');