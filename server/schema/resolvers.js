const resolvers = {
    Query: {
        async getSingleUser() {
            $or: [
                {_id: user ? user._id : args.id },
                { username: args.username}
            ],
        }
    return foundUser;
    }
};

module.exports = resolvers;