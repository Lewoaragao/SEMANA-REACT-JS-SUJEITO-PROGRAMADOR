// buscar links salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)
    let linksSaves = JSON.parse(myLinks) || []

    return linksSaves
}

// salvar um link no localStorage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key)

    // verificar se já tem um link salvo, não deixar duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink) {
        console.log('Essse link já existe na sua lista!')

        return
    }

    // adicionar esse novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso!')
}


// deletar algum link salvo
export function deleteLink(links, id) {
    let myLinks = links.filter(item => {
        return(item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    
    console.log('Link deletado com sucesso!')
}