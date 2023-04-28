import React from "react";
import { View } from 'react-native';
import styled from "styled-components/native";
import { useRoute } from "@react-navigation/native";

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`;

export const FullPostScreen = () => {

   const  {params} = useRoute()
   const { id, title, image } = params.item;

    return (
       <View style={{ padding: 20 }}>
        <PostImage source={{ uri: image }}/>
        <PostText>{title}</PostText>
        </View>    
    );
};




