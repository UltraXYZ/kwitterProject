var firebaseConfig = {
    apiKey: "AIzaSyAtdocw14jTgUM2iVCgPxM6CGf-FM7X1-M",
    authDomain: "kwitter-3212b.firebaseapp.com",
    databaseURL: "https://kwitter-3212b-default-rtdb.firebaseio.com",
    projectId: "kwitter-3212b",
    storageBucket: "kwitter-3212b.appspot.com",
    messagingSenderId: "142367193547",
    appId: "1:142367193547:web:59507f226b7853af2f1e4e",
    measurementId: "G-Y10R5428GL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName=localStorage.getItem("username");
room_name=localStorage.getItem("roomName");

function send(){
    console.log("Inside the send function");
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:userName,
          msg:msg,
          like:0
    });
    document.getElementById("msg").value="";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();