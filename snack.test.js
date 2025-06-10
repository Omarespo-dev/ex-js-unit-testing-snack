const { getInitials, createSlug, average , createSlug2 , isPalindrome,createSlug3, findPostById} = require("./functions")

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




// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."
test('La funzione createSlug sostituisce gli spazi con -', () => { 
    expect(createSlug2("Questo è un test")).toBe("questo-è-un-test")
})




//  🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => { 
    expect(isPalindrome("anna")).toBe(true)
    expect(isPalindrome("ciao")).toBe(false)

})
// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.



// 🏆 Snack 6
//Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug3("")).toThrow()
    expect(() => createSlug3(null)).toThrow()
})


//🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
const posts = [
    { id: 1, title: "Primo post", slug: "primo-post" },
    { id: 2, title: "Secondo post", slug: "secondo-post" },
    { id: 3, title: "Terzo post", slug: "terzo-post" }
];

// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts,2)).toEqual({ id: 2, title: "Secondo post", slug: "secondo-post" })
 })

test('Ogni post ha le proprietà id, title e slug', () => {
    posts.forEach(post => {
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('slug');
    });
});

// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).