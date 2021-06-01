import Atomic from "./assets/cards/Atomic.png";
import Bang from "./assets/cards/Bang.png";
import Blast from "./assets/cards/Blast.png";
import Child from "./assets/cards/Child.png";
import Drive_Knight from "./assets/cards/Drive_Knight.png";
import DS from "./assets/cards/DS.png";
import Flash from "./assets/cards/Flash.png";
import Genos from "./assets/cards/Genos.png";
import King from "./assets/cards/King.png";
import Metal_Bat from "./assets/cards/Metal_Bat.png";
import MK from "./assets/cards/MK.png";
import Pig_God from "./assets/cards/Pig_God.png";
import Tats from "./assets/cards/Tats.png";
import TTM from "./assets/cards/TTM.png";
import WDM from "./assets/cards/WDM.png";
import Zombie from "./assets/cards/Zombie.png";

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - .5);
}

export const fetchCards = () => {
  return [
    { id: 1, name: "1. Blast", image: Blast, },
    { id: 2, name: "2. Tatsumaki", image: Tats, },
    { id: 3, name: "3. Bang", image: Bang, },
    { id: 4, name: "4. Atomic Samurai", image: Atomic, },
    { id: 5, name: "5. Child Emperor", image: Child, },
    { id: 6, name: "6. Metal Knight", image: MK, },
    { id: 7, name: "7. King", image: King, },
    { id: 8, name: "8. Zombieman", image: Zombie, },
    { id: 9, name: "9. Drive Knight", image: Drive_Knight, },
    { id: 10, name: "10. Pig God", image: Pig_God, },
    { id: 11, name: "11. Superalloy Darkshine", image: DS, },
    { id: 12, name: "12. Watchdog Man", image: WDM, },
    { id: 13, name: "13. Flashy Flash", image: Flash, },
    { id: 14, name: "14. Genos", image: Genos, },
    { id: 15, name: "15. Metal Bat", image: Metal_Bat, },
    { id: 16, name: "16. Tanktop Master", image: TTM, },
  ];
}