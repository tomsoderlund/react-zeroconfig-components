# React Zero-Config Components

React components that require _zero_ configuration.

Note: no styling, CSS must be applied elsewhere in your code.


## Installation

    yarn add react-zeroconfig-components  # or: npm install react-zeroconfig-components


## How to use

Preview components in Storybook:

    yarn storybook

...then open http://localhost:6006/ in your browser.


## Components

See the Storybook stories in `/stories` to see how the components are used.


### Table

    <Table
      array={arrayOfObjects}
      customFormat={customTableFormat}
    />

    const customTableFormat = (options, field, value) => {
    }

![Table](docs/Table.png)

### SelectDropdown

    <SelectDropdown
      options={arrayOfStringsOrObjects}
      value={currentValue}
      onChange={event => handleChange(event)}
    />

![SelectDropdown](docs/SelectDropdown.png)


## How to build

    yarn prepare
