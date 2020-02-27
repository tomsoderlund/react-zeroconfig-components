# React Zero-Config Components

React components that require _zero_ configuration.


## Installation

    yarn add react-zeroconfig-components  # or: npm install react-zeroconfig-components


## Accessibility

- [x] All components use `button` where applicable
- [x] Keyboard/tab support


## Styling

Styling is optional, CSS files are included but you can also use `styled-components` or similar.

How to import CSS file, example:

    import '../node_modules/react-zeroconfig-components/dist/TokenList.css'


## Components

See the Storybook stories in `/stories` to see how the components are used in code, including more advanced use cases.

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

### RadioButtons

    <RadioButtons
      options={arrayOfStringsOrObjects}
      value={currentValue}
      onChange={event => handleChange(event)}
    />

![RadioButtons](docs/RadioButtons.png)

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

Advanced example:

    <TabMenu
      options={arrayOfStringsOrObjects}
      value={currentValue}
      onChange={handleChange}
      
      elementType='nav'
      customChild={MyCustomComponent}
    />

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
      value={smallerArrayOfStringsOrObjects}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />

![TokenInput](docs/TokenInput.png)

### TokenSearchInput

    <TokenSearchInput
      value={arrayOfStringsOrObjects}
      onSearch={async (searchText) => { return foundMatch }}
      onAdd={handleAdd}
      onRemove={handleRemove}

      placeholder='Type here to search'
      canAddAny={true}
    />

![TokenSearchInput](docs/TokenSearchInput.png)

### SearchInput

    <SearchInput
      onSearch={async (searchText) => { return foundMatch }}
      onSubmit={handleSubmit}

      placeholder='Type here to search'
      canSubmitAny={true}
    />

![SearchInput](docs/SearchInput.png)

### Card

    <Card
      layer={0}
      visible={isVisible}
      onClose={event => setIsVisible(!isVisible)}
    >
      (...content...)
    </Card>
    <Card
      layer={1}
      ...
    />

![Card](docs/Card.png)


## Events

- `onAdd`
- `onChange`
- `onClose`
- `onRemove`
- `onSearch`
- `onSelect`
- `onSubmit`


## Developing components

### Create new component

    yarn new

### How to test and preview

Preview components in Storybook:

    yarn storybook

...then open http://localhost:6006/ in your browser.

![storybook](docs/storybook.jpg)

### How to build and deploy

    yarn publish  # yarn prepare (Babel) will be run automatically
