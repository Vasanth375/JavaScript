/**for..of is used to iterate over maps. It's similar to Arrays and sets, except iteration stores both variable and key */

const map = new Map()
.set('abc', 1)
.set('ABC', 2)
for (const _ of map){
    console.log(_)
}