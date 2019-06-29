const userList = users => {
    return users.map(user => {
        return {
            userId: user.id,
            username: user.username,
            email: user.email,
            address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`,
            phone: user.phone,
            website: user.website,
            company: user.company.name
        }
    })
}

export default userList;