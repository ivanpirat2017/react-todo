export async function authFetch(url, method = 'GET', body ) {
    return await fetch(url, {
        method: method,
        body: body,
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token')
        }
    }).then(r => r.json());
}
