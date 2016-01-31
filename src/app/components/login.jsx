/**
 * Created by CHEN on 2016/1/28.
 */
import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import SvgIcon from 'material-ui/lib/svg-icon';
import IconButton from 'material-ui/lib/icon-button';

import ActionHome from 'material-ui/lib/svg-icons/action/home';


let parentoptions = {
    flexDirection: ["row","row-reverse","column","column-reverse"],
    justifyContent: ["flex-start","flex-end","center","space-between","space-around"],
    alignItems: ["flex-start","flex-end","center","stretch","baseline"],
    flexWrap: ["nowrap","wrap","wrap-reverse"],
    alignContent: ["flex-start","flex-end","center","stretch","space-between","space-around"],
};
const style = {
    margin: 12,
};
let flexStyle = {

    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    flexRow: {

        // 容器需要添加direction才能变成让子元素flex
        display:'flex',
        flexDirection: 'row',
        alignItems: 'space-around',
        justifyContent: 'center',

    },
};


 const Login = () => (

<div  style={flexStyle.flexContainer}>
    <img src="images/0.jpg"/>
    <IconButton
        iconClassName="material-icons"
        tooltip="Ligature"
        style={style}
    >
        Home
    </IconButton>

    <TextField
        hintText="请输入用户名 或 邮箱"
        floatingLabelText="请输入用户名"
        multiLine={true}
        rows={1}
    />
    <TextField
        hintText="请输入用户密码"
        floatingLabelText="请输入用户密码"
        type="password"
    />
    <br/>
    <div style={flexStyle.flexRow}>
    <RaisedButton

        label="登 录"
        labelPosition="after"
        primary={true}
style={style}

    />
        <FlatButton
            style={style}
            label="立即注册？"
            labelPosition="after"



        />
        </div>
    <p>第三方账号登陆</p>
    <div style={flexStyle.flexRow}>
    <FlatButton
        style={style}
        label="腾讯qq"
        labelPosition="after"



    />
        <FlatButton label="新浪微博" secondary={true}style={style} />
        </div>
</div>


);
export default Login;