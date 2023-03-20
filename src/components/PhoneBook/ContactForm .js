
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'
import { useState } from 'react';

function ContactForm (props){

  const [name,setName] = useState("");
  const [number,setNumber] = useState("");


  const handleOnChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value)
        break
      case "number":
        setNumber(e.target.value)
        break
      default:
        return
    }
  }

  const handleOnSubmit = (e) => {
    props.onSubmit(e)
    setName("");
    setNumber("")
  }


        return(
          <>
            <form className={css.form} onSubmit={handleOnSubmit}  >
              <input
                value={name}
                onChange={handleOnChange}
                type="text"
                name="name"
                placeholder="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <input
                value={number }
                onChange={handleOnChange}
                type="tel"
                name="number"
                placeholder="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
             <button type={'submit'}>Добавити контакт</button>
            </form>
          </>
        )

}

ContactForm.propTypes = {
    onSubmit: PropTypes.func
}

export default ContactForm;
