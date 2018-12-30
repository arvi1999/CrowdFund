import React, { Component } from 'react';
import {Table,Label} from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class RequestRow extends Component {

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    return (
      <Row>
        <Cell><Label ribbon>{id}</Label></Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>{request.approvalCount}/{approversCount}</Cell>
        <Cell>{id}</Cell>
        <Cell>{id}</Cell>
      </Row>
    );
  }
}

export default RequestRow;
