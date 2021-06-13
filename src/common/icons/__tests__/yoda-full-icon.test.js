import React from "react";
import { shallow } from "enzyme";
import { createEnzymeAdapter } from "../../../../test/enzyme-adapter";
import { YodaFullIcon } from "../yoda-full-icon";

createEnzymeAdapter();

describe("<YodaFullIcon />", () => {
  const mockedBaseProps = {
    size: 150,
  };

  test("should get the correct DarthVaderIcon path", () => {
    const wrapper = shallow(<YodaFullIcon {...mockedBaseProps} />);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
