import * as React from "react";

export interface AddressComponentProps {
    title: String,
    buttonLabel : String
}

export interface AddressComponentState {}

class AddressComponent extends React.Component<
  AddressComponentProps,
  AddressComponentState
> {
  constructor(props: AddressComponentProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <>
        <h2>{this.props.title}</h2>
        <label>Address: </label>
        <input type="text"/>
        <button>{this.props.buttonLabel}</button>
    </>;
  }
}

export default AddressComponent;