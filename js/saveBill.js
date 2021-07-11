var i = 2,
data;

function randomWholeNum() {
  return Math.floor(Math.random() * 1000);
}



// var daString='<div id=\'block\' class=\'block\'><div class=\'block-2\'></div></div>';
// var daParent=document.getElementById('the ID of whatever your parent is goes in here');
// daParent.innerHTML=daString;


function addperson()
{
   var id = ++window.i;
   var htmlchunk= '<div ><span>Next person</span>  <div class="row person"> <div class="col" >  <input class = "fname'+id+' " type="text" class="form-control" placeholder="First name">  </div>    <div class="col">      <input class = "lname'+ id+'" type="text" class="form-control" placeholder="Last name">  </div>';
   var el = document.getElementById('divTable');
   el.innerHTML = el.innerHTML + htmlchunk;
}
//On submit
function saveBill()
{

    if (typeof(Storage) !== 'undefined') {
    var data = JSON.parse(localStorage.getItem('billsdata'));
    } else {
    // Sorry! No Web Storage support..
    }
    //save data
    if(data === ' '|| undefined === data|| null === data){
          data ={
        'bills': []
    }
    }

	var _billname = document.getElementsByClassName('billName')[0].value;
	var _billid = randomWholeNum();
	var _amount = document.getElementsByClassName('amount')[0].value;
  var _length = data.bills.length;
  data.bills.push({
    'billname': _billname,
    'billid': _billid,
    'amount': _amount,
    'persons': []
  });
  savePersons(data);
 	split(data);
  //For  angular acess, making data variable global
  window.data = data;
  localStorage.setItem('billsdata',JSON.stringify(data));
}

function savePersons(data){
  //To Do:makeDynamic
  var _i = window.i;
  var _personsname,
  _length = data.bills.length-1,
  _fname,
  _lname;
  for (var i = 1; i <= _i; i++) {
         // _fname = '.fname'+i;
         // _lname = '.lname'+i;
         _fname = 'fname'+i;
         _lname = 'lname'+i;
         _personsname = document.getElementsByClassName(_fname)[0].value + document.getElementsByClassName(_lname)[0].value;
         //_personsname= $(_fname).val()+ $(_lname).val();
        data.bills[_length].persons.push({'name':_personsname,'amount':' '});
     }
}

function split(data)
{
var _length = data.bills.length-1;
var equal = Number(data.bills[_length].amount)/data.bills[_length].persons.length;
for (var i = window.i - 1; i >= 0; i--) {
  data.bills[_length].persons[i].amount = equal;
}
}
