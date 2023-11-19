

export async function createUser(user) {
    setLoading(true)
    const fromData = new FormData();
    fromData.append("name", name);
    fromData.append("email", email);
    fromData.append("password", password);
    fromData.append("phone", phone);
    if (image !== null) {
        fromData.append("image", image, image?.name);
    } else {
        fromData.append("image", image);
    }
    dispatch(register(fromData)).then((res) => {
        const { status } = res.payload
        if (status === 200) {
            dispatch(login({ email, password }))
            update()
        }
        setLoading(false)
    })
}