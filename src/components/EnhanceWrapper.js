import React, { Component } from 'react';
import Student from './Student';

function EnhanceWrapper(WrappedComponent) {
  return class WrapperComponent extends WrappedComponent {
      constructor(props) {
          super(props);
          console.log('WrapperComponent constructor'); // eslint-disable-line
          this.handleClick = this.handleClick.bind(this);
      }
      componentDidMount(...argus) {
          console.log('WrapperComponent componentDidMount'); // eslint-disable-line
          super.componentDidMount()
          /* if (didMount) {
              didMount.apply(this, argus);
          } */
      }
      handleClick() {
          this.inputElement.focus();
      }
      render() {
          return (<div>
              {super.render()}
              <p>姓名：{this.state.name}</p>
              <input
                  type="button"
                  value="focus子组件input"
                  onClick={this.handleClick}
              />
              <input
                  type="button"
                  value="调用子组件static"
                  onClick={WrapperComponent.sayHello}
              />
          </div>);
      }
  };
}

const WrapperComponent = EnhanceWrapper(Student);
WrapperComponent.sayHello()
export default WrapperComponent