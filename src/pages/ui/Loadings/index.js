import React from 'react'
import { Card, Spin, Icon, Alert} from 'antd'
import '../style/ui.less'

export default class Loadings extends React.Component {
    render() {
        const icon = <Icon type="loading" style={{fontSize:24}}/>
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin: '0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{marginLeft: 10}}/>
                </Card>
                <Card className="card-wrap">
                    <Alert
                        message="react"
                        description="学习react"
                        type="info"    
                    ></Alert>
                    <Alert
                        message="react"
                        description="学习react"
                        type="warning"    
                    ></Alert>
                    <Spin spinning={true}>
                        <Alert
                            message="react"
                            description="学习react"
                            type="info"    
                        >
                        </Alert>
                    </Spin>
                    <Spin spinning={true} tip="加载中...">
                        <Alert
                            message="react"
                            description="学习react"
                            type="info"    
                        >
                        </Alert>
                    </Spin>
                    <Spin spinning={true} indicator={icon}>
                        <Alert
                            message="react"
                            description="学习react"
                            type="info"    
                        >
                        </Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}