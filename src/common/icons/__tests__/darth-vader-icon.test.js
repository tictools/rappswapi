import React from "react";
import { shallow } from "enzyme";
import { createEnzymeAdapter } from "../../../../test/enzyme-adapter";
import { DarthVaderIcon } from "../darth-vader-icon";

createEnzymeAdapter();

describe("<DarthVaderIcon />", () => {
  const mockedBaseProps = {
    size: 150,
  };

  test("should get the correct DarthVaderIcon path", () => {
    const wrapper = shallow(<DarthVaderIcon {...mockedBaseProps} />);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
