function cone(radius, height){
    
    let volume = (1 / 3) * Math.PI * radius * radius * height;

    let baseSurfaceArea = Math.PI * radius * radius;
    let slantHeight = Math.sqrt((radius * radius) + (height * height));
    let lateralSurfaceArea = Math.PI * radius * slantHeight;
    let surfaceArea = baseSurfaceArea + lateralSurfaceArea;

    console.log('volume = ' + volume);
    console.log('area = ' + surfaceArea);
    
}

cone(3.3, 7.8);