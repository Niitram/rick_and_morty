const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
}
export default onClose