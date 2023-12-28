function returnSqlLimit(page:string) {
    let pageNumbertoInt = (parseInt(page)-1)*20
    return `${pageNumbertoInt},20`
}

export default returnSqlLimit