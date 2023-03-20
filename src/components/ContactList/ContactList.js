
import PropTypes from 'prop-types';
import css from './ContactList.module.css'


function ContactList (props){

    return(
      <ul className={css.list}>
        {props.visContacts.map(el => (
          <li className={css.item} key={el.id}>{el.name} - {el.number}
          <button type='button' onClick={()=> props.onDeleteContacts(el.id)}>Delete</button></li>
        ))}
      </ul>
    )


}

ContactList.propTypes = {
  visContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
  }))
}


export default ContactList;
