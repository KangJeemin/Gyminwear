function createMysqlLimit(pageNumber:string) {
    let pageNumbertoInt = (parseInt(pageNumber)-1)*20
    return `${pageNumbertoInt},20`
}

export default createMysqlLimit