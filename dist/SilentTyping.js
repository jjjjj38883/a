function l(e){window.enmity.plugins.registerPlugin(e)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function r(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function d(e){return window.enmity.patcher.create(e)}var a="SilentTyping",c="1.0.0",w="Silences your typing indicator.",u=[{name:"eternal",id:"263689920210534400"}],y={name:a,version:c,description:w,authors:u};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const t=o.Text;o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon;const g=o.FormInput;o.FormLabel,o.FormRadio;const p=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel;const F=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var S=({settings:e})=>n.createElement(n.Fragment,null,n.createElement(p,{label:"Example Setting",trailing:n.createElement(F,{value:e.get("example",!0),onValueChange:()=>e.toggle("example",!0)})}),n.createElement(g,{value:e.get("userid",""),onTextChange:s=>e.set("userid",s)}),n.createElement(t,null,e.get("pressed","no")),n.createElement(t,null,e.get("guild_list","")));const i=r("startTyping"),m=d("silent-typing"),h={...y,onStart(){m.instead(i,"startTyping",()=>{}),m.instead(i,"stopTyping",()=>{})},onStop(){m.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(S,{settings:e})}};l(h);
