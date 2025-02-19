import { FormCTAButton, FormInput, FormRow, FormSwitch, Text } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React, Token } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return (<>
      <FormInput value={settings.get('tjirjfrfde', Token.getToken())} />
   </>)
};