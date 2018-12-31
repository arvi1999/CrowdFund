import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Card, Button, Grid, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Campaign from "../../../ethereum/campaign";
import RequestRow from '../../../components/RequestRow';

class RequestsIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    const campaign = await Campaign(address);
    const requestsCount = await campaign.methods.getRequestCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestsCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    return { address, requestsCount, requests, approversCount };
  }

  renderRows() {
    return this.props.requests.
    map((request, index) => {
      return <RequestRow
        request={request}
        id={index}
        key={index}
        address={this.props.address}
        approversCount={this.props.approversCount}
      />;
    });
  }

  render() {
    const {Header, Row, HeaderCell, Body} = Table;
    return (
      <Layout>
      <br />
        <Grid>
          <Grid.Row >
            <Grid.Column width={10}>
              <h2>All Requests</h2>
            </Grid.Column>
            <Grid.Column width={6}>
              <Link route={`/campaigns/${this.props.address}/requests/new`}>
                <a>
                  <Button
                    floated="right"
                    content="Add Request"
                    icon="add circle"
                    labelPosition="right"
                    primary
                  />
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div>
                Found {this.props.requestsCount} requests.
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <Table celled color='red'>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount (ether)</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>

        <br /><br />
        <Link route={`/campaigns/${this.props.address}`}>
          <a><Button primary icon='arrow left' content='Back' /></a>
        </Link>
      </Layout>
    );
  }
}

export default RequestsIndex;
