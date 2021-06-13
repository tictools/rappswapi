import React from "react";
import { shallow } from "enzyme";
import { createEnzymeAdapter } from "../../../../../test/enzyme-adapter";
import {
  DEFAULT_STRING,
  MAPPED_ITEMS_RESOURCE,
  INITIAL_VALUE,
} from "../../../constants";
import { Loader } from "../../loader/loader";
import { CategorySection } from "../category-section";
import { CategoryList } from "../category-list";
import { CategoryItems } from "../category-items";

createEnzymeAdapter();

describe("CategorySection", () => {
  const EXPECTED = {
    RENDERED_LENGTH: 1,
    NON_RENDERED_LENGTH: 0,
  };
  const mockedBaseProps = {
    category: "foo",
    data: [{ name: "bar", films: 8 }],
    isLoading: false,
  };
  const mockedPropsWithData = {
    ...mockedBaseProps,
    data: [
      { name: "buzz", films: 1 },
      { name: "bar", films: 2 },
    ],
  };

  const [sorterName] = MAPPED_ITEMS_RESOURCE.NAME_AND_FILM;

  test("should render properly CategoryList when isLoading is false ", () => {
    const wrapper = shallow(<CategorySection {...mockedBaseProps} />);
    const categoryList = wrapper.find(CategoryList);
    const loader = wrapper.find(Loader);
    const itemsList = wrapper.find(CategoryItems);

    expect(categoryList.props().title).toBe("foo");
    expect(itemsList.props().items).toBeInstanceOf(Array);
    expect(loader).toHaveLength(EXPECTED.NON_RENDERED_LENGTH);
  });

  test("should render properly CategoryList when isLoading is true ", () => {
    const mockedBasePropsWithIsLoadingTrue = {
      ...mockedBaseProps,
      isLoading: true,
    };

    const wrapper = shallow(
      <CategorySection {...mockedBasePropsWithIsLoadingTrue} />
    );
    const categoryList = wrapper.find(CategoryList);
    const loader = wrapper.find(Loader);
    const itemsList = wrapper.find(CategoryItems);

    expect(categoryList).toHaveLength(EXPECTED.NON_RENDERED_LENGTH);
    expect(itemsList).toHaveLength(EXPECTED.NON_RENDERED_LENGTH);
    expect(loader).toHaveLength(EXPECTED.RENDERED_LENGTH);
  });

  test("componentDidUpdate should call setState", () => {
    const prevMockedProps = {
      ...mockedBaseProps,
      data: [{ title: "foo", quantity: 10 }],
    };

    const wrapper = shallow(<CategorySection {...mockedBaseProps} />);
    wrapper.instance().componentDidUpdate(prevMockedProps);
    wrapper.instance().componentDidUpdate(prevMockedProps);
    expect(wrapper.instance().state.labels).toEqual({
      name: "title",
      quantity: "quantity",
    });
  });

  test("handleSort should call sortData when sorter is valid", () => {
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    instance.isSorterValid = jest.fn(() => !!sorterName);
    instance.sortData = jest.fn();
    instance.handleSort(sorterName);

    expect(instance.isSorterValid).toHaveBeenCalled();
    expect(instance.sortData).toHaveBeenCalled();
  });

  test("handleSort should call resetSortData when sorter is invalid", () => {
    const sorterName = INITIAL_VALUE.NULL;
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    instance.isSorterValid = jest.fn(() => !!sorterName);
    instance.resetSortData = jest.fn();
    instance.handleSort(sorterName);

    expect(instance.isSorterValid).toHaveBeenCalled();
    expect(instance.resetSortData).toHaveBeenCalled();
  });

  test("handleFilter should call handleFilter when filter is valid", () => {
    const filter = "bar";
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    instance.isFilterValid = jest.fn(() => !!filter);
    instance.filterData = jest.fn();
    instance.handleFilter(filter);

    expect(instance.isFilterValid).toHaveBeenCalled();
    expect(instance.filterData).toHaveBeenCalled();
  });

  test("handleFilter should call resetFilterData when filter is INvalid", () => {
    const filter = DEFAULT_STRING.EMPTY;
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    instance.isFilterValid = jest.fn(() => !!filter);
    instance.resetFilterData = jest.fn();
    instance.handleFilter(filter);

    expect(instance.isFilterValid).toHaveBeenCalled();
    expect(instance.resetFilterData).toHaveBeenCalled();
  });

  test("isFilterValid should return expected value", () => {
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);
    const instance = wrapper.instance();

    const validFilter = "bar";
    expect(instance.isFilterValid(validFilter)).toBeTruthy();

    const invalidFilter = DEFAULT_STRING.EMPTY;
    expect(instance.isFilterValid(invalidFilter)).toBeFalsy();
  });

  test("filterData should call expected methods", () => {
    const filter = "bar";
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    instance.getDataOrFilteredItems = jest.fn();
    instance.setState = jest.fn();

    instance.filterData(filter);
    expect(instance.getDataOrFilteredItems).toHaveBeenCalled();
    expect(instance.setState).toHaveBeenCalled();
  });

  test("sortData should call expected methods", () => {
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    instance.shouldBeReversed = jest.fn();
    instance.setState = jest.fn();

    instance.sortData(sorterName);
    expect(instance.shouldBeReversed).toHaveBeenCalled();
    expect(instance.setState).toHaveBeenCalled();
  });

  test("resetFilterData should call expected methods", () => {
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    instance.sortData = jest.fn();

    instance.resetFilterData(sorterName);
    expect(instance.sortData).toHaveBeenCalled();
  });

  test("resetSortData should call expected methods", () => {
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    instance.setState = jest.fn();

    instance.resetSortData();
    expect(instance.setState).toHaveBeenCalled();
  });

  test("isSorterValid should return expected value", () => {
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    const resultWithValidSorter = instance.isSorterValid(sorterName);
    expect(resultWithValidSorter).toBeTruthy();

    const resultWithNullSorter = instance.isSorterValid(INITIAL_VALUE.NULL);
    expect(resultWithNullSorter).toBeFalsy();
  });

  test("shouldBeReversed should return expected value", () => {
    const wrapper = shallow(<CategorySection {...mockedPropsWithData} />);

    const instance = wrapper.instance();
    const resultWithFilmsOption = instance.shouldBeReversed("films");
    expect(resultWithFilmsOption).toBeTruthy();

    const resultWithCharactersOption = instance.shouldBeReversed("characters");
    expect(resultWithCharactersOption).toBeTruthy();

    const resultWithInvalidOption = instance.shouldBeReversed("foo");
    expect(resultWithInvalidOption).toBeFalsy();
  });
});
