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
    title: 'Eventi',
    mediaUrl: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, unde!',
    linkText: 'Entra',
    linkUrl: '#'
  },
  {
    title: 'Social',
    mediaUrl: 'https://www.gstatic.com/mobilesdk/160921_mobilesdk/discoverycards/2x/cloudmessaging.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, odit.',
    linkText: 'Entra',
    linkUrl: ''
  },
  {
    title: 'Files',
    mediaUrl: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut.',
    linkText: 'Entra',
    linkUrl: 'https://drive.google.com/drive/u/0/folders/0BxirslpUtBstS3o2VTdUQ2h3UzQ'
  },
    {
        title: 'Devfest 2018',
        mediaUrl: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png',
        text: 'Gestisci tracks, speakers e news per il devfest 2018',
        linkText: 'Entra',
        linkUrl: 'devfest'
    }
]

class IndexPage extends Component {
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

export default IndexPage