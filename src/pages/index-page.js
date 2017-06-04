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
    linkUrl: 'linkUrl'
  },
  {
    title: 'Social',
    mediaUrl: 'https://www.gstatic.com/mobilesdk/160921_mobilesdk/discoverycards/2x/cloudmessaging.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, odit.',
    linkText: 'Entra',
    linkUrl: 'linkUrl'
  },
  {
    title: 'Files',
    mediaUrl: 'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut.',
    linkText: 'Entra',
    linkUrl: 'https://drive.google.com/drive/u/0/folders/0BxirslpUtBstS3o2VTdUQ2h3UzQ'
  }
]

class IndexPage extends Component {
  render() {
    return (
      <Page>
        <SectionsWrapper>
          {
            sections.map(section => {
              return <Section key={section.title} {...section}/>
            })
          }
        </SectionsWrapper>
      </Page>
    )
  }
}

export default IndexPage