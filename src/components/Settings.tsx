import { FormCTAButton, FormInput, FormRow, FormSwitch, Text } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';
import { Token } from 'enmity/metro/common';


interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {

   const searchUserMessages = async (user_id, guild_id) => {
      const token = Token.getToken()
   }
   
   const listServersUserIsActiveIn = () => {
      
   }
   return (<>
      <FormRow
         label='Example Setting'
         trailing={
            <FormSwitch
               value={settings.get('example', true)}
               onValueChange={() => settings.toggle('example', true)}
         />}
      />
      <FormInput value={settings.get('userid', '')} onTextChange={(text) => settings.set('userid', text)} />
      <FormCTAButton onClick={listServersUserIsActiveIn()} />
      <Text>{Token.getToken()}</Text>
   </>)
};