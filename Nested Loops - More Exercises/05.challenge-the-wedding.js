function challengeTheWedding(menCount, womenCount, totalTablesCount) {
    let tablesCount = 0;
    let couples = '';
    
    for (men = 1; men <= menCount; men++) {
        for (women = 1; women <= womenCount; women++) {
            couples += `(${men} <-> ${women}) `;
            tablesCount++;

            if (tablesCount === totalTablesCount) {
                break;
            }
        }
        
        if (tablesCount === totalTablesCount) {
            break;
        }
    }

    console.log(couples);
}

challengeTheWedding(5, 8, 40);