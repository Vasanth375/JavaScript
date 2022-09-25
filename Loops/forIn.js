var object = {'a': 1, 'b':2, 'c':3}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(object[key], key);
    }
}