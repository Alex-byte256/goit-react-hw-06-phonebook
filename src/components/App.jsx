import ContactForm from './PhoneBook/ContactForm ';
import { nanoid } from 'nanoid'
import Filter from './PhoneBook/Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useEffect, useRef, useState } from 'react';



function  App (){
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(()=>{
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts){
      setContacts(parsedContacts);
    }
  },[]);

  const start = useRef(0);

  useEffect(()=>{
    if (start.current === 0){
      start.current = 1;
      return;
    }
    localStorage.setItem("contacts",JSON.stringify(contacts))
  },[contacts])


  // componentDidUpdate(prevProps, prevState) {
  //
  //   if(this.state.contacts !== prevState.contacts){
  //     localStorage.setItem("contacts",JSON.stringify(this.state.contacts))
  //   }
  //
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const index = contacts.find(item => item.name === event.target.name.value);
    if (index) {
      alert("Контакт з таким іменем уже присутній")
      return;
    }
    setContacts(
      [...contacts,
        { name:event.target.name.value,number:event.target.number.value, id: nanoid(10) }
      ]);

  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  const deleteContact = (contactId) => {
      setContacts(prevState =>(
        prevState.filter(el => el.id !== contactId)
      ))
  }




    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(el=>el.name.toLowerCase().includes(normalizedFilter))

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleSubmit}  />
        <Filter value={filter} onChange={changeFilter}/>
        <h2>Contacts </h2>
        <ContactList visContacts={visibleContacts} onDeleteContacts={deleteContact}/>
      </div>
    );

};



export default App;
