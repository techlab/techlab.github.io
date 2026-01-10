---
title: React Smart Tab
description: The awesome tab component for ReactJS
head:
  - - meta
    - name: description
      content: The awesome tab component for ReactJS
  - - meta
    - name: keywords
      content: tab, tab component, tab interface, tabbed layout, tabbed interface, tabbed layout, tabbed interface, tabbed layout, tabbed interface, tabbed layout
---

# React Smart Tab

The awesome react tab component for ReactJS
<hr>

React Smart Tab is a react component library for easy implementation of tab interface. It provides a clean and modern way to organize content in tabbed layouts.

<div class="flex flex-wrap flex-row justify-start gap-1 gap-y-0">

[![Build Status](https://travis-ci.org/techlab/react-smarttab.svg?branch=master)](https://travis-ci.org/techlab/react-smarttab)

[![npm version](https://badge.fury.io/js/react-smarttab.svg)](https://badge.fury.io/js/react-smarttab)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/techlab/react-smarttab/master/LICENSE)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</div>

# Screenshots

![jQuery Smart Tab pills](/media/react-smart-tab/v2/react-smarttab-v2-pills.png)   

![jQuery Smart Tab dark vertical](/media/react-smart-tab/v2/react-smarttab-v2-dark-vertical.png)   

![jQuery Smart Tab default](/media/react-smart-tab/v2/react-smarttab-v2-default.png)   

![jQuery Smart Tab brick](/media/react-smart-tab/v2/react-smarttab-v2-brick.png)


## Features

- ✓ Responsive design
- ✓ Standalone CSS
- ✓ Bootstrap compatible
- ✓ Various themes included
- ✓ Customizable CSS
- ✓ Easy to implement
- ✓ Supports all modern browsers

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

Please see the [documentation](http://techlaboratory.net/react-smarttab#documentation) for more details on implementation and usage.  

##### Optional parameters

Please see the [parameter descriptions](http://techlaboratory.net/react-smarttab#parameter-description) for more details.

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

License
----
[MIT License](https://github.com/techlab/react-smarttab/blob/master/LICENSE)

