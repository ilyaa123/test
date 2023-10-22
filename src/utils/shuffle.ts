const shuffle = <T extends unknown[]>(array: unknown[]): T => {
    let currentIndex = array.length,
        randomIndex

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array as T
}
export default shuffle
