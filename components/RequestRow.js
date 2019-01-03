import React, { Component } from "react";
import { Table, Label, Button, Message } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
import { Router } from "../routes";

class RequestRow extends Component {
  state = {
    loadingApprove: false,
    loadingFinalize: false,
    errorMessage: ""
  };

  onClick = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    this.setState({ loadingApprove: true, errorMessage: "" });

    try {
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loadingApprove: false });
  };

  onFinalize = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    this.setState({ loadingFinalize: true, errorMessage: "" });

    try {
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loadingFinalize: false });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;

    return (
      <Row disabled = {request.complete} positive = {readyToFinalize && !request.complete}>
        <Cell>
          <Label ribbon>{id + 1}</Label>
        </Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>
        <Cell>
          {request.complete || request.approvalCount == approversCount? null : (
            <Button
              color="green"
              onClick={this.onClick}
              basic
              content="Approve"
              loading={this.state.loadingApprove}
            />
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button
              color="teal"
              onClick={this.onFinalize}
              basic
              content="Finalize"
              loading={this.state.loadingFinalize}
            />
          )}
        </Cell>
      </Row>
      // <Row>
      // <Message floating error header='Oops!' content={this.state.errorMessage} />
      // </Row>
    );
  }
}

export default RequestRow;
