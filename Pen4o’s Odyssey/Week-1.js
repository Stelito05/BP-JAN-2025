function triangleProof(side1, side2, side3) {
    if (side1 < side3 + side2 && side2 < side1 + side3 && side3 < side1 + side2) {
        console.log(`The Triangle of Truth with sides ${side1}, ${side2}, and ${side3} has been validated. Pen4o, you may begin your journey!`);
    } else {
        console.log(`The Triangle of Truth with sides ${side1}, ${side2}, and ${side3} is invalid. Pen4o remains stuck!`); 
    }
}

triangleProof(1, 2, 3);