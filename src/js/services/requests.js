const postData = async (url, data) => {
    console.log(data);
    let res = await fetch(url, {
        method: 'POST',
        body: data,
    });

    return await res.text();
};

const getResourse = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could nod fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};


export {postData, getResourse};
