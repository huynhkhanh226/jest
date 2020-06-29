import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MyApp, IProps } from './MyApp';

const findFibeNode = (el: any) => {
  for (const key in el) {
    if (key.startsWith('__reactEventHandlers$')) {
      const fiberNode = el[key];
      return fiberNode;
    }
  }
}

const renderMyApp = (props: Partial<IProps> = {}) => {
  const defaultProps: IProps = {
    name: "",
    placeholder: "string",
  };
  return render(<MyApp {...defaultProps} {...props} />);
}

test('renders learn react link', async () => {
  const { container } = renderMyApp({ name: "khanh" });
  const el: any = await container.querySelector("textarea");
  const fiberNode = findFibeNode(el);
  expect(fiberNode && fiberNode.hasOwnProperty("maxLength")).toBeFalsy();
});
