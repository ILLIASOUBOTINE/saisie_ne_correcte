let nom;
let result;
const motsEcceptFemelle = ["femelle"];
const motsEcceptMale = ["male", "mâle"];
const motsEccept = [motsEcceptFemelle, motsEcceptMale];

while (!nom) {
  nom = prompt("Quel est le genre de votre tamagotchi?");
  if (nom.length !== 0) {
    nom = nom.toLowerCase();
    
    console.log(nom);
    motsEccept.forEach((listMots) => {
      let val = listMots.find((item) => {
        return item === nom;
      });

      console.log(val);
      if (val) {
        alert("votre tamagotchi est: " + listMots[0]);
        document.write("votre tamagotchi est: " + listMots[0]);
        result = listMots[0];
      }
    });
    if (!result) {
      alert("votre saisie est fausse: " + nom);
      nom = false;
    }
  } else {
    alert("le champ ne doit pas être vide");
    nom = false;
  }
}
