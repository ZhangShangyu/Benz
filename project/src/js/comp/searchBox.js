import React from 'react';
import {Input, Icon, Button} from 'antd';
const Search = Input.Search;

export default class SearchBox extends React.Component {

    render() {
        return (
           <div>
             <Button type="dashed" style={{ "font-weight": 'bold','color':'blue'}}>搜索</Button>
             &nbsp;&nbsp;
             <Search size="large"
                placeholder="input search text"
                style={{ width: 300}}
                onSearch={value => console.log(value)} />
           </div>
        )
    }
}
