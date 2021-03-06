import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import routes from './config'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const Item = Menu.Item


class RouterConfig extends Component {
  state = {
    current: '1',
    openKeys: [],
  }
  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }
  render() {
    return (
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column', height: 100 + '%' }}>
          <div
            style={{
              display: 'flex', height: 6 + '%',
              borderWidth: 1, borderColor: '#e9e9e9',
              borderStyle: 'solid', borderTopWidth: 0
            }}>

          </div>
          <div style={{
            display: 'flex', flexDirection: 'row',
            height: 94 + '%',
          }}>
            {/*<ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bubblegum">Bubblegum</Link></li>
            <li><button onclick={this.onPress}>Shoelaces</button></li>
            <li><Link to="/persons/2">person1</Link></li>
          </ul>*/}
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              selectedKeys={[this.state.current]}
              style={{ flex: 1, padding: 10 }}
              onOpenChange={this.onOpenChange}
              onClick={this.handleClick}
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Item key="1"><Link to="/">Home</Link></Item>
                <Item key="2"><Link to="/bubblegum">Bubblegum</Link></Item>
                <Item key="3"><Link to="/shoelaces">Shoelaces</Link></Item>
                <Item key="4"><Link to="/foods">Foods</Link></Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Item key="5">Option 5</Item>
                <Item key="6">Option 6</Item>
                <SubMenu key="sub3" title="Submenu">
                  <Item key="7">Option 7</Item>
                  <Item key="8">Option 8</Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Item key="9">Option 9</Item>
                <Item key="10">Option 10</Item>
                <Item key="11">Option 11</Item>
                <Item key="12">Option 12</Item>
              </SubMenu>
            </Menu>
            {/*<Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </Switch>*/}
            <div style={{ padding: '10px', flex: 5 }}>
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default RouterConfig
