import React from 'react';
import { Menu } from 'semantic-ui-react';
<<<<<<< HEAD
=======
import {Link, Router} from '../routes';
>>>>>>> campaign

export default () => {
  return (
    <Menu style = {{ marginTop: '12px' }}>
<<<<<<< HEAD
        <Menu.Item>
          CrowdCoin
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item >
            Campaigns
          </Menu.Item>

          <Menu.Item >
            +
          </Menu.Item>
=======
        <Link route='/'>
          <a className='item'>
            CrowdCoin
          </a>
        </Link>

        <Menu.Menu position='right'>
        <Link route='/'>
          <a className='item'>
            Campaigns
          </a>
        </Link>

        <Link route='/campaigns/new'>
          <a className='item'>
            +
          </a>
        </Link>
>>>>>>> campaign
        </Menu.Menu>
    </Menu>
  );
};
