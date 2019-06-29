const userDetail = user => {
    return {
        userId: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`,
        phone: user.phone,
        website: user.website,
        company: user.company.name,
    }
}

export default userDetail;