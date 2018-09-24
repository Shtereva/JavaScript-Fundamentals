function convert(grads){
    let degrees = Math.abs(grads * 0.9) % 360;

    if(grads < 0) {
        let tempDegrees = (Math.abs(grads * 0.9));
        let temp = tempDegrees <= 360 ?  360 % tempDegrees : tempDegrees % 360;
        degrees = temp ? temp : 360 - Math.abs(grads * 0.9); 
    }
    console.log(degrees);
    
} 

convert(-420);