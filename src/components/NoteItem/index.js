import React from 'react';
import { Box, Title,Title2 } from './styles';

export default ({ data, index, onPress }) => {
    console.log(data.title);
    return (
        <Box onPress={()=>onPress(index)}>
            <>
            <Title>{data.title}</Title>
           
            </>
        </Box>
    );
}