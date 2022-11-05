
export const SetAuthToken = (user) => {

    const currentUser = { email: user.email }
    //token req from server
    fetch('https://wheels-doc-server-nazmulrony.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)

    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('wheels-doc-token', data.token)

        })
}