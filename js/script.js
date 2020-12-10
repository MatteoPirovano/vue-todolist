var toDoList = new Vue (
  {
    el : '#root',
    data : {
      newToDo: '',
      list : [
        "Ripassare jQuery",
        "Fare l' esercitazione pomeridiana",
        "Fare la spesa",
        "Guardare video su Youtube"
      ]
    },
    methods: {
      addToDo : function () {
        this.list.push(this.newToDo);
        this.newToDo = '';
      },
      deleteToDo: function(index) {
        this.list.splice(index, 1);
      }
    }
  }
);
