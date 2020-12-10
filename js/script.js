// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.
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
      }
    }
  }
);
