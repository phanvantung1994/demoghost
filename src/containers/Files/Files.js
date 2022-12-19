import { Tabs } from 'antd'
import React from 'react'
import FileList from '../../components/FileList/FileList'
import { FilesWrapper } from './Files.style'

const { TabPane } = Tabs

const Files = () => {
  return (
    <FilesWrapper>
      <Tabs type='card'>
        <TabPane tab='新着順' key='1'>
          <FileList />
        </TabPane>
        <TabPane tab='閲覧数順' key='2'>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab='DL数順' key='3'>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </Tabs>
    </FilesWrapper>
  )
}

export default Files
