import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'

const ResourcePage = (props) => {
  return (
      <SafeAreaView>
        <View testID="header">
            <Text>Header</Text>
        </View>
        <View testID="resources">
            <Text>Resources</Text>
        </View>
        <View testID="bottom">
            <Text>Bottom</Text>
        </View>
      </SafeAreaView>
    
  )
}

export default ResourcePage