function figureArea(w, h, W, H){
    let[s1, s2, s3] = [w * h, W * H, Math.min(h, H) * Math.min(w, W)];

    let result = s1 + s2 - s3;
    console.log(result);
}

figureArea(13, 2, 5, 8);