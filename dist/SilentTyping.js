function u(e){window.enmity.plugins.registerPlugin(e)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog;const y=window.enmity.modules.common.Token;window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function g(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function h(e){return window.enmity.patcher.create(e)}var p="SilentTyping",F="1.0.0",S="Silences your typing indicator.",T=[{name:"eternal",id:"263689920210534400"}],v={name:p,version:F,description:S,authors:T};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const a=o.Text;o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA;const C=o.FormCTAButton;o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon;const b=o.FormInput;o.FormLabel,o.FormRadio;const x=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel;const A=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var E=({settings:e})=>{const l=async(t,m,i)=>{(await(await fetch(`https://discord.com/api/v9/channels/${m}/messages/search?author_id=${t}`,{headers:{Authorization:i}})).json()).total_results>0&&e.set("guild_list",e.get("guild_list","")+","+m)},c=async()=>{const t=y.getToken(),m=e.get("userid",""),i=(await(await fetch("https://discord.com/api/v9/users/@me/guilds",{headers:{Authorization:t}})).json()).map(s=>s.id);for(const s of i)await l(m,s,t)},w=()=>{e.set("pressed","yes"),c()};return n.createElement(n.Fragment,null,n.createElement(x,{label:"Example Setting",trailing:n.createElement(A,{value:e.get("example",!0),onValueChange:()=>e.toggle("example",!0)})}),n.createElement(b,{value:e.get("userid",""),onTextChange:t=>e.set("userid",t)}),n.createElement(C,{onPress:w}),n.createElement(a,null,e.get("pressed","no")),n.createElement(a,null,e.get("guild_list","")))};const d=g("startTyping"),r=h("silent-typing"),f={...v,onStart(){r.instead(d,"startTyping",()=>{}),r.instead(d,"stopTyping",()=>{})},onStop(){r.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(E,{settings:e})}};u(f);
