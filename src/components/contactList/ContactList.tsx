import React from 'react';

import { Contact } from '../../store/contacts/types';

type ContactListProps = {
    contacts: Contact[];
}

class ContactList extends React.Component<ContactListProps> {

    constructor(props: ContactListProps) {
        super(props);
    }

    render() {
        return <div>
            {this.props.contacts.map((contact) => {
                return <p key={contact.id}>{contact.name}</p>;
            })}
        </div>;
    }
}

export default ContactList;