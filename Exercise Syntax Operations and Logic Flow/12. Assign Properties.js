function assignProperties(properties) {
    let prop1 = properties[0];
    let prop2 = properties[2];
    let prop3 = properties[4];

    let obj = {
        [prop1]: properties[1],
        [prop2]: properties[3],
        [prop3]: properties[5]
    };

    console.log(obj);
}

assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);