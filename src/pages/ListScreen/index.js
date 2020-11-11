import React,{useLayoutEffect} from 'react';
import {useNavigation,} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
    Container,
    AddButton,
    AddButtonImage,
    NotesList,
    NoNotes,
    NoNoteImage,
    NoNotesText
   
} from './style';

import NoteItem from '../../components/NoteItem';

export default () =>{
    const navigation = useNavigation();
    const list = [useSelector (state => state.notes.list)];
   // const list=[
   // {title: 'Primeira Nota', body:'Testando 1,2,3...',status:'Aberto'},
    //{title: 'Segunda Nota', body:'Testando 1,2,3...'},
    //{title: 'Terceira Nota', body:'Testando 1,2,3...'}
    //];
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Suas notas',
            headerRight: () => (
                <AddButton underlayColor="transparent" onPress={()=>navigation.navigate('EditNote')}>
                    <AddButtonImage source={require ('../../imagens/more.png')} />
                </AddButton>
            )
        })
    },[]);

    const handleNotePress =(index)=>{

       navigation.navigate('EditNote',{
           key: index
       });
    }

    return (
        
        <Container>
            {list.length > 0 &&
           <NotesList
                    data={list}
                    renderItem={({item,index})=>(
                        <NoteItem 
                            data ={item}
                            index = {index}
                            onPress={handleNotePress}
                        
                        />
                    )}
                    keyExtractor={(item,index)=>index.toString()}
           
           />
        }
        {list.length ==0 && 
        
        <NoNotes>
            <NoNoteImage source ={require('../../imagens/note.png')} />
            <NoNotesText>Nenhuma anotação</NoNotesText>
        </NoNotes>

        
        }
        </Container>
    );
}