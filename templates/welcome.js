/*console.log()
for (let i = 0; i < 256; i++) {
  console.log(`\x1b[${i}mCode ${i}: Hello !\x1b[0m`);
}*/
/*const title = "
.___                             .__                           /\       
|   | ______ _____ _____  ___  __|  |   ____ _____________  ___)/ ______
|   |/  ___//     \\__  \ \  \/  /  | _/ __ \\____ \_  __ \/  _ \/  ___/
|   |\___ \|  Y Y  \/ __ \_>    <|  |_\  ___/|  |_> >  | \(  <_> )___ \ 
|___/____  >__|_|  (____  /__/\_ \____/\___  >   __/|__|   \____/____  >
         \/      \/     \/      \/         \/|__|                    \/ 
           __      __      ___.          .__  __                        
          /  \    /  \ ____\_ |__   _____|__|/  |_  ____                
  ______  \   \/\/   // __ \| __ \ /  ___/  \   __\/ __ \    ______     
 /_____/   \        /\  ___/| \_\ \\___ \|  ||  | \  ___/   /_____/     
            \__/\  /  \___  >___  /____  >__||__|  \___  >              
                 \/       \/    \/     \/              \/               
";*/
/*function AfficherEnMenu(largeur, texte) {
    let ligne = 0;
    console.log("_".repeat(largeur));
    for(let i = 0; i < texte.length; i++) {
        if(texte[i] == '\n') {
            ligne++;
        }
    }
    for(let i = 0; i < ligne + 1; i++) {
        console.log(texte);
        console.log('\n');
    }
    console.log("_".repeat(largeur));
}*/
function AfficherEnMenu(largeur, texte) {
    const lignes = texte.split('\n');

    // Ligne du haut
    console.log("_".repeat(largeur));

    for (let ligne of lignes) {
        // Calcul de l'espace disponible (entre les deux |)
        const espaceTotal = largeur - 2;

        // Si le texte est trop long, on le coupe
        if (ligne.length > espaceTotal) {
            ligne = ligne.slice(0, espaceTotal);
        }

        const paddingTotal = espaceTotal - ligne.length;
        const paddingGauche = Math.floor(paddingTotal / 2);
        const paddingDroite = paddingTotal - paddingGauche;

        console.log(
            "|" +
            " ".repeat(paddingGauche) +
            ligne +
            " ".repeat(paddingDroite) +
            "|"
        );
    }

    // Ligne du bas
    console.log("_".repeat(largeur));
}

const art2 = `
.___                             .__                           /\\       
|   | ______ _____ _____  ___  __|  |   ____ _____________  ___)/ ______
|   |/  ___//     \\\\__  \\ \\  \\/  /  | _/ __ \\\\____ \\_  __ \\/  _ \\/  ___/
|   |\\___ \\|  Y Y  \\/ __ \\_>    <|  |_\\  ___/|  |_> >  | \\(  <_> )___ \\ 
|___/____  >__|_|  (____  /__/\\_ \\____/\\___  >   __/|__|   \\____/____  >
         \\/      \\/     \\/      \\/         \\/|__|                    \\/ 
           __      __      ___.          .__  __                        
          /  \\    /  \\ ____\\_ |__   _____|__|/  |_  ____                
  ______  \\   \\/\\/   // __ \\| __ \\ /  ___/  \\   __\\/ __ \\    ______     
 /_____/   \\        /\\  ___/| \\_\\ \\\\___ \\|  ||  | \\  ___/   /_____/     
            \\__/\\  /  \\___  >___  /____  >__||__|  \\___  >              
                 \\/       \\/    \\/     \\/              \\/               `;
console.log(`\x1b[40m\x1b[95m${art2}`);
/*AfficherEnMenu(20, "Hello Everyone !")*/
console.log(`\x1b[40m\x1b[95m\x1b[4m\x1b[1mHello and welcome to the console !`);
