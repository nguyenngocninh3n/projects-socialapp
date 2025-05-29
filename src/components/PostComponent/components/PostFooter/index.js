import React, { useState } from 'react'
import RowComponent from '../../../RowComponent'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { OpacityButtton } from '../../../ButtonComponent'
import { Button, Pressable } from 'react-native'
import SpaceComponent from '../../../SpaceComponent'
import CommentModal from '../../../../modals/CommentModal'
import SharingComponent from '~/components/Sharing'
import { SHARE_TYPE } from '~/utils/Constants'
const reaction = {
  none: 'heart',
  react: 'heart-fill'
}
const PostFooter = ({ user, postID }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const handleShowModal = () => {
    if (modalVisible) {
      setModalVisible(false)
      setModalVisible(true)
    } else {
      setModalVisible(true)
    }
  }
  const handleCloseModal = () => setModalVisible(false)

  return (
    <RowComponent>
      <OpacityButtton children={<Octicons name={reaction.none} size={22} />} />
      <SpaceComponent width={32} />
      <OpacityButtton onPress={handleShowModal} children={<Octicons name="comment" size={22} />} />
      <SpaceComponent width={32} />
      <SharingComponent
        target={{ userName: user.userName, _id: postID }}
        type={SHARE_TYPE.POST}
        icon={<Octicons name="share-android" size={22} />}
      />
      <CommentModal modalVisible={modalVisible} onClose={handleCloseModal} postID={postID} />
    </RowComponent>
  )
}

export default PostFooter
