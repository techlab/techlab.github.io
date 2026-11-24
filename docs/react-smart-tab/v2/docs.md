---
layout: product
title: Documentation - React Smart Tab
description: The awesome tab component for ReactJS
head:
  - - meta
    - name: description
      content: The awesome tab component for ReactJS
  - - meta
    - name: keywords
      content: tab, tab component, tab interface, tabbed layout, tabbed interface, tabbed layout, tabbed interface, tabbed layout, tabbed interface, tabbed layout
---

<div class="tl-md-container vp-doc">


## Installation

```bash
npm install react-smart-tab
```

Usage
-----

```jsx
import React from 'react'

import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'

const App = () => {

  return (
    <Tabs>
      <TabNav>
        <TabNavItem>Tab 1</TabNavItem>
        <TabNavItem>Tab 2</TabNavItem>
        <TabNavItem>Tab 3</TabNavItem>
        <TabNavItem>Tab 4</TabNavItem>
      </TabNav>

      <TabContent>
        <TabPanel>
          Tab 1 Content
        </TabPanel>
        <TabPanel>
          Tab 2 Content
        </TabPanel>
        <TabPanel>
          Tab 3 Content
        </TabPanel>
        <TabPanel>
          Tab 4 Content
        </TabPanel>
      </TabContent>
    </Tabs>  
  )
}

export default App
```

Please see the [documentation](http://techlaboratory.net/react-smart-tab#documentation) for more details on implementation and usage.  

##### Optional parameters

Please see the [parameter descriptions](http://techlaboratory.net/react-smart-tab#parameter-description) for more details.

```jsx
import React from 'react'

import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'

const App = () => {

  return (
    <Tabs
    tabName='tab1'
    selected='0'
    theme='dark'
    orientation='horizontal
    justified='true'
    enableURLhash={true}
    onLeaveTab={(currentIndex, nextIndex) => { console.log("leaveTab", currentIndex, nextIndex) }}
    onShowTab={(e) => { console.log("showTab", e) }}
    >
      <TabNav>
        <TabNavItem>Tab 1</TabNavItem>
        <TabNavItem>Tab 2</TabNavItem>
        <TabNavItem>Tab 3</TabNavItem>
        <TabNavItem>Tab 4</TabNavItem>
      </TabNav>

      <TabContent>
        <TabPanel>
          Tab 1 Content
        </TabPanel>
        <TabPanel>
          Tab 2 Content
        </TabPanel>
        <TabPanel>
          Tab 3 Content
        </TabPanel>
        <TabPanel>
          Tab 4 Content
        </TabPanel>
      </TabContent>
    </Tabs>  
  )
}

export default App
```

</div>