query getChatMessage($chatRoomId: Float!){
    listChatMessages(chatRoomId: $chatRoomId){
        items{
            id
            content
            dateSent
            sender {
                id
                email
            }
        }
    }
}