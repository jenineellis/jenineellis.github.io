var firebaseConfig = {
    apiKey: "AIzaSyAI0jQ-20u_3O2PAXONvRaD5Rk4zkaZvLQ",
    authDomain: "users-93b73.firebaseapp.com",
    databaseURL: "https://users-93b73.firebaseio.com",
    projectId: "users-93b73",
    storageBucket: "users-93b73.appspot.com",
    messagingSenderId: "300391098977",
    appId: "1:300391098977:web:cf2214ee7db575df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();


  $("#submit").on("click", function(){
     
    var nameInput = $("#name").val().trim();
    var roleInput = $("#role").val().trim();
    var startdateInput = $("#startdate").val().trim();
    var monthlyRateInput = $("#monthlyRate").val().trim();
     

     database.ref().push({
      name: nameInput,
      role: roleInput,
      startdate:startdateInput,
      monthlyRate: monthlyRateInput
     })

  })


//display data from initial load
database.ref().on("child_added",function(snapshot){
  
   var  name=snapshot.val().name;
   var role=snapshot.val().role;
   var startdate=snapshot.val().startdate;
   var monthlyRate=snapshot.val().monthlyRate;

   var months=10;

   var totalBill= months * monthlyRate;


     var tr=$("<tr>");
     
var td1=$("<td>")
    td1.text(name)
   tr.append(td1)

   var td2=$("<td>")
    td2.text(role)
   tr.append(td2)


   var td3=$("<td>")
    td3.text(startdate)
   tr.append(td3)

   var td4=$("<td>")
    td4.text(months)
   tr.append(td4)

   var td5=$("<td>")
    td5.text(monthlyRate)
   tr.append(td5)


   var td6=$("<td>")
    td6.text(totalBill)
   tr.append(td6)
       

   $("tbody").append(tr);
  


})
