function AddRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function getData() {firbase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML=
"";snapshot.forEach(function(childsnapshot){childKey=
    childSnapshot.key;
    room_names=childKey;
    //start code//

    //end code//
});});}
getData();