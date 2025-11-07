
const dataCache = new Map()


const expensiveTask = (id) => {
    console.log("run the expensive task for:", id);
    return {
        id: id,
        data: `some data for id: ${id}`,
        timestamp: new Date().getTime()
    }
}

const getData = (id) => {

    if (dataCache.has(id)) {
        return dataCache.get(id)
    }

    const data = expensiveTask(id)
    dataCache.set(id, data)
    return data

}

console.log(getData(123));
console.log(dataCache);