function print(input){
    let delimeter = input.pop();
    let arr = input.slice(0, input.length);

    console.log(arr.join(delimeter));
}

print(['One', 'Two', 'Three', 'Four', 'Five', '-']);
print(['How about no?', 'I','will', 'not', 'do', 'it!', '_']);