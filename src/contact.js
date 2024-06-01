function loadContact() {
    const contact = document.createElement("div");
    const email = document.createElement("p");
    const tel = document.createElement("p");

    email.textContent = "restaurant@mail.com";
    tel.textContent = "000-123-456";

    contact.append(email, tel);

    return contact;
}

export default loadContact;