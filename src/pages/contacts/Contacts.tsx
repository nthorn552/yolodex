import React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import ListHeader from '../../components/listHeader/ListHeader';
import ContactList from '../../components/contactList/ContactList';

import { ApplicationState } from '../../store';
import { Contact } from '../../store/contacts/types';
import { getContacts } from '../../store/contacts/actions';
import { Button } from "@material-ui/core";

type ContactProps = {
    contacts: Contact[]
    isLoading: boolean
    onContactClick?: () => void
}

type ContactDispatch = {
    onContactClick?: () => void
}

class Contacts extends React.Component<ContactProps> {

    constructor(props: ContactProps) {
        super(props);
    }

    componentDidMount() {
        this.props.onContactClick();
    }

    render() {
        return (<div>
            <ListHeader isLoading={this.props.isLoading}>Contacts</ListHeader>
            <ContactList contacts={this.props.contacts} />
        </div>);
    }
}

function mapStateToProps(appState: ApplicationState) {
    const contacts = [...appState.contacts.dictionary.values()];
    const isLoading = appState.contacts.loading;
    return { contacts, isLoading };
}

function mapDispatchToProps(dispatch: Dispatch): ContactDispatch {
    return {
        onContactClick: () => {
            dispatch(getContacts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);