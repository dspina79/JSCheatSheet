// 99 Bottles of Beer Song

function sing() {
let beersOnWall = 99;
    while(beersOnWall > 2) {
        console.log(`${beersOnWall} bottles of beer on the wall.`)
        console.log(`${beersOnWall} bottles of beer!`)
        console.log('Take one down, pass it around');
        console.log(`${--beersOnWall} bottles of beer on the wall!\n`);        
    }

    console.log(`${beersOnWall} bottles of beer on the wall.`)
    console.log(`${beersOnWall} bottles of beer!`)
    console.log('Take one down, pass it around');
    console.log(`${--beersOnWall} bottle of beer on the wall!\n`);

    console.log(`${beersOnWall} bottle of beer on the wall.`)
    console.log(`${beersOnWall} bottle of beer!`)
    console.log('Take one down, pass it around');
    console.log("No bottles of beer on the wall!\n");        

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall...") 
}

sing();