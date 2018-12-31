"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jerry/kickstart/components/RequestRow.js";


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loadingApprove: false,
      loadingFinalize: false,
      errorMessage: ""
    }, _this.onClick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;

              _this.setState({ loadingApprove: true, errorMessage: "" });

              _context.prev = 5;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](5);

              _this.setState({ errorMessage: _context.t0.message });

            case 14:

              _this.setState({ loadingApprove: false });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[5, 11]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;

              _this.setState({ loadingFinalize: true, errorMessage: "" });

              _context2.prev = 5;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](5);

              _this.setState({ errorMessage: _context2.t0.message });

            case 14:

              _this.setState({ loadingFinalize: false });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[5, 11]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { ribbon: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, id + 1)), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, request.approvalCount, "/", approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, request.complete || request.approvalCount == approversCount ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: "green",
        onClick: this.onClick,
        basic: true,
        content: "Approve",
        loading: this.state.loadingApprove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: "teal",
        onClick: this.onFinalize,
        basic: true,
        content: "Finalize",
        loading: this.state.loadingFinalize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })))
      // <Row>
      // <Message floating error header='Oops!' content={this.state.errorMessage} />
      // </Row>
      ;
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiTGFiZWwiLCJCdXR0b24iLCJNZXNzYWdlIiwid2ViMyIsIkNhbXBhaWduIiwiUm91dGVyIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwibG9hZGluZ0FwcHJvdmUiLCJsb2FkaW5nRmluYWxpemUiLCJlcnJvck1lc3NhZ2UiLCJvbkNsaWNrIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2V0U3RhdGUiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBTyxBQUFROztBQUMvQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7b05BQ0osQTtzQkFBUSxBQUNVLEFBQ2hCO3VCQUZNLEFBRVcsQUFDakI7b0JBSE0sQSxBQUdRO0FBSFIsQUFDTixhLEFBS0YsbUZBQVUsbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ0Y7QUFERSx5QkFDUyx3QkFBUyxNQUFBLEFBQUssTUFEdkIsQUFDUyxBQUFvQjs4QkFEN0I7cUJBRWUsY0FBQSxBQUFLLElBRnBCLEFBRWUsQUFBUzs7aUJBQTFCO0FBRkUsa0NBR1I7O29CQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFGLEFBQWtCLE1BQU0sY0FIOUIsQUFHUixBQUFjLEFBQXNDOzs4QkFINUM7OEJBQUE7OEJBTUEsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NCQUM3QyxTQVBGLEFBTUEsQUFBb0QsQUFDbEQsQUFBUztBQUR5QyxBQUN4RCxlQURJOztpQkFHTjs2QkFBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFUcEM7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7OENBV047O29CQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFYeEIsQUFXTixBQUFjLEFBQW9COztpQkFHcEM7O29CQUFBLEFBQUssU0FBUyxFQUFFLGdCQWRSLEFBY1IsQUFBYyxBQUFrQjs7aUJBZHhCO2lCQUFBOzhCQUFBOztBQUFBOytCQUFBO0EsZUFpQlYsQSxzRkFBYSxvQkFBQTtvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFDTDtBQURLLHlCQUNNLHdCQUFTLE1BQUEsQUFBSyxNQURwQixBQUNNLEFBQW9COytCQUQxQjtxQkFFWSxjQUFBLEFBQUssSUFGakIsQUFFWSxBQUFTOztpQkFBMUI7QUFGSyxtQ0FHWDs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsaUJBQUYsQUFBbUIsTUFBTSxjQUg1QixBQUdYLEFBQWMsQUFBdUM7OytCQUgxQzsrQkFBQTs4QkFNSCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDtzQkFDOUMsU0FQQyxBQU1ILEFBQXFELEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsZUFESTs7aUJBR047NkJBQUEsQUFBTywwQkFBd0IsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLFVBVGpDOytCQUFBO0FBQUE7O2lCQUFBOytCQUFBO2dEQVdUOztvQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLGFBWHJCLEFBV1QsQUFBYyxBQUFvQjs7aUJBR3BDOztvQkFBQSxBQUFLLFNBQVMsRUFBRSxpQkFkTCxBQWNYLEFBQWMsQUFBbUI7O2lCQWR0QjtpQkFBQTsrQkFBQTs7QUFBQTtnQ0FBQTtBOzs7Ozs2QkFpQko7VUFBQSxBQUNDLE1BREQsQUFDZSx1QkFEZixBQUNDO1VBREQsQUFDTSxPQUROLEFBQ2UsdUJBRGYsQUFDTTttQkFDMkIsS0FGakMsQUFFc0M7VUFGdEMsQUFFQyxZQUZELEFBRUM7VUFGRCxBQUVLLGlCQUZMLEFBRUs7VUFGTCxBQUVjLHdCQUZkLEFBRWMsQUFDckI7O1VBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQWlFLEFBRWpFOzs2QkFDRyxjQUFELE9BQUssVUFBWSxRQUFqQixBQUF5QixVQUFVLFVBQVksbUJBQW1CLENBQUMsUUFBbkUsQUFBMkU7b0JBQTNFO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsd0NBQU0sUUFBUDtvQkFBQTtzQkFBQSxBQUFlO0FBQWY7Y0FGSixBQUNFLEFBQ0UsQUFBb0IsQUFFdEIscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBSkYsQUFJRSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUxwQyxBQUtFLEFBQU8sQUFBa0MsQUFDekMsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBTkYsQUFNRSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQUEsQUFDVyxlQUFnQixLQVI3QixBQU9FLEFBR0EsaUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQ0csQUFBUSxZQUFZLFFBQUEsQUFBUSxpQkFBNUIsQUFBNkMsaUJBQTdDLEFBQTZELHVCQUM1RCxBQUFDO2VBQUQsQUFDUSxBQUNOO2lCQUFTLEtBRlgsQUFFZ0IsQUFDZDtlQUhGLEFBSUU7aUJBSkYsQUFJVSxBQUNSO2lCQUFTLEtBQUEsQUFBSyxNQUxoQixBQUtzQjs7b0JBTHRCO3NCQVpOLEFBVUUsQUFFSSxBQVNKO0FBVEk7QUFDRSxPQURGLG9CQVNILGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGlCQUNHLEFBQVEsV0FBUixBQUFtQix1QkFDbEIsQUFBQztlQUFELEFBQ1EsQUFDTjtpQkFBUyxLQUZYLEFBRWdCLEFBQ2Q7ZUFIRixBQUlFO2lCQUpGLEFBSVUsQUFDUjtpQkFBUyxLQUFBLEFBQUssTUFMaEIsQUFLc0I7O29CQUx0QjtzQkF2Qk4sQUFxQkUsQUFFSSxBQVVOO0FBVk07QUFDRSxPQURGO0FBV047QUFDQTtBQXBDRixBQXNDRDs7Ozs7O0FBcEZzQixBLEFBdUZ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2plcnJ5L2tpY2tzdGFydCJ9