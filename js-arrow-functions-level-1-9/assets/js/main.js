// Schreibe eine Funktion, die dich vorstellt und einen Text über dich ausgibt
// mit den Parametern
// vorname
// nachname
// geburtsort
// alter
// wohnort
// und der Funktionskörper soll in der Konsole Folgendes ausgeben (nutze String Concatenation): "string text " + Parameter + " string text"
// Mein Name ist Aurora Stardust
// Ich bin auf Stellarion geboren
// Ich bewache die Welt vor finsteren Mächten
// Ich bin 20 Jahre alt
// Ich wohne in Celestia
// Vergiss nicht, die Funktion mit deinen Daten/Argumenten aufzurufen

let vorname = "Aurora"
let nachname = "Stardust"
let geburtsort = "Stellarion"
let alter = "20"
let wohnort = "Celestia"

const funcIam = () => { return (`Mein Name ist ${vorname},  ${nachname}. Ich bin auf ${geburtsort} geboren. Ich bewache die Welt vor finsteren Mächten. Ich bin ${alter} alt. Ich wohne in ${wohnort}.`)
}
console.log(funcIam())

funcIam()