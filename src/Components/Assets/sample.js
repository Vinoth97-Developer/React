const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
    { id: 6, name: 'Fig' },
    { id: 7, name: 'Grape' },
    { id: 8, name: 'Honeydew' },
    { id: 9, name: 'Kiwi' },
    { id: 10, name: 'Lemon' }
];

const getData = async () => {
    await axios.get('https://example.com/api/fruits').then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
}

const postData = async (newFruit) => {
    await axios.post('https://example.com/api/fruits', { name: newFruit })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

const putData = async (id, updatedFruit) => {
    await axios.put(`https://example.com/api/fruits/${id}`, { name: updatedFruit })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

const deleteData = async (id) => {
    await axios.delete(`https://example.com/api/fruits/${id}`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

