function main(){
    let id = document.getElementById("userid").value;
    let pass = document.getElementById("password").value;
    if(id == "admin" && pass == "admin"){
        window.location.href = 'welcome.html';
        return false;
    }
    else{
        alert("inavlid user id or password");
        return false;
    }
}