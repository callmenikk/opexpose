import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import GameMode from './GameMode'
import { FC } from 'react'
import { State } from '../../../Reducers/Setup/Config';

interface CategoryProps {
  closeCreate: () => void,
  changeDashboard: () => void
}

const Category: FC<CategoryProps> = ({closeCreate, changeDashboard}) => {
  const configs = useSelector((state: { configs: State }) => state.configs);
  const dispatch = useDispatch()
  
  return (
    <>
      <View style={{
        display: "flex",
        width: "100%",
        height: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        alignItems: "center"
      }}>
      
        <GameMode 
          title={"Funny"} 
          emoji={"😆"} 
          description={"It is best way to enjoy and introduce game, if you play with new people they will understand the game"} 
          chosen={configs.mode === "FUNNY"}
          chooseMode={() => dispatch({ type: "MODE", payload:"FUNNY" })}     
          />
        <GameMode 
          title={"Sussy baka"} 
          emoji={"🤨"} 
          description={"Little bit sussy questions, which will make you to say bro wtf kind of question is that?"} 
          chosen={configs.mode === "SUSSY_BAKA"}
          chooseMode={() => dispatch({type: "MODE", payload:"SUSSY_BAKA"})}
          />
        <GameMode 
          title={"DON'T CHOOSE THAT"} 
          emoji={"😳"} 
          description={"JUST DON'T CHOOSE THAT ONE PLEASE, IT WILL BREAK FRIENDSHIP BETWEEN U AND UR FRIENDS, JUST DONT PLS"} 
          chosen={configs.mode === "DONT_DO_THAT"}
          chooseMode={() => dispatch({type: "MODE", payload:"DONT_DO_THAT"})}
          />
        <TouchableOpacity
          style={{
            width: 200,
            height: 70,
            borderRadius: 100,
            backgroundColor: configs.mode === "" ? "#383838" : "#45FF45",
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => { 
            if(!configs.mode) return

            changeDashboard()
          }}
        >
          <Text style={{
            color: '#000',
            fontWeight: "bold",
            fontSize: 28
          }}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Category