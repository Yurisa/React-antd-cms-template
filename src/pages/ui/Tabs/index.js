import React from 'react'
import { Card, Tabs, message, Icon} from 'antd'
import '../style/ui.less'
const TabPane =  Tabs.TabPane

export default class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.newTabIndex = 0
    }
    callback = (key) => {
        message.info("Hi, 您选择了页签" + key)
    }
    
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
    
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    
    componentWillMount() {
        const panes = [
            {
                title: 'Tab1',
                content: 'Content of Tab Pane 1',
                key: '1'
            },            
            {
                title: 'Tab2',
                content: 'Content of Tab Pane 2',
                key: '2'
            },
            {
                title: 'Tab3',
                content: 'Content of Tab Pane 3',
                key: '3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    renderPanes = () => {
        return this.state.panes.map((pane) => (
            <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>
        ))
    }

    render() {
        return (
            <div>
                <Card title="tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" disabled key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>    
                <Card title="tab带图页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={<span><Icon type="apple"></Icon>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="edit"></Icon>Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="delete"></Icon>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="tab可编辑页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" 
                          activeKey={this.state.activeKey}
                          onChange={this.onChange} 
                          type="editable-card"
                          onEdit={this.onEdit}
                    >
                        {this.renderPanes()}
                    </Tabs>
                </Card>        
            </div>
        )
    }
}