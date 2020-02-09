# React Zero-Config Components

React components that require _zero_ configuration.


## Installation

    yarn add react-zeroconfig-components  # or: npm install react-zeroconfig-components


## Styling

Styling is optional, CSS files are included but you can also use `styled-components` or similar.

How to import CSS file, example:

    import '../node_modules/react-zeroconfig-components/dist/TokenList.css'


## Components

See the Storybook stories in `/stories` to see how the components are used in code.


### List

    <List
      values={arrayOfObjects}
      ordered={false}
      customFormat={optionalCustomFormat}
    />

    const optionalCustomFormat = (row) => {
      /* return formatted value */
    }

![List](docs/List.png)

### Table

    <Table
      values={arrayOfObjects}
      customFormat={optionalCustomFormat}
    />

    const optionalCustomFormat = (field, value) => {
      /* return formatted value */
    }

![Table](docs/Table.png)

### SelectDropdown

    <SelectDropdown
      options={arrayOfStringsOrObjects}
      value={currentValue}
      onChange={event => handleChange(event)}
    />

![SelectDropdown](docs/SelectDropdown.png)

### SelectMenu

    <SelectMenu
      options={arrayOfStringsOrObjects}
      value={currentValue}
      onChange={event => handleChange(event)}
    />

![SelectMenu](docs/SelectMenu.png)

### TabMenu

    <TabMenu
      options={arrayOfStringsOrObjects}
      value={currentValue}
      onChange={event => handleChange(event)}
    />

![TabMenu](docs/TabMenu.png)

### TokenList

    <TokenList
      options={arrayOfStringsOrObjects}
      value={currentValue}
      onRemove={token => onRemove(token)}
    />

![TokenList](docs/TokenList.png)

### TokenInput

    <TokenInput
      options={arrayOfStringsOrObjects}
      value={currentValue}
      onChange={event => handleChange(event)}
    />

![TokenInput](docs/TokenInput.png)

### Card

    <Card
      layer={1}
      visible={isVisible}
      onClose={event => setIsVisible(!isVisible)}
    />

![Card](docs/Card.png)


## Developing components

### Create new component

    yarn new

### How to test and preview

Preview components in Storybook:

    yarn storybook

...then open http://localhost:6006/ in your browser.

### How to build and deploy

    yarn publish  # yarn prepare (Babel) will be run automatically
