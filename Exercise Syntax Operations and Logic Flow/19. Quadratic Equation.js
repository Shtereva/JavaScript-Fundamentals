function quadraticEquatation(num1, num2, num3) {
    let a = +num1;
    let b = + num2;
    let c = +num3;

    let discriminant = (b * b) - (4 * a * c);
    
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        
        console.log(Math.min(root1, root2));
        console.log(Math.max(root1, root2));
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        console.log(root);
    } else {
        console.log('No');
    }
}

quadraticEquatation(6, 11, -35);