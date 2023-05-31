/*Create an array of 3 characters. Each character is an object with two properties--name and health. Create an object outside the array in a variable called opponent. The opponent also has name and health properties. (the opponent should start with more health than any of the characters.)
 
Create a loop that:
Prints out the name and health of all three characters plus the opponent.
Prompts the user to pick a character by number (1, 2, or 3).
“Battles” the selected character against the opponent. Remove five health from both the character and the opponent. (Or you can remove a random number from each.)
Exit the loop when the user response is null, which means that the cancel button was clicked.
 
Extended Challenges:
Do not allow a character with zero or less health to engage in battle.
Check for invalid input (must be number between 1 and 3).
Automatically end the program when the opponent health hits zero or all of the characters’ health has hit zero. Display a “win” or “lose” message.*/
function GokuDBSssj(){
    if(GokuDBS.sslevel == 0){

        console.log("Goku transformed into SSJ!")
                GokuDBS.health *= 50
                GokuDBS.strength *= 50
                GokuDBS.sslevel += 1
    }else if (GokuDBS.sslevel == 1){
        console.log("Goku transformed into SSJ2!!")
        GokuDBS.health /= 50
        GokuDBS.strength /= 50   
        GokuDBS.health *= 100
        GokuDBS.strength *= 100
        GokuDBS.sslevel += 1
    }else if (GokuDBS.sslevel == 2){
        console.log("Goku transformed into SSJ3!!!")
        GokuDBS.health /= 100
        GokuDBS.strength /= 100   
        GokuDBS.health *= 400
        GokuDBS.strength *= 400
        GokuDBS.sslevel += 1
    }else if (GokuDBS.sslevel == 3){
        console.log("Goku transformed into SSG!!!!")
        GokuDBS.health /= 400
        GokuDBS.strength /= 400   
        GokuDBS.health *= 20000
        GokuDBS.strength *= 20000
        GokuDBS.sslevel += 1
    }
}
function VegetaDBSssj(){
    if(VegetaDBS.sslevel == 0){

        console.log("Vegeta transformed into SSJ!")
                VegetaDBS.health *= 50
                VegetaDBS.strength *= 50
                VegetaDBS.sslevel += 1
    }else if (VegetaDBS.sslevel == 1){
        console.log("Vegeta transformed into SSJ2!!")
        VegetaDBS.health /= 50
        VegetaDBS.strength /= 50   
        VegetaDBS.health *= 100
        VegetaDBS.strength *= 100
        VegetaDBS.sslevel += 1
    }else if (VegetaDBS.sslevel == 2){
        console.log("Vegeta transformed into SSJG!!!!")
        VegetaDBS.health /= 100
        VegetaDBS.strength /= 100   
        VegetaDBS.health *= 20000
        VegetaDBS.strength *= 20000
        VegetaDBS.sslevel += 1
    }else if (VegetaDBS.sslevel == 3){
        console.log("Goku transformed into SSB!!!!!")   
        VegetaDBS.health *= 50
        VegetaDBS.strength *= 50
        VegetaDBS.sslevel += 1
    }
}

    let GokuDBS  = {
        name : " Son Goku",
        health : 100000,
        strength : 100000,
        age : 44,
        sslevel : 0,
        transportation : {
            name : "nimbus",
            speed : 400
        }
    }
    
    let VegetaDBS = {
        name : "Prince Vegeta",
        health : 95000,
        strength : 95000,
        sslevel : 0,
        age : 46
    }


    let BrolyDBS = {
        name : "Broly",
        health : 70000,
        strength : 70000,
        sslevel : 0,
        age : 48

    }
    let saiyans = [
        GokuDBS, VegetaDBS, BrolyDBS
    ]

    var opponent = {
        name:"Lord Beerus",
        health: 5000000000000000

    }
    var Prompt = 9
    while(Prompt){

        console.log(`
        Goku's Health is ${GokuDBS.health}
        Vegeta's Health is ${VegetaDBS.health}
        Broly's Health is ${BrolyDBS.health}
        Beerus's Health is ${opponent.health}` )
     
        Prompt = prompt("Select Your Fighter!")
        saiyans[Prompt].health -= 5000
        opponent.health -= saiyans[Prompt].strength

        if (saiyans[Prompt].health <= 0){
            console.log("One of the warriors has been defeated!")
            
        }

        if (GokuDBS.health < 95000 ){
            GokuDBSssj()
    
        }else if (GokuDBS.health < 4250000 && GokuDBS.sslevel == 1){
            GokuDBSssj()

        }else if (GokuDBS.health < 5660000 && GokuDBS.sslevel == 2){
            GokuDBSssj()

        }

        if (VegetaDBS.health < 80000 ){
            VegetaDBSssj()
    
        }else if (VegetaDBS.health < 3500000 && VegetaDBS.sslevel == 1){
            VegetaDBSssj()

        }else if (VegetaDBS.health < 1500000 && VegetaDBS.sslevel == 2){
            VegetaDBSssj()

        }

    }



