import { FormCTAButton, FormInput, FormRow, FormSwitch, Text } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React, Token } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {

   const searchUserMessages = async (user_id, guild_id, token) => {
      const response = await fetch(`https://discord.com/api/v9/channels/${guild_id}/messages/search?author_id=${user_id}`, {headers: {"Authorization": token}})
      const rejson = await response.json()
      if (rejson.total_results > 0) {
         settings.set('guild_list', settings.get('guild_list', '') + "," + guild_id)
      }
   }
   
   const listServersUserIsActiveIn = async () => {
      const token = Token.getToken()
      const user_id = settings.get('userid', '')
      const response = await fetch(`https://discord.com/api/v9/users/@me/guilds`, {headers: {"Authorization": token}})
      const rejson = await response.json()
      const guild_ids: Array<number> = rejson.map(guild => guild.id)
      for (const guild_id of guild_ids) {
         await searchUserMessages(user_id, guild_id, token)
      }
   }

   const execute = () => {
      listServersUserIsActiveIn()
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
      <FormCTAButton onPress={execute} />
      <Text>{settings.get('guild_list', '')}</Text>
   </>)
};