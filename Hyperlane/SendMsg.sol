function dispatch(
    uint32 destinationDomain,
    bytes32 recipientAddress,
    bytes calldata messageBody
) external payable returns (bytes32 messageId);
IMailbox mailbox = IMailbox("0xEf9F292fcEBC3848bF4bB92a96a04F9ECBb78E59");
bytes32 messageId = mailbox.dispatch{value: msg.value}(
  97,
  "0x0000000000000000000000006489d13AcAd3B8dce4c5B31f375DE4f9451E7b38",
  bytes("Hello, world")
);

function quoteDispatch(
    uint32 destinationDomain,
    bytes32 recipientAddress,
    bytes calldata messageBody
) external view returns (uint256 fee) {
IMailbox mailbox = IMailbox("0xEf9F292fcEBC3848bF4bB92a96a04F9ECBb78E59");
uint32 destination = 97;
bytes32 recipient = "0x0000000000000000000000006489d13AcAd3B8dce4c5B31f375DE4f9451E7b38";
bytes memory body = bytes("Hello, world");
uint256 fee = mailbox.quoteDispatch(destination, recipient, body);
mailbox.dispatch{value: fee}(destination, recipient, body);}

function requiredHook() external view returns (IPostDispatchHook);
function defaultHook() external view returns (IPostDispatchHook);
