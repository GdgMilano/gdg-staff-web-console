import {Row} from 'glamorous-grid'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react'
import Page from '../containers/page'
import Section from '../components/section'
import glamorous from 'glamorous'

const SectionsWrapper = glamorous.div({
    display: 'flex',
    margin: '0 auto',
    maxWidth: 1000
})

const sections = [
    {
        title: 'Partners',
        mediaUrl: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png',
        text: 'Inserisci i partners che supporteranno l\'evento',
        linkText: 'Entra',
        linkUrl: 'partners'
    },
    {
        title: 'Sessions',
        mediaUrl: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut.',
        linkText: 'Entra',
        linkUrl: 'sessions'
    },
    {
        title: 'Speakers',
        mediaUrl: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut.',
        linkText: 'Entra',
        linkUrl: 'https://drive.google.com/drive/u/0/folders/0BxirslpUtBstS3o2VTdUQ2h3UzQ'
    },
    {
        title: 'Tickets',
        mediaUrl: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut.',
        linkText: 'Entra',
        linkUrl: 'https://drive.google.com/drive/u/0/folders/0BxirslpUtBstS3o2VTdUQ2h3UzQ'
    },
    {
        title: 'Videos',
        mediaUrl: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut.',
        linkText: 'Entra',
        linkUrl: 'https://drive.google.com/drive/u/0/folders/0BxirslpUtBstS3o2VTdUQ2h3UzQ'
    }
]

class DevfestPage extends Component {
    render() {
        return (
            <Page>
                <SectionsWrapper>
                    <Row>
                        {
                            sections.map(section => {
                                return <Section key={section.title} {...section}/>
                            })
                        }
                    </Row>
                </SectionsWrapper>
            </Page>
        )
    }
}

export default DevfestPage