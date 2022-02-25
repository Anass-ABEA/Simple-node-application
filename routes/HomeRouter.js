const express = require('express');
const router = express.Router();

const BASE_URL = "/API/test/";

let data = [
    {
        id: 1,
        name: "Jose",
        email: "jose@test.com",
        department: "Finance"
    },
    {
        id: 2,
        name: "Anass",
        email: "anass@test.com",
        department: "Tech"
    },
    {
        id: 3,
        name: "Amine",
        email: "amine@test.com",
        department: "HR"
    }
]
let INCREMENT_ID = 4;

router.get(BASE_URL + "users/all", (request, response) => {
    response.status(200).send(data);
})

router.get(BASE_URL + "user/id/:param", (request, response) => {
    let id = Number(request.params.param);
    data.map((user) => {
        if (user.id == id) {
            response.status(200).send(user);
        }
    })
    response.status(400).send({ message: "No User found" });
})

router.get(BASE_URL + "user/email/:user_email", (request, response) => {
    let email = request.params.user_email;
    data.map((user) => {
        if (user.email == email) {
            response.status(200).send(user);
        }
    })
    response.status(400).send({ message: "No User found" });
})

router.get(BASE_URL + "user/departments/all", (request, response) => {
    let dept = new Set();
    data.map((user) => {
        dept.add(user.department);
    })
    response.status(200).send(Array.from(dept));
})


router.post(BASE_URL + "user/create", (request, response) => {
    const user = request.body;

    // check all user attributes
    if (user.email && user.department && user.name) {
        data.push({ id: INCREMENT_ID, email: user.email, department: user.department, name: user.name });

        INCREMENT_ID++;

        response.status(200).send({ message: "Saved!" });
    } else response.status(400).send({ message: "Missing parameters. Allowed attributes : email, department and name" });

})

router.post(BASE_URL + "user/update/:id", (request, response) => {
    const user = request.body;
    const userId = Number(request.params.id);

    let localUser = null;
    for (let usr of data) {
        if (usr.id == userId) {
            localUser = usr;
            break;
        }
    }

    if (localUser == null) response.status(400).send({ message: "User with the specifed ID doesn't exist" });

    if (user.email) localUser.email = user.email;
    if (user.name) localUser.name = user.name;
    if (user.department) localUser.department = user.department;

    response.status(200).send({ message: "Updated!" });

})


router.delete(BASE_URL + "user/delete/:id", (req, resp) => {
    const userId = req.params.id;
    let userToRemove = null;
    const tempData = data.filter(elem => {
        if (elem.id == userId) {
            userToRemove = elem;
            return false;
        }
        return true;
    })

    if (userToRemove == null) resp.status(400).send({ message: "No User found!" });
    else {
        data = tempData;
        resp.status(200).send({ message: "user removed!", user: userToRemove });
    }
})



module.exports = router;
