document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();


    let nom = document.getElementById('nom').value;
    let motdepasse = document.getElementById('motdepasse').value;
    let email = document.getElementById('email').value;
    let avis = document.querySelector('input[name="avis"]:checked').value;
    let surnom = document.getElementById('Liste').value;
    let commentaire = document.getElementById('commentaire').value;
    let couleur = document.getElementById('couleur').value;

    console.log('Nom:', nom);
    console.log('Mot de passe:', motdepasse);
    console.log('Email:', email);
    console.log('Avis:', avis);
    console.log('Surnom:', surnom);
    console.log('Commentaire:', commentaire);
    console.log('Couleur préférée:', couleur);



    
})



let boul= 0; 
function darkmode(){
    let body=document.querySelector('body');
    if(boul ==1){
       body.style.background='black';
    body.style.color='black';
    boul=0;  

   
    }
    else {
        body.style.background='white';
        body.style.color='black';
        boul=1;
    }
}

