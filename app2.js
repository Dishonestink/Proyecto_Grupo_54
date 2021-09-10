new Vue({
    el: "#app",
    data(){
        return{
            goals = [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    },
    created: function(){
        console.log("Se creó el elemento");
    }, mounted : function(){
        console.log("Se crea el elemento")

    }

}).mount('#app');