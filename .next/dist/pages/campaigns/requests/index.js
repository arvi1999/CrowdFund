"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../../routes");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jerry/kickstart/pages/campaigns/requests/index.js?entry";


var RequestsIndex = function (_Component) {
  (0, _inherits3.default)(RequestsIndex, _Component);

  function RequestsIndex() {
    (0, _classCallCheck3.default)(this, RequestsIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestsIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestsIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestsIndex, [{
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          request: request,
          id: index,
          key: index,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          sender = _props.sender,
          manager = _props.manager,
          account = _props.account;
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "All Requests")), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, account == manager ? null : _react2.default.createElement(_semanticUiReact.Button, {
        floated: "right",
        content: "Add Request",
        icon: "add circle",
        labelPosition: "right",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Found ", this.props.requestsCount, " requests.")))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement(_semanticUiReact.Table, { celled: true, color: "red", selectable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Amount (ether)"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Approval Count"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, this.renderRows())), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, icon: "arrow left", content: "Back", __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestsCount, approversCount, manager, sender, account, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                _context.next = 3;
                return (0, _campaign2.default)(address);

              case 3:
                campaign = _context.sent;
                _context.next = 6;
                return campaign.methods.getRequestCount().call();

              case 6:
                requestsCount = _context.sent;
                _context.next = 9;
                return campaign.methods.approversCount().call();

              case 9:
                approversCount = _context.sent;
                _context.next = 12;
                return campaign.methods.manager().call();

              case 12:
                manager = _context.sent;
                _context.next = 15;
                return campaign.methods.getSender().call();

              case 15:
                sender = _context.sent;
                _context.next = 18;
                return _web2.default.eth.accounts[0];

              case 18:
                account = _context.sent;

                _web2.default.eth.getAccounts(function (err, res) {
                  console.log(res[0]);
                });
                //console.log(account);

                _context.next = 22;
                return _promise2.default.all(Array(parseInt(requestsCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 22:
                requests = _context.sent;
                return _context.abrupt("return", {
                  address: address,
                  requestsCount: requestsCount,
                  requests: requests,
                  approversCount: approversCount,
                  manager: manager,
                  sender: sender,
                  account: account
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestsIndex;
}(_react.Component);

exports.default = RequestsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiVGFibGUiLCJMaW5rIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93Iiwid2ViMyIsIlJlcXVlc3RzSW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50Iiwic2VuZGVyIiwibWFuYWdlciIsImFjY291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlcXVlc3RzQ291bnQiLCJyZW5kZXJSb3dzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIiwiZ2V0U2VuZGVyIiwiZXRoIiwiYWNjb3VudHMiLCJnZXRBY2NvdW50cyIsImVyciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFNOztBQUM3QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7aUNBa0NTO21CQUNYOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUNFLEFBQUM7bUJBQUQsQUFDVyxBQUNUO2NBRkYsQUFFTSxBQUNKO2VBSEYsQUFHTyxBQUNMO21CQUFTLE9BQUEsQUFBSyxNQUpoQixBQUlzQixBQUNwQjsw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QUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBaEMsQUFBc0M7b0JBQXRDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsTUFBaEIsQUFBcUIsY0FBYSxTQUFsQyxBQUEwQztvQkFBMUM7c0JBbERSLEFBQ0UsQUErQ0UsQUFDRSxBQUNFLEFBS1Q7QUFMUzs7Ozs7OzJHQXBHbUIsQTs7Ozs7bUJBQ25CO0EsMEJBQVksTSxBQUFNLE0sQUFBbEI7O3VCQUVlLHdCQUFBLEEsQUFBUzs7bUJBQTFCO0E7O3VCQUNzQixTQUFBLEFBQVMsUUFBVCxBQUFpQixrQixBQUFqQixBQUFtQzs7bUJBQXpEO0E7O3VCQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQkFBakIsQUFBa0MsQTs7bUJBQXpEO0E7O3VCQUNnQixTQUFBLEFBQVMsUUFBVCxBQUFpQixVQUFqQixBQUEyQixBOzttQkFBM0M7QTs7dUJBQ2UsU0FBQSxBQUFTLFFBQVQsQUFBaUIsWUFBakIsQUFBNkIsQTs7bUJBQTVDO0E7O3VCQUNnQixjQUFBLEFBQUssSUFBTCxBQUFTLFNBQVQsQSxBQUFrQjs7bUJBQWxDO0EsbUNBRU47OzhCQUFBLEFBQUssSUFBTCxBQUFTLFlBQVksVUFBQSxBQUFDLEtBQUQsQUFBTSxLQUFRLEFBQ3BCOzBCQUFBLEFBQVEsSUFBSSxJQUFaLEFBQVksQUFBSSxBQUNqQjtBQUZkLEFBR0E7Ozs7eUNBRXVCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZ0JBQWYsQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBQUxrQixBQUNyQixBLGlCQUFBLENBRHFCOzttQkFBakI7QTs7MkJBT0MsQUFFTDtpQ0FGSyxBQUdMOzRCQUhLLEFBSUw7a0NBSkssQUFLTDsyQkFMSyxBQU1MOzBCQU5LLEFBT0w7MkIsQUFQSztBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF4QnNCLEEsQUE2RzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2plcnJ5L2tpY2tzdGFydCJ9