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
            lineNumber: 29
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "All Requests")), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: "right",
        content: "Add Request",
        icon: "add circle",
        labelPosition: "right",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Found ", this.props.requestsCount, " requests.")))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement(_semanticUiReact.Table, { celled: true, color: "red", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Amount (ether)"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Approval Count"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, this.renderRows())), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, icon: "arrow left", content: "Back", __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestsCount, approversCount, requests;
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
                return _promise2.default.all(Array(parseInt(requestsCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 12:
                requests = _context.sent;
                return _context.abrupt("return", { address: address, requestsCount: requestsCount, requests: requests, approversCount: approversCount });

              case 14:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiVGFibGUiLCJMaW5rIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93IiwiUmVxdWVzdHNJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlcXVlc3RzQ291bnQiLCJyZW5kZXJSb3dzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVEsQUFBTTs7QUFDN0IsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7O2lDQWtCUzttQkFDWDs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUNQLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3RCOytCQUFPLEFBQUM7bUJBQUQsQUFDSSxBQUNUO2NBRkssQUFFRCxBQUNKO2VBSEssQUFHQSxBQUNMO21CQUFTLE9BQUEsQUFBSyxNQUpULEFBSWUsQUFDcEI7MEJBQWdCLE9BQUEsQUFBSyxNQUxoQixBQUtzQjs7c0JBTHRCO3dCQUFQLEFBQU8sQUFPUjtBQVBRO0FBQ0wsU0FESztBQUZULEFBQU8sQUFVUixPQVZROzs7OzZCQVlBO1VBQUEsQUFDQSxTQURBLEFBQ2lDLHVCQURqQyxBQUNB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QUFZLE1BQU0sQSxNQUFsQixBOzt1QkFFZSx3QkFBQSxBQUFTLEE7O21CQUExQjtBOzt1QkFDc0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsa0JBQWpCLEFBQW1DLEE7O21CQUF6RDtBOzt1QkFDdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUJBQWpCLEEsQUFBa0M7O21CQUF6RDtBOzt5Q0FFaUIsQUFBUSxVQUN2QixTQUFOLEFBQU0sQUFBUyxnQkFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3pDO0EsQUFMa0IsQUFDckIsaUJBQUEsQ0FEcUI7O21CQUFqQjtBO2lEQU9DLEVBQUUsU0FBRixTQUFXLGVBQVgsZUFBMEIsVUFBMUIsVUFBb0MsZ0JBQXBDLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmaUIsQSxBQTBGNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamVycnkva2lja3N0YXJ0In0=