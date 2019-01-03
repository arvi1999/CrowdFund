<<<<<<< HEAD
import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
=======
import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link, Router } from "../routes";
>>>>>>> campaign

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
<<<<<<< HEAD
    return {campaigns};
=======
    return { campaigns };
>>>>>>> campaign
  }

  // async componentDidMount() {
  //   const campaigns = await factory.methods.getDeployedCampaigns().call();
  //   console.log(campaigns);
  // }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
<<<<<<< HEAD
        description: <a>View Campaign</a>,
        fluid: true
      };
    });
    return <Card.Group items = {items}/>;
  }

  render() {
    return <Layout>
      <div>
      <h3>Open Campaigns</h3>
      <Button floated='right' content='Create Campaign' icon='add circle' labelPosition='right' primary />
      {this.renderCampaigns()}
    </div>
    </Layout>;
  }

=======
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route='/campaigns/new'>
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                labelPosition="right"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
>>>>>>> campaign
}

export default CampaignIndex;
