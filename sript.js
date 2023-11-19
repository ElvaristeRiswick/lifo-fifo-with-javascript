//lifo

let stark = [];

stark.push(1);

stark.push(2);
stark.push(3);

stark.push(4);
stark.push(5);

stark.push(6);

//console.log(stark);

//let retire = stark.pop();

//console.log(stark);

//let retire2 = stark.shift();
//console.log(retire2);
//console.log(stark2);

//function stark2() {
//this.arr = [];
//}

//stark2.prototype.add = function (value) {
// this.arr.push(value);
//};

//stark2.prototype.delete = function (value) {
// this.arr.pop(value);
//};

//const pil = new stark2();

//pil.add(1);
//pil.add(2);
//pil.add(3);

//console.log(pil);

//fifo

const maPil = new Array(
  "folder1",
  "folder2",
  "folder3",
  "folder4",
  "folder5",
  "folder6"
);

var i = 7;

function ajouter() {
  maPil.push("folder" + i++);
  console.log("pil", maPil);
}

function traiter() {
  console.log("je traiter  le " + maPil.pop());
  console.log("pil", maPil);
}

//fifo

const maFille = new Array(
  "folder1",
  "folder2",
  "folder3",
  "folder4",
  "folder5",
  "folder6"
);

var Q = 7;

function ajouterFille() {
  maFille.push("folder" + Q++);
  console.log("maFille", maFille);
}

function traiterFille() {
  console.log("je traiter  le " + maFille.shift());
  console.log("maFille", maFille);
}
