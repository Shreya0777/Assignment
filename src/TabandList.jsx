import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const TabsAndList = ({ topLinks, recentLinks }) => {
    console.log(topLinks)
  return (
    <Tabs>
      <Tab label="Top Links">
        <List>
          {topLinks.map((link, index) => (
            <ListItem key={index}>{link}</ListItem>
          ))}
        </List>
      </Tab>
      <Tab label="Recent Links">
        <List>
          {recentLinks.map((link, index) => (
            <ListItem key={index}>{link}</ListItem>
          ))}
        </List>
      </Tab>
    </Tabs>
  );
};

export default TabsAndList;
