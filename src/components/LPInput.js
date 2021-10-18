import { Input } from "antd";

const { Search } = Input;

// Masterchef input component that calls the injected onStart method with the masterchef address as parameter
function LPInput(props) {
  const { onStart, disabled } = props;
  return (
    <Search
      placeholder="Enter LP token Address"
      allowClear
      enterButton="Break"
      size="large"
      onSearch={onStart}
      disabled={disabled}
    />
  );
}

export default LPInput;
