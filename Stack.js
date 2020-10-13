//Deduce the order in which this is executed, both in the Stack and Pending Callbacks. Create animation.

app.post('/users', function createUser(request, response) {
    User.findOrCreate({ where: request.body })
        .then(function (user) {
            user.getContacts()
                .then(contacts => {
                    request.session.userId = user.id
                    response.render('profile', {user, contacts})
                })
        })
    logging(`/users route called with ${request.body}`)
})

// 1. Add createUser() to stack
// 2. Add findOrCreate() to pending callbacks
// 3. Add logging() to stack
// 4. Remove logging() from stack
// 5. Remove createUser() from stack
// 6. Move anonymous function from pending callbacks to stack
// 7. Add getContacts() to pending callbacks
// 8. Remove anonymous function from stack
// 9. Move getContacts() from pending callbacks to stack
// 10. Add anonymous function to pending callbacks
// 11. Remove getContacts() from stack
// 12. Move anonymous function from pending callbacks to stack
// 13. Remove anonymous function from stack
// COMPLETE