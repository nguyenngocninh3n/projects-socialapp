import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MixedViewing from '../../../components/MixedViewing'
import { API } from '../../../api'
import { MESSAGE_TYPE, POST_ATTACHMENT } from '../../../utils/Constants'
import TextComponent from '~/components/TextComponent'
import GoBackComponent from '~/components/GoBackComponent'

const GroupVideoScreen = ({ navigation, route }) => {
  const [files, setFiles] = useState([])
  const groupID = route.params.groupID

  useEffect(() => {
    API.getGroupFilesByID(groupID, MESSAGE_TYPE.VIDEO).then((data) => {
      setFiles(data.map(item => ({uri: API.getFileUrl(item), type: POST_ATTACHMENT.VIDEO.toLowerCase()})))
    })
  }, [groupID])

  return (
    <View>
      <GoBackComponent title={'Thư mục video'} />
      {files.length === 0 && <TextComponent align='center' style={{marginTop:20}} text={'Danh sách trống'} />}
      <MixedViewing attachments={files} />
    </View>
  )
}

export default GroupVideoScreen
