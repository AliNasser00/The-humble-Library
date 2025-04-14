const openModal = document.querySelector("[data-open-modal]");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const libraryContent = document.querySelector("#libraryContent");


openModal.addEventListener("click", ()=>{
    modal.showModal();
})


let mylibrary = [];

// make the object constarcutor for the books
function Books(title, author, numberOfPages, read){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.id = crypto.randomUUID();

}
//make a function that take an object as a parameter and push the data in the array
//make a function that recevies the data form the form and make and object from it

function addBooktoLibrary(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let number = document.querySelector('#number').value;
    let read = document.querySelector('#check').checked;

    let newBook = new Books(title, author, number, read);
    mylibrary.push(newBook);
    display();

}
// make a function that displayes the data

function display(){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = '';

    for (let i = 0; i < mylibrary.length; i++){
        if(mylibrary[i].read == true)
        {
            mylibrary[i].read = 'it is read';
        }
        else{
            mylibrary[i].read = 'not yet';
        }
        newDiv.innerHTML = `<h4><strong>Title</strong>: ${mylibrary[i].title}</h4><br>
                            <h4><strong>Author</strong>: ${mylibrary[i].author}</h4><br>
                            <h4><strong>Pages</strong>: ${mylibrary[i].numberOfPages}</h4><br>
                            <h4><strong>Read ?</strong>: ${mylibrary[i].read}</h4><br>
                            <h4><strong>id</strong>: ${mylibrary[i].id}</h4><br>
                            <button id="delete" onclick ="bookRemove(${i})"> Delete<button>`
        libraryContent.appendChild(newDiv);

    }
    newDiv.classList.add('cards');
    console.log(mylibrary);


}
let submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    addBooktoLibrary();
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#number').value = '';
    document.querySelector('#check').checked = false;
    modal.close();
})

const book1 = new Books ('Harry Potter', 'Jk Rolling', '365', 'true');
mylibrary.push(book1);
display();
//make a function that recevies the data form the form and make and object from it
//make a function that delete from the array
function bookRemove(i){
    mylibrary.splice(i, 1);  
    libraryContent.innerHTML = ''; 
    display();
}