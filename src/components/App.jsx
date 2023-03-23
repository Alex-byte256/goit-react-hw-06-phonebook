import ContactForm from './PhoneBook/ContactForm ';
import { nanoid } from 'nanoid'
import Filter from './PhoneBook/Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector , useDispatch } from 'react-redux';
import {addContact ,removeContact, updateFilter} from '../redux/store'



function  App (){
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.contacts.filter)


  const handleSubmit = (event) => {
    event.preventDefault();
    const index = contacts.find(item => item.name === event.target.name.value);
    if (index) {
      alert("Контакт з таким іменем уже присутній")
      return;
    }
    dispatch(addContact(
      { name:event.target.name.value,number:event.target.number.value, id: nanoid(10) }
    ))
  }

  const changeFilter = (e) => {
    dispatch(updateFilter(e.target.value))
  }

  const deleteContact = (contactId) => {
    dispatch(removeContact(contactId))
  }

  console.log(contacts)


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
