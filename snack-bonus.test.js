// const { } = require("./functions")


// 🎯 Snack 8 (Bonus)
// Creare due test che verifichino le seguenti descrizioni:
// 👉 "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."
// 👉 "Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."
// 📌 Note:
//     Si consiglia di resettare l'array di post dopo ogni test. Ti ricordi come si fa?

const posts = [
    { id: 1, title: "Primo post", slug: "primo-post" },
    { id: 2, title: "Secondo post", slug: "secondo-post" },
    { id: 3, title: "Terzo post", slug: "terzo-post" }
];

//function addPost
function addPost(array, obj) {
    const copia = [...array, obj]

    //C’è almeno un oggetto nell’array che ha lo stesso id di obj.id?
    if (array.some(p => p.id === obj.id)) {
        throw new Error("Id già esistente");
    }

    if (array.some(p => p.slug === obj.slug)) {
        throw new Error("Slug già esistente");
    }

    return copia
}
    
//function RemovePost
function removePost(array, obj) {
    return array.filter(post => post.id !== obj.id);
}



describe('addPost-RemovePost', () => { 
    test('Dopo aver aggiunto un post con la funzione addPost, l array posts deve contenere un elemento in più.', () => { 
        const post = addPost(posts, { id: 4, title: "Quarto post", slug: "quarto-post" })
        expect(post.length).toBe(posts.length + 1)
    })

    test('Dopo aver rimosso un post con la funzione removePost, l array posts deve contenere un elemento in meno.', () => { 
        const postAggiornati = addPost(posts, { id: 4, title: "Quarto post", slug: "quarto-post" });
        const postsDopoRimozione = removePost(postAggiornati, { id: 3 });
        expect(postsDopoRimozione.length).toBe(postAggiornati.length - 1);
    })
})


// 🎯 Snack 9 (Bonus)
// Creare un test che verifichi la seguente descrizione:
// 👉 "Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."
// 📌 Nota:
//    Gli errori devono essere chiari e distinti, es. "Slug già esistente" e “Id già esistente”.

describe('idUgualeVerify', () => { 

    test('Se si tenta di aggiungere un post con un id già esistente, la funzione addPost deve lanciare un errore.', () => { 
        expect(() => addPost(posts, { id: 1, title: "Altro post", slug: "altro-slug" })).toThrow("Id già esistente")
    })

    test('Se si tenta di aggiungere un post con uno slug già esistente, la funzione addPost deve lanciare un errore.', () => { 
        expect(() => addPost(posts, { id: 99, title: "Altro post", slug: "primo-post" })).toThrow("Slug già esistente")
    })

})