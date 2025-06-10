const { getInitials, createSlug, average } = require("./functions")

//snack1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Ludovico")).toBe("Lu")
    expect(getInitials("Omar")).toBe("Om")
})

//snack2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."
test('La funzione createSlug restituisce una stringa in lowercase.', () => { 
    expect(createSlug("Ludovico")).toBe("ludovico")
})


// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."
const arraryNumeri = [1,2,3,4,5,6]
test('La funzione average calcola la media aritmetica di un array di numeri.', () => { 
    expect(average(arraryNumeri)).toBe(3.5)
 })

 