const backendUrl = "http://localhost:8080";

// --------- View Books ---------
function getBooks() {
    fetch(`${backendUrl}/books`)
        .then(res => res.json())
        .then(data => {
            let rows = "";
            data.forEach(book => {
                if (book.available) {
                    rows += `<tr>
                        <td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.available ? 'Yes' : 'No'}</td>
                    </tr>`;
                }
            });
            const bookList = document.getElementById("book-list");
            if (bookList) bookList.innerHTML = rows;
        });
}

function borrowBook() {
    const bookId = document.getElementById("bookId").value;
    const userId = document.getElementById("userId").value;

    fetch(`${backendUrl}/transactions/borrow?userId=${userId}&bookId=${bookId}`, {
        method: "POST"
    })
    .then(res => res.text())
    .then(() => {
        alert("Book borrowed successfully!");
        getBooks();
        getTransactions();
    });
}

function returnBook() {
    const bookId = document.getElementById("returnBookId").value;
    const userId = document.getElementById("returnUserId").value;

    fetch(`${backendUrl}/transactions/return?userId=${userId}&bookId=${bookId}`, {
        method: "PUT"
    })
    .then(res => res.text())
    .then(() => {
        alert("Book returned successfully!");
        getBooks();
        getTransactions();
    });
}

// ---------------- Add Book ----------------
function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    fetch(`${backendUrl}/books`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, available: true })
    })
    .then(res => res.text())
    .then(() => {
        alert("Book added successfully!");
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
    });
}

// ---------------- Add User ----------------
function addUser() {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;

    fetch(`${backendUrl}/users`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    })
    .then(res => res.json())
    .then(() => {
        alert("User added successfully!");
        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
        getUsers();
    });
}

// --------- View Users ---------
function getUsers() {
    fetch(`${backendUrl}/users`)
        .then(res => res.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>`;
            });
            const userList = document.getElementById("user-list");
            if (userList) userList.innerHTML = rows;
        });
}

// --------- Transactions ---------
function getTransactions() {
    fetch(`${backendUrl}/transactions`)
        .then(res => res.json())
        .then(data => {
            let rows = "";
            data.forEach(tran => {
                rows += `<tr>
                    <td>${tran.id}</td>
                    <td>${tran.book.title}</td>
                    <td>${tran.user.name}</td>
                    <td>${tran.status}</td>
                    <td>${new Date(tran.borrowDate).toLocaleString()}</td>
                    <td>${tran.returnDate ? new Date(tran.returnDate).toLocaleString() : "Not Returned"}</td>
                </tr>`;
            });
            const transactionList = document.getElementById("transaction-list");
            if (transactionList) transactionList.innerHTML = rows;
        });
}

// --------- Auto Load ---------
if (document.getElementById("book-list")) getBooks();
if (document.getElementById("transaction-list")) getTransactions();
if (document.getElementById("user-list")) getUsers();
