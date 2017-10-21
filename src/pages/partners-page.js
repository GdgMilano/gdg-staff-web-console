import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react'
import form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import Page from '../containers/page'
import {Row, Col} from 'glamorous-grid'
import glamorous from 'glamorous'

const SectionsWrapper = glamorous.div({
    margin: '0 auto',
    maxWidth: 1000
})

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}
class PartnersPage extends Component {
    render() {
        return (
            <Page>
                <SectionsWrapper>
                <Row><Col span={{lg: 12/12 }}>
            <form action="/partners" method="post">
                <FieldGroup
                    id="name"
                    type="text"
                    label="Nome partner"
                    placeholder="Nome partner"
                />
                <FieldGroup
                    id="urlimg"
                    type="text"
                    label="Url immagine logo"
                    placeholder="Url immagine logo"
                />
                <FieldGroup
                    id="sito"
                    type="text"
                    label="Sito"
                    placeholder="Sito"
                />
                <Checkbox>
                    Main Sponsor
                </Checkbox>
                <Button type="submit">
                    Submit
                </Button>
            </form>
                </Col>
                </Row>
                </SectionsWrapper>
            </Page>
        )
    }
}

export default PartnersPage