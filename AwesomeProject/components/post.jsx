import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const PostDetails = styled.View`
    flex: 1;
  justify-content: center;
`;

export const Post = ({ title, image, createdAt}) => {
    return (<PostView>
    <PostImage source={{ uri: image }} />
    <PostDetails>
    <PostTitle>{title}</PostTitle>
    <PostDate>{createdAt}</PostDate>
    </PostDetails>
  </PostView>
);
}